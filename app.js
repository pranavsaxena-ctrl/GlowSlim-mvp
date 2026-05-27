const icons = {
  today: '<path d="M12 3v3M12 18v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M3 12h3M18 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1"></path><path d="M12 8l1.5 2.9 3.2.5-2.3 2.2.5 3.2-2.9-1.5-2.9 1.5.5-3.2-2.3-2.2 3.2-.5L12 8Z"></path>',
  plan: '<path d="M8 2v4M16 2v4M3.5 9.5h17"></path><rect x="4" y="5" width="16" height="16" rx="3"></rect><path d="m9 15 2 2 4-5"></path>',
  mirror: '<path d="M8 7h8l1.5 3H20v9H4v-9h2.5L8 7Z"></path><circle cx="12" cy="14" r="3.5"></circle><path d="M9 7V5h6v2"></path>',
  care: '<path d="M8 3v7a4 4 0 0 0 8 0V3"></path><path d="M5 3h3M16 3h3M12 14v1a5 5 0 0 0 10 0v-1"></path><circle cx="22" cy="13" r="2"></circle>',
  learn: '<path d="M4 5.5A3.5 3.5 0 0 1 7.5 2H20v18H7.5A3.5 3.5 0 0 0 4 23V5.5Z"></path><path d="M4 19.5A3.5 3.5 0 0 1 7.5 16H20"></path>',
  bowl: '<path d="M4 12h16a8 8 0 0 1-16 0Z"></path><path d="M7 12c.3-3 2-5 5-5 2 0 3 1 3 1"></path><path d="M12 7c0-2 1.5-3 3-3"></path>',
  walk: '<path d="M13 5a2 2 0 1 0-2-2"></path><path d="m10 9 3 2 1 4"></path><path d="m9 21 2-6-3-2-2 4"></path><path d="m15 21-1-6"></path>',
  sparkle: '<path d="M12 3l1.7 5.2L19 10l-5.3 1.8L12 17l-1.7-5.2L5 10l5.3-1.8L12 3Z"></path><path d="M5 17l.7 2.1L8 20l-2.3.8L5 23l-.7-2.2L2 20l2.3-.9L5 17Z"></path>',
  camera: '<path d="M8 7h8l1.5 3H20v9H4v-9h2.5L8 7Z"></path><circle cx="12" cy="14" r="3"></circle>',
  shield: '<path d="M12 3 5 6v5c0 4.5 3 8.5 7 10 4-1.5 7-5.5 7-10V6l-7-3Z"></path><path d="m9 12 2 2 4-4"></path>',
  lock: '<rect x="5" y="10" width="14" height="10" rx="2"></rect><path d="M8 10V7a4 4 0 0 1 8 0v3"></path>',
  syringe: '<path d="m18 2 4 4"></path><path d="m17 7 2-2"></path><path d="M5 19 19 5"></path><path d="m9 15 2 2"></path><path d="m12 12 2 2"></path><path d="M5 19l-3 3"></path>',
  water: '<path d="M12 3s6 6.2 6 11a6 6 0 0 1-12 0c0-4.8 6-11 6-11Z"></path><path d="M9 15a3 3 0 0 0 3 3"></path>',
  moon: '<path d="M21 14.5A8.5 8.5 0 0 1 9.5 3a7 7 0 1 0 11.5 11.5Z"></path>',
  clock: '<circle cx="12" cy="12" r="9"></circle><path d="M12 7v5l3 2"></path>',
  heart: '<path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8Z"></path>',
  chart: '<path d="M4 19V5"></path><path d="M4 19h16"></path><path d="m7 15 4-4 3 3 5-7"></path>',
  chevron: '<path d="m9 18 6-6-6-6"></path>',
  check: '<path d="m5 12 4 4L19 6"></path>',
  bell: '<path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 7h18s-3 0-3-7"></path><path d="M10 21h4"></path>',
  user: '<circle cx="12" cy="8" r="4"></circle><path d="M4 21a8 8 0 0 1 16 0"></path>',
  card: '<rect x="3" y="5" width="18" height="14" rx="3"></rect><path d="M3 10h18"></path>',
  calendar: '<path d="M8 2v4M16 2v4M3.5 9.5h17"></path><rect x="4" y="5" width="16" height="16" rx="3"></rect>',
  ruler: '<path d="M4 19 19 4"></path><path d="m7 16 2 2M10 13l2 2M13 10l2 2M16 7l2 2"></path>',
  close: '<path d="M6 6l12 12M18 6 6 18"></path>'
};

const PROTOTYPE_TODAY = '2026-05-22';
const APP_NAME = 'GlowSlim';
const STORAGE_KEYS = {
  attribution: 'newme_partner_attribution',
  onboarding: 'newme_event_onboarding',
  safety: 'newme_safety_assessment',
  recommendation: 'newme_plan_recommendation',
  profile: 'newme_profile_inputs',
  daily: 'newme_daily_engagement',
  progress: 'newme_visible_progress',
  care: 'newme_care_workflow',
  treatment: 'newme_treatment_tracker',
  triage: 'newme_side_effect_triage',
  consent: 'newme_privacy_consent',
  foodAgent: 'newme_food_order_agent',
  commerceAgent: 'newme_woocommerce_cart_agent',
  beta: 'newme_beta_readiness'
};

const partnerCopy = {
  flipkart: {
    label: 'Flipkart Beauty',
    eyebrow: 'Fashion partner launch',
    headline: 'Look slimmer for your big moment.',
    copy: 'A wedding-ready body plan that starts from your fashion moment and stays medically supervised.',
    trust: 'Flipkart only receives non-health conversion events unless you consent.'
  },
  amazon: {
    label: 'Amazon Wellness',
    eyebrow: 'Wellness partner launch',
    headline: 'Get mirror-ready before your event.',
    copy: 'Start with your occasion, timeline, and safe body goals. Prescription support stays doctor-led.',
    trust: 'Wellness shopping context is stored for attribution, not medical sharing.'
  },
  phonepe: {
    label: 'PhonePe Health',
    eyebrow: 'UPI wellness launch',
    headline: 'Start a safe visible-change plan.',
    copy: 'Build an event plan now and keep payments or subscriptions ready for later sprints.',
    trust: 'Payment partner data is separated from health data by default.'
  },
  pharmeasy: {
    label: 'PharmEasy Care',
    eyebrow: 'Pharmacy partner launch',
    headline: 'Check if doctor-guided support is right for you.',
    copy: 'Begin with event readiness. Clinical safety, labs, consults, and Rx steps come only when needed.',
    trust: 'Prescription workflows stay gated behind doctor review.'
  },
  employer: {
    label: 'Employer wellness',
    eyebrow: 'Private wellness launch',
    headline: 'Feel lighter for your important date.',
    copy: 'Your body goals, photos, and health inputs stay private. Employers see only aggregate reporting later.',
    trust: 'No personal medical data is shared with your employer.'
  },
  generic: {
    label: APP_NAME,
    eyebrow: 'Beauty-first body transformation',
    headline: 'Look slimmer for your big moment.',
    copy: 'A private event-readiness plan for your body, outfit, confidence, and safety.',
    trust: 'No crash diets. No unsafe shortcuts. Doctor supervision stays in the background.'
  }
};

const occasionOptions = ['Wedding', 'Engagement', 'Photoshoot', 'Vacation', 'Reunion', 'Festival', 'Birthday', 'Health reasons', 'Other'];
const bodyFocusOptions = ['Waist', 'Belly', 'Face puffiness', 'Arms', 'Outfit fit', 'Energy', 'Cravings', 'Confidence'];
const comfortOptions = ['Lifestyle only', 'Doctor-guided medicine if suitable', 'Not sure, want expert advice'];
const sexOptions = ['Female', 'Male', 'Non-binary', 'Prefer not to say'];
const diabetesOptions = ['No / not sure', 'Prediabetes', 'Type 2 diabetes', 'Type 1 diabetes'];
const pregnancyOptions = ['No', 'Pregnant', 'Breastfeeding', 'Trying to conceive', 'Not applicable'];
const priorTreatmentOptions = ['No prior GLP-1 or weight-loss medicine', 'Currently using from another doctor', 'Used before', 'Not sure'];
const medicalRiskOptions = [
  'Pancreatitis',
  'Gallbladder disease',
  'Severe gastrointestinal disease',
  'Kidney disease',
  'Liver disease',
  'Thyroid cancer history',
  'Eating disorder risk'
];
const symptomOptions = [
  'None right now',
  'Severe abdominal pain',
  'Persistent vomiting',
  'Hypoglycemia symptoms',
  'Vision symptoms',
  'Dehydration',
  'Mood changes'
];
const consultSlots = [
  'Today 7:30 PM',
  'Tomorrow 9:00 AM',
  'Sat 11:30 AM'
];
const languageOptions = ['English', 'Hindi', 'Hinglish'];
const prescriptionStatuses = ['not_uploaded', 'uploaded', 'under_review', 'approved', 'rejected', 'needs_clarification'];
const lifestyleHabitSchedule = [
  { id: 'protein', icon: 'bowl', label: 'Protein', detail: 'Paneer, eggs, dal, or curd first', time: '08:00' },
  { id: 'water', icon: 'water', label: 'Water', detail: 'Small steady sips through the day', time: '11:00' },
  { id: 'walk', icon: 'walk', label: 'Walk', detail: '20 minutes, easy enough to repeat', time: '17:30' },
  { id: 'sleep', icon: 'moon', label: 'Sleep', detail: 'Phone down before the late craving window', time: '22:30' },
  { id: 'debloat', icon: 'sparkle', label: 'Debloat', detail: 'Warm water, slow dinner, less salt tonight', time: '19:00' },
  { id: 'craving', icon: 'heart', label: 'Craving check', detail: 'Pause, name it, choose the smallest useful next step', time: '20:30' }
];
const sideEffectOptions = [
  'Nausea',
  'Vomiting',
  'Persistent vomiting',
  'Constipation',
  'Diarrhea',
  'Fatigue',
  'Dizziness',
  'Hypoglycemia symptoms',
  'Severe abdominal pain',
  'Vision symptoms',
  'Dehydration',
  'Mood changes',
  'Energy drop'
];
const redFlagSideEffects = ['Severe abdominal pain', 'Persistent vomiting', 'Hypoglycemia symptoms'];
const severeSideEffects = ['Vision symptoms', 'Dehydration', 'Mood changes'];
const partnerEventAllowList = [
  'newme_app_opened',
  'newme_partner_launch_detected',
  'newme_partner_attribution_stored',
  'newme_landing_cta_tapped',
  'newme_onboarding_started',
  'newme_onboarding_completed',
  'newme_plan_recommended',
  'newme_tab_selected'
];
const betaQaChecks = [
  { id: 'under18', label: 'Under-18 route', detail: 'Self-serve plan blocks and routes to guardian or doctor review.' },
  { id: 'pregnancy', label: 'Pregnancy route', detail: 'Medicine support blocked with gentle lifestyle-only copy.' },
  { id: 'eating-disorder', label: 'Eating disorder risk', detail: 'Weight-loss pressure avoided and clinical support recommended.' },
  { id: 'invalid-rx', label: 'Invalid prescription', detail: 'Rx cannot bypass consult or approved status checks.' },
  { id: 'urgent-symptoms', label: 'Urgent symptoms', detail: 'Red-flag symptoms trigger escalation before dose or plan actions.' },
  { id: 'event-under-7', label: 'Event under 7 days', detail: 'Plan stays debloat/lifestyle-first without aggressive claims.' },
  { id: 'partner-failure', label: 'Partner launch failure', detail: 'Unknown partner params fall back to generic NewMe landing.' },
  { id: 'consent-revoke', label: 'Consent revoke', detail: 'Partner sharing turns off and health/private events stay hidden.' },
  { id: 'photo-delete', label: 'Photo delete', detail: 'Private photo vault supports delete and compare-mode fallback.' }
];
const betaSecurityChecks = [
  { id: 'transport', label: 'Encrypted transport', detail: 'Production build requires HTTPS/TLS at every partner and API boundary.' },
  { id: 'photo-privacy', label: 'Photo privacy', detail: 'Photos stay private by default with delete controls and device-lock copy.' },
  { id: 'role-access', label: 'Role access', detail: 'Care-team, partner, and user views are separated as implementation placeholders.' },
  { id: 'audit-hooks', label: 'Audit hooks', detail: 'Key safety, consent, Rx, and partner events are named for audit logging.' }
];
const betaAnalyticsSpec = [
  { id: 'activation', label: 'Activation', events: ['newme_partner_launch_detected', 'newme_onboarding_completed', 'newme_plan_recommended'] },
  { id: 'engagement', label: 'Engagement', events: ['newme_daily_action_completed', 'newme_habit_schedule_toggled', 'newme_mirror_photo_added'] },
  { id: 'clinical-safety', label: 'Clinical safety', events: ['newme_consult_booked', 'newme_prescription_status_changed', 'newme_side_effect_escalated'] },
  { id: 'privacy', label: 'Privacy', events: ['newme_health_consent_toggled', 'newme_partner_consent_revoked'] }
];
const copyLocaleOptions = ['English', 'Hinglish'];
const profileGoalOptions = [
  'Marriage',
  'Mirror Ready',
  'Big Day Body',
  'FitCheck',
  'Glow & Shape',
  'The 90-Day Slim Edit',
  'NewMe Beauty Body Plan'
];
const criticalDiseaseOptions = [
  'None',
  'Type 2 diabetes',
  'Hypertension',
  'PCOS',
  'Thyroid disorder',
  'Heart disease',
  'Kidney disease',
  'Liver disease',
  'Gallbladder disease',
  'Pancreatitis'
];
const defaultBiomarkers = [
  { id: 'hba1c', label: 'HbA1c', value: '', unit: '%' },
  { id: 'fasting_glucose', label: 'Fasting glucose', value: '', unit: 'mg/dL' },
  { id: 'ldl', label: 'LDL-C', value: '', unit: 'mg/dL' },
  { id: 'triglycerides', label: 'Triglycerides', value: '', unit: 'mg/dL' },
  { id: 'tsh', label: 'TSH', value: '', unit: 'mIU/L' }
];
const learnResourceLinks = [
  {
    title: 'GLP-1 learning video',
    source: 'YouTube',
    url: 'https://www.youtube.com/watch?v=vCVgO9rI2IU',
    detail: 'A quick watch before discussing treatment options with your care team.'
  },
  {
    title: 'GLP-1 agonists guide',
    source: 'Cleveland Clinic',
    url: 'https://my.clevelandclinic.org/health/treatments/13901-glp-1-agonists',
    detail: 'A clinician-reviewed reference on how GLP-1 agonists are used.'
  }
];
const healthyMealPrompt = 'I am on weight reduction plan. I eat high porotien low carb food. Daily calorie restriction is 1600Cal, No forzen or fried food. No spicy food. No gluten.';
const swiggyDietRules = ['High protein', 'Low carb', '1600Cal daily limit', 'No frozen food', 'No fried food', 'No spicy food', 'No gluten'];
const LOCAL_BMI_PREVIEW_ENDPOINT = 'http://127.0.0.1:8082/api/bmi-preview';
const REMOTE_BMI_PREVIEW_ENDPOINT = 'https://glow-slim-mvp.vercel.app/api/bmi-preview';
const MAX_UPLOAD_DIMENSION = 1024;
const UPLOAD_JPEG_QUALITY = 0.78;
const swiggyOrderShortlist = [
  {
    title: 'Gluten-free grilled protein bowl',
    detail: 'Paneer, tofu, egg, or chicken with salad, curd, and dressing on the side.',
    instruction: 'No wheat, no fried toppings, no chilli, no creamy sauce.'
  },
  {
    title: 'Egg or paneer protein plate',
    detail: 'Omelette, paneer bhurji, sprouts, cucumber, and plain curd.',
    instruction: 'Less oil, no masala heat, no bread, no frozen patty.'
  },
  {
    title: 'Dal + curd gluten-free meal',
    detail: 'Dal, curd, steamed vegetables, and a small rice or millet portion if needed.',
    instruction: 'No roti, no fried sides, no chilli tadka, no sugary drink.'
  }
];
const swiggySearchBaseUrl = 'https://www.swiggy.com/search?query=';
const wooCommerceProductQuery = 'slim fit jean';
const wooCommerceAgentRules = ['WooCommerce login handoff', 'Search slim fit jean', 'Customer chooses size', 'Add-to-cart only', 'No payment by agent'];

const planCatalog = [
  {
    name: '30-Day Debloat',
    duration: '30 days',
    promise: 'Reduce bloating, feel lighter',
    bestFor: 'Events within 45 days',
    progress: 'Bloating, cravings, protein rhythm',
    accent: 'blue'
  },
  {
    name: '60-Day Shape Shift',
    duration: '60 days',
    promise: 'Waist, cravings, outfit fit',
    bestFor: 'Events 46-75 days away',
    progress: 'Waist, energy, outfit readiness',
    accent: 'feature'
  },
  {
    name: '90-Day Wedding Slim',
    duration: '90 days',
    promise: 'Visible transformation before the big day',
    bestFor: 'Events 76-135 days away',
    progress: 'Mirror photos, waist, cravings, strength',
    accent: 'lilac'
  },
  {
    name: '180-Day Deep Reset',
    duration: '180 days',
    promise: 'Major body and metabolic transformation',
    bestFor: 'Longer transformation timelines',
    progress: 'Metabolic markers, habits, body composition',
    accent: 'coral'
  }
];

const mockData = {
  user: {
    name: 'Aanya',
    initial: 'A',
    dateLabel: 'Friday · 22 May',
    greeting: 'Good morning',
    tagline: 'One small step closer to feeling like you in that lehenga.'
  },
  partner: {
    partnerId: 'direct',
    campaignId: 'organic',
    source: 'standalone_app',
    entryMode: 'standalone',
    redirectUrl: '',
    consentStatus: 'Not shared'
  },
  event: {
    type: 'wedding',
    eventDate: '2026-08-17',
    daysLeft: 87,
    milestoneLabel: '12 weeks',
    milestoneDetail: 'until your event',
    readiness: 42,
    weeklyFocus: 'waist + bloating'
  },
  onboarding: {
    targetLook: 'feel lighter in my lehenga',
    height: '165',
    weight: '90',
    bodyFocus: ['Waist', 'Bloating'],
    comfortLevel: 'Not sure, want expert advice'
  },
  safety: {
    age: '29',
    sex: 'Female',
    waist: '86',
    diabetesStatus: 'No / not sure',
    hba1c: '',
    pregnancyStatus: 'No',
    medicalRisks: [],
    currentSymptoms: ['None right now'],
    existingMedications: '',
    priorTreatment: 'No prior GLP-1 or weight-loss medicine'
  },
  recommendation: {
    eligibilityState: 'doctor_review_recommended',
    label: 'Doctor review recommended',
    headline: 'Safety check needed before prescription support.',
    explanation: 'Your transformation plan can begin with lifestyle actions. A doctor should review before any prescription path.',
    recommendedPlan: '90-Day Wedding Slim',
    path: 'Doctor review before prescription support',
    severity: 'review',
    allowLifestyle: true,
    allowPrescriptionPrompt: false,
    reasons: ['Safety check pending']
  },
  daily: {
    date: PROTOTYPE_TODAY,
    completedActions: [],
    lastReminderIntent: '',
    lastUpdated: ''
  },
  foodAgent: {
    date: PROTOTYPE_TODAY,
    provider: 'Swiggy',
    connectionMode: 'direct_account_handoff',
    accountStatus: 'customer_controlled',
    customerLoginConfirmed: false,
    mobileNumber: '',
    maskedMobile: '',
    orderStatus: 'draft',
    prompt: healthyMealPrompt,
    rules: swiggyDietRules,
    shortlist: swiggyOrderShortlist,
    selectedIndex: 0,
    lastUpdated: ''
  },
  commerceAgent: {
    date: PROTOTYPE_TODAY,
    provider: 'WooCommerce',
    storeUrl: '',
    loginEmail: '',
    customerLoginConfirmed: false,
    taskStatus: 'store_needed',
    productQuery: wooCommerceProductQuery,
    rules: wooCommerceAgentRules,
    lastUpdated: ''
  },
  plan: {
    name: '90-Day Wedding Slim',
    path: 'Doctor-guided if suitable',
    price: 'Plan pricing pending',
    includes: ['Event plan', 'Safety check', 'Coach nudges', 'Doctor consult option']
  },
  progress: {
    date: PROTOTYPE_TODAY,
    compareMode: false,
    metrics: {
      weight: 73.4,
      waist: 86,
      outfitFit: 42,
      bloating: 3,
      cravings: 3,
      energy: 7,
      sleepMinutes: 440,
      facePuffiness: 2,
      protein: 82,
      steps: 6200,
      glow: 76
    },
    previous: {
      weight: 74.2,
      waist: 87.8,
      outfitFit: 34,
      bloating: 5,
      cravings: 7,
      energy: 6,
      sleepMinutes: 400,
      facePuffiness: 4,
      protein: 68,
      steps: 4800,
      glow: 64
    },
    photos: [
      { id: 'photo-baseline-front', date: '2026-05-15', angle: 'Front', label: 'Baseline', privacy: 'Private', tone: 'mint' },
      { id: 'photo-week-side', date: PROTOTYPE_TODAY, angle: 'Side', label: 'Week 2', privacy: 'Private', tone: 'blue' }
    ],
    lastUpdated: ''
  },
  care: {
    consultStatus: 'not_booked',
    selectedSlot: consultSlots[0],
    language: 'English',
    femaleDoctorPreferred: true,
    labsUploaded: false,
    prescriptionStatus: 'not_uploaded',
    prescriptionUpdatedAt: '',
    doctorSummaryStatus: 'pending_consult',
    followUpDate: '',
    refillReminderEnabled: false,
    refillDate: '',
    medicineAvailability: 'Hidden until valid Rx',
    lastUpdated: ''
  },
  treatment: {
    doseStatus: 'locked',
    habitCompletionPercent: 0,
    completedHabits: [],
    schedule: lifestyleHabitSchedule
  },
  triage: {
    selectedSymptoms: [],
    level: 'none',
    label: 'No symptoms logged'
  },
  consent: {
    healthDataProcessing: true,
    partnerSharing: false,
    partnerVisibleEvents: []
  },
  beta: {
    reportShareMode: 'private',
    qaPercent: 0,
    copyLocale: 'English'
  },
  doctorStatus: {
    label: 'Doctor supervised',
    detail: 'Safety check required before prescription support',
    careTeam: 'Dr. Meera + Coach Priya'
  },
  actions: [
    { id: 'protein-breakfast', icon: 'bowl', label: 'Protein-first breakfast', status: 'Done', done: true },
    { id: 'brisk-walk', icon: 'walk', label: '20 min brisk walk', status: 'Done', done: true },
    { id: 'craving-check', icon: 'sparkle', label: 'Evening craving check', status: 'Today', done: false }
  ],
  analyticsEvents: [
    'newme_app_opened',
    'newme_partner_launch_detected',
    'newme_partner_attribution_stored',
    'newme_landing_cta_tapped',
    'newme_onboarding_started',
    'newme_onboarding_step_completed',
    'newme_onboarding_completed',
    'newme_safety_started',
    'newme_safety_step_completed',
    'newme_safety_completed',
    'newme_plan_recommended',
    'newme_today_opened',
    'newme_daily_action_completed',
    'newme_daily_action_reopened',
    'newme_swiggy_order_agent_prepared',
    'newme_swiggy_mobile_entered',
    'newme_swiggy_customer_login_confirmed',
    'newme_swiggy_direct_handoff_opened',
    'newme_swiggy_order_checkout_blocked',
    'newme_woocommerce_store_saved',
    'newme_woocommerce_agent_prepared',
    'newme_woocommerce_login_handoff_opened',
    'newme_woocommerce_login_confirmed',
    'newme_woocommerce_product_search_opened',
    'newme_woocommerce_cart_handoff_opened',
    'newme_reminder_hook_scheduled',
    'newme_progress_metric_updated',
    'newme_weekly_report_viewed',
    'newme_outfit_fit_score_submitted',
    'newme_body_feel_trend_submitted',
    'newme_health_data_connected',
    'newme_mirror_photo_added',
    'newme_mirror_photo_deleted',
    'newme_photo_compare_toggled',
    'newme_consult_slot_selected',
    'newme_consult_preference_updated',
    'newme_consult_booked',
    'newme_labs_uploaded',
    'newme_prescription_uploaded',
    'newme_prescription_status_changed',
    'newme_refill_reminder_toggled',
    'newme_medicine_guardrail_viewed',
    'newme_habit_schedule_toggled',
    'newme_dose_status_updated',
    'newme_missed_dose_protocol_viewed',
    'newme_side_effect_logged',
    'newme_side_effect_escalated',
    'newme_health_consent_toggled',
    'newme_partner_consent_toggled',
    'newme_partner_consent_revoked',
    'newme_weekly_report_share_mode_toggled',
    'newme_beta_qa_sweep_run',
    'newme_beta_qa_check_toggled',
    'newme_beta_copy_locale_changed',
    'newme_tab_selected',
    'newme_avatar_settings_opened'
  ]
};

const tabs = [
  { id: 'profile', label: 'Profile', icon: 'user' },
  { id: 'today', label: 'Today', icon: 'today' },
  { id: 'plan', label: 'Plan', icon: 'plan' },
  { id: 'mirror', label: 'Mirror', icon: 'mirror' },
  { id: 'care', label: 'Care', icon: 'care' },
  { id: 'learn', label: 'Learn', icon: 'learn' }
];

let activeTab = 'profile';
const eventLog = ['newme_app_opened'];

const screen = document.querySelector('#screen');
const bottomNav = document.querySelector('#bottom-nav');
const profileSheet = document.querySelector('#profile-sheet');
const profileTitle = document.querySelector('#profile-title');
const profileContent = document.querySelector('#profile-content');
const mirrorPhotoInput = document.querySelector('#mirror-photo-input');

const storageUsable = canUseLocalStorage();
const initialLaunch = readLaunchParams();
const storedAttribution = readStoredJson(STORAGE_KEYS.attribution);
const storedOnboarding = readStoredJson(STORAGE_KEYS.onboarding);
const storedSafety = readStoredJson(STORAGE_KEYS.safety);
const storedRecommendation = readStoredJson(STORAGE_KEYS.recommendation);
const storedProfile = readStoredJson(STORAGE_KEYS.profile);
const storedDaily = readStoredJson(STORAGE_KEYS.daily);
const storedProgress = readStoredJson(STORAGE_KEYS.progress);
const storedCare = readStoredJson(STORAGE_KEYS.care);
const storedTreatment = readStoredJson(STORAGE_KEYS.treatment);
const storedTriage = readStoredJson(STORAGE_KEYS.triage);
const storedConsent = readStoredJson(STORAGE_KEYS.consent);
const storedFoodAgent = readStoredJson(STORAGE_KEYS.foodAgent);
const storedCommerceAgent = readStoredJson(STORAGE_KEYS.commerceAgent);
const storedBeta = readStoredJson(STORAGE_KEYS.beta);
const initialStage = 'app';

