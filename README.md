# @techlove-ab/eslint-config

## Installation
```bash
npm install @techlove-ab/eslint-config eslint@7
```

## Setup
Create a `.eslintrc.js` (`.eslintrc.cjs` for ESM) in the root directory:

```javascript
require('@techlove-ab/eslint-config/patch')

module.exports = {
  extends: '@techlove-ab/eslint-config'
}
```

## License

MIT
