"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Text = require("../Text");

var _style = _interopRequireWildcard(require("./style"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Select = function Select(_ref) {
  var error = _ref.error,
      placeholder = _ref.placeholder,
      _ref$options = _ref.options,
      options = _ref$options === void 0 ? [] : _ref$options,
      label = _ref.label,
      onChange = _ref.onChange,
<<<<<<< master
      isDisabled = _ref.isDisabled,
      defaultValue = _ref.defaultValue;
  // TODO Add different color to placeholder
  return /*#__PURE__*/_react.default.createElement(_style.SelectContainer, {
    error: error
=======
      isMini = _ref.isMini,
      isDisabled = _ref.isDisabled,
      defaultValue = _ref.defaultValue;
  console.log(isMini); // TODO Add different color to placeholder

  return /*#__PURE__*/_react.default.createElement(_style.SelectContainer, {
    error: error,
    mini: isMini
>>>>>>> export radio buttons component hook: compile changes
  }, label && /*#__PURE__*/_react.default.createElement(_Text.Body, null, label), /*#__PURE__*/_react.default.createElement(_style.default, {
    onChange: onChange,
    isDisabled: isDisabled,
    styles: _style.selectStyles,
    options: options,
    error: error,
    defaultValue: defaultValue,
    placeholder: placeholder
  }), error && /*#__PURE__*/_react.default.createElement(_Text.ErrorText, null, error));
};

Select.propTypes = {
  isDisabled: _propTypes.default.bool,
  error: _propTypes.default.string,
  placeholder: _propTypes.default.string,
  options: _propTypes.default.arrayOf(_propTypes.default.shape({
    label: _propTypes.default.string,
    value: _propTypes.default.string
  })),
<<<<<<< master
=======
  isMini: _propTypes.default.bool,
>>>>>>> export radio buttons component hook: compile changes
  label: _propTypes.default.string,
  defaultValue: _propTypes.default.string,
  onChange: _propTypes.default.func
};
var _default = Select;
exports.default = _default;