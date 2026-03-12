# Tony's Mobile Vets — Website Prototype Brief

> **Purpose:** Customer-facing website content and design specifications for building a prototype in Claude Code. This document is the single source of truth for page structure, copy direction, pricing, brand positioning, and visual design tokens.
>
> **Scope for launch:** Homepage, How It Works, Plans & Pricing, About Dr. Tony, Services. Lifecycle stages and persona-driven journeys will come in later iterations.
>
> **Pricing model:** PAYG + single-tier Pack Membership (£39/month). The earlier three-tier subscription model (£29/£49/£79) has been retired.

---

## 1. Design System

### Colour Palette

| Token Name | Hex | Usage |
|---|---|---|
| `--deep-sea-green` | `#005b56` | Primary brand colour. Headers, CTAs, navigation, trust elements |
| `--seaweed` | `#4b936c` | Secondary green. Accents, hover states, supporting elements |
| `--melon` | `#f1c6b6` | Warm accent. Highlights, soft backgrounds |
| `--peach-tea` | `#eeb6a2` | CTA buttons, badges, warm emphasis |
| `--dairy-cream` | `#f1e0b8` | Section backgrounds, discount badges, info strips |
| `--tropical-blue` | `#bcd7f0` | Light accent. Trust badges, calming elements |
| `--lavender` | `#d8d6eb` | Soft accent. Subtle differentiation |
| `--cream` | `#FFFDF8` | Page background |
| `--text` | `#2C3E50` | Body text |
| `--text-light` | `#5f6b72` | Secondary text, captions, subtle info |
| `--border` | `#E8E8E8` | Dividers, table borders |

### Typography

- **Font family:** `'Manrope', sans-serif` (Google Fonts)
- **Weights available:** 300, 400, 500, 600, 700, 800
- **Headings:** Manrope 700, letter-spacing -0.5px
- **Body:** Manrope 400–500, line-height 1.6
- **CTAs/badges:** Manrope 700, letter-spacing 0.3–0.5px

### Component Patterns

- **CTA buttons (primary):** `--peach-tea` background, `--deep-sea-green` text, border-radius 50px, font-weight 700. Hover → `--melon` bg + subtle lift shadow.
- **CTA buttons (outline):** Transparent background, `--deep-sea-green` 2px border, border-radius 50px. Hover → `--deep-sea-green` bg, white text.
- **Cards:** White background, border-radius 16–20px, box-shadow `0 2px 20px rgba(0,0,0,0.06)`.
- **Section headers:** `--deep-sea-green` text, uppercase labels with letter-spacing.
- **Info strips:** `--dairy-cream` background, centred text.
- **Badges:** `--peach-tea` background, `--deep-sea-green` text, border-radius 20px.

### Shadows

- **Default:** `0 2px 20px rgba(0,0,0,0.06)`
- **Hover:** `0 8px 30px rgba(0,0,0,0.1)`

---

## 2. Brand Positioning

### Tagline

**Healing Happens at Home.**

This replaces "Bringing Pet Care Home." The shift is deliberate: from describing what we do (we come to your home) to declaring why it matters (your pet heals better here). This also applies to end-of-life care — humans heal better at home, too.

### Brand Promise (long form)

Dr. Tony believes pets heal better in the place they love most: home. No waiting rooms. No strangers. No stress. Just calm, unhurried care from vets who bring genuine warmth to every appointment. Because when your pet feels safe, we can focus on what matters.

### Three-Layer Brand System

| Layer | Name | Role |
|---|---|---|
| External Promise | **Healing Happens at Home** | What we promise to clients. The belief that anchors every piece of communication. |
| Internal Behaviour | **Favourite Appointment Energy** | How we behave. Every team member brings the energy that makes each interaction feel special. |
| Measurement | **Care Worth Talking About** | How we know it's working. We obsess over referrals, reviews, and word-of-mouth. |

### Four Brand Pillars

**Pillar 1 — Your pet stays put.**
No carriers, no car rides, no waiting rooms. We come to where your pet already feels safe. Less stress means better healing, better diagnosis, and a better experience for everyone.

