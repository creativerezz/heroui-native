# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

HeroUI Native is a React Native UI component library built with Uniwind (Tailwind CSS for React Native). It provides beautiful, accessible, and performant components with automatic dark mode support and extensive theming capabilities.

**Version:** 1.0.0-beta.1  
**Package Manager:** Yarn 3.6.1 (required - do not use npm)  
**Architecture:** Monorepo with library (root) and example app (`example/`)

## Development Commands

### Setup
```bash
# Install dependencies (run from root)
yarn
```

### Library Development
```bash
# Type check
yarn typecheck

# Lint all files
yarn lint

# Fix linting errors
yarn lint --fix

# Run tests
yarn test

# Build library
yarn prepare
# Or explicitly: bob build

# Clean build artifacts
yarn clean
```

### Example App
```bash
# Start Metro bundler
yarn example start

# Run on iOS
yarn example ios

# Run on Android
yarn example android

# Run on Web (not recommended - mobile-focused)
yarn example web
```

### Release Process
```bash
# Create new release (uses bumpp)
yarn release

# Sync version across packages
yarn sync-version

# Generate changelog
yarn changelog
```

## Architecture

### Monorepo Structure
- **Root**: Library source code, build configuration, and tooling
- **`/src`**: Library source code
  - **`/components`**: High-level styled components (Button, Card, Dialog, etc.)
  - **`/primitives`**: Unstyled accessible base components (adapted from rn-primitives)
  - **`/helpers`**: Utilities, hooks, and theme helpers
  - **`/providers`**: HeroUINativeProvider and context providers
  - **`/styles`**: CSS files for theming (variables, theme, utilities)
- **`/example`**: Example app using Expo Router to showcase components
- **`/lib`**: Built library output (generated, not in source control except for published package)

### Component Architecture

**Pattern**: Compound Component Pattern with strict file organization

Every component follows this structure:
1. **`[component].types.ts`** - TypeScript interfaces with JSDoc
2. **`[component].constants.ts`** - Constants in SCREAMING_SNAKE_CASE (display names, animations)
3. **`[component].styles.ts`** - Tailwind-variants definitions
4. **`[component].utils.ts`** - Component-specific utilities (optional)
5. **`[component].tsx`** - Main component implementation
6. **`index.ts`** - Public exports

Example from Button component:
- Uses Root/Label compound pattern
- Exports from `src/index.tsx` for tree-shaking
- Context for sharing state between subcomponents

### Primitives Layer

Located in `/src/primitives`, these are **unstyled, accessible base components** adapted from rn-primitives library:
- Provide foundation for styled components
- Handle accessibility, state management, and composition
- Examples: Accordion, Checkbox, Dialog, Popover, Select, Switch, Tabs

**Important**: These are forked/adapted - do not modify without understanding impact on consuming components.

### Styling System

**Uniwind** (Tailwind CSS for React Native) with **tailwind-variants**:
- All styling uses CSS classes via `className` prop
- Theme tokens via CSS variables (e.g., `--color-accent`, `--radius-lg`)
- Automatic dark mode support
- Custom themes via Uniwind's variant system

**Global CSS structure**:
```css
@import 'tailwindcss';
@import 'uniwind';
@import 'heroui-native/styles';
@source './node_modules/heroui-native/lib';
```

**Theme customization**: Override CSS variables in `@theme` blocks. Must register extra themes in Metro config's `extraThemes` array.

### Theming

Two-layer CSS variable system:
1. **Base variables** (`/src/styles/variables.css`) - Foundation colors that change with light/dark mode
2. **Calculated variables** (`/src/styles/theme.css`) - Auto-derived using `color-mix()` for consistent variations

Key theme tokens:
- Colors: `--color-{background,foreground,surface,accent,default,success,warning,danger}`
- Variants: `--color-{variant}-{hover,soft,foreground}`
- Radius: `--radius-{xs,sm,md,lg,xl,2xl,3xl,4xl}` (scaled from base `--radius`)
- Fields: `--color-field-{background,foreground,placeholder,border}`

**Utilities**:
- `useThemeColor(themeColor)` - Get theme color as hex
- `cn(...)` - Merge Tailwind classes with conflict resolution

## Key Conventions

### Component Engineering

**File naming**: kebab-case for all files (e.g., `button.tsx`, `hero-ui-native.tsx`)