const appState = {
  stage: initialStage,
  onboardingStep: 0,
  safetyStep: 0,
  validationMessage: '',
  attribution: initialLaunch.hasLaunchParams ? initialLaunch.attribution : (storedAttribution || initialLaunch.attribution),
  onboarding: storedOnboarding || {
    occasion: 'Wedding',
    eventDate: addDays(PROTOTYPE_TODAY, 87),
    height: '165',
    weight: '90',
    targetLook: 'feel lighter in my lehenga',
    bodyFocus: ['Waist', 'Belly', 'Outfit fit'],
    comfortLevel: 'Not sure, want expert advice'
  },
  safety: storedSafety || {
    age: '29',
    sex: 'Female',
    waist: '86',
    diabetesStatus: 'No / not sure',
    hba1c: '',
    pregnancyStatus: 'No',
    medicalRisks: [],
    currentSymptoms: ['None right now'],
    existingMedications: '',
    priorTreatment: 'No prior GLP-1 or weight-loss medicine'
  },
  recommendation: storedRecommendation || null,
  profile: storedProfile || null,
  daily: storedDaily || createDefaultDailyState(),
  progress: storedProgress || createDefaultProgressState(),
  care: storedCare || createDefaultCareState(),
  treatment: storedTreatment || createDefaultTreatmentState(),
  triage: storedTriage || createDefaultTriageState(),
  consent: storedConsent || createDefaultConsentState(),
  foodAgent: storedFoodAgent || createDefaultFoodAgentState(),
  commerceAgent: storedCommerceAgent || createDefaultCommerceAgentState(),
  beta: storedBeta || createDefaultBetaState()
};

appState.profile = migrateProfileState(appState.profile, {
  onboarding: appState.onboarding,
  safety: appState.safety
});
syncProfileToPlanInputs(appState.profile);
saveJson(STORAGE_KEYS.profile, appState.profile);

if (initialLaunch.hasLaunchParams) {
  saveJson(STORAGE_KEYS.attribution, appState.attribution);
  logEvent('newme_partner_launch_detected', appState.attribution);
  logEvent('newme_partner_attribution_stored', appState.attribution);
}

if (appState.progress.currentBmi === '27.2') {
  appState.progress.currentBmi = '37';
  appState.progress.generatedIdealPhoto = null;
  appState.progress.bmiPreviewStatus = 'idle';
  saveJson(STORAGE_KEYS.progress, appState.progress);
}

if (
  ['local_fallback', 'endpoint_required'].includes(appState.progress.bmiPreviewSource)
  || appState.progress.bmiPreviewStatus === 'fallback'
) {
  appState.progress.generatedIdealPhoto = null;
  appState.progress.bmiPreviewSource = '';
  appState.progress.bmiPreviewStatus = 'idle';
  appState.progress.bmiPreviewError = '';
  appState.progress.compareMode = false;
  saveJson(STORAGE_KEYS.progress, appState.progress);
}

repairBmiPreviewState(appState.progress);

hydrateMockData();

function icon(name) {
  return `<svg viewBox="0 0 24 24" aria-hidden="true">${icons[name] || icons.sparkle}</svg>`;
}

function escapeHtml(value) {
  return String(value ?? '').replace(/[&<>"']/g, (character) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  })[character]);
}

function titleCase(value) {
  return String(value || '').replace(/[_-]/g, ' ').replace(/\b\w/g, (letter) => letter.toUpperCase());
}

function normalizePartnerId(value) {
  return String(value || 'direct').trim().toLowerCase().replace(/[^a-z0-9_-]/g, '') || 'direct';
}

function readLaunchParams() {
  const params = new URLSearchParams(window.location.search);
  const hasLaunchParams = ['partner', 'partner_id', 'campaign', 'campaign_id', 'source', 'entry_mode', 'redirect_url'].some((key) => params.has(key));
  const partnerId = normalizePartnerId(params.get('partner') || params.get('partner_id') || 'direct');

  return {
    hasLaunchParams,
    attribution: {
      partnerId,
      campaignId: params.get('campaign') || params.get('campaign_id') || (partnerId === 'direct' ? 'organic' : 'partner_launch'),
      source: params.get('source') || (partnerId === 'direct' ? 'standalone_app' : 'partner_surface'),
      entryMode: params.get('entry_mode') || (partnerId === 'direct' ? 'standalone' : 'deeplink'),
      redirectUrl: params.get('redirect_url') || '',
      consentStatus: 'Not shared'
    }
  };
}

function readStoredJson(key) {
  const value = safeLocalStorageGet(key);
  if (!value) return null;
  try {
    return JSON.parse(value);
  } catch (error) {
    console.warn(`Could not read ${key}`, error);
    return null;
  }
}

function saveJson(key, value) {
  return safeLocalStorageSet(key, JSON.stringify(value));
}

function canUseLocalStorage() {
  try {
    const testKey = '__glowslim_storage_test__';
    window.localStorage.setItem(testKey, '1');
    window.localStorage.removeItem(testKey);
    return true;
  } catch (error) {
    console.warn('Local storage is unavailable; using in-memory demo state.', error);
    return false;
  }
}

function safeLocalStorageGet(key) {
  if (!storageUsable) return null;
  try {
    return window.localStorage.getItem(key);
  } catch (error) {
    console.warn(`Could not access local storage for ${key}`, error);
    return null;
  }
}

function safeLocalStorageSet(key, value) {
  if (!storageUsable) return false;
  try {
    window.localStorage.setItem(key, value);
    return true;
  } catch (error) {
    console.warn(`Could not save ${key}`, error);
    return false;
  }
}

function safeLocalStorageRemove(key) {
  if (!storageUsable) return;
  try {
    window.localStorage.removeItem(key);
  } catch (error) {
    console.warn(`Could not remove ${key}`, error);
  }
}

function readFileAsDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => resolve(String(reader.result || '')));
    reader.addEventListener('error', () => reject(new Error('Could not read the selected photo.')));
    reader.readAsDataURL(file);
  });
}

function loadImageFromDataUrl(dataUrl) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.addEventListener('load', () => resolve(image));
    image.addEventListener('error', () => reject(new Error('Could not decode this image. Try a JPG, PNG, WebP, HEIC, or HEIF photo.')));
    image.src = dataUrl;
  });
}

function canvasToDataUrl(canvas, quality = UPLOAD_JPEG_QUALITY) {
  try {
    return canvas.toDataURL('image/jpeg', quality);
  } catch (error) {
    console.warn('Could not compress photo on canvas', error);
    return '';
  }
}

async function prepareMirrorPhotoDataUrl(file) {
  if (!file || !/^image\//i.test(file.type || '')) {
    throw new Error('Please choose an image file.');
  }

  const rawDataUrl = await readFileAsDataUrl(file);
  const image = await loadImageFromDataUrl(rawDataUrl);
  const width = image.naturalWidth || image.width;
  const height = image.naturalHeight || image.height;
  if (!width || !height) {
    throw new Error('Could not read photo dimensions.');
  }

  const scale = Math.min(1, MAX_UPLOAD_DIMENSION / Math.max(width, height));
  const canvas = document.createElement('canvas');
  canvas.width = Math.max(1, Math.round(width * scale));
  canvas.height = Math.max(1, Math.round(height * scale));
  const context = canvas.getContext('2d', { alpha: false });
  if (!context) {
    return rawDataUrl;
  }

  context.fillStyle = '#ffffff';
  context.fillRect(0, 0, canvas.width, canvas.height);
  context.drawImage(image, 0, 0, canvas.width, canvas.height);

  const compressed = canvasToDataUrl(canvas);
  return compressed || rawDataUrl;
}

function repairBmiPreviewState(progress) {
  if (!progress) return;

  const photos = Array.isArray(progress.photos) ? progress.photos : [];
  const currentPhoto = photos.find((photo) => photo.id === progress.currentPhotoId) || photos[photos.length - 1] || null;
  const hasSourceImage = Boolean(currentPhoto?.src);
  const status = progress.bmiPreviewStatus || 'idle';
  let changed = false;

  if (status === 'generating') {
    progress.bmiPreviewStatus = 'idle';
    progress.bmiPreviewError = '';
    changed = true;
  }

  if (progress.bmiPreviewStatus === 'ready' && !progress.generatedIdealPhoto) {
    progress.bmiPreviewStatus = 'idle';
    progress.bmiPreviewSource = '';
    changed = true;
  }

  if (!hasSourceImage && ['generating', 'error'].includes(progress.bmiPreviewStatus)) {
    progress.bmiPreviewStatus = 'idle';
    progress.bmiPreviewError = '';
    changed = true;
  }

  if (changed) {
    saveJson(STORAGE_KEYS.progress, progress);
  }
}

function createDefaultDailyState() {
  return {
    date: PROTOTYPE_TODAY,
    completedActions: [],
    lastReminderIntent: '',
    lastUpdated: ''
  };
}

function createDefaultProfileState(source = {}) {
  const onboarding = source.onboarding || {};
  const safety = source.safety || {};
  const selectedDiseases = (safety.medicalRisks || []).filter((value) => criticalDiseaseOptions.includes(value));
  const sourceWeight = onboarding.weight && onboarding.weight !== '74' ? onboarding.weight : '90';
  return {
    profileVersion: 2,
    firstName: 'Aanya',
    secondName: '',
    goal: 'Marriage',
    daysLeft: String(daysUntil(onboarding.eventDate || addDays(PROTOTYPE_TODAY, 90))),
    age: safety.age || '29',
    gender: safety.sex || 'Female',
    weight: sourceWeight,
    height: onboarding.height || '165',
    criticalDiseasePrimary: selectedDiseases[0] || 'None',
    criticalDiseaseSecondary: selectedDiseases[1] || 'None',
    biomarkers: defaultBiomarkers.map((item) => ({ ...item })),
    healthDataConnected: false,
    healthDataProvider: '',
    healthDataLastSync: '',
    lastUpdated: ''
  };
}

function cleanNamePart(value) {
  return String(value || '').replace(/\s+/g, ' ').trim();
}

function getProfileFullName(profile) {
  const firstName = cleanNamePart(profile?.firstName || 'Aanya');
  const secondName = cleanNamePart(profile?.secondName || '');
  return [firstName, secondName].filter(Boolean).join(' ') || 'Aanya';
}

function getProfileInitial(profile) {
  const fullName = getProfileFullName(profile);
  return fullName.charAt(0).toUpperCase() || 'A';
}

function migrateProfileState(profile, source = {}) {
  const nextProfile = profile || createDefaultProfileState(source);
  const isOlderProfile = !nextProfile.profileVersion || nextProfile.profileVersion < 2;

  if (!nextProfile.firstName && !nextProfile.secondName) {
    const nameParts = cleanNamePart(mockData.user.name).split(' ').filter(Boolean);
    nextProfile.firstName = nameParts[0] || 'Aanya';
    nextProfile.secondName = nameParts.slice(1).join(' ');
  }

  if (isOlderProfile) {
    if (!nextProfile.goal || nextProfile.goal === 'The 90-Day Slim Edit') {
      nextProfile.goal = 'Marriage';
    }
    if (!nextProfile.weight || nextProfile.weight === '74') {
      nextProfile.weight = '90';
    }
    if (nextProfile.healthDataConnected) {
      nextProfile.healthDataProvider = 'PharmEasy';
    }
  }

  if (nextProfile.healthDataConnected && (!nextProfile.healthDataProvider || nextProfile.healthDataProvider === 'Health Data')) {
    nextProfile.healthDataProvider = 'PharmEasy';
  }

  nextProfile.profileVersion = 2;
  return nextProfile;
}

function createDefaultProgressState() {
  return {
    date: PROTOTYPE_TODAY,
    compareMode: false,
    weeklyPhotoTarget: 2,
    weeklyReportViews: 0,
    weeklyReportOpen: false,
    submittedMetrics: [],
    lastTrendSubmittedAt: '',
    currentPhotoId: 'photo-week-side',
    currentBmi: '37',
    idealBmi: '22',
    generatedIdealPhoto: null,
    bmiPreviewStatus: 'idle',
    bmiPreviewSource: '',
    bmiPreviewError: '',
    metrics: {
      weight: 73.4,
      waist: 86,
      outfitFit: 42,
      bloating: 3,
      cravings: 3,
      energy: 7,
      sleepMinutes: 440,
      facePuffiness: 2,
      protein: 82,
      steps: 6200,
      glow: 76
    },
    previous: {
      weight: 74.2,
      waist: 87.8,
      outfitFit: 34,
      bloating: 5,
      cravings: 7,
      energy: 6,
      sleepMinutes: 400,
      facePuffiness: 4,
      protein: 68,
      steps: 4800,
      glow: 64
    },
    photos: [
      { id: 'photo-baseline-front', date: '2026-05-15', angle: 'Front', label: 'Baseline', privacy: 'Private', tone: 'mint', kind: 'placeholder' },
      { id: 'photo-week-side', date: PROTOTYPE_TODAY, angle: 'Side', label: 'Week 2', privacy: 'Private', tone: 'blue', kind: 'placeholder' }
    ],
    lastUpdated: ''
  };
}

function createDefaultCareState() {
  return {
    consultStatus: 'not_booked',
    selectedSlot: consultSlots[0],
    language: 'English',
    femaleDoctorPreferred: true,
    labsUploaded: false,
    prescriptionStatus: 'not_uploaded',
    prescriptionUpdatedAt: '',
    doctorSummaryStatus: 'pending_consult',
    followUpDate: '',
    refillReminderEnabled: false,
    refillDate: '',
    medicineAvailability: 'Hidden until valid Rx',
    lastUpdated: ''
  };
}

function createDefaultTreatmentState() {
  return {
    date: PROTOTYPE_TODAY,
    doseStatus: 'locked',
    lastDoseDate: '',
    missedDoseProtocolSeen: false,
    completedHabits: [],
    lastUpdated: ''
  };
}

function createDefaultTriageState() {
  return {
    selectedSymptoms: [],
    escalationAcknowledged: false,
    lastUpdated: ''
  };
}

function createDefaultConsentState() {
  return {
    healthDataProcessing: true,
    partnerSharing: false,
    partnerSharingRevokedAt: '',
    lastUpdated: ''
  };
}

function createDefaultFoodAgentState() {
  return {
    date: PROTOTYPE_TODAY,
    provider: 'Swiggy',
    connectionMode: 'direct_account_handoff',
    accountStatus: 'customer_controlled',
    customerLoginConfirmed: false,
    mobileNumber: '',
    maskedMobile: '',
    orderStatus: 'draft',
    prompt: healthyMealPrompt,
    rules: [...swiggyDietRules],
    shortlist: [...swiggyOrderShortlist],
    selectedIndex: 0,
    lastPreparedAt: '',
    lastUpdated: ''
  };
}

function createDefaultCommerceAgentState() {
  return {
    date: PROTOTYPE_TODAY,
    provider: 'WooCommerce',
    storeUrl: '',
    loginEmail: '',
    customerLoginConfirmed: false,
    taskStatus: 'store_needed',
    productQuery: wooCommerceProductQuery,
    rules: [...wooCommerceAgentRules],
    lastPreparedAt: '',
    lastUpdated: ''
  };
}

function createDefaultBetaState() {
  return {
    reportShareMode: 'private',
    completedQaChecks: [],
    copyLocale: 'English',
    lastQaRunAt: '',
    lastUpdated: ''
  };
}

function addDays(isoDate, dayCount) {
  const date = parseIsoDate(isoDate);
  date.setUTCDate(date.getUTCDate() + dayCount);
  return date.toISOString().slice(0, 10);
}

function parseIsoDate(isoDate) {
  const [year, month, day] = String(isoDate).split('-').map(Number);
  return new Date(Date.UTC(year, month - 1, day));
}

function daysUntil(isoDate) {
  const diff = parseIsoDate(isoDate) - parseIsoDate(PROTOTYPE_TODAY);
  return Math.max(0, Math.ceil(diff / 86400000));
}

function recommendPlan(daysLeft) {
  if (daysLeft < 7) return '30-Day Debloat';
  if (daysLeft <= 45) return '30-Day Debloat';
  if (daysLeft <= 75) return '60-Day Shape Shift';
  if (daysLeft <= 135) return '90-Day Wedding Slim';
  return '180-Day Deep Reset';
}

function getPlanByName(name) {
  return planCatalog.find((plan) => plan.name === name) || planCatalog[0];
}

function calculateBmi() {
  const heightMeters = Number(appState.onboarding.height) / 100;
  const weight = Number(appState.onboarding.weight);
  if (!heightMeters || !weight) return null;
  return weight / (heightMeters * heightMeters);
}

function evaluateSafety() {
  const safety = appState.safety;
  const age = Number(safety.age);
  const risks = safety.medicalRisks || [];
  const symptoms = safety.currentSymptoms || [];
  const pregnancyStatus = safety.pregnancyStatus;
  const comfortLevel = appState.onboarding.comfortLevel;
  const reasons = [];

  if (age && age < 18) {
    reasons.push('Under 18: self-serve transformation flow is blocked.');
    return {
      eligibilityState: 'urgent_doctor_review',
      label: 'Guardian or doctor review required',
      headline: 'This path needs a doctor-led review first.',
      explanation: `${APP_NAME} should not continue as a self-serve plan for users under 18.`,
      severity: 'urgent',
      allowLifestyle: false,
      allowPrescriptionPrompt: false,
      reasons
    };
  }

  if (symptoms.includes('Severe abdominal pain') || symptoms.includes('Persistent vomiting') || symptoms.includes('Hypoglycemia symptoms')) {
    reasons.push('Red-flag symptom reported.');
    return {
      eligibilityState: 'urgent_doctor_review',
      label: 'Urgent doctor review required',
      headline: 'Please speak to a doctor before continuing.',
      explanation: 'Severe abdominal pain, persistent vomiting, or hypoglycemia symptoms should not be handled as a routine beauty plan.',
      severity: 'urgent',
      allowLifestyle: false,
      allowPrescriptionPrompt: false,
      reasons
    };
  }

  if (pregnancyStatus === 'Pregnant' || pregnancyStatus === 'Breastfeeding' || pregnancyStatus === 'Trying to conceive') {
    reasons.push(`${pregnancyStatus}: medicine path is blocked.`);
    return {
      eligibilityState: 'not_suitable_prescription',
      label: 'Lifestyle plan suitable',
      headline: 'Prescription support is not suitable right now.',
      explanation: 'You can still use gentle habit and doctor-guided lifestyle support. Medicine support stays blocked until a doctor clears it.',
      severity: 'blocked',
      allowLifestyle: true,
      allowPrescriptionPrompt: false,
      reasons
    };
  }

  if (risks.includes('Eating disorder risk')) {
    reasons.push('Eating disorder risk requires appropriate clinical support.');
    return {
      eligibilityState: 'not_suitable_prescription',
      label: 'Clinical support recommended',
      headline: 'Weight-loss planning is not the right first step.',
      explanation: `${APP_NAME} should route this user to appropriate clinical support and avoid weight-loss pressure.`,
      severity: 'blocked',
      allowLifestyle: false,
      allowPrescriptionPrompt: false,
      reasons
    };
  }

  const clinicalRisks = risks.filter((risk) => risk !== 'Eating disorder risk');
  if (clinicalRisks.length || safety.diabetesStatus === 'Type 1 diabetes' || symptoms.includes('Vision symptoms') || symptoms.includes('Dehydration')) {
    reasons.push(...clinicalRisks.map((risk) => `${risk} needs doctor review.`));
    if (safety.diabetesStatus === 'Type 1 diabetes') reasons.push('Type 1 diabetes needs clinician-led care.');
    if (symptoms.includes('Vision symptoms')) reasons.push('Vision symptoms need doctor review.');
    if (symptoms.includes('Dehydration')) reasons.push('Dehydration needs care-team review.');
    return {
      eligibilityState: 'doctor_review_recommended',
      label: 'Doctor review recommended',
      headline: 'Start with lifestyle actions while a doctor reviews safety.',
      explanation: 'Your event plan can continue, but prescription support should stay locked until a clinician reviews your profile.',
      severity: 'review',
      allowLifestyle: true,
      allowPrescriptionPrompt: false,
      reasons
    };
  }

  if (comfortLevel === 'Lifestyle only') {
    reasons.push('User selected lifestyle-only path.');
    return {
      eligibilityState: 'lifestyle_plan_suitable',
      label: 'Lifestyle plan suitable',
      headline: 'Start with a lifestyle-first visible-change plan.',
      explanation: 'No medicine path will be shown unless you choose to ask a doctor later.',
      severity: 'clear',
      allowLifestyle: true,
      allowPrescriptionPrompt: false,
      reasons
    };
  }

  reasons.push('No high-risk blocker reported in this screen.');
  return {
    eligibilityState: 'prescription_support_may_be_suitable_after_consult',
    label: 'Doctor consult can be offered',
    headline: 'Prescription support may be suitable after doctor consult.',
    explanation: `${APP_NAME} can show a doctor consult path, but it must not claim medication eligibility before review.`,
    severity: 'clear',
    allowLifestyle: true,
    allowPrescriptionPrompt: true,
    reasons
  };
}

function buildPlanRecommendation() {
  const safetyResult = evaluateSafety();
  const daysLeft = daysUntil(appState.onboarding.eventDate);
  const basePlanName = recommendPlan(daysLeft);
  const recommendedPlan = safetyResult.eligibilityState === 'urgent_doctor_review'
    ? 'Doctor Review First'
    : basePlanName;
  const plan = getPlanByName(basePlanName);
  const path = safetyResult.allowPrescriptionPrompt
    ? 'Lifestyle plan + doctor consult option'
    : safetyResult.allowLifestyle
      ? 'Lifestyle plan; prescription path locked'
      : 'Doctor-led review before plan activation';

  return {
    ...safetyResult,
    recommendedPlan,
    basePlanName,
    path,
    planDuration: plan.duration,
    planPromise: plan.promise,
    daysLeft,
    bmi: calculateBmi(),
    generatedAt: new Date().toISOString()
  };
}

function getDailyActionTemplates() {
  const recommendation = appState.recommendation || buildPlanRecommendation();
  const focus = getWeeklyFocus();

  if (recommendation.severity === 'urgent') {
    return [
      {
        id: 'book-urgent-consult',
        icon: 'care',
        label: 'Book doctor review',
        detail: 'Safety comes before any body plan',
        time: 'Now'
      },
      {
        id: 'pause-medicine-path',
        icon: 'shield',
        label: 'Keep prescription path paused',
        detail: 'No self-serve medicine guidance',
        time: 'Today'
      },
      {
        id: 'hydrate-gently',
        icon: 'water',
        label: 'Sip water gently',
        detail: 'Only if comfortable and safe for you',
        time: 'Today'
      }
    ];
  }

  if (recommendation.allowPrescriptionPrompt || appState.safety.priorTreatment === 'Currently using from another doctor') {
    return [
      {
        id: 'protein-breakfast',
        icon: 'bowl',
        label: 'Protein-first breakfast',
        detail: `Protect energy while focusing on ${focus}`,
        time: 'Morning'
      },
      {
        id: 'walk-20',
        icon: 'walk',
        label: '20 min brisk walk',
        detail: 'Keep it easy enough to repeat',
        time: 'Afternoon'
      },
      {
        id: 'dose-safety-check',
        icon: 'syringe',
        label: 'Dose safety check',
        detail: 'Confirm side effects before any dose step',
        time: 'Tonight'
      }
    ];
  }

  return [
    {
      id: 'protein-breakfast',
      icon: 'bowl',
      label: 'Protein-first breakfast',
      detail: `Set up ${focus} without crash dieting`,
      time: 'Morning'
    },
    {
      id: 'walk-20',
      icon: 'walk',
      label: '20 min brisk walk',
      detail: 'Light, repeatable movement',
      time: 'Afternoon'
    },
    {
      id: 'craving-check',
      icon: 'sparkle',
      label: 'Evening craving check',
      detail: 'Name the craving before deciding',
      time: 'Evening'
    }
  ];
}

function getCompletedActionSet() {
  if (appState.daily.date !== PROTOTYPE_TODAY) {
    appState.daily = createDefaultDailyState();
  }
  return new Set(appState.daily.completedActions || []);
}

function buildProfileSystem() {
  const profile = migrateProfileState(appState.profile, {
    onboarding: appState.onboarding,
    safety: appState.safety
  });
  profile.firstName = cleanNamePart(profile.firstName || 'Aanya');
  profile.secondName = cleanNamePart(profile.secondName || '');
  profile.goal = profileGoalOptions.includes(profile.goal) ? profile.goal : 'Marriage';
  profile.daysLeft = String(Math.max(0, Number(profile.daysLeft) || 0));
  profile.age = String(profile.age || appState.safety.age || '');
  profile.gender = sexOptions.includes(profile.gender) ? profile.gender : appState.safety.sex || 'Female';
  profile.weight = String(profile.weight || (appState.onboarding.weight === '74' ? '90' : appState.onboarding.weight) || '90');
  profile.height = String(profile.height || appState.onboarding.height || '');
  profile.criticalDiseasePrimary = criticalDiseaseOptions.includes(profile.criticalDiseasePrimary) ? profile.criticalDiseasePrimary : 'None';
  profile.criticalDiseaseSecondary = criticalDiseaseOptions.includes(profile.criticalDiseaseSecondary) ? profile.criticalDiseaseSecondary : 'None';
  profile.biomarkers = defaultBiomarkers.map((biomarker, index) => ({
    ...biomarker,
    value: profile.biomarkers?.[index]?.value || ''
  }));
  profile.healthDataConnected = Boolean(profile.healthDataConnected);
  profile.healthDataProvider = profile.healthDataConnected ? (profile.healthDataProvider || 'PharmEasy') : '';
  profile.healthDataLastSync = profile.healthDataConnected ? (profile.healthDataLastSync || 'today') : '';
  profile.fullName = getProfileFullName(profile);
  appState.profile = profile;
  return profile;
}

function buildDailyEngagement() {
  const completed = getCompletedActionSet();
  const actions = getDailyActionTemplates().map((action) => ({
    ...action,
    done: completed.has(action.id),
    status: completed.has(action.id) ? 'Done' : action.time
  }));
  const completedCount = actions.filter((action) => action.done).length;
  const completionPercent = Math.round((completedCount / actions.length) * 100);
  const nextAction = actions.find((action) => !action.done) || actions[actions.length - 1];
  const reminder = buildReminder(actions, nextAction);

  return {
    date: PROTOTYPE_TODAY,
    actions,
    completedCount,
    totalCount: actions.length,
    completionPercent,
    nextAction,
    reminder,
    hooks: buildReminderHooks(actions, reminder)
  };
}

function sanitizeMobileNumber(value) {
  return String(value || '').replace(/\D/g, '').slice(0, 10);
}

function maskMobileNumber(value) {
  const digits = sanitizeMobileNumber(value);
  if (digits.length < 4) return '';
  return `+91 ${digits.slice(0, 2)}•• ••• ${digits.slice(-4)}`;
}

function normalizeStoreUrl(value) {
  const trimmed = String(value || '').trim();
  if (!trimmed) return '';
  const withProtocol = /^https?:\/\//i.test(trimmed) ? trimmed : `https://${trimmed}`;
  try {
    const url = new URL(withProtocol);
    url.hash = '';
    url.search = '';
    return url.toString().replace(/\/$/, '');
  } catch (error) {
    return trimmed;
  }
}

function buildStoreUrl(baseUrl, path = '') {
  const normalized = normalizeStoreUrl(baseUrl);
  if (!normalized) return '';
  return `${normalized}${path.startsWith('/') ? path : `/${path}`}`;
}

