module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: 'airbnb-base',
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    "no-empty": 0,
    "consistent-return": 0,
    "space-before-blocks": 0,
    "class-methods-use-this": 0,
    "radix": 0,
    "eslint-disable-next-line no-console": 0,
    "no-console": 0,
    "camelcase": 0,
    "prefer-destructuring": 0,
    "no-param-reassign":0,
    "no-shadow": 0,
    "no-unused-vars": 0,
    "object-curly-newline": 0
  },
};
