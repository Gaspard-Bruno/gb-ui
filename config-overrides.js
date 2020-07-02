/* eslint-disable */
const {
  override,
  addWebpackAlias,
  useEslintRc,
} = require("customize-cra");
const path = require("path");

module.exports = override(
  useEslintRc('./.eslintrc'),
  addWebpackAlias({
    Assets: path.resolve(__dirname, "src/assets/*"),
    Components: path.resolve(__dirname, "src/components/*"),
    Config: path.resolve(__dirname, "src/config.js"),
    Hooks: path.resolve(__dirname, "src/hooks/*"),
    Pages: path.resolve(__dirname, "src/pages/*"),
    Store: path.resolve(__dirname, "src/store/*"),
    Theme: path.resolve(__dirname, "src/theme.js"),
  })
);
