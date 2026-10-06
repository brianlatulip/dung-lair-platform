# Authentication and internal identity

**Accepted:** Discord is the initial identity provider. Dung Lair users have independent UUIDs; a Discord account is a linked identity. No local passwords are in the MVP.

## Proposed implementation contract

1. `GET /auth/discord` begins the authorization-code flow and binds an unpredictable, short-lived OAuth state to the initiating browser.
2. Discord returns to the configured callback. Go validates state, rejects missing/reused/expired state, and exchanges the code server-side.
3. Go retrieves the provider identity. A unique Discord user ID maps to one internal user; repeat login updates appropriate display metadata without creating a duplicate.
4. Go creates a server-side session and sets a Secure, HttpOnly cookie in production. The exact SameSite policy must support the chosen OAuth redirect flow.
5. `GET /api/v1/me` returns a minimal current-user representation and allowed capabilities. Every privileged request rechecks server-side authorization.
6. `POST /auth/logout` revokes the session and clears the cookie. Logout and other cookie-authenticated mutations require CSRF protection.

```mermaid
sequenceDiagram
  actor U as User
  participant W as Browser
  participant A as Go API
  participant D as Discord
  participant P as PostgreSQL
  U->>W: Sign in with Discord
  W->>A: GET /auth/discord
  A-->>W: Redirect with state
  W->>D: Authorize
  D-->>W: Callback code and state
  W->>A: GET /auth/discord/callback
  A->>A: Validate state
  A->>D: Exchange code; retrieve identity
  D-->>A: Discord identity
  A->>P: Resolve internal user; create session
  A-->>W: Session cookie and safe redirect
  W->>A: GET /api/v1/me
  A-->>W: Current user and capabilities
```

## Security and failure behavior

Session tokens are high-entropy opaque values; store hashes rather than raw usable tokens where feasible. Define idle/absolute expiry during M1. Rotate session identifiers at authentication and privilege-sensitive boundaries. Reject arbitrary external post-login redirects. Do not log codes, tokens, cookies, or secrets.

Request only the Discord scopes required by the selected behavior. Do not persist provider access/refresh tokens unless an approved integration needs them; if retained, encrypt and rotate them. Membership checks are distinct from identity and must not automatically grant Officer/Admin.

Provider denial, timeouts, mismatched state, database failures, and expired sessions produce safe, actionable UI without leaking credentials. Use deterministic provider fakes for tests and a manual Discord smoke test for the callback integration.

These security details are implementation guidance added to the accepted identity boundary; exact library choices remain open.
