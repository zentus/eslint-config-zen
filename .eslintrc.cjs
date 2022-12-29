const path = require('path')
const srcPath = path.resolve(__dirname, '../../../src')

const rules = {
  importOrder: ['error', {
    alphabetize: {
      order: 'asc'
    },
    groups: [
      'builtin',
      'internal',
      'external',
      ['sibling', 'parent'],
      'index',
      'object',
      'type'
    ],
    'newlines-between': 'never',
    pathGroups: [{
      group: 'parent',
      pattern: '#src/**'
      // position: 'before'
    }]
    // pathGroupsExcludedImportTypes: ['express']
  }],
  sortImports: ['error', {
    ignoreDeclarationSort: true
  }]
}

module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'standard'
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: [
    'import',
    'sort-destructure-keys',
    'sort-keys-fix'
  ],
  rules: {
    'import/named': 'error',
    'import/no-duplicates': 'error',
    'import/no-unresolved': 'error',
    'import/order': rules.importOrder,
    'prefer-destructuring': 'error',
    'sort-destructure-keys/sort-destructure-keys': 'error',
    'sort-imports': rules.sortImports,
    'sort-keys-fix/sort-keys-fix': 'error',
    'semi': ["error", "always"],
    'quotes': ['error', 'single', { 'avoidEscape': true }],
    'linebreak-style': ['error', 'unix'],
    'indent': ['error', 2]
  },
  settings: {
    'import/resolver': {
      alias: {
        extensions: ['.js'],
        map: [
          ['#src', srcPath]
        ]
      }
    }
  }
}
