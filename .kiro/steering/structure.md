# Project Structure

## Root Directory Organization

### Core Application
- **`app/`** - Remix frontend application
  - `components/` - React UI components
  - `lib/` - Client-side logic and state management
  - `routes/` - Remix route definitions (client/server)
  - `styles/` - CSS and styling files
  - `types/` - TypeScript type definitions
  - `utils/` - Utility functions
  - `root.tsx` - Root application component
  - `entry.client.tsx` - Client-side entry point
  - `entry.server.tsx` - Server-side entry point

### Backend & Database
- **`convex/`** - Convex backend functions and schema
  - Database queries, mutations, and actions
  - Authentication configuration
  - Cron jobs and background tasks
  - HTTP endpoints and proxies
  - Schema definitions and migrations

### AI Agent System
- **`chef-agent/`** - AI agent logic and tools
  - Chat context management
  - Message parsing and processing
  - AI tool definitions
  - System prompts and templates
  - Agent utilities and types

### Supporting Packages
- **`chefshot/`** - CLI interface for Chef webapp
- **`test-kitchen/`** - Testing harness for agent evaluation
- **`template/`** - Base template for generated projects

### Build & Infrastructure
- **`proxy/`** - Proxy server configuration
- **`iframe-worker/`** - WebContainer worker implementation
- **`public/`** - Static assets and resources
- **`patches/`** - Package patches via pnpm

## File Naming Conventions
- Use kebab-case for directories: `chef-agent/`, `test-kitchen/`
- Use PascalCase for React components: `ChatContextManager.tsx`
- Use camelCase for utilities and functions
- Use `.test.ts` or `.spec.ts` for test files
- Use `.config.ts` for configuration files

## Import Path Aliases
```typescript
// Configured in tsconfig.json
"~/*": ["./app/*"]           // Frontend code
"@convex/*": ["./convex/*"]  // Backend functions
"@ui/*": ["./node_modules/@convex-dev/design-system/dist/*"] // UI components
```

## Key Configuration Files
- **`package.json`** - Root workspace configuration
- **`pnpm-workspace.yaml`** - Workspace package definitions
- **`vite.config.ts`** - Build configuration
- **`tailwind.config.ts`** - Styling configuration
- **`convex/convex.config.ts`** - Backend configuration
- **`.env.local`** - Local environment variables

## Workspace Structure
This is a pnpm workspace with multiple packages:
- Root package (main Chef application)
- `chef-agent` - AI agent logic
- `chefshot` - CLI tool
- `test-kitchen` - Testing utilities

## Development Patterns
- Frontend components in `app/components/`
- Backend functions in `convex/`
- Shared types across packages
- Centralized configuration at root level
- Separate test configurations per package

## Special Directories
- **`.kiro/`** - Kiro IDE configuration and steering rules
- **`.github/`** - GitHub workflows and templates
- **`node_modules/`** - Dependencies (managed by pnpm)
- **`build/`** - Production build output (generated)