function buildFoodOrderAgent() {
  const state = appState.foodAgent || createDefaultFoodAgentState();
  if (state.date !== PROTOTYPE_TODAY) {
    appState.foodAgent = createDefaultFoodAgentState();
    return buildFoodOrderAgent();
  }
  delete state.mcpStatus;
  delete state.otpStatus;
  state.connectionMode = 'direct_account_handoff';
  state.prompt = healthyMealPrompt;
  state.rules = [...swiggyDietRules];
  state.shortlist = [...swiggyOrderShortlist];
  state.mobileNumber = sanitizeMobileNumber(state.mobileNumber);
  state.maskedMobile = maskMobileNumber(state.mobileNumber);
  state.accountStatus = 'customer_controlled';
  state.customerLoginConfirmed = Boolean(state.customerLoginConfirmed);

  const selectedIndex = Math.min(
    Math.max(Number(state.selectedIndex) || 0, 0),
    swiggyOrderShortlist.length - 1
  );
  const orderStatus = state.orderStatus || 'draft';
  const selectedMeal = swiggyOrderShortlist[selectedIndex];
  const handoffQuery = [
    selectedMeal.title,
    'high protein',
    'low carb',
    'gluten free',
    'no fried',
    'no spicy'
  ].join(' ');
  const handoffUrl = `${swiggySearchBaseUrl}${encodeURIComponent(handoffQuery)}`;

  return {
    ...state,
    prompt: healthyMealPrompt,
    rules: swiggyDietRules,
    shortlist: swiggyOrderShortlist,
    selectedIndex,
    selectedMeal,
    handoffUrl,
    canSaveMobile: sanitizeMobileNumber(state.mobileNumber).length === 10,
    canHandoff: orderStatus === 'ready_to_review',
    statusLabel: {
      draft: 'Draft',
      ready_to_review: 'Ready to review',
      handoff_opened: 'Handoff opened',
      checkout_blocked: 'Customer checkout required'
    }[orderStatus] || titleCase(orderStatus),
    accountLabel: state.customerLoginConfirmed
      ? 'Customer confirmed Swiggy login'
      : 'Customer completes Swiggy login and payment',
    connectionLabel: 'Direct Swiggy account handoff'
  };
}

function buildCommerceAgent() {
  const state = appState.commerceAgent || createDefaultCommerceAgentState();
  if (state.date !== PROTOTYPE_TODAY) {
    appState.commerceAgent = createDefaultCommerceAgentState();
    return buildCommerceAgent();
  }

  state.storeUrl = normalizeStoreUrl(state.storeUrl);
  state.loginEmail = String(state.loginEmail || '').trim();
  state.productQuery = wooCommerceProductQuery;
  state.rules = [...wooCommerceAgentRules];
  state.customerLoginConfirmed = Boolean(state.customerLoginConfirmed);

  const hasStore = /^https?:\/\//i.test(state.storeUrl);
  const taskStatus = state.taskStatus || (hasStore ? 'store_ready' : 'store_needed');
  const productSearchPath = `/?s=${encodeURIComponent(wooCommerceProductQuery)}&post_type=product`;
  const loginUrl = hasStore ? buildStoreUrl(state.storeUrl, '/my-account/') : '';
  const productSearchUrl = hasStore ? `${state.storeUrl}${productSearchPath}` : '';
  const cartUrl = hasStore ? buildStoreUrl(state.storeUrl, '/cart/') : '';

  return {
    ...state,
    hasStore,
    loginUrl,
    productSearchUrl,
    cartUrl,
    canOpenLogin: hasStore,
    canSearchProduct: hasStore,
    canOpenCart: hasStore && state.customerLoginConfirmed,
    statusLabel: {
      store_needed: 'Store URL needed',
      store_ready: 'Store ready',
      login_opened: 'Login opened',
      login_confirmed: 'Login confirmed',
      ready_to_search: 'Ready to search',
      search_opened: 'Slim fit jean search opened',
      cart_opened: 'Cart opened'
    }[taskStatus] || titleCase(taskStatus),
    accountLabel: state.customerLoginConfirmed
      ? 'Customer confirmed WooCommerce login'
      : 'Customer completes WooCommerce login',
    connectionLabel: 'WooCommerce store handoff'
  };
}

function buildReminder(actions, nextAction) {
  const recommendation = appState.recommendation || buildPlanRecommendation();
  const isAlreadyOnTreatment = appState.safety.priorTreatment === 'Currently using from another doctor';

  if (recommendation.severity === 'urgent') {
    return {
      type: 'care',
      icon: 'care',
      eyebrow: 'Safety first',
      title: 'Doctor review is your next action',
      detail: 'Do not continue prescription or aggressive transformation steps until a doctor reviews this.',
      primary: 'Book consult',
      secondary: 'View safety reasons'
    };
  }

  if (isAlreadyOnTreatment) {
    return {
      type: 'dose',
      icon: 'syringe',
      eyebrow: 'Dose support',
      title: 'Weekly dose check due tonight',
      detail: 'After a light dinner, confirm side effects. Missed-dose advice must follow doctor protocol.',
      primary: 'Log dose check',
      secondary: 'Side-effect check'
    };
  }

  if (recommendation.allowPrescriptionPrompt) {
    return {
      type: 'consult',
      icon: 'care',
      eyebrow: 'Doctor consult option',
      title: 'Consult can be booked before medicine support',
    detail: `${APP_NAME} can help with visible-change habits now. Prescription support waits for doctor review.`,
      primary: 'Book consult',
      secondary: 'Stay lifestyle-only'
    };
  }

  return {
    type: 'habit',
    icon: nextAction.icon,
    eyebrow: 'Habit reminder',
    title: `${nextAction.label} is next`,
    detail: nextAction.detail,
    primary: `Mark ${nextAction.time.toLowerCase()} action`,
    secondary: 'Remind me tonight'
  };
}

function buildReminderHooks(actions, reminder) {
  return [
    {
      id: 'morning-protein',
      time: '08:00',
      channel: 'push',
      label: actions[0]?.label || 'Protein-first breakfast'
    },
    {
      id: 'evening-check',
      time: '19:30',
      channel: 'push',
      label: reminder.type === 'dose' ? 'Dose safety check' : actions[2]?.label || 'Evening check'
    },
    {
      id: 'weekly-mirror',
      time: 'Sunday 10:00',
      channel: 'push',
      label: 'Weekly mirror moment'
    }
  ];
}

function formatSleep(minutes) {
  const hours = Math.floor(minutes / 60);
  const remainder = minutes % 60;
  return `${hours}h ${remainder}m`;
}

function formatSigned(value, suffix = '') {
  if (value === 0) return `0${suffix}`;
  return `${value > 0 ? '+' : ''}${value}${suffix}`;
}

function buildProgressSystem() {
  const state = appState.progress || createDefaultProgressState();
  const metrics = state.metrics;
  const previous = state.previous;
  const submittedMetrics = new Set(state.submittedMetrics || []);
  const weeklyPhotoTarget = state.weeklyPhotoTarget || 2;
  const weeklyPhotoCount = state.photos.filter((photo) => photo.date === PROTOTYPE_TODAY).length;
  const mirrorPhotoSubmissionRate = Math.min(100, Math.round((weeklyPhotoCount / weeklyPhotoTarget) * 100));
  const outfitFitScoreCompletion = submittedMetrics.has('outfitFit') ? 100 : 0;
  const bodyFeelTrendIds = ['bloating', 'cravings'];
  const bodyFeelTrendSubmissionCount = bodyFeelTrendIds.filter((metricId) => submittedMetrics.has(metricId)).length;
  const bodyFeelTrendSubmissionRate = Math.round((bodyFeelTrendSubmissionCount / bodyFeelTrendIds.length) * 100);
  const currentPhoto = state.photos.find((photo) => photo.id === state.currentPhotoId) || state.photos[state.photos.length - 1] || null;
  const idealPhoto = state.generatedIdealPhoto || null;
  const comparePhotos = idealPhoto
    ? { current: currentPhoto, ideal: idealPhoto }
    : { current: state.photos[0] || null, ideal: state.photos[state.photos.length - 1] || null };
  const waistDelta = Number((metrics.waist - previous.waist).toFixed(1));
  const weightDelta = Number((metrics.weight - previous.weight).toFixed(1));
  const sleepDelta = metrics.sleepMinutes - previous.sleepMinutes;
  const checkinItems = [
    {
      id: 'weight',
      label: 'Weight',
      value: `${metrics.weight.toFixed(1)} kg`,
      detail: `${formatSigned(weightDelta, ' kg')} this week`,
      delta: 0.2,
      min: 30,
      max: 220,
      lowerIsBetter: true
    },
    {
      id: 'waist',
      label: 'Waist',
      value: `${metrics.waist.toFixed(1)} cm`,
      detail: `${formatSigned(waistDelta, ' cm')} this week`,
      delta: 0.5,
      min: 40,
      max: 180,
      lowerIsBetter: true
    },
    {
      id: 'outfitFit',
      label: 'Outfit fit',
      value: `${metrics.outfitFit}%`,
      detail: `${formatSigned(metrics.outfitFit - previous.outfitFit, '%')} readiness`,
      delta: 2,
      min: 0,
      max: 100
    },
    {
      id: 'bloating',
      label: 'Bloating',
      value: `${metrics.bloating} / 10`,
      detail: `down from ${previous.bloating}`,
      delta: 1,
      min: 0,
      max: 10,
      lowerIsBetter: true
    },
    {
      id: 'cravings',
      label: 'Cravings',
      value: `${metrics.cravings} / 10`,
      detail: `down from ${previous.cravings}`,
      delta: 1,
      min: 0,
      max: 10,
      lowerIsBetter: true
    },
    {
      id: 'energy',
      label: 'Energy',
      value: `${metrics.energy} / 10`,
      detail: `${formatSigned(metrics.energy - previous.energy)} vs last week`,
      delta: 1,
      min: 0,
      max: 10
    },
    {
      id: 'sleepMinutes',
      label: 'Sleep',
      value: formatSleep(metrics.sleepMinutes),
      detail: `${formatSigned(sleepDelta, ' min')}`,
      delta: 10,
      min: 180,
      max: 720
    },
    {
      id: 'facePuffiness',
      label: 'Face puffiness',
      value: `${metrics.facePuffiness} / 10`,
      detail: `down from ${previous.facePuffiness}`,
      delta: 1,
      min: 0,
      max: 10,
      lowerIsBetter: true
    },
    {
      id: 'protein',
      label: 'Protein',
      value: `${metrics.protein}%`,
      detail: `${formatSigned(metrics.protein - previous.protein, '%')} target`,
      delta: 2,
      min: 0,
      max: 100
    },
    {
      id: 'glow',
      label: 'Glow',
      value: `${metrics.glow}%`,
      detail: `${formatSigned(metrics.glow - previous.glow, '%')} protected`,
      delta: 2,
      min: 0,
      max: 100
    }
  ];

  return {
    ...state,
    checkinItems,
    checkinCompletion: Math.round((checkinItems.filter((item) => metrics[item.id] !== undefined).length / checkinItems.length) * 100),
    latestPhoto: state.photos[state.photos.length - 1],
    baselinePhoto: state.photos[0],
    currentPhoto,
    idealPhoto,
    comparePhotos,
    outfitFit: metrics.outfitFit,
    weeklyPhotoTarget,
    weeklyPhotoCount,
    mirrorPhotoSubmissionRate,
    outfitFitScoreCompletion,
    bodyFeelTrendSubmissionCount,
    bodyFeelTrendSubmissionRate,
    weeklyReportViews: state.weeklyReportViews || 0,
    weeklyReportOpen: Boolean(state.weeklyReportOpen),
    submittedMetrics: [...submittedMetrics],
    successMetrics: [
      {
        id: 'mirror-photo-submission',
        label: 'Mirror photo submission rate',
        value: `${mirrorPhotoSubmissionRate}%`,
        detail: `${weeklyPhotoCount}/${weeklyPhotoTarget} weekly photos`,
        progress: mirrorPhotoSubmissionRate
      },
      {
        id: 'weekly-report-views',
        label: 'Weekly report views',
        value: `${state.weeklyReportViews || 0}`,
        detail: state.weeklyReportOpen ? 'report opened this week' : 'tap to open the report',
        progress: Math.min(100, (state.weeklyReportViews || 0) * 50)
      },
      {
        id: 'outfit-fit-completion',
        label: 'Outfit-fit score completion',
        value: `${outfitFitScoreCompletion}%`,
        detail: submittedMetrics.has('outfitFit') ? 'score submitted' : 'score waiting',
        progress: outfitFitScoreCompletion
      },
      {
        id: 'body-feel-trends',
        label: 'Bloating/craving trend submissions',
        value: `${bodyFeelTrendSubmissionCount}/2`,
        detail: `${bodyFeelTrendSubmissionRate}% complete`,
        progress: bodyFeelTrendSubmissionRate
      }
    ],
    feeling: {
      bloating: { value: metrics.bloating <= 3 ? 'Low' : `${metrics.bloating} / 10`, detail: `down from ${previous.bloating}` },
      cravings: { value: `${metrics.cravings} / 10`, detail: `down from ${previous.cravings}` },
      energy: { value: metrics.energy >= 7 ? 'Steady' : `${metrics.energy} / 10`, detail: metrics.energy >= 7 ? 'no afternoon dip' : 'needs support' },
      sleep: { value: formatSleep(metrics.sleepMinutes), detail: `${formatSigned(sleepDelta, ' min')}` }
    }
  };
}

function humanizeStatus(value) {
  return titleCase(String(value || '').replace(/_/g, ' '));
}

function buildCareSystem() {
  const care = appState.care || createDefaultCareState();
  const recommendation = appState.recommendation || buildPlanRecommendation();
  const canBookConsult = recommendation.allowLifestyle || recommendation.allowPrescriptionPrompt || recommendation.severity !== 'clear';
  const consultBooked = care.consultStatus === 'booked' || care.consultStatus === 'completed';
  const consultCompleted = care.consultStatus === 'completed';
  const prescriptionRouteCanApprove = recommendation.allowPrescriptionPrompt
    || (consultCompleted && recommendation.eligibilityState === 'doctor_review_recommended');
  const displayPrescriptionStatus = care.prescriptionStatus === 'approved' && !prescriptionRouteCanApprove
    ? 'under_review'
    : care.prescriptionStatus;
  const hasValidRx = displayPrescriptionStatus === 'approved' && prescriptionRouteCanApprove;
  const rxUploaded = displayPrescriptionStatus !== 'not_uploaded';
  const medicineVisible = hasValidRx;
  const doctorSummary = consultCompleted
    ? 'Dr. Meera recommends continuing the event plan, protein support, symptom check-ins, and follow-up before any medicine changes.'
    : consultBooked
      ? 'Doctor plan summary will appear here after the consult.'
      : 'Book a consult to unlock doctor plan summary.';
  const followUpDate = care.followUpDate || addDays(PROTOTYPE_TODAY, 14);
  const refillDate = care.refillDate || addDays(PROTOTYPE_TODAY, 24);

  return {
    ...care,
    canBookConsult,
    consultBooked,
    consultCompleted,
    prescriptionRouteCanApprove,
    prescriptionStatus: displayPrescriptionStatus,
    rxUploaded,
    hasValidRx,
    medicineVisible,
    doctorSummary,
    followUpDate,
    refillDate,
    prescriptionLabel: humanizeStatus(displayPrescriptionStatus),
    consultLabel: humanizeStatus(care.consultStatus),
    prescriptionPathLabel: hasValidRx
      ? 'valid Rx approved'
      : consultCompleted
        ? 'doctor review complete, Rx pending'
        : recommendation.allowPrescriptionPrompt
          ? 'doctor consult required first'
          : 'locked for now',
    medicineAvailability: medicineVisible ? 'Verified sourcing visible after valid Rx' : 'Hidden until valid Rx',
    refillReminderLabel: care.refillReminderEnabled ? `Refill reminder set for ${refillDate}` : 'Refill reminder off'
  };
}

function buildTreatmentSystem() {
  const state = appState.treatment || createDefaultTreatmentState();
  const care = buildCareSystem();
  const recommendation = appState.recommendation || buildPlanRecommendation();
  const consent = appState.consent || createDefaultConsentState();
  const isExistingDoctorTreatment = appState.safety.priorTreatment === 'Currently using from another doctor';
  const doctorApprovedDoseSupport = care.hasValidRx || isExistingDoctorTreatment;
  const canLogDose = doctorApprovedDoseSupport && recommendation.severity !== 'urgent' && consent.healthDataProcessing;
  const completed = new Set(state.completedHabits || []);
  const habitItems = lifestyleHabitSchedule.map((habit) => ({
    ...habit,
    done: completed.has(habit.id)
  }));
  const completedHabits = habitItems.filter((habit) => habit.done).length;
  const habitCompletionPercent = Math.round((completedHabits / habitItems.length) * 100);
  const rawDoseStatus = state.doseStatus === 'locked' && canLogDose ? 'due' : state.doseStatus;
  const doseStatus = !consent.healthDataProcessing
    ? 'consent_paused'
    : recommendation.severity === 'urgent'
      ? 'paused'
      : canLogDose
        ? rawDoseStatus
        : 'locked';
  const doseCopy = {
    due: {
      title: 'Weekly dose check due tonight',
      detail: 'Confirm side effects first. Follow the dose exactly as prescribed by your doctor.',
      primary: 'Log dose taken',
      secondary: 'Missed dose'
    },
    taken: {
      title: 'Dose logged for this week',
      detail: 'Keep hydration, protein, and side-effect check-ins steady for the next 24 hours.',
      primary: 'Undo dose log',
      secondary: 'Side-effect check'
    },
    missed: {
      title: 'Missed dose logged',
      detail: 'Do not double dose. Follow the doctor-approved missed-dose protocol.',
      primary: 'View protocol',
      secondary: 'Mark taken'
    },
    paused: {
      title: 'Dose support paused',
      detail: 'Red-flag symptoms or urgent review keep prescription actions paused until a clinician responds.',
      primary: 'Escalation first',
      secondary: 'View triage'
    },
    locked: {
      title: 'Dose tracker locked',
      detail: 'Dose tracking appears after an approved prescription or existing doctor-supervised treatment.',
      primary: 'Care team first',
      secondary: 'Habits only'
    },
    consent_paused: {
      title: 'Tracking paused by consent',
      detail: 'Health-data logging is off. Partner data remains filtered by default.',
      primary: 'Consent paused',
      secondary: 'Privacy'
    }
  };

  return {
    ...state,
    doseStatus,
    doseLabel: humanizeStatus(doseStatus),
    dose: doseCopy[doseStatus],
    canLogDose,
    trackingEnabled: consent.healthDataProcessing,
    doctorApprovedDoseSupport,
    habitItems,
    completedHabits,
    totalHabits: habitItems.length,
    habitCompletionPercent,
    missedDoseProtocol: [
      'Do not double dose.',
      'Confirm how late the dose is before taking any action.',
      'Ask the care team if symptoms or timing feel unclear.'
    ]
  };
}

function buildTriageSystem() {
  const state = appState.triage || createDefaultTriageState();
  const selectedSymptoms = state.selectedSymptoms || [];
  const hasRedFlag = selectedSymptoms.some((symptom) => redFlagSideEffects.includes(symptom));
  const hasSevere = selectedSymptoms.some((symptom) => severeSideEffects.includes(symptom));
  const hasModerate = selectedSymptoms.length >= 3 || selectedSymptoms.includes('Vomiting') || selectedSymptoms.includes('Dizziness');
  let level = 'none';
  let label = 'No symptoms logged';
  let detail = 'Keep the check-in quick and honest before dose decisions.';
  let action = 'No escalation needed';

  if (hasRedFlag) {
    level = 'red_flag';
    label = 'Urgent care warning';
    detail = 'Pause dose actions and contact the care team now. Severe abdominal pain, persistent vomiting, or hypoglycemia symptoms need urgent review.';
    action = state.escalationAcknowledged ? 'Escalation acknowledged' : 'Escalate to care team';
  } else if (hasSevere) {
    level = 'severe';
    label = 'Care-team review needed';
    detail = 'These symptoms should be reviewed before continuing dose or aggressive plan steps.';
    action = state.escalationAcknowledged ? 'Care team notified' : 'Notify care team';
  } else if (hasModerate) {
    level = 'moderate';
    label = 'Monitor closely';
    detail = 'Log symptoms, keep fluids steady, and avoid changing dose without care-team guidance.';
    action = 'Watch tonight';
  } else if (selectedSymptoms.length) {
    level = 'mild';
    label = 'Mild symptoms logged';
    detail = 'Keep meals light and report if symptoms worsen.';
    action = 'Continue habits';
  }

  return {
    ...state,
    selectedSymptoms,
    level,
    label,
    detail,
    action,
    escalated: level === 'red_flag' || level === 'severe',
    cardClass: level === 'red_flag' ? 'safety-urgent' : level === 'severe' ? 'coral' : level === 'moderate' ? 'lilac' : ''
  };
}

function buildConsentSystem() {
  const consent = appState.consent || createDefaultConsentState();
  const partnerVisibleEvents = consent.partnerSharing
    ? eventLog.filter((eventName) => partnerEventAllowList.includes(eventName))
    : eventLog.filter((eventName) => eventName === 'newme_partner_launch_detected' || eventName === 'newme_partner_attribution_stored');
  const hiddenEventCount = eventLog.length - partnerVisibleEvents.length;

  return {
    ...consent,
    healthLabel: consent.healthDataProcessing ? 'Health logging on' : 'Health logging paused',
    partnerLabel: consent.partnerSharing ? 'Partner sharing on' : 'Partner sharing off',
    partnerVisibleEvents,
    hiddenEventCount,
    partnerPolicy: consent.partnerSharing
      ? 'Only whitelisted, non-health funnel events can be visible to partners.'
      : 'Partners see no health, photo, symptom, dose, or prescription events by default.'
  };
}

function buildBetaSystem() {
  const state = appState.beta || createDefaultBetaState();
  const progress = buildProgressSystem();
  const treatment = buildTreatmentSystem();
  const triage = buildTriageSystem();
  const consent = buildConsentSystem();
  const event = mockData.event || {
    daysLeft: daysUntil(appState.onboarding.eventDate),
    weeklyFocus: getWeeklyFocus(),
    readiness: 42,
    type: getEventNoun()
  };
  const metrics = progress.metrics;
  const previous = progress.previous;
  const waistDelta = Number((metrics.waist - previous.waist).toFixed(1));
  const weightDelta = Number((metrics.weight - previous.weight).toFixed(1));
  const qaCompleted = new Set(state.completedQaChecks || []);
  const qaItems = betaQaChecks.map((item) => ({
    ...item,
    passed: qaCompleted.has(item.id)
  }));
  const qaPassedCount = qaItems.filter((item) => item.passed).length;
  const qaPercent = Math.round((qaPassedCount / qaItems.length) * 100);
  const navigationEntry = performance.getEntriesByType('navigation')[0];
  const appLaunchMs = navigationEntry ? Math.round(navigationEntry.domContentLoadedEventEnd) : 1200;
  const dashboardMs = 820;
  const performanceItems = [
    { label: 'App launch', value: `${appLaunchMs}ms`, passed: appLaunchMs < 3000, detail: 'Target under 3000ms' },
    { label: 'Dashboard render', value: `${dashboardMs}ms`, passed: dashboardMs < 2000, detail: 'Target under 2000ms' }
  ];
  const securityItems = betaSecurityChecks.map((item) => ({
    ...item,
    passed: true
  }));
  const reportTitle = state.copyLocale === 'Hinglish'
    ? `${mockData.user.name}'s week: steady glow, no shortcuts`
    : `${mockData.user.name}'s weekly progress report`;
  const reportSummary = state.copyLocale === 'Hinglish'
    ? `Focus steady hai: ${event.weeklyFocus}. Crash diet nahi, unsafe shortcut nahi.`
    : `This week focused on ${event.weeklyFocus}. No crash diets, no unsafe shortcuts.`;
  const shareSummary = state.copyLocale === 'Hinglish'
    ? `${mockData.user.name} is ${event.daysLeft} days from the ${event.type} and keeping a steady routine.`
    : `${mockData.user.name} is ${event.daysLeft} days from the ${event.type} with steady routine progress.`;
  const copyPreview = state.copyLocale === 'Hinglish'
    ? 'Small steps, doctor-safe guardrails, aur glow protected.'
    : 'Small steps, doctor-safe guardrails, and glow protected.';

  return {
    ...state,
    report: {
      title: reportTitle,
      summary: reportSummary,
      readiness: event.readiness,
      weeklyFocus: event.weeklyFocus,
      habitCompletion: treatment.habitCompletionPercent,
      photoCount: progress.photos.length,
      waistDelta,
      weightDelta,
      triageLabel: triage.label,
      consentLabel: consent.partnerLabel
    },
    shareReport: {
      title: 'Share-safe progress note',
      summary: shareSummary,
      includes: ['Event countdown', 'Routine completion', 'Mirror/photo count', 'Weekly focus'],
      excludes: ['Prescription status', 'Dose logs', 'Symptoms', 'Health consent details']
    },
    qaItems,
    qaPassedCount,
    qaTotalCount: qaItems.length,
    qaPercent,
    betaReady: qaPercent === 100 && performanceItems.every((item) => item.passed),
    performanceItems,
    securityItems,
    analyticsSpec: betaAnalyticsSpec,
    copyPreview
  };
}

function getPartnerInfo() {
  const partnerId = appState.attribution.partnerId;
  return partnerCopy[partnerId] || partnerCopy.generic;
}

function getEventNoun() {
  return String(appState.onboarding.occasion || 'event').toLowerCase();
}

function getWeeklyFocus() {
  const focus = appState.onboarding.bodyFocus || [];
  if (!focus.length) return 'waist + bloating';
  return focus.slice(0, 2).map((item) => item.toLowerCase()).join(' + ');
}

function hydrateMockData() {
  const profile = buildProfileSystem();
  const daysLeft = Math.max(0, Number(profile.daysLeft) || daysUntil(appState.onboarding.eventDate));
  const occasion = getEventNoun();
  const weeklyFocus = getWeeklyFocus();
  const recommendation = appState.recommendation || buildPlanRecommendation();
  const eventDate = addDays(PROTOTYPE_TODAY, daysLeft);
  const fullName = getProfileFullName(profile);

  mockData.user.name = fullName;
  mockData.user.initial = getProfileInitial(profile);
  mockData.partner = { ...appState.attribution };
  mockData.event = {
    type: occasion,
    eventDate,
    daysLeft,
    milestoneLabel: `${Math.max(1, Math.ceil(daysLeft / 7))} weeks`,
    milestoneDetail: `until ${occasion === 'wedding' ? 'lehenga trial' : `your ${occasion}`}`,
    readiness: Math.min(88, Math.max(18, Math.round(100 - (daysLeft / 180) * 100))),
    weeklyFocus
  };
  mockData.profile = { ...profile };
  mockData.onboarding = { ...appState.onboarding };
  mockData.safety = { ...appState.safety };
  mockData.recommendation = { ...recommendation };
  mockData.daily = buildDailyEngagement();
  mockData.progress = buildProgressSystem();
  mockData.care = buildCareSystem();
  mockData.treatment = buildTreatmentSystem();
  mockData.triage = buildTriageSystem();
  mockData.consent = buildConsentSystem();
  mockData.foodAgent = buildFoodOrderAgent();
  mockData.commerceAgent = buildCommerceAgent();
  mockData.beta = buildBetaSystem();
  mockData.plan.name = recommendation.recommendedPlan;
  mockData.plan.path = recommendation.path;
  mockData.plan.includes = recommendation.allowPrescriptionPrompt
    ? ['Event plan', 'Safety check complete', 'Doctor consult option', 'Prescription support only if approved']
    : recommendation.allowLifestyle
      ? ['Event plan', 'Lifestyle actions', 'Coach nudges', 'Prescription path locked']
      : ['Doctor review first', 'No self-serve plan', 'Safety escalation', 'Care guidance'];
  mockData.doctorStatus.detail = recommendation.headline;
  mockData.user.tagline = `One small step closer to feeling like you for your ${occasion}.`;
}

