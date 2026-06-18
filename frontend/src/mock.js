// Mock data for Sunhome Group Ltd — Updated 2026

export const SITE = {
  name: "Sunhome Group Ltd",
  shortName: "Sunhome",
  tagline: "Auckland's Premier Stone Fabricator",
  since: 2008,
  phone: "09 265 0896",
  mobile: "021 800 551",
  email: "Sales@sunhome.co.nz",
  address: "1C Birmingham Road, Ōtara, Auckland 2013, New Zealand",
  shortAddress: "1C Birmingham Road, Ōtara, Auckland",
  hours: {
    showroom: "Mon – Fri  10:00am – 12:00pm (appointments available on request)",
    pickup: "Mon – Fri  10:00am – 1:00pm",
  },
  logo: "/assets/logo/sunhome-logo.png",
  rating: {
    google: 4.6,
    reviews: 30,
  },
};

// Build mailto URLs with pre-filled details
export function buildEnquiryMailto({ subject = "Benchtop Enquiry", colour = "", size = "", thickness = "", sink = "", notes = "" } = {}) {
  const lines = [
    "Hi Sunhome team,",
    "",
    "I'd like to enquire about a stone benchtop with the following details:",
    "",
    colour ? `• Colour / Stone: ${colour}` : null,
    size ? `• Size / Layout: ${size}` : null,
    thickness ? `• Thickness: ${thickness}` : null,
    sink ? `• Sink Model: ${sink}` : null,
    notes ? `• Notes: ${notes}` : null,
    "",
    "Please get back to me with a quote.",
    "",
    "Thanks,",
  ].filter(Boolean).join("\n");
  const body = encodeURIComponent(lines);
  const subj = encodeURIComponent(`[Website Enquiry] ${subject}`);
  return `mailto:${SITE.email}?subject=${subj}&body=${body}`;
}

