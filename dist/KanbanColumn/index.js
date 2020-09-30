<<<<<<< master
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

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

<<<<<<< c92ca8cd2fbdf4677d65d0a294f93ddc4b6078b0
var _react = _interopRequireWildcard(require('react'));

var _propTypes = _interopRequireDefault(require('prop-types'));

var _reactBeautifulDnd = require('react-beautiful-dnd');

var _translation = _interopRequireDefault(require('Components'));

var _KanbanCard = _interopRequireDefault(require('../KanbanCard'));

var _Icon = _interopRequireDefault(require('../Icon'));

var _Text = require('../Text');

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

function _extends() {
  _extends =
    Object.assign ||
    function(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends.apply(this, arguments);
}
=======
>>>>>>> moving translation to the components folder
var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactBeautifulDnd = require("react-beautiful-dnd");

<<<<<<< master
var _translation = _interopRequireDefault(require("../../utils/translation"));
=======
var _translation = _interopRequireDefault(require("../translation"));
>>>>>>> moving translation to the components folder

var _KanbanCard = _interopRequireDefault(require("../KanbanCard"));

var _Icon = _interopRequireDefault(require("../Icon"));

var _Text = require("../Text");

var _style = _interopRequireWildcard(require("./style"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
<<<<<<< master

var KanbanColumn = function KanbanColumn(_ref) {
  var colName = _ref.colName,
      items = _ref.items,
      kanbanType = _ref.kanbanType,
      data = _ref.data,
      translate = _ref.translate;
  var renderCards = (0, _react.useCallback)(function () {
    return items.map(function (item, index) {
      var _item$relationships, _item$relationships$a, _item$relationships$a2, _item$relationships2, _item$relationships2$, _item$relationships2$2, _item$relationships3, _item$relationships3$, _item$relationships3$2, _item$relationships4, _item$relationships4$, _item$relationships4$2;

      var cardProps = {
        id: item.id,
        status: item.attributes.status,
        isRecurrent: item.attributes.recurrent,
        admin: data.admins[(_item$relationships = item.relationships) === null || _item$relationships === void 0 ? void 0 : (_item$relationships$a = _item$relationships.admin) === null || _item$relationships$a === void 0 ? void 0 : (_item$relationships$a2 = _item$relationships$a.data) === null || _item$relationships$a2 === void 0 ? void 0 : _item$relationships$a2.id],
        client: data.clients[(_item$relationships2 = item.relationships) === null || _item$relationships2 === void 0 ? void 0 : (_item$relationships2$ = _item$relationships2.client) === null || _item$relationships2$ === void 0 ? void 0 : (_item$relationships2$2 = _item$relationships2$.data) === null || _item$relationships2$2 === void 0 ? void 0 : _item$relationships2$2.id],
        service: data.services[(_item$relationships3 = item.relationships) === null || _item$relationships3 === void 0 ? void 0 : (_item$relationships3$ = _item$relationships3.service) === null || _item$relationships3$ === void 0 ? void 0 : (_item$relationships3$2 = _item$relationships3$.data) === null || _item$relationships3$2 === void 0 ? void 0 : _item$relationships3$2.id],
        provider: data.providers[(_item$relationships4 = item.relationships) === null || _item$relationships4 === void 0 ? void 0 : (_item$relationships4$ = _item$relationships4.provider) === null || _item$relationships4$ === void 0 ? void 0 : (_item$relationships4$2 = _item$relationships4$.data) === null || _item$relationships4$2 === void 0 ? void 0 : _item$relationships4$2.id]
      };
      return /*#__PURE__*/_react.default.createElement(_KanbanCard.default, {
        key: 'kanbanCard' + item.id,
        cardKey: item.id,
        cardType: kanbanType,
        index: index,
        cardData: cardProps
      });
    });
  }, [data, items, kanbanType]);
  return /*#__PURE__*/_react.default.createElement(_reactBeautifulDnd.Droppable, {
    droppableId: colName,
    key: 'column' + colName
  }, function (provided) {
    return /*#__PURE__*/_react.default.createElement(_style.default, _extends({
      ref: provided.innerRef
    }, provided.droppableProps), /*#__PURE__*/_react.default.createElement(_style.Header, null, colName && /*#__PURE__*/_react.default.createElement(_Text.SubHeading, null, (0, _translation.default)(translate, colName)), /*#__PURE__*/_react.default.createElement(_style.IconContainer, null, /*#__PURE__*/_react.default.createElement(_Icon.default, {
      name: "maximize"
    }))), provided.placeholder, /*#__PURE__*/_react.default.createElement(_style.ColumnCardsContainer, null, renderCards()));
  });
=======
>>>>>>> testing dist

var KanbanColumn = function KanbanColumn(_ref) {
  var colName = _ref.colName,
    items = _ref.items,
    kanbanType = _ref.kanbanType,
    data = _ref.data,
    translate = _ref.translate;
  var renderCards = (0, _react.useCallback)(
    function() {
      return items.map(function(item, index) {
        var _item$relationships,
          _item$relationships$a,
          _item$relationships$a2,
          _item$relationships2,
          _item$relationships2$,
          _item$relationships2$2,
          _item$relationships3,
          _item$relationships3$,
          _item$relationships3$2,
          _item$relationships4,
          _item$relationships4$,
          _item$relationships4$2;

        var cardProps = {
          id: item.id,
          status: item.attributes.status,
          isRecurrent: item.attributes.recurrent,
          admin:
            data.admins[
              (_item$relationships = item.relationships) === null ||
              _item$relationships === void 0
                ? void 0
                : (_item$relationships$a = _item$relationships.admin) ===
                    null || _item$relationships$a === void 0
                ? void 0
                : (_item$relationships$a2 = _item$relationships$a.data) ===
                    null || _item$relationships$a2 === void 0
                ? void 0
                : _item$relationships$a2.id
            ],
          client:
            data.clients[
              (_item$relationships2 = item.relationships) === null ||
              _item$relationships2 === void 0
                ? void 0
                : (_item$relationships2$ = _item$relationships2.client) ===
                    null || _item$relationships2$ === void 0
                ? void 0
                : (_item$relationships2$2 = _item$relationships2$.data) ===
                    null || _item$relationships2$2 === void 0
                ? void 0
                : _item$relationships2$2.id
            ],
          service:
            data.services[
              (_item$relationships3 = item.relationships) === null ||
              _item$relationships3 === void 0
                ? void 0
                : (_item$relationships3$ = _item$relationships3.service) ===
                    null || _item$relationships3$ === void 0
                ? void 0
                : (_item$relationships3$2 = _item$relationships3$.data) ===
                    null || _item$relationships3$2 === void 0
                ? void 0
                : _item$relationships3$2.id
            ],
          provider:
            data.providers[
              (_item$relationships4 = item.relationships) === null ||
              _item$relationships4 === void 0
                ? void 0
                : (_item$relationships4$ = _item$relationships4.provider) ===
                    null || _item$relationships4$ === void 0
                ? void 0
                : (_item$relationships4$2 = _item$relationships4$.data) ===
                    null || _item$relationships4$2 === void 0
                ? void 0
                : _item$relationships4$2.id
            ],
        };
        return /*#__PURE__*/ _react.default.createElement(_KanbanCard.default, {
          key: 'kanbanCard' + item.id,
          cardKey: item.id,
          cardType: kanbanType,
          index: index,
          cardData: cardProps,
        });
      });
    },
    [data, items, kanbanType]
  );
  return /*#__PURE__*/ _react.default.createElement(
    _reactBeautifulDnd.Droppable,
    {
      droppableId: colName,
      key: 'column' + colName,
    },
    function(provided) {
      return /*#__PURE__*/ _react.default.createElement(
        _style.default,
        _extends(
          {
            ref: provided.innerRef,
          },
          provided.droppableProps
        ),
        /*#__PURE__*/ _react.default.createElement(
          _style.Header,
          null,
          colName &&
            /*#__PURE__*/ _react.default.createElement(
              _Text.SubHeading,
              null,
              (0, _translation.default)(translate, colName)
            ),
          /*#__PURE__*/ _react.default.createElement(
            _style.IconContainer,
            null,
            /*#__PURE__*/ _react.default.createElement(_Icon.default, {
              name: 'maximize',
            })
          )
        ),
        provided.placeholder,
        /*#__PURE__*/ _react.default.createElement(
          _style.ColumnCardsContainer,
          null,
          renderCards()
        )
      );
    }
  );
>>>>>>> moving translation to the components folder
};

KanbanColumn.propTypes = {
  items: _propTypes.default.arrayOf(_propTypes.default.object),
  translate: _propTypes.default.func,
  kanbanType: _propTypes.default.oneOf(['requests', 'candidates']),
  colName: _propTypes.default.string,
  data: _propTypes.default.shape({
    admins: _propTypes.default.object,
    providers: _propTypes.default.object,
    clients: _propTypes.default.object,
<<<<<<< master
    services: _propTypes.default.object
  })
};
var _default = KanbanColumn;
exports.default = _default;
=======
    services: _propTypes.default.object,
  }),
};
var _default = KanbanColumn;
exports.default = _default;
>>>>>>> moving translation to the components folder
