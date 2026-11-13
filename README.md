# x-egpu

A Decky plugin starter for an eGPU status and control interface on Steam Deck.
The current UI is a scaffold; GPU detection and switching are not implemented.

## Build an installable ZIP

Requirements: Node.js/npm and Python 3.

```bash
npm install
npm run package
```

This builds the frontend and creates `release/x-egpu.zip`.

## Project files

- `src/index.tsx` – plugin UI entry point
- `main.py` – minimal Decky backend entry point
- `plugin.json` – Decky plugin metadata
- `webpack.config.js` – frontend bundler configuration
- `scripts/package.py` – creates the ZIP archive
