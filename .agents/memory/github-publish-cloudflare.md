---
name: GitHub publishing through the connected integration
description: Cloudflare can reject large or HTML-heavy GitHub writes routed through the connected integration.
---

Use small authenticated commits when publishing workspace files through the connected GitHub integration; large GraphQL additions and some HTML entry files may be rejected by the Replit Cloudflare layer even when GitHub API rate limits are healthy.

**Why:** The proxy can return a Cloudflare 403 while ordinary reads and small source-file writes continue to work.

**How to apply:** Split writes into small batches, checkpoint progress, and if a specific HTML entry file remains blocked, present the local file for manual upload rather than repeatedly retrying the same request.