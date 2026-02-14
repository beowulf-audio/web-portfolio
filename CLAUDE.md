# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Beowulf Audio is a React + TypeScript single-page application showcasing free audio plugins and VST tools. Built with Vite and modern web technologies.

## Commands

### Development
- `npm run dev` - Start development server at http://localhost:8080
- `npm run build` - Build production bundle
- `npm run build:dev` - Build development bundle
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

### Testing
- `npm test` - Run tests once
- `npm run test:watch` - Run tests in watch mode

### Dependencies
- `npm install` - Install all dependencies

## Architecture

### Key Technologies
- **Build Tool**: Vite 5 with SWC for fast compilation
- **Framework**: React 18 with TypeScript 5.8
- **UI Components**: shadcn/ui (Radix UI primitives)
- **Styling**: Tailwind CSS with custom design system
- **Routing**: React Router v6
- **State Management**: TanStack Query (React Query)
- **Testing**: Vitest + React Testing Library

### Project Structure
```
src/
├── components/
│   ├── ui/          # shadcn/ui components (Button, Card, etc.)
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── NavLink.tsx
│   ├── ParticleField.tsx
│   └── Products.tsx
├── pages/
│   ├── Index.tsx    # Home page
│   ├── About.tsx    # About page
│   └── NotFound.tsx # 404 page
├── hooks/
│   ├── use-mobile.tsx
│   └── use-toast.ts
├── lib/
│   └── utils.ts     # Utility functions
├── assets/          # Images and static assets
└── test/           # Test files
```

### Path Aliases
- `@/` resolves to `./src/`
- Common imports: `@/components/ui/`, `@/lib/utils`, `@/hooks/`

### Routing (defined in App.tsx)
Current implemented routes:
- `/` - Home page (Index)
- `/about` - About page
- `*` - 404 Not Found (catch-all)

### Design System
- **Colors**: Dark theme with teal/emerald accents (HSL-based)
- **Typography**:
  - Display/Body: Space Grotesk
  - Code: JetBrains Mono
- **Theme**: Custom dark theme with sophisticated grayscale
- **Styling**: CSS custom properties defined in `src/index.css`

### TypeScript Configuration
- Relaxed settings for easier development:
  - `noImplicitAny: false`
  - `strictNullChecks: false`
  - `noUnusedLocals: false`
  - `noUnusedParameters: false`
- Path aliases configured for `@/*` imports
- ESLint with TypeScript support and React hooks linting

### Build & Deployment
- **Dev Server**: Port 8080, IPv6 enabled
- **Build Output**: `dist/` directory
- **Deployment**: Cloudflare Pages via GitHub Actions
- **SPA Routing**: Handled by `public/_redirects` file

### Environment
- Production URL: https://beowulfaudio.dev
- Node Version: 18 or higher (specified in `.nvmrc`)

## Development Guidelines

- Use existing shadcn/ui components from `src/components/ui/`
- Follow the established dark theme design system
- Maintain the minimalist, professional aesthetic
- Ensure responsive design for all screen sizes
- Use TypeScript for type safety where practical
- Write tests for new components and features
