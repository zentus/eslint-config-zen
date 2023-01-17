# @techlove/eslint-config

## Installation
```bash
npm install @techlove/eslint-config
```

## Setup
Create a `.eslintrc.js` (`.eslintrc.cjs` for ESM) in the root directory:

```javascript
require('@techlove/eslint-config/patch')

module.exports = {
  extends: '@techlove/eslint-config'
}
```

## License

MIT
