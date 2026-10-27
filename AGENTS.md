# Working on this library

This is Andrew’s personal skill library, structured so others can use it too.
Follow the user’s requested scope when creating or changing skills.

- Keep installable skills in `skills/<skill-name>/SKILL.md`. The folder and
  frontmatter name must match. Keep the layout flat until there is a reason to
  introduce categories.
- Use the open Agent Skills format. Write a precise description that explains
  the capability and when it applies. Preserve any existing invocation policy.
- Prefer portable instructions. Document actual tool and environment requirements;
  make agent-specific metadata or workflows optional where practical.
- Capture knowledge that changes an agent’s decisions. Avoid generic advice and
  process requirements unrelated to the skill’s purpose.
- Add supporting scripts, references, and assets only when the workflow needs
  them. Link references where the agent should read them.
- Use `templates/SKILL.md.template` as a starting point and replace its placeholders.
  Keep templates outside `skills/` and never name them `SKILL.md`.
- Add each finished skill to the README catalog. Preserve attribution and license
  notices for any adapted third-party material.
- Run `npm run check` after changes. For a new or materially changed skill, also
  try a representative request within the user’s authorized scope. Format checks
  do not establish behavioral quality.

Do not add placeholder skills to populate an empty catalog. Individual skills
will be designed separately.
