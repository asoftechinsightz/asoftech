# Infrastructure stubs (manual Hostinger deploy later)

These notes are placeholders only. Do **not** apply them in this phase. No SSH to Hostinger, no VPS changes, no DNS/MX edits, and no production cutover until founder gates are complete.

## Intended later shape

- Ubuntu VPS on Hostinger
- Nginx reverse proxy terminating TLS for `www.asoftechinsightz.com`
- Node process or container running `apps/marketing` (`next start` or equivalent)
- Apex `asoftechinsightz.com` redirect to canonical `www` after DNS/SSL verification

## Stub files

- `nginx/asoftechinsightz.conf.example` — example server blocks
- `docker/Dockerfile.example` — example production image build
- `scripts/deploy-notes.md` — manual checklist only

Replace only the confirmed old marketing website after GATE A–E approvals documented in project context.
