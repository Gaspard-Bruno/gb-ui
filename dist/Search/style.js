"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Container = exports.Button = exports.Input = exports.SearchIconContainer = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  border-radius: 0 48px 48px 0;\n  outline: none !important;\n  background-color: ", ";\n  border: none;\n  padding: 0 ", "px;\n  flex: 1;\n  > p {\n    margin: ", "px;\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  flex: 3;\n  border-radius: 48px 0 0 48px;\n  color: ", ";\n  padding: 0 ", "px;\n  &:focus {\n    outline: none;\n  }\n  font-family: Muli;\n  font-size: 16px;\n  line-height: 24px;\n  color: ", ";\n  ", "\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  margin: 12px 0px 0px 8px;\n  \n  svg {\n    height: 20px;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: flex-start;\n  padding: 0;\n  input {\n    border: 1px solid ", ";\n  }\n  position: relative;  \n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = _styledComponents.default.div(_templateObject(), function (props) {
  return props.theme.mediumBeige;
});

exports.Container = Container;

var getStylesFromType = function getStylesFromType(theme, type) {
  if (type === "service") {
    return "\n    border-radius: 2px;\n    padding-left: 40px;\n    color: ".concat(theme.colors.mediumBeige, ";\n    position: relative;\n    &:focus {\n      outline: ").concat(theme.colors.darkBlue, ";\n    } \n  ");
  }
};

var SearchIconContainer = _styledComponents.default.div(_templateObject2());

exports.SearchIconContainer = SearchIconContainer;

var Input = _styledComponents.default.input(_templateObject3(), function (props) {
  return props.theme.colors.grey;
}, function (props) {
  return props.theme.margin * 1.5;
}, function (props) {
  return props.theme.grey;
}, function (props) {
  return getStylesFromType(props.theme, props.type);
});

exports.Input = Input;

var Button = _styledComponents.default.button(_templateObject4(), function (props) {
  return props.theme.colors.brand.yellow;
}, function (props) {
  return props.theme.margin * 1;
}, function (props) {
  return props.theme.margin;
});

exports.Button = Button;