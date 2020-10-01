"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TabButton = exports.TabGroup = exports.TabContainer = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  border-radius: 4px;\n  padding: ", "px;\n  margin: ", "px;\n  outline: none;\n  border: none;\n  background-color: ", ";\n  margin-bottom: ", "px;\n  transition: all 0.25s;\n  > * {\n    color: ", ";\n    &:hover {\n      color: ", ";\n    }\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  width: 100%;\n  flex-flow: row nowrap;\n  justify-content: ", ";\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  display: flex;\n  flex-flow: column nowrap;\n  justify-content: flex-start;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var TabContainer = _styledComponents.default.div(_templateObject());

exports.TabContainer = TabContainer;

var TabGroup = _styledComponents.default.div(_templateObject2(), function (props) {
  return props.justify ? props.justify : "flex-start";
});

exports.TabGroup = TabGroup;

var TabButton = _styledComponents.default.button(_templateObject3(), function (props) {
  return props.theme.margin / 1.5;
}, function (props) {
  return props.theme.margin;
}, function (props) {
  return props.isSelected ? props.theme.colors.brand.orange : props.theme.colors.white;
}, function (props) {
  return props.theme.margin;
}, function (props) {
  return props.isSelected ? props.theme.colors.white : props.theme.colors.darkBlue;
}, function (props) {
  return props.isSelected ? props.theme.colors.white : props.theme.colors.darkBlue;
});

exports.TabButton = TabButton;