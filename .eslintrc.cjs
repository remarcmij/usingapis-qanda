module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true,
  },
  extends: 'eslint:recommended',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'prefer-const': 'warn',
    'no-inner-declarations': 'off',
    'no-constant-condition': 'off',
  },
};
