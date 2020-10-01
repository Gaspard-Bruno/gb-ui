"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Recurrent = exports.ServiceDetails = exports.Details = exports.AdminContainer = exports.IconContainer = exports.BadgeContainer = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Text = require("../Text");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject7() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  margin: 8px 0px;\n  text-transform: capitalize;\n\n  span {\n    color: ", ";\n  }\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  margin-top: 14px;\n  text-transform: capitalize;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  margin-top: 16px;\n  padding-top: 8px;\n  border-top: 1px solid ", ";\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  min-height: 32px;\n  min-width: 32px;\n  border-radius: 50%;\n  background-color: ", ";\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-right: 8px;\n\n  svg {\n    width: 14px;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  padding: 0px;\n  margin-bottom: 8px;\n  display: flex;\n  flex-direction: flex-start;\n\n  p {\n    color: white !important;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  width: 260px;\n  border: 1px solid ", ";\n  box-sizing: border-box;\n  border-radius: 4px;\n  padding: 16px 8px 8px;\n  background-color: white;\n  margin-bottom: ", "px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var KanbanCard = _styledComponents.default.div(_templateObject(), function (props) {
  return props.theme.colors.mediumBeige;
}, function (props) {
  return props.theme.margin;
});

var BadgeContainer = _styledComponents.default.div(_templateObject2());

exports.BadgeContainer = BadgeContainer;

var IconContainer = _styledComponents.default.div(_templateObject3(), function (props) {
  return props.theme.colors.lightBeige;
});

exports.IconContainer = IconContainer;

var AdminContainer = _styledComponents.default.div(_templateObject4(), function (props) {
  return props.theme.colors.mediumBeige;
});

exports.AdminContainer = AdminContainer;

var Details = _styledComponents.default.div(_templateObject5());

exports.Details = Details;
var ServiceDetails = (0, _styledComponents.default)(_Text.SmallBody)(_templateObject6(), function (props) {
  return props.theme.colors.grey;
});
exports.ServiceDetails = ServiceDetails;

var Recurrent = _styledComponents.default.div(_templateObject7());

exports.Recurrent = Recurrent;
var _default = KanbanCard;
exports.default = _default;