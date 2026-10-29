---
name: retro-explain
description: Explain a retrospective’s proposed improvements in plain language, with specific changes and concrete examples.
disable-model-invocation: true
---

# Retro Explain

Explain the latest retro in the current conversation, or the retro the user identifies. If it is unavailable, ask for it. Treat its recommendations as proposals; this skill explains them without implementing them or running a new retrospective.

Keep the retro’s order and cover each recommendation. For each:

- Use a short, everyday heading. Lead with one concise, plain-language sentence describing the practical outcome for the user or project, then explain the problem it addresses.
- State the specific changes proposed: what would be added, edited, or removed, and where. Name relevant files, commands, checks, or instructions and explain their purpose.
- Give a concrete example showing what would happen differently after those changes. Show the actual proposed edit or behavior, beyond its general benefit. For an instruction change, show sample wording; for a tool change, show sample input and output.

Stay faithful to the retro’s scope and certainty. When it leaves implementation details open, label your concrete version as an example approach rather than an agreed plan. Use proposed names for new files or commands and distinguish them from existing ones.

Write for someone who understands the project but may not know the tooling. Use short paragraphs or bullets and explain technical terms where needed. Keep each point as short as its explanation allows.

