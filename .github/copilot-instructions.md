# Copilot Instructions for DRVN

## General
- Use React Native with functional components and hooks.
- Prefer TypeScript for all new files and components.
- Use named exports unless a default export is required by convention.

## AI Interaction & Transparency
- **Reasoning**: Always provide a brief explanation for architectural decisions, complex logic, or why a specific library/pattern was chosen.
- **Explicit Changes**: Never perform "hidden" changes. Every modification to the code must be visible in the provided snippet. 
- **No Deletions without Notice**: Do not omit existing code blocks or logic unless specifically asked to refactor; if code is removed for brevity in a response, explicitly state: "Remaining code remains unchanged."
- **Verification**: If a change involves a navigation route or a global constant, remind the user to verify the corresponding file (e.g., `_layout.tsx` or `constants/index.ts`).

## UI Components
- Use components from components/ui (e.g., AppText, Button, IconButton) or components/shared for UI consistency.
- Always use AppText for rendering text, not the default Text component.
- Use the variant prop in AppText (prefer regular, medium, semi-bold) to switch Geist Mono weights instead of setting fontWeight in a StyleSheet.
- Use Spacer for layout spacing instead of manual margin/padding where possible.

## Styling
- Use constants from constants/index.ts (COLORS, FONT_SIZE, LAYOUT) for all styling.
- If a new constant is needed, suggest where it should be added in constants/.
- Do not hardcode colors, font sizes, or spacing values. If necessary, suggest adding them to the constants file.
- Use StyleSheet.create for styles in React Native components.

## Navigation
- Use expo-router for navigation and follow the folder-based routing structure.
- Place screen components in the appropriate app/(tabs)/ or app/ subfolders.

## State & Logic
- Use custom hooks from components/hooks or create new ones for reusable logic.
- Keep business logic out of UI components when possible.

<!-- ## Testing
- Write tests for new components and hooks using Jest and React Native Testing Library.
- Place test files alongside the components they test or in a __tests__ folder. -->

## Documentation & Comments
- Add JSDoc comments for exported functions, components, and hooks.
- Comment complex logic or non-obvious code.

## Best Practices
- Prefer async/await for asynchronous code.
- Avoid deprecated APIs and patterns.
- Do not use eval or other unsafe code.

## Project Structure
- Keep files organized by feature or domain (e.g., home, post, profile).
- Use index.ts files for barrel exports where appropriate.

## #review (DRVN Project)

- **Trigger**: When the user starts a message with "#review", analyze the provided code for the following DRVN-specific standards:

### UI Consistency
- Ensure all text uses the `AppText` component (never default `Text`).
- All colors, font sizes, and spacing must use constants from `constants/index.ts` (e.g., `COLORS`, `FONT_SIZE`, `LAYOUT`, `SPACING`).
- The app theme should be pure black (`#000`) for backgrounds and consistent with DRVN’s design system.
- Use `Spacer` for vertical spacing, not manual margin/padding.

### Architectural Quality
- No hardcoded color, font size, or spacing values—suggest adding missing values to constants.
- UI components should not contain business logic; logic should be moved to hooks or controller functions.
- All navigation must use expo-router and follow folder-based routing conventions.

### TypeScript Quality
- Avoid `any` types; all props and state should be strictly typed.
- All exported functions, components, and hooks must have clear interface/type definitions.
- Prefer named exports unless a default export is required by convention.

### Performance
- All lists must have a `key` prop for each item.
- Heavy calculations or derived data inside render loops should be wrapped in `useMemo` or moved outside the render.
- Avoid unnecessary re-renders by memoizing components or values where appropriate.

### Documentation & Comments
- All exported functions, components, and hooks should have JSDoc comments.
- Complex logic should be commented for clarity.

### Review Summary
- At the end of the review, provide a "Review Summary" listing all identified issues.
- Provide a "Refactored Snippet" that resolves the most critical issues, following DRVN’s conventions.

---

**Note:**  
If a change involves navigation routes or global constants, remind the user to verify the corresponding file (e.g., `_layout.tsx` or `constants/index.ts`).
