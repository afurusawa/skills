---
name: optimize-tests
description: Investigate test and CI efficiency, estimate cost and coverage tradeoffs, then recommend a plan or implement authorized improvements while preserving meaningful pre-merge coverage.
---

# Optimize Tests

Own the test and CI optimization assignment: investigate its costs, choose supported interventions, then act within authorized scope or obtain approval when needed. Measure the result and prepare it for review. Balance runner consumption, feedback time, reliability, and maintenance effort. Fewer tests or faster wall time alone do not establish improvement.

Follow the requested mode: an advice-only or read-only audit request ends with findings. Skill selection alone does not authorize edits, publishing, or a broader assignment.

## Establish the assignment

Read the target repository’s instructions, test commands, CI configuration, coverage conventions, and relevant design decisions. Inspect the working tree and any existing optimization branch or PR before choosing a change boundary. Preserve the user’s work and account for improvements already proposed or implemented.

Use the user’s objective and constraints as the brief. Find facts yourself; choose routine, reversible technical options without a grilling session. An explicit request to own or complete implementation authorizes routine changes inside the stated scope; report the chosen plan and proceed without asking for a second approval. A plan-only or ambiguous request does not authorize edits: present one recommendation and wait when the user asks for approval or has not authorized implementation. State consequential assumptions and continue independent investigation. Ask only when missing access or a consequential decision outside the assignment prevents progress. Other skills, issue trackers, and subagents are optional facilities, not requirements of this workflow.

Limit edits to the repositories assigned by the user. When authorized account-level usage data identifies another costly project, report it without expanding the implementation scope. Changing billing or paid capacity, merging, and deploying require separate authorization. Publish a draft PR when that is within the assignment’s authorization and tooling; otherwise leave a reviewable local diff and explain the limit.

## Find the actual costs

Read [measurement guidance](references/measurement.md) before collecting or interpreting usage and benchmark evidence.

Map the available usage to repositories, workflows, triggers, jobs, setup, builds, tests, retries, and artifacts. Start at the level of the complaint: an allowance notification needs attribution; a known slow test can start with focused profiling. Establish the time window and what the available records omit. Missing billing access does not prevent local investigation.

Inspect expensive paths rather than stopping at the top-level workflow duration. Look for repeated setup or compilation, overlapping runs, redundant behavioral assertions, unnecessarily broad matrices, avoidable waits, slow external boundaries, and flaky failures. Reuse repository-provided traces and timing reports before adding instrumentation.

Create a baseline that exercises the reported cost with a runnable command. Record the revision, environment, configuration, outcomes, and relevant metric. Keep enough sanitized evidence in the repository’s diagnostic location for a fresh agent to reproduce it; use an ignored local directory if no convention exists. A timing from another machine is context, not the baseline for a claimed speedup.

## Choose a course of action

Keep a compact working record of the significant cost drivers, the evidence for each, candidate interventions, and the reason to pursue or defer them. Compare expected benefit, confidence, regression risk, and maintenance cost. Investigate plausible alternatives before committing to the first explanation; do not turn every alternative into a question for the user.

Consider the test system as a whole. Use the cheapest layer that can catch the real failure: domain or integration tests for behavior, real-browser checks for browser-dependent properties. Share expensive setup where safe, while preserving isolation of mutable test state. Consider cancellation, cache correctness, trigger duplication, build reuse, and concurrency on the existing runner alongside changes inside tests.

Before consolidating cases or moving a check, map each distinct behavior and failure mode to its retained pre-merge check. Matrix dimensions can represent real browser, viewport, theme, permission, or platform risks; distinguish those from repeated assertions of a shared contract. Reconcile changed test counts against that map. Moving unique coverage to a scheduled or post-merge run does not preserve pre-merge coverage.

Choose changes that preserve failure detection. A skip, looser assertion, extra retry, extended timeout, disabled isolation, or broader mock is not a performance fix by itself. A replacement must still catch the original class of failure at an appropriate seam. Keep live services outside ordinary deterministic tests when the behavior can be exercised through a controlled external boundary; retain dedicated checks where the live integration itself is the subject.

Select a coherent set of worthwhile changes to recommend. Keep unrelated application changes outside the assignment. Stop expanding the plan when remaining opportunities have marginal benefit or disproportionate risk.

## Resolve implementation authority

Investigate and run existing checks before deciding whether a checkpoint is needed. Baseline outputs and diagnostic notes may be generated in either mode.

Present one concrete plan with the evidenced cost drivers, selected changes and scope, preserved pre-merge coverage, expected benefits and uncertainty, material risks or tradeoffs, and validation approach. Explain consequential alternatives you ruled out without asking the user to design the solution. When implementation is authorized, report the plan and proceed. Otherwise ask the user to approve or adjust it, then stop before implementation.

A general request to optimize is not implementation authorization by itself. In contrast, a request such as “own the investigation and implementation” or “make the change and prepare a draft PR” authorizes routine work within its stated scope. If the user asks to approve a plan, or the request leaves implementation authority unclear, present the evidence-backed plan and wait. Do not treat silence as approval. Respect explicit scope limits and any request to keep the work read-only.

Within authorized scope, execute routine technical decisions autonomously. Return for approval only if findings require a material change to scope, coverage commitments, risks, or costs. Billing changes, merging, and deployment still require separate authorization.

## Implement and verify

Change one relevant variable at a time when diagnosing a bottleneck. Use focused tests while iterating, then validate the final configuration through the repository’s appropriate checks. Bind results to the tested revision and working-tree state. If uncommitted changes could affect a result, validate the relevant final changes in a clean checkout or state exactly what the run included; do not present a dirty-tree result as proof of the PR alone.

Preserve required CI status names and gating, or provide an equivalent enforced arrangement before replacing them. For trigger changes, confirm that pre-merge CI tests the proposed release state. Inspect branch rules when access permits. If enforcement cannot be verified, state the merge-after-green assumption and retain a manual full-check path for direct or exceptional changes; do not describe that convention as enforced. A command moved between jobs must still execute and fail the run when appropriate.

Exercise changed concurrency with the full relevant suite. Check worker-local resources, ports, temporary files, artifact names, module state, browser contexts, teardown, and external-request guards for interference. Exercise caching and build reuse against invalidation and missing-cache paths rather than assuming a warm cache is always available.

Re-run comparable benchmarks without competing benchmark processes. Repeat measurements when variance could reverse the decision; distinguish cold and warm paths. Retain supported improvements and revert experiments whose benefit is unproven or whose maintenance cost outweighs it. Add regression tests when they exercise a real failure mode, rather than assertions that merely mirror configuration text.

Remove temporary instrumentation. Retain the minimal runnable evidence needed to reproduce the findings. Avoid repeatedly running the full suite after it passes unless subsequent changes, failures, or unresolved concerns justify another run.

## Review and finish

Review against both the repository’s standards and the assignment: do the changes reduce the evidenced cost, preserve unique pre-merge coverage and failure detection, and respect scope? Use available review facilities or perform an explicit review directly; resolve findings before publishing the result.

Completion requires a supported disposition for each significant cost driver, appropriate validation of the final changes, and a reviewable result. A measured finding that no worthwhile change is justified is valid; do not create churn or an empty PR to satisfy a workflow. If hosted execution is blocked, finish independent local work and mark hosted timing, CI validation, and billing savings as unverified.

Prepare the draft PR or local handoff with the concrete problem, resulting behavior, comparable before/after evidence, coverage reconciliation, validation, and material tradeoffs or limits. Separate implemented, measured, estimated, and deferred items. Link the PR where one exists. End with the outcome and any actual blocker; routine implementation decisions should already be resolved.
