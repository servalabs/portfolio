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

## 📁 Detailed Repository Structure

### Root Directory Files

- **index.html**: Main HTML entry point that loads the React application and sets up initial meta tags
- **vite.config.ts**: Vite configuration file that defines build settings, plugins (React, SVGR), and path aliases for imports
- **tsconfig.json**: TypeScript configuration with path aliases, compiler options, and strict type checking
- **tsconfig.node.json**: TypeScript configuration specifically for Node.js environment and build tools
- **package.json**: Project metadata, dependencies, scripts, and semantic release configuration
- **netlify.toml**: Netlify deployment configuration with build settings, redirects, and CORS headers
- **.postcssrc.js**: PostCSS configuration for CSS processing with plugins like nested, mixins, and flexbugs-fixes
- **.prettierrc**: Prettier code formatter configuration for consistent code style
- **.eslintrc**: ESLint configuration for code linting with TypeScript and React specific rules
- **.stylelintrc.json**: Stylelint configuration for CSS linting with idiomatic order and standard rules
- **.cz-config.js**: Commitizen configuration for standardized commit messages
- **.editorconfig**: Editor configuration for consistent coding styles across different editors

### `/src` Directory (Core Application Code)

#### Main Files

- **main.tsx**: Application entry point that renders the React app to the DOM and sets up global providers
- **i18n.ts**: Internationalization configuration using i18next with language detection and backend loading
- **settings.ts**: Global settings for the 3D experience and application features (toggles for various 3D elements)
- **global.d.ts**: Global TypeScript declarations for module types and global interfaces
- **vite-env.d.ts**: Vite-specific TypeScript declarations for environment variables

#### `/components` Directory (Reusable UI Components)

Each component typically follows this structure:
- **[Component].tsx**: Component implementation
- **[Component].module.css**: Scoped CSS styles
- **index.ts**: Export file for clean imports

Key components include:

- **/App**: Main application component
  - **App.tsx**: Root component that sets up routing, global state, and application structure
  - **App.module.css**: Global app styling
  
- **/Experience**: Three.js 3D experience components
  - **Experience.tsx**: Main 3D scene container that orchestrates all 3D elements
  - **Scene.tsx**: Three.js scene setup with lighting, camera, and renderer configuration
  - **Controls.tsx**: Camera controls and interaction handling
  - **Objects/**: 3D objects and models with custom materials and animations
  
- **/AudioWave**: Audio visualization components
  - **AudioWave.tsx**: Visualizes audio waveforms using canvas and Web Audio API
  - **AudioProcessor.ts**: Audio processing utilities for frequency analysis
  
- **/Container**: Layout container components
  - **Container.tsx**: Responsive container with consistent padding and max-width constraints
  
- **/ContentBlock**: Content section components
  - **ContentBlock.tsx**: Structured content blocks with animations and responsive layouts
  
- **/CustomRouter**: Custom routing components
  - **CustomRouter.tsx**: Extended router functionality with transition handling
  
- **/EnterCTA**: Call-to-action components
  - **EnterCTA.tsx**: Animated entry call-to-action buttons with hover effects
  
- **/GSAPScrumbleText**: Text animation components
  - **GSAPScrumbleText.tsx**: GSAP-powered text scramble effects with custom timing
  
- **/Heading**: Typography components
  - **Heading.tsx**: Styled heading elements with animations and responsive sizing
  
- **/Icons**: SVG icon components
  - **[IconName].tsx**: Individual SVG icon components with customizable properties
  
- **/ImageTrigger**: Image interaction components
  - **ImageTrigger.tsx**: Interactive image elements with hover effects and animations
  
- **/LangSwitch**: Language switcher components
  - **LangSwitch.tsx**: UI for switching between languages with animated transitions
  
- **/List**: List components
  - **List.tsx**: Styled and animated list components with various display options
  
- **/LoadProgress**: Loading indicator components
  - **LoadProgress.tsx**: Progress indicators for asset loading with percentage display
  
- **/Logo**: Brand logo components
  - **Logo.tsx**: Animated logo component with interactive states
  
- **/Media**: Media handling components
  - **Media.tsx**: Responsive image and video components with lazy loading
  
- **/Menu**: Navigation menu components
  - **Menu.tsx**: Main navigation menu with animated transitions
  - **MenuItem.tsx**: Individual menu items with hover effects
  
- **/MenuTrigger**: Menu toggle components
  - **MenuTrigger.tsx**: Hamburger button for toggling the menu with animated states
  
