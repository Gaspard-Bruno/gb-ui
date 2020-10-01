"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Icon = _interopRequireDefault(require("../Icon"));

var _style = _interopRequireWildcard(require("./style"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Avatar = function Avatar(_ref) {
  var action = _ref.action,
      size = _ref.size,
      hasCarat = _ref.hasCarat,
      hasText = _ref.hasText,
      user = _ref.user;
  return /*#__PURE__*/_react.default.createElement(_style.default, {
    onClick: action,
    size: size,
    user: user
  }, size && user && user.avatar ? /*#__PURE__*/_react.default.createElement(_style.AvatarImage, {
    avatar: "".concat(user.avatar),
    size: size
  }) : /*#__PURE__*/_react.default.createElement(_style.AvatarInitials, {
    size: size,
    avatarDefault: user.avatarDefault
  }, user.fullName ? user.fullName.slice(0, 2) : ''), hasText && /*#__PURE__*/_react.default.createElement("p", null, user.fullName), hasCarat && /*#__PURE__*/_react.default.createElement(_Icon.default, {
    name: "chevron-down"
  }));
};

Avatar.propTypes = {
  action: _propTypes.default.func,
  size: _propTypes.default.oneOf(['small', 'medium', 'large']),
  hasCarat: _propTypes.default.bool,
  hasText: _propTypes.default.bool,
  user: _propTypes.default.object
};
Avatar.defaultProps = {
  size: 'small'
};
var _default = Avatar;
exports.default = _default;