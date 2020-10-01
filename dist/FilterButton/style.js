"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.CloseContainer = exports.FilterTitle = exports.FilterLabel = exports.Dropdown = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  border-left: 1px solid ", ";\n  height: 100%;\n  display: flex;\n  align-items: center;\n  padding-left: 10px;\n  margin-left: 10px;\n\n  path {\n    fill: ", ";\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  color: ", ";\n  align-items: center;\n  padding: 10px;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 14px;\n  line-height: 16px;\n\n  path {\n    ", "\n  }\n\n  span {\n    margin-left: 10px;\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  margin-left: 10px;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  top: 40px;\n  background-color: white;\n  padding: 5px;\n  border: solid 1px ", ";\n  width: 280px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  background-color: ", ";\n  border-radius: 30px;\n  display: flex;\n  height: 40px;\n  width: fit-content;\n  align-items: center;\n  padding: 0px 15px 0px 10px;\n  position: relative;\n\n  svg {\n    height: 16px;\n    width: 16px;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledFilterButton = _styledComponents.default.div(_templateObject(), function (props) {
  return props.theme.colors.lightestBeige;
});

var Dropdown = _styledComponents.default.div(_templateObject2(), function (props) {
  return props.theme.colors.mediumBeige;
});

exports.Dropdown = Dropdown;

var getIconColor = function getIconColor(filterLabel, theme) {
  if (filterLabel === "service") {
    return "fill: ".concat(theme.colors.darkBlue);
  } else {
    return "fill: ".concat(theme.colors.grey);
  }
};

var FilterLabel = _styledComponents.default.span(_templateObject3());

exports.FilterLabel = FilterLabel;

var FilterTitle = _styledComponents.default.div(_templateObject4(), function (props) {
  return props.theme.colors.grey;
}, function (props) {
  return getIconColor(props.filterLabel, props.theme);
});

exports.FilterTitle = FilterTitle;

var CloseContainer = _styledComponents.default.div(_templateObject5(), function (props) {
  return props.theme.colors.mediumBeige;
}, function (props) {
  return props.theme.colors.feedback.error.default;
});

exports.CloseContainer = CloseContainer;
var _default = StyledFilterButton;
exports.default = _default;