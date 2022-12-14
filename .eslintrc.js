module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:i18next/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'i18next',
  ],
  rules: {
    'import/no-unresolved': 'off',
    'import/extensions': 'off',
    'import/prefer-default-export': 'off',
    'react/require-default-props': 'off',
    'no-unused-vars': 'warn',
    'import/no-extraneous-dependencies': 'off',
    'react/jsx-props-no-spreading': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',
    'react/function-component-definition': 'off',
    'react/react-in-jsx-scope': 'off',
    'no-shadow': 'off',
    'no-underscore-dangle': 'off',
    'i18next/no-literal-string': ['error', {
      markupOnly: true,
    }],
    'max-len': ['error', {
      code: 100,
      ignoreComments: true,
      ignoreTrailingComments: true,
    }],
    'react/jsx-filename-extension': [
      2, {
        extensions: ['.js', '.jsx', '.tsx', '.ts'],
      },
    ],
  },
  globals: {
    __IS_DEV__: true,
  },
};
