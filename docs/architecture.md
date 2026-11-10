# Architecture

## Layout

```text
apps/marketing          Next.js App Router marketing site
packages/design-tokens  Brand colours and Tailwind preset
packages/validation     Shared Zod schemas (contact form)
docs/                   Repo documentation
infrastructure/         Manual Hostinger/VPS deploy stubs (not applied)
```

## Runtime model

- Prefer static generation for marketing pages.
- Dynamic segments (`products`, `services`, `industries`, `insights`) use `generateStaticParams`.
- Contact form posts to `/api/contact`. Without `CONTACT_WEBHOOK_URL`, validated payloads are logged server-side for local/dev use.

## Content model

Page copy lives in `apps/marketing/src/content/*` so routes stay thin and sitemap coverage is easy to test.

## Out of scope for this phase

- No Hostinger SSH, DNS changes, or production cutover.
- No product production databases.
