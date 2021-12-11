# @zentus/eslint-config-esm

## Installation
```bash
npm install @zentus/eslint-config-esm eslint@7
```

## Setup
Create a `.eslintrc.cjs` in the root directory:

```javascript
require('@zentus/eslint-config-esm/patch')

module.exports = {
  extends: '@zentus/eslint-config-esm'
}
```

## License

MIT