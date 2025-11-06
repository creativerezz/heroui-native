---
description: Preview and test theme colors across components
tags: [theme, colors, design]
---

# Theme Color Preview

Generate a visual preview of theme colors and test them across components.

## Instructions

1. **Analyze current theme configuration:**
   - Read `uniwind.config.ts` or theme configuration
   - Extract color definitions for all themes
   - List available theme variants (light, dark, custom themes)

2. **Create a theme preview screen (if it doesn't exist):**
   - Create `example/src/app/(home)/themes/preview.tsx`
   - Show all theme colors in a grid
   - Display color values (hex/rgb)
   - Include color contrast information

3. **Show theme colors:**
   - Background colors (background, surface, overlay)
   - Foreground colors (foreground, muted)
   - Accent/brand colors
   - Semantic colors (success, error, warning, info)
   - Border colors

4. **Component preview:**
   - Show common components with current theme:
     - Buttons (all variants)
     - Cards
     - Inputs
     - Chips
     - Surface backgrounds
   - Allow toggling between themes
   - Highlight any contrast issues

5. **Generate color palette documentation:**
   - Create markdown file showing all colors
   - Include usage guidelines
   - Show do's and don'ts
   - Accessibility notes (WCAG compliance)

6. **Interactive features:**
   - Theme switcher
   - Color picker for quick tests
   - Export current theme config
   - Compare themes side-by-side

## Output

Show the user:
1. Color palette for each theme
2. Components rendered in different themes
3. Any accessibility concerns
4. Suggestions for improvements

## Example Color Grid

```typescript
const colors = {
  background: '#ffffff',
  foreground: '#000000',
  accent: '#3b82f6',
  // ... more colors
};

// Display in a grid with:
// - Color swatch
// - Color name
// - Hex value
// - Usage context
```
