module.exports = {
  extends: ['plugin:@typescript-eslint/recommended'],
  rules: {
    quotes: 'warn',
    '@typescript-eslint/no-unused-vars': [
      'error',
      { vars: 'local', args: 'none' },
    ],
  },
};
