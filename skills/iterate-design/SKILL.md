---
name: iterate-design
description: Refine an existing interface in an interactive HTML copy, preview component alternatives, and apply the chosen design to the app when requested.
---

# Iterate Design

Make an interactive copy of an existing interface and refine it with the user. Keep the actual app untouched until they ask to apply the changes.

## Make the copy

Use the user’s screenshot or description to find the page’s source. Reproduce the requested area with enough surrounding context to judge it, matching the app’s styles, content, and responsive layout.

Save one self-contained HTML file in the repo, clearly named as an exploratory copy, near the relevant page or in the project’s existing artifact location. Use inline CSS and JavaScript so it opens without a build step. A short HTML comment can identify the source page and any simulated behavior.

Support the copied area’s UI interactions, including selections, dialogs, dependent content, and validation. Use representative data and in-memory state in place of live APIs or backend processing.

Check the copy against the original and exercise its controls before presenting it. Mention material approximations or verification limits.

## Iterate

Edit the same HTML file as the user gives feedback. Preserve unrelated elements and earlier refinements. Changes can address appearance, wording, grouping, hierarchy, navigation, or task order. Check affected interactions, keyboard access, and responsive layouts.

## Compare component options

When the user requests component recommendations or alternatives, or expresses design uncertainty, render three distinct, interactive options by default using **Show the result**.

Keep the comparison scoped to the component and the decision under discussion. Use consistent content, label the options A/B/C, and briefly explain their tradeoffs. Arrange them side by side where space permits and stack them on narrow screens.

Keep the working copy unchanged until the user chooses or combines options, then integrate their choice.

## Show the result

Include a browser-openable URL to the current design: use an available preview URL, or an absolute `file://` URL for the saved HTML. Keep it pointing to the latest iteration, including component alternatives when shown.

Also link the HTML file and use inline HTML rendering when available. In T3 Code, check the HTML with `html_preview`, inspect the layout and console output, then display it with `html_render`. Follow the host’s theme and sizing requirements; keep presentation adjustments separate from the saved app-styled copy.

Use the user’s reply to identify their choice unless the host explicitly reports selections from the preview.

## Capture when done

Fold the validated design into the app using its existing conventions and real behavior, then verify the result. Preserve the HTML exploration on a throwaway branch and record the question, decision, and branch pointer in the implementation issue or commit. Main keeps only the validated changes.