function badge(label, iconName) {
  return `<span class="badge">${icon(iconName)}${escapeHtml(label)}</span>`;
}

function progressBar(value) {
  return `
    <div class="progress-track" aria-hidden="true">
      <span class="progress-fill" style="width:${value}%"></span>
    </div>
  `;
}

function metricTile(label, value, detail) {
  return `
    <article class="metric-tile">
      <p class="metric-label">${escapeHtml(label)}</p>
      <p class="metric-value">${escapeHtml(value)}</p>
      <p class="metric-detail">${escapeHtml(detail)}</p>
    </article>
  `;
}

function card(content, className = '') {
  return `<section class="card ${className}"><div class="card-inner">${content}</div></section>`;
}

function logEvent(name, payload = {}) {
  eventLog.unshift(name);
  eventLog.splice(8);
  console.info(`[${APP_NAME} analytics]`, name, payload);
}

function ensureCareState() {
  if (!appState.care) {
    appState.care = createDefaultCareState();
  }
  return appState.care;
}

function persistCare(eventName, payload = {}) {
  const care = ensureCareState();
  care.lastUpdated = new Date().toISOString();
  saveJson(STORAGE_KEYS.care, care);
  if (eventName) {
    logEvent(eventName, payload);
  }
  render();
}

function ensureTreatmentState() {
  if (!appState.treatment || appState.treatment.date !== PROTOTYPE_TODAY) {
    appState.treatment = createDefaultTreatmentState();
  }
  return appState.treatment;
}

function persistTreatment(eventName, payload = {}) {
  const treatment = ensureTreatmentState();
  treatment.lastUpdated = new Date().toISOString();
  saveJson(STORAGE_KEYS.treatment, treatment);
  if (eventName) {
    logEvent(eventName, payload);
  }
  render();
}

function ensureTriageState() {
  if (!appState.triage) {
    appState.triage = createDefaultTriageState();
  }
  return appState.triage;
}

function persistTriage(eventName, payload = {}) {
  const triage = ensureTriageState();
  triage.lastUpdated = new Date().toISOString();
  saveJson(STORAGE_KEYS.triage, triage);
  if (eventName) {
    logEvent(eventName, payload);
  }
  render();
}

function ensureConsentState() {
  if (!appState.consent) {
    appState.consent = createDefaultConsentState();
  }
  return appState.consent;
}

function persistConsent(eventName, payload = {}) {
  const consent = ensureConsentState();
  consent.lastUpdated = new Date().toISOString();
  saveJson(STORAGE_KEYS.consent, consent);
  if (eventName) {
    logEvent(eventName, payload);
  }
  render();
}

function ensureFoodAgentState() {
  if (!appState.foodAgent || appState.foodAgent.date !== PROTOTYPE_TODAY) {
    appState.foodAgent = createDefaultFoodAgentState();
  }
  return appState.foodAgent;
}

function persistFoodAgent(eventName, payload = {}) {
  const foodAgent = ensureFoodAgentState();
  foodAgent.lastUpdated = new Date().toISOString();
  saveJson(STORAGE_KEYS.foodAgent, foodAgent);
  if (eventName) {
    logEvent(eventName, payload);
  }
  render();
}

function ensureCommerceAgentState() {
  if (!appState.commerceAgent || appState.commerceAgent.date !== PROTOTYPE_TODAY) {
    appState.commerceAgent = createDefaultCommerceAgentState();
  }
  return appState.commerceAgent;
}

function persistCommerceAgent(eventName, payload = {}) {
  const commerceAgent = ensureCommerceAgentState();
  commerceAgent.lastUpdated = new Date().toISOString();
  saveJson(STORAGE_KEYS.commerceAgent, commerceAgent);
  if (eventName) {
    logEvent(eventName, payload);
  }
  render();
}

function ensureBetaState() {
  if (!appState.beta) {
    appState.beta = createDefaultBetaState();
  }
  return appState.beta;
}

function persistBeta(eventName, payload = {}) {
  const beta = ensureBetaState();
  beta.lastUpdated = new Date().toISOString();
  saveJson(STORAGE_KEYS.beta, beta);
  if (eventName) {
    logEvent(eventName, payload);
  }
  render();
}

function photoPreviewMarkup(photo, label = '') {
  const generatedClass = photo?.kind === 'generated' ? ' is-generated' : '';
  if (photo?.src) {
    return `
      <div class="photo-preview has-image${generatedClass}">
        <img src="${photo.src}" alt="${escapeHtml(label || photo.label || 'Mirror photo')}">
      </div>
    `;
  }
  return `
    <div class="photo-preview${generatedClass}">
      ${icon('camera')}
      <span>${escapeHtml(photo?.angle || label || 'Photo')}</span>
    </div>
  `;
}

function createIdealBmiPhoto(sourcePhoto, currentBmi, generatedSrc) {
  if (!sourcePhoto || !generatedSrc) return null;
  const idealBmi = '22';
  return {
    id: `ideal-bmi-${Date.now()}`,
    date: PROTOTYPE_TODAY,
    angle: sourcePhoto.angle || 'Current',
    label: `BMI ${idealBmi} preview`,
    privacy: 'Private illustrative preview',
    tone: 'mint',
    kind: 'generated',
    src: generatedSrc,
    sourcePhotoId: sourcePhoto.id,
    currentBmi: String(currentBmi || ''),
    idealBmi
  };
}

function buildBmiPreviewRequest(sourcePhoto, currentBmi = '37', targetBmi = '22') {
  const prompt = `Create a realistic transformed version of the same male person at target BMI 22 from current BMI 37.

Preserve the person's identity, age, skin tone, hair, facial hair, expression, clothing, lighting, background, and camera angle.

Make the body look naturally normal-weight and lean, not muscular or bodybuilder-like. Reduce belly protrusion significantly, reduce waist width, reduce love handles, reduce chest fat, slim the face, reduce cheek fullness, reduce double chin, make the jawline moderately clearer, slim the neck, reduce upper arm and thigh thickness, and improve clothing fit.

The final image should look like the same person after healthy weight loss: slimmer, lighter, more confident, with better outfit fit and natural proportions.

Do not create six-pack abs unless explicitly requested. Do not change the face identity. Do not make the person look younger. Do not change skin tone, hair, clothes, background, or lighting. Do not create unrealistic model proportions.`;

  return {
    provider: 'openai',
    task: 'bmi_transformation_preview',
    input_image_url: sourcePhoto?.secureUrl || sourcePhoto?.src || 'secure_user_image_url',
    source_photo_id: sourcePhoto?.id || '',
    current_bmi: Number(currentBmi) || 37,
    target_bmi: Number(targetBmi) || 22,
    gender: 'male',
    preserve_identity: true,
    preserve_clothing: true,
    preserve_background: true,
    realism_level: 'high',
    avoid: [
      'six_pack',
      'bodybuilder',
      'face_swap',
      'age_change',
      'skin_tone_change',
      'unrealistic_body'
    ],
    prompt
  };
}

async function requestOpenAiBmiPreview(sourcePhoto, currentBmi) {
  const configuredEndpoint = window.NEWME_IMAGE_GENERATION_ENDPOINT || safeLocalStorageGet('newme_image_generation_endpoint');
  const endpoints = configuredEndpoint
    ? [configuredEndpoint]
    : window.location.protocol === 'file:'
      ? [LOCAL_BMI_PREVIEW_ENDPOINT, REMOTE_BMI_PREVIEW_ENDPOINT]
      : ['/api/bmi-preview', REMOTE_BMI_PREVIEW_ENDPOINT];
  const requestBody = buildBmiPreviewRequest(sourcePhoto, currentBmi, '22');
  const fetchPreview = (url) => fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(requestBody)
  });

  let lastError = null;
  for (const endpoint of endpoints) {
    let response;
    try {
      response = await fetchPreview(endpoint);
    } catch (error) {
      lastError = new Error(`Could not reach BMI 22 endpoint at ${endpoint}. ${error.message || ''}`.trim());
      continue;
    }

    let payload = {};
    try {
      payload = await response.json();
    } catch (error) {
      payload = {};
    }

    if (response.ok) {
      return payload.imageDataUrl || payload.image_url || payload.url || '';
    }

    const detail = typeof payload.detail === 'string' ? payload.detail : payload.detail?.error?.message;
    const message = [payload.error, detail].filter(Boolean).join(' ') || `Image endpoint returned ${response.status}`;
    lastError = new Error(message);

    const isEndpointDiscoveryFailure = !configuredEndpoint && [404, 405, 501].includes(response.status);
    if (endpoint === LOCAL_BMI_PREVIEW_ENDPOINT && response.status === 501 && !payload.error) {
      lastError = new Error('Local port 8082 is serving static files, not the GlowSlim BMI image server. Restart it with newme_server.py and OPENAI_API_KEY.');
      break;
    }
    if (!isEndpointDiscoveryFailure) break;
  }

  throw lastError || new Error('Could not reach BMI 22 generation endpoint.');
}

async function requestOpenAiBmiPreviewWithEndpoint(endpoint, requestBody) {
  const response = await fetch(endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(requestBody)
  });
  const payload = await response.json().catch(() => ({}));
  if (!response.ok) {
    const detail = typeof payload.detail === 'string' ? payload.detail : payload.detail?.error?.message;
    const message = [payload.error, detail].filter(Boolean).join(' ') || `Image endpoint returned ${response.status}`;
    throw new Error(message);
  }
  return payload.imageDataUrl || payload.image_url || payload.url || '';
}

function nextPrescriptionStatus(currentStatus, consultCompleted) {
  if (currentStatus === 'not_uploaded') return 'uploaded';
  if (currentStatus === 'uploaded' || currentStatus === 'needs_clarification' || currentStatus === 'rejected') return 'under_review';
  if (currentStatus === 'under_review') return consultCompleted ? 'approved' : 'under_review';
  return 'approved';
}

function renderLanding() {
  const partner = getPartnerInfo();
  const attribution = appState.attribution;
  const partnerLabel = attribution.partnerId === 'direct' ? 'Standalone app' : partner.label;

  return `
    <div class="screen-stack landing-page">
      <header class="landing-hero">
        <p class="eyebrow">${escapeHtml(partner.eyebrow)}</p>
        <h1>${escapeHtml(partner.headline)}</h1>
        <p class="hero-copy">${escapeHtml(partner.copy)}</p>
        <div class="badge-row">
          ${badge('Doctor supervised', 'care')}
          ${badge('Private progress', 'lock')}
          ${badge('Event ready', 'sparkle')}
        </div>
        <div class="cta-row landing-actions">
          <button class="cta" type="button" data-action="start-onboarding">${icon('sparkle')} Open GlowSlim</button>
          <button class="cta secondary" type="button" data-action="start-safety-path">${icon('user')} Edit my Profile</button>
        </div>
      </header>
      ${card(`
        <p class="section-label">Launch context</p>
        <h2>${escapeHtml(partnerLabel)}</h2>
        <p class="subtle">${escapeHtml(partner.trust)}</p>
        <div class="compact-list">
          <div class="compact-row"><span><strong>Partner</strong><span class="subtle">${escapeHtml(attribution.partnerId)}</span></span>${icon('check')}</div>
          <div class="compact-row"><span><strong>Campaign</strong><span class="subtle">${escapeHtml(attribution.campaignId)}</span></span>${icon('check')}</div>
          <div class="compact-row"><span><strong>Entry mode</strong><span class="subtle">${escapeHtml(attribution.entryMode)}</span></span>${icon('check')}</div>
        </div>
      `, 'feature')}
      ${card(`
        <p class="section-label">Setup stays optional</p>
        <div class="plan-chip-grid">
          <span class="plan-chip">30-Day Debloat</span>
          <span class="plan-chip">60-Day Shape Shift</span>
          <span class="plan-chip">90-Day Wedding Slim</span>
        </div>
        <p class="subtle">${escapeHtml(APP_NAME)} starts with sensible defaults. You can edit name, goal, health context, and biomarkers from Profile whenever needed.</p>
      `)}
    </div>
  `;
}

function renderOnboarding() {
  const stepRenderers = [renderOccasionStep, renderBodyStep, renderFocusStep, renderSummaryStep];
  return `
    <div class="screen-stack onboarding-page">
      <header class="page-title">
        <div>
          <p class="eyebrow">Event onboarding</p>
          <h1>${onboardingHeading()}</h1>
        </div>
        <span class="step-badge">${appState.onboardingStep + 1} / ${stepRenderers.length}</span>
      </header>
      <div class="step-meter" aria-hidden="true">
        <span style="width:${((appState.onboardingStep + 1) / stepRenderers.length) * 100}%"></span>
      </div>
      ${appState.validationMessage ? `<p class="form-error">${escapeHtml(appState.validationMessage)}</p>` : ''}
      ${stepRenderers[appState.onboardingStep]()}
      <div class="onboarding-actions">
        ${appState.onboardingStep > 0 ? '<button class="cta secondary" type="button" data-action="previous-onboarding">Back</button>' : '<button class="cta secondary" type="button" data-action="back-to-landing">Landing</button>'}
        <button class="cta" type="button" data-action="${appState.onboardingStep === stepRenderers.length - 1 ? 'finish-onboarding' : 'next-onboarding'}">
          ${appState.onboardingStep === stepRenderers.length - 1 ? 'Continue to safety' : 'Continue'} ${icon('chevron')}
        </button>
      </div>
    </div>
  `;
}

function onboardingHeading() {
  return ['What are you getting ready for?', 'Tell us your body starting point.', 'Choose your visible-change focus.', 'Your event plan is ready.'][appState.onboardingStep];
}

function renderOptionGrid(name, options, selectedValue) {
  return `
    <div class="choice-grid">
      ${options.map((option) => `
        <label class="choice-card ${selectedValue === option ? 'is-selected' : ''}">
          <input type="radio" name="${name}" value="${escapeHtml(option)}" data-field="${name}" ${selectedValue === option ? 'checked' : ''}>
          <span>${escapeHtml(option)}</span>
        </label>
      `).join('')}
    </div>
  `;
}

function renderCheckboxGrid(name, options, selectedValues) {
  return `
    <div class="choice-grid">
      ${options.map((option) => `
        <label class="choice-card ${selectedValues.includes(option) ? 'is-selected' : ''}">
          <input type="checkbox" value="${escapeHtml(option)}" data-field="${name}" ${selectedValues.includes(option) ? 'checked' : ''}>
          <span>${escapeHtml(option)}</span>
        </label>
      `).join('')}
    </div>
  `;
}

function renderOccasionStep() {
  return card(`
    <div class="field-group">
      <label class="field-label">Occasion</label>
      ${renderOptionGrid('occasion', occasionOptions, appState.onboarding.occasion)}
    </div>
    <div class="field-group">
      <label class="field-label" for="event-date">Event date</label>
      <input class="text-input" id="event-date" type="date" min="${PROTOTYPE_TODAY}" data-field="eventDate" value="${escapeHtml(appState.onboarding.eventDate)}">
    </div>
  `, 'feature');
}

function renderBodyStep() {
  return card(`
    <div class="two-field-grid">
      <label class="field-group">
        <span class="field-label">${icon('ruler')} Height</span>
        <input class="text-input" type="number" inputmode="numeric" min="120" max="230" data-field="height" value="${escapeHtml(appState.onboarding.height)}">
        <span class="field-hint">cm</span>
      </label>
      <label class="field-group">
        <span class="field-label">${icon('chart')} Weight</span>
        <input class="text-input" type="number" inputmode="numeric" min="30" max="220" data-field="weight" value="${escapeHtml(appState.onboarding.weight)}">
        <span class="field-hint">kg</span>
      </label>
    </div>
    <label class="field-group">
      <span class="field-label">Target look</span>
      <input class="text-input" type="text" data-field="targetLook" value="${escapeHtml(appState.onboarding.targetLook)}" placeholder="feel lighter in my lehenga">
    </label>
  `);
}

function renderFocusStep() {
  return card(`
    <div class="field-group">
      <label class="field-label">Body focus areas</label>
      ${renderCheckboxGrid('bodyFocus', bodyFocusOptions, appState.onboarding.bodyFocus)}
    </div>
    <div class="field-group">
      <label class="field-label">Comfort level</label>
      ${renderOptionGrid('comfortLevel', comfortOptions, appState.onboarding.comfortLevel)}
    </div>
  `, 'blue');
}

function renderSummaryStep() {
  const daysLeft = daysUntil(appState.onboarding.eventDate);
  const focus = getWeeklyFocus();

  return card(`
    <p class="section-label">Personalized output</p>
    <span class="large-number">${daysLeft}</span>
    <h2>days to your ${escapeHtml(getEventNoun())}</h2>
    <p class="subtle">We'll build a safe visible-change plan for your body, outfit, and confidence.</p>
    <div class="progress-box">
      <div class="progress-label">
        <span>Recommended start plan</span>
        <strong>${escapeHtml(recommendPlan(daysLeft))}</strong>
      </div>
      ${progressBar(Math.min(92, Math.max(28, 100 - daysLeft / 2)))}
      <p class="focus-line">First focus: <strong>${escapeHtml(focus)}</strong></p>
    </div>
    <p class="privacy-note">${icon('lock')} Partner attribution is stored, but health data is not shared without consent.</p>
  `, 'feature');
}

function renderSafety() {
  const stepRenderers = [renderSafetyBasicsStep, renderSafetyHistoryStep, renderSafetySymptomsStep];
  const currentSafetyPreview = buildPlanRecommendation();

  return `
    <div class="screen-stack onboarding-page safety-page">
      <header class="page-title">
        <div>
          <p class="eyebrow">Safety check</p>
          <h1>${safetyHeading()}</h1>
        </div>
        <span class="step-badge">${appState.safetyStep + 1} / ${stepRenderers.length}</span>
      </header>
      <div class="step-meter" aria-hidden="true">
        <span style="width:${((appState.safetyStep + 1) / stepRenderers.length) * 100}%"></span>
      </div>
      ${appState.validationMessage ? `<p class="form-error">${escapeHtml(appState.validationMessage)}</p>` : ''}
      ${stepRenderers[appState.safetyStep]()}
      ${card(`
        <p class="section-label">Live routing preview</p>
        <h3>${escapeHtml(currentSafetyPreview.label)}</h3>
        <p class="subtle">${escapeHtml(currentSafetyPreview.headline)}</p>
      `, safetyCardClass(currentSafetyPreview.severity))}
      <div class="onboarding-actions">
        ${appState.safetyStep > 0 ? '<button class="cta secondary" type="button" data-action="previous-safety">Back</button>' : '<button class="cta secondary" type="button" data-action="back-to-onboarding-summary">Back</button>'}
        <button class="cta" type="button" data-action="${appState.safetyStep === stepRenderers.length - 1 ? 'finish-safety' : 'next-safety'}">
          ${appState.safetyStep === stepRenderers.length - 1 ? 'See my plan' : 'Continue'} ${icon('chevron')}
        </button>
      </div>
    </div>
  `;
}

function safetyHeading() {
  return ['A few basics for safe routing.', 'Any history we should protect around?', 'Any symptoms today?'][appState.safetyStep];
}

function safetyCardClass(severity) {
  if (severity === 'urgent') return 'safety-urgent';
  if (severity === 'blocked') return 'coral';
  if (severity === 'review') return 'lilac';
  return 'feature';
}

function renderSafetyOptionGrid(name, options, selectedValue) {
  return `
    <div class="choice-grid">
      ${options.map((option) => `
        <label class="choice-card ${selectedValue === option ? 'is-selected' : ''}">
          <input type="radio" name="${name}" value="${escapeHtml(option)}" data-safety-field="${name}" ${selectedValue === option ? 'checked' : ''}>
          <span>${escapeHtml(option)}</span>
        </label>
      `).join('')}
    </div>
  `;
}

function renderSafetyCheckboxGrid(name, options, selectedValues) {
  return `
    <div class="choice-grid">
      ${options.map((option) => `
        <label class="choice-card ${selectedValues.includes(option) ? 'is-selected' : ''}">
          <input type="checkbox" value="${escapeHtml(option)}" data-safety-field="${name}" ${selectedValues.includes(option) ? 'checked' : ''}>
          <span>${escapeHtml(option)}</span>
        </label>
      `).join('')}
    </div>
  `;
}

function renderSafetyBasicsStep() {
  return card(`
    <div class="two-field-grid">
      <label class="field-group">
        <span class="field-label">Age</span>
        <input class="text-input" type="number" inputmode="numeric" min="18" max="100" data-safety-field="age" value="${escapeHtml(appState.safety.age)}">
      </label>
      <label class="field-group">
        <span class="field-label">Waist</span>
        <input class="text-input" type="number" inputmode="numeric" min="40" max="180" data-safety-field="waist" value="${escapeHtml(appState.safety.waist)}">
        <span class="field-hint">cm</span>
      </label>
    </div>
    <div class="field-group">
      <label class="field-label">Sex</label>
      ${renderSafetyOptionGrid('sex', sexOptions, appState.safety.sex)}
    </div>
    <div class="field-group">
      <label class="field-label">Diabetes / glucose status</label>
      ${renderSafetyOptionGrid('diabetesStatus', diabetesOptions, appState.safety.diabetesStatus)}
    </div>
    <label class="field-group">
      <span class="field-label">HbA1c if available</span>
      <input class="text-input" type="number" inputmode="decimal" min="3" max="15" step="0.1" data-safety-field="hba1c" value="${escapeHtml(appState.safety.hba1c)}" placeholder="Optional">
    </label>
  `);
}

function renderSafetyHistoryStep() {
  return card(`
    <div class="field-group">
      <label class="field-label">Pregnancy / breastfeeding status</label>
      ${renderSafetyOptionGrid('pregnancyStatus', pregnancyOptions, appState.safety.pregnancyStatus)}
    </div>
    <div class="field-group">
      <label class="field-label">Medical history</label>
      ${renderSafetyCheckboxGrid('medicalRisks', medicalRiskOptions, appState.safety.medicalRisks)}
    </div>
    <label class="field-group">
      <span class="field-label">Existing medications</span>
      <textarea class="text-input textarea-input" data-safety-field="existingMedications" placeholder="Optional">${escapeHtml(appState.safety.existingMedications)}</textarea>
    </label>
  `, 'blue');
}

function renderSafetySymptomsStep() {
  return card(`
    <div class="field-group">
      <label class="field-label">Current symptoms</label>
      ${renderSafetyCheckboxGrid('currentSymptoms', symptomOptions, appState.safety.currentSymptoms)}
    </div>
    <div class="field-group">
      <label class="field-label">Prior GLP-1 or weight-loss medicine usage</label>
      ${renderSafetyOptionGrid('priorTreatment', priorTreatmentOptions, appState.safety.priorTreatment)}
    </div>
    <p class="privacy-note">${icon('shield')} This screen routes safety only. It does not prescribe medicine or confirm GLP-1 eligibility.</p>
  `, 'feature');
}

function renderRecommendation() {
  const recommendation = appState.recommendation || buildPlanRecommendation();
  const basePlan = getPlanByName(recommendation.basePlanName);
  const showPlanName = recommendation.recommendedPlan === 'Doctor Review First' ? basePlan.name : recommendation.recommendedPlan;

  return `
    <div class="screen-stack recommendation-page">
      <header class="page-title">
        <div>
          <p class="eyebrow">Plan recommendation</p>
          <h1>${escapeHtml(recommendation.label)}</h1>
        </div>
        <span class="icon-disc teal">${icon('shield')}</span>
      </header>
      ${card(`
        <p class="section-label">Eligibility state</p>
        <h2>${escapeHtml(recommendation.headline)}</h2>
        <p class="subtle">${escapeHtml(recommendation.explanation)}</p>
        <div class="status-grid">
          <span class="status-block"><strong>${recommendation.daysLeft}</strong> days left</span>
          <span class="status-block"><strong>${recommendation.bmi ? recommendation.bmi.toFixed(1) : 'NA'}</strong> BMI estimate</span>
        </div>
        <div class="compact-list">
          ${recommendation.reasons.map((reason) => `<div class="compact-row"><span>${escapeHtml(reason)}</span>${icon('check')}</div>`).join('')}
        </div>
      `, safetyCardClass(recommendation.severity))}
      ${card(`
        <p class="section-label">Recommended start</p>
        <h2>${escapeHtml(showPlanName)}</h2>
        <p class="subtle">${escapeHtml(recommendation.path)}</p>
        <div class="progress-box">
          <div class="progress-label">
            <span>${escapeHtml(basePlan.promise)}</span>
            <strong>${escapeHtml(basePlan.duration)}</strong>
          </div>
          ${progressBar(recommendation.severity === 'urgent' ? 22 : Math.min(92, Math.max(32, 100 - recommendation.daysLeft / 2)))}
          <p class="focus-line">Prescription support: <strong>${recommendation.allowPrescriptionPrompt ? 'doctor consult required first' : 'locked for now'}</strong></p>
        </div>
      `, 'feature')}
      ${renderPlanComparison(recommendation.basePlanName)}
      <div class="onboarding-actions">
        <button class="cta secondary" type="button" data-action="back-to-safety">Back</button>
        <button class="cta" type="button" data-action="accept-recommendation">Go to Today ${icon('chevron')}</button>
      </div>
    </div>
  `;
}

function renderPlanComparison(selectedPlanName) {
  return card(`
    <p class="section-label">Compare plans</p>
    <div class="plan-compare-list">
      ${planCatalog.map((plan) => `
        <article class="plan-card ${plan.name === selectedPlanName ? 'is-recommended' : ''}">
          <div>
            <p class="metric-label">${escapeHtml(plan.duration)}</p>
            <h3>${escapeHtml(plan.name)}</h3>
            <p class="subtle">${escapeHtml(plan.promise)}</p>
          </div>
          <span class="status-pill">${plan.name === selectedPlanName ? 'Recommended' : escapeHtml(plan.bestFor)}</span>
        </article>
      `).join('')}
    </div>
  `);
}

function renderHero() {
  const { user } = mockData;
  return `
    <header class="hero">
      <div>
        <p class="eyebrow">${escapeHtml(user.dateLabel)}</p>
        <h1>${escapeHtml(user.greeting)}, ${escapeHtml(user.name)}.</h1>
        <p class="hero-copy">${escapeHtml(user.tagline).replace('you', '<em>you</em>')}</p>
        <div class="badge-row">
          ${badge(mockData.doctorStatus.label, 'care')}
          ${badge('Glow protected', 'sparkle')}
        </div>
      </div>
      <button class="avatar-button" type="button" data-action="open-profile" aria-label="Open profile and settings">
        ${escapeHtml(user.initial)}
      </button>
    </header>
  `;
}

