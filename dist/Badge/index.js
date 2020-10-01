"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _translation = _interopRequireDefault(require("../../utils/translation"));

var _Text = require("../Text");

var _Icon = _interopRequireDefault(require("../Icon"));

var _style = _interopRequireDefault(require("./style"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Badge = function Badge(_ref) {
  var _ref$status = _ref.status,
      status = _ref$status === void 0 ? 'active' : _ref$status,
      category = _ref.category,
      isChip = _ref.isChip,
      onClick = _ref.onClick,
      text = _ref.text,
      translate = _ref.translate;
  return /*#__PURE__*/_react.default.createElement(_style.default, {
    onClick: onClick,
    status: category || status,
    chip: isChip
  }, /*#__PURE__*/_react.default.createElement(_Text.SmallBody, null, (0, _translation.default)(translate, text)), isChip && /*#__PURE__*/_react.default.createElement(_Icon.default, {
    name: "Close",
    size: 12
  }));
};

Badge.propTypes = {
  onClick: _propTypes.default.func,
  translate: _propTypes.default.func,
  status: _propTypes.default.string,
  category: _propTypes.default.string,
  isChip: _propTypes.default.bool,
  text: _propTypes.default.string
};
var _default = Badge;
exports.default = _default;