**Pillar 2 — Time, not timeslots.**
Most vet appointments are 10–20 minutes. We book a full 60 minutes as standard, because we believe good care can't be rushed. We take the time to examine thoroughly, explain clearly, and answer every question. This is the "Tony's difference."

**Pillar 3 — We remember everything.**
Every vet reviews your full history before arriving. We know your pet's name, your concerns, what happened last time. Continuity of care is not a feature we offer — it's how we operate. Details matter.

**Pillar 4 — Honest advice (even when it costs us).**
We tell you what you don't need, not just what you do. No upselling. No unnecessary tests. We are here for your pet, not our margin. Trust is built in the moments where we could charge more and choose not to.

### Tone of Voice

- **Warm, but not cloying.** Kind and empathetic, natural language. The thoughtful friend who shows up when it matters. Never performative or poetic.
- **Reassuring, but not overpromising.** Clear, calm language from someone who has done this many times but knows each family is different. Specific and supportive.
- **Curious, but not intense.** Dr. Tony's curiosity — the vet who wants to understand your pet, not just diagnose them.
- **Lead with feeling, follow with fact.** Open with why it matters to the pet or owner, then introduce the service or feature.
- **Speak to the moment, not the demographic.** Write for the person whose dog shakes in the car. The owner who can't get to the clinic. The cat owner who dreads the carrier fight.
- **Dr. Tony is the voice, the team is the chorus.** The voice originates from Dr. Tony's belief; every vet on the team embodies it. Singular in origin, collective in delivery.

---

## 3. Page Briefs

### 3.1 Homepage

**Goal:** Convert first-time visitors into £99 first visit bookings.

**Hero Section**
- Headline: Lead with the tagline — "Healing Happens at Home"
- Subheadline: Communicate the core promise. Something like: "Your vet comes to you. 60 minutes. No waiting room. No stress."
- Primary CTA: "Book your first visit — £99" (links to booking)
- Secondary CTA: "See how it works" (scrolls/links to How It Works)
- Visual direction: Warm, authentic photography of Dr. Tony with a pet in a real home setting. Not stock photos.

**Social Proof Strip**
- Stats from current site: 7,000+ pets cared for · 5,000+ happy pet owners · 2,000+ referred customers
- Star rating / review snippet if available

**What's Included Strip**
- Every home visit includes: 60-minute appointment · full nose-to-tail health check · microchip scan · personalised advice from your vet

**Value Proposition Cards (the "Tony's Difference")**
Map to the four brand pillars:
1. **Your pet stays put** — No carrier, no car, no waiting room. We come to your pet's safe space.
2. **Time, not timeslots** — A full 60 minutes. 3–4x longer than a typical clinic appointment.
3. **We remember everything** — Same vet, every time. Your pet's full history reviewed before we arrive.
4. **Honest advice** — We tell you what you don't need. No upselling, no unnecessary tests.

**Why Home Visits Are Worth It**
- No travel (save on petrol, parking, London traffic stress)
- No waiting room (appointment starts on time, at home)
- Less stress for your pet (calmer at home = better for them, more accurate for the vet)
- The whole family can be there (everyone hears the advice first-hand)

**Pricing Preview**
- Brief intro to the two options: PAYG and Pack Membership
- First visit callout: "Try us for £99 — consultation fee waived"
- Pack Membership teaser: "Or save £260+ a year with our Pack Membership from £39/month"
- CTA: "View full pricing"

**Final CTA Section**
- Reassurance-focused. Something like: "Not sure yet? Book your first visit for £99 and see the difference for yourself. No commitment, no pressure."
- Booking CTA

### 3.2 How It Works

**Goal:** Demystify the mobile vet experience and reduce friction for first-time bookers.

**Suggested 4-Step Flow:**
1. **Book online** — Choose your time slot. Evenings and weekends available. Takes 2 minutes.
2. **We come to you** — Your vet arrives with a fully equipped mobile clinic. No carrier, no car ride.
3. **60 minutes of calm care** — A full consultation in your pet's safe space. Nose-to-tail check, treatments, and time for all your questions.
4. **Stay connected** — Full notes and advice sent after every visit. Your pet's history ready for next time.

