import assert from "node:assert/strict";
import { mkdtemp, mkdir, readFile, rm, writeFile } from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import { test } from "node:test";
import { validateLibrary, validateSkill } from "./validate-skills.mjs";

async function fixture(t, text) {
  const root = await mkdtemp(path.join(os.tmpdir(), "skills-validation-"));
  t.after(() => rm(root, { recursive: true, force: true }));
  const skill = path.join(root, "example-skill");
  await mkdir(skill);
  if (text !== undefined) await writeFile(path.join(skill, "SKILL.md"), text);
  return { root, skill };
}

const valid = "---\nname: example-skill\ndescription: Review a proposed change when asked for feedback.\n---\nReview the change against the stated requirements.\n";

test("accepts a portable skill and agent extension fields", async (t) => {
  const text = valid.replace("description:", "disable-model-invocation: true\ndescription:");
  const { skill } = await fixture(t, text);
  assert.deepEqual(await validateSkill(skill), []);
});

test("accepts an empty library", async (t) => {
  const { root, skill } = await fixture(t);
  await rm(skill, { recursive: true });
  assert.deepEqual(await validateLibrary(root), { count: 0, errors: [] });
});

test("reports missing entrypoints instead of silently skipping directories", async (t) => {
  const { root } = await fixture(t);
  const result = await validateLibrary(root);
  assert.equal(result.count, 1);
  assert.equal(result.errors.length, 1);
  assert.match(result.errors[0], /example-skill:.*SKILL\.md/);
});

test("rejects malformed YAML and duplicate keys", async (t) => {
  for (const text of [
    valid.replace("name: example-skill", "name: ["),
    valid.replace("name: example-skill", "name: example-skill\nname: duplicate"),
  ]) {
    const { skill } = await fixture(t, text);
    assert.ok((await validateSkill(skill)).length > 0);
  }
});

test("rejects invalid names, mismatches, and missing descriptions", async (t) => {
  for (const text of [
    valid.replace("example-skill", "Example--Skill"),
    valid.replace("example-skill", "different-name"),
    valid.replace(/description:.*\n/, ""),
    valid.replace(/description:.*\n/, "description: 123\n"),
    valid.replace("example-skill", "a".repeat(65)),
    valid.replace(/description:.*\n/, `description: ${"a".repeat(1025)}\n`),
  ]) {
    const { skill } = await fixture(t, text);
    assert.ok((await validateSkill(skill)).length > 0);
  }
});

test("rejects missing frontmatter and empty instructions", async (t) => {
  for (const text of ["Instructions without metadata.", valid.split("---\n").slice(0, 2).join("---\n") + "---\n"]) {
    const { skill } = await fixture(t, text);
    assert.ok((await validateSkill(skill)).length > 0);
  }
});

test("accepts folded descriptions, CRLF, and standard optional metadata", async (t) => {
  const text = valid.replace(/description:.*\n/, "description: >\n  Review proposed changes.\nlicense: MIT\ncompatibility: Requires git.\nallowed-tools: Bash(git:*)\nmetadata:\n  author: Andrew\n").replaceAll("\n", "\r\n");
  const { skill } = await fixture(t, text);
  assert.deepEqual(await validateSkill(skill), []);
});

test("rejects invalid standard optional fields", async (t) => {
  for (const field of ["compatibility: 42", `compatibility: ${"a".repeat(501)}`, "metadata: []", "metadata:\n  version: 1", "license: null", "allowed-tools: []"]) {
    const { skill } = await fixture(t, valid.replace("description:", `${field}\ndescription:`));
    assert.ok((await validateSkill(skill)).length > 0);
  }
});

test("the authoring template becomes valid when filled in", async (t) => {
  const template = await readFile(new URL("../templates/SKILL.md.template", import.meta.url), "utf8");
  const text = template.replaceAll(/\{\{([^}]+)\}\}/g, (_, placeholder) => placeholder === "skill-name" ? "example-skill" : "Provide useful instructions for the requested task.");
  const { root } = await fixture(t, text);
  assert.deepEqual(await validateLibrary(root), { count: 1, errors: [] });
});
