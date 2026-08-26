# Go-live checklist

Work top to bottom. Nothing here takes long, but the order matters — step 1 can
take your email down for a day if you get it wrong.

---

## Your setup

- **Domain registered at:** Squarespace
- **DNS managed at:** Squarespace (Settings → Domains → greatpathadvisors.com → DNS)
- **Email:** Google Workspace — `dan@`, `success@`, `gp@`

This combination creates one risk that has nothing to do with the website:
**your domain and your email routing both live inside the account you're
leaving.** Handle that deliberately, in the order below.

---

## ⚠ 1. Screenshot your DNS before changing anything

Squarespace → **Settings → Domains → greatpathadvisors.com → DNS Settings**.

Screenshot the whole list. You are about to change two rows out of maybe a
dozen, and the screenshot is your undo button.

The rows that route your **email** will look roughly like one of these two
Google Workspace patterns:

```
Newer (single record)
  MX   @   1    smtp.google.com

Older (five records)
  MX   @   1    aspmx.l.google.com
  MX   @   5    alt1.aspmx.l.google.com
  MX   @   5    alt2.aspmx.l.google.com
  MX   @  10    alt3.aspmx.l.google.com
  MX   @  10    alt4.aspmx.l.google.com
```

Plus TXT rows that keep you out of spam folders:

```
  TXT  @                v=spf1 include:_spf.google.com ~all
  TXT  google._domainkey   (a long DKIM key)
  TXT  _dmarc              (may or may not exist)
```

**Record what's actually in your panel — don't trust the list above.** Yours is
the source of truth.

- [ ] Screenshot taken
- [ ] MX rows written down
- [ ] TXT rows written down

**Do not use** any Squarespace button offering to "connect a domain to another
service" or to change nameservers wholesale. Those replace the entire zone.
You want to hand-edit two rows.

---

## 2. Push and confirm the Vercel build

```powershell
cd "C:\Users\Great\Documents\Business\Great Path\Great Path Advisors\great-path-web"
git add .
git commit -m "Launch: redirects, colour bands, examples, about, contact"
git push
```

- [ ] Vercel dashboard shows a green build
- [ ] Open the `.vercel.app` URL and click every nav item
- [ ] Open it **on your phone** — every page, top to bottom
- [ ] Check the Calendly widget loads on `/contact`

---

## 3. Add the domain in Vercel

Vercel → project → **Settings → Domains** → add `greatpathadvisors.com` and
`www.greatpathadvisors.com`. Vercel shows the exact records you need.

- [ ] Add both the apex and the `www` version
- [ ] Copy the records Vercel gives you — don't guess

---

## 4. Edit two rows in Squarespace DNS

Squarespace → **Settings → Domains → greatpathadvisors.com → DNS Settings**.

You are changing exactly two things:

| Row | Change it to |
|---|---|
| `A` record on `@` (the bare domain) | the IP Vercel gave you in step 3 |
| `CNAME` on `www` | the hostname Vercel gave you (ends in `vercel-dns.com`) |

If Squarespace has several `A` records on `@` pointing at its own servers,
remove those and leave the single Vercel one.

- [ ] `A` on `@` updated
- [ ] `CNAME` on `www` updated
- [ ] **Every MX row untouched**
- [ ] **Every TXT row untouched**
- [ ] Compared against your screenshot — MX and TXT identical

Save, then wait. Usually minutes, sometimes a few hours.

Then verify, in this order:

- [ ] `https://greatpathadvisors.com` loads the new site
- [ ] `https://www.greatpathadvisors.com` loads the new site
- [ ] **Email yourself at `dan@greatpathadvisors.com` from your phone and confirm it arrives**
- [ ] Send one *from* `dan@` to a Gmail address and check it isn't in spam

If mail stops, put the MX rows back from your screenshot. Delivery resumes on
its own — messages sent meanwhile are retried by the sending server for a few
days, so a short outage doesn't lose mail.

---

## 5. Test the redirects

Every one of these should land on the new page, not a 404:

- [ ] `/operator-path` → Operator Path
- [ ] `/sales-brief` → Sales Path
- [ ] `/growth-path` → Custom Automation
- [ ] `/cleanup-path-1` → Cleanup Path
- [ ] `/exit-path` → Exit Path
- [ ] `/ai-readiness-audit` → the audit
- [ ] `/the-great-path-difference` → About
- [ ] `/success-stories` → Examples
- [ ] `/pricing-1` → Pricing *(still unlinked — reachable only by URL)*

All 22 are configured in `next.config.mjs`.

---

## 6. Turning off the Squarespace website

Squarespace keeps **Domains** and **Websites** as separate products with
separate billing. You keep the domain and its DNS — and therefore your Google
Workspace email — regardless of what happens to the website subscription.
Turning the site off does not touch any of that.

So the only reason to wait is rollback:

- [ ] Keep the website subscription active for **at least two weeks** after launch

If something's badly wrong, flipping the DNS rows back is your instant undo —
and that only works while the old site still exists. Once you've had a clean
week or two, turn the website off.

**One thing to check before you do:** if the domain came free with an annual
website plan, cancelling that plan can mean the domain no longer renews for
free. Look at the domain's renewal price and date in the Domains section. If it
changed, just pay it — the domain is yours either way, but you don't want it
lapsing because a renewal quietly failed.

- [ ] Domain renewal date and price confirmed
- [ ] Auto-renew on

### Optional, later: move DNS off Squarespace

Not urgent and not a risk — a preference. Once you're not using Squarespace for
anything else, keeping your DNS there means logging into a platform you've
otherwise left. Cloudflare (free DNS, domains at cost), Porkbun, or Namecheap
are all good homes. If you do it, copy the MX and TXT rows across exactly and
re-test email afterward.

---

## 7. After it's live

- [ ] Point `greatpath.ai` at a 301 redirect to `greatpathadvisors.com`
- [ ] Set `greatpath.ai` to auto-renew
- [ ] Submit the new sitemap in Google Search Console
- [ ] Run Lighthouse on mobile — target 90+ performance
- [ ] Tell your list it's live, with the free template as the reason to click

---

## Known placeholders shipping with launch

None of these block go-live, but you should know they're visible:

| Where | What |
|---|---|
| `/about`, home | Your headshot — currently a "DM" circle |
| `/tools/*` | Data template, mini-report, and the rebuilt audit are stubs |
| `/franchises` | Starter page; the full Squarespace content isn't rebuilt yet |
| `/terms`, `/privacy` | Draft copy — **replace before taking payments** |
| `/examples` | Fourth example (seasonal restaurant) not built |
| Briefing PDFs | Print versions are HTML; save them as PDF when you want downloads |
