"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  border-radius: 16px;\n  padding: ", "px;\n  box-shadow: ", ";\n  background-color: ", ";\n  color: ", ";\n  align-items: ", ";\n  justify-content: ", ";\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var getSelectedBackground = function getSelectedBackground(props) {
  switch (props.bg) {
    case "alt":
      return props.theme.colors.lightBeige;

    case "secondary":
      return props.theme.colors.brand.yellow;

    case "terceary":
      return props.theme.colors.brand.lightBlue;

    case "transparent":
      return "transparent";

    default:
      return props.theme.colors.white;
  }
};

var Card = _styledComponents.default.div(_templateObject(), function (props) {
  return props.theme.margin * (props.padding || 1);
}, function (props) {
  return props.shadow ? props.theme.boxShadow : 0;
}, function (props) {
  return getSelectedBackground(props);
}, function (props) {
  return props.theme.colors.darkBlue;
}, function (props) {
  return props.align ? "".concat(props.align) : "";
}, function (props) {
  return props.justify ? "".concat(props.justify) : "none";
}, function (props) {
  var _props$customStyle;

  return (_props$customStyle = props === null || props === void 0 ? void 0 : props.customStyle(props)) !== null && _props$customStyle !== void 0 ? _props$customStyle : "";
});

var _default = Card;
exports.default = _default;