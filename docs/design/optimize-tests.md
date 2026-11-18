# Optimize Tests: agreed design

The user confirmed this scope and authority on 2026-11-17 while designing a reusable skill from a test/CI usage investigation.

## Outcome and scope

A Test Optimization assignment runs from an initial cost or speed complaint through usage attribution, profiling, choosing interventions, resolving implementation authority, implementation when authorized, comparable benchmarks, review, and a draft pull request. It targets test and CI efficiency across stacks and CI providers, rather than general autonomous engineering.

An invocation delegates routine technical judgment. The agent investigates facts itself and makes reversible implementation decisions without interviewing the user about each option. A plan-only or ambiguous request gets one evidence-backed implementation plan for approval before application, test, fixture, or CI edits. An explicit request to own implementation within a stated scope already authorizes routine changes in that scope; the agent reports its plan and proceeds without asking twice. Apart from that boundary, it asks only for missing access or a consequential decision outside its assignment. Billing changes, merging, and deployment require separate authorization.

The agent may consolidate redundant tests, move checks to cheaper layers, and restructure fixtures and CI. Meaningful regression coverage must remain before merge. Test count is evidence to reconcile, not a number to minimize or preserve blindly. Unique coverage and failure detection remain intact.

## Packaging and walkthrough

1. Define the assignment contract: repository scope, outcome, authority, and coverage constraints.
2. Write the evidence-led loop: attribute costs, profile actual work, compare alternatives, resolve implementation authority, implement when authorized, measure, and review.
3. Put shared decisions in `skills/optimize-tests/SKILL.md`; put detailed measurement guidance behind a reference read when gathering evidence.
4. Keep commands, CI providers, language ecosystems, and review tooling discoverable from the target repository. Other skills and multi-agent facilities are optional, not prerequisites. Preserve normal automatic discovery; explicit invocation also works.
5. Run the library’s format/test checks, then exercise realistic requests with a fresh agent in an isolated fixture. Include unavailable billing access and a proposal that saves time by losing coverage.
6. Refine demonstrated failures, add the catalog entry, and report the resulting skill and validation evidence.

## Decisions the agent owns

The agent ranks interventions by expected benefit, confidence, risk, and ongoing maintenance. It can work from account-level data when that investigation is authorized, but confines edits to repositories included in the assignment. Existing PRs and uncommitted work are inspected before choosing a branch or change boundary.

The completion bar is supported improvements, preserved behavioral coverage and required checks, appropriate final validation, and a reviewed draft PR where publishing is authorized and available. If no worthwhile change is supported, a measured no-change finding is valid. Missing hosted access is a reported limitation, not grounds to invent billing results or stop independent local work.

## Portability and limits

The installed skill must be self-contained and use the target environment’s available tools. It must not depend on this design document, the original conversation, a fixed account/repository, a particular worker count, or a fixed speedup target. It should not trigger a grilling session or require a spec/ticket pipeline for routine optimization. Complex work can use a local plan without transferring technical decisions back to the user.

The run ends when the significant cost drivers have supported dispositions and further changes offer marginal benefit or disproportionate risk. Keep exact billing, reconstructed usage, local timings, hosted timings, and projected savings distinct.

This design is reversible; no ADR is needed. Future changes should follow demonstrated behavior rather than expanding the instructions for hypothetical cases.

## Representative validation

The initial exercise below tested the version before the user added the implementation-approval checkpoint. Its autonomous edits are historical evidence, not the expected pre-approval behavior of the current skill.

The library’s `npm run check` passes (four valid skills and nine validator tests), and the skill-creator format validator accepts `optimize-tests`.

A fresh agent with no conversation history exercised the installed instructions against a temporary Python/unittest project with a GitLab-style pipeline. The fixture included six required pre-merge behaviors, duplicated CI commands, an artificial delay in a controlled external boundary, unavailable billing records, and an unapproved proposal to move rejection checks to nightly runs. It was authorized to modify only that temporary project and could not access the network or publish.

Observed behavior:

- Investigated and chose interventions without a user interview.
- Removed the controlled fixture’s unnecessary wait while retaining a fresh dictionary per test and all original assertions.
- Split existing CI responsibilities so each command ran once, preserving both job names and the pre-merge test suite.
- Kept the negative-amount and unsupported-currency scenarios before merge, explicitly rejecting the nightly proposal.
- Compared sequential local measurements, retained raw evidence, mapped coverage, reviewed the changes, and produced a local handoff rather than attempting publication.
- Distinguished the prior pipeline’s elapsed time from summed runner execution and left hosted execution, CI-provider validation, and billing savings unverified.

The author inspected the resulting diff and reran `python3 -m unittest discover -v`; all six tests passed. This is a representative behavioral check, not proof across every language, provider, permissions model, or repository. Broader changes should follow further real usage or demonstrated failures.

## Implementation authority refinement

The user requested an implementation approval checkpoint for requests that have not authorized implementation. Investigation and baseline checks remain autonomous. The agent presents its selected plan, evidence, coverage preservation, expected benefits and uncertainty, risks, and validation approach, then waits when the user requests approval or authority remains unclear.

The observed task clarified that an explicit instruction to own implementation is already authorization for routine, in-scope changes. In that mode, the agent reports the selected plan and proceeds. Material departures in scope, coverage, risk, or cost return for approval. Billing changes, merging, and deployment remain separate permissions.

The revised checkpoint was exercised with a second fresh agent on a pristine copy of the Python/GitLab fixture. Given a broad optimization request without implementation authorization, it inspected the project, ran the unchanged baseline tests, retained diagnostic notes, recommended a concrete plan, and requested approval. It stopped without changing application code, tests, fixtures, or CI. The author verified `git diff --exit-code`, a clean tracked working tree, and the unchanged fixture wait and duplicate CI commands. This validates the plan-only stop boundary; the earlier exercise validates the underlying implementation workflow.
