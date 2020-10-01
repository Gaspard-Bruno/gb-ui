"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Text = require("../Text");

var _Icon = _interopRequireDefault(require("../Icon"));

var _style = _interopRequireWildcard(require("./style"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

<<<<<<< master
=======
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

>>>>>>> export radio buttons component hook: compile changes
var TextInput = function TextInput(_ref) {
  var error = _ref.error,
      placeholder = _ref.placeholder,
      defaultValue = _ref.defaultValue,
      label = _ref.label,
      _onChange = _ref.onChange,
      type = _ref.type,
<<<<<<< master
      hasIcon = _ref.hasIcon;
=======
      hasIcon = _ref.hasIcon,
      isMini = _ref.isMini,
      otherProps = _objectWithoutProperties(_ref, ["error", "placeholder", "defaultValue", "label", "onChange", "type", "hasIcon", "isMini"]);

>>>>>>> export radio buttons component hook: compile changes
  var defaultIcons = [{
    name: 'eye-off',
    type: 'password'
  }, {
    name: 'eye-on',
    type: 'text'
  }];

  var _useState = (0, _react.useState)(defaultIcons[0].name),
      _useState2 = _slicedToArray(_useState, 2),
      displayedIcon = _useState2[0],
      setDisplayedIcon = _useState2[1];

  var _useState3 = (0, _react.useState)(type || 'text'),
      _useState4 = _slicedToArray(_useState3, 2),
      inputType = _useState4[0],
      setInputType = _useState4[1];

  var handleIconChange = function handleIconChange() {
    var newIcon = defaultIcons.find(function (e) {
      return e.name !== displayedIcon;
    });
    setInputType(newIcon.type);
    setDisplayedIcon(newIcon.name);
  };

  return /*#__PURE__*/_react.default.createElement(_style.InputContainer, {
    error: error
  }, hasIcon && /*#__PURE__*/_react.default.createElement("nav", {
    onClickCapture: handleIconChange
  }, /*#__PURE__*/_react.default.createElement(_Icon.default, {
    name: displayedIcon
  })), label && /*#__PURE__*/_react.default.createElement(_Text.Body, null, label), /*#__PURE__*/_react.default.createElement(_style.default, {
    type: inputType,
    error: error,
    defaultValue: defaultValue,
<<<<<<< master
=======
    value: otherProps.value,
>>>>>>> export radio buttons component hook: compile changes
    placeholder: placeholder,
    onChange: function onChange(e) {
      return _onChange(e.target.value);
    }
  }), error && /*#__PURE__*/_react.default.createElement(_Text.ErrorText, null, error));
};

TextInput.propTypes = {
  error: _propTypes.default.string,
  placeholder: _propTypes.default.string,
  label: _propTypes.default.string,
  defaultValue: _propTypes.default.string,
  onChange: _propTypes.default.func,
  type: _propTypes.default.string,
<<<<<<< master
=======
  isMini: _propTypes.default.bool,
>>>>>>> export radio buttons component hook: compile changes
  hasIcon: _propTypes.default.bool
};
var _default = TextInput;
exports.default = _default;