---
description: Add a new entry to the in-app changelog
tags: [changelog, documentation]
---

# Add Changelog Entry

Add a new entry to the in-app changelog data file.

## Instructions

1. **Ask the user for entry details:**
   - Version number (or "Unreleased" for upcoming changes)
   - Release date (or "TBD" for unreleased)
   - List of changes with their types

2. **Change types available:**
   - `feature` - New features or capabilities
   - `fix` - Bug fixes
   - `improvement` - Enhancements to existing features
   - `docs` - Documentation updates

3. **Update the changelog data file:**
   - Open `example/src/data/changelog.ts`
   - Add new entry at the top of the `changelogData` array
   - Follow the existing structure:
     ```typescript
     {
       version: 'x.y.z',
       date: 'Month DD, YYYY',
       changes: [
         {
           type: 'feature',
           title: 'Short title',
           description: 'Optional detailed description'
         }
       ]
     }
     ```

4. **Also update the root CHANGELOG.md:**
   - Add entry following the conventional changelog format
   - Include commit references if available
   - Keep formatting consistent with existing entries

5. **Validate the update:**
   - Ensure TypeScript types are satisfied
   - Verify the changelog screen will render correctly
   - Show the user a preview of what was added

## Notes

- For unreleased changes, use version: "Unreleased"
- Keep titles concise (under 50 characters)
- Use descriptions for more context when needed
- Group related changes together
