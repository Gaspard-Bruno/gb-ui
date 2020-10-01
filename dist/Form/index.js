"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _TextInput = _interopRequireDefault(require("../TextInput"));

var _TextArea = _interopRequireDefault(require("../TextArea"));

var _Button = _interopRequireDefault(require("../Button"));

var _styles = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Form = function Form(_ref) {
  var onSubmit = _ref.onSubmit,
      formFields = _ref.formFields,
      top = _ref.top,
      fullWidth = _ref.fullWidth,
      _ref$btnLabel = _ref.btnLabel,
      btnLabel = _ref$btnLabel === void 0 ? 'Inscrever-se' : _ref$btnLabel,
      children = _ref.children,
      bg = _ref.bg;
  var formRef = (0, _react.useRef)();
  return /*#__PURE__*/_react.default.createElement(_styles.FormContainer, {
    top: top,
    bg: bg
  }, children, /*#__PURE__*/_react.default.createElement(_styles.StyledForm, {
    fullWidth: fullWidth,
    ref: formRef,
    onSubmit: onSubmit
  }, formFields && formFields.map(function (field, index) {
    return renderFields(field);
  })), /*#__PURE__*/_react.default.createElement(_Button.default, {
    fullWidth: true,
    onClick: onSubmit,
    btnType: "primary",
    type: "submit",
    text: btnLabel
  }));
};

var renderFields = function renderFields(field) {
  switch (field === null || field === void 0 ? void 0 : field.type) {
    case 'text':
    case 'password':
      return /*#__PURE__*/_react.default.createElement(_TextInput.default, _extends({
        key: field.label
      }, field));

    case 'text-area':
      return /*#__PURE__*/_react.default.createElement(_TextArea.default, _extends({
        key: field.label
      }, field));

    default:
      return;
  }
};

Form.propTypes = {
  formFields: _propTypes.default.arrayOf(_propTypes.default.object)
};
var _default = Form;
exports.default = _default;