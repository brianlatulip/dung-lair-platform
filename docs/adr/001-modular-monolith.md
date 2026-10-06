# ADR-001: Use a modular monolith

**Status:** Accepted planning baseline  
**Date:** 2026-10-06

## Context

The first release is a focused guild application but must support later domains.

## Decision

One deployable Go backend with domain modules, explicit interfaces and one database.

## Alternatives

Microservices create deployment and consistency costs before they solve a demonstrated problem; an unstructured monolith makes later changes risky.

## Consequences

Module discipline must be enforced in code review. A separate worker/service can be extracted when operational evidence warrants it.

## Provenance

Codifies the accepted MVP planning. Implementation-level details remain proposals until resolved in the relevant issue. Acceptance of this record does not mean the software is implemented.
