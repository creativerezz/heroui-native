---
description: Generate or update component documentation
tags: [documentation, component]
---

# Component Documentation Generator

Generate comprehensive documentation for a HeroUI Native component.

## Instructions

1. **Ask the user which component needs documentation:**
   - Component name
   - Whether to create new docs or update existing

2. **Analyze the component:**
   - Read the component source files
   - Extract props from TypeScript types
   - Identify variants and styles
   - Note any compound components (sub-components)
   - Check for hooks or utilities

3. **Create documentation file at `docs/components/[component-name].md`:**

   ```markdown
   # Component Name

   Brief description of what the component does and when to use it.

   ## Installation

   Component is included in the core package:
   ```bash
   npm install heroui-native
   ```

   ## Import

   ```typescript
   import { ComponentName } from 'heroui-native';
   ```

   ## Usage

   ### Basic Example
   [Code example]

   ### Variants
   [Show different variants with code]

   ### With Compound Components
   [If applicable]

   ## API Reference

   ### Props

   | Prop | Type | Default | Description |
   |------|------|---------|-------------|
   | ... | ... | ... | ... |

   ### Variants

   Describe available variants and their options.

   ### Compound Components

   List and describe sub-components if applicable.

   ## Examples

   ### Example 1: [Use Case]
   [Code and description]

   ### Example 2: [Use Case]
   [Code and description]

   ## Accessibility

   - List accessibility features
   - ARIA attributes used
   - Keyboard interactions

   ## Related Components

   - List related components

   ## Notes

   - Any important notes or gotchas
   ```

4. **After generation:**
   - Show the user the documentation
   - Ask if any sections need more detail
   - Suggest adding the component to the main README

## Tips

- Look at existing component docs for reference
- Include practical examples
- Highlight common use cases
- Document all props thoroughly
- Include accessibility information
