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
    showroom: "Mon – Fri  10:00am – 12:00pm",
    pickup: "Mon – Fri  10:00am – 12:00pm",
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

export const HERO_SLIDES = [
  {
    image: "/assets/colors/cal-kitchen.jpg",
    eyebrow: "Since 2008",
    title: "Crafting Stone, Defining Spaces",
    subtitle: "Premium engineered quartz and natural stone benchtops for Auckland homes and businesses.",
  },
  {
    image: "/assets/colors/kitchen-1.jpg",
    eyebrow: "Residential & Commercial",
    title: "Calacatta. Carrara. Character.",
    subtitle: "From subtle whites to bold veining — the right stone for every kitchen.",
  },
  {
    image: "/assets/colors/kitchen-2.jpg",
    eyebrow: "15+ Years Experience",
    title: "Precision, Powered by CNC.",
    subtitle: "Skilled stonemasons and 5-axis CNC technology — every edge, every joint, perfect.",
  },
];

export const SERVICES = [
  {
    num: "01",
    title: "Commercial Benchtops",
    desc: "Apartments, care homes, hospitality. We have delivered for 19 Rawene Road Birkenhead, Edgewater Care Home (Metlife Care) and many more.",
    image: "https://www.sunhome.co.nz/wp-content/uploads/2023/01/14-Calacatta-White-Bar-Back-2-1024x768.jpg",
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
    image: "https://www.sunhome.co.nz/wp-content/uploads/2023/01/15-Pure-White-Customised-vanity-top-1.jpg",
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
  { name: "Caesarstone", logo: "https://www.sunhome.co.nz/wp-content/uploads/2023/01/Caesarstone.png" },
  { name: "Silestone", logo: "https://www.sunhome.co.nz/wp-content/uploads/2023/01/Silestone.png" },
  { name: "Uniquartz", logo: "https://www.sunhome.co.nz/wp-content/uploads/2023/01/Uniquartz.png" },
  { name: "Trendstone", logo: "https://www.sunhome.co.nz/wp-content/uploads/2023/01/trendstone.png" },
  { name: "Y&J Stone", logo: "https://www.sunhome.co.nz/wp-content/uploads/2024/04/FireShot-Capture-045-Home-Y-J-Stone%C2%AE-NZ-Ltd-yjstone.co_.nz_.png" },
];

// Updated colour ranges — using clearer photos from the user's 2026 collection
export const COLOR_RANGES = [
  {
    name: "Standard Range",
    blurb: "Timeless whites — perfect for clean, modern interiors.",
    colors: [
      { name: "White Ice", image: "https://www.sunhome.co.nz/wp-content/uploads/2023/01/White-Ice-20mm-Available-rotated.jpg" },
      { name: "White Nougat", image: "https://www.sunhome.co.nz/wp-content/uploads/2023/01/White-Nougat-20mm-Available-rotated.jpg" },
      { name: "White Diamond", image: "https://www.sunhome.co.nz/wp-content/uploads/2023/01/White-Diamond-20mm-Available-rotated.jpg" },
    ],
  },
  {
    name: "Middle Range",
    blurb: "Subtle greys and warm stones with character.",
    colors: [
      { name: "Diamond Grey", image: "https://www.sunhome.co.nz/wp-content/uploads/2023/01/Diamond-Grey-rotated.jpg" },
      { name: "Grey Stone", image: "https://www.sunhome.co.nz/wp-content/uploads/2023/01/Grey-Stone-20mm-Available-rotated.jpg" },
      { name: "Diamond Black", image: "https://www.sunhome.co.nz/wp-content/uploads/2023/01/Diamond-Black-rotated.jpg" },
    ],
  },
  {
    name: "High Range",
    blurb: "Statement marbles — bold veining and luxurious finishes.",
    colors: [
      { name: "Calacatta White", image: "/assets/colors/calacatta-white-square.jpg" },
      { name: "Calacatta Blanco", image: "/assets/colors/calacatta-blanco-square.jpg" },
      { name: "Calacatta Splendour White", image: "/assets/colors/calacatta-splendour-white-square.jpg" },
      { name: "Calacatta Golden", image: "/assets/colors/calacatta-golden-square.jpg" },
      { name: "Cala Gold Line", image: "/assets/colors/cala-gold-line-square.jpg" },
      { name: "Brittanicca", image: "/assets/colors/brittanicca-square.jpg" },
      { name: "Karrera White", image: "/assets/colors/karrera-white-square.jpg" },
      { name: "Phoenix", image: "/assets/colors/phoenix-square.jpg" },
      { name: "French Vanilla", image: "https://www.sunhome.co.nz/wp-content/uploads/2023/01/French-Vanilla-rotated.jpg" },
      { name: "Pure White", image: "/assets/colors/pure-white-square.jpg" },
    ],
  },
  {
    name: "Natural Granite",
    blurb: "Authentic natural stone — hard-wearing and unique to every slab.",
    colors: [
      { name: "Star Galaxy", image: "https://www.sunhome.co.nz/wp-content/uploads/2023/01/Star-galaxy-scaled.jpg" },
      { name: "Black Pearl", image: "https://www.sunhome.co.nz/wp-content/uploads/2023/01/11-andy-home-1-scaled.jpg" },
      { name: "Blue Pearl", image: "https://www.sunhome.co.nz/wp-content/uploads/2023/01/Blue-Pearl-scaled.jpg" },
      { name: "Jet Black", image: "https://www.sunhome.co.nz/wp-content/uploads/2023/01/Jet-black-um-1.jpg" },
      { name: "Tan Brown", image: "https://www.sunhome.co.nz/wp-content/uploads/2023/01/tan-brown-scaled.jpg" },
      { name: "Steel Grey", image: "https://www.sunhome.co.nz/wp-content/uploads/2023/01/front1-1-scaled.jpg" },
    ],
  },
  {
    name: "On Sale",
    blurb: "End-of-line and stocked slabs — premium stone at exceptional prices.",
    colors: [
      { name: "Platinum Black", image: "/assets/colors/platinum-black.jpg" },
      { name: "Dark Stone", image: "/assets/colors/dark-stone.jpg" },
    ],
  },
];

// Full slabs — White Pearl removed (no stock), refreshed with clearer 2026 images
export const FULL_SLABS = [
  { name: "Calacatta White", note: "20mm / 30mm Available", image: "/assets/colors/calacatta-white.jpg" },
  { name: "Calacatta Blanco", note: "20mm / 30mm Available", image: "/assets/colors/calacatta-blanco.jpg" },
  { name: "Calacatta Splendour White", note: "20mm / 30mm Available", image: "/assets/colors/calacatta-splendour-white.jpg" },
  { name: "Calacatta Gold", note: "30mm On Sale", image: "/assets/colors/calacatta-golden.jpg" },
  { name: "Brittanicca", note: "30mm Available", image: "/assets/colors/brittanicca.jpg" },
  { name: "Karrera White", note: "30mm Available", image: "/assets/colors/karrera-white.jpg" },
  { name: "Pure White", note: "20mm / 30mm Available", image: "/assets/colors/pure-white.jpg" },
  { name: "White Standard Range", note: "20mm / 30mm Available", image: "/assets/colors/white-standard.jpg" },
];

export const GALLERY = [
  // Kitchens / Installs
  { src: "/assets/colors/cal-kitchen.jpg", caption: "Calacatta White Kitchen", category: "Kitchens" },
  { src: "/assets/colors/kitchen-1.jpg", caption: "Modern Kitchen Install", category: "Kitchens" },
  { src: "/assets/colors/kitchen-2.jpg", caption: "Premium Bench Install", category: "Kitchens" },
  { src: "https://www.sunhome.co.nz/wp-content/uploads/2023/01/Calacatta-white-2-1-1024x768.jpeg", caption: "Calacatta White Kitchen", category: "Kitchens" },
  { src: "https://www.sunhome.co.nz/wp-content/uploads/2023/01/Calacatta-White-1-2-1024x768.jpeg", caption: "Calacatta White Island", category: "Kitchens" },
  { src: "https://www.sunhome.co.nz/wp-content/uploads/2023/01/calacatta-White-1024x684.jpg", caption: "Calacatta White Benchtop", category: "Kitchens" },
  { src: "https://www.sunhome.co.nz/wp-content/uploads/2023/01/14-Calacatta-White-Bar-Back-2-1024x768.jpg", caption: "Calacatta White Bar Back", category: "Kitchens" },
  { src: "https://www.sunhome.co.nz/wp-content/uploads/2023/01/Brittanicca-3-1024x768.jpg", caption: "Brittanicca Island", category: "Kitchens" },
  { src: "https://www.sunhome.co.nz/wp-content/uploads/2023/01/IMG-122407-27-23-46-14-1024x768.jpg", caption: "Karrera White Kitchen", category: "Kitchens" },
  { src: "https://www.sunhome.co.nz/wp-content/uploads/2023/01/19-White-Ice-1.jpg", caption: "White Ice Kitchen", category: "Kitchens" },
  { src: "https://www.sunhome.co.nz/wp-content/uploads/2023/01/16-Pure-White-scaled.jpg", caption: "Pure White Kitchen", category: "Kitchens" },
  { src: "https://www.sunhome.co.nz/wp-content/uploads/2023/01/18-White-Diamond-3-scaled.jpg", caption: "Diamond White Kitchen", category: "Kitchens" },
  { src: "https://www.sunhome.co.nz/wp-content/uploads/2023/01/11-andy-home-1-scaled.jpg", caption: "Black Pearl Kitchen", category: "Kitchens" },

  // Joints / Edges
  { src: "/assets/colors/miter-joint.jpg", caption: "Mitered Waterfall End", category: "Joints" },
  { src: "https://www.sunhome.co.nz/wp-content/uploads/2023/01/1-Calacatta-White-60mm-Miter-Joint-1-1024x768.jpg", caption: "Calacatta 60mm Miter", category: "Joints" },
  { src: "https://www.sunhome.co.nz/wp-content/uploads/2023/01/YJ-40mm-Miter-joint-water-fall-ends-1024x768.jpg", caption: "YJ 40mm Miter Joint", category: "Joints" },
  { src: "https://www.sunhome.co.nz/wp-content/uploads/2023/01/Calacatta-White-30mm-Miter-Joint-1.jpg", caption: "Calacatta 30mm Miter", category: "Joints" },
  { src: "https://www.sunhome.co.nz/wp-content/uploads/2023/01/Caesarstone-60mm-Miter-Joint-Water-fall-end-768x1024.jpg", caption: "Caesarstone 60mm Miter", category: "Joints" },
  { src: "https://www.sunhome.co.nz/wp-content/uploads/2023/01/8-Black-Pearl-Miter-Joint-1-scaled.jpg", caption: "Black Pearl Miter", category: "Joints" },

  // Sinks
  { src: "https://www.sunhome.co.nz/wp-content/uploads/2023/01/27-Black-Pearl-Non-Rectangle-UM-sink-cut-out-scaled.jpg", caption: "Black Pearl Under-Mount Sink", category: "Sinks" },
  { src: "https://www.sunhome.co.nz/wp-content/uploads/2023/01/28-Black-Pearl-Top-Mount-sink-1.jpg", caption: "Black Pearl Top-Mount Sink", category: "Sinks" },
  { src: "https://www.sunhome.co.nz/wp-content/uploads/2023/01/33-White-Diamond-UM-sink-1-scaled.jpg", caption: "Diamond White Under-Mount Sink", category: "Sinks" },

  // Vanity / details
  { src: "https://www.sunhome.co.nz/wp-content/uploads/2023/01/15-Pure-White-Customised-vanity-top-1.jpg", caption: "Pure White Vanity", category: "Vanity" },
  { src: "https://www.sunhome.co.nz/wp-content/uploads/2023/01/13-Pure-White-and-Calacatta-White-2-755x1024.jpg", caption: "Pure White & Calacatta", category: "Detail" },
  { src: "https://www.sunhome.co.nz/wp-content/uploads/2023/01/12-Calacatta-White-30mm-1.jpg", caption: "Calacatta White 30mm", category: "Detail" },

  // Caesarstone
  { src: "https://www.sunhome.co.nz/wp-content/uploads/2023/01/IMG-0968-1024x768.jpg", caption: "Caesarstone Raw Concrete", category: "Caesarstone" },
  { src: "https://www.sunhome.co.nz/wp-content/uploads/2023/01/Calacatta-Nuvo-2.jpeg", caption: "Caesarstone Calacatta Nuvo", category: "Caesarstone" },

  // Granite
  { src: "https://www.sunhome.co.nz/wp-content/uploads/2023/01/Star-galaxy-scaled.jpg", caption: "Star Galaxy", category: "Granite" },
  { src: "https://www.sunhome.co.nz/wp-content/uploads/2023/01/Blue-Pearl-scaled.jpg", caption: "Blue Pearl", category: "Granite" },
  { src: "https://www.sunhome.co.nz/wp-content/uploads/2023/01/tan-brown-scaled.jpg", caption: "Tan Brown", category: "Granite" },
  { src: "https://www.sunhome.co.nz/wp-content/uploads/2023/01/front1-1-scaled.jpg", caption: "Steel Grey", category: "Granite" },
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
    image: "https://www.sunhome.co.nz/wp-content/uploads/2023/01/S340.jpg",
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
    image: "https://www.sunhome.co.nz/wp-content/uploads/2023/01/S400.jpg",
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
    image: "https://www.sunhome.co.nz/wp-content/uploads/2023/01/S400.jpg",
    isNew: true,
  },
  {
    model: "S500",
    style: "Single Bowl",
    price: "$150",
    priceNote: "+ GST",
    blackOption: null,
    overall: "540mm × 440mm",
    bowl: "500mm × 400mm",
    depth: "200mm",
    cabinet: "600mm cabinet",
    material: "1.2mm Stainless Steel",
    install: "Under Mount & Top Mount",
    warranty: "5 years",
    image: "https://www.sunhome.co.nz/wp-content/uploads/2023/01/S500.jpg",
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
    image: "https://www.sunhome.co.nz/wp-content/uploads/2023/01/S500.jpg",
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
    image: "https://www.sunhome.co.nz/wp-content/uploads/2023/01/D400-200.jpg",
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
    image: "https://www.sunhome.co.nz/wp-content/uploads/2023/01/D350-350.jpg",
  },
];

