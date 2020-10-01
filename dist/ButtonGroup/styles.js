"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledButton = exports.ButtonGroupContainer = exports.StyledContainer = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  margin: 0 !important;\n  outline: none;\n  width: ", "px;\n  height: ", "px;\n  background-color: ", ";\n  cursor: pointer;\n  border: ", ";\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n  p {\n    cursor: pointer;\n    position: absolute;\n    color: ", ";\n    margin: 0;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  margin-top: ", "px;\n  margin-bottom: ", "px;\n  display: flex;\n  justify-content: space-between;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledContainer = _styledComponents.default.div(_templateObject(), function (props) {
  return props.theme.margin * 2 + 10;
}, function (props) {
  return props.theme.margin;
});

exports.StyledContainer = StyledContainer;

var ButtonGroupContainer = _styledComponents.default.div(_templateObject2(), function (props) {
  return !console.log(props.isSelected) && props.isSelected ? props.theme.colors.darkBlue : props.theme.colors.grey;
});

exports.ButtonGroupContainer = ButtonGroupContainer;

var StyledButton = _styledComponents.default.button(_templateObject3(), function (props) {
  return props.theme.margin * 4;
}, function (props) {
  return props.theme.margin * 3;
}, function (props) {
  return "".concat(props.theme.colors.white);
}, function (props) {
  return props.isSelected ? "1px solid ".concat(props.theme.colors.darkBlue) : "1px solid ".concat(props.theme.colors.mediumBeige);
});

exports.StyledButton = StyledButton;