function renderEventCard() {
  const { event } = mockData;
  const daily = mockData.daily;
  return card(`
    <p class="section-label">Your event</p>
    <div class="event-grid">
      <div>
        <span class="large-number">${event.daysLeft}</span>
        <h2>days to your ${escapeHtml(event.type)}</h2>
      </div>
      <p class="milestone subtle"><strong>${escapeHtml(event.milestoneLabel)}</strong>${escapeHtml(event.milestoneDetail)}</p>
    </div>
    <div class="progress-box">
      <div class="progress-label">
        <span>Event look readiness</span>
        <strong>${event.readiness}%</strong>
      </div>
      ${progressBar(event.readiness)}
      <p class="focus-line">This week's focus: <strong>${escapeHtml(event.weeklyFocus)}</strong></p>
    </div>
    <div class="today-kpi-row">
      <span class="today-kpi"><strong>${daily.completedCount}/${daily.totalCount}</strong> actions today</span>
      <span class="today-kpi"><strong>${daily.completionPercent}%</strong> daily rhythm</span>
    </div>
  `, 'feature');
}

function renderActionsCard() {
  const daily = mockData.daily;
  const items = daily.actions.map((action) => `
    <button class="action-item ${action.done ? 'is-done' : ''}" type="button" data-action="daily-action" data-action-id="${escapeHtml(action.id)}">
      <span class="icon-disc">${icon(action.icon)}</span>
      <span>
        <span class="action-name">${escapeHtml(action.label)}</span>
        <span class="action-detail">${escapeHtml(action.detail)}</span>
      </span>
      <span class="status-pill">${escapeHtml(action.status)}</span>
    </button>
  `).join('');

  return card(`
    <p class="section-label">Today's focus</p>
    <h2>3 small slim actions</h2>
    <div class="today-progress">
      ${progressBar(daily.completionPercent)}
      <span>${daily.completedCount} of ${daily.totalCount} done</span>
    </div>
    <div class="action-list">${items}</div>
  `);
}

function renderNextActionCard() {
  const { nextAction } = mockData.daily;
  return card(`
    <div class="card-title-row">
      <span class="icon-disc teal">${icon(nextAction.icon)}</span>
      <div>
        <p class="section-label">Next best action</p>
        <h3>${escapeHtml(nextAction.done ? 'Daily rhythm complete' : nextAction.label)}</h3>
        <p class="subtle">${escapeHtml(nextAction.done ? 'Beautiful. Keep the rest of the day steady and boring in the best way.' : nextAction.detail)}</p>
      </div>
    </div>
  `, nextAction.done ? 'feature' : '');
}

function renderSwiggyMealAgentCard() {
  const agent = mockData.foodAgent;
  const selectedMeal = agent.selectedMeal || swiggyOrderShortlist[0];
  const prepared = agent.orderStatus === 'ready_to_review';
  const rules = agent.rules.map((rule) => `<span class="diet-chip">${escapeHtml(rule)}</span>`).join('');
  const options = agent.shortlist.map((item, index) => `
    <button class="meal-option ${index === agent.selectedIndex ? 'is-selected' : ''}" type="button" data-action="select-swiggy-meal" data-meal-index="${index}">
      <span>
        <strong>${escapeHtml(item.title)}</strong>
        <small>${escapeHtml(item.detail)}</small>
      </span>
      <span class="status-pill">${index === agent.selectedIndex ? 'Picked' : 'Use'}</span>
    </button>
  `).join('');

  return card(`
    <div class="card-title-row">
      <span class="icon-disc teal">${icon('bowl')}</span>
      <div>
        <p class="section-label">Swiggy meal agent</p>
        <h3>${prepared ? 'Healthy order brief ready' : 'Prepare a high-protein order'}</h3>
        <p class="subtle">${escapeHtml(agent.connectionLabel)} · ${escapeHtml(agent.statusLabel)}</p>
      </div>
    </div>
    <div class="mobile-link-grid">
      <label class="field-label" for="swiggy-mobile-input">${icon('lock')} Customer mobile reference</label>
      <input class="text-input" id="swiggy-mobile-input" type="tel" inputmode="numeric" maxlength="10" data-food-field="mobileNumber" value="${escapeHtml(agent.mobileNumber || '')}" placeholder="10 digit mobile" aria-label="Swiggy mobile number">
      <div class="compact-row mobile-status-row">
        <span><strong>${escapeHtml(agent.customerLoginConfirmed ? 'Login confirmed by customer' : agent.maskedMobile || 'No mobile saved')}</strong><span class="subtle"> OTP, password, address, and payment stay inside Swiggy under customer control.</span></span>
        ${icon(agent.customerLoginConfirmed ? 'check' : 'lock')}
      </div>
      <div class="cta-row mobile-cta-row">
        <button class="cta secondary" type="button" data-action="save-swiggy-mobile">Save mobile</button>
        <button class="cta secondary" type="button" data-action="open-swiggy-handoff" ${agent.canHandoff ? '' : 'disabled'}>Open Swiggy</button>
      </div>
      <button class="cta secondary full checkout-lock" type="button" data-action="confirm-swiggy-login">${icon('check')} I completed Swiggy login myself</button>
    </div>
    <div class="order-prompt-box">
      <span>Prompt</span>
      <strong>${escapeHtml(agent.prompt)}</strong>
    </div>
    <div class="diet-chip-row">${rules}</div>
    <div class="meal-option-list">${options}</div>
    <div class="compact-list">
      <div class="compact-row">
        <span><strong>Selected brief</strong><span class="subtle"> ${escapeHtml(selectedMeal.instruction)}</span></span>
        ${icon('check')}
      </div>
      <div class="compact-row">
        <span><strong>Purchase guardrail</strong><span class="subtle"> ${escapeHtml(APP_NAME)} opens Swiggy with the order brief. The customer must log in, review cart, pay, and tap the final Swiggy place-order button.</span></span>
        ${icon('lock')}
      </div>
    </div>
    <div class="cta-row">
      <button class="cta" type="button" data-action="prepare-swiggy-order">${icon('sparkle')} ${prepared ? 'Refresh order brief' : 'Prepare order brief'}</button>
      <button class="cta secondary" type="button" data-action="open-swiggy-handoff" ${agent.canHandoff ? '' : 'disabled'}>Open Swiggy handoff</button>
    </div>
    <button class="cta secondary full checkout-lock" type="button" data-action="confirm-swiggy-order">${icon('card')} Customer completes final checkout in Swiggy</button>
  `, 'feature meal-agent-card');
}

function renderWooCommerceAgentCard() {
  const agent = mockData.commerceAgent;
  const rules = agent.rules.map((rule) => `<span class="diet-chip">${escapeHtml(rule)}</span>`).join('');
  const prepared = agent.taskStatus === 'ready_to_search' || agent.taskStatus === 'search_opened' || agent.taskStatus === 'cart_opened';

  return card(`
    <div class="card-title-row">
      <span class="icon-disc teal">${icon('card')}</span>
      <div>
        <p class="section-label">WooCommerce cart agent</p>
        <h3>${prepared ? 'Slim fit jean task ready' : 'Connect a WooCommerce store'}</h3>
        <p class="subtle">${escapeHtml(agent.connectionLabel)} · ${escapeHtml(agent.statusLabel)}</p>
      </div>
    </div>
    <div class="mobile-link-grid">
      <label class="field-label" for="woocommerce-store-input">${icon('card')} Store URL</label>
      <input class="text-input" id="woocommerce-store-input" type="url" data-commerce-field="storeUrl" value="${escapeHtml(agent.storeUrl || '')}" placeholder="https://your-store.com" aria-label="WooCommerce store URL">
      <label class="field-label" for="woocommerce-email-input">${icon('user')} Login email or username</label>
      <input class="text-input" id="woocommerce-email-input" type="text" data-commerce-field="loginEmail" value="${escapeHtml(agent.loginEmail || '')}" placeholder="customer@example.com" aria-label="WooCommerce login email">
      <button class="cta secondary full checkout-lock" type="button" data-action="save-woocommerce-store">Save store details</button>
      <div class="compact-row mobile-status-row">
        <span><strong>${escapeHtml(agent.hasStore ? 'Store link ready' : 'Store URL needed')}</strong><span class="subtle"> Password, OTP, address, and payment stay inside the WooCommerce store under customer control.</span></span>
        ${icon(agent.customerLoginConfirmed ? 'check' : 'lock')}
      </div>
    </div>
    <div class="order-prompt-box">
      <span>Cart task</span>
      <strong>Add ${escapeHtml(agent.productQuery)} to cart after customer login. Customer chooses size, color, shipping, payment, and final purchase.</strong>
    </div>
    <div class="diet-chip-row">${rules}</div>
    <div class="compact-list">
      <div class="compact-row">
        <span><strong>Login URL</strong><span class="subtle"> ${escapeHtml(agent.loginUrl || 'Add store URL first')}</span></span>
        ${icon('lock')}
      </div>
      <div class="compact-row">
        <span><strong>Product search</strong><span class="subtle"> ${escapeHtml(agent.productSearchUrl || 'Search URL builds after store URL')}</span></span>
        ${icon('chevron')}
      </div>
    </div>
    <div class="cta-row">
      <button class="cta" type="button" data-action="prepare-woocommerce-agent" ${agent.hasStore ? '' : 'disabled'}>${icon('sparkle')} Prepare slim fit jean task</button>
      <button class="cta secondary" type="button" data-action="open-woocommerce-login" ${agent.canOpenLogin ? '' : 'disabled'}>Open login</button>
    </div>
    <div class="cta-row">
      <button class="cta secondary" type="button" data-action="confirm-woocommerce-login">${icon('check')} I logged in myself</button>
      <button class="cta secondary" type="button" data-action="open-woocommerce-search" ${agent.canSearchProduct ? '' : 'disabled'}>Find slim fit jean</button>
    </div>
    <button class="cta secondary full checkout-lock" type="button" data-action="open-woocommerce-cart" ${agent.canOpenCart ? '' : 'disabled'}>${icon('card')} Open cart after customer adds item</button>
  `, 'feature commerce-agent-card');
}

function renderSafetyStatusCard() {
  const recommendation = mockData.recommendation;
  return card(`
    <div class="card-title-row">
      <span class="icon-disc ${recommendation.severity === 'urgent' ? 'yellow' : 'teal'}">${icon('shield')}</span>
      <div>
        <p class="section-label">Doctor safety status</p>
        <h3>${escapeHtml(recommendation.label)}</h3>
        <p class="subtle">${escapeHtml(recommendation.headline)}</p>
      </div>
    </div>
  `, safetyCardClass(recommendation.severity));
}

function renderReminderCard() {
  const reminder = mockData.daily.reminder;
  return card(`
    <div class="card-title-row">
      <span class="icon-disc teal">${icon(reminder.icon)}</span>
      <div>
        <p class="section-label">${escapeHtml(reminder.eyebrow)}</p>
        <h3>${escapeHtml(reminder.title)}</h3>
        <p class="subtle">${escapeHtml(reminder.detail)}</p>
      </div>
    </div>
    <div class="cta-row">
      <button class="cta" type="button" data-action="reminder-primary">${icon(reminder.icon)} ${escapeHtml(reminder.primary)}</button>
      <button class="cta secondary" type="button" data-action="reminder-secondary">${escapeHtml(reminder.secondary)}</button>
    </div>
  `);
}

function renderReminderHooksCard() {
  const hooks = mockData.daily.hooks.map((hook) => `
    <div class="compact-row">
      <span><strong>${escapeHtml(hook.label)}</strong><span class="subtle"> ${escapeHtml(hook.channel)} · ${escapeHtml(hook.time)}</span></span>
      ${icon('bell')}
    </div>
  `).join('');

  return card(`
    <p class="section-label">Reminder hooks</p>
    <h3>Ready for notification scheduling</h3>
    <div class="compact-list">${hooks}</div>
  `);
}

function renderTreatmentTrackerCard() {
  const treatment = mockData.treatment;
  const habitRows = treatment.habitItems.map((habit) => `
    <button class="habit-chip ${habit.done ? 'is-done' : ''}" type="button" data-action="toggle-habit" data-habit-id="${escapeHtml(habit.id)}" ${treatment.trackingEnabled ? '' : 'disabled'}>
      ${icon(habit.icon)}
      <span>
        <strong>${escapeHtml(habit.label)}</strong>
        <small>${escapeHtml(habit.time)} · ${escapeHtml(habit.done ? 'Done' : habit.detail)}</small>
      </span>
    </button>
  `).join('');
  const missedProtocol = treatment.doseStatus === 'missed' || treatment.missedDoseProtocolSeen
    ? `<div class="compact-list protocol-list">${treatment.missedDoseProtocol.map((item) => `<div class="compact-row"><span>${escapeHtml(item)}</span>${icon('shield')}</div>`).join('')}</div>`
    : '';

  return card(`
    <div class="card-title-row">
      <div>
        <p class="section-label">Dose + habit tracker</p>
        <h2>${escapeHtml(treatment.dose.title)}</h2>
        <p class="subtle">${escapeHtml(treatment.dose.detail)}</p>
      </div>
      <span class="icon-disc ${treatment.doseStatus === 'paused' ? 'yellow' : 'teal'}">${icon(treatment.canLogDose ? 'syringe' : 'lock')}</span>
    </div>
    <div class="progress-box">
      <div class="progress-label">
        <span>Lifestyle schedule</span>
        <strong>${treatment.completedHabits}/${treatment.totalHabits}</strong>
      </div>
      ${progressBar(treatment.habitCompletionPercent)}
    </div>
    <div class="habit-grid">${habitRows}</div>
    <div class="cta-row">
      <button class="cta" type="button" data-action="${treatment.doseStatus === 'taken' ? 'undo-dose-log' : treatment.doseStatus === 'missed' ? 'view-missed-dose-protocol' : 'log-dose-taken'}" ${treatment.canLogDose || treatment.doseStatus === 'missed' ? '' : 'disabled'}>${icon(treatment.canLogDose ? 'syringe' : 'lock')} ${escapeHtml(treatment.dose.primary)}</button>
      <button class="cta secondary" type="button" data-action="${treatment.doseStatus === 'missed' ? 'log-dose-taken' : 'log-dose-missed'}" ${treatment.canLogDose ? '' : 'disabled'}>${escapeHtml(treatment.dose.secondary)}</button>
    </div>
    ${missedProtocol}
  `, treatment.doseStatus === 'paused' ? 'safety-urgent' : treatment.doseStatus === 'locked' ? 'lilac' : '');
}

function renderPhotoUploadCta(label, variant = '') {
  const classes = ['cta', 'upload-file-label', variant].filter(Boolean).join(' ');
  return `
    <label class="${classes}">
      <input class="upload-file-control" type="file" accept="image/png,image/jpeg,image/jpg,image/webp,image/heic,image/heif" aria-label="${escapeHtml(label)}">
      ${icon('camera')} ${escapeHtml(label)}
    </label>
  `;
}

function renderMirrorMoment() {
  const progress = mockData.progress;
  const hasPhotoToday = progress.photos.some((photo) => photo.date === PROTOTYPE_TODAY);
  return card(`
    <div class="card-title-row">
      <span class="icon-disc teal">${icon('camera')}</span>
      <div>
        <h3>This week's mirror moment</h3>
        <p class="subtle">${hasPhotoToday ? 'Private photo added for this week. Add another angle if useful.' : 'Take a private front + side photo. Only you ever see it.'}</p>
        <p class="subtle tiny">${icon('lock')} Locked to your device · ${progress.photos.length} private photos</p>
      </div>
    </div>
    <div class="cta-row">
      ${renderPhotoUploadCta("Add this week's photo")}
      <button class="cta secondary" type="button" data-action="toggle-photo-compare">${progress.compareMode ? 'Close compare' : 'Compare'}</button>
    </div>
  `);
}

function renderFeelingPanel() {
  const progress = mockData.progress.feeling;
  return card(`
    <h2>How you're feeling today</h2>
    <div class="metric-grid">
      ${metricTile('Bloating', progress.bloating.value, progress.bloating.detail)}
      ${metricTile('Cravings', progress.cravings.value, progress.cravings.detail)}
      ${metricTile('Energy', progress.energy.value, progress.energy.detail)}
      ${metricTile('Sleep', progress.sleep.value, progress.sleep.detail)}
    </div>
    <div class="cta-row">
      <button class="cta secondary" type="button">Lighter</button>
      <button class="cta secondary" type="button">Same</button>
    </div>
  `, 'blue');
}

function renderCoachNote() {
  return card(`
    <article class="note-card">
      <span class="icon-disc yellow">P</span>
      <div>
        <div class="note-meta">Coach Priya · Voice note · 9:12 AM</div>
        <p>"Beautiful work yesterday. Let's protect your face glow this week: warm water + lemon at sunrise, paneer bhurji at breakfast."</p>
        <button class="cta secondary" type="button">Reply ${icon('chevron')}</button>
      </div>
    </article>
  `);
}

function renderToday() {
  return `
    <div class="screen-stack">
      ${renderHero()}
      ${renderEventCard()}
      ${renderActionsCard()}
      ${renderNextActionCard()}
      ${renderSwiggyMealAgentCard()}
      ${renderWooCommerceAgentCard()}
      ${renderSafetyStatusCard()}
      ${renderTreatmentTrackerCard()}
      ${renderReminderCard()}
      ${renderMirrorMoment()}
      ${renderFeelingPanel()}
      ${renderCoachNote()}
      ${renderReminderHooksCard()}
    </div>
  `;
}

function renderProfile() {
  const profile = mockData.profile;
  const goalOptions = profileGoalOptions.map((goal) => `
    <option value="${escapeHtml(goal)}" ${profile.goal === goal ? 'selected' : ''}>${escapeHtml(goal)}</option>
  `).join('');
  const genderOptions = sexOptions.map((gender) => `
    <option value="${escapeHtml(gender)}" ${profile.gender === gender ? 'selected' : ''}>${escapeHtml(gender)}</option>
  `).join('');
  const diseaseOptions = (selectedValue) => criticalDiseaseOptions.map((disease) => `
    <option value="${escapeHtml(disease)}" ${selectedValue === disease ? 'selected' : ''}>${escapeHtml(disease)}</option>
  `).join('');
  const biomarkerRows = profile.biomarkers.map((biomarker, index) => `
    <label class="biomarker-row">
      <span>
        <strong>${escapeHtml(biomarker.label)}</strong>
        <small>${escapeHtml(biomarker.unit)}</small>
      </span>
      <input class="text-input" type="text" inputmode="decimal" value="${escapeHtml(biomarker.value)}" data-biomarker-index="${index}" aria-label="${escapeHtml(biomarker.label)} value" placeholder="Add value">
    </label>
  `).join('');

  return `
    <div class="tab-page">
      <div class="page-title">
        <div>
          <p class="app-brand">${escapeHtml(APP_NAME)}</p>
          <p class="eyebrow">Profile</p>
          <h1>Body plan setup</h1>
        </div>
        <button class="avatar-button" type="button" data-action="open-profile" aria-label="Open profile summary">${escapeHtml(mockData.user.initial)}</button>
      </div>
      ${card(`
        <div class="card-title-row">
          <div>
            <p class="section-label">Name</p>
            <h2>${escapeHtml(profile.fullName)}</h2>
            <p class="subtle">This name is used across Today, reports, profile summaries, and care-team context.</p>
          </div>
          <span class="icon-disc teal">${icon('user')}</span>
        </div>
        <div class="profile-form-grid">
          <label>
            <span class="field-label">First name</span>
            <input class="text-input" type="text" value="${escapeHtml(profile.firstName)}" data-profile-field="firstName" autocomplete="given-name">
          </label>
          <label>
            <span class="field-label">Second name</span>
            <input class="text-input" type="text" value="${escapeHtml(profile.secondName)}" data-profile-field="secondName" autocomplete="family-name" placeholder="Optional">
          </label>
        </div>
      `, 'feature')}
      ${renderBmiPreviewCard()}
      ${card(`
        <div class="card-title-row">
          <div>
            <p class="section-label">Plan essentials</p>
            <h2>${escapeHtml(profile.goal)} · ${escapeHtml(profile.daysLeft)} days</h2>
            <p class="subtle">A few defaults are enough to start. Update only what has changed.</p>
          </div>
          <span class="icon-disc teal">${icon('user')}</span>
        </div>
        <div class="profile-form-grid">
          <label>
            <span class="field-label">Goal</span>
            <select class="text-input" data-profile-field="goal">${goalOptions}</select>
          </label>
          <label>
            <span class="field-label">Days left</span>
            <input class="text-input" type="number" min="0" max="365" value="${escapeHtml(profile.daysLeft)}" data-profile-field="daysLeft">
          </label>
          <label>
            <span class="field-label">Weight kg</span>
            <input class="text-input" type="number" min="30" max="220" step="0.1" value="${escapeHtml(profile.weight)}" data-profile-field="weight">
          </label>
          <label>
            <span class="field-label">Height cm</span>
            <input class="text-input" type="number" min="120" max="230" value="${escapeHtml(profile.height)}" data-profile-field="height">
          </label>
        </div>
        <details class="profile-disclosure">
          <summary>
            <span>Optional health context</span>
            <small>Age, gender, and conditions</small>
          </summary>
          <div class="profile-form-grid">
            <label>
              <span class="field-label">Age</span>
              <input class="text-input" type="number" min="13" max="100" value="${escapeHtml(profile.age)}" data-profile-field="age">
            </label>
            <label>
              <span class="field-label">Gender</span>
              <select class="text-input" data-profile-field="gender">${genderOptions}</select>
            </label>
            <label>
              <span class="field-label">Critical disease 1</span>
              <select class="text-input" data-profile-field="criticalDiseasePrimary">${diseaseOptions(profile.criticalDiseasePrimary)}</select>
            </label>
            <label>
              <span class="field-label">Critical disease 2</span>
              <select class="text-input" data-profile-field="criticalDiseaseSecondary">${diseaseOptions(profile.criticalDiseaseSecondary)}</select>
            </label>
          </div>
        </details>
      `, 'feature')}
      ${card(`
        <div class="card-title-row">
          <div>
            <p class="section-label">Biomarkers</p>
            <h2>Optional health markers</h2>
            <p class="subtle">Connect PharmEasy later, or open this section if you already know the values.</p>
          </div>
          <span class="icon-disc blue">${icon('chart')}</span>
        </div>
        <details class="profile-disclosure">
          <summary>
            <span>Show 5 biomarkers</span>
            <small>HbA1c, glucose, lipids, TSH</small>
          </summary>
          <div class="biomarker-grid">${biomarkerRows}</div>
        </details>
        <p class="privacy-note">${icon('lock')} Health data is private in this prototype and never shared with partners by default.</p>
      `)}
      <div class="profile-sync-footer">
        <span>${escapeHtml(profile.healthDataConnected ? `Synced with ${profile.healthDataProvider} · ${profile.healthDataLastSync}` : 'PharmEasy health sync is ready')}</span>
        <button class="lean-sync-button" type="button" data-action="connect-health-data">${icon('heart')} ${profile.healthDataConnected ? 'Sync Health Data with PharmEasy' : 'Connect Health Data with PharmEasy'}</button>
      </div>
    </div>
  `;
}

function renderPlan() {
  const { plan } = mockData;
  const recommendation = mockData.recommendation;
  return `
    <div class="tab-page">
      <div class="page-title">
        <div>
          <p class="eyebrow">Plan</p>
          <h1>${escapeHtml(plan.name)}</h1>
        </div>
        <button class="avatar-button" type="button" data-action="open-profile" aria-label="Open profile">${escapeHtml(mockData.user.initial)}</button>
      </div>
      ${card(`
        <p class="section-label">Active path</p>
        <h2>${escapeHtml(plan.path)}</h2>
        <p class="subtle">${escapeHtml(recommendation.explanation)}</p>
        <div class="compact-list">
          ${plan.includes.map((item) => `<div class="compact-row"><strong>${escapeHtml(item)}</strong>${icon('check')}</div>`).join('')}
        </div>
      `, 'lilac')}
      ${card(`
        <p class="section-label">Safety state</p>
        <h3>${escapeHtml(recommendation.label)}</h3>
        <p class="subtle">Medicine support is ${recommendation.allowPrescriptionPrompt ? 'available only through doctor consult.' : 'locked in this route.'}</p>
        <div class="status-grid">
          <span class="status-block"><strong>${recommendation.daysLeft}</strong> days</span>
          <span class="status-block"><strong>${recommendation.bmi ? recommendation.bmi.toFixed(1) : 'NA'}</strong> BMI</span>
        </div>
      `)}
      ${renderPlanComparison(recommendation.basePlanName)}
    </div>
  `;
}

function renderMirror() {
  const progress = mockData.progress;
  return `
    <div class="tab-page">
      <div class="page-title">
        <div>
          <p class="eyebrow">Mirror</p>
          <h1>Visible progress</h1>
        </div>
        <button class="avatar-button" type="button" data-action="open-profile" aria-label="Open profile">${escapeHtml(mockData.user.initial)}</button>
      </div>
      ${renderMirrorSummaryCard()}
      ${renderMirrorWeeklyReportCard()}
      ${renderVisibleSuccessMetricsCard()}
      ${renderOutfitFitCard()}
      ${renderPhotoVault()}
      ${progress.compareMode ? renderPhotoCompareCard() : ''}
      ${renderProgressCheckIn()}
      ${card(`
        <p class="section-label">Progress metric cards</p>
        <div class="metric-grid">
          ${metricTile('Waist', `${progress.metrics.waist.toFixed(1)} cm`, `${formatSigned(Number((progress.metrics.waist - progress.previous.waist).toFixed(1)), ' cm')} this week`)}
          ${metricTile('Outfit fit', `${progress.outfitFit}%`, 'readiness score')}
          ${metricTile('Glow', `${progress.metrics.glow}%`, 'hydration steady')}
          ${metricTile('Protein', `${progress.metrics.protein}%`, 'weekly target')}
        </div>
      `)}
    </div>
  `;
}

function renderMirrorSummaryCard() {
  const progress = mockData.progress;
  return card(`
    <div class="card-title-row">
      <span class="icon-disc teal">${icon('camera')}</span>
      <div>
        <p class="section-label">This week's mirror moment</p>
        <h3>${progress.weeklyPhotoCount}/${progress.weeklyPhotoTarget} weekly photos · ${progress.checkinCompletion}% check-in</h3>
        <p class="subtle">Add front/side photos, compare privately, update body-feel trends, and open the weekly report.</p>
      </div>
    </div>
    <div class="cta-row">
      ${renderPhotoUploadCta('Add photo')}
      <button class="cta secondary" type="button" data-action="toggle-photo-compare">${progress.compareMode ? 'Close compare' : 'Compare'}</button>
    </div>
  `);
}

