# HTTP API blueprint

**Accepted:** REST over HTTP/JSON, versioned under `/api/v1`. OAuth browser endpoints live under `/auth`. These routes are planned contracts and must be formalized during implementation.

| Method | Route | Access | Purpose |
| --- | --- | --- | --- |
| GET | `/healthz` | Operational | Process liveness; no secrets |
| GET | `/readyz` | Operational | Readiness including required DB availability |
| GET | `/auth/discord` | Public | Begin OAuth |
| GET | `/auth/discord/callback` | Public callback + state validation | Complete OAuth |
| POST | `/auth/logout` | Session + CSRF protection | Revoke session |
| GET | `/api/v1/me` | Authenticated | Minimal current user/capabilities |
| GET | `/api/v1/recruitment` | Public | Recruitment needs |
| POST | `/api/v1/applications` | `applications:create` | Validate and submit application |
| GET | `/api/v1/applications/me` | `applications:read_own` | Own applications/status |
| GET | `/api/v1/admin/applications` | `applications:read_all` | Paginated/filterable queue |
| GET | `/api/v1/admin/applications/:id` | `applications:read_all` | Officer detail/history |
| PATCH | `/api/v1/admin/applications/:id/status` | `applications:review` | Validated, audited transition |
| POST | `/api/v1/admin/applications/:id/comments` | `applications:comment` | Private officer note |
| PATCH | `/api/v1/admin/recruitment/:id` | `recruitment:update` | Update recruitment need |

The last recruitment route and health/readiness names are setup proposals. Draft/withdraw endpoints are added only after workflow policy is settled. Admin access management can start with a documented privileged command; an admin CRUD API is not assumed.

## Contract conventions

- Return JSON with stable identifiers and RFC 3339 timestamps; Discord IDs are strings.
- Validate types, lengths, enum values, and ownership on the server.
- Use bounded pagination and a stable ordering for lists; document filters.
- Use `401` for missing/invalid authentication, `403` for denied permissions, and an intentional `404` policy where object existence should be hidden.
- Use `409` for stale review versions or conflicting state; use a consistent validation response such as `422` for valid JSON that fails field rules.
- Do not expose internal stack traces, database errors, provider tokens, or private officer data.
- Define an idempotency/retry strategy for form submissions and notification scheduling.

Proposed error shape:

```json
{
  "error": {
    "code": "validation_failed",
    "message": "Review the highlighted fields.",
    "fields": { "character_name": "Required" },
    "request_id": "opaque-request-id"
  }
}
```

Publish a machine-readable contract when handlers are implemented, then test frontend/backend compatibility. Do not generate a misleading complete OpenAPI specification before request and response fields are resolved.
