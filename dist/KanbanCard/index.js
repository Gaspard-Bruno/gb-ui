<<<<<<< master
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactBeautifulDnd = require("react-beautiful-dnd");

var _translation = _interopRequireDefault(require("../../utils/translation"));

var _Badge = _interopRequireDefault(require("../Badge"));

var _Icon = _interopRequireDefault(require("../Icon"));

var _Avatar = _interopRequireDefault(require("../Avatar"));

var _Text = require("../Text");

var _style = _interopRequireWildcard(require("./style"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var KanbanCard = function KanbanCard(_ref) {
  var cardKey = _ref.cardKey,
      index = _ref.index,
      cardData = _ref.cardData,
      cardType = _ref.cardType,
      translate = _ref.translate;
  return /*#__PURE__*/_react.default.createElement(_reactBeautifulDnd.Draggable, {
    key: cardKey,
    draggableId: cardKey,
    index: index
  }, function (provided, snapshot) {
    var _cardData$provider, _cardData$service, _cardData$provider2, _cardData$provider3, _cardData$provider4, _cardData$provider5, _cardData$admin;

    return /*#__PURE__*/_react.default.createElement(_style.default, _extends({
      ref: provided.innerRef
    }, provided.draggableProps, provided.dragHandleProps), /*#__PURE__*/_react.default.createElement(_style.BadgeContainer, null, /*#__PURE__*/_react.default.createElement(_Badge.default, {
      text: cardData.status,
      status: cardData.status
    })), /*#__PURE__*/_react.default.createElement(_Text.ButtonText, null, cardType === 'candidates' ? (_cardData$provider = cardData.provider) === null || _cardData$provider === void 0 ? void 0 : _cardData$provider.attributes.fullName : (_cardData$service = cardData.service) === null || _cardData$service === void 0 ? void 0 : _cardData$service.attributes.name), cardType === 'candidates' ? /*#__PURE__*/_react.default.createElement("div", null, ((_cardData$provider2 = cardData.provider) === null || _cardData$provider2 === void 0 ? void 0 : _cardData$provider2.attributes.serviceList) && /*#__PURE__*/_react.default.createElement(_style.Details, null, /*#__PURE__*/_react.default.createElement(_style.IconContainer, null, /*#__PURE__*/_react.default.createElement(_Icon.default, {
      name: "tool-1"
    })), /*#__PURE__*/_react.default.createElement(_Text.SmallBody, null, (_cardData$provider3 = cardData.provider) === null || _cardData$provider3 === void 0 ? void 0 : _cardData$provider3.attributes.serviceList)), ((_cardData$provider4 = cardData.provider) === null || _cardData$provider4 === void 0 ? void 0 : _cardData$provider4.attributes.district) && /*#__PURE__*/_react.default.createElement(_style.Details, null, /*#__PURE__*/_react.default.createElement(_style.IconContainer, null, /*#__PURE__*/_react.default.createElement(_Icon.default, {
      name: "map-pin"
    })), /*#__PURE__*/_react.default.createElement(_Text.SmallBody, null, (_cardData$provider5 = cardData.provider) === null || _cardData$provider5 === void 0 ? void 0 : _cardData$provider5.attributes.district))) : /*#__PURE__*/_react.default.createElement("div", null, cardData.client && /*#__PURE__*/_react.default.createElement(_style.ServiceDetails, null, /*#__PURE__*/_react.default.createElement("span", null, (0, _translation.default)(translate, 'client'), ": "), cardData.client.attributes.fullName), cardData.provider && /*#__PURE__*/_react.default.createElement(_style.ServiceDetails, null, /*#__PURE__*/_react.default.createElement("span", null, (0, _translation.default)(translate, 'specialist'), ": "), cardData.provider.attributes.fullName), cardData.isRecurrent && /*#__PURE__*/_react.default.createElement(_style.Recurrent, null)), cardData.admin && /*#__PURE__*/_react.default.createElement(_style.AdminContainer, null, /*#__PURE__*/_react.default.createElement(_Avatar.default, {
      user: (_cardData$admin = cardData.admin) === null || _cardData$admin === void 0 ? void 0 : _cardData$admin.attributes,
      size: "small",
      hasText: true
    })));
  });
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

var _react = _interopRequireDefault(require('react'));

var _propTypes = _interopRequireDefault(require('prop-types'));

var _reactBeautifulDnd = require('react-beautiful-dnd');

<<<<<<< c92ca8cd2fbdf4677d65d0a294f93ddc4b6078b0
var _translation = _interopRequireDefault(require('Components'));
=======
var _translation = _interopRequireDefault(require("../translation"));
>>>>>>> testing dist

var _Badge = _interopRequireDefault(require('../Badge'));

var _Icon = _interopRequireDefault(require('../Icon'));

var _Avatar = _interopRequireDefault(require('../Avatar'));

var _Text = require('../Text');

var _style = _interopRequireWildcard(require('./style'));

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

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
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

var KanbanCard = function KanbanCard(_ref) {
  var cardKey = _ref.cardKey,
    index = _ref.index,
    cardData = _ref.cardData,
    cardType = _ref.cardType,
    translate = _ref.translate;
  return /*#__PURE__*/ _react.default.createElement(
    _reactBeautifulDnd.Draggable,
    {
      key: cardKey,
      draggableId: cardKey,
      index: index,
    },
    function(provided, snapshot) {
      var _cardData$provider,
        _cardData$service,
        _cardData$provider2,
        _cardData$provider3,
        _cardData$provider4,
        _cardData$provider5,
        _cardData$admin;

      return /*#__PURE__*/ _react.default.createElement(
        _style.default,
        _extends(
          {
            ref: provided.innerRef,
          },
          provided.draggableProps,
          provided.dragHandleProps
        ),
        /*#__PURE__*/ _react.default.createElement(
          _style.BadgeContainer,
          null,
          /*#__PURE__*/ _react.default.createElement(_Badge.default, {
            text: cardData.status,
            status: cardData.status,
          })
        ),
        /*#__PURE__*/ _react.default.createElement(
          _Text.ButtonText,
          null,
          cardType === 'candidates'
            ? (_cardData$provider = cardData.provider) === null ||
              _cardData$provider === void 0
              ? void 0
              : _cardData$provider.attributes.fullName
            : (_cardData$service = cardData.service) === null ||
              _cardData$service === void 0
            ? void 0
            : _cardData$service.attributes.name
        ),
        cardType === 'candidates'
          ? /*#__PURE__*/ _react.default.createElement(
              'div',
              null,
              ((_cardData$provider2 = cardData.provider) === null ||
              _cardData$provider2 === void 0
                ? void 0
                : _cardData$provider2.attributes.serviceList) &&
                /*#__PURE__*/ _react.default.createElement(
                  _style.Details,
                  null,
                  /*#__PURE__*/ _react.default.createElement(
                    _style.IconContainer,
                    null,
                    /*#__PURE__*/ _react.default.createElement(_Icon.default, {
                      name: 'tool-1',
                    })
                  ),
                  /*#__PURE__*/ _react.default.createElement(
                    _Text.SmallBody,
                    null,
                    (_cardData$provider3 = cardData.provider) === null ||
                      _cardData$provider3 === void 0
                      ? void 0
                      : _cardData$provider3.attributes.serviceList
                  )
                ),
              ((_cardData$provider4 = cardData.provider) === null ||
              _cardData$provider4 === void 0
                ? void 0
                : _cardData$provider4.attributes.district) &&
                /*#__PURE__*/ _react.default.createElement(
                  _style.Details,
                  null,
                  /*#__PURE__*/ _react.default.createElement(
                    _style.IconContainer,
                    null,
                    /*#__PURE__*/ _react.default.createElement(_Icon.default, {
                      name: 'map-pin',
                    })
                  ),
                  /*#__PURE__*/ _react.default.createElement(
                    _Text.SmallBody,
                    null,
                    (_cardData$provider5 = cardData.provider) === null ||
                      _cardData$provider5 === void 0
                      ? void 0
                      : _cardData$provider5.attributes.district
                  )
                )
            )
          : /*#__PURE__*/ _react.default.createElement(
              'div',
              null,
              cardData.client &&
                /*#__PURE__*/ _react.default.createElement(
                  _style.ServiceDetails,
                  null,
                  /*#__PURE__*/ _react.default.createElement(
                    'span',
                    null,
                    (0, _translation.default)(translate, 'client'),
                    ': '
                  ),
                  cardData.client.attributes.fullName
                ),
              cardData.provider &&
                /*#__PURE__*/ _react.default.createElement(
                  _style.ServiceDetails,
                  null,
                  /*#__PURE__*/ _react.default.createElement(
                    'span',
                    null,
                    (0, _translation.default)(translate, 'specialist'),
                    ': '
                  ),
                  cardData.provider.attributes.fullName
                ),
              cardData.isRecurrent &&
                /*#__PURE__*/ _react.default.createElement(
                  _style.Recurrent,
                  null
                )
            ),
        cardData.admin &&
          /*#__PURE__*/ _react.default.createElement(
            _style.AdminContainer,
            null,
            /*#__PURE__*/ _react.default.createElement(_Avatar.default, {
              user:
                (_cardData$admin = cardData.admin) === null ||
                _cardData$admin === void 0
                  ? void 0
                  : _cardData$admin.attributes,
              size: 'small',
              hasText: true,
            })
          )
      );
    }
  );
>>>>>>> moving translation to the components folder
};

KanbanCard.propTypes = {
  cardKey: _propTypes.default.string,
  index: _propTypes.default.number,
  cardType: _propTypes.default.oneOf(['requests', 'candidates']),
  translate: _propTypes.default.func,
  cardData: _propTypes.default.shape({
    id: _propTypes.default.string,
    status: _propTypes.default.string,
    isRecurrent: _propTypes.default.bool,
    admin: _propTypes.default.object,
    client: _propTypes.default.object,
    provider: _propTypes.default.object,
<<<<<<< master
    service: _propTypes.default.object
  })
};
var _default = KanbanCard;
exports.default = _default;
=======
    service: _propTypes.default.object,
  }),
};
var _default = KanbanCard;
exports.default = _default;
>>>>>>> moving translation to the components folder