// ===================================================================
// ✏️  ALL EDITABLE TEXT IS BELOW — change anything inside the quotes
//     Every visible sentence/headline/paragraph on the website lives
//     here. The website hot-reloads when you save this file.
// ===================================================================
export const TEXT = {

  // -------------------------------------------------------------
  // HOMEPAGE
  // -------------------------------------------------------------
  home: {
    // The small label above the "..." headline
    whoWeAreLabel:      "Who We Are",
    // The H2 introducing your company
    whoWeAreHeadline:   "Auckland's most trusted stone fabricator since 2008.",
    // The intro paragraph below — THIS IS YOUR COMPANY INTRO. Make it personal!
    whoWeAreParagraph:  "For more than 15 years, Sunhome Group Ltd has been supplying high quality stone benchtops to homes and businesses throughout Auckland. From family kitchens to large commercial projects, we combine functionality and aesthetics to deliver durable, beautiful results at an affordable price.",

    // The 3 stats next to the intro paragraph
    stats: [
      { number: "15+",  label: "Years in trade" },
      { number: "600+", label: "Homes per year" },
      { number: "3",    label: "Day installs"   },
    ],

    // Services section
    servicesLabel:      "What We Do",
    servicesHeadline:   "Custom stone solutions for every project.",

    // Why Sunhome section
    whyLabel:           "Why Sunhome",
    whyHeadline:        "Why choose Sunhome?",
    whyParagraph:       "Experience, quality workmanship and honest service have made us a trusted choice for many Auckland homeowners for over 15 years.",

    // Featured marbles section
    featuredLabel:      "Featured Range",
    featuredHeadline:   "Statement marbles, hand-picked.",
    featuredCta:        "View all colours",

    // Testimonials section
    reviewsLabel:       "Client Stories",
    reviewsHeadline:    "What our customers say about our service.",
    reviewsParagraph:   "We're proud of the relationships we've built and the projects we have completed across Auckland.",
    reviewsMoreCta:     "Read all reviews on Google",

    // Partner brand strip
    brandsHeadline:     "We work with leading engineered stone suppliers to offer a wide selection of colours, finishes and styles for every project.",
    brandsLabel:        "Partner Brands",

    // The big closing CTA at the bottom of the homepage
    ctaLabel:           "Start Your Project",
    ctaHeadline:        "Let's bring your project to life.",
    ctaParagraph:       "Visit our East Tamaki showroom or contact our sales team for a free, no-obligation quote.",
    ctaPrimary:         "Email Sales for a Quote",
    ctaSecondary:       "Contact Page",
    ctaTertiary:        "View Our Work",
  },

  // -------------------------------------------------------------
  // COLOUR SAMPLES PAGE
  // -------------------------------------------------------------
  colours: {
    label:              "Project Quartz",
    headline:           "Colour Samples",
    intro:              "Premium engineered quartz benchtops with low silica content and natural stone surfaces, crafted to bring style, durability and value to every space.",

    // The 4 small benefit cards on the right
    benefits: [
      { title: "Harder & Safer",     desc: "Engineered quartz — harder, stronger and safer than natural stone." },
      { title: "Easy to Maintain",   desc: "Simple wipe-down with warm soapy water. No sealing needed." },
      { title: "Wide Selection",     desc: "Hundreds of colours and finishes in stock and ready to fabricate." },
      { title: "Honest Pricing",     desc: "Pay only for what you use — the most competitive prices in Auckland." },
    ],

    // Full slabs section (further down the page)
    slabsLabel:         "In Stock",
    slabsHeadline:      "Full slab preview",
    slabsParagraph:     "See the full pattern, veining and movement of each stone before you decide.",

    brandStrip:         "We also supply the full Caesarstone, Silestone, Uniquartz, Trendstone and Y&J Stone colour ranges.",

    // Bottom CTA
    ctaHeadline:        "Visit the showroom to feel the stone.",
    ctaPrimary:         "Email Sales to Book",
    ctaSecondary:       "See Contact Info",
  },

  // -------------------------------------------------------------
  // GALLERY PAGE
  // -------------------------------------------------------------
  gallery: {
    label:              "Our Work",
    headline:           "Auckland stone benchtops crafted with precision.",
    intro:              "Waterfall ends, mitered joints, top-mount and under-mount sinks, and benchtops in thicknesses from 20mm to 60mm. Every project hand-finished in our Auckland workshop.",
  },

  // -------------------------------------------------------------
  // SINKS & EDGES PAGE
  // -------------------------------------------------------------
  sinks: {
    label:              "Stainless Steel Sinks · 2026 Pricing",
    headline:           "Sinks, edges & every fine detail.",
    intro:              "Handmade premium 1.2mm stainless steel sinks with 5-year warranty — single, one-and-a-half and double bowl options. All prices below exclude GST. Machined sink cut-outs handled in-house on our 5-axis CNC.",

    pricingLabel:       "Sink Models & Pricing",
    pricingHelper:      "Click 'Enquire' on any sink to open an email pre-filled with that model and your preferences.",
    pricingBadge:       "5-Year Warranty · NZ Stock",

    helpBoxEyebrow:     "Not sure which fits?",
    helpBoxTitle:       "Tell us your cabinet width — we'll match the right sink.",
    helpBoxButton:      "Email Sales for Sizing Help",

    mountStylesTitle:   "Sink Cut-Out Styles",
    edgesTitle:         "Edges & Joints",

    thicknessLabel:     "Thickness Options",
    thicknessHeadline:  "From subtle to architectural.",
    thicknessParagraph: "We stock and fabricate every common thickness. Most kitchens use 20mm or 30mm — mitered joints make any thickness look monolithic.",

    ctaLabel:           "Crafted On-Site",
    ctaHeadline:        "Tell us about your sink, and we'll match it perfectly.",
    ctaPrimary:         "Email Sales for a Quote",
    ctaSecondary:       "Contact Page",
  },

  // -------------------------------------------------------------
  // CONTACT PAGE
  // -------------------------------------------------------------
  contact: {
    label:              "Get In Touch",
    headline:           "Let's bring your project to life.",
    intro:              "Visit our Ōtara showroom, give us a call, or send a message — we usually reply the same business day.",
    primaryBtn:         "Email Sales@sunhome.co.nz",

    // Form headings
    formLabel:          "Request a Quote",
    formHeadline:       "Send us a message",
    formSuccessTitle:   "Thank you.",
    formSuccessBody:    "Your enquiry has been received. We'll respond to you shortly. For urgent matters, please call",
    formSuccessLink:    "Send another enquiry",
    formSubmit:         "Send Request",
    formRequired:       "* Required fields",
    formError:          "Please fill in all required fields.",

    // The 4 info cards on the left of the contact form
    info: {
      visitTitle:    "Visit the Showroom",
      visitExtra:    "(Behind the wine shop, entrance off East Tamaki Road, left-hand driveway of the liquor shop.)",
      callTitle:     "Call Us",
      emailTitle:    "Email Us",
      hoursTitle:    "Hours",
      hoursShowroom: "Showroom",
      hoursPickup:   "Pick Up",
    },
  },

  // -------------------------------------------------------------
  // FOOTER (shown at the bottom of every page)
  // -------------------------------------------------------------
  footer: {
    blurb:              "Auckland's trusted stone fabricator — premium engineered quartz and natural stone, crafted with precision since 2008.",
    establishedLabel:   "Est. 2008",
    exploreTitle:       "Explore",
    contactTitle:       "Get In Touch",
    hoursTitle:         "Showroom Hours",
    showroomLabel:      "Showroom",
    pickupLabel:        "Pick Up",
    bottomLine:         "Auckland · New Zealand",
  },
};


