<<<<<<< master
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _translation = _interopRequireDefault(require("../../utils/translation"));

var _Text = require("../Text");

var _Button = _interopRequireDefault(require("../Button"));

var _Layout = require("../Layout");

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

var Sidebar = function Sidebar(_ref) {
  var sidebarSections = _ref.sidebarSections,
      translate = _ref.translate,
      isOpenable = _ref.isOpenable;

  var _useState = (0, _react.useState)(true),
      _useState2 = _slicedToArray(_useState, 2),
      isOpen = _useState2[0],
      setIsOpen = _useState2[1]; // eslint-disable-next-line react/prop-types


  var SidebarLink = function SidebarLink(_ref2) {
    var route = _ref2.route,
        text = _ref2.text,
        disabled = _ref2.disabled,
        disabledIcon = _ref2.disabledIcon;
    return route && !disabled ? /*#__PURE__*/_react.default.createElement(_style.NavLink, {
      to: route,
      active: disabled
    }, text) : /*#__PURE__*/_react.default.createElement(_style.NavText, {
      disabled: disabled
    }, text, " ", disabledIcon || '');
  };

  return /*#__PURE__*/_react.default.createElement(_style.default, {
    open: isOpen
  }, /*#__PURE__*/_react.default.createElement(_Layout.Col, null, /*#__PURE__*/_react.default.createElement(_style.NavSection, {
    open: isOpen
  }, /*#__PURE__*/_react.default.createElement(_Layout.Row, {
    align: "center"
  }, /*#__PURE__*/_react.default.createElement(_Layout.Col, null, /*#__PURE__*/_react.default.createElement(_Text.SubHeading, {
    color: "lightestBeige"
  }, "55+ UI Kit"), /*#__PURE__*/_react.default.createElement(_style.NavHeader, null, "by Gaspard+Bruno")), isOpenable && /*#__PURE__*/_react.default.createElement(_Button.default, {
    open: isOpen,
    icon: "arrow-left",
    action: function action() {
      return setIsOpen(!isOpen);
    },
    btnType: 'terceary'
  }))), /*#__PURE__*/_react.default.createElement(SidebarLink, {
    route: '/',
    text: "Home"
  }), Object.keys(sidebarSections).map(function (s) {
    var section = sidebarSections[s];
    return /*#__PURE__*/_react.default.createElement(_style.NavSection, {
      key: 'section-' + section.title
    }, /*#__PURE__*/_react.default.createElement(_style.NavHeader, null, (0, _translation.default)(translate, section.title)), section.items.map(function (item) {
      return /*#__PURE__*/_react.default.createElement(SidebarLink, {
        key: 'sidebar-' + item.label,
        route: item.route,
        text: (0, _translation.default)(translate, item.label),
        disabled: item.disabled,
        disabledIcon: "\uD83D\uDEA7"
      });
    }));
  })));
=======
'use strict';

function _typeof(obj) {
  '@babel/helpers - typeof';
  if (typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol') {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj &&
        typeof Symbol === 'function' &&
        obj.constructor === Symbol &&
        obj !== Symbol.prototype
        ? 'symbol'
        : typeof obj;
    };
  }
  return _typeof(obj);
}

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;

var _react = _interopRequireWildcard(require('react'));

var _propTypes = _interopRequireDefault(require('prop-types'));

<<<<<<< c92ca8cd2fbdf4677d65d0a294f93ddc4b6078b0
var _translation = _interopRequireDefault(require('Components'));
=======
var _translation = _interopRequireDefault(require("../translation"));
>>>>>>> testing dist

var _Text = require('../Text');

var _Button = _interopRequireDefault(require('../Button'));

var _Layout = require('../Layout');

var _style = _interopRequireWildcard(require('./style'));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _getRequireWildcardCache() {
  if (typeof WeakMap !== 'function') return null;
  var cache = new WeakMap();
  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };
  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }
  if (
    obj === null ||
    (_typeof(obj) !== 'object' && typeof obj !== 'function')
  ) {
    return { default: obj };
  }
  var cache = _getRequireWildcardCache();
  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }
  var newObj = {};
  var hasPropertyDescriptor =
    Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor
        ? Object.getOwnPropertyDescriptor(obj, key)
        : null;
      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }
  newObj.default = obj;
  if (cache) {
    cache.set(obj, newObj);
  }
  return newObj;
}

function _slicedToArray(arr, i) {
  return (
    _arrayWithHoles(arr) ||
    _iterableToArrayLimit(arr, i) ||
    _unsupportedIterableToArray(arr, i) ||
    _nonIterableRest()
  );
}

