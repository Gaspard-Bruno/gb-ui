"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Right = exports.Left = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    padding: 10px;\n    ", ";\n\n    path {\n        ", ";\n    }    \n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    padding: 10px;\n    border-right: 1px solid ", ";\n\n    path {\n        ", ";\n    }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    background-color: ", ";\n    border-radius: 30px;\n    display: flex;\n    width: 90px;\n    height: 40px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledSwitch = _styledComponents.default.div(_templateObject(), function (props) {
  return props.theme.colors.lightestBeige;
});

var getActive = function getActive(active, theme) {
  var textColor = active ? theme.colors.darkBlue : theme.colors.grey;
  return "fill: ".concat(textColor, ";");
};

var Left = _styledComponents.default.div(_templateObject2(), function (props) {
  return props.theme.colors.mediumBeige;
}, function (props) {
  return getActive(props.active, props.theme);
});

exports.Left = Left;

var Right = _styledComponents.default.div(_templateObject3(), function (props) {
  return getActive(props.active, props.theme);
}, function (props) {
  return getActive(props.active, props.theme);
});

exports.Right = Right;
var _default = StyledSwitch;
exports.default = _default;