export const HERO_SLIDES = [
  {
    image: "/assets/colors/cal-kitchen.jpg",
    eyebrow: "Since 2008",
    title: "Premium stone benchtops for Auckland homes & businesses",
    subtitle: "Expertly crafted engineered quartz and natural stone surfaces, designed to be both functional and aesthetic to enhance kitchens, bathrooms and work spaces.",
  },
  {
    image: "/assets/colors/kitchen-1.jpg",
    eyebrow: "Residential & Commercial",
    title: "Leading Stone Fabricator Service in Auckland Areas",
    subtitle: "Sunhome Group Ltd has been established since 2008. We are proudly providing high quality stone benchtops to both residential and commercial clients. Our latest CNC and skilled workers provide the best quality product and service at a very affordable price.",
  },
  {
    image: "/assets/colors/kitchen-2.jpg",
    eyebrow: "Crafted to Last",
    title: "Stone benchtops crafted to last",
    subtitle: "From timeless striking Calacatta White to Diamond Black benchtops, we help Auckland homeowners create kitchens that will last for years to come.",
  },
];

export const SERVICES = [
  {
    num: "01",
    title: "Commercial Benchtops",
    desc: "Apartments, care homes, hospitality. We have delivered for 19 Rawene Road Birkenhead, Edgewater Care Home (Metlife Care) and many more.",
    image: "/assets/sunhome/cal-bar-back.jpg",
  },
  {
    num: "02",
    title: "Residential Benchtops",
    desc: "Trusted by 600+ Auckland homes each year since 2010. Kitchens, islands, splashbacks and waterfall ends.",
    image: "/assets/colors/cal-kitchen.jpg",
  },
  {
    num: "03",
    title: "Laundry & Vanity Tops",
    desc: "Plenty of premium off-cuts available at very competitive pricing — perfect for laundries and bathroom vanities.",
    image: "/assets/sunhome/pure-white-vanity.jpg",
  },
  {
    num: "04",
    title: "Furniture Tops",
    desc: "Hall, coffee and dining tables. Visit the factory to hand-pick off-cut slabs at up to 40% off retail.",
    image: "/assets/colors/kitchen-1.jpg",
  },
];

export const FEATURES = [
  { title: "Qualified Experts", desc: "Skilled stonemasons with 10+ years of hands-on experience." },
  { title: "Flexible Schedule", desc: "For urgent jobs, we can complete installation in as little as three days." },
  { title: "CNC Precision", desc: "5-axis CNC technology paired with master craftsmen for flawless results." },
  { title: "Best Price Guarantee", desc: "We guarantee the best price on the market for comparable material and finish." },
  { title: "Friendly Team", desc: "From quoting to installation — kind, professional and easy to work with." },
  { title: "Special Offers", desc: "Regular deals on stocked slabs, discontinued colours, off-cuts and vanities." },
];