function _nonIterableRest() {
  throw new TypeError(
    'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
  );
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === 'string') return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === 'Object' && o.constructor) n = o.constructor.name;
  if (n === 'Map' || n === 'Set') return Array.from(o);
  if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === 'undefined' || !(Symbol.iterator in Object(arr)))
    return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;
  try {
    for (
      var _i = arr[Symbol.iterator](), _s;
      !(_n = (_s = _i.next()).done);
      _n = true
    ) {
      _arr.push(_s.value);
      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i['return'] != null) _i['return']();
    } finally {
      if (_d) throw _e;
    }
  }
  return _arr;
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

var Sidebar = function Sidebar(_ref) {
  var sidebarSections = _ref.sidebarSections,
    translate = _ref.translate,
    isOpenable = _ref.isOpenable;

  var _useState = (0, _react.useState)(true),
    _useState2 = _slicedToArray(_useState, 2),
    isOpen = _useState2[0],
    setIsOpen = _useState2[1]; // eslint-disable-next-line react/prop-types

  var SidebarLink = function SidebarLink(_ref2) {
    var route = _ref2.route,
      text = _ref2.text,
      disabled = _ref2.disabled,
      disabledIcon = _ref2.disabledIcon;
    return route && !disabled
      ? /*#__PURE__*/ _react.default.createElement(
          _style.NavLink,
          {
            to: route,
            active: disabled,
          },
          text
        )
      : /*#__PURE__*/ _react.default.createElement(
          _style.NavText,
          {
            disabled: disabled,
          },
          text,
          ' ',
          disabledIcon || ''
        );
  };

  return /*#__PURE__*/ _react.default.createElement(
    _style.default,
    {
      open: isOpen,
    },
    /*#__PURE__*/ _react.default.createElement(
      _Layout.Col,
      null,
      /*#__PURE__*/ _react.default.createElement(
        _style.NavSection,
        {
          open: isOpen,
        },
        /*#__PURE__*/ _react.default.createElement(
          _Layout.Row,
          {
            align: 'center',
          },
          /*#__PURE__*/ _react.default.createElement(
            _Layout.Col,
            null,
            /*#__PURE__*/ _react.default.createElement(
              _Text.SubHeading,
              {
                color: 'lightestBeige',
              },
              '55+ UI Kit'
            ),
            /*#__PURE__*/ _react.default.createElement(
              _style.NavHeader,
              null,
              'by Gaspard+Bruno'
            )
          ),
          isOpenable &&
            /*#__PURE__*/ _react.default.createElement(_Button.default, {
              open: isOpen,
              icon: 'arrow-left',
              action: function action() {
                return setIsOpen(!isOpen);
              },
              btnType: 'terceary',
            })
        )
      ),
      /*#__PURE__*/ _react.default.createElement(SidebarLink, {
        route: '/',
        text: 'Home',
      }),
      Object.keys(sidebarSections).map(function(s) {
        var section = sidebarSections[s];
        return /*#__PURE__*/ _react.default.createElement(
          _style.NavSection,
          {
            key: 'section-' + section.title,
          },
          /*#__PURE__*/ _react.default.createElement(
            _style.NavHeader,
            null,
            (0, _translation.default)(translate, section.title)
          ),
          section.items.map(function(item) {
            return /*#__PURE__*/ _react.default.createElement(SidebarLink, {
              key: 'sidebar-' + item.label,
              route: item.route,
              text: (0, _translation.default)(translate, item.label),
              disabled: item.disabled,
              disabledIcon: '\uD83D\uDEA7',
            });
          })
        );
      })
    )
  );
>>>>>>> moving translation to the components folder
};

Sidebar.propTypes = {
  isOpenable: _propTypes.default.bool,
  translate: _propTypes.default.func,
  sidebarSections: _propTypes.default.arrayOf({
    title: _propTypes.default.string,
    items: _propTypes.default.arrayOf({
      text: _propTypes.default.string,
      route: _propTypes.default.string,
<<<<<<< master
      disabled: _propTypes.default.bool
    })
  })
};
Sidebar.defaultProps = {
  sidebarSections: []
};
var _default = Sidebar;
exports.default = _default;
=======
      disabled: _propTypes.default.bool,
    }),
  }),
};
Sidebar.defaultProps = {
  sidebarSections: [],
};
var _default = Sidebar;
exports.default = _default;
>>>>>>> moving translation to the components folder
