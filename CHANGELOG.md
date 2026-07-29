# Changelog

All notable changes to the Equis Nexus website are documented here.

The project follows [Semantic Versioning](https://semver.org/). Dates use the
ISO `YYYY-MM-DD` format. Earlier entries summarize validated internal
development milestones; the public repository begins with version 0.5.0.

## [Unreleased]

### Added

- Reserved for changes that have not yet received a version.

## [0.6.0] - 2026-07-29

### Changed

- Migrated the production runtime from OpenAI Sites to an Equis Nexus-controlled
  Cloudflare Worker.
- Added a tracked Wrangler configuration and direct Cloudflare deployment
  scripts.
- Connected production builds to the public GitHub repository.
- Activated `equis-nexus.com` as the Worker's production custom domain.
- Preserved the canonical domain, multilingual routes, disclosure safeguards,
  and investor-preview behavior.
- Updated architecture, deployment, ownership, and operational documentation.

### Removed

- Removed OpenAI Sites project metadata and its packaging helper.
- Removed the unused image-optimization binding path so the Worker requires no
  Cloudflare Images subscription.

### Security

- Preserved all existing email DNS records during the application cutover.
- Kept Cloudflare account identifiers, OAuth credentials, and deployment tokens
  outside the repository.
- Verified successful production responses from Japan and three independent
  Hong Kong networks after global routing propagation completed.

## [0.5.1] - 2026-07-29

### Changed

- Made the hosted website publicly accessible at `https://equis-nexus.com`.
- Confirmed HTTP-to-HTTPS routing and anonymous access to the English, Catalan,
  Spanish, Japanese, portfolio, and investor-preview routes.
- Kept the investor page as a non-authenticating preview with no form-data
  storage or transmission.

## [0.5.0] - 2026-07-29

### Added

- Comprehensive public-facing README.
- Architecture and system-boundary documentation.
- Public repository and website publication checklist.
- Security reporting and contribution policies.
- CODEOWNERS assignment and explicit ownership metadata.
- Incremental changelog and versioning policy.
- Tracked Sites build helper required for reproducible clean-clone builds.

### Changed

- Removed the precise registered-office and unit address from the current
  company-information source.
- Updated repository description, homepage, and topic metadata.
- Updated production and development dependencies to security-fixed versions.
- Simplified the ESLint configuration around supported, directly declared
  packages.

### Security

- Confirmed zero known production and development dependency vulnerabilities.
- Reviewed the current source and historical repository for credentials,
  financial records, personal data, exact property details, and private keys.

## [0.4.0] - 2026-07-29

### Added

- Complete English, Catalan, Spanish, and Japanese page routes.
- Browser-language detection with English fallback.
- Manual language selector with an on-device preference.
- Localized metadata, canonical links, and language alternates.
- Multilingual social-sharing artwork.

### Changed

- Consolidated localized pages into shared homepage, portfolio, and
  investor-preview components.

## [0.3.0] - 2026-07-29

### Added

- Typed property portfolio and disclosure model.
- Jingumae Residence public portfolio experience.
- Performance-methodology presentation with approval safeguards.
- Browser-only investor-access preview.
- Privacy, valuation, unaudited-data, forward-looking, and
  non-solicitation notices.

### Security

- Added tests preventing exact address, financing, and unapproved performance
  data from entering rendered public pages.
- Confirmed the investor preview stores and transmits no form values.

## [0.2.0] - 2026-07-29

### Changed

- Reframed the company site around Equis Nexus’s documented Japanese
  real-estate purpose.
- Added the long-term cross-border investment and enterprise vision.
- Added the official Equis Nexus name story: intersection and connection.

## [0.1.0] - 2026-07-28

### Added

- Initial Equis Nexus repository and company website foundation.
- Corporate mission, focus, principles, company information, and contact path.
- Next.js-compatible React, Vinext, Vite, and Cloudflare Workers build.
- Private OpenAI Sites deployment configuration.
