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
- Do not hardcode colors, font sizes, or spacing values.
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
