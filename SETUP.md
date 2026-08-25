# great-path-web — Setup & Deploy

Next.js 14 (App Router), plain JavaScript, plain CSS. Same shape as the Digital & Dirt site,
so everything you already know about that repo applies here.

**Verified:** this builds clean — 21 static routes, all six Path pages pre-rendered.

---

## 1. Run it locally

Open a terminal in this `great-path-web` folder:

```bash
npm install
npm run dev
```

Open http://localhost:3000.

**Do this first, before anything else:** open it on your phone. On the same wifi, run
`npm run dev -- -H 0.0.0.0`, then visit `http://<your-computer's-IP>:3000` from your phone.
Every design decision in here was made phone-first and you should be checking it that way.

To confirm it builds the way Vercel will:

```bash
npm run build
```

---

## 2. Put it on GitHub

```bash
cd great-path-web
git init
git add .
git commit -m "Launch 1 skeleton — shell, home, paths, pricing"
# create an empty repo named great-path-web on github.com, then:
git remote add origin https://github.com/<you>/great-path-web.git
git branch -M main
git push -u origin main
```

`.gitignore` already excludes `node_modules`, `.next`, and `.env.local`. Never commit env files.

---

## 3. Deploy to Vercel

1. Vercel → **Add New… → Project** → import `great-path-web`.
2. Framework preset: **Next.js** (auto-detected).
3. Root Directory: **`./`**.
4. Deploy. First build takes a minute or two.

Get it on a Vercel URL today, even half-finished. A live URL you can pull up on your phone
changes how you make decisions about it.

**Domain:** you're keeping the current domain. Do NOT point it until the redirect map from the
old Squarespace URLs is written — see §5.

---

## 4. Environment variables

Copy `.env.example` to `.env.local` for local dev and set the same values in
Vercel → Settings → Environment Variables. **Nothing in Launch 1's current state needs them**
— they're there for when email capture and the mini-report land in week 4.

The one rule that matters: `SUPABASE_SERVICE_KEY` bypasses RLS. It may only ever be read in a
server route. If it appears in a client component, it ships to the browser.

---

## 5. Before you point the domain

- [ ] Redirect map from every existing Squarespace URL to its new page (protects your search traffic)
- [ ] Lighthouse mobile performance ≥ 90
- [ ] Every page checked on a real phone, not just a browser's device emulator
- [ ] Real logo files in `public/brand/`, replacing the `<Mark />` placeholder in `components/Header.js`
- [ ] Terms and Privacy rewritten — they're drafts
- [ ] Keep Squarespace live for one week after the switch as a fallback

---

## 6. Where to change things

| You want to change… | Edit this |
|---|---|
| Colors, fonts, spacing, buttons | `app/globals.css` — the `:root` block at the top |
| Nav, footer, Path content, pricing, KPIs | **`lib/brand.js`** — one file, drives everything |
| Home page copy | `app/page.js` |
| A Path page | `lib/brand.js` (content) — the layout is one shared template |
| Pricing page copy and FAQ | `app/pricing/page.js` |

**The rule:** if a name, number, or piece of copy appears on more than one page, it belongs in
`lib/brand.js`. No page should ever hardcode a price or a Path name.

---

## 7. What's built vs. what's stubbed

**Real:**

- Shell — `Header` (with the mobile drawer), `Footer`, `layout.js`, Inter loaded from Google Fonts
- Design system — navy `#3F5F86` / gold `#C7A65A`, mobile-first, tap targets ≥ 44px
- `lib/brand.js` — all six Paths with copy, all four pricing tiers, nav, how-it-works, fit lists
- Home page — all ten blocks from the site spec
- `/paths` and all six `/paths/[slug]` pages from one template
- `/pricing` with tiers and FAQ

**Stubbed** (real routes, placeholder content — no 404s):

`/examples`, `/tools`, `/tools/where-are-you`, `/tools/data-template`, `/about`, `/contact`,
`/thanks`, `/terms`, `/privacy`

**Placeholder `<OnThePath />`:** `components/OnThePath.js` renders the road, your marker, the
expected-by-now tick, and the gap — but from straight-line math on props. Track B replaces the
math with real seasonality and feeds it from `report_data.json`. **The props contract is meant
to survive that swap, so keep it stable.**

---

## 8. Your next edits, in order

1. **`lib/brand.js`** — read every line of Path copy and make it sound like you. I drafted it; it
   should be yours. This is the highest-value hour you can spend on the site.
2. **Your bio** — `app/page.js` block 9 and `/about`. Three sentences. Small businesses buy the
   person.
3. **Logo** — drop the real files in `public/brand/` and replace `<Mark />` in `Header.js`.
4. **Booking link** — `BRAND.bookingUrl` in `brand.js` currently points at `/contact`. Swap it for
   your real scheduling URL.

Then week 2: home blocks are done, so it's `/about`, `/contact`, and the examples gallery
while Track B builds the pace engine.
