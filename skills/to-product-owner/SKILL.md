---
name: to-product-owner
description: Reframe technical output for a product owner in prose or a separate HTML artifact, explaining user value, use cases, product vision, and usability.
---

# To Product Owner

Translate the output the user identifies, or the latest substantive output in the conversation, into a product-owner explanation. If neither is available, ask for the source. This skill changes the explanation; implementation and new product planning remain separate tasks.

When the user requests an HTML artifact or a product-owner version of an existing visual artifact, follow [HTML artifacts](references/html-artifacts.md) as well as the translation guidance below. Otherwise use the requested format or concise prose.

## Find the product meaning

For each distinct feature, task, or finding, establish:

- **Use case:** Who is trying to do what, and in which situation?
- **Problem:** What obstacle, confusion, effort, or risk does the work address?
- **User value:** What can the user do better afterward? Describe the observable change in their experience.
- **Product fit:** How does that change support the stated product vision or goal? Explain the usability effect where relevant: for example, fewer steps, clearer choices, easier recovery, or more dependable completion.

Use the source and available product context to establish these connections. Label inferred benefits as expected or possible. When the vision is unavailable, explain the local value and state that alignment with the wider vision is unconfirmed. Ask for missing context only when it would materially change the explanation; otherwise state the limit and continue.

For internal work, trace the benefit through its actual consequence: easier maintenance may help the team deliver future changes, while a reliability fix may help users complete a task. Keep indirect benefits distinct from changes users can experience today. When the source establishes no user-facing effect, say so rather than inventing one.

## Write the explanation

Lead with the practical outcome and who benefits. Explain the use case and problem, then connect the change to product fit. Use a concrete before-and-after scenario when it makes the value clearer; label illustrative scenarios as examples.

Group implementation details that serve the same outcome. Retain technical terms only when they help the product owner understand a constraint or make a decision, and explain their practical meaning inline. Replace vague claims such as "better performance" with the specific task that becomes faster or easier when the source supports it.

Preserve whether the work is proposed, implemented, tested, or released, along with material limitations and tradeoffs. Distinguish measured results from expected benefits; suggest success measures only when useful, labeling them as suggestions rather than established targets or results.

Match the requested format and level of detail. For a short update, a compact paragraph can carry the explanation. For several outcomes, give each a short outcome-focused heading or bullet. Include an open question or decision only when the source leaves one that matters to the product owner.

Before finishing, check that every substantive source outcome is represented, every claimed benefit has support or an explicit uncertainty, and the explanation makes clear whose experience changes and how.
