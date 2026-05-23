# NewMe MVP Build Chunks and Sprint Plan

Source document reviewed: `/Users/pranav.saxena/Downloads/E NewME V2.0.docx`

## Product Thesis

NewMe should feel like a private beauty transformation coach with a doctor quietly protecting the user in the background.

The app should lead with:

- Event readiness, confidence, mirror progress, and visible change.
- Safe doctor supervision without making the experience feel like a disease-management app.
- Partner launch readiness for Flipkart, Amazon, PhonePe, PharmEasy, employers, insurers, and campaign links.
- Privacy-first handling of health data, photos, prescription workflows, and partner consent.

## MVP Assumptions

- Sprint length: 2 weeks.
- First sprint starts Monday, May 25, 2026.
- MVP scope focuses on P0 items from the PRD.
- P1 items are planned after the core safety and engagement loops work reliably.
- Initial build can use mock data where backend or clinical operations are not ready.
- Recommended front-end target: mobile-first React Native app, with architecture ready for webview/mini-app embedding.

## Recommended Navigation

The screenshots point to a clearer, more emotionally resonant navigation than the PRD's first pass:

- Today: event countdown, today's actions, coach note, dose/habit reminder.
- Plan: active plan, plan comparison, habit plan, medicine support if applicable.
- Mirror: photos, outfit-fit score, waist, bloating, cravings, weekly report.
- Care: doctor, coach, consults, side-effect help, escalation.
- Learn: medicine education, debloat content, protein/strength guides, safety explainers.

Profile, consent, payments, privacy, and settings can live behind the avatar/settings entry point. If compliance or partner requirements demand a persistent Profile tab, replace Learn with Profile for MVP and move Learn content inside Care.

## UX Direction From Screenshots

The attached design references are strong and should become the MVP's visual system.

### Visual Style

- Mobile-first, premium wellness app with soft clinical trust.
- Warm ivory background with pale mint, soft blue, light yellow, and deep teal accents.
- Large friendly greetings, calm whitespace, and stacked cards.
- Rounded cards, subtle borders, soft shadows, and pill-shaped CTAs.
- Bottom nav with simple icons and a highlighted active tab.
- Uppercase letter-spaced labels for trust markers and section headers.
- Direct, emotionally warm copy: "Good morning, Aanya", "3 small slim actions", "This week's mirror moment".

### Design Tokens

- Background: warm ivory / off-white.
- Primary: deep teal for actions and active states.
- Secondary: pale mint for health and habit cards.
- Accent: soft yellow for identity/avatar moments.
- Info surface: pale blue for feelings and check-in panels.
- Text: near-black for primary text, muted grey-green for supporting copy.
- Borders: very light grey-green.
- Shadows: soft, low opacity, mostly vertical.

### Screen Pattern

The Today screen should use this order:

1. Header with date, greeting, avatar, and trust badges.
2. Event countdown card with days left, secondary milestone, readiness progress, and weekly focus.
3. Today's 3 actions card with completion states.
4. Mirror moment card for weekly photo check-in.
5. Feeling/check-in panel for bloating, cravings, energy, and sleep.
6. Coach note card.
7. Dose/habit reminder card where applicable.
8. Sticky bottom navigation.

### UX Rules

- Show one main next action per card.
- Keep medical copy visible but calm.
- Avoid body-shaming language and aggressive promises.
- Do not make prescription support look like a shortcut.
- Make privacy visible wherever photos, partner consent, or medical data appear.
- Use icons for actions and nav items.
- Keep cards scannable and action-led, not explanatory.

## Build Chunks