// Real customer reviews — from Google + Trade Me
export const TESTIMONIALS = [
  {
    name: "Ora Emslie",
    source: "Google · Local Guide · 32 reviews",
    rating: 5,
    when: "2 years ago",
    quote:
      "The bench was exactly as described, fitted well, installers lovely skilled young men. We're very pleased that we used this company. Price was fair and reasonable. Easy payment. Would recommend.",
  },
  {
    name: "Margot Howard",
    source: "Google · Local Guide · 54 reviews",
    rating: 5,
    when: "2 years ago",
    quote:
      "Great quality workmanship and benchtop. Fast installation. Luke stayed in touch with us regularly during the process. Highly recommend. Very competitive prices. Thanks",
  },
  {
    name: "Naadyah Young",
    source: "Google · Local Guide · 7 reviews",
    rating: 5,
    when: "8 months ago",
    quote:
      "Luke and Libby were great to deal with – friendly, helpful and professional. There was a small miscommunication, but Luke resolved it quickly and without any hassle. The installation was spot on, the boys did an amazing job. Couldn't be happier with the result!",
  },
  {
    name: "wang yan",
    source: "Google · Local Guide · 37 reviews",
    rating: 5,
    when: "2 years ago",
    quote: "Very happy customer! Highly recommended!",
  },
  {
    name: "outkast13 (82★)",
    source: "Trade Me · March 2014",
    rating: 5,
    when: "Trade Me",
    quote:
      "Absolutely unbelievable! Great service and amazing price! We'd had quotes from 3 other companies — none could make a bench top for us due to an unusual shape and small timeframe (plus they would charge much more). Luke and his team were super efficient and very responsible. They are not afraid of any challenges and definitely can implement any task. Will recommend to anyone renovating their kitchens!",
  },
  {
    name: "phylburg (788★)",
    source: "Trade Me · Positive feedback",
    rating: 5,
    when: "Trade Me",
    quote:
      "I purchased a new kitchen bench top from this trader. It is FANTASTIC! I am very happy with it. The quality is excellent and the service is first class. Highly recommended trader. A+++",
  },
  {
    name: "bubba80 (1061★)",
    source: "Trade Me · Positive feedback",
    rating: 5,
    when: "Trade Me",
    quote:
      "WOW! What an absolutely awesome trader. Perfectly friendly contact and super quick deal. A perfect example of what buying and selling on Trade Me should be all about.",
  },
  {
    name: "slenta (143★)",
    source: "Trade Me · Positive feedback",
    rating: 5,
    when: "Trade Me",
    quote:
      "A+++ very happy with the granite top, great deal and looks beautiful! Will go back when I redo my kitchen. Luke was friendly and very fast finishing the vanity top, highly recommend.",
  },
];

export const BRANDS = [
  { name: "Caesarstone", logo: "/assets/brands/caesarstone.png" },
  { name: "Silestone", logo: "/assets/brands/silestone.png" },
  { name: "Uniquartz", logo: "/assets/brands/uniquartz.png" },
  { name: "Trendstone", logo: "/assets/brands/trendstone.png" },
];

// Updated colour ranges — using clearer photos from the user's 2026 collection
export const COLOR_RANGES = [
  {
    name: "Standard Range",
    blurb: "Timeless whites — perfect for clean, modern interiors.",
    colors: [
      { name: "White Ice", image: "/assets/sunhome/white-ice-swatch.jpg" },
      { name: "White Nougat", image: "/assets/sunhome/white-nougat-swatch.jpg" },
      { name: "White Diamond", image: "/assets/sunhome/white-diamond-swatch.jpg" },
    ],
  },
  {
    name: "Middle Range",
    blurb: "Subtle greys and warm stones with character.",
    colors: [
      { name: "Diamond Grey", image: "/assets/sunhome/diamond-grey-swatch.jpg" },
      { name: "Grey Stone", image: "/assets/sunhome/grey-stone-swatch.jpg" },
      { name: "Diamond Black", image: "/assets/sunhome/diamond-black-swatch.jpg" },
    ],
  },
  {
    name: "High Range",
    blurb: "Bold and luxurious.",
    colors: [
      { name: "Calacatta White", image: "/assets/colors/calacatta-white-square.jpg" },
      { name: "Calacatta Blanco", image: "/assets/colors/calacatta-blanco-square.jpg" },
      { name: "Calacatta Splendour White", image: "/assets/colors/calacatta-splendour-white-square.jpg" },
      { name: "Calacatta Gold Line", image: "/assets/colors/cala-gold-line-square.jpg" },
      { name: "Calacatta Golden", image: "/assets/colors/calacatta-golden-square.jpg" },
      { name: "Brittanicca", image: "/assets/colors/brittanicca-square.jpg" },
      { name: "Karrera White", image: "/assets/colors/karrera-white-square.jpg" },
      { name: "Phoenix", image: "/assets/colors/phoenix-square.jpg" },
      { name: "French Vanilla", image: "/assets/colors/french-vanilla-square.jpg" },
      { name: "Pure White", image: "/assets/colors/pure-white-square.jpg" },
    ],
  },
  {
    name: "Natural Granite",
    blurb: "Authentic natural stone — hard-wearing and unique to every slab.",
    colors: [
      { name: "Star Galaxy", image: "/assets/sunhome/star-galaxy.jpg" },
      { name: "Black Pearl", image: "/assets/sunhome/black-pearl-kitchen.jpg" },
      { name: "Blue Pearl", image: "/assets/sunhome/blue-pearl.jpg" },
      { name: "Jet Black", image: "/assets/sunhome/jet-black.jpg" },
      { name: "Tan Brown", image: "/assets/sunhome/tan-brown.jpg" },
      { name: "Steel Grey", image: "/assets/sunhome/steel-grey.jpg" },
    ],
  },
  {
    name: "On Sale",
    blurb: "End-of-line and stocked slabs — premium stone at exceptional prices.",
    colors: [
      { name: "Calacatta Gold", image: "/assets/colors/calacatta-gold-onsale-square.jpg" },
      { name: "Platinum Black", image: "/assets/colors/platinum-black.jpg" },
      { name: "Circular Table — from $300", image: "/assets/gallery/kitchen-4.jpg" },
      { name: "Circular Table — from $300", image: "/assets/gallery/kitchen-5.jpg" },
    ],
  },
];

