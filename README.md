# eslint-config-zentus-esm

## Installation
npm install @zentus/eslint-config-esm @rushstack/eslint-patch

## Setup
Create a `.eslintrc.cjs` in the root directory:

```javascript
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  extends: 'zentus-esm'
}
```

## License

MIT