"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ErrorText = exports.AlertTitle = exports.AlertText = exports.ButtonText = exports.Link = exports.Tiny = exports.SmallBodyFAQ = exports.SmallBody = exports.Body = exports.SubHeading = exports.Heading = exports.Jumbo = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _lodash = _interopRequireDefault(require("lodash.get"));

var _reactRouterDom = require("react-router-dom");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject12() {
  var data = _taggedTemplateLiteral(["\n  color: ", ";\n"]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = _taggedTemplateLiteral(["\n  display: inline-flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  text-decoration: none;\n  font-family: Space Grotesk;\n  font-style: normal;\n  font-weight: bolder;\n  color: ", ";\n  font-size: 16px;\n  line-height: 24px;\n"]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\n  text-decoration: none;\n  font-family: Muli;\n  font-style: normal;\n  font-weight: normal;\n  color: ", ";\n  font-size: 16px;\n  line-height: 24px;\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n  text-decoration: none;\n  font-family: Space Grotesk;\n  font-style: medium;\n  font-weight: 500;\n  color: ", ";\n  font-size: 16px;\n  line-height: 24px;\n  :hover {\n    color: ", ";\n  }\n  :active {\n    color: ", ";\n  }\n  :visited {\n    color: ", ";\n  }\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n  text-decoration: none;\n  font-family: Space Grotesk;\n  font-style: medium;\n  font-weight: 500;\n  color: ", ";\n  font-size: 16px;\n  line-height: 24px;\n  :hover {\n    color: ", ";\n  }\n  :active {\n    color: ", ";\n  }\n  :visited {\n    color: ", ";\n  }\n  :focus {\n    color: ", ";\n  }\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  font-family: Muli;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 10px;\n  line-height: 10px;\n  letter-spacing: 1px;\n  text-transform: uppercase;\n  color: ", ";\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  font-family: Space Grotesk;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 14px;\n  line-height: 24px;\n  color: ", ";\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  font-family: Muli;\n  font-style: normal;\n  font-weight: ", ";\n  font-size: 14px;\n  line-height: 16px;\n  color: ", ";\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  font-family: Muli;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 16px;\n  line-height: 24px;\n  color: ", ";\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  font-family: Space Grotesk;\n  font-style: normal;\n  font-weight: bold;\n  ", "\n  color: ", ";\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  font-family: Space Grotesk;\n  font-style: normal;\n  font-weight: bold;\n  ", "\n  color: ", ";\n  ", "\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  font-family: Space Grotesk;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 48px;\n  line-height: 64px;\n  color: ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Jumbo = _styledComponents.default.h1(_templateObject(), function (props) {
  return props.color ? (0, _lodash.default)(props.theme.colors, props.color, props.theme.colors.darkBlue) : props.theme.colors.darkBlue;
});

exports.Jumbo = Jumbo;
var headingSizes = ["\n  font-size: 48px;\n  line-height: 64px;\n  ", "\n  font-size: 32px;\n  line-height: 40px;\n  ", "\n  font-size: 24px;\n  line-height: 32px;\n  ", "\n  font-size: 20px;\n  line-height: 24px;\n  ", "\n  font-size: 18px;\n  line-height: 24px;\n  ", "\n  font-size: 16px;\n  line-height: 24px;\n  "];

var Heading = _styledComponents.default.h2(_templateObject2(), function (props) {
  return props.size ? headingSizes[props.size - 1] : headingSizes[0];
}, function (props) {
  return props.color ? (0, _lodash.default)(props.theme.colors, props.color, props.theme.colors.darkBlue) : props.theme.colors.darkBlue;
}, function (props) {
  return props.center && "text-align: center";
});

exports.Heading = Heading;

var SubHeading = _styledComponents.default.h3(_templateObject3(), function (props) {
  return props.size ? headingSizes[props.size - 1] : headingSizes[2];
}, function (props) {
  return props.color ? (0, _lodash.default)(props.theme.colors, props.color, props.theme.colors.darkBlue) : props.theme.colors.darkBlue;
});

exports.SubHeading = SubHeading;

var Body = _styledComponents.default.p(_templateObject4(), function (props) {
  return props.alt ? props.theme.colors.grey : props.theme.colors.darkBlue;
});

exports.Body = Body;

var SmallBody = _styledComponents.default.p(_templateObject5(), function (props) {
  return props.bold ? "bold" : "normal";
}, function (props) {
  return props.color ? (0, _lodash.default)(props.theme.colors, props.color, props.theme.colors.darkBlue) : props.theme.colors.darkBlue;
});

exports.SmallBody = SmallBody;

var SmallBodyFAQ = _styledComponents.default.p(_templateObject6(), function (props) {
  return props.theme.colors.grey;
});

exports.SmallBodyFAQ = SmallBodyFAQ;

var Tiny = _styledComponents.default.h3(_templateObject7(), function (props) {
  return props.color ? (0, _lodash.default)(props.theme.colors, props.color, props.theme.colors.darkBlue) : props.theme.colors.darkBlue;
});

exports.Tiny = Tiny;
var Link = (0, _styledComponents.default)(_reactRouterDom.Link)(_templateObject8(), function (props) {
  return props.color ? (0, _lodash.default)(props.theme.colors, props.color, props.theme.colors.darkBlue) : props.theme.colors.darkBlue;
}, function (props) {
  return props.theme.colors.grey;
}, function (props) {
  return props.color ? (0, _lodash.default)(props.theme.colors, props.color, props.theme.colors.darkBlue) : props.theme.colors.darkBlue;
}, function (props) {
  return props.color ? (0, _lodash.default)(props.theme.colors, props.color, props.theme.colors.darkBlue) : props.theme.colors.darkBlue;
}, function (props) {
  return props.theme.colors.brand.red;
});
exports.Link = Link;

var ButtonText = _styledComponents.default.span(_templateObject9(), function (props) {
  return props.color ? (0, _lodash.default)(props.theme.colors, props.color, props.theme.colors.darkBlue) : props.theme.colors.darkBlue;
}, function (props) {
  return props.color ? (0, _lodash.default)(props.theme.colors, props.color, props.theme.colors.darkBlue) : props.theme.colors.darkBlue;
}, function (props) {
  return props.color ? (0, _lodash.default)(props.theme.colors, props.color, props.theme.colors.darkBlue) : props.theme.colors.darkBlue;
}, function (props) {
  return props.color ? (0, _lodash.default)(props.theme.colors, props.color, props.theme.colors.darkBlue) : props.theme.colors.darkBlue;
});

exports.ButtonText = ButtonText;

var AlertText = _styledComponents.default.p(_templateObject10(), function (props) {
  return props.theme.colors.red;
});

exports.AlertText = AlertText;

var AlertTitle = _styledComponents.default.h3(_templateObject11(), function (props) {
  return props.theme.colors.red;
});

exports.AlertTitle = AlertTitle;
var ErrorText = (0, _styledComponents.default)(SmallBody)(_templateObject12(), function (props) {
  return props.theme.colors.feedback.error.default;
});
exports.ErrorText = ErrorText;
var _default = {
  Jumbo: Jumbo,
  Heading: Heading,
  SubHeading: SubHeading,
  Body: Body,
  SmallBody: SmallBody,
  SmallBodyFAQ: SmallBodyFAQ,
  Tiny: Tiny,
  Link: Link,
  ButtonText: ButtonText,
  AlertText: AlertText,
  AlertTitle: AlertTitle,
  ErrorText: ErrorText
};
exports.default = _default;