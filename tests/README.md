### Prerequisites

* build the packages that you wish to test
  - required:
    * `packages/carta-md`
  - optional:
    * `packages/plugin-anchor`
    * `packages/plugin-attachment`
    * `packages/plugin-code`
    * `packages/plugin-emoji`
    * `packages/plugin-math`
    * `packages/plugin-slash`
    * `packages/plugin-tikz`
* remove the packages that you don't wish to test
  - from "dependencies" in:
    * `tests/package.json`

### Building a package

```bash
cd package/xxx
npm install
npm run build

# note: generates a dist/ directory
```

### Usage

```bash
cd tests
npm install --install-links
npm run dev

# http://localhost:5173/
```