**Required for new components**:
1. Create all required files in order (types → constants → styles → utils → component → exports)
2. Add to `/src/index.tsx` exports
3. Create example screen in `/example/src/screens/[component]-screen.tsx`
4. Add navigation link alphabetically in example app
5. Pass `yarn typecheck` and `yarn lint`

**Do NOT**:
- Add new component variants without design system approval
- Modify component behavior/API without discussion
- Change visual designs
- Add features not in roadmap

**Checklist before submitting component**:
- [ ] All types with JSDoc documentation
- [ ] Constants properly named (SCREAMING_SNAKE_CASE)
- [ ] Styles use tailwind-variants
- [ ] Compound pattern implemented
- [ ] Proper ref forwarding
- [ ] Context pattern if needed
- [ ] Exported from `src/index.ts`
- [ ] Example screen created
- [ ] TypeScript passes
- [ ] Linting passes

### Commit Conventions

Uses **conventional commits** (enforced by commitlint):
- `feat:` - New features
- `fix:` - Bug fixes
- `refactor:` - Code refactoring
- `docs:` - Documentation changes
- `test:` - Test additions/updates
- `chore:` - Tooling changes

**Git hooks** (via lefthook):
- Pre-commit: Runs ESLint on staged files + typecheck
- Commit-msg: Validates commit message format

### TypeScript & Linting

**TypeScript config** (`tsconfig.json`):
- Strict mode enabled
- `noUncheckedIndexedAccess: true`
- `noUnusedLocals` and `noUnusedParameters: true`
- Module resolution: Bundler

**ESLint config** (`eslint.config.mjs`):
- Extends `@react-native` and `prettier`
- Prettier plugin with organize imports
- Single quotes, 2-space tabs, ES5 trailing commas

**Type checking**: Uses separate config `tsconfig.typecheck.json` via custom script

### Peer Dependencies

**Critical versions** (must match exactly to avoid bugs):
- `react-native-reanimated@~4.1.0`
- `react-native-safe-area-context@5.6.0`
- `react-native-worklets@^0.5.1`
- `react-native-svg@^15.12.1`
- `tailwind-variants@^3.1.0`
- `tailwind-merge@^3.3.1`
- `@gorhom/bottom-sheet@^5`

### Build System

**react-native-builder-bob**:
- Targets: ESM module + TypeScript definitions
- Source: `src/`
- Output: `lib/module/` (JS) + `lib/typescript/` (types)
- Build config in `package.json` under `react-native-builder-bob`

### Metro Configuration (Example App)

Custom Metro config handles monorepo setup:
- Watches root directory for library changes
- Blocks peer dependencies from root `node_modules`
- Forces example's `node_modules` for peer deps
- Uniwind configuration with CSS entry point and custom themes

## Important Files

- **`src/index.tsx`**: Main library exports
- **`src/styles/theme.md`**: Complete theming documentation
- **`src/primitives/README.md`**: Primitives attribution and usage
- **`src/providers/hero-ui-native/provider.md`**: Provider configuration guide
- **`CONTRIBUTING.md`**: Detailed contribution guidelines and component engineering design system
- **Component `.md` files**: Each component has documentation in its directory

## Common Workflows

### Adding a New Component
1. Review CONTRIBUTING.md for component engineering standards
2. Ensure feature is in roadmap or has been discussed in GitHub Discussions
3. Create required files in `/src/components/[component]/` following naming convention
4. Implement using compound component pattern + tailwind-variants
5. Export from `src/index.tsx`
6. Create example screen in `/example/src/screens/`
7. Test in example app
8. Run `yarn typecheck && yarn lint`
9. Ensure all files follow conventions before PR

### Fixing a Bug
1. Find issue in GitHub Issues
2. Create fix in appropriate component/helper file
3. Add/update tests if applicable
4. Run `yarn typecheck && yarn lint && yarn test`
5. Test in example app
6. Submit PR with issue number reference

### Testing Theme Changes
1. Modify CSS variables in `src/styles/variables.css` or `src/styles/theme.css`
2. If adding new theme variant, update `example/metro.config.js` `extraThemes`
3. Run example app: `yarn example start`
4. Toggle dark mode and test theme switching
5. Verify changes across multiple components in example app

## Notes

- **Design System**: Strict adherence to Figma designs - do not deviate
- **Web Support**: Not recommended/focused - primarily mobile-first
- **Uniwind**: Tailwind CSS for React Native - not NativeWind (migration guide available)
- **Documentation**: Each component has `.md` file in its directory
- **Community**: Use GitHub Discussions for feature proposals, Discord for informal chat
