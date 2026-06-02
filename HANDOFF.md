# Handoff: The Legislative for Life Foundation Website

Get familiar with the website and project before making changes.

## 1. What this project is

A Next.js website for **The Legislative for Life Foundation** (formerly "Legislate for Life"). The previous version was a farmer-mental-health advocacy site. The user rebranded to a broader nonprofit focused on policy research, public education, and civic engagement. The site is hosted on Vercel at [legislateforlife.org](https://legislateforlife.org), which the user owns and has pointed at the Vercel project.

**GitHub:** [Legislate-For-Life/Legislate4Life-Website](https://github.com/Legislate-For-Life/Legislate4Life-Website) on `main`. Vercel auto-deploys on push.

**Important deployment note:** Vercel's free tier cannot deploy from a **private** GitHub repo. If the repo is set to private, pushes to `main` will not update production. The user hit this in May 2026; making the repo public again (or upgrading Vercel) fixes it. An empty commit push (`c749579`) was used once to trigger a redeploy after visibility was restored.

---

## 2. Hard rules from the user (do not violate)

These are non-negotiable and were explicitly called out for legal/positioning reasons:

**The foundation does NOT lobby or directly push for legislation.** Never use language like "push for policies," "advocate for legislation," "direct legislative influence," "pressure lawmakers," etc. Always frame work as:

- Policy research
- Policy analysis
- Public education
- Educating policymakers
- Educating communities
- Translating research into practical recommendations
- Community awareness

**No em dashes (—) in site UI copy** (TSX labels, nav, buttons, metadata the foundation controls, CSS comments, etc.). Replace with commas, periods, colons, parentheses, or rewording.

**Exception (user confirmed):** Em dashes in **published articles and policy brief body text** imported from the Writing Team or Google Docs do not need to be stripped. That is author content, not site chrome.

**Official displayed org name** is "The Legislative for Life Foundation." "Legislative for Life" may appear conversationally in body copy, but anywhere the foundation identifies itself, use the full name. `ORG_NAME` in `src/lib/constants.ts` handles this.

**Mental health, farming, etc.** can be issue areas the foundation researches, but the foundation is **NOT** farmer-focused or single-issue. Do not reintroduce farming-specific site framing (hero, stats, taglines).

---

## 3. Tech stack

- **Next.js 16.2.6** (App Router). Read `node_modules/next/dist/docs/` before using unfamiliar APIs. `params` and `searchParams` are Promises that must be awaited. Use `generateStaticParams` for dynamic routes.
- **React 19.2.4**
- **TypeScript 5**
- **Tailwind CSS v4** (`@theme inline` in `globals.css`, not v3 `tailwind.config`)
- **Resend** (`resend` package) for contact + application email
- **Node 18.17+**

**Build (Windows, npm not on PATH):**

```powershell
node node_modules/next/dist/bin/next build
node node_modules/next/dist/bin/next dev
```

The old `/get-involved` directory was deleted in the rebuild. **Do not recreate it.**

---

## 4. Site routes (high level)

| Route | Purpose |
|-------|---------|
| `/` | Homepage |
| `/about`, `/about/legal-resources` | About, legal docs library |
| `/policy`, `/policy/[state]` | State research overview + state pages |
| `/policy/[state]/[brief]` | Full policy briefs (PDF + HTML) |
| `/join-us`, `/join-us/[role]` | Roles + application form |
| `/writing`, `/writing/[slug]` | Articles |
| `/contact` | Contact form |
| `/privacy` | Privacy policy |
| `/api/contact`, `/api/applications` | Resend email handlers |

Auto-generated: `/sitemap.xml`, `/robots.txt`, `/manifest.webmanifest`, favicons from `src/app/icon.png` / `favicon.ico`.

---

## 5. Org structure (used throughout the site)

Three divisions, defined in `src/app/about/page.tsx`:

1. **Center for Public Policy** — research, analysis, recommendations, public education
2. **Civic Affairs Division** — community projects, engagement, outreach
3. **Strategy & Communication Department** — recruitment, communications, operations

All three are marked **Recruiting** on the About page.

---

## 6. Open roles (`src/data/roles.ts`)

**11 roles total.** Edit one file; `/join-us/[role]` pages auto-render.

**Leadership & Administrative** (single openings, require onboarding agreement):

- Director of Human Resources
- Deputy Director of Human Resources
- Operations Director
- Director of Finance
- Deputy Director of Finance
- Director of Civic Affairs
- Deputy Director of Civic Affairs

**Research & Writing:**

- Policy Research Intern (multiple, requires onboarding agreement)
- **Journalism Intern** (multiple, no agreement) — renamed from "Writing Team Member" in `f5da13a`

**Civic Affairs & Community** (multiple each, no agreement):

- Civic Affairs Team Member
- **Community Engagement Intern** — renamed from "Community Engagement Volunteer" in `f5da13a`

Responsibilities, qualifications, and time commitments are still placeholders until the user sends a full role description doc.

---

## 7. States (`src/data/states.ts`)

- **Active:** Virginia, Texas
- **Developing (TBD):** California, Maryland, New York

Each state page: **Research Focus**, **Research Findings**, **Policy Recommendations**. No "Active Bills" / "Proposed Legislation" framing (removed on purpose).

**Virginia** also has a published policy brief (see section 8).

---

## 8. Policy briefs

**Data:** `src/data/policy-briefs.ts` + long body text in `src/data/policy-brief-content/*.ts`

**Routes:** `/policy/[state]/[brief]` (e.g. `/policy/virginia/virginia-farm-wellness-resilience`)

**State pages** show a **Policy Briefs** section when briefs exist for that state (`getBriefsForState`).

**Published:**

| Brief | Date | PDF |
|-------|------|-----|
| Virginia Farm Wellness & Resilience | 2026-06-01 | `public/policy-briefs/virginia-farm-wellness-resilience.pdf` |

**Page layout when `pdfFile` is set:**

1. Hero (title, date, author)
2. **Embedded PDF viewer** (main content) + **Download PDF** + **Open in new tab**
3. **Read on this page** — HTML version below (SEO/accessibility)

**Adding a new brief:**

1. Add body content file under `src/data/policy-brief-content/`
2. Add entry in `src/data/policy-briefs.ts` with `pdfFile: "filename.pdf"` optional
3. Place PDF in `public/policy-briefs/`
4. Public Google Doc links work for import; user provides date, author, state

**Component:** `src/components/sections/PolicyBriefPdfViewer.tsx`

---

## 9. Articles (`src/data/articles.ts`)

**Six articles, newest first.** Placeholders removed.

**Writing Team (published):**

| Slug | Title | Date |
|------|-------|------|
| `the-harvest-nobody-talks-about` | The Harvest Nobody Talks About | 2026-05-22 |
| `the-bitter-irony-of-harvest` | The Bitter Irony of Harvest | 2026-04-17 |
| `a-look-into-tragedy-indias-suicide-fields` | A Look into Tragedy: India's Suicide Fields | 2026-04-11 |

**Foundation originals:** `why-public-policy-education-matters`, `rural-mental-health-research-snapshot`, `translating-research-into-recommendations`

**Rendering:** `src/components/sections/RichTextBody.tsx` (shared with policy brief HTML). Supports `##` headings, `**bold**`, double-newline paragraphs. No clickable links in body yet.

**Workflow:** User sends public Google Doc links + author + date; agent imports into `articles.ts`.

---

## 10. Forms

### Contact + applications (LIVE via Resend)

- `src/app/api/contact/route.ts` → `legislateforlife@gmail.com` from `contact@legislateforlife.org`
- `src/app/api/applications/route.ts` → same inbox from `applications@legislateforlife.org`
- Requires **`RESEND_API_KEY`** in Vercel environment variables (domain verified)
- Honeypot field `company`, JSON POST only, validation on both routes

**Application form** (`src/components/sections/JoinUsForm.tsx`):

- Full Name, Email, Phone, **Resume Link (required URL)**, Relevant Experience, Why join (textarea)
- Hidden `role` field on role detail pages
- No file upload (no backend storage)

### Newsletter (still UI-only)

`src/components/sections/NewsletterForm.tsx` sets `submitted = true` locally. Nothing is sent. User has not picked Beehiiv / Mailchimp / Substack. **Do not wire until they confirm the service.**

---

## 11. SEO and indexing

**Implemented (`src/lib/seo.ts`, `src/app/sitemap.ts`, `src/app/robots.ts`, `src/app/manifest.ts`):**

- Per-page canonical URLs, Open Graph, Twitter cards
- JSON-LD: Organization, WebSite, Article, JobPosting, Breadcrumbs
- Sitemap includes static pages, roles, states, articles, policy briefs
- `robots.txt` disallows `/api/`

**Favicon:** Default Next.js/Vercel `favicon.ico` was replaced with logo-derived icons (`src/app/favicon.ico`, `icon.png`, `apple-icon.png`). Regenerate via `python scripts/generate_favicons.py` if logo changes.

**Google Search Console (May 2026):** Site is new. "Page with redirect" for `http://legislateforlife.org/` is normal (HTTPS redirect). Indexing takes days/weeks after deploy; submit sitemap once, request indexing for `https://legislateforlife.org/`. No need to resubmit sitemap on every deploy unless URLs change.

---

## 12. Crisis support popup

`src/components/sections/CrisisSupportPopup.tsx` — dismissible, top-right, `sessionStorage` key `lfl-crisis-popup-dismissed`. Mounted in root layout. Does **not** replace the crisis banner on the homepage.

---

## 13. Donate button

`DONATE_URL` in `src/lib/constants.ts` is still `#donate-platform-tbd`. Used on `/join-us` hero and "Other Ways to Help." When user sends real URL, update that constant only.

---

## 14. Legal and Resources (`/about/legal-resources`)

Org details table + document library (handbook, bylaws, COI, onboarding template, brand guidelines). All coming-soon or members-only; no `href` yet. EIN: "Pending publication."

---

## 15. Images

- `/images/logo.png` — header, footer, favicon source
- `/images/hero-field.jpg` — homepage hero (farming-themed; may replace)
- `/images/farming-hands.jpg` — About Our Story (TODO: replace)

---

## 16. Bugs already fixed (do not reintroduce)

- **Dark outline buttons:** Use `outline-gold` variant in `Button.tsx`, not `className` overrides on `outline`
- **Footer layout:** Brand col-4, Middle col-5 (links + newsletter below), Connect col-3; newsletter `min-w-0` on dark variant input
- **Vercel deploy from private repo:** Repo must be public on free tier (or paid Vercel plan)

---

## 17. Still pending from the user

- Pick newsletter service → wire `NewsletterForm.tsx`
- Confirm `RESEND_API_KEY` is set in Vercel production (if forms fail in prod)
- Fundraising platform URL → `DONATE_URL`
- EIN + legal documents for Legal & Resources
- Mission-driven Our Story image (replace `farming-hands.jpg`)
- Full role descriptions in `src/data/roles.ts`
- Texas (or other) policy briefs when ready

---

## 18. Assumptions in use (not explicitly confirmed by user)

- Tagline: "Educating Policymakers. Empowering Communities."
- Stats bar: 3 divisions, 2 states, 10+ roles, 100% volunteer-led
- Hero copy is not farmer-specific
- Legal & Resources at `/about/legal-resources` (linked from About + footer)

Revert any of these if the user asks.

---

## 19. Commit history (recent)

| Commit | Summary |
|--------|---------|
| `e53cd7b` | Big rebuild as The Legislative for Life Foundation |
| `f5da13a` | Wire contact + applications to Resend; rename two roles |
| `e5e78e3` | Privacy policy, security headers, robots/sitemap |
| `4ad3ae4` | Sitewide SEO metadata + JSON-LD |
| `c749579` | Trigger redeploy after repo visibility fix |
| `5e80cf5` | Foundation favicon (replace Vercel default) |
| `08e4c7b`–`7311d41` | Three Writing Team articles |
| `7263142` | Virginia policy brief (HTML) |
| `9e28666` | Virginia policy brief PDF viewer + download |

Always `git fetch` and check `origin/main` before assuming local is ahead. User sometimes pushes from GitHub web UI.

---

## 20. Windows / PowerShell gotchas

- `&&` does not work; use `;` (no short-circuit)
- Multi-line commit messages: write `.git/COMMIT_EDITMSG_TEMP`, then `git commit -F .git/COMMIT_EDITMSG_TEMP`
- Use `node node_modules/next/dist/bin/next ...` not `npm run`
- LF→CRLF warnings on `git add` are normal
- Remove empty dirs: `cmd /c "rmdir /s /q <dir>"`

---

## 21. Build verification

After substantive changes:

```powershell
node node_modules/next/dist/bin/next build
```

Last known clean build: **36+ static/SSG routes** (includes policy briefs, articles, roles, states). No TypeScript errors expected. If build breaks, paste the error to fix.

---

## 22. Key files quick reference

| Task | File(s) |
|------|---------|
| New article | `src/data/articles.ts` |
| New policy brief | `src/data/policy-briefs.ts`, `src/data/policy-brief-content/`, `public/policy-briefs/*.pdf` |
| New role | `src/data/roles.ts` |
| State research blurbs | `src/data/states.ts` |
| Site constants / nav | `src/lib/constants.ts` |
| SEO helpers | `src/lib/seo.ts` |
| Email forms API | `src/app/api/contact/route.ts`, `applications/route.ts` |
