"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Search = _interopRequireDefault(require("../Search"));

var _Select = _interopRequireDefault(require("../Select"));

var _FilterButton = _interopRequireDefault(require("../FilterButton"));

var _IconSwitch = _interopRequireDefault(require("../IconSwitch"));

var _style = _interopRequireWildcard(require("./style"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var FilterBar = function FilterBar(_ref) {
  var availableFilters = _ref.availableFilters,
      showLayout = _ref.showLayout,
      handleLayoutChange = _ref.handleLayoutChange;

  var _useState = (0, _react.useState)([]),
      _useState2 = _slicedToArray(_useState, 2),
      activeFilters = _useState2[0],
      setActiveFilters = _useState2[1];

  var handleQuery = function handleQuery(newQuery) {// action to update query on reducer
    // setQuery(newQuery)
  };

  var handleToggleFilters = function handleToggleFilters(newFilter) {
    var filters = activeFilters;

    if (filters.indexOf(newFilter) === -1) {
      filters = filters.concat(newFilter);
    } else {
      filters = filters.filter(function (filter) {
        return filter !== newFilter;
      });
    }

    setActiveFilters(filters);
  };

  var handleFilterValues = function handleFilterValues(e, filter) {
    var newFilters = activeFilters.filter(function (filter) {
      return filter.label !== filter.label;
    });
    var newFilter = {
      label: filter.label,
      value: e.label
    };
    newFilters = newFilters.concat(newFilter);
    setActiveFilters(newFilters);
  };

  return /*#__PURE__*/_react.default.createElement(_style.default, null, /*#__PURE__*/_react.default.createElement(_style.Header, null, /*#__PURE__*/_react.default.createElement(_style.Selects, null, /*#__PURE__*/_react.default.createElement(_Search.default, {
    style: "service",
    onChange: handleQuery
  }), /*#__PURE__*/_react.default.createElement(_Select.default, {
    placeholder: "Filtros",
    options: availableFilters,
    onChange: handleToggleFilters
  })), showLayout && /*#__PURE__*/_react.default.createElement(_IconSwitch.default, {
    switchType: "layout",
    onChange: handleLayoutChange
  })), /*#__PURE__*/_react.default.createElement(_style.Filters, null, activeFilters && activeFilters.map(function (filter) {
    return /*#__PURE__*/_react.default.createElement(_FilterButton.default, {
      filter: filter,
      key: "".concat(filter.label, "-filter"),
      filterLabel: filter.label,
      filterValue: filter.value,
      onClose: handleToggleFilters,
      onChange: handleFilterValues
    });
  })));
};

FilterBar.propTypes = {
  availableFilters: _propTypes.default.arrayOf(_propTypes.default.oneOf(['responsible', 'date', 'service', 'status', 'region'])),
  showLayout: _propTypes.default.bool,
  handleLayoutChange: _propTypes.default.func
};
FilterBar.defaultProps = {// leftIcon: "kanban",
  // rightIcon: "List"
};
var _default = FilterBar;
exports.default = _default;