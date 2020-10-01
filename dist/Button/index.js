"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Text = require("../Text");

var _Icon = _interopRequireDefault(require("../Icon"));

var _style = _interopRequireWildcard(require("./style"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Button = function Button(_ref) {
  var isDisabled = _ref.isDisabled,
      btnType = _ref.btnType,
      text = _ref.text,
      isSmall = _ref.isSmall,
      icon = _ref.icon,
      action = _ref.action,
      type = _ref.type,
      isFullWidth = _ref.isFullWidth,
      children = _ref.children;

  if (text) {
    return /*#__PURE__*/_react.default.createElement(_style.default, {
      fullWidth: isFullWidth,
      btnType: btnType,
      disabled: isDisabled,
      small: isSmall,
      onClick: action,
      type: type
    }, children, text && /*#__PURE__*/_react.default.createElement(_Text.ButtonText, null, text), icon && /*#__PURE__*/_react.default.createElement(_Icon.default, {
      name: icon
    }));
  }

  if (icon) {
    return /*#__PURE__*/_react.default.createElement(_style.IconButton, {
      btnType: btnType,
      disabled: isDisabled,
      small: isSmall,
      onClick: action
    }, /*#__PURE__*/_react.default.createElement(_Icon.default, {
      name: icon
    }));
  }

  return /*#__PURE__*/_react.default.createElement(_style.default, null);
};

Button.propTypes = {
  isDisabled: _propTypes.default.bool,
  action: _propTypes.default.func,
  isSmall: _propTypes.default.bool,
  isFullWidth: _propTypes.default.bool,
  type: _propTypes.default.string,
  text: _propTypes.default.string,
  children: _propTypes.default.oneOfType([_propTypes.default.element, _propTypes.default.array]),
  btnType: _propTypes.default.oneOf(['primary', 'secondary', 'terceary', 'transparent', 'borded']),
  icon: _propTypes.default.string
};
Button.defaultProps = {
  type: 'primary'
};
var _default = Button;
exports.default = _default;