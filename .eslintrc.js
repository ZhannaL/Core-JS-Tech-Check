module.exports = {
  extends: [
    'airbnb-typescript',
    'prettier',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2019, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
    project: ['./tsconfig.json'],
  },
  rules: {
    'react/react-in-jsx-scope': 'off',
    'import/prefer-default-export': 'off',
    'prettier/prettier': ['error'],
    'react-hooks/exhaustive-deps': [1, { enableDangerousAutofixThisMayCauseInfiniteLoops: true }],
    'consistent-return': 'off',
    'react/require-default-props': 'off',
    'react/jsx-key': 'error',
    'import/no-extraneous-dependencies': 'off', // broken
    'no-underscore-dangle': ['error', { allow: ['__resolveType'] }],
  },
  plugins: ['prettier', 'import', 'react'],
};
