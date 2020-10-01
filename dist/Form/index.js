"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

<<<<<<< master
<<<<<<< master
var _propTypes = _interopRequireDefault(require("prop-types"));

var _TextInput = _interopRequireDefault(require("../TextInput"));

var _TextArea = _interopRequireDefault(require("../TextArea"));

var _Button = _interopRequireDefault(require("../Button"));
=======
=======
>>>>>>> hook: compile changes
var _formik = require("formik");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _lodash = _interopRequireDefault(require("lodash.startcase"));

var _TextInput = _interopRequireDefault(require("Components/TextInput"));

var _Select = _interopRequireDefault(require("Components/Select"));

var _TextArea = _interopRequireDefault(require("Components/TextArea"));

var _RadioButton = _interopRequireDefault(require("Components/RadioButton"));

var _Button = _interopRequireDefault(require("Components/Button"));

var _Text = require("Components/Text");

var _Layout = require("Components/Layout");
<<<<<<< master
>>>>>>> export radio buttons component hook: compile changes
=======
>>>>>>> hook: compile changes

var _styles = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

<<<<<<< master
<<<<<<< master
=======
=======
>>>>>>> hook: compile changes
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

<<<<<<< master
>>>>>>> export radio buttons component hook: compile changes
=======
>>>>>>> hook: compile changes
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Form = function Form(_ref) {
  var onSubmit = _ref.onSubmit,
<<<<<<< master
<<<<<<< master
      formFields = _ref.formFields,
      top = _ref.top,
      fullWidth = _ref.fullWidth,
      _ref$btnLabel = _ref.btnLabel,
      btnLabel = _ref$btnLabel === void 0 ? 'Inscrever-se' : _ref$btnLabel,
      children = _ref.children,
      bg = _ref.bg;
  var formRef = (0, _react.useRef)();
  return /*#__PURE__*/_react.default.createElement(_styles.FormContainer, {
    top: top,
    bg: bg
  }, children, /*#__PURE__*/_react.default.createElement(_styles.StyledForm, {
    fullWidth: fullWidth,
    ref: formRef,
    onSubmit: onSubmit
  }, formFields && formFields.map(function (field, index) {
    return renderFields(field);
  })), /*#__PURE__*/_react.default.createElement(_Button.default, {
    fullWidth: true,
    onClick: onSubmit,
    btnType: "primary",
    type: "submit",
    text: btnLabel
  }));
};

var renderFields = function renderFields(field) {
  switch (field === null || field === void 0 ? void 0 : field.type) {
    case 'text':
    case 'password':
      return /*#__PURE__*/_react.default.createElement(_TextInput.default, _extends({
        key: field.label
      }, field));

    case 'text-area':
      return /*#__PURE__*/_react.default.createElement(_TextArea.default, _extends({
        key: field.label
      }, field));

    default:
      return;
  }
};

