"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.IconButton = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  border-radius: 50%;\n  outline: none;\n  width: 32px;\n  height: 32px;\n  > svg {\n    margin-top: 0 !important;\n  }\n  ", " > * {\n    margin: 0 auto;\n  }\n  &:hover {\n    cursor: pointer;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  border-radius: 40px;\n  outline: none;\n  width: ", ";\n  margin-top: ", ";\n  margin-bottom: ", ";\n  padding: ", "px;\n  ", "\n  > * {\n    margin: 0 auto;\n  }\n  &:hover {\n    cursor: pointer;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var getStyleFromBtnType = function getStyleFromBtnType() {
  var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "primary";
  var theme = arguments.length > 1 ? arguments[1] : undefined;

  switch (type) {
    case "primary":
      return "\n\n        background-color: ".concat(theme.colors.brand.yellow, ";\n        border: transparent;\n        &:hover {\n          background-color: ").concat(theme.colors.brand.lighter, ";\n        }\n      ");

    case "secondary":
      return "\n        background-color: transparent;\n        border: 1px solid ".concat(theme.colors.brand.yellow, ";\n        &:hover {\n          border: transparent;\n          background-color: ").concat(theme.colors.brand.lighter, ";\n        }\n      ");

    case "terceary":
      return "\n        background-color: ".concat(theme.colors.brand.orange, ";\n        border: transparent;\n        &:hover {\n          border: transparent;\n          background-color: ").concat(theme.colors.brand.orangeLight, ";\n        }\n      ");

    case "transparent":
      return "\n        background-color: transparent;\n        border: transparent;\n        > span {\n          color: ".concat(theme.colors.brand.orange, ";\n          &:hover {\n            color: ").concat(theme.colors.brand.orangeDarker, ";\n          }\n        }\n      ");

    case "borded":
      return "\n        border: 1px solid ".concat(theme.colors.brand.yellow, ";\n        box-sizing: border-box;\n        border-radius: 100px;\n        background-color: ").concat(theme.colors.white, ";\n        > span {\n\n          color: ").concat(theme.colors.brand.darkBlue, ";\n          &:hover {\n            color: ").concat(theme.colors.brand.orangeDarker, ";\n          }\n        }\n      ");

    default:
      break;
  }
};

var Button = _styledComponents.default.button(_templateObject(), function (props) {
  return props.fullWidth ? "244px" : "";
}, function (props) {
  return props.fullWidth ? "20px" : "";
}, function (props) {
  return props.fullWidth ? "20px" : "";
}, function (props) {
  return props.small ? props.theme.margin * 0.75 : props.theme.margin;
}, function (props) {
  return getStyleFromBtnType(props.btnType, props.theme);
});

var IconButton = _styledComponents.default.button(_templateObject2(), function (props) {
  return getStyleFromBtnType(props.btnType, props.theme);
});

exports.IconButton = IconButton;
var _default = Button;
exports.default = _default;