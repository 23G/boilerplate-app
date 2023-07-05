const pluginSortImports = require('@ianvs/prettier-plugin-sort-imports');

module.exports = {
    arrowParens: 'always',
    printWidth: 100,
    singleQuote: true,
    tabWidth: 4,
    trailingComma: 'all',
    plugins: [pluginSortImports],
    importOrder: ['<THIRD_PARTY_MODULES>', '', '^@/(.*)$', '', '^[./]'],
    importOrderParserPlugins: ['typescript', 'jsx', 'decorators-legacy'],
    importOrderSeparation: true,
    importOrderMergeDuplicateImports: true,
    importOrderCaseInsensitive: true,
    importOrderSortSpecifiers: true,
};
