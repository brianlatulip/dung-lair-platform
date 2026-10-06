# Testing and definition of done

Tests should prove domain behavior and trust boundaries, not merely mirror implementation details.

| Layer | Required examples |
| --- | --- |
| Domain | Valid/invalid transitions, field validation, permission mapping |
| PostgreSQL integration | Migration from empty DB, uniqueness/FKs, transactional event history, concurrent review conflict |
| HTTP | Missing session, expired session, wrong owner, ordinary User calling officer endpoints, malformed input |
| OAuth | State mismatch/replay, denied consent, repeat identity, provider/database failure |
| Privacy | Applicant JSON/history excludes private comments and staff metadata |
| Notifications | Delivery failure does not undo submission; retry/restart recovery; safe mentions |
| UI / end-to-end | Visitor → login → apply → own status; officer review; mobile, keyboard, error/loading/empty states |
| Operations | Clean Compose start, health/readiness, deployment smoke test, backup restoration |

Use fake Discord responses in automated tests and a separate controlled live smoke test. Test databases and fixtures must not contain actual applicant data.

## Definition of done

Acceptance criteria are satisfied; relevant checks pass; negative authorization cases are covered; docs and diagrams match behavior; no secrets or private data leak; migrations and recovery are documented when relevant; the PR is reviewed and merged. Record unresolved limitations rather than treating a passing happy path as release readiness.

M0 adds actual CI commands after applications exist. This documentation setup validates internal links and repository consistency; it does not claim application tests have passed.
