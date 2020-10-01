"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Filters = exports.Selects = exports.Header = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n    display: flex;\n    flex-wrap: wrap;\n\n    > * {\n        margin: 16px 16px 0px 0px;\n    }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    display: flex;\n\n    > * {\n        margin-right: 32px;\n    }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    display: flex;\n    justify-content: space-between;\n\n    \n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    margin-bottom: 32px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledFilterBar = _styledComponents.default.div(_templateObject());

var Header = _styledComponents.default.div(_templateObject2());

exports.Header = Header;

var Selects = _styledComponents.default.div(_templateObject3());

exports.Selects = Selects;

var Filters = _styledComponents.default.div(_templateObject4());

exports.Filters = Filters;
var _default = StyledFilterBar;
exports.default = _default;