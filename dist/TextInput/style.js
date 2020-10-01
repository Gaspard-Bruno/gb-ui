"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.InputContainer = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  border-radius: 2px;\n  padding: ", "px ", "px;\n  border: 1px solid\n    ", ";\n  font-family: Muli;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 16px;\n  line-height: 24px;\n  color: ", ";\n  outline: none;\n  &:focus {\n    outline: none;\n    border-radius: 2px;\n    border-color: ", ";\n  }\n  &:disabled {\n    background-color: ", ";\n    color: ", ";\n  },\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
<<<<<<< master
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-flow: column nowrap;\n  justify-content: flex-end;\n  & > nav {\n    position: absolute;\n    align-self: flex-end;\n    background-color: white;\n    padding: 8px;\n    margin: 5px;\n  }\n  color: ", ";\n  > p {\n    margin: ", "px 0;\n  }\n"]);
=======
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-flow: column nowrap;\n  justify-content: flex-end;\n  width: ", ";\n  & > nav {\n    position: absolute;\n    align-self: flex-end;\n    background-color: white;\n    padding: 8px;\n    margin: 5px;\n  }\n  color: ", ";\n  > p {\n    margin: ", "px 0;\n  }\n"]);
>>>>>>> export radio buttons component hook: compile changes

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var InputContainer = _styledComponents.default.div(_templateObject(), function (props) {
<<<<<<< master
=======
  return props.isMini ? "50%" : "100%";
}, function (props) {
>>>>>>> export radio buttons component hook: compile changes
  return props.error ? props.theme.colors.feedback.error.default : props.theme.colors.darkBlue;
}, function (props) {
  return props.theme.margin / 2;
});

exports.InputContainer = InputContainer;

var Input = _styledComponents.default.input(_templateObject2(), function (props) {
  return props.theme.margin;
}, function (props) {
  return props.theme.margin / 2;
}, function (props) {
  return props.error ? props.theme.colors.feedback.error.default : props.theme.colors.mediumBeige;
}, function (props) {
  return props.theme.colors.darkBlue;
}, function (props) {
  return props.error ? props.theme.colors.feedback.error.default : props.theme.colors.darkBlue;
}, function (props) {
  return props.theme.colors.lightBeige;
}, function (props) {
  return props.theme.colors.grey;
});

var _default = Input;
exports.default = _default;