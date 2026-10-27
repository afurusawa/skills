import { readdir, readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { parseDocument } from "yaml";

// Basic checks for the shared format; agent-specific extensions are allowed.
export async function validateSkill(directory) {
  const text = await readFile(path.join(directory, "SKILL.md"), "utf8");
  const match = text.match(/^---\r?\n([\s\S]*?)\r?\n---(?:\r?\n|$)([\s\S]*)$/);
  if (!match) return ["SKILL.md must begin with YAML frontmatter delimited by ---."];

  const document = parseDocument(match[1]);
  if (document.errors.length) return document.errors.map((error) => error.message);
  const data = document.toJSON();
  if (!data || typeof data !== "object" || Array.isArray(data)) {
    return ["Frontmatter must be a mapping."];
  }

  const errors = [];
  const nonemptyString = (value) => typeof value === "string" && value.trim().length > 0;
  if (
    !nonemptyString(data.name) || data.name.length > 64 ||
    !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(data.name)
  ) {
    errors.push("name must be 1–64 lowercase letters, digits, or single hyphens, with no leading or trailing hyphen.");
  }
  if (data.name !== path.basename(path.resolve(directory))) {
    errors.push("name must match the skill directory name.");
  }
  if (!nonemptyString(data.description) || data.description.length > 1024) {
    errors.push("description must be a nonempty string of at most 1024 characters.");
  }
  for (const field of ["license", "compatibility", "allowed-tools"]) {
    if (field in data && !nonemptyString(data[field])) {
      errors.push(`${field} must be a nonempty string when provided.`);
    }
  }
  if (typeof data.compatibility === "string" && data.compatibility.length > 500) {
    errors.push("compatibility must be at most 500 characters.");
  }
  if ("metadata" in data) {
    if (
      !data.metadata || typeof data.metadata !== "object" || Array.isArray(data.metadata) ||
      Object.values(data.metadata).some((value) => typeof value !== "string")
    ) {
      errors.push("metadata must be a mapping with string values.");
    }
  }
  if (!match[2].trim()) errors.push("SKILL.md must contain instructions after the frontmatter.");
  return errors;
}

export async function validateLibrary(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const skills = entries.filter((entry) => entry.isDirectory() && !entry.name.startsWith("."));
  const errors = [];
  for (const skill of skills.sort((a, b) => a.name.localeCompare(b.name))) {
    try {
      const problems = await validateSkill(path.join(directory, skill.name));
      errors.push(...problems.map((problem) => `${skill.name}: ${problem}`));
    } catch (error) {
      errors.push(`${skill.name}: ${error.message}`);
    }
  }
  return { count: skills.length, errors };
}

if (process.argv[1] && import.meta.url === pathToFileURL(path.resolve(process.argv[1])).href) {
  const directory = process.argv[2] ?? fileURLToPath(new URL("../skills/", import.meta.url));
  try {
    const { count, errors } = await validateLibrary(directory);
    if (errors.length) {
      console.error(errors.join("\n"));
      process.exitCode = 1;
    } else {
      console.log(count ? `Validated ${count} skill(s).` : "No skills yet; library foundation is valid.");
    }
  } catch (error) {
    console.error(error.message);
    process.exitCode = 1;
  }
}