// Full slabs — updated with new high-quality 2026 photos
export const FULL_SLABS = [
  { name: "Calacatta White", note: "20mm / 30mm Available", image: "/assets/colors/calacatta-white.jpg" },
  { name: "Calacatta Blanco", note: "20mm / 30mm Available", image: "/assets/colors/calacatta-blanco.jpg" },
  { name: "Calacatta Splendour White", note: "20mm / 30mm Available", image: "/assets/colors/calacatta-splendour-white.jpg" },
  { name: "Calacatta Gold Line", note: "30mm Available", image: "/assets/colors/cala-gold-line.jpg" },
  { name: "Calacatta Golden", note: "30mm Available", image: "/assets/colors/calacatta-golden.jpg" },
  { name: "Brittanicca", note: "30mm Available", image: "/assets/colors/brittanicca.jpg" },
  { name: "Karrera White", note: "30mm Available", image: "/assets/colors/karrera-white.jpg" },
  { name: "French Vanilla", note: "20mm / 30mm Available", image: "/assets/colors/french-vanilla.jpg" },
  { name: "Pure White", note: "20mm / 30mm Available", image: "/assets/colors/pure-white.jpg" },
  { name: "White Standard Range", note: "20mm / 30mm Available", image: "/assets/colors/white-standard.jpg" },
];

// Off-cut / Clearance section was removed per request — keeping the array
// commented placeholder in case it's wanted back later.
export const OFFCUTS = [];

