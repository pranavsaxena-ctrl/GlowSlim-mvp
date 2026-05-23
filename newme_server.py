#!/usr/bin/env python3
import base64
import json
import mimetypes
import os
import re
import ssl
import sys
import urllib.error
import urllib.request
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer


OPENAI_IMAGES_EDIT_URL = "https://api.openai.com/v1/images/edits"
DEFAULT_MODEL = "gpt-image-1.5"
DEFAULT_QUALITY = "high"
DEFAULT_SIZE = "auto"
DEFAULT_OUTPUT_FORMAT = "jpeg"
MAX_IMAGE_BYTES = 50 * 1024 * 1024
SYSTEM_CERT_FILE = "/etc/ssl/cert.pem"


def json_response(handler, status, payload):
  encoded = json.dumps(payload).encode("utf-8")
  handler.send_response(status)
  handler.send_header("Access-Control-Allow-Origin", "*")
  handler.send_header("Access-Control-Allow-Methods", "POST, OPTIONS")
  handler.send_header("Access-Control-Allow-Headers", "Content-Type")
  handler.send_header("Content-Type", "application/json")
  handler.send_header("Content-Length", str(len(encoded)))
  handler.end_headers()
  handler.wfile.write(encoded)


def parse_data_url(value):
  match = re.match(r"^data:(image/(?:png|jpeg|jpg|webp));base64,(.+)$", value or "", re.I | re.S)
  if not match:
    raise ValueError("input_image_url must be a png, jpg, jpeg, or webp data URL.")

  mime_type = match.group(1).lower().replace("image/jpg", "image/jpeg")
  try:
    image_bytes = base64.b64decode(match.group(2), validate=True)
  except ValueError as exc:
    raise ValueError("input_image_url contains invalid base64 image data.") from exc

  if not image_bytes:
    raise ValueError("input_image_url does not contain image bytes.")
  if len(image_bytes) > MAX_IMAGE_BYTES:
    raise ValueError("input image must be less than 50MB.")

  extension = mimetypes.guess_extension(mime_type) or ".jpg"
  return image_bytes, mime_type, f"mirror-current{extension}"


def multipart_form(fields, files):
  boundary = f"----newme-bmi-preview-{base64.urlsafe_b64encode(os.urandom(12)).decode('ascii')}"
  chunks = []

  for name, value in fields.items():
    if value is None:
      continue
    chunks.append(f"--{boundary}\r\n".encode("utf-8"))
    chunks.append(f'Content-Disposition: form-data; name="{name}"\r\n\r\n'.encode("utf-8"))
    chunks.append(str(value).encode("utf-8"))
    chunks.append(b"\r\n")

  for name, filename, content_type, data in files:
    chunks.append(f"--{boundary}\r\n".encode("utf-8"))
    chunks.append(
      f'Content-Disposition: form-data; name="{name}"; filename="{filename}"\r\n'.encode("utf-8")
    )
    chunks.append(f"Content-Type: {content_type}\r\n\r\n".encode("utf-8"))
    chunks.append(data)
    chunks.append(b"\r\n")

  chunks.append(f"--{boundary}--\r\n".encode("utf-8"))
  return boundary, b"".join(chunks)


def openai_ssl_context():
  cert_file = os.environ.get("SSL_CERT_FILE")
  if cert_file:
    return ssl.create_default_context(cafile=cert_file)
  if os.path.exists(SYSTEM_CERT_FILE):
    return ssl.create_default_context(cafile=SYSTEM_CERT_FILE)
  return ssl.create_default_context()


def openai_image_edit(body):
  api_key = os.environ.get("OPENAI_API_KEY")
  if not api_key:
    return 501, {
      "error": "OPENAI_API_KEY is not set for the local NewMe server.",
      "hint": "Run with OPENAI_API_KEY set to enable real BMI 22 image generation."
    }

  prompt = body.get("prompt")
  image_url = body.get("input_image_url")
  if not prompt:
    return 400, {"error": "Missing prompt."}
  if not image_url:
    return 400, {"error": "Missing input_image_url."}

  try:
    image_bytes, mime_type, filename = parse_data_url(image_url)
  except ValueError as exc:
    return 400, {"error": str(exc)}

  model = os.environ.get("NEWME_OPENAI_IMAGE_MODEL", DEFAULT_MODEL)
  fields = {
    "model": model,
    "prompt": prompt,
    "quality": os.environ.get("NEWME_OPENAI_IMAGE_QUALITY", DEFAULT_QUALITY),
    "size": os.environ.get("NEWME_OPENAI_IMAGE_SIZE", DEFAULT_SIZE),
    "output_format": os.environ.get("NEWME_OPENAI_IMAGE_FORMAT", DEFAULT_OUTPUT_FORMAT),
  }
  boundary, data = multipart_form(fields, [("image", filename, mime_type, image_bytes)])
  request = urllib.request.Request(
    OPENAI_IMAGES_EDIT_URL,
    data=data,
    headers={
      "Authorization": f"Bearer {api_key}",
      "Content-Type": f"multipart/form-data; boundary={boundary}",
    },
    method="POST",
  )

  try:
    with urllib.request.urlopen(request, timeout=180, context=openai_ssl_context()) as response:
      payload = json.loads(response.read().decode("utf-8"))
  except urllib.error.HTTPError as exc:
    raw = exc.read().decode("utf-8", errors="replace")
    try:
      detail = json.loads(raw)
    except json.JSONDecodeError:
      detail = raw
    return exc.code, {"error": "OpenAI image edit failed.", "detail": detail}
  except urllib.error.URLError as exc:
    return 502, {"error": "Could not reach OpenAI image edit endpoint.", "detail": str(exc.reason)}

  image = (payload.get("data") or [{}])[0]
  b64_json = image.get("b64_json")
  if not b64_json:
    return 502, {"error": "OpenAI response did not include b64_json image data.", "detail": payload}

  output_format = payload.get("output_format") or fields["output_format"] or "jpeg"
  return 200, {
    "imageDataUrl": f"data:image/{output_format};base64,{b64_json}",
    "model": model,
    "source": "openai_images_edit",
    "usage": payload.get("usage"),
  }


class NewMeHandler(SimpleHTTPRequestHandler):
  def end_headers(self):
    self.send_header("Cache-Control", "no-store")
    super().end_headers()

  def do_OPTIONS(self):
    self.send_response(204)
    self.send_header("Access-Control-Allow-Origin", "*")
    self.send_header("Access-Control-Allow-Methods", "POST, OPTIONS")
    self.send_header("Access-Control-Allow-Headers", "Content-Type")
    self.end_headers()

  def do_POST(self):
    if self.path != "/api/bmi-preview":
      json_response(self, 404, {"error": "Unknown endpoint."})
      return

    content_length = int(self.headers.get("Content-Length", "0"))
    try:
      body = json.loads(self.rfile.read(content_length).decode("utf-8"))
    except json.JSONDecodeError:
      json_response(self, 400, {"error": "Invalid JSON body."})
      return

    status, payload = openai_image_edit(body)
    json_response(self, status, payload)


def main():
  port = int(sys.argv[1]) if len(sys.argv) > 1 else int(os.environ.get("PORT", "8082"))
  host = os.environ.get("HOST", "127.0.0.1")
  httpd = ThreadingHTTPServer((host, port), NewMeHandler)
  print(f"GlowSlim local server running at http://{host}:{port}/")
  print("Set OPENAI_API_KEY to enable /api/bmi-preview.")
  httpd.serve_forever()


if __name__ == "__main__":
  main()
