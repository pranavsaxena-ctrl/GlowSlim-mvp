# GlowSlim MVP

This folder contains the executed Sprint 1 through Sprint 8 foundation for GlowSlim.

## What is included

- Mobile-first app shell.
- Bottom navigation: Profile, Today, Plan, Mirror, Care, Learn.
- Screenshot-inspired visual design tokens.
- Reusable UI renderers for cards, badges, CTAs, metric tiles, progress bars, icon buttons, action rows, and profile/settings panels.
- Mock user, event, partner, plan, progress, doctor status, and analytics data.
- Avatar/settings entry point with partner attribution and analytics event names.
- Partner launch parsing from URL params.
- Partner-specific beauty-led landing copy.
- Event onboarding flow for occasion, event date, height, weight, target look, body focus, and comfort level.
- Generated countdown and plan recommendation feeding the Today dashboard.
- Attribution persistence through onboarding using local storage.
- Safety and eligibility questionnaire after event onboarding.
- Risk routing for under-18 users, pregnancy/breastfeeding, eating disorder risk, clinical history, and red-flag symptoms.
- Plan recommendation screen with eligibility state, safe path copy, and plan comparison cards.
- Dashboard, Plan, Care, and Profile views updated from safety routing.
- Today dashboard engagement loop with stateful daily actions.
- Next-best-action card, doctor safety status card, habit/consult/dose reminder card, and reminder scheduling hooks.
- Local persistence for daily action completion and reminder intent.
- Mirror tab with outfit-fit score, private photo vault, side-by-side compare mode, and progress check-ins.
- Local persistence for mirror photos, metric adjustments, compare mode, and visible-progress state.
- Visible Progress success metrics for mirror photo submission rate, weekly report views, outfit-fit completion, and bloating/craving trend submissions.
- Care tab consult booking with slot, language, and female doctor preference.
- Lab and previous prescription upload entry points.
- Prescription status timeline with consult-gated approval.
- Doctor plan summary placeholder and follow-up state.
- Refill reminder hook unlocked only after approved prescription status.
- Today dose and habit tracker with local persistence.
- Missed-dose routing that shows doctor-approved safety protocol copy.
- Side-effect triage with mild, moderate, severe, and red-flag states.
- Health-data and partner-sharing consent controls with revoke flow.
- Partner-visible event filtering that hides health, photo, symptom, dose, and Rx events by default.
- Weekly photo-ready report MVP with live progress stats.
- Non-medical share-safe report preview.
- P0 edge-case QA sweep for beta readiness.
- Performance, security, audit-hook, and role-access placeholder checks.
- Beta analytics dashboard spec and Hinglish-ready copy preview.

## Run locally

```bash
python3 -m http.server 8081 --bind 127.0.0.1
```

Then open:

```text
http://127.0.0.1:8081
```

Partner launch demo:

```text
http://127.0.0.1:8081/?partner=phonepe&campaign=wedding_slim&source=health_card&entry_mode=deeplink
```

## Run with BMI 22 image generation

The Mirror tab can call a local `/api/bmi-preview` bridge so uploaded photos are sent to OpenAI from the server, not from browser JavaScript.

```bash
OPENAI_API_KEY=sk-... python3 newme_server.py 8082
```

Then open:

```text
http://127.0.0.1:8082
```

Optional model settings:

```bash
NEWME_OPENAI_IMAGE_MODEL=gpt-image-1.5
NEWME_OPENAI_IMAGE_QUALITY=high
NEWME_OPENAI_IMAGE_SIZE=auto
NEWME_OPENAI_IMAGE_FORMAT=jpeg
```

## Deploy to Vercel

This project is Vercel-ready as a static app with a serverless `/api/bmi-preview` endpoint.

Set this environment variable in Vercel if BMI image generation should work:

```text
OPENAI_API_KEY
```

Then deploy:

```bash
vercel --prod
```

## Sprint 1 definition of done mapping

- App shell with bottom tabs: complete.
- Reusable UI primitives: complete.
- Mock data framework: complete.
- Analytics event naming: complete.
- Profile/privacy/settings entry point: complete.
- Modern UX inspired by supplied screenshots: complete.

## Sprint 2 definition of done mapping

- PartnerLaunchHandler for URL metadata: complete.
- Partner-specific landing copy: complete.
- Beauty-led landing page with two CTAs: complete.
- Event onboarding: complete.
- Countdown generation: complete.
- Attribution persistence through onboarding: complete.
- Dashboard updated from onboarding output: complete.

## Sprint 3 definition of done mapping

- Safety and eligibility questionnaire: complete.
- Risk rules for pregnancy/breastfeeding, under-18, eating disorder risk, clinical risks, and red-flag symptoms: complete.
- Eligibility states: complete.
- Timeline-aware plan recommendation: complete.
- Plan comparison cards: complete.
- Prescription support kept locked unless doctor consult is appropriate: complete.

## Sprint 4 definition of done mapping

- Today dashboard based on screenshot pattern: complete.
- Event readiness card with daily rhythm progress: complete.
- Today's 3 actions with completion states: complete.
- Coach note, mirror moment, feelings panel: complete.
- Habit reminder for lifestyle users: complete.
- Consult/dose reminder variants for doctor-guided or treatment-aware users: complete.
- Doctor safety status badge/card: complete.
- Notification scheduling hooks: complete.

## Sprint 5 definition of done mapping

- Mirror tab: complete.
- Weekly mirror moment card: complete.
- Private photo upload simulation with front/side angle tags: complete.
- Side-by-side compare placeholder: complete.
- Progress check-ins for weight, waist, outfit fit, bloating, cravings, energy, sleep, face puffiness, protein, and glow: complete.
- Feeling panel backed by progress state: complete.
- Delete photo flow and privacy reminders: complete.

## Sprint 6 definition of done mapping

- Care tab: complete.
- Doctor consult booking with slots, language, and female doctor preference: complete.
- Lab upload and previous prescription upload entry points: complete.
- Doctor plan summary placeholder after booking/review: complete.
- Prescription upload and status states: complete.
- Refill reminder hooks: complete.
- Medicine support copy gated behind valid Rx approval: complete.
- Prescription path cannot bypass consult review before approval: complete.

## Sprint 7 definition of done mapping

- Dose schedule and missed-dose flow with doctor-approved routing: complete.
- Lifestyle habit schedules for protein, water, walk, sleep, debloat, and craving check: complete.
- Side-effect tracker for nausea, vomiting, constipation, diarrhea, fatigue, dizziness, hypoglycemia symptoms, severe abdominal pain, vision symptoms, dehydration, mood changes, and energy drop: complete.
- Triage levels for mild, moderate, severe, and red-flag symptoms: complete.
- Urgent warnings for severe abdominal pain, persistent vomiting, and hypoglycemia symptoms: complete.
- Consent controls for health data processing and partner sharing: complete.
- Consent revoke flow: complete.
- Partner-visible event filtering with health data hidden by default: complete.
- Dose and habit tracking visible on Today: complete.

## Sprint 8 definition of done mapping

- Weekly photo-ready report MVP: complete.
- Non-medical share version of report: complete.
- Edge-case QA for under-18, pregnancy/breastfeeding, eating disorder risk, invalid prescription, urgent symptoms, event under 7 days, partner launch failure, consent revoke, and photo delete: complete.
- Performance targets for launch and dashboard render surfaced: complete.
- Security checks for encrypted transport assumptions, photo privacy, role access placeholders, and audit hooks: complete.
- Hinglish-ready copy structure: complete.
- Beta analytics dashboard spec: complete.
- P0 flows pass QA in the prototype after running the QA sweep: complete.
