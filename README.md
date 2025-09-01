# Saumya Shah's Portfolio 
## saumyas.com

A modern, interactive portfolio website built with React, TypeScript, and Three.js featuring immersive 3D experiences, smooth animations, and multilingual support.

## 🚀 Features

- **Immersive 3D Experience**: Interactive Three.js scenes with custom shaders and animations
- **Smooth Animations**: GSAP-powered animations and text scramble effects
- **Multilingual Support**: Internationalization with i18next (English & Italian)
- **Responsive Design**: Mobile-first approach with breakpoint optimization
- **Audio Integration**: Background music and interactive sound effects
- **Modern UI/UX**: Clean, minimalist design with smooth transitions
- **Performance Optimized**: Efficient rendering and asset loading
- **SEO Ready**: Meta tags and structured content

## 🛠️ Tech Stack

### Frontend
- **React 18** - UI framework
- **TypeScript** - Type safety and development experience
- **Vite** - Fast build tool and dev server
- **Redux Toolkit** - State management
- **React Router** - Client-side routing

### 3D & Graphics
- **Three.js** - 3D graphics library
- **GSAP** - Animation library
- **Custom GLSL Shaders** - Advanced visual effects
- **Draco Compression** - 3D model optimization

### Styling & UI
- **CSS Modules** - Scoped styling
- **PostCSS** - CSS processing with advanced features
- **Responsive Design** - Mobile-first approach

### Audio & Media
- **Howler.js** - Audio management
- **Web Audio API** - Interactive sound effects

### Development Tools
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **Stylelint** - CSS linting
- **Semantic Release** - Automated versioning

## 📦 Installation

### Prerequisites
- Node.js (v16 or higher)
- pnpm (recommended) or npm

### Setup
```bash
# Clone the repository
git clone git@github.com:Giulico/folio-2022.git
cd folio-2022

# Install dependencies (pnpm is enforced)
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview
```

## 🎮 Usage

### Development
```bash
# Start development server with host access
pnpm dev

# Lint code
pnpm lint

# Format code
pnpm prettier-all
```

### Production
```bash
# Build optimized production bundle
pnpm build

# Preview production build locally
pnpm preview
```

## 🏗️ Project Structure

```
src/
├── components/          # Reusable React components
│   ├── App/            # Main app component
│   ├── Experience/     # Three.js 3D experience
│   ├── AudioWave/      # Audio visualization
│   ├── Awards/         # Awards showcase
│   ├── Container/      # Layout containers
│   ├── ContentBlock/   # Content sections
│   ├── CustomRouter/   # Custom routing logic
│   ├── EnterCTA/       # Call-to-action buttons
│   ├── GSAPScrumbleText/ # Text animation effects
│   ├── Heading/        # Typography components
│   ├── Icons/          # SVG icon components
│   ├── ImageTrigger/   # Image interaction triggers
│   ├── LangSwitch/     # Language switcher
│   ├── List/           # List components
│   ├── LoadProgress/   # Loading indicators
│   ├── Logo/           # Brand logo
│   ├── Media/          # Media components
│   ├── Menu/           # Navigation menu
│   ├── MenuTrigger/    # Menu toggle
│   ├── Modal/          # Modal dialogs
│   ├── Numbers/        # Number displays
│   ├── OldBookParagraph/ # Styled text components
│   ├── Pointer/        # Custom cursor
│   ├── ProjectCTA/     # Project call-to-actions
│   ├── ProjectHero/    # Project hero sections
│   ├── Router/         # Route definitions
│   ├── Section/        # Page sections
│   ├── Square/         # UI elements
│   ├── TextIntro/      # Introduction text
│   ├── TextScramble/   # Text effects
│   └── TextTwoColumns/ # Two-column layouts
├── hooks/              # Custom React hooks
├── partials/           # Page-specific components
│   ├── About/          # About page
│   ├── Contact/        # Contact page
│   ├── Hero/           # Hero section
│   ├── Portfolio/      # Portfolio showcase
│   └── ProjectDetail/  # Project details
├── store/              # Redux store and models
├── styles/             # Global styles and CSS config
├── utils/              # Utility functions
├── vendor/             # Third-party libraries
└── main.tsx           # Application entry point
```

## 🎨 3D Experience Configuration

The 3D experience can be customized through `src/settings.ts`:

```typescript
export const showExperience = true        // Enable/disable 3D scene
export const showStrikes = false          // Lightning effects
export const showClouds = true           // Cloud particles
export const showMan = true              // 3D character model
export const showParticles = true        // Particle systems
export const manMaterial = 'vibrant'     // Character material style
export const showTitles = true           // 3D text elements
export const showPortfolio = true        // Portfolio showcase
export const showCameraPath = false      // Camera animation path
export const composerEffect = 'vibrant'  // Post-processing effects
```

## 🌐 Internationalization

The project supports multiple languages through i18next:

- **English** (`en`) - Default language
- **Italian** (`it`) - Secondary language

Translation files are located in `public/locales/`.

## 🎵 Audio Features

- **Background Music**: Ambient soundtrack with volume controls
- **Interactive Sounds**: Hover effects and UI feedback
- **Audio Visualization**: Real-time waveform display
- **Audio Management**: Automatic loading and playback control

## 📱 Responsive Design

The portfolio is optimized for all device sizes:

- **Mobile**: Touch-friendly interactions and optimized performance
- **Tablet**: Adaptive layouts and gesture support
- **Desktop**: Full 3D experience with mouse interactions

## 🚀 Performance Optimizations

- **Asset Compression**: Draco compression for 3D models
- **Lazy Loading**: On-demand component and asset loading
- **Code Splitting**: Route-based code splitting
- **Image Optimization**: WebP format and responsive images
- **Bundle Optimization**: Tree shaking and minification

## 🛠️ Development Guidelines

### Code Style
- Use TypeScript for type safety
- Follow ESLint and Prettier configurations
- Use CSS Modules for component styling
- Implement proper error boundaries

### Component Structure
- Keep components small and focused
- Use custom hooks for reusable logic
- Implement proper prop typing
- Follow React best practices

### 3D Development
- Optimize shader performance
- Use proper asset loading strategies
- Implement level-of-detail (LOD) systems
- Monitor frame rate and memory usage

---

Built with ❤️ using React, TypeScript, and Three.js
