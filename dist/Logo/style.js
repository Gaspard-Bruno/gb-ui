"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  min-width: ", "px;\n  ", "\n  svg {\n    width: ", "px;\n    vertical-align: middle;\n    z-index: 1000;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Logo = _styledComponents.default.div(_templateObject(), function (props) {
  return props.size || 120;
}, function (props) {
  return props.center && "\n      display: flex;\n      flex-flow: row nowrap;\n      justify-content: center;\n  ";
}, function (props) {
  return props.size;
});

var _default = Logo;
exports.default = _default;