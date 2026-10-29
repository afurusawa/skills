---
name: iterate-design
description: Iteratively refine an existing interface in a single in-app prototype, preview component ideas inline when requested, and apply the agreed design when requested.
---

# Iterate Design

Make one interactive copy of the requested area inside the real app and refine that same copy with the user. Keep normal app behavior unchanged until they ask to apply the design.

## Make the copy

Use the user’s URL, screenshot, or description to locate the existing page, source revision, and visible state. Resolve differences between the checkout and the intended reference before copying; preserve local work and the user’s branch. If the app cannot run or the reference cannot be checked, report the blocker and verification limits.

**Copy first, change second.** Keep the real header, navigation, styles, assets, data, and content density. Copy only the requested area into a clearly named prototype component or equivalent using the project’s conventions. Keep exploratory markup and styles isolated so edits to the copy leave the normal interface unchanged.

Render the copy on the existing route when `?prototype` is present, preserving other URL parameters and page state. Gate prototype mode on the app’s development environment; normal URLs and production render the existing interface. The query flag is an entry point, not access control.

Keep the copy interactive. Reuse read-only data and simulate mutations with in-memory state. Preserve the reference’s content and behavior rather than inventing capabilities or outcomes.

Before iterating, compare the unchanged copy with the reference at the same viewport, theme, and data state. Resolve material differences in content, controls, and appearance, and exercise the copied interactions. Identify anything that could not be verified.

## Iterate

Edit the same prototype as the user gives feedback, preserving unrelated elements and earlier refinements. Keep one evolving page prototype without a page variant switcher. A request to begin working on an area establishes scope; make design changes in response to the user’s direction. Check affected interactions, keyboard access, and responsive layouts, and confirm normal URLs remain unchanged.

## Explore component ideas

When the user asks for ideas or recommendations for a component, show three distinct, interactive design options in an inline HTML comparison. Label them A/B/C, use the app’s styles and consistent representative content, and briefly explain their tradeoffs. Make the options meaningfully different in layout, hierarchy, or interaction. Keep the comparison focused on the component, with only the context needed to judge it; arrange options side by side where space permits and stack them on narrow screens.

Keep the working prototype unchanged while the user considers the options. Once they choose or combine ideas, integrate that direction into the same working prototype. Component options are temporary sketches, not additional page prototypes.

Use the host’s inline HTML renderer when available. In T3 Code, use `html_preview` followed by `html_render`. Keep host presentation styles outside the app-styled component. If inline rendering is unavailable, provide an openable preview and disclose that limitation.

## Show the result

Provide a direct URL to the page with `?prototype` enabled and the command needed to run the app if it is not already running. Keep that URL pointing to the latest iteration. Briefly describe what changed and any simulated behavior or verification limits.

## Capture when done

When the user asks to implement, fold the agreed design into the normal interface using the app’s conventions and real behavior. Compare it with the approved prototype at desktop and mobile widths, verify affected interactions, and fix unintended differences.

Preserve the exploration on a throwaway branch and record the design decision and branch pointer in the implementation issue or commit. After preservation and implementation checks succeed, remove the prototype gate, exploratory components and styles, and simulated behavior. Confirm normal URLs show the agreed design and no prototype machinery remains. If verification or preservation fails, retain the exploration and report what remains. Main keeps only the validated changes.