Form.propTypes = {
  formFields: _propTypes.default.arrayOf(_propTypes.default.object)
=======
=======
>>>>>>> hook: compile changes
      questions = _ref.questions,
      onChange = _ref.onChange,
      submitLabel = _ref.submitLabel,
      resetLabel = _ref.resetLabel,
      cancelLabel = _ref.cancelLabel,
      backgroundColor = _ref.backgroundColor,
      fieldsWidgets = _ref.fieldsWidgets;

  var fieldRenderer = function fieldRenderer(field, formik) {
    var _fieldProps$value$lab, _fieldProps$value;

    if (field.key) {
      var widget = field.widget || field.type;
      var fieldProps = {
        label: (0, _lodash.default)(field.key),
        name: field.key,
        key: field.key,
        onChange: function onChange(v) {
          return formik.setFieldValue(field.key, v);
        },
        value: formik.values[field.key],
        type: field.type
      };

      switch (widget) {
<<<<<<< master
        case "text":
        case "password":
        case "mini-text":
          return /*#__PURE__*/_react.default.createElement(_TextInput.default, _extends({
            key: field.label
          }, fieldProps, {
            isMini: Boolean(widget === "mini-dropdown")
          }));

        case "text-area":
=======
        case 'text':
        case 'password':
        case 'mini-text':
          return /*#__PURE__*/_react.default.createElement(_TextInput.default, _extends({
            key: field.label
          }, fieldProps, {
            isMini: Boolean(widget === 'mini-dropdown')
          }));

        case 'text-area':
>>>>>>> hook: compile changes
          return /*#__PURE__*/_react.default.createElement(_TextArea.default, _extends({
            key: field.label
          }, fieldProps));

<<<<<<< master
        case "radio":
=======
        case 'radio':
>>>>>>> hook: compile changes
          return /*#__PURE__*/_react.default.createElement(_RadioButton.default, {
            key: field.key,
            error: field.error,
            label: field.question,
            name: field.key,
            action: function action(option) {
              return formik.setFieldValue(option.name, option.value);
            },
            childAction: function childAction(option) {
              return formik.setFieldValue(option.name, option.value);
            },
            list: field.options
          });

<<<<<<< master
        case "footnote":
          return /*#__PURE__*/_react.default.createElement(_Text.Tiny, null, field.question);

        case "mini-dropdown":
        case "dropdown":
          return /*#__PURE__*/_react.default.createElement(_Select.default, _extends({
            isMini: Boolean(widget === "mini-dropdown"),
            options: field.options,
            inputValue: (_fieldProps$value$lab = fieldProps === null || fieldProps === void 0 ? void 0 : (_fieldProps$value = fieldProps.value) === null || _fieldProps$value === void 0 ? void 0 : _fieldProps$value.label) !== null && _fieldProps$value$lab !== void 0 ? _fieldProps$value$lab : ""
=======
        case 'footnote':
          return /*#__PURE__*/_react.default.createElement(_Text.Tiny, null, field.question);

        case 'mini-dropdown':
        case 'dropdown':
          return /*#__PURE__*/_react.default.createElement(_Select.default, _extends({
            isMini: Boolean(widget === 'mini-dropdown'),
            options: field.options,
            inputValue: (_fieldProps$value$lab = fieldProps === null || fieldProps === void 0 ? void 0 : (_fieldProps$value = fieldProps.value) === null || _fieldProps$value === void 0 ? void 0 : _fieldProps$value.label) !== null && _fieldProps$value$lab !== void 0 ? _fieldProps$value$lab : ''
>>>>>>> hook: compile changes
          }, fieldProps));

        default:
          return /*#__PURE__*/_react.default.createElement(_TextInput.default, _extends({
            key: field.label
          }, fieldProps));
      }
    }

    switch (field === null || field === void 0 ? void 0 : field.type) {
<<<<<<< master
      case "footnote":
=======
      case 'footnote':
>>>>>>> hook: compile changes
        return /*#__PURE__*/_react.default.createElement(_Text.Tiny, null, field.question);

      default:
        return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null);
    }
  };

  var renderFields = function renderFields(formik, fields) {
    var formFields = [];

    var fieldsRenderer = function fieldsRenderer(fieldQuestions, parent) {
      return fieldQuestions.forEach(function (q, i) {
        var children = q.children;
        var dependencyType = q.dependencyType,
            dependencyValue = q.dependencyValue;

        if (dependencyType) {
          var _formik$values$parent;

          var parentKey = parent.key;
          var parentValue = ((_formik$values$parent = formik.values[parentKey]) === null || _formik$values$parent === void 0 ? void 0 : _formik$values$parent.value) ? formik.values[parentKey].value : formik.values[parentKey];
          var columns = [];

          switch (dependencyType) {
<<<<<<< master
            case "value":
=======
            case 'value':
>>>>>>> hook: compile changes
              if (parentValue === dependencyValue) {
                formFields.push(fieldRenderer(q, formik));
              }

              break;

<<<<<<< master
            case "value-count":
=======
            case 'value-count':
>>>>>>> hook: compile changes
              for (var _i = 0; _i < Number(parentValue); _i++) {
                columns.push( /*#__PURE__*/_react.default.createElement(_Layout.Col, {
                  size: 1,
                  padding: 0
                }, fieldRenderer(_objectSpread(_objectSpread({}, q), {}, {
                  key: "".concat(q.key, "-").concat(_i + 1)
                }), formik)));
              }

              formFields.push( /*#__PURE__*/_react.default.createElement(_Layout.Row, null, columns));
              break;

            default:
              break;
          }
        } else {
          formFields.push(fieldRenderer(_objectSpread(_objectSpread({}, q), {}, {
            key: q.key || "question-".concat(i)
          }), formik));
        }

        if (children) {
          fieldsRenderer(children, q);
        }
      });
    };

    fieldsRenderer(fields);
    return formFields;
  };

  var initialValues = {};
  questions.forEach(function (q) {
    if (q.key) {
      initialValues[q.key] = q.value;
    }
  });
  return /*#__PURE__*/_react.default.createElement(_styles.FormContainer, {
    bg: backgroundColor
  }, /*#__PURE__*/_react.default.createElement(_formik.Formik, {
    initialValues: initialValues,
    onSubmit: function onSubmit() {
<<<<<<< master
      return console.log("submitting");
=======
      return console.log('submitting');
>>>>>>> hook: compile changes
    }
  }, function (formik) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.StyledForm, {
      onSubmit: function onSubmit() {
        return console.log(formik);
      }
    }, renderFields(formik, questions)));
  }));
};

