"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Text = require("../Text");

var _Icon = _interopRequireDefault(require("../Icon"));

var _style = _interopRequireDefault(require("./style"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TrackerBox = function TrackerBox(_ref) {
  var text = _ref.text,
      currentPage = _ref.currentPage,
      totalPages = _ref.totalPages,
      iconName = _ref.iconName,
      isActive = _ref.isActive,
      boxType = _ref.boxType,
      action = _ref.action;

  var handleClick = function handleClick() {
    switch (boxType) {
      case 'last':
        if (currentPage > 1) {
          action(currentPage - 1);
        }

        break;

      case 'ellipsis':
        break;

      case 'next':
        if (currentPage !== totalPages) {
          action(currentPage + 1);
        }

        break;

      default:
        action(text);
        break;
    }
  };

  return /*#__PURE__*/_react.default.createElement(_style.default, {
    isActive: isActive,
    onClick: function onClick(e) {
      return handleClick(e, text, currentPage);
    },
    type: boxType
  }, text ? /*#__PURE__*/_react.default.createElement(_Text.Tiny, null, text) : /*#__PURE__*/_react.default.createElement(_Icon.default, {
    name: iconName
  }));
};

TrackerBox.propTypes = {
  text: _propTypes.default.string,
  iconName: _propTypes.default.string,
  isActive: _propTypes.default.bool,
  currentPage: _propTypes.default.number,
  totalPage: _propTypes.default.number,
  boxType: _propTypes.default.oneOf(['single', 'ellipsis', 'last', 'next']),
  action: _propTypes.default.func
};
var _default = TrackerBox;
exports.default = _default;