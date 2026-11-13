# x-egpu

A Decky plugin starter for an eGPU status and control interface on Steam Deck.
The current UI is a scaffold; GPU detection and switching are not implemented.

## Build an installable ZIP

Requirements: Node.js/npm and Python 3.

```bash
npm install
npm run package
```

This builds the frontend using Decky's plugin build configuration and creates
`release/x-egpu.zip`. Install the ZIP using Decky Loader's plugin install flow.

## Development

```bash
npm run dev
npm run lint
```

## Project files

- `src/index.tsx` – plugin UI entry point
- `main.py` – Decky Python backend entry point
- `plugin.json` – Decky plugin metadata
- `rollup.config.js` – Decky frontend build configuration
- `scripts/package.py` – creates the ZIP archive
