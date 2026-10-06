# ADR-006: Decouple integrations through application events

**Status:** Accepted planning baseline  
**Date:** 2026-10-06

## Context

Application submission should not depend on Discord network availability.

## Decision

Publish application-domain events through an interface and handle notifications in the Discord adapter; begin within the monolith.

## Alternatives

Synchronous provider logic inside application persistence couples concerns; a broker is unnecessary for initial scale.

## Consequences

In-process events alone do not guarantee delivery across crashes. M3 must choose retry/recovery semantics without claiming exactly-once delivery.

## Provenance

Codifies the accepted MVP planning. Implementation-level details remain proposals until resolved in the relevant issue. Acceptance of this record does not mean the software is implemented.
