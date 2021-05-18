/* eslint-disable */
const { override, addWebpackAlias, useEslintRc } = require('customize-cra');
const path = require('path');
const multipleEntry = require('react-app-rewire-multiple-entry')([
  {
    entry: 'src/App.js',
    outPath: '/index.html'
  }
]);

module.exports = override(
  addWebpackAlias({
    Assets: path.resolve(__dirname, './src/assets'),
    Components: path.resolve(__dirname, 'src/components'),
    Config: path.resolve(__dirname, './src/config'),
    Utils: path.resolve(__dirname, './src/utils'),
    Hooks: path.resolve(__dirname, 'src/hooks'),
    Theme: path.resolve(__dirname, './src/theme.js')
  }),
  multipleEntry.addMultiEntry
);
