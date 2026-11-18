# Usage attribution and performance evidence

Use the target project’s installed tools and provider interfaces. Discover commands and report formats from its configuration and available tooling; no language, CI vendor, account, runner size, or test framework is assumed.

## Separate the metrics

- **Feedback time:** elapsed time until the useful result, including queueing and job dependencies where relevant.
- **Runner consumption:** the sum of charged job execution units, including retries and setup. Parallel jobs can shorten feedback while consuming more runner time.
- **Spend or allowance consumption:** the provider’s metered amount after its runner pricing, allowances, rounding, multipliers, and exemptions.
- **Storage:** retained artifacts, caches, or packages under the provider’s storage accounting. Current bytes alone do not establish a period’s storage bill.
- **Maintenance and reliability:** redundant scenarios, flake/retry history, diagnostic usefulness, and ongoing setup complexity.

Choose primary metrics from the complaint and retain the others as constraints. Increasing workers within one runner and spreading jobs across additional runners have different billing effects. Verify the provider’s current accounting before translating either into a cost claim.

## Attribution

Prefer authoritative usage records for the relevant account and billing period. Repository run history is a fallback, not an exact bill. Attribute charges to the responsible owner and billing category when records permit. Confirm which repository visibility, runner classes, self-hosted execution, or provider-managed activity count toward the allowance.

For reconstructed usage, sum actual job execution rather than workflow wall time. Include rerun attempts without double-counting them, and account for parallel jobs, skipped jobs, queue time, per-job rounding, runner types, retention gaps, deleted runs, incomplete pagination, and failed API calls. Follow the provider’s rules rather than importing another provider’s formula. Label the result as an estimate and state its material omissions.

Use the access already available. If billing access is missing, state the limitation and continue with available histories, configs, and local profiling. Broader permissions, credentials, paid capacity, or account changes are separate decisions; never manufacture a precise total from unavailable records.

## Comparable benchmarks

Record the tested revision and uncommitted changes, hardware/runner, runtime versions, worker count, command, environment, cache state, outcomes, and elapsed or job time. Record setup/build costs separately when the intervention changes them.

Run before and after on comparable inputs and environments, sequentially without competing benchmark processes. Use existing machine-readable reports where possible. Repeated sampling is useful when improvements are small or variance is high; one sample does not establish a stable distribution. Keep reproduction commands and enough sanitized output to audit the claim. Read credentials from the environment and keep them out of logs and artifacts.

Validate behavioral coverage before interpreting speed: explain removed or moved scenarios, preserved failures, expected skips, and changes to retries, mocks, assertions, or timeouts. An unchanged test count is supporting evidence, not proof of equivalent coverage.

Report local and hosted results separately. A local speedup supports the local claim; it does not establish the same percentage on a different runner. Projected monthly savings require explicit workload and billing assumptions. When a job fails before execution because of billing or provisioning, distinguish that from a failing test suite and do not claim hosted validation succeeded.
