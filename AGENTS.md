<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Uplix — AI Development Guidelines

## 1. Project Overview

Uplix is an uptime monitoring platform for websites and APIs.

Users can create monitors to track the availability and response time of their websites and API endpoints.

The primary goal is to build a production-quality portfolio project with clean architecture, maintainable code, and sound engineering practices.

## 2. MVP Scope

The initial MVP includes:

- User authentication and authorization
- Automatic workspace creation for new users
- Monitor creation, editing, deletion, pausing, and resuming
- Scheduled HTTP health checks
- Monitoring history and response-time tracking
- Incident creation and resolution
- Email notifications

Features explicitly deferred from MVP:

- Service Groups
- Multi-region monitoring
- DNS and TCP monitoring
- Browser monitoring
- Telegram and Slack notifications
- Billing and subscription management
- Team collaboration
- Custom domains

Do not implement deferred features unless explicitly requested.

## 3. Technical Principles

- Prefer simple, maintainable solutions over unnecessary abstractions.
- Avoid premature optimization and overengineering.
- Follow the existing project conventions.
- Use TypeScript strictly and avoid `any` unless justified.
- Keep business logic separate from UI components.
- Prefer reusable components when reuse is meaningful.
- Validate external input on the server.
- Handle errors explicitly.
- Consider security in every implementation.

## 4. Architecture Guidelines

- Use Next.js App Router.
- Keep the application modular and feature-oriented.
- Separate UI, business logic, data access, and validation.
- Never trust workspace identifiers received from the client without authorization checks.
- Resolve the authenticated user's workspace on the server.
- Keep monitoring logic independent from the scheduling mechanism.
- Do not implement persistent background processes inside Vercel serverless functions.
- Design scheduled monitoring jobs to tolerate retries and duplicate execution.

## 5. Monitoring Requirements

- Each monitor represents an HTTP endpoint to check.
- Each execution produces a check result.
- Two consecutive failures should trigger an incident.
- Two consecutive successful checks should resolve an active incident.
- Monitoring results are the source of truth for monitoring history.
- Prevent duplicate incident creation and duplicate processing.
- Apply request timeouts and appropriate error handling.
- Protect against SSRF, including localhost, private IP ranges, and cloud metadata endpoints.

## 6. Development Workflow

Before implementing a feature:

1. Understand the existing project structure.
2. Inspect related files and existing patterns.
3. Explain the proposed approach.
4. Identify potential risks and affected areas.
5. Wait for approval before making changes.

During implementation:

- Make focused changes.
- Avoid unrelated refactoring.
- Do not install or update dependencies without approval.
- Do not delete or overwrite existing code without justification.
- Do not run destructive commands.
- Follow the project's existing formatting and naming conventions.

After implementation:

- Explain what changed and why.
- List modified files.
- Report checks and tests performed.
- Mention remaining issues or limitations.

## 7. AI Communication Rules

- Respond in Persian.
- Keep code, identifiers, filenames, paths, commands, and technical terms in English.
- Explain technical decisions clearly and step by step.
- Explain the reasoning before introducing complex implementations.
- Do not assume missing requirements.
- Clearly distinguish facts from suggestions.
- Ask questions when essential information is missing.
- Do not claim that something works unless it has been verified.

## 8. Dependency and Documentation Rules

- Inspect installed package versions before recommending APIs or packages.
- Prefer official documentation.
- Verify version compatibility before suggesting new dependencies.
- Do not upgrade packages without explicit approval.
- Avoid deprecated APIs and patterns.

## 9. Important Rule

The developer is learning and building this project to improve real-world engineering skills.

Do not simply produce code. Explain the architecture, trade-offs, and reasoning behind important decisions.

The objective is not just to make the feature work, but to implement it correctly and understand why it works.
