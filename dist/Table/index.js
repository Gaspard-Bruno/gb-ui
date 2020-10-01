"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Layout = require("../Layout");

var _Avatar = _interopRequireDefault(require("../Avatar"));

var _TableRow = _interopRequireDefault(require("./TableRow"));

var _style = _interopRequireWildcard(require("./style"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getRowDetails = function getRowDetails(tableType) {
  var item = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  if (item === null) item = {
    javascript: 'is stupid'
  };
  var tableTypes = {
    archive: [{
      size: 2,
      header: 'serviceType',
      content: /*#__PURE__*/_react.default.createElement("span", {
        className: "service"
      }, item.serviceName)
    }, {
      size: 2,
      header: 'client',
      content: /*#__PURE__*/_react.default.createElement(_Avatar.default, {
        size: "small",
        hasText: true,
        user: item.client
      })
    }, {
      size: 2,
      header: 'specialist',
      content: /*#__PURE__*/_react.default.createElement(_Avatar.default, {
        size: "small",
        hasText: true,
        user: item.provider
      })
    }, {
      size: 2,
      header: 'date',
      content: /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, item.deliveryDate)
    }, {
      size: 2,
      header: 'totalHours',
      content: /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, item.totalHours, " Horas")
    }, {
      size: 2,
      header: 'totalPrice',
      content: /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, item.totalPrice, "\u20AC")
    }],
    specialists: [{
      size: 3,
      header: 'name',
      content: /*#__PURE__*/_react.default.createElement(_Avatar.default, {
        size: "small",
        hasText: true,
        user: item.provider
      })
    }, {
      size: 3,
      header: 'service',
      content: /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, item.serviceName)
    }, {
      size: 2,
      header: 'totalRequests',
      content: /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, item.totalRequests)
    }, {
      size: 2,
      header: 'totalHours',
      content: /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, item.totalHours, " Horas")
    }, {
      size: 2,
      header: 'rating',
      content: /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, "sttarrrrs")
    }],
    clients: [{
      size: 9,
      header: 'name',
      content: /*#__PURE__*/_react.default.createElement(_Avatar.default, {
        size: "medium",
        hasText: true,
        user: item.client
      })
    }, {
      size: 9,
      header: 'region',
      content: 'region'
    }]
  };
  return tableTypes[tableType];
};

var Table = function Table(_ref) {
  var tableType = _ref.tableType,
      items = _ref.items;
  var cols = getRowDetails(tableType);
  return /*#__PURE__*/_react.default.createElement(_style.default, null, /*#__PURE__*/_react.default.createElement(_style.Header, null, cols && cols.map(function (col, i) {
    return /*#__PURE__*/_react.default.createElement(_Layout.Col, {
      key: 'header row' + i,
      size: col.size
    }, col.header);
  })), items && items.map(function (item, i) {
    return /*#__PURE__*/_react.default.createElement(_TableRow.default, {
      key: 'header row' + i,
      tableType: tableType,
      item: item
    });
  }));
};

var _default = Table;
exports.default = _default;