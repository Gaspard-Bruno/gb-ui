"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.RightSection = exports.LeftSection = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    display: flex;\n    align-items: center;\n\n    svg {\n        margin-right: 26px;\n    }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    display: flex;\n    align-items: center;\n    padding-left: 32px;\n\n    svg {\n        margin-right: 24px;\n    }\n\n    p {\n        font-weight: bold;\n        font-size: 24px;\n        line-height: 32px;\n        margin: 0px;\n    }\n\n    span {\n        font-weight: bold;\n        font-size: 12px;\n        line-height: 10px;\n        letter-spacing: 1px;\n        text-transform: uppercase;\n        color: ", ";\n    }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    height: 80px;\n    display: flex;\n    justify-content: space-between;\n    margin-bottom: 24px;\n    padding-bottom: 10px;\n    -webkit-box-shadow: 0px 2px 2px 0px rgba(113, 109, 106, 0.05);\n    -moz-box-shadow:    0px 2px 2px 0px rgba(113, 109, 106, 0.05);\n    box-shadow:         0px 2px 2px 0px rgba(113, 109, 106, 0.05);\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledTopBar = _styledComponents.default.div(_templateObject());

var LeftSection = _styledComponents.default.div(_templateObject2(), function (props) {
  return props.theme.colors.grey;
});

exports.LeftSection = LeftSection;

var RightSection = _styledComponents.default.div(_templateObject3());

exports.RightSection = RightSection;
var _default = StyledTopBar;
exports.default = _default;