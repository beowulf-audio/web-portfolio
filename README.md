# Beowulf Audio

Free professional audio plugins and VST tools for producers and engineers.

## 🎵 About

Beowulf Audio provides high-quality, free audio plugins and tools for music production and audio engineering. Our suite includes VST3, AU, and standalone applications designed to enhance your creative workflow.

## 🚀 Tech Stack

This website is built with modern web technologies:

- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite 5 with SWC for fast compilation
- **UI Components**: shadcn/ui (Radix UI primitives)
- **Styling**: Tailwind CSS with custom design system
- **Routing**: React Router v6
- **State Management**: TanStack Query
- **Testing**: Vitest + React Testing Library

## 📦 Getting Started

### Prerequisites

- Node.js 18 or higher
- npm 9 or higher

### Installation

```bash
# Clone the repository
git clone <your-repo-url>

# Navigate to project directory
cd beowulf-audio

# Install dependencies
npm install

# Start development server
npm run dev
```

The development server will start at `http://localhost:8080`

## 🛠️ Available Scripts

```bash
# Development
npm run dev          # Start dev server with hot reload
npm run build        # Build for production
npm run build:dev    # Build in development mode
npm run preview      # Preview production build locally

# Code Quality
npm run lint         # Run ESLint

# Testing
npm test             # Run tests once
npm run test:watch   # Run tests in watch mode
```

## 📁 Project Structure

```
beowulf-audio/
├── src/
│   ├── components/     # Reusable React components
│   │   └── ui/        # shadcn/ui components
│   ├── pages/         # Route components
│   ├── hooks/         # Custom React hooks
│   ├── lib/           # Utility functions
│   └── assets/        # Images and static files
├── public/            # Static assets
└── test/             # Test files
```

## 🎨 Design System

The project uses a custom dark theme with:
- Custom color palette using CSS custom properties
- Typography: Space Grotesk (display/body), JetBrains Mono (code)
- Responsive design with mobile-first approach
- Sophisticated grayscale with teal/emerald accents

## 🚢 Deployment

This project is configured for deployment on Cloudflare Pages via GitHub Actions.

### Manual Deployment

```bash
# Build the project
npm run build

# The dist/ folder contains the production build
```

### Automated Deployment

Push to the `main` branch to trigger automatic deployment via GitHub Actions.

## 🔧 Configuration

- **Vite Config**: `vite.config.ts`
- **TypeScript**: `tsconfig.json`
- **Tailwind**: `tailwind.config.ts`
- **ESLint**: `eslint.config.js`

## 📄 License

Copyright © 2025 Beowulf Audio. All rights reserved.

## 🤝 Contributing

This is a private project. If you'd like to contribute or report issues, please contact the maintainers.

## 🔗 Links

- **Website**: https://beowulfaudio.dev
- **GitHub**: [Your GitHub URL]

---

Built with ❤️ by Beowulf Audio
