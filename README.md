# Andrew’s Skills

My personal library of reusable agent skills, shared for anyone who finds them useful.
Skills use the open [Agent Skills format](https://agentskills.io/specification) and
keep their instructions portable across agents that support it. Individual skills
may document their own tool or environment requirements.

## Skills

No skills yet. This repository currently contains the foundation for writing and
maintaining them.

## Install

Once skills have been added, use the [skills CLI](https://github.com/vercel-labs/skills)
to choose skills and target agents. The CLI requires Node.js 22.20 or later.

From the project where you want to use the skills:

```sh
npx skills add afurusawa/skills
```

Add `-g` to install across your projects:

```sh
npx skills add afurusawa/skills -g
```

To try unpublished changes, install from this checkout’s absolute path instead:

```sh
npx skills add /absolute/path/to/skills
```

These commands will have nothing to install until the first skill exists. They
copy or link skills into the selected agents’ discovery locations; the library
itself does not require agent plugins or a custom runtime.

## Add a skill

Use a flat layout: `skills/<skill-name>/SKILL.md`.

```sh
mkdir -p skills/my-skill
cp templates/SKILL.md.template skills/my-skill/SKILL.md
```

Replace every template placeholder. Make the frontmatter `name` match the folder
name, using lowercase letters, digits, and single hyphens, up to 64 characters.
The `description` should explain what the skill does and when to use it.

Write instructions that capture useful knowledge, decisions, and preferences.
Add `references/`, `scripts/`, or `assets/` inside the skill only when needed, and
link supporting material from `SKILL.md`. Record any tool or environment
requirements using the optional `compatibility` field. Keep agent-specific
features optional and document them when used.

Validate the result, try it on a realistic request, and add a link and a short
description to the Skills section above. For adapted material, preserve the
original attribution and applicable license notices alongside the skill.

The authoring template ends in `.template` so installers do not discover it as
an actual skill.

## Development

Maintaining the library requires Node.js 22 or later. From this checkout:

```sh
npm ci
npm run check
```

`npm run validate` checks the flat directory layout, required frontmatter,
standard field types and limits, and nonempty instructions. It accepts additional
frontmatter fields for agent extensions. An empty library is valid during setup.
`npm test` tests the validator. GitHub Actions runs both on pushes and pull requests.
These checks cover format; realistic usage is needed to evaluate a skill’s behavior.

## License

[MIT](LICENSE). Repository structure inspired by
[Matt Pocock’s skills library](https://github.com/mattpocock/skills).
