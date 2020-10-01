"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _style = _interopRequireDefault(require("./style"));

var _logoBlack = require("Assets/svg/logo-black.svg");

var _logoWhite = require("Assets/svg/logo-white.svg");

var _logoColorful = require("Assets/svg/logo-colorful.svg");

var _logoBlackTag = require("Assets/svg/logo-black-tag.svg");

var _logoWhiteTag = require("Assets/svg/logo-white-tag.svg");

var _logoColorfulTag = require("Assets/svg/logo-colorful-tag.svg");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LOGO_MAP = {
  colorful: /*#__PURE__*/_react.default.createElement(_logoColorful.ReactComponent, null),
  black: /*#__PURE__*/_react.default.createElement(_logoBlack.ReactComponent, null),
  white: /*#__PURE__*/_react.default.createElement(_logoWhite.ReactComponent, null),
  colorfulTag: /*#__PURE__*/_react.default.createElement(_logoColorfulTag.ReactComponent, null),
  whiteTag: /*#__PURE__*/_react.default.createElement(_logoWhiteTag.ReactComponent, null),
  blackTag: /*#__PURE__*/_react.default.createElement(_logoBlackTag.ReactComponent, null)
};

var Logo = function Logo(_ref) {
  var size = _ref.size,
      _ref$isCenter = _ref.isCenter,
      isCenter = _ref$isCenter === void 0 ? true : _ref$isCenter,
      color = _ref.color,
      background = _ref.background;
  return /*#__PURE__*/_react.default.createElement(_style.default, {
    center: isCenter,
    size: size
  }, !background ? LOGO_MAP[color] : background);
};

Logo.propTypes = {
  size: _propTypes.default.number,
  isCenter: _propTypes.default.bool,
  color: _propTypes.default.string,
  background: _propTypes.default.node
};
Logo.defaultProps = {
  size: 120,
  color: 'colorful'
};
var _default = Logo;
exports.default = _default;