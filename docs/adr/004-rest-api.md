# ADR-004: Use a versioned REST API

**Status:** Accepted planning baseline  
**Date:** 2026-10-06

## Context

The TypeScript frontend and Go backend require a clear language-neutral contract.

## Decision

Use HTTP/JSON REST under /api/v1, with browser OAuth routes under /auth.

## Alternatives

GraphQL and custom RPC are not required by the initial interactions.

## Consequences

Maintain explicit request/response contracts and compatibility tests; do not duplicate backend business rules in Next.js.

## Provenance

Codifies the accepted MVP planning. Implementation-level details remain proposals until resolved in the relevant issue. Acceptance of this record does not mean the software is implemented.
