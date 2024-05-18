/** @type {import('eslint').ESLint.ConfigData} */
module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended-type-checked',
    'plugin:@typescript-eslint/stylistic-type-checked',
    'plugin:tailwindcss/recommended',
    'next/core-web-vitals',
    'plugin:vitest/recommended',
    'prettier',
  ],
  plugins: ['@typescript-eslint', 'tailwindcss', 'vitest'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: true,
    tsconfigRootDir: __dirname,
  },
  root: true,
  settings: {
    tailwindcss: {
      callees: ['cn'],
      config: 'tailwind.config.ts',
    },
  },
  rules: {
    'import/order': [
      'error',
      {
        pathGroups: [
          {
            pattern: '@/**',
            group: 'internal',
          },
        ],
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
          'object',
        ],
        'newlines-between': 'always',
      },
    ],
  },
  overrides: [
    {
      extends: ['plugin:@typescript-eslint/disable-type-checked'],
      files: ['./**/*.{js,cjs,mjs}'],
    },
  ],
};
