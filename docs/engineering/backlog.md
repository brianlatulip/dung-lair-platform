# MVP implementation backlog

Stable planning IDs map to GitHub issues after publication. Dependencies are prerequisites, not a claim that all work is serial. All listed work is required for the agreed MVP; no dates or assignments have been invented.

## M0 — Foundation

### F01 — Establish repository documentation and delivery conventions

[GitHub issue #1](https://github.com/brianlatulip/dung-lair-platform/issues/1)

**Area:** documentation · **Priority:** P0 · **Dependencies:** None

- [ ] Product, architecture, Mermaid diagrams and ADRs are published
- [ ] Issue templates, milestone gates and project conventions are linked from README
- [ ] Implementation backlog is traceable to the accepted MVP without marking product features complete

[Design reference](../../docs/README.md)

### F02 — Scaffold the Next.js and TypeScript frontend

[GitHub issue #2](https://github.com/brianlatulip/dung-lair-platform/issues/2)

**Area:** frontend · **Priority:** P0 · **Dependencies:** F01

- [ ] Pinned toolchain and lockfile produce a reproducible frontend build
- [ ] Next.js routes and feature folders follow the documented domain structure
- [ ] Basic layout includes accessible navigation and a documented local command

[Design reference](../../docs/architecture/modules.md)

### F03 — Scaffold the Go API and domain composition root

[GitHub issue #3](https://github.com/brianlatulip/dung-lair-platform/issues/3)

**Area:** backend · **Priority:** P0 · **Dependencies:** F01

- [ ] Go module and supported version are pinned
- [ ] API entrypoint wires domain services and HTTP transport without cross-module repository imports
- [ ] Health endpoint and a meaningful HTTP smoke test run using documented commands

[Design reference](../../docs/architecture/modules.md)

### F04 — Add PostgreSQL migrations and database foundations

[GitHub issue #4](https://github.com/brianlatulip/dung-lair-platform/issues/4)

**Area:** database · **Priority:** P0 · **Dependencies:** F03

- [ ] Select and document migration/query tooling
- [ ] Versioned migration runner applies successfully to a clean test database
- [ ] Connection lifecycle, rollback/failure behavior and local reset workflow are documented

[Design reference](../../docs/architecture/data-model.md)

### F05 — Create the local Docker Compose development stack

[GitHub issue #5](https://github.com/brianlatulip/dung-lair-platform/issues/5)

**Area:** infrastructure · **Priority:** P0 · **Dependencies:** F02, F03, F04

- [ ] Clean checkout starts web, API and PostgreSQL with documented Compose commands
- [ ] Persistent development database and readiness ordering work
- [ ] Safe example configuration and setup instructions contain no real secrets

[Design reference](../../docs/engineering/development.md)

### F06 — Implement validated configuration, structured logs and health checks

[GitHub issue #6](https://github.com/brianlatulip/dung-lair-platform/issues/6)

**Area:** backend · **Priority:** P0 · **Dependencies:** F03, F04

- [ ] Missing required configuration fails with a redacted actionable error
- [ ] Structured requests include correlation IDs without secrets or applicant data
- [ ] Liveness and DB-aware readiness distinguish healthy, starting and unavailable states

[Design reference](../../docs/engineering/deployment.md)

### F07 — Add CI for frontend, backend and migration checks

[GitHub issue #7](https://github.com/brianlatulip/dung-lair-platform/issues/7)

**Area:** infrastructure · **Priority:** P0 · **Dependencies:** F02, F03, F04

- [ ] Pull requests run the actual frontend build/type checks and Go tests
- [ ] Migration integration checks use an isolated PostgreSQL service
- [ ] Required check commands are documented and a failing check is visibly detected

[Design reference](../../docs/engineering/testing.md)

### F08 — Build public guild pages and approve MVP content

[GitHub issue #8](https://github.com/brianlatulip/dung-lair-platform/issues/8)

**Area:** frontend · **Priority:** P0 · **Dependencies:** F02

- [ ] Home, About, Recruitment and Apply entry are navigable and responsive
- [ ] Guild copy, branding and Discord invite/contact information are approved before publication
- [ ] Recruitment UI uses an API boundary with loading and empty states; no sample priorities are presented as live guild facts

[Design reference](../../docs/product/mvp.md)

## M1 — Identity

### I01 — Resolve Discord membership and initial administrator policies

[GitHub issue #9](https://github.com/brianlatulip/dung-lair-platform/issues/9)

**Area:** backend · **Priority:** P0 · **Dependencies:** F01

- [ ] Record whether guild membership gates login or application submission
- [ ] Document least-privilege OAuth scopes and confirm no automatic joining without explicit product approval
- [ ] Define verified initial Admin bootstrap and safe ongoing role-management mechanism

[Design reference](../../docs/product/open-questions.md)

### I02 — Implement internal users and linked Discord identities

[GitHub issue #10](https://github.com/brianlatulip/dung-lair-platform/issues/10)

**Area:** database · **Priority:** P0 · **Dependencies:** F04, I01

- [ ] Users and Discord-account migrations enforce unique provider identity and FKs
- [ ] Repeat identity resolution returns the same internal UUID even if Discord display name changes
- [ ] Provider IDs remain strings at JSON boundaries and duplicate/concurrent login behavior is tested

[Design reference](../../docs/architecture/data-model.md)

### I03 — Implement Discord OAuth login and callback handling

[GitHub issue #11](https://github.com/brianlatulip/dung-lair-platform/issues/11)

**Area:** discord · **Priority:** P0 · **Dependencies:** I02, F06

- [ ] Authorization-code flow validates expiring one-time browser-bound state
- [ ] Callback handles denied consent, mismatched state and provider failures safely
- [ ] Successful login resolves the internal user; secrets and tokens never reach browser bundles/logs

[Design reference](../../docs/architecture/authentication.md)

### I04 — Implement server-side sessions, logout and current-user API

[GitHub issue #12](https://github.com/brianlatulip/dung-lair-platform/issues/12)

**Area:** backend · **Priority:** P0 · **Dependencies:** I03

- [ ] Session cookies, expiry and revocation are implemented and tested
- [ ] GET /api/v1/me returns a minimal authorized principal
- [ ] Logout and authenticated mutations have CSRF protection; expired/revoked sessions cannot access protected routes

[Design reference](../../docs/architecture/authentication.md)

### I05 — Implement internal roles, permissions and administrative bootstrap

[GitHub issue #13](https://github.com/brianlatulip/dung-lair-platform/issues/13)

**Area:** backend · **Priority:** P0 · **Dependencies:** I02, I04, I01

- [ ] Roles/permissions and initial mappings are seeded deterministically
- [ ] Server enforces permission and ownership checks independently of Discord roles
- [ ] Bootstrap and role changes are audited; self-promotion and final-admin lockout are prevented and tested

[Design reference](../../docs/architecture/authorization.md)

### I06 — Add sign-in UX and protected applicant/officer routes

[GitHub issue #14](https://github.com/brianlatulip/dung-lair-platform/issues/14)

**Area:** frontend · **Priority:** P0 · **Dependencies:** I04, I05, F08

- [ ] UI displays authenticated state and offers logout with clear failures
- [ ] Anonymous and unauthorized users receive appropriate login/denied experiences
- [ ] Officer navigation and direct routes respect capabilities while the API remains authoritative

[Design reference](../../docs/architecture/authorization.md)

## M2 — Applications

### A01 — Finalize application form and workflow policies

[GitHub issue #15](https://github.com/brianlatulip/dung-lair-platform/issues/15)

**Area:** backend · **Priority:** P0 · **Dependencies:** I01

- [ ] Specify required fields, lengths and valid class/spec/level values
- [ ] Resolve draft saving, withdrawal, duplicate active applications, resubmission and reopening
- [ ] Approve exact state transitions, submitted-answer edit policy and applicant-visible history; update docs before dependent implementation

[Design reference](../../docs/architecture/applications.md)

### A02 — Persist applications and audit events transactionally

[GitHub issue #16](https://github.com/brianlatulip/dung-lair-platform/issues/16)

**Area:** database · **Priority:** P0 · **Dependencies:** A01, F04, I02

- [ ] Migrations include application ownership, agreed statuses, answer/form version and indexes
- [ ] Submission/history writes commit atomically and database constraints enforce agreed uniqueness
- [ ] Concurrent writes and failure rollback have integration coverage using synthetic data

[Design reference](../../docs/architecture/data-model.md)

### A03 — Implement validated application submission and own-status API

[GitHub issue #17](https://github.com/brianlatulip/dung-lair-platform/issues/17)

**Area:** backend · **Priority:** P0 · **Dependencies:** A02, I05

- [ ] Authenticated applicant can submit valid answers and retrieve only their own application
- [ ] Server rejects invalid fields and unauthorized ownership access
- [ ] Submission retries cannot accidentally create duplicate active applications under the approved policy

[Design reference](../../docs/architecture/api.md)

### A04 — Build the application form and applicant status experience

[GitHub issue #18](https://github.com/brianlatulip/dung-lair-platform/issues/18)

**Area:** frontend · **Priority:** P0 · **Dependencies:** A03, I06

- [ ] Form includes approved fields and automatic Discord identity
- [ ] Validation, submission, retry and success states preserve appropriate user input
- [ ] Applicant can revisit their persisted status; private officer notes are never returned or rendered

[Design reference](../../docs/product/mvp.md)

### A05 — Implement officer queue, detail and audited status transitions

[GitHub issue #19](https://github.com/brianlatulip/dung-lair-platform/issues/19)

**Area:** backend · **Priority:** P0 · **Dependencies:** A02, I05

- [ ] Officer API supports bounded pagination and agreed status filters
- [ ] Authorized transitions atomically update state and record actor/time/history
- [ ] Illegal transitions, unauthorized requests and stale concurrent reviews fail without corrupting history

[Design reference](../../docs/architecture/applications.md)

### A06 — Implement private officer comments and safe history representations

[GitHub issue #20](https://github.com/brianlatulip/dung-lair-platform/issues/20)

**Area:** backend · **Priority:** P0 · **Dependencies:** A05

- [ ] Authorized officers can add/read private comments with author and timestamp
- [ ] Applicant responses, histories and errors omit private comments and staff-only metadata
- [ ] Cross-user and non-officer access tests cover both list/detail and comment endpoints

[Design reference](../../docs/architecture/authorization.md)

### A07 — Build the officer application review dashboard

[GitHub issue #21](https://github.com/brianlatulip/dung-lair-platform/issues/21)

**Area:** frontend · **Priority:** P0 · **Dependencies:** A05, A06, I06

- [ ] Queue offers status filters and accessible pagination/loading/empty states
- [ ] Detail shows answers, identity, authorized history and private notes
- [ ] Review controls handle successful decisions, permission denial and concurrent changes without misleading success

[Design reference](../../docs/architecture/applications.md)

### A08 — Verify the complete application journey and privacy boundaries

[GitHub issue #22](https://github.com/brianlatulip/dung-lair-platform/issues/22)

**Area:** backend · **Priority:** P0 · **Dependencies:** A04, A07

- [ ] End-to-end applicant submission/status and officer review paths pass
- [ ] Negative tests prove another applicant and ordinary User cannot read staff data
- [ ] Withdrawal/draft behavior is tested if included by approved policy; acceptance evidence is linked to MVP requirements

[Design reference](../../docs/engineering/testing.md)

## M3 — Discord + Polish

### D01 — Choose Discord notification transport and recovery semantics

[GitHub issue #23](https://github.com/brianlatulip/dung-lair-platform/issues/23)

**Area:** discord · **Priority:** P0 · **Dependencies:** A03

- [ ] Select webhook or bot adapter and document least-privilege configuration
- [ ] Define crash/retry recovery, deduplication limitations and operator visibility
- [ ] No external broker or automatic membership/role assignment is introduced as an MVP prerequisite

[Design reference](../../docs/architecture/discord.md)

### D02 — Deliver application notifications to the officer Discord channel

[GitHub issue #24](https://github.com/brianlatulip/dung-lair-platform/issues/24)

**Area:** discord · **Priority:** P0 · **Dependencies:** D01, A03

- [ ] Only committed submissions produce minimal protected-link notifications
- [ ] Provider timeouts/rate limits, retries and restart recovery follow the approved contract
- [ ] Failed delivery never rolls back an application; unsafe mentions and private answers are excluded

[Design reference](../../docs/architecture/discord.md)

### D03 — Implement persisted recruitment needs and officer updates

[GitHub issue #25](https://github.com/brianlatulip/dung-lair-platform/issues/25)

**Area:** backend · **Priority:** P0 · **Dependencies:** F04, I05

- [ ] Recruitment schema/API expose agreed need statuses using actual approved guild data
- [ ] Officer updates require recruitment:update and persist with actor/time
- [ ] Anonymous writes fail; public read and invalid-value handling are tested

[Design reference](../../docs/architecture/api.md)

### D04 — Connect public recruitment and officer recruitment controls

[GitHub issue #26](https://github.com/brianlatulip/dung-lair-platform/issues/26)

**Area:** frontend · **Priority:** P0 · **Dependencies:** D03, F08, I06

- [ ] Public Recruitment page reflects persisted needs
- [ ] Authorized officers can update needs and see saved results
- [ ] Responsive layout and loading/empty/validation/permission failures work without hardcoded live priorities

[Design reference](../../docs/product/mvp.md)

### D05 — Polish responsive, accessible and failure-state UX

[GitHub issue #27](https://github.com/brianlatulip/dung-lair-platform/issues/27)

**Area:** frontend · **Priority:** P0 · **Dependencies:** A04, A07, D04

- [ ] Core journeys work on narrow and wide viewports with keyboard navigation and labeled controls
- [ ] Loading, empty, validation, unauthorized and server-failure states are consistent
- [ ] Public copy and all navigation links are reviewed; no placeholder content remains in release UI

[Design reference](../../docs/engineering/testing.md)

### D06 — Deploy the MVP to Linux with HTTPS and operational visibility

[GitHub issue #28](https://github.com/brianlatulip/dung-lair-platform/issues/28)

**Area:** infrastructure · **Priority:** P0 · **Dependencies:** F05, F06, F07, D02, D04

- [ ] Choose domain/reverse proxy and deploy immutable release artifacts with externalized secrets
- [ ] Database is private; health/readiness, logs and notification-failure visibility are demonstrated
- [ ] Release smoke tests and application rollback procedure are documented and exercised

[Design reference](../../docs/engineering/deployment.md)

### D07 — Document data retention and verify backup restoration

[GitHub issue #29](https://github.com/brianlatulip/dung-lair-platform/issues/29)

**Area:** infrastructure · **Priority:** P0 · **Dependencies:** D06

- [ ] Owner confirms retention, backup access/frequency and recovery objectives
- [ ] Restore a production-equivalent backup into an isolated environment and verify records/history
- [ ] Document credential rotation, session revocation and recovery responsibilities without publishing secrets

[Design reference](../../docs/engineering/deployment.md)

### D08 — Complete MVP acceptance and release to the guild

[GitHub issue #30](https://github.com/brianlatulip/dung-lair-platform/issues/30)

**Area:** documentation · **Priority:** P0 · **Dependencies:** A08, D02, D05, D06, D07

- [ ] Every MVP requirement has linked acceptance evidence and release checklist is completed
- [ ] Demonstrate the real applicant-to-officer workflow on the deployed release
- [ ] Record known limitations and post-launch feedback; close milestone only when all required work is actually delivered

[Design reference](../../docs/engineering/release-checklist.md)
