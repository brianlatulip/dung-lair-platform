# Authorization and private data

**Accepted:** internal RBAC independent of Discord. A User receives Roles, and Roles grant Permissions. Guest is an unauthenticated principal, not a database user. Applicant is a workflow persona using the User role; Member is not an additional required MVP role.

| Capability | Guest | User | Officer | Admin |
| --- | --- | --- | --- | --- |
| Public pages / recruitment | Yes | Yes | Yes | Yes |
| Create application / read own | No | Yes | Yes | Yes |
| Read all applications | No | No | Yes | Yes |
| Review status | No | No | Yes | Yes |
| Read/write internal comments | No | No | Yes | Yes |
| Update recruitment | No | No | Yes | Yes |
| Manage users/access/settings | No | No | No | Yes |

Permissions: `applications:create`, `applications:read_own`, `applications:read_all`, `applications:review`, `applications:comment`, `recruitment:update`, `admin:users`, `admin:settings`.

The role mapping above is the initial implementation proposal consistent with the agreed personas. Encode mappings centrally and test them. Applicant ownership is checked in addition to authentication. Return an intentionally limited applicant representation; never fetch a staff DTO and merely hide its notes in the browser.

## Enforcement

- Default deny for protected routes and service actions.
- Enforce permissions and object ownership server-side on every request.
- Check administrative changes against the current stored policy; do not trust role claims supplied by the browser.
- Protect role changes from self-promotion and accidental removal of the final administrator.
- Audit grants/revocations and document the initial Admin bootstrap.
- Discord role sync is deferred; Discord role names never become authorization checks scattered across the codebase.

Negative tests must cover anonymous access, one applicant reading another’s record, User calling staff routes, private notes in JSON/history exports, and role revocation during an existing session.
