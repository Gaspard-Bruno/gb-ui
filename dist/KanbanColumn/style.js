"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.IconContainer = exports.Header = exports.ColumnCardsContainer = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  path {\n    fill: ", ";\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  position: sticky;\n  top: 0;\n  background-color: ", ";\n  align-items: baseline;\n  justify-content: space-between;\n  width: 85%;\n  padding: 0px 30px;\n\n  h3 {\n    font-size: 16px;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  overflow-y: scroll;\n  &::-webkit-scrollbar {\n    margin-top: 32px;\n    height: 4px;\n    width: 4px;\n    background-color: ", ";\n  }\n\n  &::-webkit-scrollbar-thumb {\n    margin-top: 30px;\n    background: ", ";\n    border-radius: 30px;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  background-color: ", ";\n  border-radius: 4px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 0px 16px 16px 16px;\n  min-width: 260px;\n\n  .items > * {\n    margin-bottom: 16px;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var KanbanColumn = _styledComponents.default.div(_templateObject(), function (props) {
  return props.theme.colors.lightestBeige;
});

var ColumnCardsContainer = _styledComponents.default.div(_templateObject2(), function (props) {
  return props.theme.colors.lightestBeige;
}, function (props) {
  return props.theme.colors.darkBlue;
});

exports.ColumnCardsContainer = ColumnCardsContainer;

var Header = _styledComponents.default.div(_templateObject3(), function (props) {
  return props.theme.colors.lightestBeige;
});

exports.Header = Header;

var IconContainer = _styledComponents.default.div(_templateObject4(), function (props) {
  return props.theme.colors.grey;
});

exports.IconContainer = IconContainer;
var _default = KanbanColumn;
exports.default = _default;