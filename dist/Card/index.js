"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _style = _interopRequireDefault(require("./style"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Card = function Card(_ref) {
  var justify = _ref.justify,
      padding = _ref.padding,
      align = _ref.align,
      hasBoxShadow = _ref.hasBoxShadow,
      bg = _ref.bg,
      text = _ref.text,
      customStyle = _ref.customStyle,
      children = _ref.children;
  return /*#__PURE__*/_react.default.createElement(_style.default, {
    justify: justify,
    align: align,
    boxShadow: hasBoxShadow,
    padding: padding,
    customStyle: customStyle,
    bg: bg,
    text: text
  }, children);
};

Card.propTypes = {
  justify: _propTypes.default.string,
  padding: _propTypes.default.number,
  align: _propTypes.default.string,
  customStyle: _propTypes.default.func,
  hasBoxShadow: _propTypes.default.bool,
  bg: _propTypes.default.string,
  children: _propTypes.default.oneOfType([_propTypes.default.element, _propTypes.default.array]),
  text: _propTypes.default.string
};
var _default = Card;
exports.default = _default;