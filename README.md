# @zentus/eslint-config-zen

## Installation
```bash
npm install @zentus/eslint-config-zen eslint@8 --save-dev
```

## Setup
Create a `.eslintrc.js` (`.eslintrc.cjs` for ESM) in the root directory:

```javascript
require('@zentus/eslint-config-zen/patch')

module.exports = {
  extends: '@zentus/eslint-config-zen'
}
```

## License

MIT