**Supporting Content:**
- What to expect on your first visit (the £99 experience)
- What we bring (the mobile clinic is fully equipped — vaccines, diagnostics, medications)
- What we can and can't do at home (we handle consultations, vaccinations, health checks, microchipping, prescriptions, blood tests, end-of-life care; surgeries are referred to trusted clinic partners)
- Coverage area: Greater London (enter postcode to check)

### 3.3 Plans & Pricing

**Goal:** Present clear, honest pricing with two paths: PAYG flexibility or Pack Membership savings.

**Toggle/Tab UI:** Pay As You Go | Pack Membership

#### Pay As You Go
Subtitle: "Full flexibility, no commitment"

**Every visit has two parts:** a home visit fee + a treatment fee. No hidden charges.

**New Customers**

| Service | Home Visit | Treatment | Total |
|---|---|---|---|
| First visit (single pet) | £99 | Waived | **£99** |
| Additional pet (add to first visit) | Waived | £50 | **£50** |
| Follow-up within 14 days (if required) | £99 | £20 | **£119** |
| Certificate for additional pet (same visit) | — | £80 | **£80** |

**Consultations**

| Service | Home Visit | Treatment | Total |
|---|---|---|---|
| Vet consultation | £125 | £85 | **£210** |
| Nurse consultation | £125 | £50 | **£175** |
| Multi-pet fee (per additional pet) | Waived | £85 | **£85** |

**Vaccinations**

| Service | Home Visit | Treatment | Total |
|---|---|---|---|
| Puppy / kitten vaccination | £125 | £50 | **£175** |
| Annual booster (cat / dog) | £125 | £55 | **£180** |
| Annual booster (rabbit) | £125 | £65 | **£190** |
| Rabies vaccination | £125 | £65 | **£190** |

**Add-ons (same visit — no extra home visit fee)**

| Service | Price |
|---|---|
| Nail clipping | £10 |
| Anal gland treatment | £10 |
| Dewormer tablet | £10 |
| Kennel cough vaccination | £45 |
| Microchipping | £45 |
| Written prescription | £20 |

**Travel Support**

| Service | Home Visit | Treatment | Total |
|---|---|---|---|
| Animal Health Certificate | £125 | £150 | **£275** |
| AHC — additional pet | — | £80 | **£80** |

**End of Life Care**
Our end-of-life care packages start at £450. Our team will share options with you, depending on how you want to say goodbye and remember your pet.

#### Pack Membership

**£39/month per pet**
20% off each additional pet in the same household (£31.20/month)

**What's included:**
- Up to 3 home visits per year (worth £375)
- Full 60-minute consultation at every visit
- Annual booster vaccination included
- Free nail clipping at every visit
- Free anal gland treatment at every visit
- Free dewormer tablet at every visit
- 15% off all other treatments and services

**Discounts:**
- 20% seniors' discount (over 65s)
- 20% students' discount (under 25s)

**Annual Savings Breakdown:**

| Item | Value |
|---|---|
| 3 home visits | £630 |
| Annual vaccination | £8 |
| Free add-ons (nails, glands, dewormer) | £90 |
| Membership cost | −£468/year |
| **You save** | **£260+ per year** |

**Member Prices (15% off treatment fees):**

| Service | Standard | Member Price |
|---|---|---|
| Vet consultation | £85 | £72.25 |
| Nurse consultation | £50 | £42.50 |
| Multi-pet fee | £85 | £72.25 |
| Puppy / kitten vaccination | £50 | £42.50 |
| Annual booster (cat / dog) | £55 | £46.75 |
| Annual booster (rabbit) | £65 | £55.25 |
| Rabies vaccination | £65 | £55.25 |
| Kennel cough vaccination | £45 | £38.25 |
| Microchipping | £45 | £38.25 |
| Written prescription | £20 | £17.00 |
| Animal Health Certificate | £150 | £127.50 |
| AHC — additional pet | £80 | £68.00 |

**Membership Terms:**
- 12-month commitment
- Pay monthly or upfront (upfront saves 10%)
- If cancelled early, benefits run until end of billing month
- Additional visits beyond 3 charged at PAYG rates with 15% member discount

**CTA:** "Join the Pack →"

