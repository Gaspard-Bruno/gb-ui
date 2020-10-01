"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Layout = require("Components/Layout");

var _animation_ = _interopRequireDefault(require("./animations/animation_500.gif"));

var _styles = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Loading = function Loading() {
  return /*#__PURE__*/_react.default.createElement(_styles.StyledLoadingContainer, null, /*#__PURE__*/_react.default.createElement(_styles.StyledLoader, {
    alt: "",
    src: _animation_.default
  }));
};

var _default = Loading;
exports.default = _default;