# HTML artifacts

Create a separate product-owner artifact, preserving the original. Read the supplied HTML or artifact content when available. For a screenshot, use only visible, legible content and identify cropped or missing sections; request the full source only when those gaps block a useful explanation.

Organize around product outcomes rather than the source's code structure. Lead with who benefits and the problem being addressed. For each outcome, show the use case, expected value, usability implications, and connection to a known product goal. Include material status, uncertainty, tradeoffs, and decisions alongside the outcome they qualify. Preserve links back to source evidence when available.

Translate architecture diagrams into user scenarios or product consequences when a supported connection exists. For example, a proposal to consolidate judging and coaching request handling could become “Make judging and coaching easier to keep dependable.” Explain that shared handling may make recovery behavior easier to maintain and test while each activity stays independent. Treat this as an expected maintenance benefit; the proposal alone establishes neither a current user-facing bug nor a released improvement. Keep architecture detail in an optional evidence section if useful for traceability.

Choose a visual form that clarifies the product meaning: scenario cards, a user journey, or a before-and-after comparison. Label proposed future behavior and illustrative scenarios explicitly. Carry confidence labels in their original meaning; confidence in an architecture recommendation does not establish product priority or measured user impact.

Deliver an actual HTML artifact rather than an HTML code block. Use the environment's artifact tools when available; otherwise save a self-contained `.html` file and link its path. Keep styles and any necessary scripts inline, with readable contrast, semantic headings, and a layout usable on narrow screens. Match host styling requirements when rendering inline. No particular framework or artifact service is required.

Preview or render through available HTML tools and inspect the result. If rendering is unavailable, inspect the document and disclose that visual validation was unavailable. Finish when the new artifact is accessible, its substantive outcomes and caveats are accounted for, and it can be understood without decoding the technical original.
