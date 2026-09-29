# Upstream origin and triage

- Original package: `@jridgewell/trace-mapping@0.3.31`
- Repository: https://github.com/jridgewell/sourcemaps
- Source commit: https://github.com/jridgewell/sourcemaps/commit/74fc8e11d30641b82e3ca3532cd89477671afeab
- Source directory: `packages/trace-mapping`
- npm tarball: https://registry.npmjs.org/@jridgewell/trace-mapping/-/trace-mapping-0.3.31.tgz
- SHA512 integrity: `sha512-zzNR+SdQSDJzc8joaeP8QQoCQr8NuYx2dIIytl1QeBEZHJ9uW6hebsrYgbz8hJwUQao3TWCMtmfV8Nu1twOLAw==`
- npm last-release age selects maintenance scope; it does not imply no ongoing source development.

## Reviewed issues

Primary-source snapshot: `2026-09-29T00:21:55.798319+00:00`. Most recently updated 100 open and 30 closed issue/PR entries; PRs removed. This is triage evidence, not a claim of exhaustive review.

Return null for a negative traceSegment line, matching the existing out-of-range behavior (upstream issue 54).

- [39: Type error in `remapping.d.cts`](https://github.com/jridgewell/sourcemaps/issues/39)
- [55: discussion: esm-only](https://github.com/jridgewell/sourcemaps/issues/55)
- [54: traceSegment() in trace-mapping doesn't guard against negative line, crashing remapping() when a source map segment has sourceLine: -1](https://github.com/jridgewell/sourcemaps/issues/54)
- [53: Stop using `append()` in FlattenMap](https://github.com/jridgewell/sourcemaps/issues/53)
- [38: Deprecate `@ampproject/remapping`](https://github.com/jridgewell/sourcemaps/issues/38)

The structured snapshot in `.stackline/issue-triage.json` also records recently closed reports. Issues for unrelated packages in shared monorepositories were qualified as outside this fork’s runtime scope. No maintainer was contacted.