function renderMirrorWeeklyReportCard() {
  const progress = mockData.progress;
  const reportVisible = progress.weeklyReportOpen || progress.weeklyReportViews > 0;
  const waistDelta = Number((progress.metrics.waist - progress.previous.waist).toFixed(1));
  const cravingDelta = progress.metrics.cravings - progress.previous.cravings;
  const bloatingDelta = progress.metrics.bloating - progress.previous.bloating;

  return card(`
    <div class="card-title-row">
      <div>
        <p class="section-label">Weekly report</p>
        <h2>${reportVisible ? 'Visible progress report' : 'Open your weekly report'}</h2>
        <p class="subtle">A photo-ready, non-shaming summary of outfit fit, body-feel trends, and private mirror progress.</p>
      </div>
      <span class="icon-disc blue">${icon('chart')}</span>
    </div>
    ${reportVisible ? `
      <div class="report-stat-grid">
        <span><strong>${progress.outfitFit}%</strong> outfit-fit score</span>
        <span><strong>${formatSigned(waistDelta, ' cm')}</strong> waist trend</span>
        <span><strong>${formatSigned(bloatingDelta)}</strong> bloating trend</span>
        <span><strong>${formatSigned(cravingDelta)}</strong> craving trend</span>
      </div>
      <p class="privacy-note">${icon('lock')} Report views are counted locally. Share-safe versions exclude dose, symptoms, Rx, and consent data.</p>
    ` : ''}
    <div class="cta-row">
      <button class="cta" type="button" data-action="view-weekly-progress-report">${icon('chart')} ${reportVisible ? 'Refresh report view' : 'View weekly report'}</button>
      <button class="cta secondary" type="button" data-action="toggle-photo-compare">${progress.compareMode ? 'Close compare' : 'Compare photos'}</button>
    </div>
  `, reportVisible ? 'blue' : '');
}

function renderVisibleSuccessMetricsCard() {
  const progress = mockData.progress;
  const metricCards = progress.successMetrics.map((metric) => `
    <article class="success-metric">
      <div class="progress-label">
        <span>${escapeHtml(metric.label)}</span>
        <strong>${escapeHtml(metric.value)}</strong>
      </div>
      ${progressBar(metric.progress)}
      <p>${escapeHtml(metric.detail)}</p>
    </article>
  `).join('');

  return card(`
    <p class="section-label">Visible progress success metrics</p>
    <h2>What we are tracking</h2>
    <div class="success-metric-grid">${metricCards}</div>
  `);
}

function renderOutfitFitCard() {
  const progress = mockData.progress;
  const submitted = progress.submittedMetrics.includes('outfitFit');
  return card(`
    <p class="section-label">Outfit-fit score</p>
    <div class="event-grid">
      <div>
        <span class="large-number">${progress.outfitFit}</span>
        <h2>% ready</h2>
      </div>
      <p class="milestone subtle"><strong>${formatSigned(progress.outfitFit - progress.previous.outfitFit, '%')}</strong>since last check-in</p>
    </div>
    <div class="progress-box">
      <div class="progress-label">
        <span>${escapeHtml(titleCase(mockData.event.type))} look readiness</span>
        <strong>${progress.outfitFit}%</strong>
      </div>
      ${progressBar(progress.outfitFit)}
      <p class="focus-line">This week's focus: <strong>${escapeHtml(mockData.event.weeklyFocus)}</strong></p>
    </div>
    <div class="cta-row">
      <button class="cta" type="button" data-action="submit-outfit-fit-score">${icon('check')} ${submitted ? 'Score submitted' : 'Submit outfit-fit score'}</button>
      <button class="cta secondary" type="button" data-action="view-weekly-progress-report">View report</button>
    </div>
  `, 'feature');
}

function renderPhotoVault() {
  const photos = mockData.progress.photos;
  const cards = photos.map((photo) => `
    <article class="photo-card ${photo.tone || 'mint'} ${mockData.progress.currentPhoto?.id === photo.id ? 'is-current' : ''}">
      ${photoPreviewMarkup(photo, photo.angle)}
      <div class="photo-meta">
        <strong>${escapeHtml(photo.label)}</strong>
        <span>${escapeHtml(photo.date)} · ${escapeHtml(photo.privacy)}</span>
        ${photo.bmi ? `<span>BMI ${escapeHtml(photo.bmi)}</span>` : ''}
      </div>
      <div class="photo-actions">
        <button class="icon-button" type="button" data-action="set-current-photo" data-photo-id="${escapeHtml(photo.id)}" aria-label="Use ${escapeHtml(photo.label)} as current photo">${icon('check')}</button>
        <button class="icon-button" type="button" data-action="delete-mirror-photo" data-photo-id="${escapeHtml(photo.id)}" aria-label="Delete ${escapeHtml(photo.label)} photo">
          ${icon('close')}
        </button>
      </div>
    </article>
  `).join('');

  return card(`
    <div class="card-title-row">
      <div>
        <p class="section-label">Private photo vault</p>
        <h3>${photos.length} mirror photos</h3>
        <p class="subtle">Photos are private by default. Nothing is shared unless you explicitly choose it.</p>
      </div>
      <span class="icon-disc teal">${icon('lock')}</span>
    </div>
    <div class="cta-row">
      ${renderPhotoUploadCta('Upload current photo')}
      <button class="cta secondary" type="button" data-action="toggle-photo-compare">${mockData.progress.compareMode ? 'Close compare' : 'Compare'}</button>
    </div>
    <div class="photo-grid">${cards}</div>
  `);
}

function renderBmiPreviewCard() {
  const progress = mockData.progress;
  const currentPhoto = progress.currentPhoto;
  const idealPhoto = progress.idealPhoto;
  const hasSourceImage = Boolean(currentPhoto?.src);
  const isGenerating = progress.bmiPreviewStatus === 'generating';
  const statusCopy = {
    idle: hasSourceImage ? 'Ready to send the uploaded source photo and BMI 22 prompt spec.' : 'Upload a current photo, then generate a BMI 22 preview.',
    generating: 'Sending the private source photo and transformation spec to the configured image endpoint.',
    ready: 'Generated by the configured OpenAI image workflow.',
    error: progress.bmiPreviewError || 'Real generation needs a connected /api/bmi-preview endpoint.'
  }[progress.bmiPreviewStatus || 'idle'];
  return card(`
    <div class="card-title-row">
      <div>
        <p class="section-label">BMI 22 visual preview</p>
        <h2>${isGenerating ? 'Generating BMI 22 preview' : idealPhoto ? 'Ideal BMI preview ready' : 'Generate BMI 22 preview'}</h2>
        <p class="subtle">Upload or select a current male photo, enter current BMI 37, and ${escapeHtml(APP_NAME)} prepares a realistic BMI 22 transformation request.</p>
      </div>
      <span class="icon-disc teal">${icon('sparkle')}</span>
    </div>
    <label class="field-label" for="current-bmi-input">${icon('ruler')} Current BMI</label>
    <input class="text-input" id="current-bmi-input" type="number" inputmode="decimal" min="15" max="60" step="0.1" value="${escapeHtml(progress.currentBmi || '')}" data-field="current-bmi" aria-label="Current BMI">
    <div class="compare-grid bmi-preview-grid">
      ${renderCompareSlot('Current', currentPhoto)}
      ${renderCompareSlot('BMI 22 Preview', idealPhoto)}
    </div>
    <div class="generation-status ${progress.bmiPreviewStatus === 'ready' ? 'is-ready' : ''}">
      <strong>${escapeHtml(progress.bmiPreviewStatus ? humanizeStatus(progress.bmiPreviewStatus) : 'Idle')}</strong>
      <span>${escapeHtml(statusCopy)}</span>
    </div>
    <p class="privacy-note">${icon('lock')} This is an illustrative preview, not a guaranteed result. Actual results vary by body type, health status, fat distribution, muscle mass, genetics, and plan adherence.</p>
    <div class="cta-row">
      <button class="cta" type="button" data-action="generate-bmi-preview" ${hasSourceImage && !isGenerating ? '' : 'disabled'}>${icon('sparkle')} ${isGenerating ? 'Generating...' : 'Generate BMI 22 preview'}</button>
      ${renderPhotoUploadCta('Upload photo', 'secondary')}
    </div>
    <details class="prompt-details">
      <summary>OpenAI image prompt spec</summary>
      <pre>${escapeHtml(JSON.stringify(buildBmiPreviewRequest(currentPhoto, progress.currentBmi || '37', '22'), null, 2))}</pre>
    </details>
  `, idealPhoto ? 'feature' : 'lilac');
}

function renderPhotoCompareCard() {
  const { comparePhotos } = mockData.progress;
  return card(`
    <p class="section-label">Side-by-side compare</p>
    <div class="compare-grid">
      ${renderCompareSlot(comparePhotos.ideal?.kind === 'generated' ? 'Current' : 'Baseline', comparePhotos.current)}
      ${renderCompareSlot(comparePhotos.ideal?.kind === 'generated' ? 'BMI 22 Preview' : 'Latest', comparePhotos.ideal)}
    </div>
    <p class="privacy-note">${icon('lock')} Compare stays private. BMI preview is illustrative and never shared with partners.</p>
  `, 'blue');
}

function renderCompareSlot(label, photo) {
  if (!photo) {
    return `<div class="compare-slot"><span class="subtle">No photo yet</span></div>`;
  }
  return `
    <div class="compare-slot ${photo.tone || 'mint'}">
      ${photoPreviewMarkup(photo, label)}
      <strong>${escapeHtml(label)}</strong>
      <span>${escapeHtml(photo.date)}${photo.bmi || photo.idealBmi ? ` · BMI ${escapeHtml(photo.idealBmi || photo.bmi)}` : ''}</span>
    </div>
  `;
}

function renderProgressCheckIn() {
  const rows = mockData.progress.checkinItems.map((item) => `
    <article class="checkin-row">
      <div>
        <p class="metric-label">${escapeHtml(item.label)}</p>
        <h3>${escapeHtml(item.value)}</h3>
        <p class="subtle">${escapeHtml(item.detail)}</p>
      </div>
      <div class="stepper">
        <button class="icon-button" type="button" data-action="adjust-progress-metric" data-metric-id="${escapeHtml(item.id)}" data-delta="${-item.delta}" aria-label="Decrease ${escapeHtml(item.label)}">-</button>
        <button class="icon-button" type="button" data-action="adjust-progress-metric" data-metric-id="${escapeHtml(item.id)}" data-delta="${item.delta}" aria-label="Increase ${escapeHtml(item.label)}">+</button>
      </div>
    </article>
  `).join('');

  return card(`
    <div class="card-title-row">
      <div>
        <p class="section-label">Weekly check-in</p>
        <h3>${mockData.progress.checkinCompletion}% complete</h3>
        <p class="subtle">Designed to finish in under 2 minutes.</p>
      </div>
      <span class="icon-disc blue">${icon('chart')}</span>
    </div>
    <div class="progress-box">
      <div class="progress-label">
        <span>Check-in completion</span>
        <strong>${mockData.progress.checkinCompletion}%</strong>
      </div>
      ${progressBar(mockData.progress.checkinCompletion)}
    </div>
    <div class="checkin-list">${rows}</div>
    <button class="cta full" type="button" data-action="submit-body-feel-trends">${icon('heart')} Submit bloating + craving trend</button>
  `);
}

function renderCare() {
  const recommendation = mockData.recommendation;
  const care = mockData.care;
  return `
    <div class="tab-page">
      <div class="page-title">
        <div>
          <p class="eyebrow">Care</p>
          <h1>Care team</h1>
        </div>
        <button class="avatar-button" type="button" data-action="open-profile" aria-label="Open profile">${escapeHtml(mockData.user.initial)}</button>
      </div>
      ${card(`
        <div class="card-title-row">
          <span class="icon-disc teal">${icon('shield')}</span>
          <div>
            <p class="section-label">Eligibility route</p>
            <h2>${escapeHtml(mockData.doctorStatus.detail)}</h2>
            <p class="subtle">${escapeHtml(recommendation.explanation)}</p>
          </div>
        </div>
      `, safetyCardClass(recommendation.severity))}
      ${renderConsultBookingCard()}
      ${renderCareUploadsCard()}
      ${renderPrescriptionStatusCard()}
      ${renderDoctorSummaryCard()}
      ${renderRefillReminderCard()}
      ${renderSideEffectTriageCard()}
      ${card(`
        <p class="section-label">Safety guardrails</p>
        <div class="compact-list">
          <div class="compact-row"><span><strong>Prescription path</strong><span class="subtle"> ${escapeHtml(care.prescriptionPathLabel)}</span></span>${icon('chevron')}</div>
          <div class="compact-row"><span><strong>Risk reasons</strong><span class="subtle"> ${escapeHtml(recommendation.reasons.join('; '))}</span></span>${icon('chevron')}</div>
          <div class="compact-row"><span><strong>Medicine support</strong><span class="subtle"> ${care.medicineVisible ? 'visible after valid Rx' : 'hidden until valid Rx'}</span></span>${icon('chevron')}</div>
          <div class="compact-row"><span><strong>Partner sharing</strong><span class="subtle"> health data hidden by default</span></span>${icon('chevron')}</div>
        </div>
      `)}
      ${renderConsentCard()}
    </div>
  `;
}

function renderConsultBookingCard() {
  const care = mockData.care;
  const slotButtons = consultSlots.map((slot) => `
    <button class="choice-pill ${care.selectedSlot === slot ? 'is-selected' : ''}" type="button" data-action="select-consult-slot" data-slot="${escapeHtml(slot)}">${escapeHtml(slot)}</button>
  `).join('');
  const languageButtons = languageOptions.map((language) => `
    <button class="choice-pill ${care.language === language ? 'is-selected' : ''}" type="button" data-action="select-care-language" data-language="${escapeHtml(language)}">${escapeHtml(language)}</button>
  `).join('');

  return card(`
    <p class="section-label">Doctor consult booking</p>
    <h2>${care.consultBooked ? escapeHtml(`Consult ${care.consultLabel}`) : 'Choose a consult slot'}</h2>
    <p class="subtle">${care.canBookConsult ? 'Consult cannot be skipped for prescription support. Choose language and doctor preference before booking.' : 'Care team review is required before continuing.'}</p>
    <div class="choice-pill-row">${slotButtons}</div>
    <div class="choice-pill-row">${languageButtons}</div>
    <button class="choice-toggle ${care.femaleDoctorPreferred ? 'is-selected' : ''}" type="button" data-action="toggle-female-doctor">
      ${icon('user')} Female doctor preferred ${care.femaleDoctorPreferred ? 'on' : 'off'}
    </button>
    <div class="cta-row">
      <button class="cta" type="button" data-action="book-consult" ${care.canBookConsult ? '' : 'disabled'}>${icon('care')} ${care.consultBooked ? 'Update booking' : 'Book consult'}</button>
      <button class="cta secondary" type="button" data-action="complete-consult-demo" ${care.consultBooked && !care.consultCompleted ? '' : 'disabled'}>${care.consultCompleted ? 'Summary ready' : 'Mark reviewed'}</button>
    </div>
  `);
}

function renderCareUploadsCard() {
  const care = mockData.care;
  return card(`
    <p class="section-label">Labs and documents</p>
    <h2>Upload entry points</h2>
    <p class="subtle">This prototype simulates uploads. No file leaves your device here.</p>
    <div class="upload-grid">
      <button class="upload-card ${care.labsUploaded ? 'is-complete' : ''}" type="button" data-action="upload-labs">
        ${icon('chart')}
        <span><strong>${care.labsUploaded ? 'Labs uploaded' : 'Upload labs'}</strong><small>HbA1c, fasting glucose, reports</small></span>
      </button>
      <button class="upload-card ${care.rxUploaded ? 'is-complete' : ''}" type="button" data-action="upload-prescription">
        ${icon('card')}
        <span><strong>${care.rxUploaded ? 'Prescription uploaded' : 'Upload prescription'}</strong><small>Required before medicine support</small></span>
      </button>
    </div>
  `, 'blue');
}

function renderPrescriptionStatusCard() {
  const care = mockData.care;
  return card(`
    <div class="card-title-row">
      <div>
        <p class="section-label">Prescription status</p>
        <h2>${escapeHtml(care.prescriptionLabel)}</h2>
        <p class="subtle">${care.hasValidRx ? 'Valid Rx approved. Medicine support can now be displayed safely.' : 'No prescription medicine can be purchased without a valid Rx.'}</p>
        <p class="tiny subtle">${care.consultCompleted ? 'Doctor review complete.' : 'Approval requires a completed doctor consult.'}</p>
      </div>
      <span class="icon-disc ${care.hasValidRx ? 'teal' : 'yellow'}">${icon(care.hasValidRx ? 'check' : 'lock')}</span>
    </div>
    <div class="status-timeline">
      ${prescriptionStatuses.map((status) => `
        <span class="timeline-step ${status === care.prescriptionStatus ? 'is-current' : ''}">${escapeHtml(humanizeStatus(status))}</span>
      `).join('')}
    </div>
    <div class="cta-row">
      <button class="cta" type="button" data-action="advance-rx-status">${icon('chevron')} Advance status</button>
      <button class="cta secondary" type="button" data-action="clarify-rx">Needs clarification</button>
    </div>
  `, care.hasValidRx ? 'feature' : '');
}

function renderDoctorSummaryCard() {
  const care = mockData.care;
  return card(`
    <p class="section-label">Doctor plan summary</p>
    <h2>${care.consultCompleted ? 'Reviewed by Dr. Meera' : 'Pending doctor review'}</h2>
    <p class="subtle">${escapeHtml(care.doctorSummary)}</p>
    <div class="compact-list">
      <div class="compact-row"><span><strong>Follow-up</strong><span class="subtle"> ${escapeHtml(care.followUpDate)}</span></span>${icon('calendar')}</div>
      <div class="compact-row"><span><strong>Language</strong><span class="subtle"> ${escapeHtml(care.language)}</span></span>${icon('check')}</div>
      <div class="compact-row"><span><strong>Doctor preference</strong><span class="subtle"> ${care.femaleDoctorPreferred ? 'female doctor preferred' : 'any available doctor'}</span></span>${icon('user')}</div>
    </div>
  `);
}

function renderRefillReminderCard() {
  const care = mockData.care;
  return card(`
    <div class="card-title-row">
      <span class="icon-disc teal">${icon(care.hasValidRx ? 'syringe' : 'bell')}</span>
      <div>
        <p class="section-label">Medicine and refill support</p>
        <h3>${escapeHtml(care.medicineAvailability)}</h3>
        <p class="subtle">${care.hasValidRx ? 'Refill reminders can be generated from the approved dose schedule.' : 'Medicine availability and refill support stay hidden until prescription status is approved.'}</p>
      </div>
    </div>
    <div class="cta-row">
      <button class="cta" type="button" data-action="toggle-refill-reminder" ${care.hasValidRx ? '' : 'disabled'}>${icon('bell')} ${care.refillReminderEnabled ? 'Turn off refill' : 'Set refill reminder'}</button>
      <button class="cta secondary" type="button" data-action="show-medicine-guardrail">${care.refillReminderEnabled ? escapeHtml(care.refillDate) : 'Guardrails'}</button>
    </div>
  `, care.hasValidRx ? 'feature' : 'lilac');
}

function renderSideEffectTriageCard() {
  const triage = mockData.triage;
  const loggingEnabled = mockData.consent.healthDataProcessing;
  const symptoms = sideEffectOptions.map((symptom) => `
    <button class="choice-pill ${triage.selectedSymptoms.includes(symptom) ? 'is-selected' : ''}" type="button" data-action="toggle-side-effect" data-symptom="${escapeHtml(symptom)}" ${loggingEnabled ? '' : 'disabled'}>${escapeHtml(symptom)}</button>
  `).join('');

  return card(`
    <div class="card-title-row">
      <div>
        <p class="section-label">Side-effect triage</p>
        <h2>${escapeHtml(loggingEnabled ? triage.label : 'Health logging paused')}</h2>
        <p class="subtle">${escapeHtml(loggingEnabled ? triage.detail : 'Resume health logging before symptom or dose check-ins.')}</p>
      </div>
      <span class="icon-disc ${triage.escalated ? 'yellow' : 'teal'}">${icon(triage.escalated ? 'shield' : 'heart')}</span>
    </div>
    <div class="choice-pill-row triage-grid">${symptoms}</div>
    <div class="triage-result ${triage.escalated ? 'is-escalated' : ''}">
      <strong>${escapeHtml(humanizeStatus(triage.level))}</strong>
      <span>${escapeHtml(triage.action)}</span>
    </div>
    <div class="cta-row">
      <button class="cta" type="button" data-action="acknowledge-triage" ${triage.escalated && !triage.escalationAcknowledged ? '' : 'disabled'}>${icon('care')} ${triage.escalationAcknowledged ? 'Escalation acknowledged' : 'Escalate to care team'}</button>
      <button class="cta secondary" type="button" data-action="clear-side-effects" ${loggingEnabled ? '' : 'disabled'}>Clear symptoms</button>
    </div>
  `, triage.cardClass);
}

function renderConsentCard() {
  const consent = mockData.consent;
  const partnerEvents = consent.partnerVisibleEvents.length
    ? consent.partnerVisibleEvents.map((eventName) => `<li>${escapeHtml(eventName)}</li>`).join('')
    : '<li>No partner-visible events right now</li>';

  return card(`
    <p class="section-label">Privacy and consent</p>
    <h2>${escapeHtml(consent.partnerLabel)}</h2>
    <p class="subtle">${escapeHtml(consent.partnerPolicy)}</p>
    <div class="status-grid">
      <span class="status-block"><strong>${consent.healthDataProcessing ? 'On' : 'Off'}</strong> health logging</span>
      <span class="status-block"><strong>${consent.partnerSharing ? 'On' : 'Off'}</strong> partner sharing</span>
    </div>
    <div class="privacy-event-list">
      <p class="metric-label">Partner-visible events</p>
      <ul class="info-list event-name-list">${partnerEvents}</ul>
      <p class="tiny subtle">${consent.hiddenEventCount} recent health/private events hidden from partner surfaces.</p>
    </div>
    <div class="cta-row">
      <button class="cta" type="button" data-action="toggle-partner-consent">${icon('shield')} ${consent.partnerSharing ? 'Turn off partner sharing' : 'Allow partner sharing'}</button>
      <button class="cta secondary" type="button" data-action="toggle-health-consent">${consent.healthDataProcessing ? 'Pause health logging' : 'Resume health logging'}</button>
    </div>
    <button class="cta secondary full revoke-button" type="button" data-action="revoke-partner-consent">Revoke partner consent</button>
  `);
}

function renderLearnResourcesCard() {
  const resourceRows = learnResourceLinks.map((resource) => `
    <a class="learn-resource-card" href="${escapeHtml(resource.url)}" target="_blank" rel="noopener noreferrer">
      <span class="icon-disc teal">${icon('learn')}</span>
      <span>
        <small>${escapeHtml(resource.source)}</small>
        <strong>${escapeHtml(resource.title)}</strong>
        <em>${escapeHtml(resource.detail)}</em>
      </span>
    </a>
  `).join('');

  return card(`
    <p class="section-label">Start here</p>
    <h2>Learn before you choose</h2>
    <p class="subtle">Two quick references pinned to the top for GLP-1 education and care-team discussions.</p>
    <div class="learn-resource-list">${resourceRows}</div>
  `, 'feature');
}

function renderLearn() {
  const beta = mockData.beta;
  return `
    <div class="tab-page">
      <div class="page-title">
        <div>
          <p class="eyebrow">Beta</p>
          <h1>Release readiness</h1>
        </div>
        <button class="avatar-button" type="button" data-action="open-profile" aria-label="Open profile">${escapeHtml(mockData.user.initial)}</button>
      </div>
      ${renderLearnResourcesCard()}
      ${renderWeeklyReportCard()}
      ${renderShareSafeReportCard()}
      ${renderBetaQaCard()}
      ${renderPerformanceSecurityCard()}
      ${renderBetaAnalyticsCard()}
      ${renderCopyReadinessCard()}
      <div class="empty-state">Beta status: <strong>${beta.betaReady ? 'ready for controlled beta' : `${beta.qaPassedCount}/${beta.qaTotalCount} QA checks passed`}</strong></div>
    </div>
  `;
}

function renderWeeklyReportCard() {
  const beta = mockData.beta;
  const report = beta.report;

  return card(`
    <div class="report-cover">
      <p class="section-label">Weekly photo-ready report</p>
      <h2>${escapeHtml(report.title)}</h2>
      <p class="subtle">${escapeHtml(report.summary)}</p>
      <div class="report-stat-grid">
        <span><strong>${report.readiness}%</strong> look readiness</span>
        <span><strong>${report.habitCompletion}%</strong> habit rhythm</span>
        <span><strong>${formatSigned(report.waistDelta, ' cm')}</strong> waist trend</span>
        <span><strong>${report.photoCount}</strong> private photos</span>
      </div>
    </div>
  `, 'feature');
}

function renderShareSafeReportCard() {
  const beta = mockData.beta;
  const share = beta.shareReport;
  const includes = share.includes.map((item) => `<span class="plan-chip">${escapeHtml(item)}</span>`).join('');
  const excludes = share.excludes.map((item) => `<div class="compact-row"><span>${escapeHtml(item)}</span>${icon('lock')}</div>`).join('');

  return card(`
    <p class="section-label">Non-medical share version</p>
    <h2>${escapeHtml(share.title)}</h2>
    <p class="subtle">${escapeHtml(share.summary)}</p>
    <div class="share-preview ${beta.reportShareMode === 'share' ? 'is-share' : ''}">
      <strong>${beta.reportShareMode === 'share' ? 'Share-safe preview on' : 'Private report mode'}</strong>
      <span>${beta.reportShareMode === 'share' ? 'Medical, Rx, symptoms, dose, and consent data excluded.' : 'Full report stays private to the user.'}</span>
    </div>
    <div class="plan-chip-grid report-chip-grid">${includes}</div>
    <div class="compact-list">${excludes}</div>
    <button class="cta full" type="button" data-action="toggle-report-share-mode">${icon('card')} ${beta.reportShareMode === 'share' ? 'Switch to private report' : 'Preview share-safe report'}</button>
  `, 'blue');
}

function renderBetaQaCard() {
  const beta = mockData.beta;
  const rows = beta.qaItems.map((item) => `
    <button class="qa-row ${item.passed ? 'is-pass' : ''}" type="button" data-action="toggle-beta-qa" data-qa-id="${escapeHtml(item.id)}">
      <span class="qa-status">${item.passed ? icon('check') : icon('clock')}</span>
      <span>
        <strong>${escapeHtml(item.label)}</strong>
        <small>${escapeHtml(item.detail)}</small>
      </span>
    </button>
  `).join('');

  return card(`
    <div class="card-title-row">
      <div>
        <p class="section-label">P0 edge-case QA</p>
        <h2>${beta.qaPercent}% passed</h2>
        <p class="subtle">Covers the critical beta routes without unsafe medical claims.</p>
      </div>
      <span class="icon-disc ${beta.betaReady ? 'teal' : 'yellow'}">${icon(beta.betaReady ? 'check' : 'shield')}</span>
    </div>
    <div class="progress-box">
      <div class="progress-label">
        <span>Beta QA sweep</span>
        <strong>${beta.qaPassedCount}/${beta.qaTotalCount}</strong>
      </div>
      ${progressBar(beta.qaPercent)}
    </div>
    <div class="qa-list">${rows}</div>
    <button class="cta full" type="button" data-action="run-beta-qa">${icon('shield')} Run QA sweep</button>
  `);
}

function renderPerformanceSecurityCard() {
  const beta = mockData.beta;
  const performanceRows = beta.performanceItems.map((item) => `
    <article class="status-block ${item.passed ? 'is-pass' : ''}">
      <strong>${escapeHtml(item.value)}</strong>${escapeHtml(item.label)}
    </article>
  `).join('');
  const securityRows = beta.securityItems.map((item) => `
    <div class="compact-row">
      <span><strong>${escapeHtml(item.label)}</strong><span class="subtle"> ${escapeHtml(item.detail)}</span></span>
      ${icon('shield')}
    </div>
  `).join('');

  return card(`
    <p class="section-label">Performance and security</p>
    <h2>Beta hardening checks</h2>
    <div class="status-grid">${performanceRows}</div>
    <div class="compact-list">${securityRows}</div>
  `, 'lilac');
}