| Chunk | Scope | Key Deliverables | Priority |
|---|---|---|---|
| C1 | App shell and navigation | React Native shell, bottom tabs, routing, auth placeholder, mock data framework | P0 |
| C2 | Design system | Colors, typography, cards, buttons, badges, metric tiles, progress bars, bottom nav | P0 |
| C3 | Partner launch and attribution | Deep link parsing, campaign metadata, partner landing state, attribution persistence | P0 |
| C4 | Beauty-led landing | Occasion promise, doctor-supervised trust markers, CTAs, partner-specific copy | P0 |
| C5 | Event onboarding | occasion, event date, height, weight, goal, body focus, comfort path | P0 |
| C6 | Safety and eligibility | clinical questionnaire, risk routing, eligibility states, high-risk guardrails | P0 |
| C7 | Plan recommendation | 30/60/90/180/post-event plans, compare view, doctor-guided vs lifestyle path | P0 |
| C8 | Today dashboard | countdown, 3 actions, readiness progress, coach note, habit/dose reminder | P0 |
| C9 | Progress check-ins | weight, waist, bloating, cravings, energy, sleep, outfit-fit score | P0 |
| C10 | Doctor consult booking | slots, language preference, doctor preference, lab/prescription upload entry points | P0 |
| C11 | Prescription status | upload, status states, validation placeholder, refill reminder hooks | P0 |
| C12 | Dose and habit tracker | prescribed and lifestyle task schedules, missed-dose safe routing | P0 |
| C13 | Side-effect triage | symptom intake, severity routing, urgent warnings, escalation logging | P0 |
| C14 | Consent and privacy | health data consent, partner sharing consent, revoke flow, photo privacy | P0 |
| C15 | Weekly report | photo-ready report with non-shaming progress summary | P1 |
| C16 | Photo vault | private uploads, date/angle tags, side-by-side compare, delete | P1 |
| C17 | NewYou AI preview | upload consent, illustrative preview, safety disclaimer, unsafe target rejection | P1 |
| C18 | Accountability partner | invite, limited view, revoke access, medical data hidden by default | P1 |
| C19 | Payments/subscriptions | plan purchase, UPI/autopay hooks, partner discounts | P1 |
| C20 | Advanced partner modes | webview hardening, SDK mode, API/tool integration | P2 |

## Sprint Plan

### Sprint 1: App Foundation and Visual System

Dates: May 25, 2026 to June 5, 2026

Goal: Create the modern NewMe shell and design language.

Build:

- App shell with bottom navigation: Today, Plan, Mirror, Care, Learn.
- Reusable components: card, pill button, icon button, trust badge, progress bar, metric tile, section label, CTA group.
- Design tokens inspired by screenshots.
- Mock user profile, event, plan, progress, doctor status, and partner metadata.
- Basic analytics event naming convention.
- Settings/avatar entry point for profile, privacy, and consent.

Definition of done:

- User can open the app and move across core tabs.
- UI visually matches the premium mint/teal/ivory direction.
- Components are reusable across future screens.
- No medical or partner data is hardcoded into UI logic.

### Sprint 2: Partner Launch and Beauty-Led Onboarding

Dates: June 8, 2026 to June 19, 2026

Goal: Let users enter from partners or direct launch and start an event plan.

Build:

- PartnerLaunchHandler for deep links and launch params.
- Partner-specific landing copy for Flipkart, Amazon, PhonePe, PharmEasy, employer, and generic campaign links.
- Beauty-led landing page with "Start my event plan" and "Check if this is safe for me".
- Event onboarding: occasion, event date, height, weight, target look, body focus, comfort level.
- Countdown generation, e.g. "87 days to your wedding".
- Attribution persistence through onboarding.

Definition of done:

- App opens correct partner landing based on metadata.
- User can complete event onboarding without partner dependency.
- Campaign metadata persists through signup/onboarding.
- Copy remains beauty-first and medically conservative.

### Sprint 3: Safety Check and Plan Recommendation

Dates: June 22, 2026 to July 3, 2026

Goal: Add safe clinical routing before plan recommendation.

Build:

- Safety and eligibility questionnaire.
- Risk rules for pregnancy/breastfeeding, under-18, eating disorder risk, pancreatitis, gallbladder disease, severe GI disease, kidney/liver disease, thyroid cancer history, current symptoms, prior GLP-1 usage.
- Eligibility states: lifestyle suitable, doctor review recommended, prescription support may be suitable after doctor consult, not suitable for prescription path, urgent doctor review.
- Plan recommendation engine using event date, user comfort, and safety state.
- Plan comparison cards for 30/60/90/180/post-event plans.

Definition of done:

- App never directly declares GLP-1 eligibility without doctor review.
- High-risk users are routed away from self-serve medicine paths.
- Plan recommendation matches timeline and comfort level.
- Unsafe target goals are rejected with calm copy.

### Sprint 4: Today Dashboard and Daily Actions

Dates: July 6, 2026 to July 17, 2026

Goal: Build the main engagement loop.

Build:

- Today screen based on screenshot pattern.
- Event readiness card with days left, milestone, weekly focus, and progress percentage.
- Today's 3 actions card with completion states.
- Coach note card.
- Habit reminder for lifestyle users.
- Dose reminder placeholder for prescribed users.
- Doctor safety status badge.
- Notification scheduling hooks for daily reminders.

