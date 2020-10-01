"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.selectStyles = exports.SelectContainer = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _reactSelect = _interopRequireDefault(require("react-select"));

var _Theme = _interopRequireDefault(require("Theme"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  color: ", ";\n  font-family: Muli;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 16px;\n  line-height: 24px;\n  input {\n    font-family: Muli;\n    font-style: normal;\n    font-weight: normal;\n    font-size: 16px;\n    line-height: 24px;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-flow: column nowrap;\n  justify-content: flex-start;\n  color: ", ";\n  > p {\n    margin: ", "px 0;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var SelectContainer = _styledComponents.default.div(_templateObject(), function (props) {
  return props.error ? props.theme.colors.feedback.error.default : props.theme.colors.darkBlue;
}, function (props) {
  return props.theme.margin / 2;
});

exports.SelectContainer = SelectContainer;
var selectStyles = {
  menu: function menu(provided, state) {
    return _objectSpread(_objectSpread({}, provided), {}, {
      width: "100%",
      filter: "drop-shadow(0px 4px 13px rgba(193, 188, 183, 0.3))",
      border: "1px solid ".concat(_Theme.default.colors.mediumBeige),
      marginTop: 3,
      borderRadius: 2
    });
  },
  indicatorSeparator: function indicatorSeparator() {
    return {
      display: "none"
    };
  },
  input: function input(provided, _ref) {
    var isFocused = _ref.isFocused;
    return _objectSpread(_objectSpread({}, provided), {}, {
      minWidth: "150px"
    });
  },
  control: function control(provided, _ref2) {
    var isFocused = _ref2.isFocused,
        isDisabled = _ref2.isDisabled,
        state = _objectWithoutProperties(_ref2, ["isFocused", "isDisabled"]);

    return _objectSpread(_objectSpread({}, provided), {}, {
      borderRadius: 2,
      height: 48,
      backgroundColor: isDisabled ? _Theme.default.colors.lightBeige : _Theme.default.colors.white,
      color: _Theme.default.colors.grey,
      boxShadow: "none",
      borderColor: isFocused ? _Theme.default.colors.darkBlue : _Theme.default.colors.mediumBeige,
      "&:hover": {
        borderColor: isFocused ? _Theme.default.colors.darkBlue : _Theme.default.colors.mediumBeige
      }
    });
  },
  option: function option(provided, state) {
    var color = state.isDisabled ? _Theme.default.colors.grey : _Theme.default.colors.darkBlue;
    var backgroundColor = _Theme.default.colors.white;
    var transition = "opacity 300ms";
    return _objectSpread(_objectSpread({}, provided), {}, {
      color: color,
      transition: transition,
      backgroundColor: backgroundColor,
      "&:hover": {
        backgroundColor: _Theme.default.colors.lightBeige
      }
    });
  }
};
exports.selectStyles = selectStyles;
var Select = (0, _styledComponents.default)(_reactSelect.default)(_templateObject2(), function (props) {
  return props.error ? props.theme.colors.feedback.error.default : props.theme.colors.mediumBeige;
});
var _default = Select;
exports.default = _default;