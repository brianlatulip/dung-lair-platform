# Deployment and operations plan

**Target:** owner-managed Linux server, containers, PostgreSQL, and HTTPS reverse proxy. Caddy versus Nginx, DNS/domain, image registry, and release cadence remain open.

## Runtime responsibilities

Expose the web/proxy publicly; keep PostgreSQL on a private container/network interface. Route API/auth traffic to Go. Store secrets outside source control. Use least-privilege runtime/database credentials and persistent database storage. Define health/readiness checks and graceful shutdown behavior.

## Release procedure to implement in M3

1. Build immutable tagged artifacts after CI passes.
2. Verify configuration, release notes, and a recoverable database backup.
3. Apply reviewed migrations with explicit failure/rollback handling.
4. Deploy the version and check readiness.
5. Smoke-test public recruitment, Discord callback, applicant submission/status, and authorized officer review.
6. Check notification delivery and application/error logs.
7. Record version and result; roll back the application if needed, taking schema compatibility into account.

A database downgrade is not assumed safe. Prefer backward-compatible migrations and documented forward fixes; restore only under a planned recovery procedure.

## Observability

Structured logs include request IDs and domain event IDs, without answers, private notes, cookies, tokens, or secrets. Distinguish process liveness from database readiness. Track server errors and notification failures; define an owner-visible alert/recovery path before launch.

## Recovery gate

Document backup frequency/retention/access and perform a restore into an isolated environment. Confirm application data and history survive restore. Set recovery objectives with the owner; no invented availability promises are part of the MVP.

Rotate exposed credentials, revoke affected sessions, and use a private reporting path for vulnerabilities. [Release checklist](release-checklist.md)
