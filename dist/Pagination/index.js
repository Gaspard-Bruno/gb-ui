"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _translation = _interopRequireDefault(require("../../utils/translation"));

var _Text = require("../Text");

var _TrackerBox = _interopRequireDefault(require("../TrackerBox"));

var _style = _interopRequireWildcard(require("./style"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Pagination = function Pagination(_ref) {
  var totalPages = _ref.totalPages,
      currentPage = _ref.currentPage,
      action = _ref.action,
      translate = _ref.translate;

  var getBoxes = function getBoxes(currentPage, totalPages) {
    if (totalPages >= 4) {
      if (currentPage === 1 || currentPage === totalPages || currentPage === totalPages - 1) {
        return [1, 2, totalPages - 1, totalPages];
      } else {
        return [currentPage - 1, currentPage, totalPages - 1, totalPages];
      }
    } else {
      switch (totalPages) {
        case 3:
          return [1, 2, totalPages];

        case 2:
          return [1, totalPages];

        default:
          return [totalPages];
      }
    }
  };

  var pageNumberAry = getBoxes(currentPage, totalPages);
  return /*#__PURE__*/_react.default.createElement(_style.default, null, /*#__PURE__*/_react.default.createElement(_style.Left, null, /*#__PURE__*/_react.default.createElement(_Text.SmallBody, {
    bold: true
  }, (0, _translation.default)(translate, 'page'), " ", currentPage, " ", (0, _translation.default)(translate, 'of'), " ", totalPages)), /*#__PURE__*/_react.default.createElement(_style.Right, null, /*#__PURE__*/_react.default.createElement(_TrackerBox.default, {
    iconName: "chevron-left",
    boxType: "last",
    currentPage: currentPage,
    totalPages: totalPages,
    action: action
  }), pageNumberAry && pageNumberAry.map(function (num, index) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_TrackerBox.default, {
      text: num,
      isActive: num === currentPage,
      currentPage: currentPage,
      action: action
    }), index === 1 && pageNumberAry.length >= 4 && /*#__PURE__*/_react.default.createElement(_TrackerBox.default, {
      text: "...",
      boxType: "ellipsis"
    }));
  }), /*#__PURE__*/_react.default.createElement(_TrackerBox.default, {
    iconName: "chevron-right",
    boxType: "next",
    currentPage: currentPage,
    totalPages: totalPages,
    action: action
  })));
};

Pagination.propTypes = {
  totalPages: _propTypes.default.string,
  currentPage: _propTypes.default.string,
  action: _propTypes.default.func
};
var _default = Pagination;
exports.default = _default;