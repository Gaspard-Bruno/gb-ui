"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Header = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  border-radius: 2px;\n  background-color: ", ";\n  height: 48px;\n  width: 100%;\n  display: flex;\n  font-weight: bold;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  font-size: 14px;\n  line-height: 16px;\n  color: ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledTable = _styledComponents.default.div(_templateObject(), function (props) {
  return props.theme.colors.darkBlue;
});

var Header = _styledComponents.default.div(_templateObject2(), function (props) {
  return props.theme.colors.lightestBeige;
});

exports.Header = Header;
var _default = StyledTable;
exports.default = _default;