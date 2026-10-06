# MVP roadmap

Milestones describe outcomes, not deadlines. Dates remain unset until the owner agrees a schedule.

```mermaid
flowchart LR
 M0["M0 · Foundation"] --> M1["M1 · Identity"] --> M2["M2 · Applications"] --> M3["M3 · Discord + Polish"] --> Release["MVP release"]
```

## M0 — Foundation

A reproducible local stack and engineering foundation.

**Exit gate:** Frontend and Go API start with PostgreSQL through Docker Compose; migrations, config, logging, health and CI are demonstrated.

## M1 — Identity

Discord sign-in with internal identity and authorization.

**Exit gate:** Repeatable login, sessions, /me, role permissions and protected routes pass positive and negative access tests.

## M2 — Applications

A complete applicant-to-officer review workflow.

**Exit gate:** An applicant submits and views status; officers review, change state, add private notes and see audited history.

## M3 — Discord + Polish

Connected recruitment experience and production MVP.

**Exit gate:** Notifications, recruitment management, responsive states, observability and production recovery checks pass.

[Implementation backlog](../engineering/backlog.md) · [Project conventions](../engineering/project-management.md)

Independent content work may overlap identity work. Protected application features depend on M1. Discord notification delivery follows durable application submission. Closing this documentation setup does not mean M0 is complete.
