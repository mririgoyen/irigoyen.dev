module.exports = {
  env: {
    browser: true,
    es2020: true
  },
  extends: 'preact',
  globals: {
    config: 'readonly'
  },
  ignorePatterns: [
    'dist/'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module'
  },
  plugins: [
    '@typescript-eslint',
    'sort-destructure-keys'
  ],
  rules: {
    '@typescript-eslint/no-unused-vars': [ 2, { args: 'after-used', ignoreRestSiblings: true, vars: 'all' } ],
    'array-callback-return': [ 2, { allowImplicit: true } ],
    'arrow-parens': 2,
    'brace-style': 2,
    camelcase: 0,
    'comma-dangle': [ 2, 'never' ],
    'comma-spacing': [ 2, { after: true } ],
    curly: [ 2, 'all' ],
    'eol-last': 2,
    indent: [ 2, 2, { ignoredNodes: [ 'TemplateLiteral' ], SwitchCase: 1 } ],
    'jsx-quotes': [ 2, 'prefer-single' ],
    'key-spacing': [ 2, { afterColon: true, beforeColon: false } ],
    'keyword-spacing': [ 2, { overrides: { else: { before: true } } } ],
    'linebreak-style': [ 2, 'unix' ],
    'max-len': 0,
    'no-console': 2,
    'no-const-assign': 2,
    'no-debugger': 2,
    'no-dupe-keys': 2,
    'no-else-return': 0,
    'no-mixed-spaces-and-tabs': 2,
    'no-multi-spaces': 2,
    'no-multiple-empty-lines': 2,
    'no-template-curly-in-string': 2,
    'no-trailing-spaces': 2,
    'no-undef': 2,
    'no-unused-vars': 0,
    'no-var': 2,
    'no-with': 2,
    'object-shorthand': [ 2, 'properties' ],
    'one-var': 0,
    'padded-blocks': [ 2, 'never' ],
    'prefer-arrow-callback': 2,
    'prefer-const': 2,
    'prefer-destructuring': [ 2, { array: false, object: true } ],
    'prefer-template': 2,
    'quote-props': [ 2, 'as-needed' ],
    quotes: [ 2, 'single' ],
    semi: [ 2, 'always' ],
    'sort-destructure-keys/sort-destructure-keys': 2,
    'sort-imports': [ 2, { ignoreDeclarationSort: true } ],
    'sort-keys': [ 2, 'asc', { caseSensitive: false } ],
    'space-before-blocks': [ 2, 'always' ],
    'space-in-parens': [ 2, 'never' ],
    'space-infix-ops': 2,
    'space-unary-ops': [ 2, { nonwords: false } ],
    'spaced-comment': [ 2, 'always' ],
    strict: [ 2, 'never' ]
  }
};
