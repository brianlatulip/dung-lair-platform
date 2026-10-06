# ADR-007: Keep the frontend and backend in one repository

**Status:** Accepted planning baseline  
**Date:** 2026-10-06

## Context

The accepted stack balances a useful guild product with full-stack and infrastructure learning.

## Decision

Use Next.js/React/TypeScript, Go, PostgreSQL, Docker, and GitHub in one repository.

## Alternatives

A single-language backend was considered but the user selected TypeScript plus Go; separate repos add coordination overhead for this project.

## Consequences

Coordinate contracts and docs in the same PR. Choose exact tool versions during M0 rather than treating chat examples as pinned versions.

## Provenance

Codifies the accepted MVP planning. Implementation-level details remain proposals until resolved in the relevant issue. Acceptance of this record does not mean the software is implemented.
