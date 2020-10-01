"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.TextAreaContainer = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  border-radius: 2px;\n  resize: none;\n  padding: ", "px\n    ", "px;\n  border: 1px solid\n    ", ";\n  font-family: Muli;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 16px;\n  line-height: 24px;\n  color: ", ";\n  outline: none;\n  &:focus {\n    outline: none;\n    border-radius: 2px;\n    border-color: ", ";\n  }\n  &:disabled {\n    background-color: ", ";\n    color: ", ";\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-flow: column nowrap;\n  justify-content: flex-start;\n  color: ", ";\n  > p {\n    margin: ", "px 0;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var TextAreaContainer = _styledComponents.default.div(_templateObject(), function (props) {
  return props.error ? props.theme.colors.feedback.error.default : props.theme.colors.darkBlue;
}, function (props) {
  return props.theme.margin / 2;
});

exports.TextAreaContainer = TextAreaContainer;

var TextArea = _styledComponents.default.textarea(_templateObject2(), function (props) {
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

var _default = TextArea;
exports.default = _default;