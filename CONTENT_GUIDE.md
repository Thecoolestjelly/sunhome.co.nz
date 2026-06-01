# Editing Your Sunhome Website — A Friendly Guide

Hi! Everything visible on the website that's "your text" lives in **one file**:

> **`/app/frontend/src/mock.js`**

You can edit any sentence, price, address, review or photo URL there and the
website will update automatically (you don't need to restart anything — it
hot-reloads in a few seconds).

This guide tells you exactly where to find each piece of text.

---

## 1. Business basics (name, phone, email, address, hours)

Find the section called `export const SITE = {` near the top of `mock.js`.

```js
export const SITE = {
  name: "Sunhome Group Ltd",
  phone: "09 265 0896",
  mobile: "021 800 551",
  email: "Sales@sunhome.co.nz",
  address: "1C Birmingham Road, Ōtara, Auckland 2013, New Zealand",
  hours: {
    showroom: "Mon – Fri  10:00am – 12:00pm",
    pickup:   "Mon – Fri  10:00am – 12:00pm",
  },
  rating: {
    google: 4.6,     // ← Your Google star rating
    reviews: 30,     // ← Number of reviews shown on the rating banner
  },
};
```

Just change anything between the quotes `"..."`. Save the file. Done.

---

## 2. Hero (the big rotating slides on the homepage)

Find `export const HERO_SLIDES = [`.

Each slide has:
- `image` — the photo URL (must be in `/app/frontend/public/assets/colors/` OR a full https://… URL)
- `eyebrow` — the small tag above the title (e.g. "Since 2008")
- `title` — the big headline
- `subtitle` — the supporting paragraph

To add or remove a slide, just copy/delete a whole `{ ... }` block.

---

## 3. The 4 service cards on the homepage

Find `export const SERVICES = [`. Each card has:
- `num` — the number shown ("01", "02"…)
- `title` — bold heading
- `desc` — the description paragraph
- `image` — photo URL

---

## 4. The "Why Sunhome" benefits

Find `export const FEATURES = [`. Each one has just `title` and `desc`.

---

## 5. Customer Reviews

Find `export const TESTIMONIALS = [`. Each review has:
- `name` — reviewer name
- `source` — where it's from ("Google · Local Guide · 32 reviews")
- `rating` — 1 to 5 stars (most are 5)
- `when` — "2 years ago", "8 months ago", etc.
- `quote` — the review text itself

**To add a new Google review**: copy any existing block, paste, edit the fields. Done.

---

## 6. Colour Samples (the swatches on the Colour Samples page)

Find `export const COLOR_RANGES = [`.

There are 5 ranges:
1. **Standard Range** — Timeless whites
2. **Middle Range** — Subtle greys
3. **High Range** — Statement marbles (Calacatta etc.)
4. **Natural Granite** — Real granite
5. **On Sale** — Stocked/end-of-line

Each colour has `name` and `image`. To remove a colour, delete its `{ name, image }` line. To add one, copy any existing line.

---

## 7. Full Slabs (the big slab previews lower on the Colours page)

Find `export const FULL_SLABS = [`. Each has `name`, `note` (e.g. "30mm Available"), and `image`.

---

## 8. Sink Pricing (the cards on the Sinks page)

Find `export const SINKS = [`. Each sink has:
- `model` — e.g. "S340"
- `style` — e.g. "Single Bowl"
- `price` — e.g. "$120"  (no GST text here — that comes from `priceNote`)
- `priceNote` — usually `"+ GST"`
- `blackOption` — text shown in the gold pill, or `null` if no black version
- `overall`, `bowl`, `depth`, `cabinet` — the dimensions
- `material`, `install`, `warranty` — bottom info
- `note` — optional extra line
- `image` — photo URL
- `isNew` — set to `true` to show the "New" gold badge, else delete the line

To change a price: just edit the `price` value.

---

## 9. Sink mount styles & thickness options (Sinks page)

- `SINK_TYPES` — the Under-Mount / Top-Mount cards
- `THICKNESSES` — the 20mm / 30mm / 40mm / 50mm / 60mm strip

---

## 10. Gallery photos

Find `export const GALLERY = [`. Each photo has:
- `src` — photo URL
- `caption` — text shown on hover and in the big lightbox view
- `category` — one of: Kitchens / Joints / Sinks / Vanity / Detail / Caesarstone / Granite — this controls which filter tab the photo shows under. You can invent new categories — they appear automatically as new filter tabs.

---

## 11. Adding new photos to the website

1. Drop your photo file into `/app/frontend/public/assets/colors/` (e.g. `my-new-kitchen.jpg`).
2. In `mock.js`, reference it with the path `"/assets/colors/my-new-kitchen.jpg"`.

That's it — the website will display it. (Tip: keep photos under 2MB for fast loading.)

---

## 12. Page headlines / SEO meta

Some text lives **outside** `mock.js`:

- **The big H1 headline on each page** (e.g. "Crafting Stone, Defining Spaces") is in the page files:
  - `/app/frontend/src/pages/Home.jsx`
  - `/app/frontend/src/pages/Colours.jsx`
  - `/app/frontend/src/pages/Gallery.jsx`
  - `/app/frontend/src/pages/Sinks.jsx`
  - `/app/frontend/src/pages/Contact.jsx`
  Just open and edit any `<h1>` or `<h2>` text directly.

- **The browser tab title + Google search description** are in `/app/frontend/public/index.html` — look for `<title>` and `<meta name="description" content="…">`.

---

## Quick tips

- Always keep the quotation marks `"..."` around your text.
- Don't remove commas at the end of lines.
- If you make a mistake the page will show an error — just undo the change.
- Hot reload: save the file → wait 2 seconds → refresh your browser → done.

Need a hand? Just ask me in chat: *"Change the homepage subtitle to …"* and I'll do it for you.