Definition of done:

- User sees one clear next action within 2 seconds of opening Today.
- Daily actions can be completed and reflected in the UI.
- Medical reminders are present but not emotionally dominant.
- Dashboard supports both prescribed and lifestyle-only users.

### Sprint 5: Mirror, Progress Check-ins, and Photo Vault

Dates: July 20, 2026 to July 31, 2026

Goal: Make visible transformation measurable beyond weight.

Build:

- Mirror tab.
- Weekly mirror moment card.
- Private photo upload flow with front/side angle tags.
- Side-by-side compare placeholder.
- Progress check-ins: waist, weight, outfit fit, bloating, cravings, energy, sleep, face puffiness, protein.
- Feeling panel inspired by the screenshots.
- Delete photo flow and privacy reminders.

Definition of done:

- Weekly check-in can be completed in under 2 minutes.
- Photos are private by default and deletable.
- Progress language is positive and non-shaming.
- User can see trend-style feedback without relying only on weight.

### Sprint 6: Care, Consult Booking, and Prescription Status

Dates: August 3, 2026 to August 14, 2026

Goal: Connect the beauty experience to safe doctor-supervised care.

Build:

- Care tab.
- Doctor consult booking: slots, preferred language, female doctor preference where available.
- Lab upload and previous prescription upload entry points.
- Doctor plan summary placeholder.
- Prescription upload and status states: uploaded, under review, approved, rejected, needs clarification.
- Refill reminder hooks.
- Medicine support copy that only appears after valid Rx or doctor state.

Definition of done:

- Prescription path cannot bypass consult/valid Rx requirements.
- User can book consult and see follow-up state.
- Prescription status is clear.
- Medicine copy stays compliant and safety-first.

Prototype execution note: implemented in the static app with local persistence for consult booking, upload simulation, prescription status, gated approval, doctor summary, and refill reminder state.

### Sprint 7: Dose Tracker, Side-Effect Triage, and Consent

Dates: August 17, 2026 to August 28, 2026

Goal: Finish the clinical safety and privacy backbone.

Build:

- Dose schedule and missed-dose flow with doctor-approved routing.
- Lifestyle habit schedules for protein, water, walk, sleep, debloat, craving check.
- Side-effect tracker for nausea, vomiting, constipation, diarrhea, fatigue, dizziness, hypoglycemia symptoms, severe abdominal pain, vision symptoms, dehydration, mood changes, energy drop.
- Triage levels: mild, moderate, severe, red flag.
- Urgent care warnings for severe abdominal pain, persistent vomiting, hypoglycemia symptoms.
- Consent screens for health data processing and partner sharing.
- Consent revoke flow.
- Partner-visible event filtering.

Definition of done:

- Severe symptoms trigger appropriate escalation.
- Partner never receives health data by default.
- User can grant and revoke partner data consent.
- Dose and habit tracking are visible on Today.

Prototype execution note: implemented in the static app with local persistence for treatment habits, dose status, missed-dose protocol state, side-effect triage, consent toggles, revoke flow, and partner event filtering.

### Sprint 8: MVP Hardening and Beta Release

Dates: August 31, 2026 to September 11, 2026

Goal: Make the MVP stable, testable, and ready for controlled beta.

Build:

- Weekly photo-ready report MVP.
- Non-medical share version of report.
- Edge-case QA for under-18, pregnancy/breastfeeding, eating disorder risk, invalid prescription, urgent symptoms, event under 7 days, partner launch failure, consent revoke, photo delete.
- Performance tuning: app launch under 3 seconds, dashboard under 2 seconds.
- Security checks: encrypted transport assumptions, photo privacy, role-based access placeholders, audit log hooks.
- Hinglish-ready copy structure.
- Beta analytics dashboard spec.

Definition of done:

- P0 flows pass QA.
- MVP can be demoed end-to-end from partner launch to onboarding, safety check, plan, dashboard, progress, consult, prescription status, dose/habit, side-effect triage, and consent.
- Critical edge cases are handled without unsafe medical claims.

Prototype execution note: implemented in the static app with weekly report, share-safe report preview, P0 QA sweep, performance/security readiness checks, audit/analytics spec, and Hinglish copy preview.

## P1 Follow-on Sprints

### Sprint 9: NewYou Preview and Accountability Partner

