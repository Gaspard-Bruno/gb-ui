"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Right = exports.Left = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  p {\n    color: ", ";\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  margin: 24px 0px 32px;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledPagination = _styledComponents.default.div(_templateObject());

var Left = _styledComponents.default.div(_templateObject2(), function (props) {
  return props.theme.colors.grey;
});

exports.Left = Left;

var Right = _styledComponents.default.div(_templateObject3());

exports.Right = Right;
var _default = StyledPagination;
exports.default = _default;