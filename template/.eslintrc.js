module.exports = {
    env: {
        es2021: true,
        node: true,
    },
    extends: ['plugin:@typescript-eslint/recommended', 'plugin:react/recommended', 'prettier'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 12,
        sourceType: 'module',
    },
    plugins: ['react', '@typescript-eslint'],
    rules: {
        'no-unescaped-entities': 'off',
        'sort-imports': [
            'error',
            {
                ignoreCase: true,
                allowSeparatedGroups: true,
                ignoreDeclarationSort: true,
            },
        ],
        '@typescript-eslint/no-namespace': [
            'error',
            {
                allowDeclarations: true,
            },
        ],
        '@typescript-eslint/no-empty-interface': [
            'error',
            {
                allowSingleExtends: true,
            },
        ],
    },
};
