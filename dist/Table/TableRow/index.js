"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Layout = require("../../Layout");

var _style = _interopRequireDefault(require("./style"));

var _Avatar = _interopRequireDefault(require("../../Avatar"));

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

var TableRow = function TableRow(_ref) {
  var tableType = _ref.tableType,
      item = _ref.item;
  var cols = getRowDetails(tableType, item);
  return /*#__PURE__*/_react.default.createElement(_style.default, null, cols && cols.map(function (col, i) {
    return /*#__PURE__*/_react.default.createElement(_Layout.Col, {
      key: i + 'row',
      size: col.size
    }, col.content);
  }));
};

var _default = TableRow;
exports.default = _default;