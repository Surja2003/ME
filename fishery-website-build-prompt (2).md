# Website Build Prompt — Fishery Products Showroom Website

Copy everything below into your AI website builder / Claude Code / dev tool of choice.

---

## PROJECT BRIEF

Build a 7-page responsive website for a fishery supplies shop that distributes aquaculture health, water-treatment, and feed products from two brands: **Care Chem Remedies** (pond water conditioners, prawn/fish health treatments) and **Almas Agrovet Private Limited** (fish feed and nutritional supplements). The audience is local fish farmers and fishermen (West Bengal region, mix of Bengali and English speakers) who need to identify the right product for a pond problem, see what it actually looks like, and then contact the shop directly to buy — there is NO online checkout or payment; every product links to a contact action (call, WhatsApp, or enquiry form).

**Tech stack:** React + Vite + TypeScript + Tailwind CSS + Framer Motion for page transitions (use this stack — it's what I already build in). Fully responsive, mobile-first, since most farmers will browse on phones.

**Tone:** Trustworthy, practical, rural-friendly — not corporate/SaaS. Bilingual touches (Bengali + English) are a plus for key CTAs like "দোকানে যোগাযোগ করুন" (Contact Shop) alongside English.

**Trust signal:** This shop is a confirmed official/authorized distributor of Care Chem Remedies — surface this everywhere it carries weight (a small badge in the header or hero subhead, the About page, and on every Care Chem product detail page). It's the single strongest credibility signal a B2B agri-site like this can have. If the relationship with Almas Agrovet is also formally authorized, confirm that directly with them before using the same "authorized distributor" language for their products — keep the claim brand-specific and accurate rather than applying it as a blanket statement across both brands.

---

## SITE STRUCTURE (7 pages)

### 1. Home
- Hero section: large banner image of a fish pond / fish farmer at work, headline like "Trusted Aquaculture Solutions for Healthier Ponds & Stronger Yields," subhead naming both brands as authorized/stocked.
- "Shop by Problem" quick-nav cards using the 6 parent categories from the Category Taxonomy section below (Water Quality & Detox, Oxygen & Aeration, Disease/Wound/Stress Care, Growth & Nutrition, Mineral & Calcium, Pond Sanitation & Cleaning) — each card links to a filtered view of the Products page.
- Featured Products carousel (6–8 bestsellers, real product images, name, one-line benefit, "View Details" button).
- Brand strip: two logos/banners for Care Chem Remedies and Almas Agrovet with a one-line description of each.
- Trust section: years in business, number of farmers served, authorized dealer badge.
- Call-to-action banner: phone number and WhatsApp click-to-chat button, sticky on mobile.

### 2. About Us
- Shop story — who you are, how long you've been supplying fishery products, why farmers trust you.
- Why you stock these two brands specifically (quality, local availability, technician support).
- Optional: photos of the physical shop/godown.

### 3. Products (Catalogue — main browsing page)
- Filter/sort bar: by Brand (Care Chem Remedies / Almas Agrovet), by the 6 parent Category Taxonomy filters (see taxonomy table below), by Price (only if you decide to display it — see pricing policy in Functional Requirements).
- Grid of product cards: real product photo, product name, brand tag, 1-line key benefit, "View Details" button.
- Search bar for product name.
- This page should support 25+ products without feeling cluttered — use pagination or "load more."

### 4. Product Detail (template — one instance per product, accessed from Products page)
Each product page must show:
- Large real product image (zoomable on tap/click), with 2–3 angle images if available.
- Product name and brand.
- "Key Benefits" — bullet list (e.g., "Removes toxic ammonia & H₂S from pond water," "Hardens prawn shell with bioavailable calcium").
- "Application / Dosage" — clear instructions (e.g., "Apply 3–5kg per 1000 sq m pond, water depth 1m"), formatted as a simple table or steps so it's scannable for a farmer in a hurry.
- "Best For" tags (e.g., Prawn Farming, Carp Farming, Pond Maintenance).
- Sticky "Contact to Buy" button — opens WhatsApp prefilled with "I want to buy [Product Name]" or shows phone number, no cart/checkout.
- "Related Products" strip at the bottom (same category or same brand).

### 5. Find Us
- Embedded Google Map pinned to the shop location.
- Full address, landmark description (helpful for rural/semi-urban navigation, e.g., "near [landmark]"), shop hours, best days/times to visit.
- Click-to-call and "Get Directions" buttons.
- Optional: a short note on serviceable area / delivery radius if you deliver to nearby villages.

### 6. Contact Us
- Contact form (Name, Phone, Product Interested In — dropdown, Message) that submits via email or a simple backend/Formspree-type service.
- Phone number, WhatsApp button, email (if any), shop address repeated.
- Optional FAQ accordion: "How do I know which product I need?", "Do you give application guidance?", "Can I get products delivered?"

### 7. Gallery / Why Choose Us *(optional 7th page — can be merged into About if you prefer 6 pages)*
- Photos of the shop, stocked products, maybe farmer testimonials or before/after pond conditions if you have them.
- Trust indicators: authorized dealer certificates, years of experience, technician support availability.

---

## PRODUCT DATA TO POPULATE (use as seed content — JSON/CSV structure below)

```json
[
  {
    "name": "Anta Care",
    "brand": "Care Chem Remedies",
    "category": "Digestive Aid",
    "benefits": ["Helps in digestion of food", "Prevents cutting off of prawn's antenna and helps regrowth"],
    "application": "Apply by mixing 2gm, 5gm, or 10gm with each kg of food.",
    "image": "REPLACE_WITH_REAL_PHOTO"
  },
  {
    "name": "Asco Care",
    "brand": "Care Chem Remedies",
    "category": "Immunity Booster",
    "benefits": ["Enhances immunity of prawns", "Helps increase prawn weight"],
    "application": "Apply 2-5 grams per kg of food, or consult a technician.",
    "image": "REPLACE_WITH_REAL_PHOTO"
  },
  {
    "name": "Bhalo Jall",
    "brand": "Care Chem Remedies",
    "category": "Water Conditioner",
    "benefits": ["Eliminates toxic ammonia, H2S, and CO2 from pond water/soil", "Controls excessive water bloom"],
    "application": "In a 1000 sq m pond (2m depth), apply by mixing 600-700g with water or sand.",
    "image": "REPLACE_WITH_REAL_PHOTO"
  },
  {
    "name": "Cal Care",
    "brand": "Care Chem Remedies",
    "category": "Mineral Supplement",
    "benefits": ["Provides beneficial calcium to prawns", "Hardens soft shell of prawns"],
    "application": "In a 1000 sq m pond (1m depth), mix with 1-2 liters of water and apply well.",
    "image": "REPLACE_WITH_REAL_PHOTO"
  },
  {
    "name": "CGMM",
    "brand": "Care Chem Remedies",
    "category": "Mineral Balance",
    "benefits": ["Maintains mineral salt balance in pond water", "Supports plankton formation and retention"],
    "application": "In a 1000 sq m pond (1m depth), mix 3-5kg with water, or consult a technician.",
    "image": "REPLACE_WITH_REAL_PHOTO"
  },
  {
    "name": "Curein Prawn",
    "brand": "Care Chem Remedies",
    "category": "Oxygenator",
    "benefits": ["Increases dissolved oxygen in water", "Maintains optimum pH level"],
    "application": "In a 1000 sq m pond (1m depth), mix 1-1.5kg with water, or consult a technician.",
    "image": "REPLACE_WITH_REAL_PHOTO"
  },
  {
    "name": "Cure In",
    "brand": "Care Chem Remedies",
    "category": "Disease / Wound Care",
    "benefits": ["Lowers death rate of small fish (fry)", "Heals wounds and supports healthy fry formation"],
    "application": "Use 4-6 kg per Bigha after analyzing pond water depth.",
    "image": "REPLACE_WITH_REAL_PHOTO"
  },
  {
    "name": "C-Vanna",
    "brand": "Care Chem Remedies",
    "category": "Growth Aid",
    "benefits": ["Supports growth of Bagda and Vannamei prawns via regular molting", "Increases enzyme activity in prawn body"],
    "application": "In a 1000 sq m pond (1m depth), apply 2-3kg with water.",
    "image": "REPLACE_WITH_REAL_PHOTO"
  },
  {
    "name": "Dolo Care",
    "brand": "Care Chem Remedies",
    "category": "Soil Treatment",
    "benefits": ["Removes acidity of soil and water", "Provides magnesium and calcium for fish/shrimp farming"],
    "application": "In a 1000 sq m pond (1m depth), mix 3-5kg with water, or consult a technician.",
    "image": "REPLACE_WITH_REAL_PHOTO"
  },
  {
    "name": "Gas-O-Cure Plus",
    "brand": "Care Chem Remedies",
    "category": "Pond Bottom Cleaner",
    "benefits": ["Improves pond environment, prevents water/soil pollution", "Cleans black soil at pond bottom, improves water quality"],
    "application": "In a 100 sq m pond (1m depth), mix 300-500g with sand.",
    "image": "REPLACE_WITH_REAL_PHOTO"
  },
  {
    "name": "Geolite",
    "brand": "Care Chem Remedies",
    "category": "Soil Purifier",
    "benefits": ["Overcomes excessive soil acidification and toxic gases in abandoned black soil", "Eases prawn molting"],
    "application": "In a 1000 sq m pond (1m depth), mix 3-5kg with sand, or consult a technician.",
    "image": "REPLACE_WITH_REAL_PHOTO"
  },
  {
    "name": "Gold Plus",
    "brand": "Care Chem Remedies",
    "category": "Stress Protection",
    "benefits": ["Protects prawns from loose-cell condition", "Protects prawns from climate change stress"],
    "application": "Mix 5-10ml well per kg of food, or consult a technician.",
    "image": "REPLACE_WITH_REAL_PHOTO"
  },
  {
    "name": "Super Gold",
    "brand": "Care Chem Remedies",
    "category": "Post-Molt Care",
    "benefits": ["Protects prawns from bending", "Protects prawns from stress after molting"],
    "application": "In a 1000 sq m pond (1m depth), mix 2-3kg with water, or consult a technician.",
    "image": "REPLACE_WITH_REAL_PHOTO"
  },
  {
    "name": "Kholosh",
    "brand": "Care Chem Remedies",
    "category": "Molting Aid",
    "benefits": ["Aids molting in Bagda and Vannamei (Galda) prawns", "Maintains optimum alkalinity and water hardness"],
    "application": "In a 1000 sq m pond (1m depth), mix 3-5kg with water, or consult a technician.",
    "image": "REPLACE_WITH_REAL_PHOTO"
  },
  {
    "name": "Min Care",
    "brand": "Care Chem Remedies",
    "category": "Digestive Aid",
    "benefits": ["Helps in digestion of food", "Prevents cutting off of prawn's antenna, helps regrowth"],
    "application": "Mix 2gm, 5gm, or 10gm per kg of food, or consult a technician.",
    "image": "REPLACE_WITH_REAL_PHOTO"
  },
  {
    "name": "New Gold",
    "brand": "Care Chem Remedies",
    "category": "Growth Booster",
    "benefits": ["Higher yields, bright colour, and fast growth"],
    "application": "In a 100 sq m pond (1m depth), mix 400-500g with sand.",
    "image": "REPLACE_WITH_REAL_PHOTO"
  },
  {
    "name": "Oxicare",
    "brand": "Care Chem Remedies",
    "category": "Emergency Oxygenator",
    "benefits": ["Rapidly increases dissolved oxygen", "Protects fish from floating/gasping at surface"],
    "application": "In a 100 sq m pond (1m depth), mix 400-500g with sand.",
    "image": "REPLACE_WITH_REAL_PHOTO"
  },
  {
    "name": "Grow Plus Fish Supplement",
    "brand": "Almas Agrovet",
    "category": "Growth Supplement",
    "benefits": ["All-natural nutrient blend", "Enhances fish growth and supports immune health"],
    "application": "Mix into feed per recommended dosage; consult shop for ratio by pond size.",
    "image": "REPLACE_WITH_REAL_PHOTO",
    "price": "₹600"
  },
  {
    "name": "Multi Vitamins & Trace Minerals Fish Feed",
    "brand": "Almas Agrovet",
    "category": "Fortified Feed",
    "benefits": ["Hygienically processed and packed", "High palatability and nutritional value"],
    "application": "Feed as primary or supplementary ration per pond stocking density.",
    "image": "REPLACE_WITH_REAL_PHOTO",
    "price": "₹126"
  },
  {
    "name": "Vita Gold Multi Vitamin & Trace Mineral Supplement",
    "brand": "Almas Agrovet",
    "category": "Premium Supplement",
    "benefits": ["Concentrated vitamin and trace mineral fortification for faster growth"],
    "application": "Mix with feed per recommended dosage; consult shop for exact ratio.",
    "image": "REPLACE_WITH_REAL_PHOTO",
    "price": "₹310"
  },
  {
    "name": "Cal-V Fish Supplement",
    "brand": "Almas Agrovet",
    "category": "Mineral / Omega Supplement",
    "benefits": ["Marine-source calcium and omega fatty acid blend", "Supports overall fish wellness and healthy growth"],
    "application": "Mix with feed per recommended dosage.",
    "image": "REPLACE_WITH_REAL_PHOTO"
  },
  {
    "name": "Toxi Killer Fish Supplement",
    "brand": "Almas Agrovet",
    "category": "Water Detoxifier",
    "benefits": ["Made with natural ingredients", "Promotes healthy aquatic environment, neutralizes pond toxins"],
    "application": "Apply per pond size; consult shop for dosage.",
    "image": "REPLACE_WITH_REAL_PHOTO"
  },
  {
    "name": "Yucca Fish Supplement",
    "brand": "Almas Agrovet",
    "category": "Water Quality",
    "benefits": ["Yucca-extract based formula supporting ammonia/water quality control"],
    "application": "Apply per pond size; consult shop for dosage.",
    "image": "REPLACE_WITH_REAL_PHOTO",
    "price": "₹999"
  },
  {
    "name": "Almos Al-Cure Fish Feed (1kg)",
    "brand": "Almas Agrovet",
    "category": "Medicated Feed",
    "benefits": ["Curative, disease-support feed formulation"],
    "application": "Feed as directed during disease/recovery periods.",
    "image": "REPLACE_WITH_REAL_PHOTO"
  },
  {
    "name": "Alcol Liquid Calcium Supplement",
    "brand": "Almas Agrovet",
    "category": "Liquid Mineral",
    "benefits": ["Liquid calcium for shell and skeletal health"],
    "application": "Mix with feed/water per recommended dosage.",
    "image": "REPLACE_WITH_REAL_PHOTO"
  },
  {
    "name": "R Sane Pond Sanitizer",
    "brand": "Almas Agrovet",
    "category": "Pond Hygiene",
    "benefits": ["Sanitizes pond water, supports clean aquatic environment"],
    "application": "Apply per pond size; consult shop for dosage.",
    "image": "REPLACE_WITH_REAL_PHOTO",
    "price": "₹800"
  },
  {
    "name": "Floating Fish Feed (3mm)",
    "brand": "Almas Agrovet",
    "category": "Staple Feed",
    "benefits": ["Standard floating pellet feed for daily feeding"],
    "application": "Feed per stocking density and growth stage.",
    "image": "REPLACE_WITH_REAL_PHOTO"
  }
]
```

**Important on images:** None of these products have publicly licensed photos I can hand you — the Care Chem Remedies image URLs exist on their own site and the Almas Agrovet listings are on third-party B2B marketplaces, so don't scrape and republish those directly. Since you'll be the authorized local seller, the right move is either (a) request official product photography from each brand for dealer/marketing use, or (b) photograph the actual physical stock in your shop — which also builds more trust with farmers since they see exactly what they're buying locally. Replace every `"image": "REPLACE_WITH_REAL_PHOTO"` with your own photo path once captured.

**Important on pack size:** Add a `"packSize"` field to every product (e.g., "500g," "1L," "5kg sack") once you have it — this matters more to a buying farmer than price does, and none of the public listings I pulled this data from reliably state it.

---

## CATEGORY TAXONOMY (use this 6-category parent filter — keep the granular `category` field from the JSON above as a sub-label shown only on the product detail page, not as a filter option)

The Home page's "Shop by Problem" cards and the Products page filter bar must use the *same* 6 parent categories below, mapped from the granular JSON categories:

| Parent Filter Category | Maps From (JSON `category` values) |
|---|---|
| Water Quality & Detox | Water Conditioner, Mineral Balance, Water Detoxifier, Water Quality, Soil Purifier, Soil Treatment |
| Oxygen & Aeration | Oxygenator, Emergency Oxygenator |
| Disease, Wound & Stress Care | Disease / Wound Care, Stress Protection, Post-Molt Care, Medicated Feed |
| Growth & Nutrition (Feed) | Digestive Aid, Immunity Booster, Growth Aid, Growth Booster, Growth Supplement, Fortified Feed, Premium Supplement, Mineral/Omega Supplement, Staple Feed |
| Mineral & Calcium Supplements | Mineral Supplement, Molting Aid, Liquid Mineral |
| Pond Sanitation & Cleaning | Pond Bottom Cleaner, Pond Hygiene |

This keeps the filter bar to 6 clean options instead of 28 micro-categories, while the detail page can still show the more specific original label for accuracy.

---

## FUNCTIONAL REQUIREMENTS
- No payment gateway, no cart — every "buy" action routes to WhatsApp/call/contact form.
- **Pricing policy:** Don't display fixed prices on product cards/pages. B2B distributor rates vary by quantity and change over time — showing a stale or wrong price is worse than showing none. Instead, every product should say "Contact for current price" next to the Buy button. If you want to keep some indicative pricing for the most common single-unit sizes, label it clearly as "Approx. retail price — confirm at time of order," never as a firm quote.
- **WhatsApp deep link format:** Use `https://wa.me/91XXXXXXXXXX?text=` followed by a URL-encoded message, e.g. for "Anta Care" the link should prefill: `I want to buy Anta Care (Care Chem Remedies). Please share price and availability.` Build this dynamically per product so every "Contact to Buy" button sends a different, specific message — much higher conversion than a generic "Contact Us" link.
- Fast load on low-end Android phones and patchy rural network — optimize images (WebP, lazy load, target under 150KB per product photo after compression).
- Bengali/English: don't attempt a full i18n toggle for v1 — that's a lot of translation work for one person to maintain. Instead, keep the site in English but make all key CTAs and the WhatsApp message templates bilingual (English + Bengali) — that gets 90% of the trust benefit for 10% of the effort.
- Mobile sticky bottom bar with Call + WhatsApp buttons across the whole site.
- Simple CMS-friendly structure (even just a well-organized JSON/data file) so new products can be added later without touching layout code.

## DESIGN DIRECTION (mobile-first, premium, glassmorphic)

Build this mobile-first, not "desktop-then-shrink" — design and code the 375–428px viewport first, then scale up to tablet/desktop. Most farmers will load this on a phone over a weak connection, so every design decision should default to clean and fast, never busy.

**Overall feel:** Clean, polished, simple-but-premium — think a well-funded agri-tech startup, not a typical clunky Indian B2B/dealer site. Plenty of white space, restrained color use, soft depth via glassmorphism rather than heavy shadows or gradients. The product itself (real photos, clear info) should always be the visual hero — the UI should feel like quality packaging around it, not compete with it.

**Color palette** (pick this over generic tech blue/green):
- Base: warm off-white / soft cream (`#FAF8F3` or similar) — not stark white, feels warmer and more premium than pure white.
- Primary: deep ocean teal (`#0F4C4C`–`#1B5E5E` range) — ties to water/aquaculture without looking like a generic "eco" green, and reads premium against the cream base.
- Accent: warm amber/gold (`#D9A441`–`#E8B84B` range) — used sparingly for CTAs, active states, and highlights only, so it pops instead of overwhelming.
- Neutral text: near-black charcoal (`#1A1A1A`) for body copy, never pure black — softer on the eyes, more premium.
- Avoid: bright primary blues, neon greens, gradients-as-default, drop shadows that look like Bootstrap defaults.

**Glassmorphism — where to use it (sparingly, with intent):**
- Sticky header/navbar: frosted glass effect (`backdrop-blur-lg`, semi-transparent background ~80% opacity, subtle 1px border in white/10% opacity) so it stays legible over hero imagery while scrolling.
- Featured product cards and the hamburger menu drawer: light glass panels with soft border and subtle shadow — not the whole page. Glassmorphism overused everywhere looks cheap; used on 2–3 key surfaces it looks premium.
- Mobile sticky bottom bar (Call/WhatsApp buttons): glass effect so it floats above content without feeling like a heavy opaque block.
- Do NOT apply glass effect to large background sections or body text areas — keep those on the solid cream base for readability and fast paint.

**Hamburger navigation (mobile):**
- Clean 3-line icon top-right, animates into an X on open (simple morph, not a gimmicky effect).
- Opens a full-height slide-in drawer from the right, glass panel background, large tappable nav links (Home, About, Products, Find Us, Contact), generous spacing between items for thumb use.
- Include the Call + WhatsApp buttons inside the drawer too, plus a small brand strip (both logos) near the bottom.
- Smooth slide/fade transition (Framer Motion, 200–300ms, ease-out) — snappy, not a slow theatrical animation.

**Animation — restrained, purposeful, not flashy:**
- Page/section entrances: subtle fade-up on scroll (Framer Motion `whileInView`, 20–30px translate, no bounce/elastic easing).
- Product cards: gentle scale (1.0 → 1.02) and shadow lift on hover/tap, nothing dramatic.
- Hero text: simple staggered fade-in on load, no typewriter effects or heavy parallax — those read as dated, not premium.
- Sticky CTA bar and hamburger drawer: the only "interactive motion" elements that should feel snappy; everything else should feel calm.
- Respect `prefers-reduced-motion` and keep total motion budget light — this is a utility site for farmers, not a portfolio showcase.

**Typography:**
- One clean sans-serif for everything (e.g., Inter, Manrope, or similar) — large, legible sizes (16px+ body, 18-20px+ for key info like dosage instructions), generous line-height.
- Clear hierarchy: bold confident headlines, but not oversized/shouty; let whitespace do the premium work rather than huge type.

**Components that should feel premium:**
- Product cards: rounded corners (not too rounded — 12–16px radius reads more premium than pill-shaped), real photo with subtle inset shadow, clean typographic hierarchy (name, brand tag as small pill, one-line benefit).
- Buttons: solid amber for primary CTA ("Contact to Buy," "Call Now"), outlined/ghost teal for secondary actions — consistent corner radius across all buttons and cards.
- Forms (Contact page): glass or soft-bordered input fields, clear focus states, large touch targets (min 44px height) for mobile.

**Accessibility & practicality (don't sacrifice these for polish):**
- Big tap targets throughout — assume some users are older or less tech-comfortable.
- High contrast between text and background even with the glass effects (test the frosted header against busy hero photos).
- Real photography over illustrations or stock icons wherever the product itself is the subject — glassmorphism and animation should frame the real photos, not replace them.

---

## SEO & LOCAL DISCOVERY (don't skip this — it's how farmers actually find you)

- Add `LocalBusiness` schema.org structured data (JSON-LD) on the Home and Find Us pages — name, address, phone, hours, geo-coordinates. This is what makes the shop eligible to show up properly in local Google searches and Maps.
- Add `Product` schema.org structured data on each product detail page (name, brand, description) — helps products surface in Google's rich results even without e-commerce pricing.
- Page titles and meta descriptions per page, written around real search terms a farmer would use ("fish pond medicine West Bengal," "prawn farming supplements Bardhaman," not generic SEO filler).
- Open Graph + Twitter Card meta tags with a real shop/hero image so links shared on WhatsApp/Facebook preview properly — this matters a lot for word-of-mouth in this audience.
- Generate and submit a sitemap.xml; register the site with Google Search Console and a Google Business Profile pointing to the Find Us page.
- Image alt text on every product photo (product name + brand) — also helps Google Images traffic, which is a real discovery channel for "what does X medicine look like" searches.

## TECHNICAL & DEPLOYMENT NOTES

- **Routing:** React Router for the 7 pages + dynamic product detail routes (`/products/:slug`).
- **Forms:** Use a lightweight form backend (Formspree, EmailJS, or similar) for the Contact page so there's no need to run/maintain a backend server for something this simple.
- **Hosting:** Deploy on Vercel — fast, free tier is sufficient for this traffic level, and it's the same platform you already deploy your other projects to, so the workflow will feel familiar.
- **Image handling:** Store compressed WebP images in the repo or an image CDN (Cloudinary/ImageKit free tier work well) rather than serving large raw photos — directly affects load time on rural mobile data.
- **Analytics:** Add a lightweight analytics tool (Plausible or Google Analytics) so you can see which products and pages farmers actually look at — useful for deciding what to stock more of or feature on Home.
- **Architecture:** Build reusable components (`ProductCard`, `ProductDetail`, `CategoryFilter`, `StickyContactBar`, `GlassNav`) rather than one-off page markup, and keep all product/brand content in a single typed data file (e.g. `products.ts`) so adding a new product later is a data edit, not a code change.

## BEFORE YOU HAND THIS TO A BUILDER — CONTENT CHECKLIST

This prompt has the product data, design direction, and page structure, but a few real-world details only you can provide. Gather these before (or during) the build so there are no placeholder gaps at launch:

- Shop's legal/trading name, full registered address, and a nearby landmark description for rural navigation.
- Phone number and a dedicated WhatsApp Business number (if different).
- Shop hours and best days/times to visit.
- Years in business / founding story for the About page.
- Authorized distributor proof for Care Chem Remedies (certificate, dealer ID, or official confirmation) to display as a trust badge.
- Confirmation of your formal status with Almas Agrovet before using "authorized" language for their products too.
- Real photos: shop front, interior/godown, and ideally every product on the shelf (phone photos are fine if well-lit and consistent background).
- Pack sizes and any prices you do want to show, per the pricing policy above.
- Google Maps pin / exact coordinates for the Find Us page embed.
