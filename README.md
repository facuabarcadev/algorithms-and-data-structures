# node-ts-basic

Basic Node.js project with TypeScript to run functions and log their outputs.

## Requirements
- `nvm` with Node v22 (`.nvmrc` is already configured)

## Scripts
- `npm run dev`: Runs in watch mode with tsx.
- `npm run demo`: Runs `src/index.ts` once.
- `npm run build`: Compiles to `dist/` with `tsc`.
- `npm start`: Runs the compiled build.
- `npm run typecheck`: Type check without emitting.

## Quick start
```bash
nvm use
npm i
npm run demo
```

You should see in the console the results of sum, multiplication, and a greeting.