export const GALLERY = [
  // ============ KITCHENS (5) ============
  { src: "/assets/gallery/kitchen-cal-white-1.jpg", caption: "Calacatta White Kitchen", category: "Kitchens" },
  { src: "/assets/gallery/kitchen-modern.jpg",      caption: "Modern Kitchen Install", category: "Kitchens" },
  { src: "/assets/gallery/kitchen-2.jpg",           caption: "Kitchen Renovation",    category: "Kitchens" },
  { src: "/assets/gallery/kitchen-3.jpg",           caption: "Island Bench Install",  category: "Kitchens" },
  { src: "/assets/gallery/kitchen-classic.jpg",     caption: "Classic Kitchen",       category: "Kitchens" },

  // ============ JOINTS (6) ============
  { src: "/assets/gallery/marble-miter.jpg",         caption: "French Vanilla Mitered Joint", category: "Joints" },
  { src: "/assets/gallery/cal-miter.jpg",            caption: "Calacatta White Mitered Joint", category: "Joints" },
  { src: "/assets/gallery/diamond-white-miter.jpg",  caption: "Diamond White Mitered Joint", category: "Joints" },
  { src: "/assets/gallery/black-pearl-miter.jpg",    caption: "Black Pearl Mitered Joint", category: "Joints" },
  { src: "/assets/gallery/caesarstone-snow-miter.jpg", caption: "Caesarstone Snow 60mm Miter", category: "Joints" },
  { src: "/assets/sunhome/cal-60mm-miter.jpg", caption: "Calacatta 60mm Mitered Joint", category: "Joints" },

  // ============ SINKS (4) ============
  { src: "/assets/sinks/undermount-french-vanilla.jpg", caption: "French Vanilla Under-Mount Sink", category: "Sinks" },
  { src: "/assets/sunhome/sink-topmount.jpg", caption: "Black Pearl Top-Mount Sink", category: "Sinks" },
  { src: "/assets/sunhome/sink-um-blackpearl.jpg", caption: "Black Pearl Custom Cut-Out Sink", category: "Sinks" },
  { src: "/assets/sunhome/white-nougat-detail.jpg", caption: "White Nougat Sink Detail", category: "Sinks" },

  // ============ VANITY & DETAIL (5) ============
  { src: "/assets/gallery/laundry-1.jpg",            caption: "Laundry Top",          category: "Vanity" },
  { src: "/assets/gallery/laundry-ice.jpg",          caption: "White Ice Laundry Top", category: "Vanity" },
  { src: "/assets/sunhome/pure-white-vanity.jpg", caption: "Pure White Vanity Top", category: "Vanity" },
  { src: "/assets/gallery/white-ice-20mm.jpg",       caption: "White Ice 20mm Detail", category: "Detail" },
  { src: "/assets/gallery/diamond-white-1.jpg",      caption: "Diamond White Detail",  category: "Detail" },
  { src: "/assets/sunhome/pure-white-cal-detail.jpg", caption: "Pure White & Calacatta Detail", category: "Detail" },
  { src: "/assets/sunhome/cal-30mm-detail.jpg", caption: "Calacatta White 30mm Detail", category: "Detail" },

  // ============ CAESARSTONE (5) ============
  { src: "/assets/gallery/caesarstone-nuvo-1.jpg",     caption: "Caesarstone Calacatta Nuvo", category: "Caesarstone" },
  { src: "/assets/gallery/caesarstone-nuvo-2.jpg",     caption: "Caesarstone Calacatta Nuvo", category: "Caesarstone" },
  { src: "/assets/gallery/caesarstone-piatra-grey.jpg", caption: "Caesarstone Piatra Grey",  category: "Caesarstone" },
  { src: "/assets/gallery/caesarstone-snow-miter.jpg", caption: "Caesarstone Snow Mitered",  category: "Caesarstone" },
  { src: "/assets/gallery/caesarstone-raw-concrete.jpg", caption: "Caesarstone Raw Concrete", category: "Caesarstone" },

  // ============ GRANITE (4) ============
  { src: "/assets/sunhome/star-galaxy.jpg", caption: "Star Galaxy Granite", category: "Granite" },
  { src: "/assets/sunhome/blue-pearl.jpg",  caption: "Blue Pearl Granite",   category: "Granite" },
  { src: "/assets/sunhome/tan-brown.jpg",   caption: "Tan Brown Granite",    category: "Granite" },
  { src: "/assets/sunhome/steel-grey.jpg",    caption: "Steel Grey Granite",   category: "Granite" },

  // ============ COMMERCIAL (3) ============
  { src: "/assets/gallery/commercial-shop.jpg",        caption: "Newmarket Shop Install",     category: "Commercial" },
  { src: "/assets/gallery/commercial-restaurant.jpg",  caption: "Restaurant Install",         category: "Commercial" },
  { src: "/assets/sunhome/cal-bar-back.jpg", caption: "Calacatta Bar Back", category: "Commercial" },

  // ============ FACTORY (5) ============
  { src: "/assets/colors/showroom-1.jpg", caption: "Factory Showroom Floor", category: "Factory" },
  { src: "/assets/colors/showroom-3.jpg", caption: "Workshop View", category: "Factory" },
  { src: "/assets/colors/showroom-4.jpg", caption: "Inside the Workshop", category: "Factory" },
  { src: "/assets/gallery/kitchen-1.jpg", caption: "Factory Full Slab Preview", category: "Factory" },
  { src: "/assets/sunhome/cnc-machine.jpg", caption: "5-Axis CNC Machine", category: "Factory" },
];