Dates: September 14, 2026 to September 25, 2026

Build:

- NewYou AI preview upload and consent flow.
- Safe target validation and disclaimer.
- Generated preview history/delete flow.
- Accountability partner invite by phone/email/WhatsApp.
- Partner limited view with no medical data by default.

### Sprint 10: Growth, Payments, and Partner Hardening

Dates: September 28, 2026 to October 9, 2026

Build:

- Plan purchase flow.
- UPI/autopay hooks.
- Partner discounts and campaign variants.
- WebView/mini-app hardening.
- Partner analytics dashboard spec.
- Refill reminders.

## Release Slices

### Slice A: First-Time User Conversion

Includes: partner launch, landing, event onboarding, safety check, plan recommendation.

Success metrics:

- App launch to onboarding start.
- Onboarding completion.
- Eligibility completion.
- Plan viewed.
- Consult booking conversion.

### Slice B: Daily Engagement

Includes: Today dashboard, 3 actions, coach note, habit/dose reminder, check-ins.

Success metrics:

- Day 7 activation.
- Daily action completion.
- Weekly check-in rate.
- Habit/dose adherence.

### Slice C: Visible Progress

Includes: Mirror tab, photo vault, metrics, outfit-fit score, weekly report.

Success metrics:

- Mirror photo submission rate.
- Weekly report views.
- Outfit-fit score completion.
- Bloating/craving trend submissions.

### Slice D: Clinical Safety

Includes: consult booking, prescription status, side-effect triage, refill reminders, doctor escalation.

Success metrics:

- Consult booking conversion.
- Prescription status completion.
- Side-effect resolution SLA.
- High-risk escalation completion.

### Slice E: Partner and Privacy

Includes: attribution, consent, partner events, revocation, non-medical event sharing.

Success metrics:

- App-in-app conversion.
- Partner onboarding completion.
- Consent grant/revoke tracking.
- Zero health-data leakage to partners by default.

## Suggested MVP Backlog Cards

1. Create app shell with bottom tabs and mock data.
2. Build NewMe design tokens and shared components.
3. Parse launch params from deep links and campaign URLs.
4. Store partner attribution through onboarding.
5. Build beauty-led landing screen.
6. Build event onboarding flow.
7. Build body goal selector.
8. Generate personalized event countdown.
9. Build safety questionnaire.
10. Implement eligibility routing rules.
11. Build plan recommendation logic.
12. Build plan comparison UI.
13. Build Today dashboard.
14. Build today's 3 actions component.
15. Build coach note component.
16. Build habit reminder component.
17. Build prescribed dose reminder component.
18. Build Mirror tab.
19. Build weekly mirror photo upload.
20. Build photo privacy and delete flow.
21. Build progress check-in flow.
22. Build outfit-fit score component.
23. Build Care tab.
24. Build doctor consult booking.
25. Build lab and prescription upload entry points.
26. Build prescription status UI.
27. Build dose tracker.
28. Build missed-dose safe-routing state.
29. Build side-effect intake.
30. Build symptom triage rules.
31. Build urgent-care warning state.
32. Build consent modal.
33. Build consent revoke flow.
34. Build partner-visible event filter.
35. Build weekly report MVP.
36. Build non-medical share version.
37. QA critical edge cases.
38. QA mobile performance.
39. QA privacy and consent flows.
40. Prepare beta release checklist.

## Key Risks

- Medical compliance risk: prescription support must never look self-serve.
- AI image risk: NewYou preview must be clearly illustrative and reject unsafe body targets.
- Partner privacy risk: health data, photos, prescriptions, labs, side effects, and doctor notes must not be shared by default.
- Scope risk: P0 is already broad, so payments, NewYou AI, accountability partner, and advanced partner modes should stay P1/P2 unless the team has extra capacity.
- Emotional UX risk: language must remain aspirational without shame, panic, or unrealistic outcome promises.

## MVP Definition of Done

NewMe MVP is ready when a user can:

1. Open the app directly or through a partner campaign.
2. Understand the product within 5 seconds.
3. Complete event onboarding and safety assessment.
4. Receive a safe, timeline-aware plan recommendation.
5. Use the Today dashboard for daily actions.
6. Complete weekly progress and mirror check-ins.
7. Book a doctor consult when needed.
8. Upload/view prescription status without bypassing safety.
9. Track habits or dose safely.
10. Report side effects and receive appropriate routing.
11. Control partner consent and photo privacy.
