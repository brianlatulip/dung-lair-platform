# Beyond the MVP

This is a parking lot, not a commitment or prerequisite for launch. Prioritize from guild feedback after M3.

| Potential capability | Natural module | Dependency or question |
| --- | --- | --- |
| Roster, member profiles, character profiles | users / characters / roster | Ownership, privacy, and character data source |
| Raid calendar and Raid-Helper synchronization | events / raids / integrations | External API availability and source of truth |
| Warcraft data, Battle.net login, logs | characters / warcraft / integrations | Provider support, permissions, identity linking |
| Attendance, composition planning, analytics | raids / attendance / analytics | Reliable event and participation data |
| Trials, interviews, waitlists | applications | Agreed workflow and transition policies |
| Discord role synchronization and acceptance automation | discord / identity | Role mapping, conflict policy, audit and recovery |
| Loot, DKP, guild bank | loot / economy | Guild policy and audit requirements |
| Achievements and notifications | achievements / notifications | Proven demand |
| Forums, direct messages, social features | community | Avoid duplicating Discord without a clear need |
| Push notifications or mobile application | delivery channels | Usage evidence and maintenance capacity |
| Kubernetes, microservices, message broker | infrastructure | Operational or scaling need, not a prerequisite |

Dyno integration and automatic welcome messages are also deferred. New modules must respect the [module boundaries](../architecture/modules.md); future concepts do not justify empty production services today.
