# Technology Stack

## Frontend Framework
- **Remix** - Full-stack React framework with SSR/SSG capabilities
- **React 18** - UI library with concurrent features
- **TypeScript** - Primary language for type safety
- **Vite** - Build tool and dev server

## Backend & Database
- **Convex** - Reactive database and backend platform
- **Node.js 20+** - Runtime environment (dev), Node.js 22 (production on Vercel)
- **Vercel** - Deployment platform with serverless functions

## Styling & UI
- **Tailwind CSS** - Utility-first CSS framework
- **@convex-dev/design-system** - Internal component library
- **Radix UI** - Headless UI primitives
- **Framer Motion** - Animation library

## AI & Code Generation
- **AI SDK** - Multi-provider AI integration (@ai-sdk/*)
- **OpenAI, Anthropic, Google, XAI** - LLM providers
- **WebContainer API** - In-browser development environment
- **Shiki** - Syntax highlighting

## Development Tools
- **pnpm** - Package manager (required)
- **ESLint** - Linting with custom rules
- **Prettier** - Code formatting
- **Vitest** - Testing framework
- **TypeScript** - Type checking

## Authentication & Security
- **WorkOS** - Authentication provider
- **Sentry** - Error monitoring
- **Rate limiting** - Via @convex-dev/rate-limiter

## Common Commands

### Development
```bash
# Setup
nvm use
pnpm i
npx convex dev --configure existing

# Development servers
pnpm run dev          # Start frontend dev server
npx convex dev        # Start Convex backend

# Testing & Quality
pnpm run test         # Run tests
pnpm run test:watch   # Watch mode
pnpm run lint         # Check linting
pnpm run lint:fix     # Fix linting issues
pnpm run typecheck    # Type checking

# Build & Deploy
pnpm run build        # Production build
pnpm run preview      # Preview production build
```

### Template Management
```bash
npm run rebuild-template  # Rebuild project template
```

## Package Manager
- **Must use pnpm** - npm/yarn not supported
- Workspace configuration with multiple packages
- Custom patches applied via pnpm.patchedDependencies

## Environment Requirements
- Node.js 18.18.0+ (development)
- Access to http://127.0.0.1:5173 (not localhost)
- Convex project connection required