# Contributing

Use the [documentation index](docs/README.md) to understand the MVP before proposing implementation. Work from a GitHub issue with acceptance criteria and a milestone.

Keep pull requests focused. Describe the user-visible result, link the issue, and include relevant validation evidence. Update API contracts, architecture diagrams, and ADRs when behavior or significant decisions change.

Backend domain modules communicate through interfaces; the API enforces authorization. Frontend features live with their domain, and generic components remain generic. Never commit credentials or real applicant data.

An issue is complete when its acceptance criteria and the [definition of done](docs/engineering/testing.md) are met. Deferred features belong in the future-features document until selected for a later release.