export const SINK_TYPES = [
  {
    title: "Under-Mount Sink",
    desc: "Mounted beneath the benchtop for a clean, seamless surface. Easy wipe-down with no rim to trap crumbs.",
    image: "https://www.sunhome.co.nz/wp-content/uploads/2023/01/27-Black-Pearl-Non-Rectangle-UM-sink-cut-out-scaled.jpg",
    pros: ["Seamless edge profile", "Easier cleaning", "Modern minimalist look"],
  },
  {
    title: "Top-Mount Sink",
    desc: "Sits on top of the benchtop with a visible rim. Practical, budget-friendly and works with any thickness.",
    image: "https://www.sunhome.co.nz/wp-content/uploads/2023/01/28-Black-Pearl-Top-Mount-sink-1.jpg",
    pros: ["Simple installation", "Budget friendly", "Suits all stone thicknesses"],
  },
];

export const THICKNESSES = [
  { mm: "20mm", label: "Standard", note: "Most popular for kitchens and vanities." },
  { mm: "30mm", label: "Premium", note: "Solid, substantial feel with visible edge depth." },
  { mm: "40mm", label: "Bold", note: "Statement edge — pairs beautifully with mitered waterfall ends." },
  { mm: "50mm", label: "Custom", note: "For dramatic islands and feature tables." },
  { mm: "60mm", label: "Architectural", note: "Maximum visual impact, ideal for commercial spaces." },
];