- **/Modal**: Modal dialog components
  - **Modal.tsx**: Reusable modal component with animations and focus management
  
- **/Numbers**: Number display components
  - **Numbers.tsx**: Animated number counters with formatting options
  
- **/OldBookParagraph**: Styled text components
  - **OldBookParagraph.tsx**: Text styled like old book pages with custom typography
  
- **/Pointer**: Custom cursor components
  - **Pointer.tsx**: Custom cursor with interactive states and context-aware behavior
  
- **/ProjectCTA**: Project call-to-action components
  - **ProjectCTA.tsx**: Call-to-action buttons for projects with hover animations
  
- **/ProjectHero**: Project hero section components
  - **ProjectHero.tsx**: Hero sections for project pages with parallax effects
  
- **/Router**: Route definition components
  - **Router.tsx**: Application route definitions with transition handling
  
- **/Section**: Page section components
  - **Section.tsx**: Page section with consistent spacing and background options
  
- **/Square**: UI element components
  - **Square.tsx**: Square UI elements with animations and interactive states
  
- **/TextIntro**: Introduction text components
  - **TextIntro.tsx**: Animated introduction text with sequential reveals
  
- **/TextScramble**: Text effect components
  - **TextScramble.tsx**: Text scramble animation effects with customizable speed
  
- **/TextTwoColumns**: Layout components
  - **TextTwoColumns.tsx**: Two-column text layout with responsive behavior

#### `/hooks` Directory (Custom React Hooks)

- **useBackgroundAudio.ts**: Hook for managing background music playback and volume
- **useDebounce.ts**: Hook for debouncing function calls to improve performance
- **useHoverAudio.ts**: Hook for managing hover sound effects with different sounds
- **useIntroAudio.ts**: Hook for introduction sound effects with timing control
- **useMainMenu.ts**: Hook for managing menu state, animations, and accessibility
- **useScrollOffset.ts**: Hook for tracking scroll position with throttling
- **useTextFit.ts**: Hook for fitting text to containers with dynamic resizing
- **useTransitionStage.ts**: Hook for managing page transitions with multiple stages
- **useVangelisAudio.ts**: Hook for Vangelis soundtrack management with special timing

#### `/partials` Directory (Page-Specific Components)

- **/About**: About page components
  - **About.tsx**: About page content and layout with animations
  - **AboutContent.tsx**: Content sections for the about page
  - **Skills.tsx**: Skills showcase with interactive elements
  
- **/Contact**: Contact page components
  - **Contact.tsx**: Contact page with form and information
  - **ContactForm.tsx**: Interactive contact form with validation
  - **SocialLinks.tsx**: Social media links with hover effects
  
- **/Hero**: Hero section components
  - **Hero.tsx**: Main hero section with parallax animations
  - **HeroBackground.tsx**: Animated background elements
  - **HeroContent.tsx**: Main content with animated text
  
- **/Portfolio**: Portfolio showcase components
  - **Portfolio.tsx**: Portfolio project grid with filtering
  - **PortfolioItem.tsx**: Individual portfolio items with hover effects
  - **PortfolioFilter.tsx**: Category filtering UI
  
- **/ProjectDetail**: Project detail components
  - **ProjectDetail.tsx**: Detailed project information with sections
  - **ProjectGallery.tsx**: Project image gallery with lightbox
  - **ProjectSpecs.tsx**: Technical specifications display

#### `/store` Directory (State Management)

- **store.ts**: Redux store configuration using Rematch with plugins and middleware
- **models.ts**: Rematch models definition and type exports
- **/models**: Individual state models
  - **app.ts**: Application state model for global app state
  - **ui.ts**: UI state model for interface state (menu, modals, etc.)
  - **audio.ts**: Audio state model for sound management
  - **experience.ts**: 3D experience state model

#### `/styles` Directory (Global Styles)

- **index.css**: Main CSS entry point that imports all global styles
- **/config**: CSS configuration
  - **variables.css**: CSS variables for colors, spacing, typography, etc.
  - **breakpoints.css**: Media query breakpoints for responsive design
  - **animations.css**: Global animation definitions
  
- **/global**: Global styles
  - **reset.css**: CSS reset styles for consistent rendering
  - **typography.css**: Global typography styles for text elements
  - **layout.css**: Global layout utilities
  
- **/mixins**: CSS mixins
  - **responsive.css**: Responsive design mixins for media queries
  - **animations.css**: Animation mixins for common effects
  - **typography.css**: Typography mixins for consistent text styling

