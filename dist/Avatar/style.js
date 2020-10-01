"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.AvatarInitials = exports.AvatarImage = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  border-radius: 50%;\n  background-color: ", ";\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 11px;\n  margin-right: 8px;\n  text-transform: uppercase;\n  ", ";\n  color: ", ";\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  border-radius: 50%;\n  background-image: url(", ");\n  background-position: center;\n  margin-right: 8px;\n  ", ";\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  text-transform: capitalize;\n  display: flex;\n  align-items: center;\n  color: ", ";\n  svg {\n    margin-left: 8px;\n    width: 14px;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var getStyleFromAvatarSize = function getStyleFromAvatarSize(size, theme) {
  switch (size) {
    case "small":
      return "\n        height: 32px;\n        min-width: 32px;\n       ";

    case "medium":
      return "\n        height: 40px;\n        min-width: 40px;\n       ";

    case "large":
      return "\n        height: 80px;\n        min-width: 80px;\n        ";

    default:
      return;
  }
};

var getRandomColor = function getRandomColor(avatarDefault, theme) {
  if (avatarDefault) {
    return avatarDefault;
  }

  var keys = Object.keys(theme.colors.muted);
  return theme.colors.muted[keys[keys.length * Math.random() << 0]];
};

var getTextColor = function getTextColor(size, user, theme) {
  if (size === "small" && user.avatar) {
    return "".concat(theme.colors.grey, ";");
  } else if (size === "medium") {
    return "".concat(theme.colors.brand.orange);
  } else {
    return "".concat(theme.colors.darkBlue, ";");
  }
};

var AvatarContainer = _styledComponents.default.div(_templateObject(), function (props) {
  return getTextColor(props.size, props.user, props.theme);
});

var AvatarImage = _styledComponents.default.div(_templateObject2(), function (props) {
  return props.avatar;
}, function (props) {
  return getStyleFromAvatarSize(props.size);
});

exports.AvatarImage = AvatarImage;

var AvatarInitials = _styledComponents.default.div(_templateObject3(), function (props) {
  return getRandomColor(props.avatarDefault, props.theme);
}, function (props) {
  return getStyleFromAvatarSize(props.size);
}, function (props) {
  return props.theme.colors.darkBlue;
});

exports.AvatarInitials = AvatarInitials;
var _default = AvatarContainer;
exports.default = _default;