**End of Life Care (Members)**
Our end-of-life care packages start at £450. Members receive a discount on all end-of-life services. Our team will guide you through your options with compassion and care.

### 3.4 About Dr. Tony

**Goal:** Build the brand around Dr. Tony and his vision. Establish trust and emotional connection.

**Content Direction:**
- Dr. Tony's story and why he started TMV
- His belief that pets heal better at home
- His approach: curiosity, honesty, genuine warmth
- The team: trained in "Tony's Way" — same philosophy, same care standard
- The "Favourite Appointment Energy" ethos — every visit should feel like the best part of everyone's day

**Tone:** Personal, warm, genuine. Not a corporate bio — a story. Lead with feeling, follow with credentials.

**Elements to include:**
- Photo of Dr. Tony (authentic, not stock)
- Pull quote or belief statement
- Brief team section showing this isn't a one-person operation
- Trust markers: qualifications, RCVS registration, years of experience

### 3.5 Services

**Goal:** Show the breadth of what TMV can do at home and set expectations for what requires a clinic referral.

**Services List** (from current website, updated for new brand voice):

1. **Comprehensive Wellness Exams** — Full nose-to-tail health checks in your pet's own environment. 60 minutes as standard.
2. **Vaccinations** — Puppy/kitten primary courses, annual boosters (cat, dog, rabbit), rabies, kennel cough. All delivered at home.
3. **Routine Illness & Ailment** — From ear infections to skin conditions to digestive issues. Diagnosed and treated where your pet is calmest.
4. **Microchipping** — Quick and stress-free at home. A legal requirement for dogs and recommended for cats.
5. **Parasite Control** — Deworming, flea treatment, and prevention plans tailored to your pet.
6. **Personalised Treatment Plans** — For pets with chronic or complex conditions. One vet, continuity of care, full history reviewed every visit.
7. **Travel & Healthcare Certificates** — Animal Health Certificates issued at home. No need to stress your pet before a journey.
8. **Pet Plans (Pack Membership)** — Preventative care bundled into a monthly membership. Link to pricing page.
9. **End of Life Care** — Gentle, compassionate euthanasia at home. Because saying goodbye should happen in the place your pet feels safest.
10. **Insurance Claims Support** — We help with the paperwork so you can focus on your pet.

**What We Don't Do (and why):**
We don't perform surgical procedures (spaying, neutering, etc.) at home. We focus on what can be done brilliantly in a home setting. If your pet needs surgery, we refer to trusted clinic partners and coordinate the handover — no gaps, no repeating yourself.

---

## 4. FAQs

### Pricing FAQs

**What does a typical visit cost?**
Every visit has two clear parts: a home visit fee and a treatment fee. For example, an annual dog booster is £125 (home visit) + £55 (vaccination) = £180 total. There are never any hidden charges — the total you see is the total you pay. Add-ons like nail clipping (£10) can be added to any visit without an extra home visit fee.

**Why is a home visit more expensive than going to a clinic?**
When you factor in travel time, petrol, parking (often £5–10 in central London), taxi fares, and the stress on your pet, a clinic visit costs more than the consultation fee alone. Our vet comes to you with a fully equipped mobile clinic, spends a full 60 minutes with your pet in their own home, and there's no waiting room.

**I have more than one pet — do I pay a home visit fee for each?**
No. You pay one home visit fee per visit, regardless of how many pets are seen. Additional pets on the same visit are charged only the treatment fee (e.g., £85 per additional pet consultation, or £50 per additional pet vaccination).

### Pack Membership FAQs

**What does the Pack Membership include?**
For £39/month per pet, you get up to 3 home visits per year (including full consultation), an annual booster vaccination, free nail clipping, anal gland treatment, and dewormer at every visit, and 15% off all other treatments and services.

**What happens if I need more than 3 visits in a year?**
Additional visits beyond your included 3 are charged at standard PAYG rates, but you'll still receive your 15% member discount on all treatment fees. The home visit fee applies for visits beyond your allowance.

**I have two pets — is there a multi-pet discount on the membership?**
Yes. The first pet is £39/month. Each additional pet in the same household is 20% off — so £31.20/month. Both pets get the full membership benefits.

