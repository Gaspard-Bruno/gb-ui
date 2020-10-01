"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledForm = exports.FormContainer = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  div {\n    padding: 10px;\n    & > textarea {\n      min-height: 161px;\n    }\n    & > p {\n      text-align: left;\n    }\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  background-color: ", ";\n  border-radius: 10px;\n  display: flex;\n  flex-direction: column;\n  padding: 20px;\n  top: ", ";\n  margin 0 auto;\n  max-width: 616px;\n  text-align: center;\n  div {\n    padding: 0;\n  }\n  button {\n    align-self: center;\n    margin-bottom: 20px;\n    margin-top: 30px;\n  }\n"]);

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
      return props.theme.colors.white;
  }
};

var FormContainer = _styledComponents.default.div(_templateObject(), function (props) {
  return getSelectedBackground(props);
}, function (props) {
  return props.top ? "-80px" : "0";
});

exports.FormContainer = FormContainer;

var StyledForm = _styledComponents.default.form(_templateObject2());

exports.StyledForm = StyledForm;