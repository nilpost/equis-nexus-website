# Versioning and Release History

## Version format

The project uses `MAJOR.MINOR.PATCH` versions:

- **MAJOR** — incompatible architecture, disclosure, or public-interface change
- **MINOR** — new pages, languages, portfolio capabilities, or material
  documentation
- **PATCH** — compatible fixes, copy corrections, security patches, and routine
  maintenance

The current version must match in:

- `package.json`
- `package-lock.json`
- `project-manifest.json`
- `CHANGELOG.md`

## Change documentation

Every meaningful change begins under `Unreleased` in `CHANGELOG.md`.

When preparing a release:

1. Review the change for privacy and publication approval.
2. Move the relevant `Unreleased` entries into a dated version section.
3. Update the version in all manifests.
4. Run linting, tests, and production and development dependency audits.
5. Merge through a reviewed pull request.
6. Deploy the exact validated commit when the website runtime changed.

## Public history

Version 0.5.0 is the first public-source snapshot. Versions 0.1.0 through 0.4.0
are documented milestones reconstructed from the validated private development
history. Their original commits and pull-request discussions remain in the
private archive because those records contain information intentionally omitted
from the public repository.

## Relationship to deployment

A repository version and a Sites deployment are related but distinct:

- A version records the state and meaning of the source.
- A deployment makes one exact source commit active on the hosted website.
- Repository visibility does not change website access.
- Website access remains owner-only until separately approved.
