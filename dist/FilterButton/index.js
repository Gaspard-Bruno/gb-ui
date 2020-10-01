"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Icon = _interopRequireDefault(require("../Icon"));

var _Select = _interopRequireDefault(require("../Select"));

var _Button = _interopRequireDefault(require("../Button"));

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

var getIconName = function getIconName(filterLabel) {
  switch (filterLabel.label) {
    case 'responsible':
      return 'User';

    case 'date':
      return 'calendar';

    case 'service':
      return 'tool-1';

    case 'status':
      return 'activity';

    case 'region':
      return 'Language';

    default:
      return 'User';
  }
};

var getFilterOptions = function getFilterOptions(filter) {
  switch (filter.label) {
    case 'responsible':
      return [{
        label: 'Admin1',
        value: 'admin1'
      }, {
        label: 'Admin2',
        value: 'admin1'
      }, {
        label: 'Admin3',
        value: 'admin1'
      }];

    case 'date':
      return 'calendar';

    case 'service':
      return ['Service1', 'Service2', 'Service3', 'Service4'];

    case 'status':
      return ['Status1', 'Status2'];

    case 'region':
      return 'Language';

    default:
      return 'User';
  }
};

var FilterButton = function FilterButton(_ref) {
  var filter = _ref.filter,
      filterLabel = _ref.filterLabel,
      translate = _ref.translate,
      filterValue = _ref.filterValue,
      _onChange = _ref.onChange,
      onClose = _ref.onClose;

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      showDropdown = _useState2[0],
      setShowDropdown = _useState2[1];

  var options = getFilterOptions(filter);

  var handleOpen = function handleOpen(e) {
    setShowDropdown(!showDropdown);
  };

  return /*#__PURE__*/_react.default.createElement(_style.default, null, /*#__PURE__*/_react.default.createElement(_style.FilterTitle, {
    filterLabel: filterLabel
  }, /*#__PURE__*/_react.default.createElement(_Icon.default, {
    name: getIconName(filterLabel)
  }), /*#__PURE__*/_react.default.createElement(_style.FilterLabel, null, filterLabel)), /*#__PURE__*/_react.default.createElement(_Button.default, {
    onClick: function onClick(e) {
      return handleOpen(e);
    },
    icon: "chevron-down"
  }), /*#__PURE__*/_react.default.createElement(_style.CloseContainer, {
    onClick: function onClick(e) {
      return onClose(filter);
    }
  }, /*#__PURE__*/_react.default.createElement(_Icon.default, {
    name: "Close"
  })), showDropdown && /*#__PURE__*/_react.default.createElement(_style.Dropdown, {
    length: options.length
  }, /*#__PURE__*/_react.default.createElement(_Select.default, {
    options: options,
    onChange: function onChange(e) {
      return _onChange(e, filter);
    }
  })));
};

FilterButton.propTypes = {
  filterType: _propTypes.default.oneOf(['responsible', 'date', 'service', 'status', 'region']),
  filterValue: _propTypes.default.oneOf([_propTypes.default.string, _propTypes.default.object]),
  filterLabel: _propTypes.default.string,
  translate: _propTypes.default.func,
  options: _propTypes.default.array,
  onChange: _propTypes.default.func,
  onClose: _propTypes.default.func // leftIcon: PropTypes.string,
  // rightIcon: PropTypes.string

};
FilterButton.defaultProps = {
  translate: function translate() {
    return console.log('Changed Filters');
  } // leftIcon: "kanban",
  // rightIcon: "List"

};
var _default = FilterButton;
exports.default = _default;