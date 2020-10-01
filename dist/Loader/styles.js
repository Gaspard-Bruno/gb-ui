"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledLoader = exports.StyledLoadingContainer = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Layout = require("Components/Layout");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  ", "\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: center;\n  min-height: 555px;\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledLoadingContainer = _styledComponents.default.div(_templateObject(), _Layout.media.mobile("\n    min-height: 10px;\n  "));

exports.StyledLoadingContainer = StyledLoadingContainer;

var StyledLoader = _styledComponents.default.img(_templateObject2(), _Layout.media.mobile("\n    width: 100%;\n  "));

exports.StyledLoader = StyledLoader;