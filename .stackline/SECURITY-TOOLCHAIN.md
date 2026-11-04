## Build dependency security (2026-11-04)

The private build/test workspace uses patched Mocha, ESLint, Sinon, rimraf, Turbo and resolved dependencies. Targeted glob 14 and minimatch 11 overrides apply only to modern consumers that use the named `globSync`/`minimatch` APIs; older callable minimatch 3 consumers retain their compatible version. The upstream trace-mapping suite, types, lint, format, ESM/CJS builds and packed consumer validate those integrations. These build-only overrides do not affect published runtime dependencies.

The audited minimatch advisory GHSA-g3hv-75wg-m249 was narrowed upstream to versions 7 through 11.0.0 on 2026-11-04. The fail-closed audit gate excludes only the registry-cached false positive on installed versions below 7, expires on 2026-12-04, and still rejects all other advisories.
