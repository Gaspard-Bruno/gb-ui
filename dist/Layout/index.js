"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BackofficeKanbanContainer = exports.BackofficeContainer = exports.BackofficePage = exports.Code = exports.Col = exports.Row = exports.Page = exports.media = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  flex: ", ";\n  display: flex;\n  flex-flow: column nowrap;\n  align-items: ", ";\n  justify-content: ", ";\n  padding: ", "px;\n  ", "\n  ", "\n  ", "\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-flow: row ", ";\n  align-items: ", ";\n  max-width: ", "%;\n  width: 100%;\n  justify-content: ", ";\n  min-height: ", "px;\n  ", "\n  ", "\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  max-height: calc(70vh);\n  overflow-x: scroll;\n  overflow-y: hidden;\n  padding-bottom: 40px;\n  transition: height 0.3s ease-out;\n\n  > * {\n    margin-right: 16px;\n  }\n\n  &::-webkit-scrollbar {\n    margin-top: 32px;\n    height: 4px;\n    background-color: ", ";\n  }\n\n  &::-webkit-scrollbar-thumb {\n    margin-top: 30px;\n    background: ", ";\n    border-radius: 30px;\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  margin: 0px 32px;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  background-color: ", ";\n  height: 100vh;\n  width: calc(100vw - 240px);\n  margin-left: 240px;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  background-color: ", ";\n  min-height: 100vh;\n  display: flex;\n  flex-flow: column nowrap;\n  flex: 1;\n  margin: 0 ", "px;\n\n  &::-webkit-scrollbar {\n    margin-top: 32px;\n    height: 4px;\n    background-color: ", ";\n  }\n\n  &::-webkit-scrollbar-thumb {\n    margin-top: 30px;\n    background: ", ";\n    border-radius: 30px;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  flex-flow: row nowrap;\n  max-width: 60%;\n  > pre {\n    max-height: 30vh;\n    padding: 16px;\n    background-color: ", "ff;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var media = {
  mobile: function mobile(styles) {
    return "\n    @media only screen and (max-width: 375px) {\n      ".concat(styles, "\n    }\n  ");
  },
  tablet: function tablet(styles) {
    return "\n    @media only screen and (max-width: 768px) {\n      ".concat(styles, "\n    }\n  ");
  },
  smallDesktop: function smallDesktop(styles) {
    return "\n    @media only screen and (max-width: 1024px) {\n      ".concat(styles, "\n    }\n  ");
  },
  desktop: function desktop(styles) {
    return "\n    @media only screen and (min-width: 1024px) {\n      ".concat(styles, "\n    }\n  ");
  }
};
exports.media = media;

var getPageBackground = function getPageBackground(props) {
  switch (props.bg) {
    case "white":
      return props.theme.colors.white;

    case "orange":
      return props.theme.colors.brand.orange;

    default:
      return props.theme.colors.white;
  }
};

var Code = _styledComponents.default.div(_templateObject(), function (props) {
  return props.theme.colors.mediumBeige;
});

exports.Code = Code;

var Page = _styledComponents.default.div(_templateObject2(), function (props) {
  return getPageBackground(props);
}, function (props) {
  return props.theme.margin * 2;
}, function (props) {
  return props.theme.colors.lightestBeige;
}, function (props) {
  return props.theme.colors.darkBlue;
});

exports.Page = Page;

var BackofficePage = _styledComponents.default.div(_templateObject3(), function (props) {
  return getPageBackground(props);
});

exports.BackofficePage = BackofficePage;

var BackofficeContainer = _styledComponents.default.div(_templateObject4());

exports.BackofficeContainer = BackofficeContainer;

var BackofficeKanbanContainer = _styledComponents.default.div(_templateObject5(), function (props) {
  return props.theme.colors.lightestBeige;
}, function (props) {
  return props.theme.colors.darkBlue;
});

exports.BackofficeKanbanContainer = BackofficeKanbanContainer;

var Row = _styledComponents.default.div(_templateObject6(), function (props) {
  return props.noWrap ? "nowrap" : "wrap";
}, function (props) {
  return props.align ? props.align : "none";
}, function (props) {
  return props.theme.maxWidth || 100;
}, function (props) {
  return props.justify ? props.justify : "none";
}, function (props) {
  return props.theme.margin * (props.size || 0);
}, function (props) {
  return props.margin && "\n    ".concat(media.desktop("\n    margin: 0 auto;\n  "), "\n  ").concat(media.smallDesktop("\n    margin: 0 120px;\n  "), "\n  ").concat(media.tablet("\n    margin: 0 48px;\n  "), "\n  ").concat(media.mobile("\n    margin: 0 32px;\n  "), "\n  ") || "margin: 0 auto;";
}, function (props) {
  return props.inlineStyle || "";
});

exports.Row = Row;

var Col = _styledComponents.default.div(_templateObject7(), function (props) {
  return props.size || 1;
}, function (props) {
  return props.center ? "center" : "flex-start";
}, function (props) {
  return props.justify ? props.justify : "none";
}, function (props) {
  return props.padding || props.theme.margin;
}, function (props) {
  return props.collapse && media[props.collapse]("\n  display: none;\n  ");
}, function (props) {
  return props.center && "margin: 0 auto;";
}, function (props) {
  return props.inlineStyle || "";
});

exports.Col = Col;