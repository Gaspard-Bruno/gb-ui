/* eslint-disable */
const { override, addWebpackAlias, useEslintRc } = require('customize-cra');
const path = require('path');

module.exports = override(
  addWebpackAlias({
    Assets: path.resolve(__dirname, './src/assets'),
    Components: path.resolve(__dirname, 'src/components'),
    Config: path.resolve(__dirname, './src/config.js'),
    Utils: path.resolve(__dirname, './src/utils'),
    Theme: path.resolve(__dirname, './src/theme.js'),
  })
);