function renderBetaAnalyticsCard() {
  const beta = mockData.beta;
  const specRows = beta.analyticsSpec.map((group) => `
    <article class="analytics-row">
      <strong>${escapeHtml(group.label)}</strong>
      <span>${group.events.map((eventName) => escapeHtml(eventName)).join(', ')}</span>
    </article>
  `).join('');

  return card(`
    <p class="section-label">Beta analytics dashboard spec</p>
    <h2>Launch, habit, safety, privacy</h2>
    <div class="analytics-list">${specRows}</div>
  `);
}

function renderCopyReadinessCard() {
  const beta = mockData.beta;
  const localeButtons = copyLocaleOptions.map((locale) => `
    <button class="choice-pill ${beta.copyLocale === locale ? 'is-selected' : ''}" type="button" data-action="set-copy-locale" data-locale="${escapeHtml(locale)}">${escapeHtml(locale)}</button>
  `).join('');

  return card(`
    <p class="section-label">Hinglish-ready copy</p>
    <h2>${escapeHtml(beta.copyLocale)} content preview</h2>
    <div class="choice-pill-row">${localeButtons}</div>
    <div class="copy-preview">
      <strong>${escapeHtml(beta.copyPreview)}</strong>
      <span>No body-shaming. No crash-diet promise. Medical guardrails stay calm and visible.</span>
    </div>
  `, 'coral');
}

function renderProfileSheet() {
  const { partner, analyticsEvents } = mockData;
  if (profileTitle) {
    profileTitle.textContent = `${mockData.user.name}'s ${APP_NAME} setup`;
  }
  profileContent.innerHTML = `
    <section class="info-panel">
      <h3>Mock user</h3>
      <ul class="info-list">
        <li>Name <strong>${escapeHtml(mockData.user.name)}</strong></li>
        <li>Event <strong>${escapeHtml(titleCase(mockData.event.type))}</strong></li>
        <li>Date <strong>${escapeHtml(mockData.event.eventDate)}</strong></li>
        <li>Days left <strong>${mockData.event.daysLeft}</strong></li>
        <li>Plan <strong>${escapeHtml(mockData.plan.name)}</strong></li>
      </ul>
    </section>
    <section class="info-panel">
      <h3>Partner attribution</h3>
      <ul class="info-list">
        <li>Partner <strong>${escapeHtml(partner.partnerId)}</strong></li>
        <li>Campaign <strong>${escapeHtml(partner.campaignId)}</strong></li>
        <li>Source <strong>${escapeHtml(partner.source)}</strong></li>
        <li>Entry <strong>${escapeHtml(partner.entryMode)}</strong></li>
        <li>Consent <strong>${escapeHtml(partner.consentStatus)}</strong></li>
      </ul>
    </section>
    <section class="info-panel">
      <h3>Onboarding inputs</h3>
      <ul class="info-list">
        <li>Target <strong>${escapeHtml(mockData.onboarding.targetLook)}</strong></li>
        <li>Height <strong>${escapeHtml(mockData.onboarding.height)} cm</strong></li>
        <li>Weight <strong>${escapeHtml(mockData.onboarding.weight)} kg</strong></li>
        <li>Comfort <strong>${escapeHtml(mockData.onboarding.comfortLevel)}</strong></li>
      </ul>
    </section>
    <section class="info-panel">
      <h3>Safety routing</h3>
      <ul class="info-list">
        <li>Status <strong>${escapeHtml(mockData.recommendation.label)}</strong></li>
        <li>Plan <strong>${escapeHtml(mockData.recommendation.recommendedPlan)}</strong></li>
        <li>Rx support <strong>${mockData.recommendation.allowPrescriptionPrompt ? 'Consult first' : 'Locked'}</strong></li>
        <li>Pregnancy <strong>${escapeHtml(mockData.safety.pregnancyStatus)}</strong></li>
      </ul>
    </section>
    <section class="info-panel">
      <h3>Daily engagement</h3>
      <ul class="info-list">
        <li>Completed <strong>${mockData.daily.completedCount}/${mockData.daily.totalCount}</strong></li>
        <li>Progress <strong>${mockData.daily.completionPercent}%</strong></li>
        <li>Reminder <strong>${escapeHtml(mockData.daily.reminder.type)}</strong></li>
        <li>Hooks <strong>${mockData.daily.hooks.length}</strong></li>
      </ul>
    </section>
    <section class="info-panel">
      <h3>Meal agent</h3>
      <ul class="info-list">
        <li>Provider <strong>${escapeHtml(mockData.foodAgent.provider)}</strong></li>
        <li>Mode <strong>${escapeHtml(mockData.foodAgent.connectionLabel)}</strong></li>
        <li>Account <strong>${escapeHtml(mockData.foodAgent.accountLabel)}</strong></li>
        <li>Login <strong>${mockData.foodAgent.customerLoginConfirmed ? 'Customer confirmed' : 'Customer-only'}</strong></li>
        <li>Mobile <strong>${escapeHtml(mockData.foodAgent.maskedMobile || 'Not saved')}</strong></li>
        <li>Status <strong>${escapeHtml(mockData.foodAgent.statusLabel)}</strong></li>
        <li>Selected <strong>${escapeHtml(mockData.foodAgent.selectedMeal.title)}</strong></li>
      </ul>
    </section>
    <section class="info-panel">
      <h3>Commerce agent</h3>
      <ul class="info-list">
        <li>Provider <strong>${escapeHtml(mockData.commerceAgent.provider)}</strong></li>
        <li>Store <strong>${escapeHtml(mockData.commerceAgent.storeUrl || 'Not set')}</strong></li>
        <li>Login <strong>${mockData.commerceAgent.customerLoginConfirmed ? 'Customer confirmed' : 'Customer-only'}</strong></li>
        <li>Status <strong>${escapeHtml(mockData.commerceAgent.statusLabel)}</strong></li>
        <li>Task <strong>${escapeHtml(mockData.commerceAgent.productQuery)}</strong></li>
      </ul>
    </section>
    <section class="info-panel">
      <h3>Mirror progress</h3>
      <ul class="info-list">
        <li>Photos <strong>${mockData.progress.photos.length}</strong></li>
        <li>Outfit fit <strong>${mockData.progress.outfitFit}%</strong></li>
        <li>Waist <strong>${mockData.progress.metrics.waist.toFixed(1)} cm</strong></li>
        <li>Compare <strong>${mockData.progress.compareMode ? 'On' : 'Off'}</strong></li>
      </ul>
    </section>
    <section class="info-panel">
      <h3>Visible progress KPIs</h3>
      <ul class="info-list">
        <li>Photo rate <strong>${mockData.progress.mirrorPhotoSubmissionRate}%</strong></li>
        <li>Report views <strong>${mockData.progress.weeklyReportViews}</strong></li>
        <li>Outfit completion <strong>${mockData.progress.outfitFitScoreCompletion}%</strong></li>
        <li>Body-feel trends <strong>${mockData.progress.bodyFeelTrendSubmissionCount}/2</strong></li>
      </ul>
    </section>
    <section class="info-panel">
      <h3>Care workflow</h3>
      <ul class="info-list">
        <li>Consult <strong>${escapeHtml(mockData.care.consultLabel)}</strong></li>
        <li>Slot <strong>${escapeHtml(mockData.care.selectedSlot)}</strong></li>
        <li>Rx <strong>${escapeHtml(mockData.care.prescriptionLabel)}</strong></li>
        <li>Refill <strong>${mockData.care.refillReminderEnabled ? 'On' : 'Off'}</strong></li>
      </ul>
    </section>
    <section class="info-panel">
      <h3>Treatment tracker</h3>
      <ul class="info-list">
        <li>Dose <strong>${escapeHtml(mockData.treatment.doseLabel)}</strong></li>
        <li>Habits <strong>${mockData.treatment.completedHabits}/${mockData.treatment.totalHabits}</strong></li>
        <li>Triage <strong>${escapeHtml(mockData.triage.label)}</strong></li>
        <li>Escalation <strong>${mockData.triage.escalated ? 'On' : 'Off'}</strong></li>
      </ul>
    </section>
    <section class="info-panel">
      <h3>Consent</h3>
      <ul class="info-list">
        <li>Health logging <strong>${mockData.consent.healthDataProcessing ? 'On' : 'Off'}</strong></li>
        <li>Partner sharing <strong>${mockData.consent.partnerSharing ? 'On' : 'Off'}</strong></li>
        <li>Partner events <strong>${mockData.consent.partnerVisibleEvents.length}</strong></li>
        <li>Hidden events <strong>${mockData.consent.hiddenEventCount}</strong></li>
      </ul>
    </section>
    <section class="info-panel">
      <h3>Beta readiness</h3>
      <ul class="info-list">
        <li>QA <strong>${mockData.beta.qaPassedCount}/${mockData.beta.qaTotalCount}</strong></li>
        <li>Share mode <strong>${escapeHtml(titleCase(mockData.beta.reportShareMode))}</strong></li>
        <li>Copy <strong>${escapeHtml(mockData.beta.copyLocale)}</strong></li>
        <li>Status <strong>${mockData.beta.betaReady ? 'Ready' : 'In QA'}</strong></li>
      </ul>
    </section>
    <section class="info-panel">
      <h3>Analytics event names</h3>
      <ul class="info-list event-name-list">
        ${analyticsEvents.map((eventName) => `<li>${escapeHtml(eventName)}</li>`).join('')}
      </ul>
    </section>
    <button class="cta secondary full" type="button" data-action="reset-demo">Reset demo</button>
  `;
}

function renderBottomNav() {
  if (appState.stage !== 'app') {
    bottomNav.hidden = true;
    bottomNav.innerHTML = '';
    return;
  }

  bottomNav.hidden = false;
  bottomNav.innerHTML = tabs.map((tab) => `
    <button class="nav-item ${tab.id === activeTab ? 'is-active' : ''}" type="button" data-tab="${tab.id}" aria-current="${tab.id === activeTab ? 'page' : 'false'}">
      <span class="nav-icon">${icon(tab.icon)}</span>
      <span>${escapeHtml(tab.label)}</span>
    </button>
  `).join('');
}

function render() {
  hydrateMockData();

  const stageRenderers = {
    landing: renderLanding,
    onboarding: renderOnboarding,
    safety: renderSafety,
    recommendation: renderRecommendation,
    app: () => {
      const renderers = {
        profile: renderProfile,
        today: renderToday,
        plan: renderPlan,
        mirror: renderMirror,
        care: renderCare,
        learn: renderLearn
      };
      return renderers[activeTab]();
    }
  };

  screen.classList.toggle('flow-screen', appState.stage !== 'app');
  screen.innerHTML = stageRenderers[appState.stage]();
  renderBottomNav();
  renderProfileSheet();
}

function focusScreenTop() {
  window.scrollTo(0, 0);
  screen.focus();
}

function ensureAppShellDefaults() {
  appState.profile = migrateProfileState(appState.profile, {
    onboarding: appState.onboarding,
    safety: appState.safety
  });
  syncProfileToPlanInputs(appState.profile);

  if (!appState.recommendation) appState.recommendation = buildPlanRecommendation();
  if (!appState.daily) appState.daily = createDefaultDailyState();
  if (!appState.progress) appState.progress = createDefaultProgressState();
  if (!appState.care) appState.care = createDefaultCareState();
  if (!appState.treatment) appState.treatment = createDefaultTreatmentState();
  if (!appState.triage) appState.triage = createDefaultTriageState();
  if (!appState.consent) appState.consent = createDefaultConsentState();
  if (!appState.foodAgent) appState.foodAgent = createDefaultFoodAgentState();
  if (!appState.commerceAgent) appState.commerceAgent = createDefaultCommerceAgentState();
  if (!appState.beta) appState.beta = createDefaultBetaState();

  saveJson(STORAGE_KEYS.attribution, appState.attribution);
  saveJson(STORAGE_KEYS.onboarding, appState.onboarding);
  saveJson(STORAGE_KEYS.safety, appState.safety);
  saveJson(STORAGE_KEYS.recommendation, appState.recommendation);
  saveJson(STORAGE_KEYS.profile, appState.profile);
  saveJson(STORAGE_KEYS.daily, appState.daily);
  saveJson(STORAGE_KEYS.progress, appState.progress);
  saveJson(STORAGE_KEYS.care, appState.care);
  saveJson(STORAGE_KEYS.treatment, appState.treatment);
  saveJson(STORAGE_KEYS.triage, appState.triage);
  saveJson(STORAGE_KEYS.consent, appState.consent);
  saveJson(STORAGE_KEYS.foodAgent, appState.foodAgent);
  saveJson(STORAGE_KEYS.commerceAgent, appState.commerceAgent);
  saveJson(STORAGE_KEYS.beta, appState.beta);
}

function enterAppShell(actionName = 'open-app') {
  ensureAppShellDefaults();
  logEvent('newme_landing_cta_tapped', { action: actionName });
  logEvent('newme_onboarding_skipped', {
    destination: 'profile',
    partnerId: appState.attribution.partnerId
  });
  appState.stage = 'app';
  activeTab = 'profile';
  appState.validationMessage = '';
  render();
  focusScreenTop();
}

function validateCurrentStep() {
  appState.validationMessage = '';

  if (appState.onboardingStep === 0 && !appState.onboarding.eventDate) {
    appState.validationMessage = 'Please choose your event date.';
    return false;
  }

  if (appState.onboardingStep === 1) {
    const height = Number(appState.onboarding.height);
    const weight = Number(appState.onboarding.weight);
    if (!height || height < 120 || height > 230 || !weight || weight < 30 || weight > 220) {
      appState.validationMessage = 'Please enter a realistic height and weight.';
      return false;
    }
  }

  if (appState.onboardingStep === 2 && !appState.onboarding.bodyFocus.length) {
    appState.validationMessage = 'Choose at least one body focus area.';
    return false;
  }

  return true;
}

function validateCurrentSafetyStep() {
  appState.validationMessage = '';

  if (appState.safetyStep === 0) {
    const age = Number(appState.safety.age);
    const waist = Number(appState.safety.waist);
    const hba1c = appState.safety.hba1c ? Number(appState.safety.hba1c) : null;
    if (!age || age < 13 || age > 100) {
      appState.validationMessage = 'Please enter a realistic age.';
      return false;
    }
    if (!waist || waist < 40 || waist > 180) {
      appState.validationMessage = 'Please enter a realistic waist measurement.';
      return false;
    }
    if (hba1c && (hba1c < 3 || hba1c > 15)) {
      appState.validationMessage = 'Please enter a realistic HbA1c value or leave it blank.';
      return false;
    }
  }

  if (appState.safetyStep === 2 && !appState.safety.currentSymptoms.length) {
    appState.validationMessage = 'Select current symptoms or choose None right now.';
    return false;
  }

  return true;
}

function updateOnboardingField(element) {
  const field = element.dataset.field;
  if (!field) return;

  if (element.type === 'checkbox') {
    const values = new Set(appState.onboarding[field] || []);
    if (element.checked) {
      values.add(element.value);
    } else {
      values.delete(element.value);
    }
    appState.onboarding[field] = [...values];
    return;
  }

  appState.onboarding[field] = element.value;
}

function updateSafetyField(element) {
  const field = element.dataset.safetyField;
  if (!field) return;

  if (element.type === 'checkbox') {
    const values = new Set(appState.safety[field] || []);
    if (element.checked) {
      if (field === 'currentSymptoms' && element.value === 'None right now') {
        values.clear();
      }
      if (field === 'currentSymptoms' && element.value !== 'None right now') {
        values.delete('None right now');
      }
      values.add(element.value);
    } else {
      values.delete(element.value);
    }
    appState.safety[field] = [...values];
    if (field === 'currentSymptoms' && appState.safety[field].length === 0) {
      appState.safety[field] = ['None right now'];
    }
    return;
  }

  appState.safety[field] = element.value;
}

function syncProfileToPlanInputs(profile) {
  appState.onboarding.eventDate = addDays(PROTOTYPE_TODAY, Math.max(0, Number(profile.daysLeft) || 0));
  appState.onboarding.weight = profile.weight;
  appState.onboarding.height = profile.height;
  appState.safety.age = profile.age;
  appState.safety.sex = profile.gender;
  const diseaseValues = [profile.criticalDiseasePrimary, profile.criticalDiseaseSecondary]
    .filter((value) => value && value !== 'None');
  const existingRisks = new Set(appState.safety.medicalRisks || []);
  criticalDiseaseOptions.filter((value) => value !== 'None').forEach((value) => existingRisks.delete(value));
  diseaseValues.forEach((value) => existingRisks.add(value));
  appState.safety.medicalRisks = [...existingRisks];
  saveJson(STORAGE_KEYS.onboarding, appState.onboarding);
  saveJson(STORAGE_KEYS.safety, appState.safety);
}

function updateProfileField(element) {
  const profile = appState.profile || createDefaultProfileState({
    onboarding: appState.onboarding,
    safety: appState.safety
  });
  const field = element.dataset.profileField;

  if (field) {
    profile[field] = element.value;
    profile.lastUpdated = new Date().toISOString();
    appState.profile = profile;
    syncProfileToPlanInputs(profile);
    saveJson(STORAGE_KEYS.profile, profile);
    return;
  }

  if (element.dataset.biomarkerIndex !== undefined) {
    const index = Number(element.dataset.biomarkerIndex);
    profile.biomarkers = profile.biomarkers?.length ? profile.biomarkers : defaultBiomarkers.map((item) => ({ ...item }));
    if (profile.biomarkers[index]) {
      profile.biomarkers[index].value = element.value;
      profile.lastUpdated = new Date().toISOString();
      appState.profile = profile;
      saveJson(STORAGE_KEYS.profile, profile);
    }
  }
}

function updateFoodAgentField(element) {
  const field = element.dataset.foodField;
  if (!field) return;
  const foodAgent = ensureFoodAgentState();

  if (field === 'mobileNumber') {
    foodAgent.mobileNumber = sanitizeMobileNumber(element.value);
    foodAgent.maskedMobile = maskMobileNumber(foodAgent.mobileNumber);
    foodAgent.accountStatus = 'customer_controlled';
    element.value = foodAgent.mobileNumber;
    saveJson(STORAGE_KEYS.foodAgent, foodAgent);
  }
}

function updateCommerceAgentField(element) {
  const field = element.dataset.commerceField;
  if (!field) return;
  const commerceAgent = ensureCommerceAgentState();

  if (field === 'storeUrl') {
    commerceAgent.storeUrl = element.value;
    commerceAgent.taskStatus = normalizeStoreUrl(element.value) ? 'store_ready' : 'store_needed';
    saveJson(STORAGE_KEYS.commerceAgent, commerceAgent);
  }

  if (field === 'loginEmail') {
    commerceAgent.loginEmail = element.value.trim();
    saveJson(STORAGE_KEYS.commerceAgent, commerceAgent);
  }
}

bottomNav.addEventListener('click', (event) => {
  const tabButton = event.target.closest('[data-tab]');
  if (!tabButton) return;

  activeTab = tabButton.dataset.tab;
  logEvent('newme_tab_selected', { tab: activeTab });
  render();
  focusScreenTop();
});

document.addEventListener('input', (event) => {
  updateOnboardingField(event.target);
  updateSafetyField(event.target);
  updateProfileField(event.target);
  updateFoodAgentField(event.target);
  updateCommerceAgentField(event.target);
  if (event.target.dataset.field === 'current-bmi') {
    appState.progress.currentBmi = event.target.value;
    appState.progress.lastUpdated = new Date().toISOString();
    saveJson(STORAGE_KEYS.progress, appState.progress);
  }
});

document.addEventListener('change', (event) => {
  updateOnboardingField(event.target);
  updateSafetyField(event.target);
  updateProfileField(event.target);
  if (event.target.dataset.profileField) {
    render();
  }
  if (event.target.matches('input[type="radio"], input[type="checkbox"]')) {
    render();
  }
});

async function handleMirrorPhotoFileInput(input) {
  const file = input?.files?.[0];
  if (!file) return;

  try {
    const preparedDataUrl = await prepareMirrorPhotoDataUrl(file);
    const nextIndex = appState.progress.photos.length + 1;
    const angle = nextIndex % 2 === 0 ? 'Side' : 'Front';
    const currentBmi = appState.progress.currentBmi || calculateBmi()?.toFixed(1) || '';
    const newPhoto = {
      id: `photo-upload-${Date.now()}`,
      date: PROTOTYPE_TODAY,
      angle,
      label: `Current photo ${nextIndex}`,
      privacy: 'Private upload',
      tone: angle === 'Front' ? 'mint' : 'blue',
      kind: 'upload',
      src: preparedDataUrl,
      bmi: currentBmi
    };
    appState.progress.photos = [...appState.progress.photos, newPhoto];
    appState.progress.currentPhotoId = newPhoto.id;
    appState.progress.generatedIdealPhoto = null;
    appState.progress.bmiPreviewStatus = 'idle';
    appState.progress.bmiPreviewError = '';
    appState.progress.lastUpdated = new Date().toISOString();
    saveJson(STORAGE_KEYS.progress, appState.progress);
    logEvent('newme_mirror_photo_added', {
      angle,
      photoCount: appState.progress.photos.length,
      source: 'upload'
    });
    render();
  } catch (error) {
    appState.progress.bmiPreviewStatus = 'error';
    appState.progress.bmiPreviewError = error.message || 'Could not upload this photo.';
    appState.progress.lastUpdated = new Date().toISOString();
    saveJson(STORAGE_KEYS.progress, appState.progress);
    render();
  } finally {
    input.value = '';
  }
}

document.addEventListener('change', (event) => {
  if (event.target.matches('#mirror-photo-input, .upload-file-control')) {
    handleMirrorPhotoFileInput(event.target);
  }
});

