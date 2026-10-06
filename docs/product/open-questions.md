# Open product and implementation decisions

These details were not settled by the accepted planning. They are implementation gates, not silently accepted architecture decisions.

| Decision | Resolve by | Default proposal / constraint |
| --- | --- | --- |
| Guild copy, branding, invite URL, contact route | Public-site content work | Use approved guild content; no invented recruitment claims |
| Discord guild membership requirement | M1 identity policy issue | Login and guild membership are distinct; do not auto-join |
| First Admin and role-management mechanism | M1 RBAC issue | Explicit internal bootstrap, audit changes, prevent accidental lockout |
| Draft persistence and withdrawal experience | M2 workflow policy issue | Reserve state vocabulary; only expose agreed actions |
| Duplicate applications, resubmission, reopening | M2 workflow policy issue | Propose one active application per user and terminal decisions |
| Field limits and class/spec/level validation | M2 workflow policy issue | Server-authoritative validation consistent with WoW Forever |
| Notification transport and retry durability | M3 notification issue | Adapter interface; no broker required; failure must not undo submission |
| Reverse proxy, domain, server topology | M3 deployment issue | Linux + containers + HTTPS; Caddy or Nginx not yet selected |
| Data retention and deletion process | M3 operations issue | Minimize application data and restrict backups; owner sets retention |
| Package manager, Go router/query/migration libraries | M0 scaffolding issues | Pin choices in lockfiles and update engineering docs |
| Milestone dates and personal work cadence | Owner scheduling | Leave dates unset until agreed; sequence is M0 → M1 → M2 → M3 |

Record significant decisions in a new ADR and update the relevant requirement, issue, and diagram in the same change.