// SINKS — Updated 2026 pricing (S400R80 and D350-350R80 removed)
export const SINKS = [
  {
    model: "S340",
    style: "Single Bowl",
    price: "$120",
    priceNote: "+ GST",
    blackOption: "+$30 for Black finish",
    overall: "380mm × 440mm",
    bowl: "340mm × 400mm",
    depth: "200mm",
    cabinet: "420mm cabinet",
    material: "1.2mm Stainless Steel",
    install: "Under Mount & Top Mount",
    warranty: "5 years",
    image: "/assets/sunhome/sink-s340.jpg",
  },
  {
    model: "S400",
    style: "Single Bowl",
    price: "$130",
    priceNote: "+ GST",
    blackOption: "+$30 for Black finish",
    overall: "440mm × 440mm",
    bowl: "400mm × 400mm",
    depth: "200mm",
    cabinet: "500mm cabinet",
    material: "1.2mm Stainless Steel",
    install: "Under Mount & Top Mount",
    warranty: "5 years",
    image: "/assets/sunhome/sink-s400.jpg",
  },
  {
    model: "S450",
    style: "Single Bowl",
    price: "$140",
    priceNote: "+ GST",
    blackOption: null,
    overall: "490mm × 440mm",
    bowl: "450mm × 400mm",
    depth: "200mm",
    cabinet: "550mm cabinet",
    material: "1.2mm Stainless Steel",
    install: "Under Mount & Top Mount",
    warranty: "5 years",
    image: "/assets/sunhome/sink-s400.jpg",
    isNew: true,
  },
  {
    model: "S500",
    style: "Single Bowl",
    price: "$150",
    priceNote: "+ GST",
    blackOption: "+$30 for Black finish",
    overall: "540mm × 440mm",
    bowl: "500mm × 400mm",
    depth: "200mm",
    cabinet: "600mm cabinet",
    material: "1.2mm Stainless Steel",
    install: "Under Mount & Top Mount",
    warranty: "5 years",
    image: "/assets/sunhome/sink-s500.jpg",
  },
  {
    model: "S600",
    style: "Single Bowl (XL)",
    price: "$180",
    priceNote: "+ GST",
    blackOption: null,
    overall: "640mm × 440mm",
    bowl: "600mm × 400mm",
    depth: "200mm",
    cabinet: "700mm cabinet",
    material: "1.2mm Stainless Steel",
    install: "Under Mount & Top Mount",
    warranty: "5 years",
    image: "/assets/sunhome/sink-s500.jpg",
    isNew: true,
  },
  {
    model: "D400+200",
    style: "One and Half Bowl",
    price: "$250",
    priceNote: "+ GST",
    blackOption: null,
    overall: "665mm × 440mm",
    bowl: "400×400mm + 200×400mm",
    depth: "220mm",
    cabinet: "750mm cabinet",
    material: "1.2mm Stainless Steel",
    install: "Under Mount & Top Mount",
    warranty: "5 years",
    note: "Big bowl can be Right / Left hand side",
    image: "/assets/sunhome/sink-d400-200.jpg",
  },
  {
    model: "D340+340",
    style: "Double Bowl",
    price: "$290",
    priceNote: "+ GST",
    blackOption: null,
    overall: "750mm × 440mm",
    bowl: "340×400mm + 340×400mm",
    depth: "220mm",
    cabinet: "800mm cabinet",
    material: "1.2mm Stainless Steel",
    install: "Under Mount & Top Mount",
    warranty: "5 years",
    image: "/assets/sunhome/sink-d350-350.jpg",
  },
];

export const SINK_TYPES = [
  {
    title: "Under-Mount Sink",
    desc: "Mounted beneath the benchtop for a clean, seamless surface. Easy wipe-down with no rim to trap crumbs.",
    image: "/assets/sinks/undermount-french-vanilla.jpg",
    pros: ["Seamless edge profile", "Easier cleaning", "Modern minimalist look"],
  },
  {
    title: "Top-Mount Sink",
    desc: "Sits on top of the benchtop with a visible rim. Practical, budget-friendly and works with any thickness.",
    image: "/assets/sunhome/sink-topmount.jpg",
    pros: ["Simple installation", "Budget friendly", "Suits all stone thicknesses"],
  },
];

export const THICKNESSES = [
  { mm: "20mm", label: "Standard", note: "Designed for kitchen benchtops and vanities.", popular: true },
  { mm: "30mm", label: "Premium",  note: "Solid, substantial feel with visible edge depth.", popular: true },
  { mm: "40mm", label: "Bold",     note: "Statement edge — pairs beautifully with mitered waterfall ends." },
  { mm: "50mm", label: "Custom",   note: "For dramatic islands and feature tables." },
  { mm: "60mm", label: "Architectural", note: "Maximum visual impact, ideal for commercial spaces." },
];
