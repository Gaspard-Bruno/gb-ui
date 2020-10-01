"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.StyledTableRow = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  font-weight: normal;\n  border-bottom: 1px solid ", ";\n\n  .service {\n    font-weight: 500;\n    font-size: 16px;\n    line-height: 24px;\n    color: ", ";\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledTableRow = _styledComponents.default.div(_templateObject(), function (props) {
  return props.theme.colors.mediumBeige;
}, function (props) {
  return props.theme.colors.brand.orange;
});

exports.StyledTableRow = StyledTableRow;
var _default = StyledTableRow;
exports.default = _default;