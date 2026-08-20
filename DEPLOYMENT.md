# Deployment & Migration Guide

This document describes how to run **Shams Consult** independently of Lovable
(own Supabase project + own hosting, e.g. Vercel).

## Tech stack

| Layer | Technology |
| --- | --- |
| Framework | TanStack Start v1 (React 19, SSR + server functions) |
| Build | Vite 8 + Nitro (edge/serverless output) |
| Styling | Tailwind CSS v4 (`src/styles.css`) |
| Data / Auth | Supabase (Postgres, Auth, RLS) |
| Content | Static TS modules (`src/lib/blog.ts`, `src/lib/projects.ts`) |
| Images | Local files in `public/images/` |

Only the **comments + moderation** feature needs a backend. Everything else
(all pages, blog posts, projects, images) is static and runs anywhere.

## Step 1 — GitHub

In the Lovable editor: **GitHub → Connect** and push the repo. From then on the
repository is the source of truth; you can keep editing in Lovable or locally.

Local dev:

```bash
bun install     # or npm install
bun run dev     # http://localhost:8080
```

## Step 2 — Your own Supabase project

1. Create a project at supabase.com (free tier is enough for this site).
2. Install the CLI and link it:

   ```bash
   npm i -g supabase
   supabase login
   supabase link --project-ref <your-new-project-ref>
   ```

3. Apply the existing schema — the three files in `supabase/migrations/`
   contain the full definition (`blog_comments`, `user_roles`, the `app_role`
   enum, the `has_role()` function, all grants and RLS policies):

   ```bash
   supabase db push
   ```

4. Create your admin user in the new project (Authentication → Users → Add
   user, email + password, "auto confirm"), then grant the role in the SQL
   editor:

   ```sql
   insert into public.user_roles (user_id, role)
   values ('<the-new-user-uuid>', 'admin');
   ```

### Moving existing comments (optional)

If there are approved comments worth keeping, export them from the current
backend (Cloud → Advanced settings → Export data) and insert the
`blog_comments` rows into the new project. The table has no foreign keys, so a
plain CSV import works.

## Step 3 — Environment variables

Set these in Vercel (Project → Settings → Environment Variables) for
Production **and** Preview:

| Variable | Value | Scope |
| --- | --- | --- |
| `VITE_SUPABASE_URL` | `https://<ref>.supabase.co` | client |
| `VITE_SUPABASE_PUBLISHABLE_KEY` | publishable / anon key | client |
| `VITE_SUPABASE_PROJECT_ID` | `<ref>` | client |
| `SUPABASE_URL` | same as above | server |
| `SUPABASE_PUBLISHABLE_KEY` | same as above | server |
| `SUPABASE_SERVICE_ROLE_KEY` | **service role key from your own project** | server only |

The service role key is required by `src/integrations/supabase/client.server.ts`,
which the comment insert in `src/lib/comments.functions.ts` uses. It must never
be prefixed with `VITE_`.

## Step 4 — Build target (already configured)

`vite.config.ts` picks the deploy target automatically:

- On Lovable, the platform pins the Cloudflare preset (unchanged).
- On Vercel, the `VERCEL` env var is present during the build, so the `vercel`
  Nitro preset is used and the Build Output API bundle is written to
  `.vercel/output`.
- Anywhere else you can force a target with `NITRO_PRESET=<preset>`.

`vercel.json` is committed with the matching settings, so importing the repo in
Vercel needs no manual configuration:

- Framework preset: **Other** (`"framework": null`)
- Build command: `npm run build`
- Output directory: `.vercel/output`
- Region: `fra1` (change if you prefer another region)
- Node version: 20 or newer (Vercel Project → Settings → General)

Copy `.env.example` to `.env` for local runs and add the same variables in
Vercel before the first deploy.


Cloudflare Pages/Workers is the alternative — that preset already works with no
config change.

## Step 5 — Domain & SEO

`src/lib/site.ts` holds `SITE_URL = "https://shams-consult.de"`. It feeds every
canonical tag, Open Graph URL and the sitemap. Keep it in sync with the domain
you actually serve, then point the DNS record at the host and submit
`https://shams-consult.de/sitemap.xml` in Google Search Console.

## Step 6 — Verify after the move

- `/` and all content pages render (SSR, no hydration warnings in the console)
- `/blog` lists posts and `/blog/<slug>` opens a single post
- Posting a comment succeeds and stores it with `approved = false`
- `/auth` login works, `/moderation` lists comments and approve/delete work
- `/sitemap.xml` and `/robots.txt` return the new domain
- Lighthouse: performance, SEO and accessibility unchanged

## Independence checklist

- [x] Content is in the repo (Markdown/TS), not in a CMS
- [x] Images are local in `public/images/`
- [x] Database schema is versioned in `supabase/migrations/`
- [x] Supabase is open source and self-hostable
- [x] Hosting is swappable via one Nitro preset line
