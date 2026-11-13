# x-egpu

A Decky plugin starter for an eGPU status and control interface on Steam Deck.
The current UI is a scaffold; GPU detection and switching are not implemented.

## Build an installable ZIP

Requirements: Node.js/npm and Python 3.

```bash
npm install
npm run package
```

The command builds the frontend and creates `release/x-egpu.zip`. The archive
contains the plugin manifest, Decky backend entry point, and compiled frontend.
Install the ZIP using Decky Loader's plugin installation flow. The plugin is a
UI-only scaffold for now: its Detect and Apply buttons do not control or inspect
hardware yet.

To build the frontend without packaging it, run `npm run build`. To check
TypeScript, run `npm run lint`.

## Project files

- `src/index.tsx` – plugin UI entry point
- `main.py` – minimal Decky backend entry point
- `plugin.json` – Decky plugin metadata
- `webpack.config.js` – frontend bundler configuration
- `scripts/package.py` – creates the install ZIP from build artifacts
