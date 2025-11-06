---
description: Create a new showcase/demo for the example app
tags: [showcase, example, demo]
---

# Scaffold Showcase

Create a new showcase demonstration in the example app to highlight component usage in real-world scenarios.

## Instructions

1. **Ask the user for showcase details:**
   - Showcase name (e.g., "E-commerce Product Card", "Chat Interface", "Settings Screen")
   - Which components it will demonstrate
   - Key interactions or features to highlight
   - Design inspiration (if any)

2. **Create showcase structure:**
   - Create directory: `example/src/components/showcases/[showcase-name]/`
   - Create main component: `index.tsx`
   - Create supporting components as needed
   - Create mock data file if needed: `data.ts` or `mock.ts`

3. **Add showcase screen:**
   - Create route at: `example/src/app/(home)/showcases/[showcase-name].tsx`
   - Add to showcases layout if needed
   - Include navigation from main showcases list

4. **Showcase should include:**
   - Beautiful, realistic UI design
   - Smooth animations using Reanimated
   - Multiple HeroUI components working together
   - Interactive elements (buttons, gestures, etc.)
   - Responsive layout
   - Theme support (dark/light)
   - Comments explaining key patterns

5. **Design guidelines:**
   - Follow modern mobile app design trends
   - Use subtle animations and micro-interactions
   - Include realistic placeholder content
   - Make it feel like a production app
   - Reference existing showcases for quality bar:
     - `cooking-onboarding` - Popover-based onboarding flow
     - `linear-task` - Dialog-based task management
     - `paywall` - Subscription screen with animations

6. **After creation:**
   - Test on both iOS and Android (if possible)
   - Verify dark mode looks good
   - Check animations are smooth
   - Add to home screen showcase carousel if it's impressive

7. **Update showcase list:**
   - Add new showcase to `example/src/app/(home)/showcases/index.tsx`
   - Update showcase count in home screen
   - Take screenshots for documentation

## Example Structure

```
showcases/
  [showcase-name]/
    index.tsx         # Main showcase component
    components/       # Sub-components
      header.tsx
      content.tsx
    data.ts          # Mock data
    types.ts         # TypeScript types
```

## Tips

- Look at existing showcases for inspiration
- Use gesture handlers for interactive elements
- Add spring animations for organic feel
- Include loading and empty states
- Make it screenshot-worthy for marketing materials
