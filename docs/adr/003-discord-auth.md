# ADR-003: Use Discord as the initial identity provider

**Status:** Accepted planning baseline  
**Date:** 2026-10-06

## Context

Discord is already central to the guild and applicants should not need another password.

## Decision

Use Discord OAuth while keeping internal UUID users and linked Discord accounts.

## Alternatives

Local passwords add credential lifecycle work; using Discord IDs as all domain primary keys couples the platform to one provider.

## Consequences

Provider outages affect new login. Handle callback errors and retain independent user/role ownership; additional providers can be linked later.

## Provenance

Codifies the accepted MVP planning. Implementation-level details remain proposals until resolved in the relevant issue. Acceptance of this record does not mean the software is implemented.
