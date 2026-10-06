# ADR-005: Own authorization inside Dung Lair

**Status:** Accepted planning baseline  
**Date:** 2026-10-06

## Context

Guild officers need privileged workflows and applicants must never see private notes.

## Decision

Use internal User → Role → Permission mappings independent of Discord role names.

## Alternatives

Checking Discord roles throughout handlers couples every feature to provider policy and complicates testing.

## Consequences

Centralize authorization, test ownership and negative access, and audit role changes. Future Discord synchronization maps into internal policy.

## Provenance

Codifies the accepted MVP planning. Implementation-level details remain proposals until resolved in the relevant issue. Acceptance of this record does not mean the software is implemented.