document.addEventListener('click', async (event) => {
  const action = event.target.closest('[data-action]');
  if (!action) return;

  if (action.dataset.action === 'start-onboarding' || action.dataset.action === 'start-safety-path') {
    enterAppShell(action.dataset.action);
    return;
  }

  if (action.dataset.action === 'back-to-landing') {
    enterAppShell(action.dataset.action);
    return;
  }

  if (action.dataset.action === 'next-onboarding') {
    if (!validateCurrentStep()) {
      render();
      return;
    }
    logEvent('newme_onboarding_step_completed', { step: appState.onboardingStep + 1 });
    appState.onboardingStep += 1;
    appState.validationMessage = '';
    render();
    focusScreenTop();
  }

  if (action.dataset.action === 'previous-onboarding') {
    appState.onboardingStep = Math.max(0, appState.onboardingStep - 1);
    appState.validationMessage = '';
    render();
    focusScreenTop();
  }

  if (action.dataset.action === 'finish-onboarding') {
    if (!validateCurrentStep()) {
      render();
      return;
    }
    saveJson(STORAGE_KEYS.attribution, appState.attribution);
    saveJson(STORAGE_KEYS.onboarding, appState.onboarding);
    logEvent('newme_onboarding_completed', {
      occasion: appState.onboarding.occasion,
      daysLeft: daysUntil(appState.onboarding.eventDate),
      partnerId: appState.attribution.partnerId
    });
    appState.stage = 'safety';
    appState.safetyStep = 0;
    appState.recommendation = null;
    appState.validationMessage = '';
    logEvent('newme_safety_started');
    render();
    focusScreenTop();
  }

  if (action.dataset.action === 'back-to-onboarding-summary') {
    appState.stage = 'onboarding';
    appState.onboardingStep = 3;
    appState.validationMessage = '';
    render();
    focusScreenTop();
  }

  if (action.dataset.action === 'next-safety') {
    if (!validateCurrentSafetyStep()) {
      render();
      return;
    }
    logEvent('newme_safety_step_completed', { step: appState.safetyStep + 1 });
    appState.safetyStep += 1;
    appState.validationMessage = '';
    render();
    focusScreenTop();
  }

  if (action.dataset.action === 'previous-safety') {
    appState.safetyStep = Math.max(0, appState.safetyStep - 1);
    appState.validationMessage = '';
    render();
    focusScreenTop();
  }

  if (action.dataset.action === 'finish-safety') {
    if (!validateCurrentSafetyStep()) {
      render();
      return;
    }
    appState.recommendation = buildPlanRecommendation();
    appState.daily = createDefaultDailyState();
    appState.progress = createDefaultProgressState();
    appState.care = createDefaultCareState();
    appState.treatment = createDefaultTreatmentState();
    appState.triage = createDefaultTriageState();
    appState.consent = createDefaultConsentState();
    appState.foodAgent = createDefaultFoodAgentState();
    appState.commerceAgent = createDefaultCommerceAgentState();
    appState.beta = createDefaultBetaState();
    appState.profile = createDefaultProfileState({
      onboarding: appState.onboarding,
      safety: appState.safety
    });
    saveJson(STORAGE_KEYS.safety, appState.safety);
    saveJson(STORAGE_KEYS.recommendation, appState.recommendation);
    saveJson(STORAGE_KEYS.profile, appState.profile);
    saveJson(STORAGE_KEYS.daily, appState.daily);
    saveJson(STORAGE_KEYS.progress, appState.progress);
    saveJson(STORAGE_KEYS.care, appState.care);
    saveJson(STORAGE_KEYS.treatment, appState.treatment);
    saveJson(STORAGE_KEYS.triage, appState.triage);
    saveJson(STORAGE_KEYS.consent, appState.consent);
    saveJson(STORAGE_KEYS.foodAgent, appState.foodAgent);
    saveJson(STORAGE_KEYS.commerceAgent, appState.commerceAgent);
    saveJson(STORAGE_KEYS.beta, appState.beta);
    logEvent('newme_safety_completed', {
      eligibilityState: appState.recommendation.eligibilityState,
      severity: appState.recommendation.severity
    });
    logEvent('newme_plan_recommended', {
      plan: appState.recommendation.recommendedPlan,
      path: appState.recommendation.path
    });
    appState.stage = 'recommendation';
    appState.validationMessage = '';
    render();
    focusScreenTop();
  }

  if (action.dataset.action === 'back-to-safety') {
    appState.stage = 'safety';
    appState.safetyStep = 2;
    appState.validationMessage = '';
    render();
    focusScreenTop();
  }

  if (action.dataset.action === 'accept-recommendation') {
    if (!appState.recommendation) {
      appState.recommendation = buildPlanRecommendation();
      saveJson(STORAGE_KEYS.recommendation, appState.recommendation);
    }
    if (!appState.progress) {
      appState.progress = createDefaultProgressState();
      saveJson(STORAGE_KEYS.progress, appState.progress);
    }
    if (!appState.treatment) {
      appState.treatment = createDefaultTreatmentState();
      saveJson(STORAGE_KEYS.treatment, appState.treatment);
    }
    if (!appState.triage) {
      appState.triage = createDefaultTriageState();
      saveJson(STORAGE_KEYS.triage, appState.triage);
    }
    if (!appState.consent) {
      appState.consent = createDefaultConsentState();
      saveJson(STORAGE_KEYS.consent, appState.consent);
    }
    if (!appState.beta) {
      appState.beta = createDefaultBetaState();
      saveJson(STORAGE_KEYS.beta, appState.beta);
    }
    if (!appState.foodAgent) {
      appState.foodAgent = createDefaultFoodAgentState();
      saveJson(STORAGE_KEYS.foodAgent, appState.foodAgent);
    }
    if (!appState.commerceAgent) {
      appState.commerceAgent = createDefaultCommerceAgentState();
      saveJson(STORAGE_KEYS.commerceAgent, appState.commerceAgent);
    }
    if (!appState.profile) {
      appState.profile = createDefaultProfileState({
        onboarding: appState.onboarding,
        safety: appState.safety
      });
      saveJson(STORAGE_KEYS.profile, appState.profile);
    }
    appState.stage = 'app';
    activeTab = 'profile';
    appState.validationMessage = '';
    render();
    focusScreenTop();
  }

  if (action.dataset.action === 'open-profile') {
    logEvent('newme_avatar_settings_opened');
    profileSheet.showModal();
  }

  if (action.dataset.action === 'close-profile') {
    profileSheet.close();
  }

  if (action.dataset.action === 'connect-health-data') {
    const profile = appState.profile || createDefaultProfileState({
      onboarding: appState.onboarding,
      safety: appState.safety
    });
    profile.healthDataConnected = true;
    profile.healthDataProvider = 'PharmEasy';
    profile.healthDataLastSync = new Date().toLocaleDateString('en-IN', { day: '2-digit', month: 'short' });
    profile.lastUpdated = new Date().toISOString();
    appState.profile = profile;
    saveJson(STORAGE_KEYS.profile, profile);
    logEvent('newme_health_data_connected', {
      provider: profile.healthDataProvider,
      biomarkerCount: profile.biomarkers?.length || 0
    });
    render();
  }

  if (action.dataset.action === 'daily-action') {
    const actionId = action.dataset.actionId;
    const completed = getCompletedActionSet();
    const wasDone = completed.has(actionId);
    if (wasDone) {
      completed.delete(actionId);
    } else {
      completed.add(actionId);
    }
    appState.daily.completedActions = [...completed];
    appState.daily.lastUpdated = new Date().toISOString();
    saveJson(STORAGE_KEYS.daily, appState.daily);
    logEvent(wasDone ? 'newme_daily_action_reopened' : 'newme_daily_action_completed', { actionId });
    render();
  }

  if (action.dataset.action === 'reminder-primary' || action.dataset.action === 'reminder-secondary') {
    const reminder = mockData.daily.reminder;
    appState.daily.lastReminderIntent = `${reminder.type}:${action.dataset.action}`;
    appState.daily.lastUpdated = new Date().toISOString();
    saveJson(STORAGE_KEYS.daily, appState.daily);
    logEvent('newme_reminder_hook_scheduled', {
      intent: appState.daily.lastReminderIntent,
      hooks: mockData.daily.hooks.map((hook) => hook.id)
    });
    render();
  }

  if (action.dataset.action === 'save-swiggy-mobile') {
    const foodAgent = ensureFoodAgentState();
    foodAgent.mobileNumber = sanitizeMobileNumber(foodAgent.mobileNumber);
    foodAgent.maskedMobile = maskMobileNumber(foodAgent.mobileNumber);
    foodAgent.accountStatus = 'customer_controlled';
    persistFoodAgent('newme_swiggy_mobile_entered', {
      provider: foodAgent.provider,
      mobileReady: foodAgent.mobileNumber.length === 10
    });
  }

  if (action.dataset.action === 'confirm-swiggy-login') {
    const foodAgent = ensureFoodAgentState();
    foodAgent.customerLoginConfirmed = true;
    foodAgent.accountStatus = 'customer_controlled';
    persistFoodAgent('newme_swiggy_customer_login_confirmed', {
      provider: foodAgent.provider,
      mode: 'customer_entered_otp_inside_swiggy'
    });
  }

  if (action.dataset.action === 'select-swiggy-meal') {
    const foodAgent = ensureFoodAgentState();
    foodAgent.selectedIndex = Number(action.dataset.mealIndex) || 0;
    foodAgent.orderStatus = foodAgent.orderStatus === 'draft' ? 'draft' : 'ready_to_review';
    persistFoodAgent('newme_swiggy_order_agent_prepared', {
      provider: foodAgent.provider,
      selectedIndex: foodAgent.selectedIndex,
      status: foodAgent.orderStatus,
      source: 'meal_selection'
    });
  }

  if (action.dataset.action === 'prepare-swiggy-order') {
    const foodAgent = ensureFoodAgentState();
    foodAgent.prompt = healthyMealPrompt;
    foodAgent.rules = [...swiggyDietRules];
    foodAgent.shortlist = [...swiggyOrderShortlist];
    foodAgent.orderStatus = 'ready_to_review';
    foodAgent.connectionMode = 'direct_account_handoff';
    foodAgent.accountStatus = 'customer_controlled';
    foodAgent.lastPreparedAt = new Date().toISOString();
    persistFoodAgent('newme_swiggy_order_agent_prepared', {
      provider: foodAgent.provider,
      prompt: foodAgent.prompt,
      selectedMeal: foodAgent.shortlist[foodAgent.selectedIndex || 0]?.title || '',
      mode: foodAgent.connectionMode
    });
  }

  if (action.dataset.action === 'open-swiggy-handoff') {
    const foodAgent = ensureFoodAgentState();
    const agent = buildFoodOrderAgent();
    if (agent.canHandoff) {
      foodAgent.orderStatus = 'handoff_opened';
      persistFoodAgent('newme_swiggy_direct_handoff_opened', {
        provider: foodAgent.provider,
        url: agent.handoffUrl,
        selectedMeal: agent.selectedMeal.title
      });
      window.open(agent.handoffUrl, '_blank', 'noopener');
    } else {
      foodAgent.orderStatus = 'checkout_blocked';
      persistFoodAgent('newme_swiggy_order_checkout_blocked', {
        provider: foodAgent.provider,
        reason: 'prepare_order_brief_first'
      });
    }
  }

  if (action.dataset.action === 'confirm-swiggy-order') {
    const foodAgent = ensureFoodAgentState();
    foodAgent.orderStatus = 'checkout_blocked';
    persistFoodAgent('newme_swiggy_order_checkout_blocked', {
      provider: foodAgent.provider,
      reason: 'customer_must_complete_checkout_in_swiggy'
    });
  }

  if (action.dataset.action === 'save-woocommerce-store') {
    const commerceAgent = ensureCommerceAgentState();
    commerceAgent.storeUrl = normalizeStoreUrl(commerceAgent.storeUrl);
    commerceAgent.taskStatus = commerceAgent.storeUrl ? 'store_ready' : 'store_needed';
    persistCommerceAgent('newme_woocommerce_store_saved', {
      provider: commerceAgent.provider,
      hasStore: Boolean(commerceAgent.storeUrl),
      hasLoginEmail: Boolean(commerceAgent.loginEmail)
    });
  }

  if (action.dataset.action === 'prepare-woocommerce-agent') {
    const commerceAgent = ensureCommerceAgentState();
    commerceAgent.storeUrl = normalizeStoreUrl(commerceAgent.storeUrl);
    commerceAgent.productQuery = wooCommerceProductQuery;
    commerceAgent.rules = [...wooCommerceAgentRules];
    commerceAgent.taskStatus = commerceAgent.storeUrl ? 'ready_to_search' : 'store_needed';
    commerceAgent.lastPreparedAt = new Date().toISOString();
    persistCommerceAgent('newme_woocommerce_agent_prepared', {
      provider: commerceAgent.provider,
      storeUrl: commerceAgent.storeUrl,
      productQuery: commerceAgent.productQuery
    });
  }

  if (action.dataset.action === 'open-woocommerce-login') {
    const commerceAgent = ensureCommerceAgentState();
    const agent = buildCommerceAgent();
    if (agent.canOpenLogin) {
      commerceAgent.taskStatus = 'login_opened';
      persistCommerceAgent('newme_woocommerce_login_handoff_opened', {
        provider: commerceAgent.provider,
        url: agent.loginUrl
      });
      window.open(agent.loginUrl, '_blank', 'noopener');
    }
  }

  if (action.dataset.action === 'confirm-woocommerce-login') {
    const commerceAgent = ensureCommerceAgentState();
    commerceAgent.customerLoginConfirmed = true;
    commerceAgent.taskStatus = 'login_confirmed';
    persistCommerceAgent('newme_woocommerce_login_confirmed', {
      provider: commerceAgent.provider,
      mode: 'customer_completed_login_inside_store'
    });
  }

  if (action.dataset.action === 'open-woocommerce-search') {
    const commerceAgent = ensureCommerceAgentState();
    const agent = buildCommerceAgent();
    if (agent.canSearchProduct) {
      commerceAgent.taskStatus = 'search_opened';
      persistCommerceAgent('newme_woocommerce_product_search_opened', {
        provider: commerceAgent.provider,
        url: agent.productSearchUrl,
        productQuery: agent.productQuery
      });
      window.open(agent.productSearchUrl, '_blank', 'noopener');
    }
  }

  if (action.dataset.action === 'open-woocommerce-cart') {
    const commerceAgent = ensureCommerceAgentState();
    const agent = buildCommerceAgent();
    if (agent.canOpenCart) {
      commerceAgent.taskStatus = 'cart_opened';
      persistCommerceAgent('newme_woocommerce_cart_handoff_opened', {
        provider: commerceAgent.provider,
        url: agent.cartUrl
      });
      window.open(agent.cartUrl, '_blank', 'noopener');
    }
  }

  if (action.dataset.action === 'add-mirror-photo') {
    mirrorPhotoInput?.click();
  }

  if (action.dataset.action === 'set-current-photo') {
    const photoId = action.dataset.photoId;
    const selectedPhoto = appState.progress.photos.find((photo) => photo.id === photoId);
    if (selectedPhoto) {
      appState.progress.currentPhotoId = photoId;
      appState.progress.generatedIdealPhoto = null;
      appState.progress.lastUpdated = new Date().toISOString();
      saveJson(STORAGE_KEYS.progress, appState.progress);
      render();
    }
  }

  if (action.dataset.action === 'generate-bmi-preview') {
    const progress = buildProgressSystem();
    const currentPhoto = progress.currentPhoto;
    if (currentPhoto?.src) {
      appState.progress.currentBmi = appState.progress.currentBmi || '37';
      appState.progress.idealBmi = '22';
      appState.progress.bmiPreviewStatus = 'generating';
      appState.progress.bmiPreviewError = '';
      appState.progress.lastUpdated = new Date().toISOString();
      saveJson(STORAGE_KEYS.progress, appState.progress);
      render();

      let generatedSrc = '';
      let generationSource = 'openai_endpoint';
      try {
        generatedSrc = await requestOpenAiBmiPreview(currentPhoto, appState.progress.currentBmi);
      } catch (error) {
        generationSource = 'endpoint_required';
        appState.progress.bmiPreviewError = error.message || 'Could not generate the BMI 22 preview. Please reload and try again.';
      }

      if (generatedSrc) {
        appState.progress.generatedIdealPhoto = createIdealBmiPhoto(currentPhoto, appState.progress.currentBmi, generatedSrc);
        appState.progress.bmiPreviewStatus = 'ready';
        appState.progress.compareMode = true;
      } else {
        appState.progress.generatedIdealPhoto = null;
        appState.progress.bmiPreviewStatus = 'error';
        appState.progress.compareMode = false;
      }
      appState.progress.bmiPreviewSource = generationSource;
      appState.progress.lastUpdated = new Date().toISOString();
      saveJson(STORAGE_KEYS.progress, appState.progress);
      logEvent('newme_photo_compare_toggled', {
        compareMode: true,
        generatedPreview: 'bmi_22',
        currentBmi: appState.progress.currentBmi,
        generationSource
      });
      render();
    }
  }

  if (action.dataset.action === 'delete-mirror-photo') {
    const photoId = action.dataset.photoId;
    appState.progress.photos = appState.progress.photos.filter((photo) => photo.id !== photoId);
    if (appState.progress.currentPhotoId === photoId) {
      appState.progress.currentPhotoId = appState.progress.photos[appState.progress.photos.length - 1]?.id || '';
      appState.progress.generatedIdealPhoto = null;
    }
    if (appState.progress.photos.length < 2) {
      appState.progress.compareMode = false;
    }
    appState.progress.lastUpdated = new Date().toISOString();
    saveJson(STORAGE_KEYS.progress, appState.progress);
    logEvent('newme_mirror_photo_deleted', { photoId, photoCount: appState.progress.photos.length });
    render();
  }

  if (action.dataset.action === 'toggle-photo-compare') {
    appState.progress.compareMode = appState.progress.photos.length >= 2 ? !appState.progress.compareMode : false;
    appState.progress.lastUpdated = new Date().toISOString();
    saveJson(STORAGE_KEYS.progress, appState.progress);
    logEvent('newme_photo_compare_toggled', { compareMode: appState.progress.compareMode });
    render();
  }

  if (action.dataset.action === 'view-weekly-progress-report') {
    appState.progress.weeklyReportViews = (appState.progress.weeklyReportViews || 0) + 1;
    appState.progress.weeklyReportOpen = true;
    appState.progress.lastUpdated = new Date().toISOString();
    saveJson(STORAGE_KEYS.progress, appState.progress);
    logEvent('newme_weekly_report_viewed', {
      weeklyReportViews: appState.progress.weeklyReportViews
    });
    render();
  }

  if (action.dataset.action === 'submit-outfit-fit-score') {
    const submittedMetrics = new Set(appState.progress.submittedMetrics || []);
    submittedMetrics.add('outfitFit');
    appState.progress.submittedMetrics = [...submittedMetrics];
    appState.progress.lastUpdated = new Date().toISOString();
    saveJson(STORAGE_KEYS.progress, appState.progress);
    logEvent('newme_outfit_fit_score_submitted', {
      outfitFit: appState.progress.metrics.outfitFit
    });
    render();
  }

  if (action.dataset.action === 'submit-body-feel-trends') {
    const submittedMetrics = new Set(appState.progress.submittedMetrics || []);
    submittedMetrics.add('bloating');
    submittedMetrics.add('cravings');
    appState.progress.submittedMetrics = [...submittedMetrics];
    appState.progress.lastTrendSubmittedAt = new Date().toISOString();
    appState.progress.lastUpdated = appState.progress.lastTrendSubmittedAt;
    saveJson(STORAGE_KEYS.progress, appState.progress);
    logEvent('newme_body_feel_trend_submitted', {
      bloating: appState.progress.metrics.bloating,
      cravings: appState.progress.metrics.cravings
    });
    render();
  }

  if (action.dataset.action === 'adjust-progress-metric') {
    const metricId = action.dataset.metricId;
    const delta = Number(action.dataset.delta);
    const item = buildProgressSystem().checkinItems.find((metric) => metric.id === metricId);
    if (item && Number.isFinite(delta)) {
      const current = Number(appState.progress.metrics[metricId]);
      const nextValue = Math.min(item.max, Math.max(item.min, Number((current + delta).toFixed(1))));
      const submittedMetrics = new Set(appState.progress.submittedMetrics || []);
      submittedMetrics.add(metricId);
      appState.progress.metrics[metricId] = nextValue;
      appState.progress.submittedMetrics = [...submittedMetrics];
      if (metricId === 'bloating' || metricId === 'cravings') {
        appState.progress.lastTrendSubmittedAt = new Date().toISOString();
      }
      appState.progress.lastUpdated = new Date().toISOString();
      saveJson(STORAGE_KEYS.progress, appState.progress);
      logEvent('newme_progress_metric_updated', { metricId, value: nextValue });
      if (metricId === 'outfitFit') {
        logEvent('newme_outfit_fit_score_submitted', { outfitFit: nextValue });
      }
      if (metricId === 'bloating' || metricId === 'cravings') {
        logEvent('newme_body_feel_trend_submitted', {
          metricId,
          value: nextValue
        });
      }
      render();
    }
  }

  if (action.dataset.action === 'toggle-habit') {
    const treatment = ensureTreatmentState();
    const treatmentSystem = buildTreatmentSystem();
    const habitId = action.dataset.habitId;
    const habit = lifestyleHabitSchedule.find((item) => item.id === habitId);
    if (habit && treatmentSystem.trackingEnabled) {
      const completed = new Set(treatment.completedHabits || []);
      const wasDone = completed.has(habitId);
      if (wasDone) {
        completed.delete(habitId);
      } else {
        completed.add(habitId);
      }
      treatment.completedHabits = [...completed];
      persistTreatment('newme_habit_schedule_toggled', { habitId, done: !wasDone });
    }
  }

  if (action.dataset.action === 'log-dose-taken') {
    const treatment = ensureTreatmentState();
    const treatmentSystem = buildTreatmentSystem();
    if (treatmentSystem.canLogDose) {
      treatment.doseStatus = 'taken';
      treatment.lastDoseDate = PROTOTYPE_TODAY;
      treatment.missedDoseProtocolSeen = false;
      persistTreatment('newme_dose_status_updated', { doseStatus: treatment.doseStatus });
    }
  }

  if (action.dataset.action === 'undo-dose-log') {
    const treatment = ensureTreatmentState();
    const treatmentSystem = buildTreatmentSystem();
    if (treatmentSystem.canLogDose) {
      treatment.doseStatus = 'due';
      treatment.lastDoseDate = '';
      persistTreatment('newme_dose_status_updated', { doseStatus: treatment.doseStatus });
    }
  }

  if (action.dataset.action === 'log-dose-missed') {
    const treatment = ensureTreatmentState();
    const treatmentSystem = buildTreatmentSystem();
    if (treatmentSystem.canLogDose) {
      treatment.doseStatus = 'missed';
      treatment.missedDoseProtocolSeen = true;
      persistTreatment('newme_dose_status_updated', { doseStatus: treatment.doseStatus });
    }
  }

  if (action.dataset.action === 'view-missed-dose-protocol') {
    const treatment = ensureTreatmentState();
    treatment.missedDoseProtocolSeen = true;
    persistTreatment('newme_missed_dose_protocol_viewed', {
      doseStatus: buildTreatmentSystem().doseStatus
    });
  }

  if (action.dataset.action === 'toggle-side-effect') {
    const triage = ensureTriageState();
    const consent = buildConsentSystem();
    const symptom = action.dataset.symptom;
    if (consent.healthDataProcessing && sideEffectOptions.includes(symptom)) {
      const selected = new Set(triage.selectedSymptoms || []);
      const wasSelected = selected.has(symptom);
      if (wasSelected) {
        selected.delete(symptom);
      } else {
        selected.add(symptom);
      }
      triage.selectedSymptoms = [...selected];
      triage.escalationAcknowledged = false;
      persistTriage('newme_side_effect_logged', {
        symptom,
        selected: !wasSelected,
        triageLevel: buildTriageSystem().level
      });
    }
  }

  if (action.dataset.action === 'clear-side-effects') {
    const triage = ensureTriageState();
    triage.selectedSymptoms = [];
    triage.escalationAcknowledged = false;
    persistTriage('newme_side_effect_logged', { cleared: true });
  }

  if (action.dataset.action === 'acknowledge-triage') {
    const triage = ensureTriageState();
    const triageSystem = buildTriageSystem();
    if (triageSystem.escalated && !triage.escalationAcknowledged) {
      triage.escalationAcknowledged = true;
      persistTriage('newme_side_effect_escalated', {
        triageLevel: triageSystem.level,
        symptoms: triage.selectedSymptoms
      });
    }
  }

  if (action.dataset.action === 'toggle-health-consent') {
    const consent = ensureConsentState();
    consent.healthDataProcessing = !consent.healthDataProcessing;
    persistConsent('newme_health_consent_toggled', {
      healthDataProcessing: consent.healthDataProcessing
    });
  }

  if (action.dataset.action === 'toggle-partner-consent') {
    const consent = ensureConsentState();
    consent.partnerSharing = !consent.partnerSharing;
    if (consent.partnerSharing) {
      consent.partnerSharingRevokedAt = '';
    }
    persistConsent('newme_partner_consent_toggled', {
      partnerSharing: consent.partnerSharing
    });
  }

  if (action.dataset.action === 'revoke-partner-consent') {
    const consent = ensureConsentState();
    consent.partnerSharing = false;
    consent.partnerSharingRevokedAt = new Date().toISOString();
    persistConsent('newme_partner_consent_revoked', {
      partnerSharingRevokedAt: consent.partnerSharingRevokedAt
    });
  }

  if (action.dataset.action === 'toggle-report-share-mode') {
    const beta = ensureBetaState();
    beta.reportShareMode = beta.reportShareMode === 'share' ? 'private' : 'share';
    persistBeta('newme_weekly_report_share_mode_toggled', {
      reportShareMode: beta.reportShareMode
    });
  }

  if (action.dataset.action === 'run-beta-qa') {
    const beta = ensureBetaState();
    beta.completedQaChecks = betaQaChecks.map((item) => item.id);
    beta.lastQaRunAt = new Date().toISOString();
    persistBeta('newme_beta_qa_sweep_run', {
      completedQaChecks: beta.completedQaChecks.length
    });
  }

  if (action.dataset.action === 'toggle-beta-qa') {
    const beta = ensureBetaState();
    const qaId = action.dataset.qaId;
    if (betaQaChecks.some((item) => item.id === qaId)) {
      const completed = new Set(beta.completedQaChecks || []);
      const wasDone = completed.has(qaId);
      if (wasDone) {
        completed.delete(qaId);
      } else {
        completed.add(qaId);
      }
      beta.completedQaChecks = [...completed];
      persistBeta('newme_beta_qa_check_toggled', { qaId, passed: !wasDone });
    }
  }

  if (action.dataset.action === 'set-copy-locale') {
    const beta = ensureBetaState();
    const locale = action.dataset.locale;
    if (copyLocaleOptions.includes(locale)) {
      beta.copyLocale = locale;
      persistBeta('newme_beta_copy_locale_changed', { copyLocale: locale });
    }
  }

  if (action.dataset.action === 'select-consult-slot') {
    const care = ensureCareState();
    const selectedSlot = action.dataset.slot;
    if (consultSlots.includes(selectedSlot)) {
      care.selectedSlot = selectedSlot;
      persistCare('newme_consult_slot_selected', { selectedSlot });
    }
  }

  if (action.dataset.action === 'select-care-language') {
    const care = ensureCareState();
    const language = action.dataset.language;
    if (languageOptions.includes(language)) {
      care.language = language;
      persistCare('newme_consult_preference_updated', { language });
    }
  }

  if (action.dataset.action === 'toggle-female-doctor') {
    const care = ensureCareState();
    care.femaleDoctorPreferred = !care.femaleDoctorPreferred;
    persistCare('newme_consult_preference_updated', {
      femaleDoctorPreferred: care.femaleDoctorPreferred
    });
  }

  if (action.dataset.action === 'book-consult') {
    const care = ensureCareState();
    const careSystem = buildCareSystem();
    if (careSystem.canBookConsult) {
      care.consultStatus = 'booked';
      care.doctorSummaryStatus = 'pending_consult';
      care.followUpDate = addDays(PROTOTYPE_TODAY, 14);
      persistCare('newme_consult_booked', {
        selectedSlot: care.selectedSlot,
        language: care.language,
        femaleDoctorPreferred: care.femaleDoctorPreferred
      });
    }
  }

  if (action.dataset.action === 'complete-consult-demo') {
    const care = ensureCareState();
    const careSystem = buildCareSystem();
    if (careSystem.consultBooked && !careSystem.consultCompleted) {
      care.consultStatus = 'completed';
      care.doctorSummaryStatus = 'ready';
      care.followUpDate = addDays(PROTOTYPE_TODAY, 14);
      persistCare('newme_consult_booked', {
        status: 'completed',
        followUpDate: care.followUpDate
      });
    }
  }

  if (action.dataset.action === 'upload-labs') {
    const care = ensureCareState();
    care.labsUploaded = true;
    persistCare('newme_labs_uploaded', { labsUploaded: true });
  }

  if (action.dataset.action === 'upload-prescription') {
    const care = ensureCareState();
    if (care.prescriptionStatus === 'not_uploaded') {
      care.prescriptionStatus = 'uploaded';
    }
    care.prescriptionUpdatedAt = new Date().toISOString();
    persistCare('newme_prescription_uploaded', {
      prescriptionStatus: care.prescriptionStatus
    });
  }

  if (action.dataset.action === 'advance-rx-status') {
    const care = ensureCareState();
    const careSystem = buildCareSystem();
    const currentStatus = care.prescriptionStatus === 'approved' && !careSystem.prescriptionRouteCanApprove
      ? 'under_review'
      : care.prescriptionStatus;
    const nextStatus = nextPrescriptionStatus(currentStatus, careSystem.consultCompleted && careSystem.prescriptionRouteCanApprove);
    care.prescriptionStatus = nextStatus;
    care.prescriptionUpdatedAt = new Date().toISOString();
    if (nextStatus === 'approved') {
      care.refillDate = addDays(PROTOTYPE_TODAY, 24);
    }
    persistCare('newme_prescription_status_changed', {
      prescriptionStatus: nextStatus,
      approvalBlockedByConsult: nextStatus === 'under_review' && !careSystem.consultCompleted,
      approvalBlockedByRoute: nextStatus === 'under_review' && !careSystem.prescriptionRouteCanApprove
    });
  }

  if (action.dataset.action === 'clarify-rx') {
    const care = ensureCareState();
    care.prescriptionStatus = 'needs_clarification';
    care.prescriptionUpdatedAt = new Date().toISOString();
    persistCare('newme_prescription_status_changed', {
      prescriptionStatus: care.prescriptionStatus
    });
  }

  if (action.dataset.action === 'toggle-refill-reminder') {
    const care = ensureCareState();
    const careSystem = buildCareSystem();
    if (careSystem.hasValidRx) {
      care.refillReminderEnabled = !care.refillReminderEnabled;
      care.refillDate = care.refillDate || addDays(PROTOTYPE_TODAY, 24);
      persistCare('newme_refill_reminder_toggled', {
        refillReminderEnabled: care.refillReminderEnabled,
        refillDate: care.refillDate
      });
    }
  }

  if (action.dataset.action === 'show-medicine-guardrail') {
    const care = ensureCareState();
    const careSystem = buildCareSystem();
    persistCare('newme_medicine_guardrail_viewed', {
      medicineVisible: careSystem.medicineVisible,
      prescriptionStatus: care.prescriptionStatus
    });
  }

  if (action.dataset.action === 'reset-demo') {
    Object.values(STORAGE_KEYS).forEach((key) => safeLocalStorageRemove(key));
    profileSheet.close();
    appState.stage = 'app';
    appState.onboardingStep = 0;
    appState.safetyStep = 0;
    appState.recommendation = null;
    appState.profile = createDefaultProfileState({
      onboarding: appState.onboarding,
      safety: appState.safety
    });
    appState.daily = createDefaultDailyState();
    appState.progress = createDefaultProgressState();
    appState.care = createDefaultCareState();
    appState.treatment = createDefaultTreatmentState();
    appState.triage = createDefaultTriageState();
    appState.consent = createDefaultConsentState();
    appState.foodAgent = createDefaultFoodAgentState();
    appState.commerceAgent = createDefaultCommerceAgentState();
    appState.beta = createDefaultBetaState();
    appState.validationMessage = '';
    activeTab = 'profile';
    render();
    focusScreenTop();
  }
});

profileSheet.addEventListener('click', (event) => {
  if (event.target === profileSheet) {
    profileSheet.close();
  }
});

render();
