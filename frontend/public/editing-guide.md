# 📝 Sunhome Website — Complete Editing Guide

> **Three ways to edit your website (pick what you're comfortable with):**

---

## 🟢 Way 1 — Just message me (EASIEST, RECOMMENDED)

Open the chat where you're talking to me right now, and tell me what to change. Examples that all work:

- *"Change the homepage headline to 'Crafting Beautiful Kitchens, Since 2008'."*
- *"Update S400 price to $135 + GST."*
- *"Swap the photo for Calacatta White with this one [paste URL or upload image]."*
- *"Add a new review by John Smith saying '...' with 5 stars."*
- *"Change the showroom hours to 9:00am – 1:00pm."*
- *"Add a new colour called 'Carrara Silver' to the High Range."*
- *"Make the hero subtitle warmer / more personal — try rewriting it."*

I'll do it in seconds. **This is what 99% of website owners do.** You don't need to know any code.

---

## 🟡 Way 2 — Edit the files yourself in Emergent

In the Emergent platform (the same place you're seeing the preview):

1. **Look for the "Code" or `</>` button** in the toolbar — usually top-right of the preview pane or in a left-side panel.
2. That opens a **file browser** showing every file in your project.
3. Navigate to **`/app/frontend/src/mock.js`** — this file contains 95% of all editable text on the site.
4. Click any line, edit it like a Google Doc, and **save (Cmd/Ctrl + S)**.
5. The website reloads automatically. Refresh your browser to see the change.

**If you mess up:** Emergent keeps a version history — you can roll back from the preview pane menu.

---

## 🔵 Way 3 — Push to GitHub, edit on GitHub

When you decide to deploy:

1. Click **GitHub** in the Emergent menu and connect your account → it creates a repo with all your code.
2. From then on you can edit files at **github.com/your-username/sunhome-site** in your browser by clicking any file and pressing the pencil icon.
3. Saving on GitHub triggers an auto-deploy back to your live site.

---

# 📂 What's in `mock.js` — Everything You Can Edit

The file lives at `/app/frontend/src/mock.js`. Open it and you'll see sections like this:

```js
export const SITE = {
  name: "Sunhome Group Ltd",
  ...
};
```

Each `export const ...` block controls **one chunk of the website**. Here's the full map:

---

## 1️⃣ `SITE` — Your business details

```js
export const SITE = {
  name:         "Sunhome Group Ltd",        // Brand name (footer, page titles)
  shortName:    "Sunhome",                  // Short version
  tagline:      "Auckland's Premier Stone Fabricator",
  since:        2008,                       // Founding year
  phone:        "09 265 0896",              // Landline
  mobile:       "021 800 551",              // Mobile
  email:        "Sales@sunhome.co.nz",      // Where enquire emails go
  address:      "1C Birmingham Road, Ōtara, Auckland 2013, New Zealand",
  hours: {
    showroom:   "Mon – Fri  10:00am – 12:00pm",
    pickup:     "Mon – Fri  10:00am – 12:00pm",
  },
  logo:         "/assets/logo/sunhome-logo.png",   // Logo path
  rating: {
    google:   4.6,    // Star rating shown in banner
    reviews:  30,     // Number of reviews
  },
};
```

**Where it shows:** Navbar, footer, contact page, structured data for SEO.

---

## 2️⃣ `HERO_SLIDES` — The big rotating banner on the homepage

```js
export const HERO_SLIDES = [
  {
    image:    "/assets/colors/cal-kitchen.jpg",
    eyebrow:  "Since 2008",                          // Small pill above title
    title:    "Crafting Stone, Defining Spaces",     // Big headline
    subtitle: "Premium engineered quartz and...",    // Paragraph below
  },
  // …add or remove { ... } blocks
];
```

**Tips:**
- Image can be a local path `/assets/colors/...` OR a full URL `https://...`.
- Keep titles short (3–6 words) so they look elegant.

---

## 3️⃣ `SERVICES` — The 4 service cards on homepage

```js
export const SERVICES = [
  { num: "01", title: "Commercial Benchtops",  desc: "...", image: "..." },
  { num: "02", title: "Residential Benchtops", desc: "...", image: "..." },
  // ...
];
```

**To remove a service**: delete its `{...}` block.
**To add one**: copy any existing block, paste, edit the fields.

---

## 4️⃣ `FEATURES` — The 6 "Why Sunhome" benefits

```js
export const FEATURES = [
  { title: "Qualified Experts", desc: "Skilled stonemasons with..." },
  // ...
];
```

---

## 5️⃣ `TESTIMONIALS` — Customer reviews

```js
export const TESTIMONIALS = [
  {
    name:    "Ora Emslie",
    source:  "Google · Local Guide · 32 reviews",
    rating:  5,                                    // 1 to 5
    when:    "2 years ago",
    quote:   "The bench was exactly as described...",
  },
  // ...
];
```

**To add a new Google review** from a customer:
1. Copy the entire `{ ... }` block.
2. Paste it just below.
3. Replace the name, source, rating, when, and quote with the new info.

---

## 6️⃣ `BRANDS` — Partner brand logos at the bottom of homepage

```js
export const BRANDS = [
  { name: "Caesarstone", logo: "https://..." },
  // ...
];
```

---

## 7️⃣ `COLOR_RANGES` — All swatches on the Colour Samples page

There are **5 ranges**: Standard / Middle / High / Natural Granite / On Sale.

```js
export const COLOR_RANGES = [
  {
    name:  "Standard Range",
    blurb: "Timeless whites — perfect for clean, modern interiors.",
    colors: [
      { name: "White Ice",     image: "..." },
      { name: "White Nougat",  image: "..." },
      // ...
    ],
  },
  // ...
];
```

**Add a new colour**: add a new `{ name: "...", image: "..." }` line in the right range.
**Remove a colour**: delete its line.
**Move a colour to a different range**: cut its line and paste it into another range's `colors: [ ... ]` array.

---

## 8️⃣ `FULL_SLABS` — The big slab previews lower on the Colours page

```js
export const FULL_SLABS = [
  { name: "Calacatta White", note: "20mm / 30mm Available", image: "..." },
  // ...
];
```

---

## 9️⃣ `GALLERY` — Every photo on the Gallery page

```js
export const GALLERY = [
  {
    src:      "/assets/colors/cal-kitchen.jpg",
    caption:  "Calacatta White Kitchen",
    category: "Kitchens",     // Filter tab this photo appears under
  },
  // ...
];
```

**Categories** are: `Kitchens`, `Joints`, `Sinks`, `Vanity`, `Detail`, `Caesarstone`, `Granite`, `Factory`.
You can invent new categories — they automatically appear as new filter tabs.

---

## 🔟 `SINKS` — Sink models + pricing (Sinks page)

```js
export const SINKS = [
  {
    model:        "S340",
    style:        "Single Bowl",
    price:        "$120",           // Just the number, e.g. "$120"
    priceNote:    "+ GST",
    blackOption:  "+$30 for Black finish",   // or `null` if no black version
    overall:      "380mm × 440mm",
    bowl:         "340mm × 400mm",
    depth:        "200mm",
    cabinet:      "420mm cabinet",
    material:     "1.2mm Stainless Steel",
    install:      "Under Mount & Top Mount",
    warranty:     "5 years",
    note:         "Big bowl can be Right / Left hand side",  // optional
    image:        "...",
    isNew:        true,             // shows "New" gold badge. Delete this line if not new.
  },
];
```

**To update a price**: change the `price` value.
**To remove a sink**: delete the entire `{ ... }` block.
**To add a new sink**: copy & paste a block, fill in the new specs.

---

## 1️⃣1️⃣ `SINK_TYPES` — Under-Mount vs Top-Mount info cards

```js
export const SINK_TYPES = [
  {
    title: "Under-Mount Sink",
    desc:  "Mounted beneath the benchtop...",
    image: "...",
    pros:  ["Seamless edge profile", "Easier cleaning", "Modern look"],
  },
];
```

---

## 1️⃣2️⃣ `THICKNESSES` — The 20mm / 30mm / 40mm strip

```js
export const THICKNESSES = [
  { mm: "20mm", label: "Standard", note: "Most popular for kitchens..." },
  // ...
];
```

---

# 🖼️ Replacing or adding photos

1. **Find your photo file** on your computer.
2. Open Emergent's file browser → navigate to `/app/frontend/public/assets/colors/`.
3. **Drag and drop** the photo (or upload via the + button).
4. Name it simply, e.g. `new-kitchen.jpg`.
5. In `mock.js`, use it like this: `"/assets/colors/new-kitchen.jpg"`

**Tips:**
- Keep photos under 2 MB so the site loads fast.
- JPG is best for photos; PNG for logos with transparency.
- Wide horizontal photos (16:9 or 4:3) work best for kitchens and slabs.
- Square photos (1:1) work best for colour swatches.

---

# 🎯 Things outside `mock.js`

### Page headlines (the very big text at the top of each page)
Open these files and edit any text between `<h1>...</h1>` or `<h2>...</h2>`:
- `/app/frontend/src/pages/Home.jsx`
- `/app/frontend/src/pages/Colours.jsx`
- `/app/frontend/src/pages/Gallery.jsx`
- `/app/frontend/src/pages/Sinks.jsx`
- `/app/frontend/src/pages/Contact.jsx`

### Browser tab title + Google search snippet (SEO)
Open `/app/frontend/public/index.html` and look for:
```html
<title>Sunhome Group Ltd — ...</title>
<meta name="description" content="..." />
<meta name="keywords" content="..." />
```

### Logo file
Replace `/app/frontend/public/assets/logo/sunhome-logo.png` with any new logo (keep the same filename so you don't have to touch any code).

---

# ⚠️ Important rules so you don't break the site

1. Always keep the **quotation marks** `"..."` around text.
2. Keep the **commas** at the end of each line — they separate items.
3. Don't delete the lines `export const X = [` or the closing `];`.
4. If you accidentally break something, the website will show a red error screen — just **undo your change** (Cmd/Ctrl + Z) and save.
5. **Hot reload**: save the file → wait 2 seconds → refresh the browser → see the change.

---

# 💡 Common edits — quick recipes

### Change a price
1. Open `mock.js`
2. Press Cmd/Ctrl+F → search for the sink model, e.g. `"S400"`
3. Change `price: "$130"` to `price: "$135"`
4. Save

### Add a new customer review
1. Open `mock.js`
2. Find `export const TESTIMONIALS = [`
3. Copy any existing `{ name: ..., quote: ... }` block
4. Paste, edit, save

### Replace a colour swatch photo
1. Upload the new photo to `/app/frontend/public/assets/colors/`
2. Open `mock.js`, find the colour by name (e.g. `Calacatta Gold`)
3. Change its `image:` path
4. Save

### Add a brand new colour
1. Open `mock.js`, find the range (e.g. `High Range`)
2. Inside that range's `colors: [`, add: `{ name: "My New Colour", image: "/assets/colors/my-photo.jpg" },`
3. Save

---

**Stuck? Just ask me in chat. I'm faster than your editor.** 😉
