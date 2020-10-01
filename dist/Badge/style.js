"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  height: 24px;\n  display: flex;\n  flex-flow: row nowrap;\n  background-color: ", ";\n  > p {\n    color: ", ";\n    margin: ", "px\n      ", "px;\n  }\n  > svg {\n    vertical-align: middle;\n    margin: auto ", "px;\n    margin-left: 0;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var getColorFromStatus = function getColorFromStatus(theme, status) {
  return {
    contact: theme.brand.blue,
    received: theme.brand.blue,
    complete: theme.brand.blue,
    closed: theme.brand.blue,
    analysis: theme.brand.yellow,
    awaiting_specialist: theme.brand.yellow,
    awaiting_visit_payment: theme.brand.yellow,
    awaiting_interview: theme.brand.yellow,
    awaiting_payment: theme.brand.yellow,
    awaiting_visit: theme.brand.yellow,
    awaiting_conclusion: theme.feedback.success.default,
    canceled: theme.feedback.error.default,
    rejected: theme.feedback.error.default,
    new_candidate: theme.brand.blue,
    accepted: theme.brand.green
  }[status];
};

var Badge = _styledComponents.default.span(_templateObject(), function (props) {
  return props.chip ? props.theme.colors.lightBeige : getColorFromStatus(props.theme.colors, props.status);
}, function (props) {
  return props.chip ? props.theme.colors.darkBlue : props.theme.colors.black;
}, function (props) {
  return props.theme.margin / 4;
}, function (props) {
  return props.theme.margin * 0.75;
}, function (props) {
  return props.theme.margin * 0.75;
});

var _default = Badge;
exports.default = _default;