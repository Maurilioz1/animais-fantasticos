module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['airbnb-base'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'no-param-reassign': 0,
    'import/extensions': 0,
    'implicit-arrow-linebreak': 0,
    'comma-dangle': 0,
    'function-paren-newline': 0,
    'operator-linebreak': 0,
  },
};
