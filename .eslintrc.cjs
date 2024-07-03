module.exports = {
  env: { browser: true, es2021: true, node: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
  ],
  ignorePatterns: ['public/*', 'src/Routes.tsx', '*.cjs'],
  overrides: [{ files: ['.eslintrc.{js,cjs}'], parserOptions: { sourceType: 'script' } }],
  parser: '@typescript-eslint/parser',
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module', project: './tsconfig.json' },
  plugins: ['@typescript-eslint', 'react', 'react-hooks', 'simple-import-sort', 'prettier'],
  rules: {
    '@typescript-eslint/no-explicit-any': 0,
    'no-console': 'warn',
    'no-template-curly-in-string': 'error',
    'prefer-template': 'error',
    'prettier/prettier': ['error', {}, { usePrettierrc: true }],
    'react-hooks/exhaustive-deps': 0,
    'react-hooks/rules-of-hooks': 'error',
    'react/forbid-dom-props': ['error', { forbid: ['style'] }],
    'react/jsx-curly-brace-presence': ['error', { props: 'never', children: 'never' }],
    'react/jsx-sort-props': 'error',
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 0,
    'simple-import-sort/exports': 'error',
    'simple-import-sort/imports': 'error',
    curly: 'error',
  },
  settings: { react: { version: 'detect' } },
};
