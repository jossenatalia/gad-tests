# Tests for GAD application

## GAD Application

Repository: https://github.com/jaktestowac/gad-gui-api-demo

Follow instructions in app README

## Prepare

### Local recommended tools:

- VS Code
- Git
- Node.js (version >16)

### Installation and setup

- install dependencies: `npm install`
- setup Playwright with: `npx playwright install --with-deps chromium`
- setup husky with: `npx husky`

## Use

Run all tests:

```
npx playwright test
```

Fix husky issues:

```
npx eslint . --fix
```

Checking issues with TypeScript Compiler:

```
npx tsc --noEmit --pretty --strict
```

For more usage cases look in `package.json` scripts section.
