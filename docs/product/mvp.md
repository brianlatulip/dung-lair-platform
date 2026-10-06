# MVP specification

**Baseline:** accepted MVP planning, 6 October 2026. **Delivery:** M0–M3. **Implementation status:** planned.

## Scope and acceptance

| ID | Requirement | Acceptance evidence | Milestone |
| --- | --- | --- | --- |
| MVP-01 | Public Home, About, Recruitment, Apply entry, Discord login | Anonymous visitor can understand the guild and reach the application journey on mobile and desktop | M0 / M3 |
| MVP-02 | Discord OAuth and internal users | First login creates one internal user and linked Discord account; repeat login reuses that user | M1 |
| MVP-03 | Sessions and current-user endpoint | Valid session returns current user; expiry and logout remove access | M1 |
| MVP-04 | Internal role-based authorization | Guests and ordinary users cannot call officer/admin endpoints or view private notes | M1 |
| MVP-05 | Application form and persistence | Valid submission is durably stored; field errors preserve entered values | M2 |
| MVP-06 | Applicant status | Applicant can view their own application status; another user cannot access it | M2 |
| MVP-07 | Officer review queue and detail | Authorized officer filters applications and reads complete application details | M2 |
| MVP-08 | Explicit status transitions | Allowed transitions record actor, timestamp, and history; illegal changes fail | M2 |
| MVP-09 | Private comments and audit history | Officers see notes and events; applicant-facing responses omit internal notes | M2 |
| MVP-10 | Discord application notifications | Submission triggers officer-channel notification linking to the application; delivery failures remain observable | M3 |
| MVP-11 | Database-backed recruitment needs | Public page reflects saved needs; authorized officers update them | M3 |
| MVP-12 | Responsive UX and operational readiness | Error/loading/empty states work; production deployment, backup/restore, health, and release checks are demonstrated | M3 |

## User stories

**Visitor:** I can learn about the guild, inspect current recruitment needs, and choose to apply.

**Applicant (authenticated User):** I can use my Discord identity, complete the application, and see my current status. I cannot see another applicant’s data or officer discussion.

**Officer:** I can review and filter submissions, record a decision, add a private note, read history, and maintain recruitment needs.

**Admin:** I can manage internal access and required platform settings. A full generic admin console is not required; the initial mechanism must be authenticated, auditable, and documented.

## Application answers

Discord identity is supplied by authentication. The form captures character name, class, spec, level, previous guild, raid experience, availability, why Dung Lair, expectations of the guild, and additional information. Character data is manually entered; the release does not depend on a WoW API.

Exact class/spec choices, level bounds, required/optional fields, text limits, and published guild copy must be confirmed during the form/content issues. Illustrative recruitment values in the planning chat are not production data.

## Workflow

The agreed state vocabulary is `DRAFT`, `SUBMITTED`, `UNDER_REVIEW`, `ACCEPTED`, `REJECTED`, `WITHDRAWN`. See [application design](../architecture/applications.md) for the proposed transition policy. Draft saving, withdrawal, resubmission, and concurrent-application limits require policy resolution before implementing their UI.

## Discord boundary

OAuth, linked identity, and officer notifications are in scope. Guild membership verification was discussed, with optional joining; whether membership gates submission remains an explicit product decision. Automatic joining is not assumed. Automatic member-role assignment, applicant-role removal, and welcome posts are deferred.

## Release gate

All MVP requirements have passing acceptance evidence; authorization and note privacy are tested at the API; migrations apply from a clean database; deployment, backup/restore, and failure handling are exercised; no unresolved release-blocking issue remains. M3 closes only after the product is deployed and the core journey is demonstrated.

See [open decisions](open-questions.md), [roadmap](roadmap.md), and [future scope](future-features.md).
