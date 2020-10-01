"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.StyledTracker = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  margin-right: 8px;\n  height: 24px;\n  min-width: 23px;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  letter-spacing: 1px;\n  text-transform: uppercase;\n  box-sizing: border-box;\n  border-radius: 2px;\n  font-size: 12px;\n  ", ";\n\n  &:hover {\n    cursor: pointer;\n  }\n\n  h3 {\n    margin: 0px;\n  }\n\n  svg {\n    height: 24px;\n    width: 24px;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var getActiveStyles = function getActiveStyles(theme, isActive, type) {
  if (isActive) {
    return "\n            border: ".concat(type === "ellipsis" ? "none" : "1px solid " + theme.colors.darkBlue, ";\n            color: ").concat(theme.colors.darkBlue, ";\n        ");
  } else {
    return "\n            border: ".concat(type === "ellipsis" ? "none" : "1px solid " + theme.colors.mediumBeige, ";\n            h3 {\n                color: ").concat(theme.colors.mediumBeige, ";\n            }\n        ");
  }
};

var StyledTracker = _styledComponents.default.div(_templateObject(), function (props) {
  return getActiveStyles(props.theme, props.isActive, props.type);
});

exports.StyledTracker = StyledTracker;
var _default = StyledTracker;
exports.default = _default;