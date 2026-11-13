# x-egpu

A Decky plugin starter for an eGPU status and control interface on Steam Deck.
The current UI is a scaffold; GPU detection and switching are not implemented.

## Build an installable ZIP

Use Node.js 16.14 or newer and pnpm 9, as recommended by the Decky plugin template.

```bash
corepack enable
pnpm install
pnpm run package
```

This builds the frontend with Decky's Rollup preset and creates
`release/x-egpu.zip`.

To refresh the Decky UI dependency to the newest compatible published version,
run:

```bash
pnpm update @decky/ui --latest
pnpm install
pnpm run package
```

## Development

```bash
pnpm run dev
pnpm run lint
```

Some install warnings may still mention deprecated packages such as `glob` or
`inflight`. These are transitive dependencies of the build tooling; updating the
plugin's direct dependencies may not remove them. Avoid forcing overrides unless
upstream Decky tooling provides a compatible update.

## Project files

- `src/index.tsx` – plugin UI entry point
- `main.py` – Decky Python backend entry point
- `plugin.json` – Decky plugin metadata
- `rollup.config.js` – Decky frontend build configuration
- `scripts/package.py` – creates the ZIP archive
