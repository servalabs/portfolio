---
description: Repository Information Overview
alwaysApply: true
---

# Saumya Shah's Portfolio Information

## Summary
A modern, interactive portfolio website built with React, TypeScript, and Three.js featuring immersive 3D experiences, smooth animations, and multilingual support. The portfolio showcases projects with interactive elements, custom 3D scenes, and responsive design.

## Structure
- **src/**: Main source code directory
  - **components/**: Reusable React components (App, Experience, AudioWave, etc.)
  - **hooks/**: Custom React hooks for audio, animations, and UI interactions
  - **partials/**: Page-specific components (About, Contact, Hero, Portfolio)
  - **store/**: Redux store configuration and models
  - **styles/**: Global styles and CSS configuration
  - **utils/**: Utility functions for math, events, and animations
  - **vendor/**: Third-party libraries and customizations
- **public/**: Static assets (images, audio, 3D models, localization files)
- **fonts/**: Custom font files and MSDF font configurations

## Language & Runtime
**Language**: TypeScript/JavaScript
**Version**: TypeScript 5.0.4, React 18.2.0
**Build System**: Vite 4.5.9
**Package Manager**: pnpm (enforced)

## Dependencies
**Main Dependencies**:
- React 18.2.0 (UI framework)
- Three.js 0.148.0 (3D graphics)
- GSAP 3.11.5 (Animations)
- Redux/Rematch (State management)
- React Router 6.10.0 (Routing)
- i18next (Internationalization)
- Howler.js (Audio management)

**Development Dependencies**:
- ESLint/TypeScript ESLint (Linting)
- Prettier (Code formatting)
- PostCSS (CSS processing)
- Stylelint (CSS linting)
- Semantic Release (Versioning)

## Build & Installation
```bash
# Install dependencies (pnpm is enforced)
pnpm install

# Development server
pnpm dev

# Production build
pnpm build

# Preview production build
pnpm preview
```

## Deployment
**Platform**: Netlify
**Configuration**: netlify.toml defines build settings and redirects
**Build Command**: pnpm build
**Publish Directory**: dist

## 3D Experience
**Library**: Three.js with custom shaders
**Features**: Interactive 3D scenes, custom GLSL shaders, Draco compression
**Configuration**: Customizable through src/settings.ts
**Optimizations**: Asset compression, LOD systems, performance monitoring

## Internationalization
**Framework**: i18next with browser language detection
**Languages**: English (default), Italian
**Files**: Translation files located in public/locales/

## Audio Features
**Library**: Howler.js
**Features**: Background music, interactive sound effects, audio visualization
**Files**: Audio assets in public/audio/

## Testing
No explicit testing framework configuration found in the repository.