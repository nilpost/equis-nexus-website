# Cloudflare Deployment Guide

## Current configuration

- Production domain: `equis-nexus.com`
- Application hosting: Cloudflare Workers
- DNS, custom-domain routing, and HTTPS: Cloudflare
- Source provider: GitHub
- Production branch: `main`
- Repository: `equis-nexus-website`
- Worker: `equis-nexus`
- Production status: active and externally verified on 2026-07-29

The Worker is connected to the GitHub repository through Cloudflare Workers
Builds. A merge to `main` creates the production build. Pull-request branches
may create preview versions without changing the production route.

The apex hostname is assigned to the Worker as a Cloudflare custom domain.
Existing MX, SPF, DKIM, DMARC, and other mail records are outside the
application deployment and must remain unchanged.

The former OpenAI Sites deployment is no longer assigned to the canonical
domain. It is retained only as a rollback copy and does not serve production
traffic.

## Build and deployment

Cloudflare uses:

- Build command: `npm run build`
- Deploy command: `npm run deploy:built`
- Preview deploy command: `wrangler versions upload`

The Vite plugin creates the Workers deployment output and static-asset
configuration. `wrangler.jsonc` supplies the Worker name, entry point,
compatibility date, and runtime flags.

Before switching the custom domain:

1. Validate linting, tests, and dependency audits locally.
2. Deploy and verify the generated `workers.dev` address.
3. Confirm all twelve localized routes and public-disclosure tests.
4. Record the current application DNS records for rollback.
5. Attach `equis-nexus.com` to the Worker.
6. Verify HTTPS and availability from Japan and Hong Kong.

The 2026-07-29 migration completed this sequence. All public route families
returned HTTP 200 from the production domain, followed by HTTP 200 responses
from three independent Hong Kong networks after edge propagation completed.

## Rollback

Cloudflare keeps previous Worker versions available for rollback. If the custom
domain must be returned to the former host, restore only the recorded
application A records. Do not alter mail or verification records.

## Canonical-domain recommendation

Use `https://equis-nexus.com` as the canonical public address. A `www` redirect
may be added separately after the apex hostname is verified.

## Email-domain note

The supplied contact address is:

- `icontact@equis-nexus.com`

The website and contact email use the same hyphenated domain:
`equis-nexus.com`.

## Secrets and environment variables

Keep credentials in Cloudflare project settings or an approved secrets manager. Never commit:

- Cloudflare API tokens
- GitHub tokens
- Account identifiers that are intended to remain private
- Email-service credentials
- Analytics or third-party private keys

## Pre-launch checklist

- [ ] Approved website copy
- [ ] Correct legal entity details
- [ ] Correct contact email
- [ ] Privacy notice and terms, if required
- [ ] Working contact links or form
- [ ] Mobile and desktop checks
- [ ] Accessible headings, landmarks, contrast, and keyboard use
- [ ] Page title, description, canonical URL, and social-sharing metadata
- [ ] Favicon and application icons
- [ ] HTTPS active
- [ ] `www` redirect active
- [ ] Error page configured
- [ ] Analytics and cookie consent reviewed
- [ ] No secrets in the repository or built files
