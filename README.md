# x-egpu

A Decky plugin template for toggling and managing eGPU behavior on the Steam Deck.

## What this includes

- Decky plugin shell
- GPU mode dropdown
- Detect eGPU button
- Apply GPU mode button
- Quick-switch toggle placeholder

## Development

1. Install dependencies:
   npm install
2. Start the build in watch mode:
   npm run dev
3. Build for production:
   npm run build

## Notes

This is a starter implementation. The actual eGPU switching logic still needs to be connected to your real power-management or display-switching commands for your specific setup.

## Folder structure

- `src/index.tsx` – plugin UI entry point
- `plugin.json` – Decky plugin metadata
- `webpack.config.js` – bundling config
- `dist/` – built plugin output
