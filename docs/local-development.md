# Local development

## Requirements

- Node.js 20+
- npm 10+

## Setup

```bash
npm install
cp apps/marketing/.env.example apps/marketing/.env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts (repo root)

| Script | Purpose |
| --- | --- |
| `npm run dev` | Start marketing app |
| `npm run build` | Production build |
| `npm run start` | Serve production build |
| `npm run lint` | ESLint |
| `npm run typecheck` | TypeScript `--noEmit` |
| `npm run test` | Vitest content/validation checks |

## Contact form

- Local/dev without `CONTACT_WEBHOOK_URL`: submissions are validated and logged to the server console.
- To forward enquiries later, set `CONTACT_WEBHOOK_URL` to an HTTPS endpoint that accepts JSON.
