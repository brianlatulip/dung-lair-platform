# GitHub project conventions

**Project:** [Dung Lair Platform](https://github.com/users/brianlatulip/projects/1). Issues are the source of task status; milestones define the release stages; repository docs describe the product and architecture.

## Views

| View | Layout | Intended use |
| --- | --- | --- |
| [MVP Board](https://github.com/users/brianlatulip/projects/1/views/1) | Board grouped by Status; MVP filter | Daily delivery across Backlog, Ready, In Progress, Blocked, Review, Done |
| [Backlog](https://github.com/users/brianlatulip/projects/1/views/2) | Table of open Backlog items, sorted by Priority | Refinement and picking upcoming work |
| [Roadmap](https://github.com/users/brianlatulip/projects/1/views/3) | Roadmap using Start date / Target date, grouped by Milestone | Schedule the agreed sequence once dates exist |
| [All Issues](https://github.com/users/brianlatulip/projects/1/views/4) | Unfiltered table | Complete inventory, including closed work |

Roadmap dates remain blank until agreed. Unscheduled items still belong in the project; invented dates would create false commitments.

## Fields

- **Status:** Backlog, Ready, In Progress, Blocked, Review, Done.
- **Priority:** P0 - Required for MVP; P1 - Important; P2 - Nice to have.
- **Area:** Frontend, Backend, Database, Discord, Infrastructure, Documentation.
- **Start date / Target date:** optional scheduling fields.
- **Milestone:** repository milestone, the single source of phase membership.

## Labels

`scope:mvp`; `priority:p0`, `priority:p1`, `priority:p2`; `area:frontend`, `area:backend`, `area:database`, `area:discord`, `area:infrastructure`, `area:documentation`; `type:feature`, `type:task`, `type:bug`, `type:decision`, `type:epic`; `blocked` where useful for issue search.

P0 means required for this release, not an operational emergency. Labels are portable issue metadata; keep Priority/Area fields consistent with their labels. Do not use labels as an alternative milestone system.

## Delivery rules

Backlog means scoped but not yet actionable. Ready requires resolved policy and dependencies. In Progress means active work. Blocked requires a named blocker. Review means a reviewable PR exists. Done means acceptance evidence is present and the issue is closed after delivery. Parent milestone tracking issues close only after their children satisfy the milestone exit gate.

Avoid blanket assignments or due dates. Set ownership when work is picked up. Preserve existing issues, labels, views, and milestone content when maintaining this setup.
