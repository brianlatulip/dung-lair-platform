# Development workflow

## Current repository state

This setup contains product/architecture documentation and implementation boundaries. M0 will supply runnable Next.js and Go applications, PostgreSQL migrations, Dockerfiles, Docker Compose, and working CI. Do not run an invented bootstrap command against the current documentation-only foundation.

## M0 target

From a clean checkout, the documented setup should start web, API, and database using `docker compose up --build`. That command becomes supported only once the M0 Compose issue lands. Health/readiness and one browser-to-API check must prove the stack works.

Choose and pin supported Node, Go, PostgreSQL, package-manager, router, SQL access, and migration versions in implementation. Keep the frontend lockfile and Go module files in source control. The planning baseline deliberately does not freeze unverified version numbers.

## Configuration contract

Use environment-based configuration and a safe `.env.example` once names are finalized. Expected concerns include database connectivity, public base URL, Discord client ID/secret and callback URL, session settings, guild ID where needed, and notification credentials/channel. Only the selected transport’s secrets should be required.

Validate required values at startup, fail with useful redacted errors, and keep secrets out of browser bundles, logs, fixtures, issues and Git history. Never commit production `.env` files.

## Work on an issue

1. Select a Ready issue and read its linked architecture docs.
2. Create a focused branch; implement its acceptance criteria.
3. Run relevant checks and update contracts/diagrams for behavior changes.
4. Open a pull request with evidence and `Closes #<issue>` when it fully resolves the issue.
5. Move the issue through Review and Done only when the work meets the definition of done.

[Testing](testing.md) · [Project management](project-management.md) · [Deployment](deployment.md)
