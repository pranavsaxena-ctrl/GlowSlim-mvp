const OPENAI_IMAGES_EDIT_URL = 'https://api.openai.com/v1/images/edits';
const DEFAULT_MODEL = 'gpt-image-1.5';
const DEFAULT_QUALITY = 'high';
const DEFAULT_SIZE = 'auto';
const DEFAULT_OUTPUT_FORMAT = 'jpeg';
const MAX_IMAGE_BYTES = 50 * 1024 * 1024;

function json(res, status, payload) {
  res.statusCode = status;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(payload));
}

async function readJson(req) {
  if (req.body) {
    return typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
  }

  const chunks = [];
  for await (const chunk of req) {
    chunks.push(Buffer.from(chunk));
  }
  return JSON.parse(Buffer.concat(chunks).toString('utf8'));
}

function parseDataUrl(value) {
  const match = /^data:(image\/(?:png|jpeg|jpg|webp));base64,([\s\S]+)$/i.exec(value || '');
  if (!match) {
    throw new Error('input_image_url must be a png, jpg, jpeg, or webp data URL.');
  }

  const mimeType = match[1].toLowerCase().replace('image/jpg', 'image/jpeg');
  const imageBytes = Buffer.from(match[2], 'base64');
  if (!imageBytes.length) {
    throw new Error('input_image_url does not contain image bytes.');
  }
  if (imageBytes.length > MAX_IMAGE_BYTES) {
    throw new Error('input image must be less than 50MB.');
  }

  const extension = mimeType === 'image/png' ? 'png' : mimeType === 'image/webp' ? 'webp' : 'jpg';
  return {
    blob: new Blob([imageBytes], { type: mimeType }),
    filename: `mirror-current.${extension}`
  };
}

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    json(res, 405, { error: 'Method not allowed.' });
    return;
  }

  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    json(res, 501, {
      error: 'OPENAI_API_KEY is not set for the GlowSlim image endpoint.',
      hint: 'Set OPENAI_API_KEY in Vercel project environment variables.'
    });
    return;
  }

  let body;
  try {
    body = await readJson(req);
  } catch (error) {
    json(res, 400, { error: 'Invalid JSON body.' });
    return;
  }

  if (!body.prompt) {
    json(res, 400, { error: 'Missing prompt.' });
    return;
  }
  if (!body.input_image_url) {
    json(res, 400, { error: 'Missing input_image_url.' });
    return;
  }

  let image;
  try {
    image = parseDataUrl(body.input_image_url);
  } catch (error) {
    json(res, 400, { error: error.message });
    return;
  }

  const model = process.env.NEWME_OPENAI_IMAGE_MODEL || DEFAULT_MODEL;
  const outputFormat = process.env.NEWME_OPENAI_IMAGE_FORMAT || DEFAULT_OUTPUT_FORMAT;
  const form = new FormData();
  form.append('model', model);
  form.append('prompt', body.prompt);
  form.append('quality', process.env.NEWME_OPENAI_IMAGE_QUALITY || DEFAULT_QUALITY);
  form.append('size', process.env.NEWME_OPENAI_IMAGE_SIZE || DEFAULT_SIZE);
  form.append('output_format', outputFormat);
  form.append('image', image.blob, image.filename);

  let openAiResponse;
  try {
    openAiResponse = await fetch(OPENAI_IMAGES_EDIT_URL, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`
      },
      body: form
    });
  } catch (error) {
    json(res, 502, {
      error: 'Could not reach OpenAI image edit endpoint.',
      detail: error.message
    });
    return;
  }

  const payload = await openAiResponse.json().catch(() => ({}));
  if (!openAiResponse.ok) {
    json(res, openAiResponse.status, {
      error: 'OpenAI image edit failed.',
      detail: payload
    });
    return;
  }

  const imageData = (payload.data || [])[0] || {};
  if (!imageData.b64_json) {
    json(res, 502, {
      error: 'OpenAI response did not include b64_json image data.',
      detail: payload
    });
    return;
  }

  json(res, 200, {
    imageDataUrl: `data:image/${payload.output_format || outputFormat};base64,${imageData.b64_json}`,
    model,
    source: 'openai_images_edit',
    usage: payload.usage
  });
};
