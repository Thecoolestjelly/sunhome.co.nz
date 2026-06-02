# 📝 Sunhome Website — Complete Editing Guide

> **Good news!** All editable text on your website now lives in **ONE file**:
>
> **`/app/frontend/src/mock.js`**
>
> Open that file in VS Code, scroll to the big `TEXT = { ... }` block near the top, and edit anything inside the quotes `"..."`. Save → the website updates in 2 seconds.

---

## 🟢 Three ways to edit your site

### Way 1 — Just message me (EASIEST)
Type what you want changed:
- *"Rewrite the homepage company intro to be warmer and more personal."*
- *"Update S400 price to $135."*
- *"Add a review by Sarah Mitchell."*

Done in seconds.

### Way 2 — Edit in VS Code on your computer ⭐ (what you wanted)
See **"How to download to VS Code"** below.

### Way 3 — Edit in Emergent's built-in code editor
Click the `</>` icon in the platform → navigate to `frontend/src/mock.js` → edit → save.

---

# 📥 How to download to VS Code

### Step 1 — Save your project to GitHub
1. In the Emergent chat interface, look for the **"Save to GitHub"** button (usually near the chat input box).
2. Click it → connect your GitHub account if prompted → pick a repo name (e.g. `sunhome-website`).
3. Click **"PUSH TO GITHUB"**.

### Step 2 — Clone the repo onto your computer
1. Open **Terminal** (Mac) or **Command Prompt / PowerShell** (Windows).
2. Run:
   ```bash
   git clone https://github.com/YOUR-USERNAME/sunhome-website.git
   cd sunhome-website
   ```

### Step 3 — Open it in VS Code
1. From inside that folder, run:
   ```bash
   code .
   ```
   (or just open VS Code → File → Open Folder → pick `sunhome-website`)

### Step 4 — Install dependencies (one time only)
You need **Node.js** (free) installed first → grab the LTS version from **https://nodejs.org**.

Then install Yarn and the project's packages:
```bash
npm install -g yarn
cd frontend
yarn install
```

### Step 5 — Run the website on your computer
```bash
yarn start
```
Your browser opens at **http://localhost:3000** showing the live site. Any edit you make in VS Code shows up instantly.

### Step 6 — Push your edits back to GitHub
After editing in VS Code:
```bash
git add .
git commit -m "Updated homepage intro text"
git push
```

### Step 7 — Pull changes back into Emergent
In a new Emergent chat, click the **GitHub** button next to the chat input and select your repo. Your changes are now in Emergent again.

---

# ✏️  THE ONE FILE YOU NEED — `/frontend/src/mock.js`

Open it in VS Code. Near the top you'll see a big block that starts:

```js
export const TEXT = {
  home: {
    whoWeAreLabel:     "Who We Are",
    whoWeAreHeadline:  "Auckland's most trusted stone fabricator since 2008.",
    whoWeAreParagraph: "Sunhome Group Ltd has proudly supplied..."
    ...
  },
  colours: { ... },
  gallery: { ... },
  sinks: { ... },
  contact: { ... },
  footer: { ... },
};
```

**That's it.** Every headline, paragraph, label and button label you can see on the website is in there, organised by page.

## Map of the `TEXT` object

| Section in `TEXT` | What it controls |
|---|---|
| `TEXT.home.whoWeAreParagraph` | **Your company intro paragraph** on the homepage |
| `TEXT.home.whoWeAreHeadline` | The big "Auckland's most trusted..." H2 |
| `TEXT.home.whyParagraph` | "The detail is in the difference" intro |
| `TEXT.home.ctaParagraph` | Bottom-of-homepage call-to-action paragraph |
| `TEXT.home.stats` | The 3 stats (15+ years, 600+ homes, 3-day installs) |
| `TEXT.colours.intro` | Top paragraph on Colour Samples page |
| `TEXT.colours.slabsParagraph` | "Full slab preview" subheading |
| `TEXT.colours.brandStrip` | "We also supply Caesarstone, Silestone..." line |
| `TEXT.gallery.intro` | Top paragraph on Gallery page |
| `TEXT.sinks.intro` | Top paragraph on Sinks page |
| `TEXT.sinks.thicknessParagraph` | Thickness options blurb |
| `TEXT.contact.intro` | Top paragraph on Contact page |
| `TEXT.footer.blurb` | The blurb in the footer |

Then there are also these other `export const` blocks **below** `TEXT` in the same file:

| Block | What it controls |
|---|---|
| `SITE` | Phone, email, address, hours, Google rating |
| `HERO_SLIDES` | The big rotating banner on homepage |
| `SERVICES` | 4 service cards on homepage |
| `FEATURES` | "Why Sunhome" 6 benefits |
| `TESTIMONIALS` | Customer reviews |
| `BRANDS` | Partner logos |
| `COLOR_RANGES` | All 5 colour ranges |
| `FULL_SLABS` | Big slab previews |
| `GALLERY` | Every gallery photo + category |
| `SINKS` | Each sink's price, dimensions, badge |
| `SINK_TYPES` | Under-mount / Top-mount cards |
| `THICKNESSES` | 20mm / 30mm / 40mm strip |

---

# 🎯 Common edits — quick recipes

### Rewrite the company intro (your main task!)
```js
// In mock.js, find this:
whoWeAreParagraph: "Sunhome Group Ltd has proudly supplied premium stone benchtops..."

// Change to your own words, e.g.:
whoWeAreParagraph: "Hi, we're Luke and the Sunhome team. Since 2008 we've been making beautiful kitchen benchtops right here in Auckland — over 600 homes a year trust us with their renovations. We treat every project like it's our own kitchen.",
```

### Change a price
1. Cmd/Ctrl+F → search for `"S400"`
2. Change `price: "$130"` to `price: "$135"`
3. Save

### Add a new colour
1. Find the range (e.g. `name: "High Range"`)
2. Inside `colors: [`, add a new line:
   ```js
   { name: "Carrara Silver", image: "/assets/colors/carrara-silver.jpg" },
   ```
3. Drop a photo file into `/frontend/public/assets/colors/` with that filename.

### Add a new customer review
1. Find `TESTIMONIALS`
2. Copy any `{ name: ..., quote: ... }` block
3. Paste, fill in their name/quote/rating

---

# ⚠️  Rules to not break the site

1. Keep the **quotation marks** around your text → `"like this"`
2. Keep the **comma** at the end of each line
3. Don't delete the `export const X = ` or the closing `};`
4. If you break it, the browser shows a red error → press Cmd/Ctrl+Z to undo

---

# 🖼️  Replacing photos

1. Drop your new photo into **`/frontend/public/assets/colors/`** (or `/sinks/`, `/logo/`).
2. In `mock.js`, change the `image:` path to point to your file, e.g. `"/assets/colors/my-new-photo.jpg"`.
3. Save → done.

Keep photos under 2 MB. Square (1:1) for colour swatches, wide (16:9 or 4:3) for kitchens.

---

# 📌 Things outside `mock.js`

- **Browser tab title + SEO description**: `/frontend/public/index.html`
- **Logo image**: `/frontend/public/assets/logo/sunhome-logo.png`
- **Sitemap for Google**: `/frontend/public/sitemap.xml`

---

**Stuck? Just ask me. 😉**
