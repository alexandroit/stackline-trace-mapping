# @stackline/trace-mapping

> Trace the original position through a source map.

[![npm version](https://img.shields.io/npm/v/@stackline/trace-mapping.svg?style=flat-square)](https://www.npmjs.com/package/@stackline/trace-mapping)
[![license](https://img.shields.io/npm/l/@stackline/trace-mapping.svg?style=flat-square)](https://github.com/alexandroit/stackline-trace-mapping)
[![GitHub repository](https://img.shields.io/badge/GitHub-alexandroit%2Fstackline-trace-mapping-181717?style=flat-square&logo=github)](https://github.com/alexandroit/stackline-trace-mapping)
[![Docs](https://img.shields.io/badge/docs-alexandro.net-0f766e?style=flat-square)](https://alexandro.net/docs/vanilla/trace-mapping/)
[![Reddit community](https://img.shields.io/badge/community-r%2FStackline-ff4500?style=flat-square&logo=reddit&logoColor=white)](https://www.reddit.com/r/Stackline/)

**[Documentation](https://alexandro.net/docs/vanilla/trace-mapping/)** | **[npm](https://www.npmjs.com/package/@stackline/trace-mapping)** | **[Issues](https://github.com/alexandroit/stackline-trace-mapping/issues)** | **[Repository](https://github.com/alexandroit/stackline-trace-mapping)**

**Current package version:** `1.0.1`

---

## Why this package?

`@stackline/trace-mapping` is the Stackline-maintained distribution of `@jridgewell/trace-mapping@0.3.31`. It is an independent continuation of [@jridgewell/trace-mapping](https://github.com/jridgewell/sourcemaps); original authors and licenses remain credited below.

## Compatibility

| Item | Value |
| :--- | :--- |
| Package | `@stackline/trace-mapping@1.0.1` |
| API target | `@jridgewell/trace-mapping@0.3.31` |
| Supported Node.js | `See supported framework requirements` |
| License | `MIT` |
| Main entry | `dist/trace-mapping.umd.js` |
| Module entry | `dist/trace-mapping.mjs` |
| Types | `types/trace-mapping.d.cts` |
| Runtime dependencies | `@jridgewell/resolve-uri, @jridgewell/sourcemap-codec` |

## Installation

```bash
npm install @stackline/trace-mapping
```

Preserve existing imports and plugin resolution with an npm alias:

```bash
npm install @jridgewell/trace-mapping@npm:@stackline/trace-mapping
```

## Usage and API reference

Monorepo for various sourcemap libraries.

- [gen-mapping](./packages/gen-mapping)
- [remapping](./packages/remapping)
- [source-map](./packages/source-map)
- [sourcemap-codec](./packages/sourcemap-codec)
- [trace-mapping](./packages/trace-mapping)

## Credits and original authors

- Original project: [@jridgewell/trace-mapping](https://github.com/jridgewell/sourcemaps).
- Justin Ridgewell.
- Copyright 2024 Justin Ridgewell <justin@ridgewell.name>.
- Stackline maintenance: [Alexandro Paixao Marques](https://www.linkedin.com/in/aleinfo/) and [Stackline contributors](https://github.com/alexandroit).

Original copyright, license notices and contributor acknowledgements remain part of this distribution. Stackline maintenance does not replace authorship of the original work.

## License

`MIT`. See the license and notice files in the [repository](https://github.com/alexandroit/stackline-trace-mapping).

## Community and Links

- [Stackline website](https://alexandro.net/)
- [GitHub projects](https://github.com/alexandroit)
- [npm packages](https://www.npmjs.com/~alex360qc)
- [Reddit community — r/Stackline](https://www.reddit.com/r/Stackline/)
- [Maintainer LinkedIn](https://www.linkedin.com/in/aleinfo/)

Use this repository's issue tracker for reproducible bugs and feature requests. Join r/Stackline for examples, usage questions and release discussions.
