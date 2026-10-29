---
name: iterate-design
description: Refine an existing interface in an interactive HTML copy, preview component alternatives, and apply the chosen design to the app when requested.
---

# Iterate Design

Make an interactive copy of an existing interface and refine it with the user. Keep the actual app untouched until they ask to apply the changes.

## Make the copy

Use the user’s URL, screenshot, or description to identify the page and its source. A URL is sufficient; do not require the user to open a preview. Inspect the actual page and source when accessible. Reproduce the requested area with enough surrounding context to judge it, using the app’s actual styles, fonts, assets, content, and responsive layout where feasible.

Before using an existing screen or component as a reference, identify its revision and compare it with the intended reference when one is available. If the checkout is behind, inspect the intended revision; preserve local work and the user's chosen branch. State which revision informed the copy and disclose when the reference cannot be checked.

Save one self-contained HTML file in the repo, clearly named as an exploratory copy, near the relevant page or in the project’s existing artifact location. Use inline CSS and JavaScript so it opens without a build step. A short HTML comment can identify the source page and any simulated behavior.

Support the copied area’s UI interactions, including selections, dialogs, dependent content, and validation. Use representative data and in-memory state in place of live APIs or backend processing.

Compare the copy with the actual page at the same viewport and exercise its controls before presenting it. Check typography, spacing, colors, imagery, and layout; resolve material unintended differences where feasible. If assets, styles, or the original cannot be accessed, identify the visible approximations and what could not be verified. Do not present an approximate copy as a faithful baseline.

## Iterate

Edit the same HTML file as the user gives feedback. Preserve unrelated elements and earlier refinements. Changes can address appearance, wording, grouping, hierarchy, navigation, or task order. Check affected interactions, keyboard access, and responsive layouts.

## Compare component options

When the user requests component recommendations or alternatives, or expresses design uncertainty, render three distinct, interactive options by default using **Show the result**.

Keep the comparison scoped to the component and the decision under discussion. Use consistent content, label the options A/B/C, and briefly explain their tradeoffs. Arrange them side by side where space permits and stack them on narrow screens.

Keep the working copy unchanged until the user chooses or combines options, then integrate their choice.

## Show the result

Include a browser-openable URL to the current design: use an available preview URL, or an absolute `file://` URL for the saved HTML. Keep it pointing to the latest iteration, including component alternatives when shown.

Also link the HTML file. Use inline HTML rendering for design alternatives when available; for ordinary iterations, the URL and file link are sufficient. In T3 Code, show alternatives using `html_preview` followed by `html_render`. Follow the host’s theme and sizing requirements; keep presentation adjustments separate from the saved app-styled copy.

Use the user’s reply to identify their choice unless the host explicitly reports selections from the preview.

## Capture when done

Fold the validated design into the app using its existing conventions and real behavior. Compare the rendered app with the approved exploration at desktop and mobile widths, including copy, layout, typography, assets, and interactions. Use the actual app’s existing design as the baseline for areas the user did not choose to change, especially where the exploration was approximate. Fix unintended differences and report intentional differences or verification limits; do not claim fidelity that has not been checked.

Preserve the HTML exploration on a throwaway branch and record the question, decision, and branch pointer in the implementation issue or commit. Once the implementation is verified and the branch contains the exploration, remove the HTML artifacts created for this work from the working tree and confirm none remain. If verification or preservation fails, retain them and report what remains. Main keeps only the validated changes.