**Can I cancel my membership?**
The Pack Membership is a 12-month commitment. You can choose to pay monthly or upfront — paying upfront saves you 10%. If you cancel before the end of your 12 months, you keep your benefits until the end of that billing month.

**I'm already paying for pet insurance — why do I need a membership?**
Pet memberships cover routine costs like vaccinations and check-ups. Pet insurance covers unexpected, high-cost emergencies and illnesses. They work well together — one handles the everyday, the other handles the unexpected.

### Visits FAQs

**What area do you cover?**
We cover most of Greater London. Enter your postcode on our booking page to check availability.

**How long is each appointment?**
Every appointment is 60 minutes as standard. That's 3–4 times longer than a typical 15-minute clinic consultation.

**What's included in the first visit for new customers?**
Your first visit is just £99 — and the consultation fee is waived. It's a full 60-minute appointment including a comprehensive health check, microchip scan, and time to discuss your pet's needs. Additional pets are just £50 each.

### Services FAQs

**Can you do surgeries or operations at home?**
We don't perform surgical procedures at home. We focus on what can be done brilliantly in a home setting: consultations, vaccinations, health checks, microchipping, prescriptions, blood tests, and end-of-life care. If your pet needs surgery, we refer to a trusted clinic partner and coordinate the handover.

**Do you do Animal Health Certificates for travel?**
Yes. We issue Animal Health Certificates at home — no need to take your pet to a clinic before a stressful journey. The cost is £275 (£125 home visit + £150 certificate). For Pack Members using an included visit, the certificate is just £127.50 (15% member discount). Additional pets on the same visit are £80 each (£68 for members).

**How does end-of-life care work?**
Saying goodbye at home, surrounded by family, is one of the most important things we do. Our end-of-life care packages start at £450. Pack Members receive a discount. We guide you through everything — sedation, the procedure, aftercare, and memorial options.

**How do I know if my puppy or kitten needs a vaccine?**
Puppies and kittens need a primary course of vaccinations (usually two or three injections, a few weeks apart). Check with the breeder or rescue to find out which vaccinations have already been given and which brand was used. We can continue or start the full course at home. Puppy and kitten vaccinations are £175 per visit (£125 home visit + £50 vaccination). Once the primary course is complete, your pet needs an annual booster.

---

## 5. Implementation Notes

### Key Decisions for Prototype
- **Single subscription tier only** — "Pack Membership" at £39/month. Do not implement three tiers.
- **Pricing source of truth** — All figures come from `TMV_Pricing_Page.html`. Do not use pricing from the Option B Proposition Summary or the current tonysmobilevets.com website.
- **Typography and colours must not change** — Use exact hex values and Manrope font specified above.
- **Homepage mockup** — Use for layout inspiration only. Disregard the three-tier subscription cards shown in the mockup.
- **Personas and lifecycle** — Not in scope for this prototype. Will be layered in later.

### Navigation Structure
1. Homepage
2. How It Works
3. Plans & Pricing
4. About Dr. Tony
5. Services

### Global Elements
- **Header:** Logo + navigation + "Book Now" CTA (peach-tea button)
- **Footer:** Contact info, coverage area, social links, legal
- **Booking CTA:** Should appear at natural conversion points throughout all pages — not just at the bottom
- **First visit pricing (£99):** Should be referenced prominently on Homepage, How It Works, and Pricing pages as the entry point

### CSS Custom Properties (copy-paste ready)
```css
:root {
  --deep-sea-green: #005b56;
  --seaweed: #4b936c;
  --melon: #f1c6b6;
  --peach-tea: #eeb6a2;
  --dairy-cream: #f1e0b8;
  --tropical-blue: #bcd7f0;
  --lavender: #d8d6eb;
  --cream: #FFFDF8;
  --text: #2C3E50;
  --text-light: #5f6b72;
  --border: #E8E8E8;
  --shadow: 0 2px 20px rgba(0,0,0,0.06);
  --shadow-hover: 0 8px 30px rgba(0,0,0,0.1);
}

body {
  font-family: 'Manrope', sans-serif;
  color: var(--text);
  background: var(--cream);
  line-height: 1.6;
}
```

### Google Fonts Import
```css
@import url('https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700;800&display=swap');
```
