# easyyapi.github.io

Documentation site for the **easy-yapi** IntelliJ IDEA plugin, built with VitePress.

- **Live site:** https://easyyapi.github.io/
- **Source plugin repo:** [github.com/tangcent/easy-yapi](https://github.com/tangcent/easy-yapi)
- **Plugin ID:** 12458

## Traced plugin version

**v3.2.0** (released 2026-07-05)

This is the version of the easy-yapi plugin that the documentation on this site
currently describes. Update it whenever a doc update lands.

## Build

```bash
npm install
npm run docs:build   # outputs to docs/.vitepress/dist
npm run docs:preview # local preview
npm run docs:dev     # dev server with HMR
```

Node 20+ is required (matches `.github/workflows/deploy.yml`).

## Deployment

Pushing to `master` triggers `.github/workflows/deploy.yml`, which builds the
site and publishes to the `gh-pages` branch. Never edit `gh-pages` directly.
