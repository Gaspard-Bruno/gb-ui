"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var t = function t(translation, value) {
  return translation ? translation(value) : value;
};

var _default = t;
exports.default = _default;