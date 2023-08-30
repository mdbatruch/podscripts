module.exports = {
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:import/warnings',
  ],
  plugins: ["import"],
  rules: {
    quotes: 'warn',
    '@typescript-eslint/no-unused-vars': [
      'error',
      { vars: 'local', args: 'none' },
    ],
    'max-len': [
      'warn',
      {
        code: 120,
        comments: 120,
        ignoreComments: false,
        ignoreTrailingComments: false,
        ignorePattern: '^import .*|^export .*|<[A-Za-z].*',
        ignoreUrls: true,
      },
    ],
    'sort-imports': [
      2,
      {
        ignoreCase: true,
        ignoreDeclarationSort: true,
        ignoreMemberSort: false,
      },
    ],
    'import/order': [
      2,
      {
        groups: [
          "builtin",
          "external",
          "internal",
          "parent",
          "sibling",
          "index"
        ],
        alphabetize: {
          caseInsensitive: true,
          order: 'asc',
        },
      },
    ],
  },
};
