"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledForm = exports.FormContainer = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject2() {
<<<<<<< master
  var data = _taggedTemplateLiteral(["\n  div {\n    padding: 10px;\n    & > textarea {\n      min-height: 161px;\n    }\n    & > p {\n      text-align: left;\n    }\n  }\n"]);
=======
  var data = _taggedTemplateLiteral(["\n  flex: 1;\n  display: flex;\n  flex-flow: column;\n  > h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6 {\n    text-align: left;\n  }\n  > div {\n    & > textarea {\n      min-height: ", "px;\n    }\n    & > p {\n      text-align: left;\n    }\n  }\n"]);
>>>>>>> export radio buttons component hook: compile changes

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
<<<<<<< master
  var data = _taggedTemplateLiteral(["\n  background-color: ", ";\n  border-radius: 10px;\n  display: flex;\n  flex-direction: column;\n  padding: 20px;\n  top: ", ";\n  margin 0 auto;\n  max-width: 616px;\n  text-align: center;\n  div {\n    padding: 0;\n  }\n  button {\n    align-self: center;\n    margin-bottom: 20px;\n    margin-top: 30px;\n  }\n"]);
=======
  var data = _taggedTemplateLiteral(["\n  background-color: ", ";\n  border-radius: 10px;\n  display: flex;\n  flex-direction: column;\n  margin: 0 auto;\n  max-width: 616px;\n  width: 100%;\n  button {\n    align-self: center;\n    margin: ", "px 0;\n  }\n"]);
>>>>>>> export radio buttons component hook: compile changes

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

    default:
<<<<<<< master
      return props.theme.colors.white;
=======
      return props.bg;
>>>>>>> export radio buttons component hook: compile changes
  }
};

var FormContainer = _styledComponents.default.div(_templateObject(), function (props) {
  return getSelectedBackground(props);
}, function (props) {
<<<<<<< master
  return props.top ? "-80px" : "0";
=======
  return props.theme.margin;
>>>>>>> export radio buttons component hook: compile changes
});

exports.FormContainer = FormContainer;

<<<<<<< master
var StyledForm = _styledComponents.default.form(_templateObject2());
=======
var StyledForm = _styledComponents.default.form(_templateObject2(), function (props) {
  return props.theme.margin * 4;
});
>>>>>>> export radio buttons component hook: compile changes

exports.StyledForm = StyledForm;