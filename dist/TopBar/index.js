"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

var _Text = require("../Text");

var _Icon = _interopRequireDefault(require("../Icon"));

var _Avatar = _interopRequireDefault(require("../Avatar"));

var _style = _interopRequireWildcard(require("./style"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TopBar = function TopBar(_ref) {
  var location = _ref.location,
      title = _ref.title,
      back = _ref.back,
      user = _ref.user;
  var history = (0, _reactRouterDom.useHistory)();
  return /*#__PURE__*/_react.default.createElement(_style.default, null, /*#__PURE__*/_react.default.createElement(_style.LeftSection, null, back && /*#__PURE__*/_react.default.createElement(_Text.Link, null, /*#__PURE__*/_react.default.createElement(_Icon.default, {
    name: "chevron-left"
  })), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("p", null, /*#__PURE__*/_react.default.createElement("span", null, location)), /*#__PURE__*/_react.default.createElement("p", null, title))), /*#__PURE__*/_react.default.createElement(_style.RightSection, null, /*#__PURE__*/_react.default.createElement(_Icon.default, {
    name: "Bell"
  }), /*#__PURE__*/_react.default.createElement(_Avatar.default, {
    size: "medium",
    hasCarat: true,
    hasText: true,
    user: user
  })));
};

var _default = TopBar;
exports.default = _default;