Form.propTypes = {
  onSubmit: _propTypes.default.func,
  onChange: _propTypes.default.func,
  submitLabel: _propTypes.default.string,
  resetLabel: _propTypes.default.string,
  cancelLabel: _propTypes.default.string,
  backgroundColor: _propTypes.default.string,
  fieldsWidgets: _propTypes.default.object,
  questions: _propTypes.default.arrayOf( // * Fields
  _propTypes.default.shape({
<<<<<<< master
    type: _propTypes.default.oneOf("dropdown", "form", "text", "date", "radio", "footnote", "text-area", "tabs").isRequired,
=======
    type: _propTypes.default.oneOf('dropdown', 'form', 'text', 'date', 'radio', 'footnote', 'text-area', 'tabs').isRequired,
>>>>>>> hook: compile changes
    key: _propTypes.default.string.isRequired,
    // ! To be replaced with label/translate on key 👇
    question: _propTypes.default.string,
    widget: _propTypes.default.string,
    options: _propTypes.default.arrayOf(_propTypes.default.shape({
      label: _propTypes.default.string,
      value: _propTypes.default.oneOfType(_propTypes.default.string, _propTypes.default.number)
    })),
    // * Dependent Fields 👇
    children: _propTypes.default.arrayOf(_propTypes.default.shape({
      type: _propTypes.default.string.isRequired,
      widget: _propTypes.default.string,
<<<<<<< master
      dependencyType: _propTypes.default.oneOf("value", "value-count"),
=======
      dependencyType: _propTypes.default.oneOf('value', 'value-count'),
>>>>>>> hook: compile changes
      // * Dependency Logic 👇
      // - value: Watches the value of the parent, only rendering when dependencyValue matches
      // - value-count: will render as many children as the current value count
      dependencyValue: _propTypes.default.string,
      key: _propTypes.default.string.isRequired,
      options: _propTypes.default.arrayOf(_propTypes.default.shape({
        label: _propTypes.default.string,
        value: _propTypes.default.oneOfType(_propTypes.default.string, _propTypes.default.number)
      }))
    }))
  }))
};
Form.defaultProps = {
  onSubmit: function onSubmit(values) {
<<<<<<< master
    return console.log("Submitting form values", values);
  },
  onChange: function onChange(values) {
    return console.log("Changing form values", values);
  },
  submitLabel: "Submit",
  resetLabel: "",
  cnacelLabel: "",
  backgroundColor: "primary",
  questions: []
>>>>>>> export radio buttons component hook: compile changes
=======
    return console.log('Submitting form values', values);
  },
  onChange: function onChange(values) {
    return console.log('Changing form values', values);
  },
  submitLabel: 'Submit',
  resetLabel: '',
  cnacelLabel: '',
  backgroundColor: 'primary',
  questions: []
>>>>>>> hook: compile changes
};
var _default = Form;
exports.default = _default;