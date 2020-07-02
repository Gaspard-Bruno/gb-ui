const {
  override,
  addWebpackAlias,
} = require("customize-cra");
const path = require("path");

module.exports = override(
  // add an alias for "ag-grid-react" imports
  addWebpackAlias({
    Config: path.resolve(__dirname, "src/config.js"),
    Components: path.resolve(__dirname, "src/components/"),
    Assets: path.resolve(__dirname, "src/assets/"),
    Store: path.resolve(__dirname, "src/store/"),
  })
);
