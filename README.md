# The Legislative for Life Foundation

Website for The Legislative for Life Foundation, a nonprofit dedicated to public
policy research, education, and civic engagement.

Built with [Next.js](https://nextjs.org/) (App Router), [TypeScript](https://www.typescriptlang.org/),
and [Tailwind CSS](https://tailwindcss.com/).

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 18.17 or later

### Install & Run

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/                          # Pages (Next.js App Router)
│   ├── layout.tsx                # Root layout: shared header, footer, crisis popup
│   ├── page.tsx                  # Home page
│   ├── about/
│   │   ├── page.tsx              # About + Our Departments + Our Story
│   │   └── legal-resources/      # Foundation docs, EIN, handbook info
│   ├── policy/
│   │   ├── page.tsx              # Policy index (current + developing focus areas)
│   │   └── [state]/page.tsx      # Per-state research and recommendations
│   ├── join-us/
│   │   ├── page.tsx              # Open roles directory + other ways to help
│   │   └── [role]/page.tsx       # Individual role description + application form
│   ├── writing/
│   │   ├── page.tsx              # Article listing
│   │   └── [slug]/page.tsx       # Individual article
│   └── contact/page.tsx          # Contact form + crisis support
│
├── components/
│   ├── layout/                   # Header, Footer, Navigation
│   ├── ui/                       # Button, Card, SectionHeading
│   └── sections/                 # Hero, StatsBar, CTABanner, CrisisSupport,
│                                 # CrisisSupportPopup, NewsletterForm,
│                                 # ContactForm, JoinUsForm, ArticleCard
│
├── lib/
│   ├── constants.ts              # Org name, nav, contact, social, donate URL
│   └── types.ts                  # Shared TypeScript interfaces
│
└── data/
    ├── articles.ts               # Article content (swap for a CMS later)
    ├── states.ts                 # Per-state policy research content
    └── roles.ts                  # Open positions: leadership, research, civic
```

### Key Architecture Decisions

- **App Router** with file-based routing and nested layouts.
- **Server Components by default**; only interactive components (navigation,
  crisis popup, forms) are marked `"use client"`.
- **Centralized constants** in `src/lib/constants.ts`: update the org name,
  contact email, donate URL, or social links there once and they update everywhere.
- **Three data files** (`articles.ts`, `states.ts`, `roles.ts`) act as a simple
  CMS today and are easy to swap for a real CMS later.
- **Dismissible crisis popup** lives in the root layout and uses `sessionStorage`
  so it stays dismissed for the current visit only.

## Customizing Content

### Adding an article

Add a new entry at the top of the `articles` array in `src/data/articles.ts`.
Each article needs `slug`, `title`, `excerpt`, `date`, `author`, and `content`.

### Adding or updating a role

Edit `src/data/roles.ts`. Roles are grouped by `category`:
`leadership`, `research-writing`, or `civic-affairs`.

### Updating policy focus areas

Edit `src/data/states.ts`. Each state has a `status` of either `active` (current
research focus) or `developing` (future expansion).

### Linking the Donate button

Update `DONATE_URL` in `src/lib/constants.ts` once the fundraising platform
link is ready.

## Wiring up forms

The contact form, application form, and newsletter form are UI-only today.
To wire them to real backends:

- **Contact + applications:** integrate [Resend](https://resend.com/) (or
  similar) and a Next.js Route Handler at `src/app/api/contact/route.ts`.
- **Newsletter:** point the form at a hosted provider like
  [Beehiiv](https://www.beehiiv.com/), Mailchimp, or Substack.

## Colors

The color palette is defined in `src/app/globals.css` using Tailwind CSS v4's
`@theme` syntax. The main palettes are:

- `ink-*` for deep charcoal grays (foreground / dark sections)
- `gold-*` for brand gold accents
- `cream-*` for warm light backgrounds
