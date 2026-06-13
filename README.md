# Sunhome Group Ltd — Website Source Code

This is the complete source code for your Sunhome website.

---

## 📦 What's inside this folder

| Path | What it is |
|---|---|
| `frontend/` | The whole website (React + Tailwind CSS) |
| `frontend/src/mock.js` | **All editable text** — open this to change wording, prices, reviews, etc. |
| `frontend/src/pages/` | The 5 main pages (Home, Colours, Gallery, Sinks, Contact) |
| `frontend/src/components/` | Reusable parts (Navbar, Footer, Enquire button, etc.) |
| `frontend/public/assets/` | All the photos (colours, sinks, logo, gallery) |
| `frontend/public/index.html` | SEO meta tags + page title |
| `CONTENT_GUIDE.md` | Full guide to editing every piece of text |
| `README.md` | This file |

---

## 💻 How to run the website on your computer

### 1. Install Node.js (one-time, free)
Download the **LTS** version from **https://nodejs.org** → install → restart your terminal.

### 2. Install Yarn (one-time, free)
Open Terminal (Mac) or Command Prompt / PowerShell (Windows) and run:
```bash
npm install --global yarn
```

### 3. Install the website's dependencies
From inside this folder, run:
```bash
cd frontend
yarn install
```
This downloads all the libraries the site needs (~2 minutes the first time).

### 4. Start the website
```bash
yarn start
```
Your browser should automatically open at **http://localhost:3000** with your site running. Any change you save in VS Code will refresh the page automatically.

### 5. Make a production build (optional, when ready to deploy)
```bash
yarn build
```
This creates a `frontend/build/` folder with optimised files ready to be uploaded to any web host.

---

## ✏️ Editing text — the simple version

Open **`frontend/src/mock.js`** in VS Code (or any editor) and look for the giant `TEXT = { ... }` block near the top. Edit anything inside the quotes `"..."`, save, refresh your browser. Done.

For the complete editing guide, open **`CONTENT_GUIDE.md`** in this folder.

---

## 🖼️ Adding new photos

Drop your photo into `frontend/public/assets/colors/` (or `/sinks/`, `/gallery/`, `/logo/`), then in `mock.js` reference it like `"/assets/colors/my-new-photo.jpg"`.

---

## 🚀 Deploying to sunhome.co.nz

**Option A — Vercel (free, recommended)**
1. Push this folder to a GitHub repo
2. Sign up at vercel.com → Import the repo (set Root Directory = `frontend`)
3. Add `sunhome.co.nz` in Vercel → Domains
4. Update DNS at your registrar (Vercel gives you the exact records)
5. Live in 5–60 minutes. Free SSL, free CDN, $0/month forever.

**Option B — Any other static host**
Run `yarn build`, then upload everything inside `frontend/build/` to your existing host's public folder.

---

## ❓ Need help?

The project uses standard Create React App + Tailwind CSS — any React developer can work on it.

Enjoy your new website! 🎉
