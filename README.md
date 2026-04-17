# Legislate4Life

Website for Legislate4Life, a nonprofit advocacy organization promoting farmers' mental health.

Built with [Next.js](https://nextjs.org/) (App Router), [TypeScript](https://www.typescriptlang.org/), and [Tailwind CSS](https://tailwindcss.com/).

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
├── app/                    # Pages (Next.js App Router)
│   ├── layout.tsx          # Root layout — shared header & footer
│   ├── page.tsx            # Home page
│   ├── about/page.tsx      # About page
│   ├── get-involved/page.tsx
│   ├── contact/page.tsx
│   └── blog/
│       ├── page.tsx        # Blog listing
│       └── [slug]/page.tsx # Individual blog post
│
├── components/
│   ├── layout/             # Header, Footer, Navigation
│   ├── ui/                 # Reusable primitives (Button, Card, SectionHeading)
│   └── sections/           # Page-level sections (Hero, StatsBar, CTABanner, etc.)
│
├── lib/
│   ├── constants.ts        # Organization info, nav links, contact info
│   └── types.ts            # Shared TypeScript interfaces
│
└── data/
    └── blog-posts.ts       # Blog post content (swap for a CMS later)
```

### Key Architecture Decisions

- **App Router** — File-based routing with nested layouts. Each page is a directory under `src/app/`.
- **Server Components by default** — Pages and layout components render on the server. Only components that need interactivity (navigation, forms) are marked `"use client"`.
- **Centralized constants** — All organization info (name, links, contact) lives in `src/lib/constants.ts`. Update once, reflected everywhere.
- **Component layers** — Three levels of components:
  - `ui/` — Generic, reusable primitives (Button, Card)
  - `sections/` — Composed sections used in pages (Hero, CTABanner)
  - `layout/` — Structural components (Header, Footer)
- **Static blog data** — Blog posts are stored in `src/data/blog-posts.ts` as TypeScript objects. This makes it easy to swap in a CMS (Sanity, Contentful, etc.) later by changing only the data source.

## Pages

| Route             | Description                                    |
|-------------------|------------------------------------------------|
| `/`               | Home — hero, stats, featured posts, CTA        |
| `/about`          | Mission, vision, story, team                   |
| `/get-involved`   | Action cards, newsletter signup, CTA           |
| `/contact`        | Contact form, org details, crisis resources    |
| `/blog`           | Blog post listing                              |
| `/blog/[slug]`    | Individual blog post                           |

## Customization

### Colors

The color palette is defined in `src/app/globals.css` using Tailwind CSS v4's `@theme` syntax. The main palettes are:

- `primary-*` — Greens (brand color)
- `earth-*` — Warm earth tones
- `accent` — Highlight green

### Adding Blog Posts

Add new entries to the `blogPosts` array in `src/data/blog-posts.ts`. Each post needs a unique `slug`, `title`, `excerpt`, `date`, `author`, and `content`.

### Adding Team Members

Team members are defined in `src/app/about/page.tsx`. Add new entries to the `teamMembers` array.
