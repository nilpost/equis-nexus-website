# Cloudflare Deployment Guide

## Current configuration

- Production domain: `equis-nexus.com`
- Application hosting: OpenAI Sites
- DNS and HTTPS: Cloudflare
- Source provider: GitHub
- Production branch: `main`
- Repository: `equis-nexus-website`

The apex hostname uses the Sites-provided DNS records. Cloudflare proxying must
remain disabled for the two application A records so Sites can validate and
serve the custom hostname. Existing MX, SPF, DKIM, DMARC, and other mail records
must remain unchanged.

## Canonical-domain recommendation

Use `https://equis-nexus.com` as the canonical public address. Add a `www`
redirect only after the apex hostname is active and approved for public launch.

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
