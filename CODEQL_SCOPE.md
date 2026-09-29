# CodeQL scope

All package runtime, executed tests, and active build/CI/release tooling remain in the scan. The following upstream utilities are neither packed nor executed by maintenance validation or publication:

- `packages/trace-mapping/benchmark/chrome.mjs`

These narrow exclusions retain upstream history and avoid treating an unused benchmark/browser fixture or superseded upstream publisher as a released entrypoint. They do not exclude runtime or active validation. Runtime findings are fixed and covered by regressions.
