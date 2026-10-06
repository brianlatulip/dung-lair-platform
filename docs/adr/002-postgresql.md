# ADR-002: Use PostgreSQL

**Status:** Accepted planning baseline  
**Date:** 2026-10-06

## Context

Identity, permissions, applications and review history are related transactional data.

## Decision

Use PostgreSQL with versioned migrations and module-owned repositories.

## Alternatives

A document store weakens the fit for relational constraints; multiple databases add unnecessary operational burden.

## Consequences

Model constraints and transactional writes deliberately. Backups and restore verification are release requirements.

## Provenance

Codifies the accepted MVP planning. Implementation-level details remain proposals until resolved in the relevant issue. Acceptance of this record does not mean the software is implemented.