#### `/utils` Directory (Utility Functions)

- **arrays.ts**: Array manipulation utilities for data transformation
- **breakpoints.ts**: Responsive breakpoint utilities for conditional rendering
- **EventEmitter.js**: Custom event emitter implementation for component communication
- **events.ts**: Event handling utilities for browser events
- **fonts.ts**: Font loading utilities with WebFontLoader
- **lerp.ts**: Linear interpolation functions for smooth animations
- **math.ts**: Mathematical utility functions for calculations and transformations

#### `/vendor` Directory (Third-Party Libraries)

- **/gsap**: GSAP animation library customizations
  - **index.ts**: GSAP configuration and plugin registration
  - **plugins/**: Custom GSAP plugins and extensions

### `/public` Directory (Static Assets)

- **/audio**: Audio files
  - **background.mp3**: Looping background music
  - **bell1.mp3, bell2.mp3, bell3.mp3, bell4.mp3**: UI sound effects for different interactions
  - **hover1.mp3, hover2.mp3**: Hover sound effects for UI elements
  - **intro.mp3**: Introduction sound played on site load
  - **vangelis.mp3**: Vangelis soundtrack for special sections
  
- **/draco**: Draco 3D model compression
  - **draco_decoder.js**: Draco decoder for compressed 3D models
  - **draco_decoder.wasm**: WebAssembly Draco decoder for faster processing
  - **draco_encoder.js**: Draco encoder for model compression
  - **draco_wasm_wrapper.js**: WebAssembly wrapper for Draco
  - **/gltf**: GLTF-specific Draco utilities
  
- **/icons**: SVG icons
  - **arrow-left.svg**: Left arrow icon for navigation
  - **arrow-right.svg**: Right arrow icon for navigation
  
- **/images**: Image assets
  - **og_image.png**: Open Graph image for social sharing
  - **[Project images]**: Various project images and thumbnails
  
- **/locales**: Translation files
  - **/en**: English translations in JSON format
    - **translation.json**: Main English translation file
    - **projects.json**: Project-specific translations
  - **/it**: Italian translations in JSON format
    - **translation.json**: Main Italian translation file
    - **projects.json**: Project-specific translations
  
- **/models**: 3D models
  - **/Man**: 3D character model with animations
    - **man.glb**: GLTF binary model file
    - **animations/**: Character animation files
  
- **/projects**: Project-specific assets
  - **/aq, /fb, /feudi, /sk**: Project folders with assets and media
  
- **/textures**: Texture files
  - **/env**: Environment textures for reflections
  - **/glow**: Glow effect textures for highlights
  - **/man**: Character textures for the 3D model
  - **/noise**: Noise textures for various effects
  - **/outline**: Outline effect textures for highlighting
  - **/smoke**: Smoke effect textures for particles
  
- **favicon.ico**: Website favicon
- **site.webmanifest**: Web app manifest for PWA support
- **android-chrome-192x192.png**: Android Chrome icon
- **android-chrome-512x512.png**: Android Chrome large icon
- **apple-touch-icon.png**: iOS home screen icon

### `/fonts` Directory (Font Assets)

- **/iskry**: Iskry font files
  - **Iskry-Bold.woff**: Iskry Bold WOFF format for modern browsers
  - **Iskry-Bold.woff2**: Iskry Bold WOFF2 format for optimized loading
  
- **/MSDF**: Multi-channel signed distance field fonts for 3D text
  - **SairaSemiCondensed-SemiBold-msdf.json**: MSDF font configuration
  - **SairaSemiCondensed-SemiBold.png**: MSDF font texture atlas

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

Translation files are located in `public/locales/` and are loaded dynamically based on user language preference.

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

## 🧩 Code Organization Principles

### Component Structure

Components follow a consistent structure:

1. **Component Directory**: Named after the component
2. **Component File**: Contains the React component (TSX)
3. **Module CSS File**: Scoped styles using CSS Modules
4. **Index File**: Exports the component

Example:
```
/Button
  Button.tsx
  Button.module.css
  index.ts
```

### State Management

The application uses a layered state management approach:

1. **Component State**: For UI-specific state
2. **Custom Hooks**: For reusable logic
3. **Redux Store**: For global application state

### Styling Methodology

Styles are organized using:

1. **CSS Modules**: For component-scoped styles
2. **Global Styles**: For typography, reset, and variables
3. **CSS Variables**: For consistent theming
4. **PostCSS**: For advanced CSS features

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
