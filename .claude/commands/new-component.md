---
description: Generate a new HeroUI Native component with all necessary files
tags: [component, generator, scaffold]
---

# Component Generator

Generate a new component for the HeroUI Native library following the project's architecture and conventions.

## Instructions

1. **Ask the user for component details:**
   - Component name (e.g., "Badge", "Toast", "Switch")
   - Component description
   - Whether it needs primitives (low-level building blocks)
   - Whether it needs an example screen

2. **Create the component structure:**
   - Create `src/components/[component-name]/index.tsx` - Main component exports
   - Create `src/components/[component-name]/[component-name].tsx` - Main component
   - Create `src/components/[component-name]/[component-name].styles.ts` - Tailwind variant styles
   - Create `src/components/[component-name]/[component-name].types.ts` - TypeScript types
   - If primitives needed: Create `src/primitives/[component-name]/` directory

3. **Component structure should include:**
   - Proper TypeScript types with JSDoc comments
   - Tailwind variants using `tv()` from tailwind-variants
   - Support for `className` and `classNames` props
   - Proper React forwardRef pattern
   - Compound component pattern if needed (e.g., Card.Header, Card.Body)
   - Theme color support using `useThemeColor` hook

4. **If example screen requested:**
   - Create `example/src/app/(home)/components/[component-name].tsx`
   - Add route to `example/src/app/(home)/components/_layout.tsx`
   - Include usage examples with different variants

5. **Follow existing patterns:**
   - Look at similar components like Button, Card, Chip for reference
   - Use consistent naming conventions
   - Include proper exports in `src/index.tsx`
   - Add component to README if it's a major component

6. **After generation:**
   - Run `yarn lint --fix` to ensure code style
   - Run `yarn typecheck` to verify types
   - Show the user what files were created and next steps

## Example Component Structure

```typescript
// Component file should follow this pattern:
import { forwardRef } from 'react';
import type { ComponentProps } from './component.types';
import { componentStyles } from './component.styles';

export const Component = forwardRef<View, ComponentProps>((props, ref) => {
  const { className, classNames, ...rest } = props;
  const styles = componentStyles({ className, classNames });

  return <View ref={ref} className={styles.base()} {...rest} />;
});

Component.displayName = 'Component';
```
