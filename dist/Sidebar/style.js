"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.NavText = exports.NavLink = exports.NavSection = exports.NavHeader = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Text = require("../Text");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  padding: 0px 30px;\n  height: 40px;\n  display: flex;\n  align-items: center;\n\n  color: ", ";\n  ", "\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  padding: 0px 30px;\n  height: 40px;\n  display: flex;\n  align-items: center;\n  color: ", ";\n  &:visited {\n    color: ", ";\n  }\n  ", ";\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  margin-bottom: ", "px;\n  button {\n    transition: all 0.5s;\n    svg {\n      transition: all 0.5s;\n      transform: ", ";\n      > path {\n        fill: ", ";\n      }\n    }\n    ", "\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  text-transform: uppercase;\n  margin-top: ", ";\n  color: ", ";\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  background-color: ", ";\n  color: white;\n  transition: width 0.5s linear;\n  width: ", ";\n  height: 100vh;\n  svg {\n    margin-top: ", "px;\n  }\n  > div {\n    transition: all 0.5s linear;\n\n    ", "\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledSidebar = _styledComponents.default.div(_templateObject(), function (props) {
  return props.theme.colors.brand.orange;
}, function (props) {
  return props.open ? '240px' : '45px';
}, function (props) {
  return props.theme.margin;
}, function (props) {
  return !props.open ? "\n    position: fixed;\n    left: -240px;\n  " : "\n    position: fixed;\n    left: 0px;";
});

var NavHeader = (0, _styledComponents.default)(_Text.Tiny)(_templateObject2(), function (props) {
  return props.theme.margin * 2;
}, function (props) {
  return props.theme.colors.white;
});
exports.NavHeader = NavHeader;

var NavSection = _styledComponents.default.div(_templateObject3(), function (props) {
  return props.theme.margin * 2;
}, function (props) {
  return props.open ? 'rotate(180deg)' : 'rotate(0deg)';
}, function (props) {
  return props.theme.colors.white;
}, function (props) {
  return !props.open ? "\n    position: fixed;\n    top: 64px;\n    left: 8px;\n  " : "\n    position: fixed;\n    top: 64px;\n    left: ".concat(240 - 16, "px;\n    ");
});

exports.NavSection = NavSection;

var getActiveLinkStyle = function getActiveLinkStyle(theme, active) {
  if (!active) {
    return "\n      background-color: none;\n      border-left: solid 2px transparent;\n      ";
  } else {
    return "\n      background-color: ".concat(theme.colors.brand.orangeLight, ";\n      border-left: solid 2px white;\n      ");
  }
};

var NavLink = (0, _styledComponents.default)(_Text.Link)(_templateObject4(), function (props) {
  return props.theme.colors.white;
}, function (props) {
  return props.theme.colors.white;
}, function (props) {
  return getActiveLinkStyle(props.theme, props.disabled);
});
exports.NavLink = NavLink;
var NavText = (0, _styledComponents.default)(_Text.ButtonText)(_templateObject5(), function (props) {
  return props.theme.colors.white;
}, function (props) {
  return getActiveLinkStyle(props.theme, props.disabled);
});
exports.NavText = NavText;
var _default = StyledSidebar;
exports.default = _default;