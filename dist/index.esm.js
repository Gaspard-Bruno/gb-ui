import React, { Component, useState, useRef, useCallback, useEffect } from 'react';
import iconSet from 'Assets/fonts/icons/icons.json';
import styled from 'styled-components';
import get from 'lodash.get';
import ReactSelect from 'react-select';
import theme from 'Theme';
import Icon$1 from 'Components/Icon';
import { Draggable, Droppable, DragDropContext } from 'react-beautiful-dnd';
import { ReactComponent as ReactComponent$1 } from 'Assets/svg/logo-black.svg';
import { ReactComponent as ReactComponent$2 } from 'Assets/svg/logo-white.svg';
import { ReactComponent } from 'Assets/svg/logo-colorful.svg';
import { ReactComponent as ReactComponent$5 } from 'Assets/svg/logo-black-tag.svg';
import { ReactComponent as ReactComponent$4 } from 'Assets/svg/logo-white-tag.svg';
import { ReactComponent as ReactComponent$3 } from 'Assets/svg/logo-colorful-tag.svg';

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function unwrapExports (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var b="function"===typeof Symbol&&Symbol.for,c=b?Symbol.for("react.element"):60103,d=b?Symbol.for("react.portal"):60106,e=b?Symbol.for("react.fragment"):60107,f=b?Symbol.for("react.strict_mode"):60108,g=b?Symbol.for("react.profiler"):60114,h=b?Symbol.for("react.provider"):60109,k=b?Symbol.for("react.context"):60110,l=b?Symbol.for("react.async_mode"):60111,m=b?Symbol.for("react.concurrent_mode"):60111,n=b?Symbol.for("react.forward_ref"):60112,p=b?Symbol.for("react.suspense"):60113,q=b?
Symbol.for("react.suspense_list"):60120,r=b?Symbol.for("react.memo"):60115,t=b?Symbol.for("react.lazy"):60116,v=b?Symbol.for("react.block"):60121,w=b?Symbol.for("react.fundamental"):60117,x=b?Symbol.for("react.responder"):60118,y=b?Symbol.for("react.scope"):60119;
function z(a){if("object"===typeof a&&null!==a){var u=a.$$typeof;switch(u){case c:switch(a=a.type,a){case l:case m:case e:case g:case f:case p:return a;default:switch(a=a&&a.$$typeof,a){case k:case n:case t:case r:case h:return a;default:return u}}case d:return u}}}function A(a){return z(a)===m}var AsyncMode=l;var ConcurrentMode=m;var ContextConsumer=k;var ContextProvider=h;var Element=c;var ForwardRef=n;var Fragment=e;var Lazy=t;var Memo=r;var Portal=d;
var Profiler=g;var StrictMode=f;var Suspense=p;var isAsyncMode=function(a){return A(a)||z(a)===l};var isConcurrentMode=A;var isContextConsumer=function(a){return z(a)===k};var isContextProvider=function(a){return z(a)===h};var isElement=function(a){return "object"===typeof a&&null!==a&&a.$$typeof===c};var isForwardRef=function(a){return z(a)===n};var isFragment=function(a){return z(a)===e};var isLazy=function(a){return z(a)===t};
var isMemo=function(a){return z(a)===r};var isPortal=function(a){return z(a)===d};var isProfiler=function(a){return z(a)===g};var isStrictMode=function(a){return z(a)===f};var isSuspense=function(a){return z(a)===p};
var isValidElementType=function(a){return "string"===typeof a||"function"===typeof a||a===e||a===m||a===g||a===f||a===p||a===q||"object"===typeof a&&null!==a&&(a.$$typeof===t||a.$$typeof===r||a.$$typeof===h||a.$$typeof===k||a.$$typeof===n||a.$$typeof===w||a.$$typeof===x||a.$$typeof===y||a.$$typeof===v)};var typeOf=z;

var reactIs_production_min = {
	AsyncMode: AsyncMode,
	ConcurrentMode: ConcurrentMode,
	ContextConsumer: ContextConsumer,
	ContextProvider: ContextProvider,
	Element: Element,
	ForwardRef: ForwardRef,
	Fragment: Fragment,
	Lazy: Lazy,
	Memo: Memo,
	Portal: Portal,
	Profiler: Profiler,
	StrictMode: StrictMode,
	Suspense: Suspense,
	isAsyncMode: isAsyncMode,
	isConcurrentMode: isConcurrentMode,
	isContextConsumer: isContextConsumer,
	isContextProvider: isContextProvider,
	isElement: isElement,
	isForwardRef: isForwardRef,
	isFragment: isFragment,
	isLazy: isLazy,
	isMemo: isMemo,
	isPortal: isPortal,
	isProfiler: isProfiler,
	isStrictMode: isStrictMode,
	isSuspense: isSuspense,
	isValidElementType: isValidElementType,
	typeOf: typeOf
};

var reactIs_development = createCommonjsModule(function (module, exports) {



if (process.env.NODE_ENV !== "production") {
  (function() {

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}
});
var reactIs_development_1 = reactIs_development.AsyncMode;
var reactIs_development_2 = reactIs_development.ConcurrentMode;
var reactIs_development_3 = reactIs_development.ContextConsumer;
var reactIs_development_4 = reactIs_development.ContextProvider;
var reactIs_development_5 = reactIs_development.Element;
var reactIs_development_6 = reactIs_development.ForwardRef;
var reactIs_development_7 = reactIs_development.Fragment;
var reactIs_development_8 = reactIs_development.Lazy;
var reactIs_development_9 = reactIs_development.Memo;
var reactIs_development_10 = reactIs_development.Portal;
var reactIs_development_11 = reactIs_development.Profiler;
var reactIs_development_12 = reactIs_development.StrictMode;
var reactIs_development_13 = reactIs_development.Suspense;
var reactIs_development_14 = reactIs_development.isAsyncMode;
var reactIs_development_15 = reactIs_development.isConcurrentMode;
var reactIs_development_16 = reactIs_development.isContextConsumer;
var reactIs_development_17 = reactIs_development.isContextProvider;
var reactIs_development_18 = reactIs_development.isElement;
var reactIs_development_19 = reactIs_development.isForwardRef;
var reactIs_development_20 = reactIs_development.isFragment;
var reactIs_development_21 = reactIs_development.isLazy;
var reactIs_development_22 = reactIs_development.isMemo;
var reactIs_development_23 = reactIs_development.isPortal;
var reactIs_development_24 = reactIs_development.isProfiler;
var reactIs_development_25 = reactIs_development.isStrictMode;
var reactIs_development_26 = reactIs_development.isSuspense;
var reactIs_development_27 = reactIs_development.isValidElementType;
var reactIs_development_28 = reactIs_development.typeOf;

var reactIs = createCommonjsModule(function (module) {

if (process.env.NODE_ENV === 'production') {
  module.exports = reactIs_production_min;
} else {
  module.exports = reactIs_development;
}
});
var reactIs_1 = reactIs.isElement;
var reactIs_2 = reactIs.isValidElementType;
var reactIs_3 = reactIs.typeOf;
var reactIs_4 = reactIs.isContextConsumer;
var reactIs_5 = reactIs.ForwardRef;

/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

var objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

var ReactPropTypesSecret_1 = ReactPropTypesSecret;

var printWarning = function() {};

if (process.env.NODE_ENV !== 'production') {
  var ReactPropTypesSecret$1 = ReactPropTypesSecret_1;
  var loggedTypeFailures = {};
  var has = Function.call.bind(Object.prototype.hasOwnProperty);

  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (process.env.NODE_ENV !== 'production') {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret$1);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes.resetWarningCache = function() {
  if (process.env.NODE_ENV !== 'production') {
    loggedTypeFailures = {};
  }
};

var checkPropTypes_1 = checkPropTypes;

var has$1 = Function.call.bind(Object.prototype.hasOwnProperty);
var printWarning$1 = function() {};

if (process.env.NODE_ENV !== 'production') {
  printWarning$1 = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

var factoryWithTypeCheckers = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (process.env.NODE_ENV !== 'production') {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret_1) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning$1(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret_1);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!reactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (process.env.NODE_ENV !== 'production') {
        if (arguments.length > 1) {
          printWarning$1(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning$1('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has$1(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
      process.env.NODE_ENV !== 'production' ? printWarning$1('Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning$1(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret_1) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = objectAssign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes_1;
  ReactPropTypes.resetWarningCache = checkPropTypes_1.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;

var factoryWithThrowingShims = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret_1) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  }  shim.isRequired = shim;
  function getShim() {
    return shim;
  }  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,

    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };

  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

var propTypes = createCommonjsModule(function (module) {
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (process.env.NODE_ENV !== 'production') {
  var ReactIs = reactIs;

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = factoryWithTypeCheckers(ReactIs.isElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = factoryWithThrowingShims();
}
});

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
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

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

var IcomoonReact = createCommonjsModule(function (module, exports) {
var __assign = (commonjsGlobal && commonjsGlobal.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (commonjsGlobal && commonjsGlobal.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(React);
exports.iconList = function (iconSet) {
    var list = [];
    iconSet.icons.forEach(function (icon) {
        list.push(icon.properties.name.split(", ")[0]);
    });
    return list;
};
function getSvg(icon, iconSet, styles, size, className) {
    var find = function (iconEl) { return iconEl.properties.name.split(", ").includes(icon); };
    var currentIcon = iconSet.icons.find(find);
    var renderPath = function (iconObj) { return function (path, index) {
        var attrs = (iconObj.attrs && iconObj.attrs[index]) || {};
        return react_1.default.createElement("path", __assign({ style: styles.path, key: index, d: path }, attrs));
    }; };
    if (currentIcon) {
        return (react_1.default.createElement("svg", { className: className, style: styles.svg, width: size, height: size, viewBox: "0 0 " + (currentIcon.icon.width || "1024") + " 1024", xmlns: "http://www.w3.org/2000/svg" }, currentIcon.icon.paths.map(renderPath(currentIcon.icon))));
    }
    console.warn("icon " + icon + " does not exist.");
    return null;
}
exports.IcomoonReact = function (props) {
    var color = props.color, _a = props.size, size = _a === void 0 ? "100%" : _a, icon = props.icon, iconSet = props.iconSet, _b = props.className, className = _b === void 0 ? "" : _b, _c = props.style, style = _c === void 0 ? {} : _c;
    var styles = {
        svg: __assign({ display: "inline-block", verticalAlign: "middle" }, style),
        path: {
            fill: color
        }
    };
    return getSvg(icon, iconSet, styles, size, className);
};
exports.IcomoonReact.displayName = "IcomoonReact";
exports.default = exports.IcomoonReact;

});

unwrapExports(IcomoonReact);
var IcomoonReact_1 = IcomoonReact.iconList;
var IcomoonReact_2 = IcomoonReact.IcomoonReact;

var src = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });

var IcomoonReact_2 = IcomoonReact;
exports.iconList = IcomoonReact_2.iconList;
exports.default = IcomoonReact.IcomoonReact;

});

var IcoMoon = unwrapExports(src);
var src_1 = src.iconList;

var Icon = function Icon(_ref) {
  var name = _ref.name,
      props = _objectWithoutProperties(_ref, ["name"]);

  return /*#__PURE__*/React.createElement(IcoMoon, _extends({
    iconSet: iconSet,
    title: name,
    icon: name
  }, props));
};

Icon.propTypes = {
  name: propTypes.string
};
Icon.defaultProps = {
  size: 24
};

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  border-radius: 50%;\n  background-color: ", ";\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 11px;\n  margin-right: 8px;\n  text-transform: uppercase;\n  ", ";\n  color: ", ";\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  border-radius: 50%;\n  background-image: url(", ");\n  background-position: center;\n  margin-right: 8px;\n  ", ";\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  text-transform: capitalize;\n  display: flex;\n  align-items: center;\n  color: ", ";\n  svg {\n    margin-left: 8px;\n    width: 14px;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var getStyleFromAvatarSize = function getStyleFromAvatarSize(size, theme) {
  switch (size) {
    case "small":
      return "\n        height: 32px;\n        min-width: 32px;\n       ";

    case "medium":
      return "\n        height: 40px;\n        min-width: 40px;\n       ";

    case "large":
      return "\n        height: 80px;\n        min-width: 80px;\n        ";

    default:
      return;
  }
};

var getRandomColor = function getRandomColor(avatarDefault, theme) {
  if (avatarDefault) {
    return avatarDefault;
  }

  var keys = Object.keys(theme.colors.muted);
  return theme.colors.muted[keys[keys.length * Math.random() << 0]];
};

var getTextColor = function getTextColor(size, user, theme) {
  if (size === "small" && user.avatar) {
    return "".concat(theme.colors.grey, ";");
  } else if (size === "medium") {
    return "".concat(theme.colors.brand.orange);
  } else {
    return "".concat(theme.colors.darkBlue, ";");
  }
};

var AvatarContainer = styled.div(_templateObject(), function (props) {
  return getTextColor(props.size, props.user, props.theme);
});
var AvatarImage = styled.div(_templateObject2(), function (props) {
  return props.avatar;
}, function (props) {
  return getStyleFromAvatarSize(props.size);
});
var AvatarInitials = styled.div(_templateObject3(), function (props) {
  return getRandomColor(props.avatarDefault, props.theme);
}, function (props) {
  return getStyleFromAvatarSize(props.size);
}, function (props) {
  return props.theme.colors.darkBlue;
});

var Avatar = function Avatar(_ref) {
  var action = _ref.action,
      size = _ref.size,
      hasCarat = _ref.hasCarat,
      hasText = _ref.hasText,
      user = _ref.user;
  return /*#__PURE__*/React.createElement(AvatarContainer, {
    onClick: action,
    size: size,
    user: user
  }, size && user && user.avatar ? /*#__PURE__*/React.createElement(AvatarImage, {
    avatar: "".concat(user.avatar),
    size: size
  }) : /*#__PURE__*/React.createElement(AvatarInitials, {
    size: size,
    avatarDefault: user.avatarDefault
  }, user.fullName ? user.fullName.slice(0, 2) : ''), hasText && /*#__PURE__*/React.createElement("p", null, user.fullName), hasCarat && /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-down"
  }));
};

Avatar.propTypes = {
  action: propTypes.func,
  size: propTypes.oneOf(['small', 'medium', 'large']),
  hasCarat: propTypes.bool,
  hasText: propTypes.bool,
  user: propTypes.object
};
Avatar.defaultProps = {
  size: 'small'
};

var t$1 = function t(translation, value) {
  return translation ? translation(value) : value;
};

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

function _extends$1() {
  _extends$1 = Object.assign || function (target) {
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

  return _extends$1.apply(this, arguments);
}

function isAbsolute(pathname) {
  return pathname.charAt(0) === '/';
}

// About 1.5x faster than the two-arg version of Array#splice()
function spliceOne(list, index) {
  for (var i = index, k = i + 1, n = list.length; k < n; i += 1, k += 1) {
    list[i] = list[k];
  }

  list.pop();
}

// This implementation is based heavily on node's url.parse
function resolvePathname(to, from) {
  if (from === undefined) from = '';

  var toParts = (to && to.split('/')) || [];
  var fromParts = (from && from.split('/')) || [];

  var isToAbs = to && isAbsolute(to);
  var isFromAbs = from && isAbsolute(from);
  var mustEndAbs = isToAbs || isFromAbs;

  if (to && isAbsolute(to)) {
    // to is absolute
    fromParts = toParts;
  } else if (toParts.length) {
    // to is relative, drop the filename
    fromParts.pop();
    fromParts = fromParts.concat(toParts);
  }

  if (!fromParts.length) return '/';

  var hasTrailingSlash;
  if (fromParts.length) {
    var last = fromParts[fromParts.length - 1];
    hasTrailingSlash = last === '.' || last === '..' || last === '';
  } else {
    hasTrailingSlash = false;
  }

  var up = 0;
  for (var i = fromParts.length; i >= 0; i--) {
    var part = fromParts[i];

    if (part === '.') {
      spliceOne(fromParts, i);
    } else if (part === '..') {
      spliceOne(fromParts, i);
      up++;
    } else if (up) {
      spliceOne(fromParts, i);
      up--;
    }
  }

  if (!mustEndAbs) for (; up--; up) fromParts.unshift('..');

  if (
    mustEndAbs &&
    fromParts[0] !== '' &&
    (!fromParts[0] || !isAbsolute(fromParts[0]))
  )
    fromParts.unshift('');

  var result = fromParts.join('/');

  if (hasTrailingSlash && result.substr(-1) !== '/') result += '/';

  return result;
}

function valueOf(obj) {
  return obj.valueOf ? obj.valueOf() : Object.prototype.valueOf.call(obj);
}

function valueEqual(a, b) {
  // Test for strict equality first.
  if (a === b) return true;

  // Otherwise, if either of them == null they are not equal.
  if (a == null || b == null) return false;

  if (Array.isArray(a)) {
    return (
      Array.isArray(b) &&
      a.length === b.length &&
      a.every(function(item, index) {
        return valueEqual(item, b[index]);
      })
    );
  }

  if (typeof a === 'object' || typeof b === 'object') {
    var aValue = valueOf(a);
    var bValue = valueOf(b);

    if (aValue !== a || bValue !== b) return valueEqual(aValue, bValue);

    return Object.keys(Object.assign({}, a, b)).every(function(key) {
      return valueEqual(a[key], b[key]);
    });
  }

  return false;
}

var isProduction = process.env.NODE_ENV === 'production';
function warning(condition, message) {
  if (!isProduction) {
    if (condition) {
      return;
    }

    var text = "Warning: " + message;

    if (typeof console !== 'undefined') {
      console.warn(text);
    }

    try {
      throw Error(text);
    } catch (x) {}
  }
}

var isProduction$1 = process.env.NODE_ENV === 'production';
var prefix = 'Invariant failed';
function invariant(condition, message) {
    if (condition) {
        return;
    }
    if (isProduction$1) {
        throw new Error(prefix);
    }
    throw new Error(prefix + ": " + (message || ''));
}

function addLeadingSlash(path) {
  return path.charAt(0) === '/' ? path : '/' + path;
}
function stripLeadingSlash(path) {
  return path.charAt(0) === '/' ? path.substr(1) : path;
}
function hasBasename(path, prefix) {
  return path.toLowerCase().indexOf(prefix.toLowerCase()) === 0 && '/?#'.indexOf(path.charAt(prefix.length)) !== -1;
}
function stripBasename(path, prefix) {
  return hasBasename(path, prefix) ? path.substr(prefix.length) : path;
}
function stripTrailingSlash(path) {
  return path.charAt(path.length - 1) === '/' ? path.slice(0, -1) : path;
}
function parsePath(path) {
  var pathname = path || '/';
  var search = '';
  var hash = '';
  var hashIndex = pathname.indexOf('#');

  if (hashIndex !== -1) {
    hash = pathname.substr(hashIndex);
    pathname = pathname.substr(0, hashIndex);
  }

  var searchIndex = pathname.indexOf('?');

  if (searchIndex !== -1) {
    search = pathname.substr(searchIndex);
    pathname = pathname.substr(0, searchIndex);
  }

  return {
    pathname: pathname,
    search: search === '?' ? '' : search,
    hash: hash === '#' ? '' : hash
  };
}
function createPath(location) {
  var pathname = location.pathname,
      search = location.search,
      hash = location.hash;
  var path = pathname || '/';
  if (search && search !== '?') path += search.charAt(0) === '?' ? search : "?" + search;
  if (hash && hash !== '#') path += hash.charAt(0) === '#' ? hash : "#" + hash;
  return path;
}

function createLocation(path, state, key, currentLocation) {
  var location;

  if (typeof path === 'string') {
    // Two-arg form: push(path, state)
    location = parsePath(path);
    location.state = state;
  } else {
    // One-arg form: push(location)
    location = _extends$1({}, path);
    if (location.pathname === undefined) location.pathname = '';

    if (location.search) {
      if (location.search.charAt(0) !== '?') location.search = '?' + location.search;
    } else {
      location.search = '';
    }

    if (location.hash) {
      if (location.hash.charAt(0) !== '#') location.hash = '#' + location.hash;
    } else {
      location.hash = '';
    }

    if (state !== undefined && location.state === undefined) location.state = state;
  }

  try {
    location.pathname = decodeURI(location.pathname);
  } catch (e) {
    if (e instanceof URIError) {
      throw new URIError('Pathname "' + location.pathname + '" could not be decoded. ' + 'This is likely caused by an invalid percent-encoding.');
    } else {
      throw e;
    }
  }

  if (key) location.key = key;

  if (currentLocation) {
    // Resolve incomplete/relative pathname relative to current location.
    if (!location.pathname) {
      location.pathname = currentLocation.pathname;
    } else if (location.pathname.charAt(0) !== '/') {
      location.pathname = resolvePathname(location.pathname, currentLocation.pathname);
    }
  } else {
    // When there is no prior location and pathname is empty, set it to /
    if (!location.pathname) {
      location.pathname = '/';
    }
  }

  return location;
}
function locationsAreEqual(a, b) {
  return a.pathname === b.pathname && a.search === b.search && a.hash === b.hash && a.key === b.key && valueEqual(a.state, b.state);
}

function createTransitionManager() {
  var prompt = null;

  function setPrompt(nextPrompt) {
    process.env.NODE_ENV !== "production" ? warning(prompt == null, 'A history supports only one prompt at a time') : void 0;
    prompt = nextPrompt;
    return function () {
      if (prompt === nextPrompt) prompt = null;
    };
  }

  function confirmTransitionTo(location, action, getUserConfirmation, callback) {
    // TODO: If another transition starts while we're still confirming
    // the previous one, we may end up in a weird state. Figure out the
    // best way to handle this.
    if (prompt != null) {
      var result = typeof prompt === 'function' ? prompt(location, action) : prompt;

      if (typeof result === 'string') {
        if (typeof getUserConfirmation === 'function') {
          getUserConfirmation(result, callback);
        } else {
          process.env.NODE_ENV !== "production" ? warning(false, 'A history needs a getUserConfirmation function in order to use a prompt message') : void 0;
          callback(true);
        }
      } else {
        // Return false from a transition hook to cancel the transition.
        callback(result !== false);
      }
    } else {
      callback(true);
    }
  }

  var listeners = [];

  function appendListener(fn) {
    var isActive = true;

    function listener() {
      if (isActive) fn.apply(void 0, arguments);
    }

    listeners.push(listener);
    return function () {
      isActive = false;
      listeners = listeners.filter(function (item) {
        return item !== listener;
      });
    };
  }

  function notifyListeners() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    listeners.forEach(function (listener) {
      return listener.apply(void 0, args);
    });
  }

  return {
    setPrompt: setPrompt,
    confirmTransitionTo: confirmTransitionTo,
    appendListener: appendListener,
    notifyListeners: notifyListeners
  };
}

var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
function getConfirmation(message, callback) {
  callback(window.confirm(message)); // eslint-disable-line no-alert
}
/**
 * Returns true if the HTML5 history API is supported. Taken from Modernizr.
 *
 * https://github.com/Modernizr/Modernizr/blob/master/LICENSE
 * https://github.com/Modernizr/Modernizr/blob/master/feature-detects/history.js
 * changed to avoid false negatives for Windows Phones: https://github.com/reactjs/react-router/issues/586
 */

function supportsHistory() {
  var ua = window.navigator.userAgent;
  if ((ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) && ua.indexOf('Mobile Safari') !== -1 && ua.indexOf('Chrome') === -1 && ua.indexOf('Windows Phone') === -1) return false;
  return window.history && 'pushState' in window.history;
}
/**
 * Returns true if browser fires popstate on hash change.
 * IE10 and IE11 do not.
 */

function supportsPopStateOnHashChange() {
  return window.navigator.userAgent.indexOf('Trident') === -1;
}
/**
 * Returns false if using go(n) with hash history causes a full page reload.
 */

function supportsGoWithoutReloadUsingHash() {
  return window.navigator.userAgent.indexOf('Firefox') === -1;
}
/**
 * Returns true if a given popstate event is an extraneous WebKit event.
 * Accounts for the fact that Chrome on iOS fires real popstate events
 * containing undefined state when pressing the back button.
 */

function isExtraneousPopstateEvent(event) {
  return event.state === undefined && navigator.userAgent.indexOf('CriOS') === -1;
}

var PopStateEvent = 'popstate';
var HashChangeEvent = 'hashchange';

function getHistoryState() {
  try {
    return window.history.state || {};
  } catch (e) {
    // IE 11 sometimes throws when accessing window.history.state
    // See https://github.com/ReactTraining/history/pull/289
    return {};
  }
}
/**
 * Creates a history object that uses the HTML5 history API including
 * pushState, replaceState, and the popstate event.
 */


function createBrowserHistory(props) {
  if (props === void 0) {
    props = {};
  }

  !canUseDOM ? process.env.NODE_ENV !== "production" ? invariant(false, 'Browser history needs a DOM') : invariant(false) : void 0;
  var globalHistory = window.history;
  var canUseHistory = supportsHistory();
  var needsHashChangeListener = !supportsPopStateOnHashChange();
  var _props = props,
      _props$forceRefresh = _props.forceRefresh,
      forceRefresh = _props$forceRefresh === void 0 ? false : _props$forceRefresh,
      _props$getUserConfirm = _props.getUserConfirmation,
      getUserConfirmation = _props$getUserConfirm === void 0 ? getConfirmation : _props$getUserConfirm,
      _props$keyLength = _props.keyLength,
      keyLength = _props$keyLength === void 0 ? 6 : _props$keyLength;
  var basename = props.basename ? stripTrailingSlash(addLeadingSlash(props.basename)) : '';

  function getDOMLocation(historyState) {
    var _ref = historyState || {},
        key = _ref.key,
        state = _ref.state;

    var _window$location = window.location,
        pathname = _window$location.pathname,
        search = _window$location.search,
        hash = _window$location.hash;
    var path = pathname + search + hash;
    process.env.NODE_ENV !== "production" ? warning(!basename || hasBasename(path, basename), 'You are attempting to use a basename on a page whose URL path does not begin ' + 'with the basename. Expected path "' + path + '" to begin with "' + basename + '".') : void 0;
    if (basename) path = stripBasename(path, basename);
    return createLocation(path, state, key);
  }

  function createKey() {
    return Math.random().toString(36).substr(2, keyLength);
  }

  var transitionManager = createTransitionManager();

  function setState(nextState) {
    _extends$1(history, nextState);

    history.length = globalHistory.length;
    transitionManager.notifyListeners(history.location, history.action);
  }

  function handlePopState(event) {
    // Ignore extraneous popstate events in WebKit.
    if (isExtraneousPopstateEvent(event)) return;
    handlePop(getDOMLocation(event.state));
  }

  function handleHashChange() {
    handlePop(getDOMLocation(getHistoryState()));
  }

  var forceNextPop = false;

  function handlePop(location) {
    if (forceNextPop) {
      forceNextPop = false;
      setState();
    } else {
      var action = 'POP';
      transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
        if (ok) {
          setState({
            action: action,
            location: location
          });
        } else {
          revertPop(location);
        }
      });
    }
  }

  function revertPop(fromLocation) {
    var toLocation = history.location; // TODO: We could probably make this more reliable by
    // keeping a list of keys we've seen in sessionStorage.
    // Instead, we just default to 0 for keys we don't know.

    var toIndex = allKeys.indexOf(toLocation.key);
    if (toIndex === -1) toIndex = 0;
    var fromIndex = allKeys.indexOf(fromLocation.key);
    if (fromIndex === -1) fromIndex = 0;
    var delta = toIndex - fromIndex;

    if (delta) {
      forceNextPop = true;
      go(delta);
    }
  }

  var initialLocation = getDOMLocation(getHistoryState());
  var allKeys = [initialLocation.key]; // Public interface

  function createHref(location) {
    return basename + createPath(location);
  }

  function push(path, state) {
    process.env.NODE_ENV !== "production" ? warning(!(typeof path === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to push when the 1st ' + 'argument is a location-like object that already has state; it is ignored') : void 0;
    var action = 'PUSH';
    var location = createLocation(path, state, createKey(), history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      var href = createHref(location);
      var key = location.key,
          state = location.state;

      if (canUseHistory) {
        globalHistory.pushState({
          key: key,
          state: state
        }, null, href);

        if (forceRefresh) {
          window.location.href = href;
        } else {
          var prevIndex = allKeys.indexOf(history.location.key);
          var nextKeys = allKeys.slice(0, prevIndex + 1);
          nextKeys.push(location.key);
          allKeys = nextKeys;
          setState({
            action: action,
            location: location
          });
        }
      } else {
        process.env.NODE_ENV !== "production" ? warning(state === undefined, 'Browser history cannot push state in browsers that do not support HTML5 history') : void 0;
        window.location.href = href;
      }
    });
  }

  function replace(path, state) {
    process.env.NODE_ENV !== "production" ? warning(!(typeof path === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to replace when the 1st ' + 'argument is a location-like object that already has state; it is ignored') : void 0;
    var action = 'REPLACE';
    var location = createLocation(path, state, createKey(), history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      var href = createHref(location);
      var key = location.key,
          state = location.state;

      if (canUseHistory) {
        globalHistory.replaceState({
          key: key,
          state: state
        }, null, href);

        if (forceRefresh) {
          window.location.replace(href);
        } else {
          var prevIndex = allKeys.indexOf(history.location.key);
          if (prevIndex !== -1) allKeys[prevIndex] = location.key;
          setState({
            action: action,
            location: location
          });
        }
      } else {
        process.env.NODE_ENV !== "production" ? warning(state === undefined, 'Browser history cannot replace state in browsers that do not support HTML5 history') : void 0;
        window.location.replace(href);
      }
    });
  }

  function go(n) {
    globalHistory.go(n);
  }

  function goBack() {
    go(-1);
  }

  function goForward() {
    go(1);
  }

  var listenerCount = 0;

  function checkDOMListeners(delta) {
    listenerCount += delta;

    if (listenerCount === 1 && delta === 1) {
      window.addEventListener(PopStateEvent, handlePopState);
      if (needsHashChangeListener) window.addEventListener(HashChangeEvent, handleHashChange);
    } else if (listenerCount === 0) {
      window.removeEventListener(PopStateEvent, handlePopState);
      if (needsHashChangeListener) window.removeEventListener(HashChangeEvent, handleHashChange);
    }
  }

  var isBlocked = false;

  function block(prompt) {
    if (prompt === void 0) {
      prompt = false;
    }

    var unblock = transitionManager.setPrompt(prompt);

    if (!isBlocked) {
      checkDOMListeners(1);
      isBlocked = true;
    }

    return function () {
      if (isBlocked) {
        isBlocked = false;
        checkDOMListeners(-1);
      }

      return unblock();
    };
  }

  function listen(listener) {
    var unlisten = transitionManager.appendListener(listener);
    checkDOMListeners(1);
    return function () {
      checkDOMListeners(-1);
      unlisten();
    };
  }

  var history = {
    length: globalHistory.length,
    action: 'POP',
    location: initialLocation,
    createHref: createHref,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    block: block,
    listen: listen
  };
  return history;
}

var HashChangeEvent$1 = 'hashchange';
var HashPathCoders = {
  hashbang: {
    encodePath: function encodePath(path) {
      return path.charAt(0) === '!' ? path : '!/' + stripLeadingSlash(path);
    },
    decodePath: function decodePath(path) {
      return path.charAt(0) === '!' ? path.substr(1) : path;
    }
  },
  noslash: {
    encodePath: stripLeadingSlash,
    decodePath: addLeadingSlash
  },
  slash: {
    encodePath: addLeadingSlash,
    decodePath: addLeadingSlash
  }
};

function stripHash(url) {
  var hashIndex = url.indexOf('#');
  return hashIndex === -1 ? url : url.slice(0, hashIndex);
}

function getHashPath() {
  // We can't use window.location.hash here because it's not
  // consistent across browsers - Firefox will pre-decode it!
  var href = window.location.href;
  var hashIndex = href.indexOf('#');
  return hashIndex === -1 ? '' : href.substring(hashIndex + 1);
}

function pushHashPath(path) {
  window.location.hash = path;
}

function replaceHashPath(path) {
  window.location.replace(stripHash(window.location.href) + '#' + path);
}

function createHashHistory(props) {
  if (props === void 0) {
    props = {};
  }

  !canUseDOM ? process.env.NODE_ENV !== "production" ? invariant(false, 'Hash history needs a DOM') : invariant(false) : void 0;
  var globalHistory = window.history;
  var canGoWithoutReload = supportsGoWithoutReloadUsingHash();
  var _props = props,
      _props$getUserConfirm = _props.getUserConfirmation,
      getUserConfirmation = _props$getUserConfirm === void 0 ? getConfirmation : _props$getUserConfirm,
      _props$hashType = _props.hashType,
      hashType = _props$hashType === void 0 ? 'slash' : _props$hashType;
  var basename = props.basename ? stripTrailingSlash(addLeadingSlash(props.basename)) : '';
  var _HashPathCoders$hashT = HashPathCoders[hashType],
      encodePath = _HashPathCoders$hashT.encodePath,
      decodePath = _HashPathCoders$hashT.decodePath;

  function getDOMLocation() {
    var path = decodePath(getHashPath());
    process.env.NODE_ENV !== "production" ? warning(!basename || hasBasename(path, basename), 'You are attempting to use a basename on a page whose URL path does not begin ' + 'with the basename. Expected path "' + path + '" to begin with "' + basename + '".') : void 0;
    if (basename) path = stripBasename(path, basename);
    return createLocation(path);
  }

  var transitionManager = createTransitionManager();

  function setState(nextState) {
    _extends$1(history, nextState);

    history.length = globalHistory.length;
    transitionManager.notifyListeners(history.location, history.action);
  }

  var forceNextPop = false;
  var ignorePath = null;

  function locationsAreEqual$$1(a, b) {
    return a.pathname === b.pathname && a.search === b.search && a.hash === b.hash;
  }

  function handleHashChange() {
    var path = getHashPath();
    var encodedPath = encodePath(path);

    if (path !== encodedPath) {
      // Ensure we always have a properly-encoded hash.
      replaceHashPath(encodedPath);
    } else {
      var location = getDOMLocation();
      var prevLocation = history.location;
      if (!forceNextPop && locationsAreEqual$$1(prevLocation, location)) return; // A hashchange doesn't always == location change.

      if (ignorePath === createPath(location)) return; // Ignore this change; we already setState in push/replace.

      ignorePath = null;
      handlePop(location);
    }
  }

  function handlePop(location) {
    if (forceNextPop) {
      forceNextPop = false;
      setState();
    } else {
      var action = 'POP';
      transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
        if (ok) {
          setState({
            action: action,
            location: location
          });
        } else {
          revertPop(location);
        }
      });
    }
  }

  function revertPop(fromLocation) {
    var toLocation = history.location; // TODO: We could probably make this more reliable by
    // keeping a list of paths we've seen in sessionStorage.
    // Instead, we just default to 0 for paths we don't know.

    var toIndex = allPaths.lastIndexOf(createPath(toLocation));
    if (toIndex === -1) toIndex = 0;
    var fromIndex = allPaths.lastIndexOf(createPath(fromLocation));
    if (fromIndex === -1) fromIndex = 0;
    var delta = toIndex - fromIndex;

    if (delta) {
      forceNextPop = true;
      go(delta);
    }
  } // Ensure the hash is encoded properly before doing anything else.


  var path = getHashPath();
  var encodedPath = encodePath(path);
  if (path !== encodedPath) replaceHashPath(encodedPath);
  var initialLocation = getDOMLocation();
  var allPaths = [createPath(initialLocation)]; // Public interface

  function createHref(location) {
    var baseTag = document.querySelector('base');
    var href = '';

    if (baseTag && baseTag.getAttribute('href')) {
      href = stripHash(window.location.href);
    }

    return href + '#' + encodePath(basename + createPath(location));
  }

  function push(path, state) {
    process.env.NODE_ENV !== "production" ? warning(state === undefined, 'Hash history cannot push state; it is ignored') : void 0;
    var action = 'PUSH';
    var location = createLocation(path, undefined, undefined, history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      var path = createPath(location);
      var encodedPath = encodePath(basename + path);
      var hashChanged = getHashPath() !== encodedPath;

      if (hashChanged) {
        // We cannot tell if a hashchange was caused by a PUSH, so we'd
        // rather setState here and ignore the hashchange. The caveat here
        // is that other hash histories in the page will consider it a POP.
        ignorePath = path;
        pushHashPath(encodedPath);
        var prevIndex = allPaths.lastIndexOf(createPath(history.location));
        var nextPaths = allPaths.slice(0, prevIndex + 1);
        nextPaths.push(path);
        allPaths = nextPaths;
        setState({
          action: action,
          location: location
        });
      } else {
        process.env.NODE_ENV !== "production" ? warning(false, 'Hash history cannot PUSH the same path; a new entry will not be added to the history stack') : void 0;
        setState();
      }
    });
  }

  function replace(path, state) {
    process.env.NODE_ENV !== "production" ? warning(state === undefined, 'Hash history cannot replace state; it is ignored') : void 0;
    var action = 'REPLACE';
    var location = createLocation(path, undefined, undefined, history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      var path = createPath(location);
      var encodedPath = encodePath(basename + path);
      var hashChanged = getHashPath() !== encodedPath;

      if (hashChanged) {
        // We cannot tell if a hashchange was caused by a REPLACE, so we'd
        // rather setState here and ignore the hashchange. The caveat here
        // is that other hash histories in the page will consider it a POP.
        ignorePath = path;
        replaceHashPath(encodedPath);
      }

      var prevIndex = allPaths.indexOf(createPath(history.location));
      if (prevIndex !== -1) allPaths[prevIndex] = path;
      setState({
        action: action,
        location: location
      });
    });
  }

  function go(n) {
    process.env.NODE_ENV !== "production" ? warning(canGoWithoutReload, 'Hash history go(n) causes a full page reload in this browser') : void 0;
    globalHistory.go(n);
  }

  function goBack() {
    go(-1);
  }

  function goForward() {
    go(1);
  }

  var listenerCount = 0;

  function checkDOMListeners(delta) {
    listenerCount += delta;

    if (listenerCount === 1 && delta === 1) {
      window.addEventListener(HashChangeEvent$1, handleHashChange);
    } else if (listenerCount === 0) {
      window.removeEventListener(HashChangeEvent$1, handleHashChange);
    }
  }

  var isBlocked = false;

  function block(prompt) {
    if (prompt === void 0) {
      prompt = false;
    }

    var unblock = transitionManager.setPrompt(prompt);

    if (!isBlocked) {
      checkDOMListeners(1);
      isBlocked = true;
    }

    return function () {
      if (isBlocked) {
        isBlocked = false;
        checkDOMListeners(-1);
      }

      return unblock();
    };
  }

  function listen(listener) {
    var unlisten = transitionManager.appendListener(listener);
    checkDOMListeners(1);
    return function () {
      checkDOMListeners(-1);
      unlisten();
    };
  }

  var history = {
    length: globalHistory.length,
    action: 'POP',
    location: initialLocation,
    createHref: createHref,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    block: block,
    listen: listen
  };
  return history;
}

function clamp(n, lowerBound, upperBound) {
  return Math.min(Math.max(n, lowerBound), upperBound);
}
/**
 * Creates a history object that stores locations in memory.
 */


function createMemoryHistory(props) {
  if (props === void 0) {
    props = {};
  }

  var _props = props,
      getUserConfirmation = _props.getUserConfirmation,
      _props$initialEntries = _props.initialEntries,
      initialEntries = _props$initialEntries === void 0 ? ['/'] : _props$initialEntries,
      _props$initialIndex = _props.initialIndex,
      initialIndex = _props$initialIndex === void 0 ? 0 : _props$initialIndex,
      _props$keyLength = _props.keyLength,
      keyLength = _props$keyLength === void 0 ? 6 : _props$keyLength;
  var transitionManager = createTransitionManager();

  function setState(nextState) {
    _extends$1(history, nextState);

    history.length = history.entries.length;
    transitionManager.notifyListeners(history.location, history.action);
  }

  function createKey() {
    return Math.random().toString(36).substr(2, keyLength);
  }

  var index = clamp(initialIndex, 0, initialEntries.length - 1);
  var entries = initialEntries.map(function (entry) {
    return typeof entry === 'string' ? createLocation(entry, undefined, createKey()) : createLocation(entry, undefined, entry.key || createKey());
  }); // Public interface

  var createHref = createPath;

  function push(path, state) {
    process.env.NODE_ENV !== "production" ? warning(!(typeof path === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to push when the 1st ' + 'argument is a location-like object that already has state; it is ignored') : void 0;
    var action = 'PUSH';
    var location = createLocation(path, state, createKey(), history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      var prevIndex = history.index;
      var nextIndex = prevIndex + 1;
      var nextEntries = history.entries.slice(0);

      if (nextEntries.length > nextIndex) {
        nextEntries.splice(nextIndex, nextEntries.length - nextIndex, location);
      } else {
        nextEntries.push(location);
      }

      setState({
        action: action,
        location: location,
        index: nextIndex,
        entries: nextEntries
      });
    });
  }

  function replace(path, state) {
    process.env.NODE_ENV !== "production" ? warning(!(typeof path === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to replace when the 1st ' + 'argument is a location-like object that already has state; it is ignored') : void 0;
    var action = 'REPLACE';
    var location = createLocation(path, state, createKey(), history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      history.entries[history.index] = location;
      setState({
        action: action,
        location: location
      });
    });
  }

  function go(n) {
    var nextIndex = clamp(history.index + n, 0, history.entries.length - 1);
    var action = 'POP';
    var location = history.entries[nextIndex];
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (ok) {
        setState({
          action: action,
          location: location,
          index: nextIndex
        });
      } else {
        // Mimic the behavior of DOM histories by
        // causing a render after a cancelled POP.
        setState();
      }
    });
  }

  function goBack() {
    go(-1);
  }

  function goForward() {
    go(1);
  }

  function canGo(n) {
    var nextIndex = history.index + n;
    return nextIndex >= 0 && nextIndex < history.entries.length;
  }

  function block(prompt) {
    if (prompt === void 0) {
      prompt = false;
    }

    return transitionManager.setPrompt(prompt);
  }

  function listen(listener) {
    return transitionManager.appendListener(listener);
  }

  var history = {
    length: entries.length,
    action: 'POP',
    location: entries[index],
    index: index,
    entries: entries,
    createHref: createHref,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    canGo: canGo,
    block: block,
    listen: listen
  };
  return history;
}

var MAX_SIGNED_31_BIT_INT = 1073741823;
var commonjsGlobal$1 = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : {};

function getUniqueId() {
  var key = '__global_unique_id__';
  return commonjsGlobal$1[key] = (commonjsGlobal$1[key] || 0) + 1;
}

function objectIs(x, y) {
  if (x === y) {
    return x !== 0 || 1 / x === 1 / y;
  } else {
    return x !== x && y !== y;
  }
}

function createEventEmitter(value) {
  var handlers = [];
  return {
    on: function on(handler) {
      handlers.push(handler);
    },
    off: function off(handler) {
      handlers = handlers.filter(function (h) {
        return h !== handler;
      });
    },
    get: function get() {
      return value;
    },
    set: function set(newValue, changedBits) {
      value = newValue;
      handlers.forEach(function (handler) {
        return handler(value, changedBits);
      });
    }
  };
}

function onlyChild(children) {
  return Array.isArray(children) ? children[0] : children;
}

function createReactContext(defaultValue, calculateChangedBits) {
  var _Provider$childContex, _Consumer$contextType;

  var contextProp = '__create-react-context-' + getUniqueId() + '__';

  var Provider = /*#__PURE__*/function (_Component) {
    _inheritsLoose(Provider, _Component);

    function Provider() {
      var _this;

      _this = _Component.apply(this, arguments) || this;
      _this.emitter = createEventEmitter(_this.props.value);
      return _this;
    }

    var _proto = Provider.prototype;

    _proto.getChildContext = function getChildContext() {
      var _ref;

      return _ref = {}, _ref[contextProp] = this.emitter, _ref;
    };

    _proto.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
      if (this.props.value !== nextProps.value) {
        var oldValue = this.props.value;
        var newValue = nextProps.value;
        var changedBits;

        if (objectIs(oldValue, newValue)) {
          changedBits = 0;
        } else {
          changedBits = typeof calculateChangedBits === 'function' ? calculateChangedBits(oldValue, newValue) : MAX_SIGNED_31_BIT_INT;

          if (process.env.NODE_ENV !== 'production') {
            warning((changedBits & MAX_SIGNED_31_BIT_INT) === changedBits, 'calculateChangedBits: Expected the return value to be a ' + '31-bit integer. Instead received: ' + changedBits);
          }

          changedBits |= 0;

          if (changedBits !== 0) {
            this.emitter.set(nextProps.value, changedBits);
          }
        }
      }
    };

    _proto.render = function render() {
      return this.props.children;
    };

    return Provider;
  }(Component);

  Provider.childContextTypes = (_Provider$childContex = {}, _Provider$childContex[contextProp] = propTypes.object.isRequired, _Provider$childContex);

  var Consumer = /*#__PURE__*/function (_Component2) {
    _inheritsLoose(Consumer, _Component2);

    function Consumer() {
      var _this2;

      _this2 = _Component2.apply(this, arguments) || this;
      _this2.state = {
        value: _this2.getValue()
      };

      _this2.onUpdate = function (newValue, changedBits) {
        var observedBits = _this2.observedBits | 0;

        if ((observedBits & changedBits) !== 0) {
          _this2.setState({
            value: _this2.getValue()
          });
        }
      };

      return _this2;
    }

    var _proto2 = Consumer.prototype;

    _proto2.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
      var observedBits = nextProps.observedBits;
      this.observedBits = observedBits === undefined || observedBits === null ? MAX_SIGNED_31_BIT_INT : observedBits;
    };

    _proto2.componentDidMount = function componentDidMount() {
      if (this.context[contextProp]) {
        this.context[contextProp].on(this.onUpdate);
      }

      var observedBits = this.props.observedBits;
      this.observedBits = observedBits === undefined || observedBits === null ? MAX_SIGNED_31_BIT_INT : observedBits;
    };

    _proto2.componentWillUnmount = function componentWillUnmount() {
      if (this.context[contextProp]) {
        this.context[contextProp].off(this.onUpdate);
      }
    };

    _proto2.getValue = function getValue() {
      if (this.context[contextProp]) {
        return this.context[contextProp].get();
      } else {
        return defaultValue;
      }
    };

    _proto2.render = function render() {
      return onlyChild(this.props.children)(this.state.value);
    };

    return Consumer;
  }(Component);

  Consumer.contextTypes = (_Consumer$contextType = {}, _Consumer$contextType[contextProp] = propTypes.object, _Consumer$contextType);
  return {
    Provider: Provider,
    Consumer: Consumer
  };
}

var index = React.createContext || createReactContext;

var isarray = Array.isArray || function (arr) {
  return Object.prototype.toString.call(arr) == '[object Array]';
};

/**
 * Expose `pathToRegexp`.
 */
var pathToRegexp_1 = pathToRegexp;
var parse_1 = parse;
var compile_1 = compile;
var tokensToFunction_1 = tokensToFunction;
var tokensToRegExp_1 = tokensToRegExp;

/**
 * The main path matching regexp utility.
 *
 * @type {RegExp}
 */
var PATH_REGEXP = new RegExp([
  // Match escaped characters that would otherwise appear in future matches.
  // This allows the user to escape special characters that won't transform.
  '(\\\\.)',
  // Match Express-style parameters and un-named parameters with a prefix
  // and optional suffixes. Matches appear as:
  //
  // "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
  // "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
  // "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
  '([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'
].join('|'), 'g');

/**
 * Parse a string for the raw tokens.
 *
 * @param  {string}  str
 * @param  {Object=} options
 * @return {!Array}
 */
function parse (str, options) {
  var tokens = [];
  var key = 0;
  var index = 0;
  var path = '';
  var defaultDelimiter = options && options.delimiter || '/';
  var res;

  while ((res = PATH_REGEXP.exec(str)) != null) {
    var m = res[0];
    var escaped = res[1];
    var offset = res.index;
    path += str.slice(index, offset);
    index = offset + m.length;

    // Ignore already escaped sequences.
    if (escaped) {
      path += escaped[1];
      continue
    }

    var next = str[index];
    var prefix = res[2];
    var name = res[3];
    var capture = res[4];
    var group = res[5];
    var modifier = res[6];
    var asterisk = res[7];

    // Push the current path onto the tokens.
    if (path) {
      tokens.push(path);
      path = '';
    }

    var partial = prefix != null && next != null && next !== prefix;
    var repeat = modifier === '+' || modifier === '*';
    var optional = modifier === '?' || modifier === '*';
    var delimiter = res[2] || defaultDelimiter;
    var pattern = capture || group;

    tokens.push({
      name: name || key++,
      prefix: prefix || '',
      delimiter: delimiter,
      optional: optional,
      repeat: repeat,
      partial: partial,
      asterisk: !!asterisk,
      pattern: pattern ? escapeGroup(pattern) : (asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?')
    });
  }

  // Match any characters still remaining.
  if (index < str.length) {
    path += str.substr(index);
  }

  // If the path exists, push it onto the end.
  if (path) {
    tokens.push(path);
  }

  return tokens
}

/**
 * Compile a string to a template function for the path.
 *
 * @param  {string}             str
 * @param  {Object=}            options
 * @return {!function(Object=, Object=)}
 */
function compile (str, options) {
  return tokensToFunction(parse(str, options), options)
}

/**
 * Prettier encoding of URI path segments.
 *
 * @param  {string}
 * @return {string}
 */
function encodeURIComponentPretty (str) {
  return encodeURI(str).replace(/[\/?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
  })
}

/**
 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
 *
 * @param  {string}
 * @return {string}
 */
function encodeAsterisk (str) {
  return encodeURI(str).replace(/[?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
  })
}

/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction (tokens, options) {
  // Compile all the tokens into regexps.
  var matches = new Array(tokens.length);

  // Compile all the patterns before compilation.
  for (var i = 0; i < tokens.length; i++) {
    if (typeof tokens[i] === 'object') {
      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$', flags(options));
    }
  }

  return function (obj, opts) {
    var path = '';
    var data = obj || {};
    var options = opts || {};
    var encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent;

    for (var i = 0; i < tokens.length; i++) {
      var token = tokens[i];

      if (typeof token === 'string') {
        path += token;

        continue
      }

      var value = data[token.name];
      var segment;

      if (value == null) {
        if (token.optional) {
          // Prepend partial segment prefixes.
          if (token.partial) {
            path += token.prefix;
          }

          continue
        } else {
          throw new TypeError('Expected "' + token.name + '" to be defined')
        }
      }

      if (isarray(value)) {
        if (!token.repeat) {
          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`')
        }

        if (value.length === 0) {
          if (token.optional) {
            continue
          } else {
            throw new TypeError('Expected "' + token.name + '" to not be empty')
          }
        }

        for (var j = 0; j < value.length; j++) {
          segment = encode(value[j]);

          if (!matches[i].test(segment)) {
            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`')
          }

          path += (j === 0 ? token.prefix : token.delimiter) + segment;
        }

        continue
      }

      segment = token.asterisk ? encodeAsterisk(value) : encode(value);

      if (!matches[i].test(segment)) {
        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"')
      }

      path += token.prefix + segment;
    }

    return path
  }
}

/**
 * Escape a regular expression string.
 *
 * @param  {string} str
 * @return {string}
 */
function escapeString (str) {
  return str.replace(/([.+*?=^!:${}()[\]|\/\\])/g, '\\$1')
}

/**
 * Escape the capturing group by escaping special characters and meaning.
 *
 * @param  {string} group
 * @return {string}
 */
function escapeGroup (group) {
  return group.replace(/([=!:$\/()])/g, '\\$1')
}

/**
 * Attach the keys as a property of the regexp.
 *
 * @param  {!RegExp} re
 * @param  {Array}   keys
 * @return {!RegExp}
 */
function attachKeys (re, keys) {
  re.keys = keys;
  return re
}

/**
 * Get the flags for a regexp from the options.
 *
 * @param  {Object} options
 * @return {string}
 */
function flags (options) {
  return options && options.sensitive ? '' : 'i'
}

/**
 * Pull out keys from a regexp.
 *
 * @param  {!RegExp} path
 * @param  {!Array}  keys
 * @return {!RegExp}
 */
function regexpToRegexp (path, keys) {
  // Use a negative lookahead to match only capturing groups.
  var groups = path.source.match(/\((?!\?)/g);

  if (groups) {
    for (var i = 0; i < groups.length; i++) {
      keys.push({
        name: i,
        prefix: null,
        delimiter: null,
        optional: false,
        repeat: false,
        partial: false,
        asterisk: false,
        pattern: null
      });
    }
  }

  return attachKeys(path, keys)
}

/**
 * Transform an array into a regexp.
 *
 * @param  {!Array}  path
 * @param  {Array}   keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
function arrayToRegexp (path, keys, options) {
  var parts = [];

  for (var i = 0; i < path.length; i++) {
    parts.push(pathToRegexp(path[i], keys, options).source);
  }

  var regexp = new RegExp('(?:' + parts.join('|') + ')', flags(options));

  return attachKeys(regexp, keys)
}

/**
 * Create a path regexp from string input.
 *
 * @param  {string}  path
 * @param  {!Array}  keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
function stringToRegexp (path, keys, options) {
  return tokensToRegExp(parse(path, options), keys, options)
}

/**
 * Expose a function for taking tokens and returning a RegExp.
 *
 * @param  {!Array}          tokens
 * @param  {(Array|Object)=} keys
 * @param  {Object=}         options
 * @return {!RegExp}
 */
function tokensToRegExp (tokens, keys, options) {
  if (!isarray(keys)) {
    options = /** @type {!Object} */ (keys || options);
    keys = [];
  }

  options = options || {};

  var strict = options.strict;
  var end = options.end !== false;
  var route = '';

  // Iterate over the tokens and create our regexp string.
  for (var i = 0; i < tokens.length; i++) {
    var token = tokens[i];

    if (typeof token === 'string') {
      route += escapeString(token);
    } else {
      var prefix = escapeString(token.prefix);
      var capture = '(?:' + token.pattern + ')';

      keys.push(token);

      if (token.repeat) {
        capture += '(?:' + prefix + capture + ')*';
      }

      if (token.optional) {
        if (!token.partial) {
          capture = '(?:' + prefix + '(' + capture + '))?';
        } else {
          capture = prefix + '(' + capture + ')?';
        }
      } else {
        capture = prefix + '(' + capture + ')';
      }

      route += capture;
    }
  }

  var delimiter = escapeString(options.delimiter || '/');
  var endsWithDelimiter = route.slice(-delimiter.length) === delimiter;

  // In non-strict mode we allow a slash at the end of match. If the path to
  // match already ends with a slash, we remove it for consistency. The slash
  // is valid at the end of a path match, not in the middle. This is important
  // in non-ending mode, where "/test/" shouldn't match "/test//route".
  if (!strict) {
    route = (endsWithDelimiter ? route.slice(0, -delimiter.length) : route) + '(?:' + delimiter + '(?=$))?';
  }

  if (end) {
    route += '$';
  } else {
    // In non-ending mode, we need the capturing groups to match as much as
    // possible by using a positive lookahead to the end or next path segment.
    route += strict && endsWithDelimiter ? '' : '(?=' + delimiter + '|$)';
  }

  return attachKeys(new RegExp('^' + route, flags(options)), keys)
}

/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 *
 * @param  {(string|RegExp|Array)} path
 * @param  {(Array|Object)=}       keys
 * @param  {Object=}               options
 * @return {!RegExp}
 */
function pathToRegexp (path, keys, options) {
  if (!isarray(keys)) {
    options = /** @type {!Object} */ (keys || options);
    keys = [];
  }

  options = options || {};

  if (path instanceof RegExp) {
    return regexpToRegexp(path, /** @type {!Array} */ (keys))
  }

  if (isarray(path)) {
    return arrayToRegexp(/** @type {!Array} */ (path), /** @type {!Array} */ (keys), options)
  }

  return stringToRegexp(/** @type {string} */ (path), /** @type {!Array} */ (keys), options)
}
pathToRegexp_1.parse = parse_1;
pathToRegexp_1.compile = compile_1;
pathToRegexp_1.tokensToFunction = tokensToFunction_1;
pathToRegexp_1.tokensToRegExp = tokensToRegExp_1;

function _objectWithoutPropertiesLoose$1(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

var FORWARD_REF_STATICS = {
  '$$typeof': true,
  render: true,
  defaultProps: true,
  displayName: true,
  propTypes: true
};
var MEMO_STATICS = {
  '$$typeof': true,
  compare: true,
  defaultProps: true,
  displayName: true,
  propTypes: true,
  type: true
};
var TYPE_STATICS = {};
TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;

// TODO: Replace with React.createContext once we can assume React 16+

var createNamedContext = function createNamedContext(name) {
  var context = index();
  context.displayName = name;
  return context;
};

var historyContext =
/*#__PURE__*/
createNamedContext("Router-History");

// TODO: Replace with React.createContext once we can assume React 16+

var createNamedContext$1 = function createNamedContext(name) {
  var context = index();
  context.displayName = name;
  return context;
};

var context =
/*#__PURE__*/
createNamedContext$1("Router");

/**
 * The public API for putting history on context.
 */

var Router =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(Router, _React$Component);

  Router.computeRootMatch = function computeRootMatch(pathname) {
    return {
      path: "/",
      url: "/",
      params: {},
      isExact: pathname === "/"
    };
  };

  function Router(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;
    _this.state = {
      location: props.history.location
    }; // This is a bit of a hack. We have to start listening for location
    // changes here in the constructor in case there are any <Redirect>s
    // on the initial render. If there are, they will replace/push when
    // they mount and since cDM fires in children before parents, we may
    // get a new location before the <Router> is mounted.

    _this._isMounted = false;
    _this._pendingLocation = null;

    if (!props.staticContext) {
      _this.unlisten = props.history.listen(function (location) {
        if (_this._isMounted) {
          _this.setState({
            location: location
          });
        } else {
          _this._pendingLocation = location;
        }
      });
    }

    return _this;
  }

  var _proto = Router.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this._isMounted = true;

    if (this._pendingLocation) {
      this.setState({
        location: this._pendingLocation
      });
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    if (this.unlisten) this.unlisten();
  };

  _proto.render = function render() {
    return React.createElement(context.Provider, {
      value: {
        history: this.props.history,
        location: this.state.location,
        match: Router.computeRootMatch(this.state.location.pathname),
        staticContext: this.props.staticContext
      }
    }, React.createElement(historyContext.Provider, {
      children: this.props.children || null,
      value: this.props.history
    }));
  };

  return Router;
}(React.Component);

if (process.env.NODE_ENV !== "production") {
  Router.propTypes = {
    children: propTypes.node,
    history: propTypes.object.isRequired,
    staticContext: propTypes.object
  };

  Router.prototype.componentDidUpdate = function (prevProps) {
    process.env.NODE_ENV !== "production" ? warning(prevProps.history === this.props.history, "You cannot change <Router history>") : void 0;
  };
}

/**
 * The public API for a <Router> that stores location in memory.
 */

var MemoryRouter =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(MemoryRouter, _React$Component);

  function MemoryRouter() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.history = createMemoryHistory(_this.props);
    return _this;
  }

  var _proto = MemoryRouter.prototype;

  _proto.render = function render() {
    return React.createElement(Router, {
      history: this.history,
      children: this.props.children
    });
  };

  return MemoryRouter;
}(React.Component);

if (process.env.NODE_ENV !== "production") {
  MemoryRouter.propTypes = {
    initialEntries: propTypes.array,
    initialIndex: propTypes.number,
    getUserConfirmation: propTypes.func,
    keyLength: propTypes.number,
    children: propTypes.node
  };

  MemoryRouter.prototype.componentDidMount = function () {
    process.env.NODE_ENV !== "production" ? warning(!this.props.history, "<MemoryRouter> ignores the history prop. To use a custom history, " + "use `import { Router }` instead of `import { MemoryRouter as Router }`.") : void 0;
  };
}

var Lifecycle =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(Lifecycle, _React$Component);

  function Lifecycle() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Lifecycle.prototype;

  _proto.componentDidMount = function componentDidMount() {
    if (this.props.onMount) this.props.onMount.call(this, this);
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    if (this.props.onUpdate) this.props.onUpdate.call(this, this, prevProps);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    if (this.props.onUnmount) this.props.onUnmount.call(this, this);
  };

  _proto.render = function render() {
    return null;
  };

  return Lifecycle;
}(React.Component);

/**
 * The public API for prompting the user before navigating away from a screen.
 */

function Prompt(_ref) {
  var message = _ref.message,
      _ref$when = _ref.when,
      when = _ref$when === void 0 ? true : _ref$when;
  return React.createElement(context.Consumer, null, function (context) {
    !context ? process.env.NODE_ENV !== "production" ? invariant(false, "You should not use <Prompt> outside a <Router>") : invariant(false) : void 0;
    if (!when || context.staticContext) return null;
    var method = context.history.block;
    return React.createElement(Lifecycle, {
      onMount: function onMount(self) {
        self.release = method(message);
      },
      onUpdate: function onUpdate(self, prevProps) {
        if (prevProps.message !== message) {
          self.release();
          self.release = method(message);
        }
      },
      onUnmount: function onUnmount(self) {
        self.release();
      },
      message: message
    });
  });
}

if (process.env.NODE_ENV !== "production") {
  var messageType = propTypes.oneOfType([propTypes.func, propTypes.string]);
  Prompt.propTypes = {
    when: propTypes.bool,
    message: messageType.isRequired
  };
}

var cache = {};
var cacheLimit = 10000;
var cacheCount = 0;

function compilePath(path) {
  if (cache[path]) return cache[path];
  var generator = pathToRegexp_1.compile(path);

  if (cacheCount < cacheLimit) {
    cache[path] = generator;
    cacheCount++;
  }

  return generator;
}
/**
 * Public API for generating a URL pathname from a path and parameters.
 */


function generatePath(path, params) {
  if (path === void 0) {
    path = "/";
  }

  if (params === void 0) {
    params = {};
  }

  return path === "/" ? path : compilePath(path)(params, {
    pretty: true
  });
}

/**
 * The public API for navigating programmatically with a component.
 */

function Redirect(_ref) {
  var computedMatch = _ref.computedMatch,
      to = _ref.to,
      _ref$push = _ref.push,
      push = _ref$push === void 0 ? false : _ref$push;
  return React.createElement(context.Consumer, null, function (context) {
    !context ? process.env.NODE_ENV !== "production" ? invariant(false, "You should not use <Redirect> outside a <Router>") : invariant(false) : void 0;
    var history = context.history,
        staticContext = context.staticContext;
    var method = push ? history.push : history.replace;
    var location = createLocation(computedMatch ? typeof to === "string" ? generatePath(to, computedMatch.params) : _extends$1({}, to, {
      pathname: generatePath(to.pathname, computedMatch.params)
    }) : to); // When rendering in a static context,
    // set the new location immediately.

    if (staticContext) {
      method(location);
      return null;
    }

    return React.createElement(Lifecycle, {
      onMount: function onMount() {
        method(location);
      },
      onUpdate: function onUpdate(self, prevProps) {
        var prevLocation = createLocation(prevProps.to);

        if (!locationsAreEqual(prevLocation, _extends$1({}, location, {
          key: prevLocation.key
        }))) {
          method(location);
        }
      },
      to: to
    });
  });
}

if (process.env.NODE_ENV !== "production") {
  Redirect.propTypes = {
    push: propTypes.bool,
    from: propTypes.string,
    to: propTypes.oneOfType([propTypes.string, propTypes.object]).isRequired
  };
}

var cache$1 = {};
var cacheLimit$1 = 10000;
var cacheCount$1 = 0;

function compilePath$1(path, options) {
  var cacheKey = "" + options.end + options.strict + options.sensitive;
  var pathCache = cache$1[cacheKey] || (cache$1[cacheKey] = {});
  if (pathCache[path]) return pathCache[path];
  var keys = [];
  var regexp = pathToRegexp_1(path, keys, options);
  var result = {
    regexp: regexp,
    keys: keys
  };

  if (cacheCount$1 < cacheLimit$1) {
    pathCache[path] = result;
    cacheCount$1++;
  }

  return result;
}
/**
 * Public API for matching a URL pathname to a path.
 */


function matchPath(pathname, options) {
  if (options === void 0) {
    options = {};
  }

  if (typeof options === "string" || Array.isArray(options)) {
    options = {
      path: options
    };
  }

  var _options = options,
      path = _options.path,
      _options$exact = _options.exact,
      exact = _options$exact === void 0 ? false : _options$exact,
      _options$strict = _options.strict,
      strict = _options$strict === void 0 ? false : _options$strict,
      _options$sensitive = _options.sensitive,
      sensitive = _options$sensitive === void 0 ? false : _options$sensitive;
  var paths = [].concat(path);
  return paths.reduce(function (matched, path) {
    if (!path && path !== "") return null;
    if (matched) return matched;

    var _compilePath = compilePath$1(path, {
      end: exact,
      strict: strict,
      sensitive: sensitive
    }),
        regexp = _compilePath.regexp,
        keys = _compilePath.keys;

    var match = regexp.exec(pathname);
    if (!match) return null;
    var url = match[0],
        values = match.slice(1);
    var isExact = pathname === url;
    if (exact && !isExact) return null;
    return {
      path: path,
      // the path used to match
      url: path === "/" && url === "" ? "/" : url,
      // the matched portion of the URL
      isExact: isExact,
      // whether or not we matched exactly
      params: keys.reduce(function (memo, key, index) {
        memo[key.name] = values[index];
        return memo;
      }, {})
    };
  }, null);
}

function isEmptyChildren(children) {
  return React.Children.count(children) === 0;
}

function evalChildrenDev(children, props, path) {
  var value = children(props);
  process.env.NODE_ENV !== "production" ? warning(value !== undefined, "You returned `undefined` from the `children` function of " + ("<Route" + (path ? " path=\"" + path + "\"" : "") + ">, but you ") + "should have returned a React element or `null`") : void 0;
  return value || null;
}
/**
 * The public API for matching a single path and rendering.
 */


var Route =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(Route, _React$Component);

  function Route() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Route.prototype;

  _proto.render = function render() {
    var _this = this;

    return React.createElement(context.Consumer, null, function (context$1) {
      !context$1 ? process.env.NODE_ENV !== "production" ? invariant(false, "You should not use <Route> outside a <Router>") : invariant(false) : void 0;
      var location = _this.props.location || context$1.location;
      var match = _this.props.computedMatch ? _this.props.computedMatch // <Switch> already computed the match for us
      : _this.props.path ? matchPath(location.pathname, _this.props) : context$1.match;

      var props = _extends$1({}, context$1, {
        location: location,
        match: match
      });

      var _this$props = _this.props,
          children = _this$props.children,
          component = _this$props.component,
          render = _this$props.render; // Preact uses an empty array as children by
      // default, so use null if that's the case.

      if (Array.isArray(children) && children.length === 0) {
        children = null;
      }

      return React.createElement(context.Provider, {
        value: props
      }, props.match ? children ? typeof children === "function" ? process.env.NODE_ENV !== "production" ? evalChildrenDev(children, props, _this.props.path) : children(props) : children : component ? React.createElement(component, props) : render ? render(props) : null : typeof children === "function" ? process.env.NODE_ENV !== "production" ? evalChildrenDev(children, props, _this.props.path) : children(props) : null);
    });
  };

  return Route;
}(React.Component);

if (process.env.NODE_ENV !== "production") {
  Route.propTypes = {
    children: propTypes.oneOfType([propTypes.func, propTypes.node]),
    component: function component(props, propName) {
      if (props[propName] && !reactIs_2(props[propName])) {
        return new Error("Invalid prop 'component' supplied to 'Route': the prop is not a valid React component");
      }
    },
    exact: propTypes.bool,
    location: propTypes.object,
    path: propTypes.oneOfType([propTypes.string, propTypes.arrayOf(propTypes.string)]),
    render: propTypes.func,
    sensitive: propTypes.bool,
    strict: propTypes.bool
  };

  Route.prototype.componentDidMount = function () {
    process.env.NODE_ENV !== "production" ? warning(!(this.props.children && !isEmptyChildren(this.props.children) && this.props.component), "You should not use <Route component> and <Route children> in the same route; <Route component> will be ignored") : void 0;
    process.env.NODE_ENV !== "production" ? warning(!(this.props.children && !isEmptyChildren(this.props.children) && this.props.render), "You should not use <Route render> and <Route children> in the same route; <Route render> will be ignored") : void 0;
    process.env.NODE_ENV !== "production" ? warning(!(this.props.component && this.props.render), "You should not use <Route component> and <Route render> in the same route; <Route render> will be ignored") : void 0;
  };

  Route.prototype.componentDidUpdate = function (prevProps) {
    process.env.NODE_ENV !== "production" ? warning(!(this.props.location && !prevProps.location), '<Route> elements should not change from uncontrolled to controlled (or vice versa). You initially used no "location" prop and then provided one on a subsequent render.') : void 0;
    process.env.NODE_ENV !== "production" ? warning(!(!this.props.location && prevProps.location), '<Route> elements should not change from controlled to uncontrolled (or vice versa). You provided a "location" prop initially but omitted it on a subsequent render.') : void 0;
  };
}

function addLeadingSlash$1(path) {
  return path.charAt(0) === "/" ? path : "/" + path;
}

function addBasename(basename, location) {
  if (!basename) return location;
  return _extends$1({}, location, {
    pathname: addLeadingSlash$1(basename) + location.pathname
  });
}

function stripBasename$1(basename, location) {
  if (!basename) return location;
  var base = addLeadingSlash$1(basename);
  if (location.pathname.indexOf(base) !== 0) return location;
  return _extends$1({}, location, {
    pathname: location.pathname.substr(base.length)
  });
}

function createURL(location) {
  return typeof location === "string" ? location : createPath(location);
}

function staticHandler(methodName) {
  return function () {
     process.env.NODE_ENV !== "production" ? invariant(false, "You cannot %s with <StaticRouter>") : invariant(false) ;
  };
}

function noop() {}
/**
 * The public top-level API for a "static" <Router>, so-called because it
 * can't actually change the current location. Instead, it just records
 * location changes in a context object. Useful mainly in testing and
 * server-rendering scenarios.
 */


var StaticRouter =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(StaticRouter, _React$Component);

  function StaticRouter() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;

    _this.handlePush = function (location) {
      return _this.navigateTo(location, "PUSH");
    };

    _this.handleReplace = function (location) {
      return _this.navigateTo(location, "REPLACE");
    };

    _this.handleListen = function () {
      return noop;
    };

    _this.handleBlock = function () {
      return noop;
    };

    return _this;
  }

  var _proto = StaticRouter.prototype;

  _proto.navigateTo = function navigateTo(location, action) {
    var _this$props = this.props,
        _this$props$basename = _this$props.basename,
        basename = _this$props$basename === void 0 ? "" : _this$props$basename,
        _this$props$context = _this$props.context,
        context = _this$props$context === void 0 ? {} : _this$props$context;
    context.action = action;
    context.location = addBasename(basename, createLocation(location));
    context.url = createURL(context.location);
  };

  _proto.render = function render() {
    var _this$props2 = this.props,
        _this$props2$basename = _this$props2.basename,
        basename = _this$props2$basename === void 0 ? "" : _this$props2$basename,
        _this$props2$context = _this$props2.context,
        context = _this$props2$context === void 0 ? {} : _this$props2$context,
        _this$props2$location = _this$props2.location,
        location = _this$props2$location === void 0 ? "/" : _this$props2$location,
        rest = _objectWithoutPropertiesLoose$1(_this$props2, ["basename", "context", "location"]);

    var history = {
      createHref: function createHref(path) {
        return addLeadingSlash$1(basename + createURL(path));
      },
      action: "POP",
      location: stripBasename$1(basename, createLocation(location)),
      push: this.handlePush,
      replace: this.handleReplace,
      go: staticHandler(),
      goBack: staticHandler(),
      goForward: staticHandler(),
      listen: this.handleListen,
      block: this.handleBlock
    };
    return React.createElement(Router, _extends$1({}, rest, {
      history: history,
      staticContext: context
    }));
  };

  return StaticRouter;
}(React.Component);

if (process.env.NODE_ENV !== "production") {
  StaticRouter.propTypes = {
    basename: propTypes.string,
    context: propTypes.object,
    location: propTypes.oneOfType([propTypes.string, propTypes.object])
  };

  StaticRouter.prototype.componentDidMount = function () {
    process.env.NODE_ENV !== "production" ? warning(!this.props.history, "<StaticRouter> ignores the history prop. To use a custom history, " + "use `import { Router }` instead of `import { StaticRouter as Router }`.") : void 0;
  };
}

/**
 * The public API for rendering the first <Route> that matches.
 */

var Switch =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(Switch, _React$Component);

  function Switch() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Switch.prototype;

  _proto.render = function render() {
    var _this = this;

    return React.createElement(context.Consumer, null, function (context) {
      !context ? process.env.NODE_ENV !== "production" ? invariant(false, "You should not use <Switch> outside a <Router>") : invariant(false) : void 0;
      var location = _this.props.location || context.location;
      var element, match; // We use React.Children.forEach instead of React.Children.toArray().find()
      // here because toArray adds keys to all child elements and we do not want
      // to trigger an unmount/remount for two <Route>s that render the same
      // component at different URLs.

      React.Children.forEach(_this.props.children, function (child) {
        if (match == null && React.isValidElement(child)) {
          element = child;
          var path = child.props.path || child.props.from;
          match = path ? matchPath(location.pathname, _extends$1({}, child.props, {
            path: path
          })) : context.match;
        }
      });
      return match ? React.cloneElement(element, {
        location: location,
        computedMatch: match
      }) : null;
    });
  };

  return Switch;
}(React.Component);

if (process.env.NODE_ENV !== "production") {
  Switch.propTypes = {
    children: propTypes.node,
    location: propTypes.object
  };

  Switch.prototype.componentDidUpdate = function (prevProps) {
    process.env.NODE_ENV !== "production" ? warning(!(this.props.location && !prevProps.location), '<Switch> elements should not change from uncontrolled to controlled (or vice versa). You initially used no "location" prop and then provided one on a subsequent render.') : void 0;
    process.env.NODE_ENV !== "production" ? warning(!(!this.props.location && prevProps.location), '<Switch> elements should not change from controlled to uncontrolled (or vice versa). You provided a "location" prop initially but omitted it on a subsequent render.') : void 0;
  };
}

var useContext = React.useContext;
function useHistory() {
  if (process.env.NODE_ENV !== "production") {
    !(typeof useContext === "function") ? process.env.NODE_ENV !== "production" ? invariant(false, "You must use React >= 16.8 in order to use useHistory()") : invariant(false) : void 0;
  }

  return useContext(historyContext);
}

if (process.env.NODE_ENV !== "production") {
  if (typeof window !== "undefined") {
    var global$1 = window;
    var key = "__react_router_build__";
    var buildNames = {
      cjs: "CommonJS",
      esm: "ES modules",
      umd: "UMD"
    };

    if (global$1[key] && global$1[key] !== "esm") {
      var initialBuildName = buildNames[global$1[key]];
      var secondaryBuildName = buildNames["esm"]; // TODO: Add link to article that explains in detail how to avoid
      // loading 2 different builds.

      throw new Error("You are loading the " + secondaryBuildName + " build of React Router " + ("on a page that is already running the " + initialBuildName + " ") + "build, so things won't work right.");
    }

    global$1[key] = "esm";
  }
}

/**
 * The public API for a <Router> that uses HTML5 history.
 */

var BrowserRouter =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(BrowserRouter, _React$Component);

  function BrowserRouter() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.history = createBrowserHistory(_this.props);
    return _this;
  }

  var _proto = BrowserRouter.prototype;

  _proto.render = function render() {
    return React.createElement(Router, {
      history: this.history,
      children: this.props.children
    });
  };

  return BrowserRouter;
}(React.Component);

if (process.env.NODE_ENV !== "production") {
  BrowserRouter.propTypes = {
    basename: propTypes.string,
    children: propTypes.node,
    forceRefresh: propTypes.bool,
    getUserConfirmation: propTypes.func,
    keyLength: propTypes.number
  };

  BrowserRouter.prototype.componentDidMount = function () {
    process.env.NODE_ENV !== "production" ? warning(!this.props.history, "<BrowserRouter> ignores the history prop. To use a custom history, " + "use `import { Router }` instead of `import { BrowserRouter as Router }`.") : void 0;
  };
}

/**
 * The public API for a <Router> that uses window.location.hash.
 */

var HashRouter =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(HashRouter, _React$Component);

  function HashRouter() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.history = createHashHistory(_this.props);
    return _this;
  }

  var _proto = HashRouter.prototype;

  _proto.render = function render() {
    return React.createElement(Router, {
      history: this.history,
      children: this.props.children
    });
  };

  return HashRouter;
}(React.Component);

if (process.env.NODE_ENV !== "production") {
  HashRouter.propTypes = {
    basename: propTypes.string,
    children: propTypes.node,
    getUserConfirmation: propTypes.func,
    hashType: propTypes.oneOf(["hashbang", "noslash", "slash"])
  };

  HashRouter.prototype.componentDidMount = function () {
    process.env.NODE_ENV !== "production" ? warning(!this.props.history, "<HashRouter> ignores the history prop. To use a custom history, " + "use `import { Router }` instead of `import { HashRouter as Router }`.") : void 0;
  };
}

var resolveToLocation = function resolveToLocation(to, currentLocation) {
  return typeof to === "function" ? to(currentLocation) : to;
};
var normalizeToLocation = function normalizeToLocation(to, currentLocation) {
  return typeof to === "string" ? createLocation(to, null, null, currentLocation) : to;
};

var forwardRefShim = function forwardRefShim(C) {
  return C;
};

var forwardRef = React.forwardRef;

if (typeof forwardRef === "undefined") {
  forwardRef = forwardRefShim;
}

function isModifiedEvent(event) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
}

var LinkAnchor = forwardRef(function (_ref, forwardedRef) {
  var innerRef = _ref.innerRef,
      navigate = _ref.navigate,
      _onClick = _ref.onClick,
      rest = _objectWithoutPropertiesLoose$1(_ref, ["innerRef", "navigate", "onClick"]);

  var target = rest.target;

  var props = _extends$1({}, rest, {
    onClick: function onClick(event) {
      try {
        if (_onClick) _onClick(event);
      } catch (ex) {
        event.preventDefault();
        throw ex;
      }

      if (!event.defaultPrevented && // onClick prevented default
      event.button === 0 && ( // ignore everything but left clicks
      !target || target === "_self") && // let browser handle "target=_blank" etc.
      !isModifiedEvent(event) // ignore clicks with modifier keys
      ) {
          event.preventDefault();
          navigate();
        }
    }
  }); // React 15 compat


  if (forwardRefShim !== forwardRef) {
    props.ref = forwardedRef || innerRef;
  } else {
    props.ref = innerRef;
  }
  /* eslint-disable-next-line jsx-a11y/anchor-has-content */


  return React.createElement("a", props);
});

if (process.env.NODE_ENV !== "production") {
  LinkAnchor.displayName = "LinkAnchor";
}
/**
 * The public API for rendering a history-aware <a>.
 */


var Link = forwardRef(function (_ref2, forwardedRef) {
  var _ref2$component = _ref2.component,
      component = _ref2$component === void 0 ? LinkAnchor : _ref2$component,
      replace = _ref2.replace,
      to = _ref2.to,
      innerRef = _ref2.innerRef,
      rest = _objectWithoutPropertiesLoose$1(_ref2, ["component", "replace", "to", "innerRef"]);

  return React.createElement(context.Consumer, null, function (context) {
    !context ? process.env.NODE_ENV !== "production" ? invariant(false, "You should not use <Link> outside a <Router>") : invariant(false) : void 0;
    var history = context.history;
    var location = normalizeToLocation(resolveToLocation(to, context.location), context.location);
    var href = location ? history.createHref(location) : "";

    var props = _extends$1({}, rest, {
      href: href,
      navigate: function navigate() {
        var location = resolveToLocation(to, context.location);
        var method = replace ? history.replace : history.push;
        method(location);
      }
    }); // React 15 compat


    if (forwardRefShim !== forwardRef) {
      props.ref = forwardedRef || innerRef;
    } else {
      props.innerRef = innerRef;
    }

    return React.createElement(component, props);
  });
});

if (process.env.NODE_ENV !== "production") {
  var toType = propTypes.oneOfType([propTypes.string, propTypes.object, propTypes.func]);
  var refType = propTypes.oneOfType([propTypes.string, propTypes.func, propTypes.shape({
    current: propTypes.any
  })]);
  Link.displayName = "Link";
  Link.propTypes = {
    innerRef: refType,
    onClick: propTypes.func,
    replace: propTypes.bool,
    target: propTypes.string,
    to: toType.isRequired
  };
}

var forwardRefShim$1 = function forwardRefShim(C) {
  return C;
};

var forwardRef$1 = React.forwardRef;

if (typeof forwardRef$1 === "undefined") {
  forwardRef$1 = forwardRefShim$1;
}

function joinClassnames() {
  for (var _len = arguments.length, classnames = new Array(_len), _key = 0; _key < _len; _key++) {
    classnames[_key] = arguments[_key];
  }

  return classnames.filter(function (i) {
    return i;
  }).join(" ");
}
/**
 * A <Link> wrapper that knows if it's "active" or not.
 */


var NavLink = forwardRef$1(function (_ref, forwardedRef) {
  var _ref$ariaCurrent = _ref["aria-current"],
      ariaCurrent = _ref$ariaCurrent === void 0 ? "page" : _ref$ariaCurrent,
      _ref$activeClassName = _ref.activeClassName,
      activeClassName = _ref$activeClassName === void 0 ? "active" : _ref$activeClassName,
      activeStyle = _ref.activeStyle,
      classNameProp = _ref.className,
      exact = _ref.exact,
      isActiveProp = _ref.isActive,
      locationProp = _ref.location,
      sensitive = _ref.sensitive,
      strict = _ref.strict,
      styleProp = _ref.style,
      to = _ref.to,
      innerRef = _ref.innerRef,
      rest = _objectWithoutPropertiesLoose$1(_ref, ["aria-current", "activeClassName", "activeStyle", "className", "exact", "isActive", "location", "sensitive", "strict", "style", "to", "innerRef"]);

  return React.createElement(context.Consumer, null, function (context) {
    !context ? process.env.NODE_ENV !== "production" ? invariant(false, "You should not use <NavLink> outside a <Router>") : invariant(false) : void 0;
    var currentLocation = locationProp || context.location;
    var toLocation = normalizeToLocation(resolveToLocation(to, currentLocation), currentLocation);
    var path = toLocation.pathname; // Regex taken from: https://github.com/pillarjs/path-to-regexp/blob/master/index.js#L202

    var escapedPath = path && path.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
    var match = escapedPath ? matchPath(currentLocation.pathname, {
      path: escapedPath,
      exact: exact,
      sensitive: sensitive,
      strict: strict
    }) : null;
    var isActive = !!(isActiveProp ? isActiveProp(match, currentLocation) : match);
    var className = isActive ? joinClassnames(classNameProp, activeClassName) : classNameProp;
    var style = isActive ? _extends$1({}, styleProp, {}, activeStyle) : styleProp;

    var props = _extends$1({
      "aria-current": isActive && ariaCurrent || null,
      className: className,
      style: style,
      to: toLocation
    }, rest); // React 15 compat


    if (forwardRefShim$1 !== forwardRef$1) {
      props.ref = forwardedRef || innerRef;
    } else {
      props.innerRef = innerRef;
    }

    return React.createElement(Link, props);
  });
});

if (process.env.NODE_ENV !== "production") {
  NavLink.displayName = "NavLink";
  var ariaCurrentType = propTypes.oneOf(["page", "step", "location", "date", "time", "true"]);
  NavLink.propTypes = _extends$1({}, Link.propTypes, {
    "aria-current": ariaCurrentType,
    activeClassName: propTypes.string,
    activeStyle: propTypes.object,
    className: propTypes.string,
    exact: propTypes.bool,
    isActive: propTypes.func,
    location: propTypes.object,
    sensitive: propTypes.bool,
    strict: propTypes.bool,
    style: propTypes.object
  });
}

function _templateObject12() {
  var data = _taggedTemplateLiteral(["\n  color: ", ";\n"]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = _taggedTemplateLiteral(["\n  display: inline-flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  text-decoration: none;\n  font-family: Space Grotesk;\n  font-style: normal;\n  font-weight: bolder;\n  color: ", ";\n  font-size: 16px;\n  line-height: 24px;\n"]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\n  text-decoration: none;\n  font-family: Muli;\n  font-style: normal;\n  font-weight: normal;\n  color: ", ";\n  font-size: 16px;\n  line-height: 24px;\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n  text-decoration: none;\n  font-family: Space Grotesk;\n  font-style: medium;\n  font-weight: 500;\n  color: ", ";\n  font-size: 16px;\n  line-height: 24px;\n  :hover {\n    color: ", ";\n  }\n  :active {\n    color: ", ";\n  }\n  :visited {\n    color: ", ";\n  }\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n  text-decoration: none;\n  font-family: Space Grotesk;\n  font-style: medium;\n  font-weight: 500;\n  color: ", ";\n  font-size: 16px;\n  line-height: 24px;\n  :hover {\n    color: ", ";\n  }\n  :active {\n    color: ", ";\n  }\n  :visited {\n    color: ", ";\n  }\n  :focus {\n    color: ", ";\n  }\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  font-family: Muli;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 10px;\n  line-height: 10px;\n  letter-spacing: 1px;\n  text-transform: uppercase;\n  color: ", ";\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  font-family: Space Grotesk;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 14px;\n  line-height: 24px;\n  color: ", ";\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  font-family: Muli;\n  font-style: normal;\n  font-weight: ", ";\n  font-size: 14px;\n  line-height: 16px;\n  color: ", ";\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  font-family: Muli;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 16px;\n  line-height: 24px;\n  color: ", ";\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3$1() {
  var data = _taggedTemplateLiteral(["\n  font-family: Space Grotesk;\n  font-style: normal;\n  font-weight: bold;\n  ", "\n  color: ", ";\n"]);

  _templateObject3$1 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$1() {
  var data = _taggedTemplateLiteral(["\n  font-family: Space Grotesk;\n  font-style: normal;\n  font-weight: bold;\n  ", "\n  color: ", ";\n  ", "\n"]);

  _templateObject2$1 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$1() {
  var data = _taggedTemplateLiteral(["\n  font-family: Space Grotesk;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 48px;\n  line-height: 64px;\n  color: ", ";\n"]);

  _templateObject$1 = function _templateObject() {
    return data;
  };

  return data;
}
var Jumbo = styled.h1(_templateObject$1(), function (props) {
  return props.color ? get(props.theme.colors, props.color, props.theme.colors.darkBlue) : props.theme.colors.darkBlue;
});
var headingSizes = ["\n  font-size: 48px;\n  line-height: 64px;\n  ", "\n  font-size: 32px;\n  line-height: 40px;\n  ", "\n  font-size: 24px;\n  line-height: 32px;\n  ", "\n  font-size: 20px;\n  line-height: 24px;\n  ", "\n  font-size: 18px;\n  line-height: 24px;\n  ", "\n  font-size: 16px;\n  line-height: 24px;\n  "];
var Heading = styled.h2(_templateObject2$1(), function (props) {
  return props.size ? headingSizes[props.size - 1] : headingSizes[0];
}, function (props) {
  return props.color ? get(props.theme.colors, props.color, props.theme.colors.darkBlue) : props.theme.colors.darkBlue;
}, function (props) {
  return props.center && "text-align: center";
});
var SubHeading = styled.h3(_templateObject3$1(), function (props) {
  return props.size ? headingSizes[props.size - 1] : headingSizes[2];
}, function (props) {
  return props.color ? get(props.theme.colors, props.color, props.theme.colors.darkBlue) : props.theme.colors.darkBlue;
});
var Body = styled.p(_templateObject4(), function (props) {
  return props.alt ? props.theme.colors.grey : props.theme.colors.darkBlue;
});
var SmallBody = styled.p(_templateObject5(), function (props) {
  return props.bold ? "bold" : "normal";
}, function (props) {
  return props.color ? get(props.theme.colors, props.color, props.theme.colors.darkBlue) : props.theme.colors.darkBlue;
});
var SmallBodyFAQ = styled.p(_templateObject6(), function (props) {
  return props.theme.colors.grey;
});
var Tiny = styled.h3(_templateObject7(), function (props) {
  return props.color ? get(props.theme.colors, props.color, props.theme.colors.darkBlue) : props.theme.colors.darkBlue;
});
var Link$1 = styled(Link)(_templateObject8(), function (props) {
  return props.color ? get(props.theme.colors, props.color, props.theme.colors.darkBlue) : props.theme.colors.darkBlue;
}, function (props) {
  return props.theme.colors.grey;
}, function (props) {
  return props.color ? get(props.theme.colors, props.color, props.theme.colors.darkBlue) : props.theme.colors.darkBlue;
}, function (props) {
  return props.color ? get(props.theme.colors, props.color, props.theme.colors.darkBlue) : props.theme.colors.darkBlue;
}, function (props) {
  return props.theme.colors.brand.red;
});
var ButtonText = styled.span(_templateObject9(), function (props) {
  return props.color ? get(props.theme.colors, props.color, props.theme.colors.darkBlue) : props.theme.colors.darkBlue;
}, function (props) {
  return props.color ? get(props.theme.colors, props.color, props.theme.colors.darkBlue) : props.theme.colors.darkBlue;
}, function (props) {
  return props.color ? get(props.theme.colors, props.color, props.theme.colors.darkBlue) : props.theme.colors.darkBlue;
}, function (props) {
  return props.color ? get(props.theme.colors, props.color, props.theme.colors.darkBlue) : props.theme.colors.darkBlue;
});
var AlertText = styled.p(_templateObject10(), function (props) {
  return props.theme.colors.red;
});
var AlertTitle = styled.h3(_templateObject11(), function (props) {
  return props.theme.colors.red;
});
var ErrorText = styled(SmallBody)(_templateObject12(), function (props) {
  return props.theme.colors.feedback.error.default;
});

function _templateObject$2() {
  var data = _taggedTemplateLiteral(["\n  height: 24px;\n  display: flex;\n  flex-flow: row nowrap;\n  background-color: ", ";\n  > p {\n    color: ", ";\n    margin: ", "px\n      ", "px;\n  }\n  > svg {\n    vertical-align: middle;\n    margin: auto ", "px;\n    margin-left: 0;\n  }\n"]);

  _templateObject$2 = function _templateObject() {
    return data;
  };

  return data;
}

var getColorFromStatus = function getColorFromStatus(theme, status) {
  return {
    contact: theme.brand.blue,
    received: theme.brand.blue,
    complete: theme.brand.blue,
    closed: theme.brand.blue,
    analysis: theme.brand.yellow,
    awaiting_specialist: theme.brand.yellow,
    awaiting_visit_payment: theme.brand.yellow,
    awaiting_interview: theme.brand.yellow,
    awaiting_payment: theme.brand.yellow,
    awaiting_visit: theme.brand.yellow,
    awaiting_conclusion: theme.feedback.success.default,
    canceled: theme.feedback.error.default,
    rejected: theme.feedback.error.default,
    new_candidate: theme.brand.blue,
    accepted: theme.brand.green
  }[status];
};

var Badge = styled.span(_templateObject$2(), function (props) {
  return props.chip ? props.theme.colors.lightBeige : getColorFromStatus(props.theme.colors, props.status);
}, function (props) {
  return props.chip ? props.theme.colors.darkBlue : props.theme.colors.black;
}, function (props) {
  return props.theme.margin / 4;
}, function (props) {
  return props.theme.margin * 0.75;
}, function (props) {
  return props.theme.margin * 0.75;
});

var Badge$1 = function Badge$1(_ref) {
  var _ref$status = _ref.status,
      status = _ref$status === void 0 ? 'active' : _ref$status,
      category = _ref.category,
      isChip = _ref.isChip,
      onClick = _ref.onClick,
      text = _ref.text,
      translate = _ref.translate;
  return /*#__PURE__*/React.createElement(Badge, {
    onClick: onClick,
    status: category || status,
    chip: isChip
  }, /*#__PURE__*/React.createElement(SmallBody, null, t$1(translate, text)), isChip && /*#__PURE__*/React.createElement(Icon, {
    name: "Close",
    size: 12
  }));
};

Badge$1.propTypes = {
  onClick: propTypes.func,
  translate: propTypes.func,
  status: propTypes.string,
  category: propTypes.string,
  isChip: propTypes.bool,
  text: propTypes.string
};

function _templateObject2$2() {
  var data = _taggedTemplateLiteral(["\n  border-radius: 50%;\n  outline: none;\n  width: 32px;\n  height: 32px;\n  > svg {\n    margin-top: 0 !important;\n  }\n  ", " > * {\n    margin: 0 auto;\n  }\n  &:hover {\n    cursor: pointer;\n  }\n"]);

  _templateObject2$2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$3() {
  var data = _taggedTemplateLiteral(["\n  border-radius: 40px;\n  outline: none;\n  width: ", ";\n  margin-top: ", ";\n  margin-bottom: ", ";\n  padding: ", "px;\n  ", "\n  > * {\n    margin: 0 auto;\n  }\n  &:hover {\n    cursor: pointer;\n  }\n"]);

  _templateObject$3 = function _templateObject() {
    return data;
  };

  return data;
}

var getStyleFromBtnType = function getStyleFromBtnType() {
  var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "primary";
  var theme = arguments.length > 1 ? arguments[1] : undefined;

  switch (type) {
    case "primary":
      return "\n\n        background-color: ".concat(theme.colors.brand.yellow, ";\n        border: transparent;\n        &:hover {\n          background-color: ").concat(theme.colors.brand.lighter, ";\n        }\n      ");

    case "secondary":
      return "\n        background-color: transparent;\n        border: 1px solid ".concat(theme.colors.brand.yellow, ";\n        &:hover {\n          border: transparent;\n          background-color: ").concat(theme.colors.brand.lighter, ";\n        }\n      ");

    case "terceary":
      return "\n        background-color: ".concat(theme.colors.brand.orange, ";\n        border: transparent;\n        &:hover {\n          border: transparent;\n          background-color: ").concat(theme.colors.brand.orangeLight, ";\n        }\n      ");

    case "transparent":
      return "\n        background-color: transparent;\n        border: transparent;\n        > span {\n          color: ".concat(theme.colors.brand.orange, ";\n          &:hover {\n            color: ").concat(theme.colors.brand.orangeDarker, ";\n          }\n        }\n      ");

    case "borded":
      return "\n        border: 1px solid ".concat(theme.colors.brand.yellow, ";\n        box-sizing: border-box;\n        border-radius: 100px;\n        background-color: ").concat(theme.colors.white, ";\n        > span {\n\n          color: ").concat(theme.colors.brand.darkBlue, ";\n          &:hover {\n            color: ").concat(theme.colors.brand.orangeDarker, ";\n          }\n        }\n      ");
  }
};

var Button = styled.button(_templateObject$3(), function (props) {
  return props.fullWidth ? "244px" : "";
}, function (props) {
  return props.fullWidth ? "20px" : "";
}, function (props) {
  return props.fullWidth ? "20px" : "";
}, function (props) {
  return props.small ? props.theme.margin * 0.75 : props.theme.margin;
}, function (props) {
  return getStyleFromBtnType(props.btnType, props.theme);
});
var IconButton = styled.button(_templateObject2$2(), function (props) {
  return getStyleFromBtnType(props.btnType, props.theme);
});

var Button$1 = function Button$1(_ref) {
  var isDisabled = _ref.isDisabled,
      btnType = _ref.btnType,
      text = _ref.text,
      isSmall = _ref.isSmall,
      icon = _ref.icon,
      action = _ref.action,
      type = _ref.type,
      isFullWidth = _ref.isFullWidth,
      children = _ref.children;

  if (text) {
    return /*#__PURE__*/React.createElement(Button, {
      fullWidth: isFullWidth,
      btnType: btnType,
      disabled: isDisabled,
      small: isSmall,
      onClick: action,
      type: type
    }, children, text && /*#__PURE__*/React.createElement(ButtonText, null, text), icon && /*#__PURE__*/React.createElement(Icon, {
      name: icon
    }));
  }

  if (icon) {
    return /*#__PURE__*/React.createElement(IconButton, {
      btnType: btnType,
      disabled: isDisabled,
      small: isSmall,
      onClick: action
    }, /*#__PURE__*/React.createElement(Icon, {
      name: icon
    }));
  }

  return /*#__PURE__*/React.createElement(Button, null);
};

Button$1.propTypes = {
  isDisabled: propTypes.bool,
  action: propTypes.func,
  isSmall: propTypes.bool,
  isFullWidth: propTypes.bool,
  type: propTypes.string,
  text: propTypes.string,
  children: propTypes.oneOfType([propTypes.element, propTypes.array]),
  btnType: propTypes.oneOf(['primary', 'secondary', 'terceary', 'transparent', 'borded']),
  icon: propTypes.string
};
Button$1.defaultProps = {
  type: 'primary'
};

function _templateObject$4() {
  var data = _taggedTemplateLiteral(["\n  border-radius: 16px;\n  padding: ", "px;\n  box-shadow: ", ";\n  background-color: ", ";\n  color: ", ";\n  align-items: ", ";\n  justify-content: ", ";\n  ", "\n"]);

  _templateObject$4 = function _templateObject() {
    return data;
  };

  return data;
}

var getSelectedBackground = function getSelectedBackground(props) {
  switch (props.bg) {
    case "alt":
      return props.theme.colors.lightBeige;

    case "secondary":
      return props.theme.colors.brand.yellow;

    case "terceary":
      return props.theme.colors.brand.lightBlue;

    case "transparent":
      return "transparent";

    default:
      return props.theme.colors.white;
  }
};

var Card = styled.div(_templateObject$4(), function (props) {
  return props.theme.margin * (props.padding || 1);
}, function (props) {
  return props.shadow ? props.theme.boxShadow : 0;
}, function (props) {
  return getSelectedBackground(props);
}, function (props) {
  return props.theme.colors.darkBlue;
}, function (props) {
  return props.align ? "".concat(props.align) : "";
}, function (props) {
  return props.justify ? "".concat(props.justify) : "none";
}, function (props) {
  var _props$customStyle;

  return (_props$customStyle = props === null || props === void 0 ? void 0 : props.customStyle(props)) !== null && _props$customStyle !== void 0 ? _props$customStyle : "";
});

var Card$1 = function Card$1(_ref) {
  var justify = _ref.justify,
      padding = _ref.padding,
      align = _ref.align,
      hasBoxShadow = _ref.hasBoxShadow,
      bg = _ref.bg,
      text = _ref.text,
      customStyle = _ref.customStyle,
      children = _ref.children;
  return /*#__PURE__*/React.createElement(Card, {
    justify: justify,
    align: align,
    boxShadow: hasBoxShadow,
    padding: padding,
    customStyle: customStyle,
    bg: bg,
    text: text
  }, children);
};

Card$1.propTypes = {
  justify: propTypes.string,
  padding: propTypes.number,
  align: propTypes.string,
  customStyle: propTypes.func,
  hasBoxShadow: propTypes.bool,
  bg: propTypes.string,
  children: propTypes.oneOfType([propTypes.element, propTypes.array]),
  text: propTypes.string
};

function _templateObject4$1() {
  var data = _taggedTemplateLiteral(["\n  border-radius: 0 48px 48px 0;\n  outline: none !important;\n  background-color: ", ";\n  border: none;\n  padding: 0 ", "px;\n  flex: 1;\n  > p {\n    margin: ", "px;\n  }\n"]);

  _templateObject4$1 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3$2() {
  var data = _taggedTemplateLiteral(["\n  flex: 3;\n  border-radius: 48px 0 0 48px;\n  color: ", ";\n  padding: 0 ", "px;\n  &:focus {\n    outline: none;\n  }\n  font-family: Muli;\n  font-size: 16px;\n  line-height: 24px;\n  color: ", ";\n  ", "\n"]);

  _templateObject3$2 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$3() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  margin: 12px 0px 0px 8px;\n  \n  svg {\n    height: 20px;\n  }\n"]);

  _templateObject2$3 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$5() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: flex-start;\n  padding: 0;\n  input {\n    border: 1px solid ", ";\n  }\n  position: relative;  \n"]);

  _templateObject$5 = function _templateObject() {
    return data;
  };

  return data;
}
var Container = styled.div(_templateObject$5(), function (props) {
  return props.theme.mediumBeige;
});

var getStylesFromType = function getStylesFromType(theme, type) {
  if (type === "service") {
    return "\n    border-radius: 2px;\n    padding-left: 40px;\n    color: ".concat(theme.colors.mediumBeige, ";\n    position: relative;\n    &:focus {\n      outline: ").concat(theme.colors.darkBlue, ";\n    } \n  ");
  }
};

var SearchIconContainer = styled.div(_templateObject2$3());
var Input = styled.input(_templateObject3$2(), function (props) {
  return props.theme.colors.grey;
}, function (props) {
  return props.theme.margin * 1.5;
}, function (props) {
  return props.theme.grey;
}, function (props) {
  return getStylesFromType(props.theme, props.type);
});
var Button$2 = styled.button(_templateObject4$1(), function (props) {
  return props.theme.colors.brand.yellow;
}, function (props) {
  return props.theme.margin * 1;
}, function (props) {
  return props.theme.margin;
});

var SearchInput = function SearchInput(_ref) {
  var error = _ref.error,
      placeholder = _ref.placeholder,
      defaultValue = _ref.defaultValue,
      label = _ref.label,
      onChange = _ref.onChange,
      _ref$style = _ref.style,
      style = _ref$style === void 0 ? 'main' : _ref$style;

  var _useState = useState(''),
      _useState2 = _slicedToArray(_useState, 2),
      val = _useState2[0],
      setVal = _useState2[1];

  var handleChange = function handleChange(e) {
    setVal(e.target.value);
    onChange(e.target.value);
  }; // const filters = []
  // filters.push(newFilter)


  return /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement(Input, {
    placeholder: placeholder,
    type: style,
    value: val,
    onChange: handleChange
  }), style === 'service' && /*#__PURE__*/React.createElement(SearchIconContainer, null, /*#__PURE__*/React.createElement(Icon, {
    name: "Search"
  })), style === 'main' && /*#__PURE__*/React.createElement(Button$2, null, /*#__PURE__*/React.createElement(Body, null, "Search")));
};

SearchInput.propTypes = {
  error: propTypes.string,
  placeholder: propTypes.string,
  label: propTypes.string,
  defaultValue: propTypes.string,
  style: propTypes.oneOf(['noButton', 'main', 'secondary', 'service']),
  onChange: propTypes.func
};

function _templateObject2$4() {
  var data = _taggedTemplateLiteral(["\n  color: ", ";\n  font-family: Muli;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 16px;\n  line-height: 24px;\n  input {\n    font-family: Muli;\n    font-style: normal;\n    font-weight: normal;\n    font-size: 16px;\n    line-height: 24px;\n  }\n"]);

  _templateObject2$4 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$6() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-flow: column nowrap;\n  justify-content: flex-start;\n  color: ", ";\n  > p {\n    margin: ", "px 0;\n  }\n"]);

  _templateObject$6 = function _templateObject() {
    return data;
  };

  return data;
}
var SelectContainer = styled.div(_templateObject$6(), function (props) {
  return props.error ? props.theme.colors.feedback.error.default : props.theme.colors.darkBlue;
}, function (props) {
  return props.theme.margin / 2;
});
var selectStyles = {
  menu: function menu(provided, state) {
    return _objectSpread2(_objectSpread2({}, provided), {}, {
      width: "100%",
      filter: "drop-shadow(0px 4px 13px rgba(193, 188, 183, 0.3))",
      border: "1px solid ".concat(theme.colors.mediumBeige),
      marginTop: 3,
      borderRadius: 2
    });
  },
  indicatorSeparator: function indicatorSeparator() {
    return {
      display: "none"
    };
  },
  input: function input(provided, _ref) {
    var isFocused = _ref.isFocused;
    return _objectSpread2(_objectSpread2({}, provided), {}, {
      minWidth: "150px"
    });
  },
  control: function control(provided, _ref2) {
    var isFocused = _ref2.isFocused,
        isDisabled = _ref2.isDisabled,
        state = _objectWithoutProperties(_ref2, ["isFocused", "isDisabled"]);

    return _objectSpread2(_objectSpread2({}, provided), {}, {
      borderRadius: 2,
      height: 48,
      backgroundColor: isDisabled ? theme.colors.lightBeige : theme.colors.white,
      color: theme.colors.grey,
      boxShadow: "none",
      borderColor: isFocused ? theme.colors.darkBlue : theme.colors.mediumBeige,
      "&:hover": {
        borderColor: isFocused ? theme.colors.darkBlue : theme.colors.mediumBeige
      }
    });
  },
  option: function option(provided, state) {
    var color = state.isDisabled ? theme.colors.grey : theme.colors.darkBlue;
    var backgroundColor = theme.colors.white;
    var transition = "opacity 300ms";
    return _objectSpread2(_objectSpread2({}, provided), {}, {
      color: color,
      transition: transition,
      backgroundColor: backgroundColor,
      "&:hover": {
        backgroundColor: theme.colors.lightBeige
      }
    });
  }
};
var Select = styled(ReactSelect)(_templateObject2$4(), function (props) {
  return props.error ? props.theme.colors.feedback.error.default : props.theme.colors.mediumBeige;
});

var Select$1 = function Select$1(_ref) {
  var error = _ref.error,
      placeholder = _ref.placeholder,
      _ref$options = _ref.options,
      options = _ref$options === void 0 ? [] : _ref$options,
      label = _ref.label,
      onChange = _ref.onChange,
      isDisabled = _ref.isDisabled,
      defaultValue = _ref.defaultValue;
  // TODO Add different color to placeholder
  return /*#__PURE__*/React.createElement(SelectContainer, {
    error: error
  }, label && /*#__PURE__*/React.createElement(Body, null, label), /*#__PURE__*/React.createElement(Select, {
    onChange: onChange,
    isDisabled: isDisabled,
    styles: selectStyles,
    options: options,
    error: error,
    defaultValue: defaultValue,
    placeholder: placeholder
  }), error && /*#__PURE__*/React.createElement(ErrorText, null, error));
};

Select$1.propTypes = {
  isDisabled: propTypes.bool,
  error: propTypes.string,
  placeholder: propTypes.string,
  options: propTypes.arrayOf(propTypes.shape({
    label: propTypes.string,
    value: propTypes.string
  })),
  label: propTypes.string,
  defaultValue: propTypes.string,
  onChange: propTypes.func
};

function _templateObject5$1() {
  var data = _taggedTemplateLiteral(["\n  border-left: 1px solid ", ";\n  height: 100%;\n  display: flex;\n  align-items: center;\n  padding-left: 10px;\n  margin-left: 10px;\n\n  path {\n    fill: ", ";\n  }\n"]);

  _templateObject5$1 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4$2() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  color: ", ";\n  align-items: center;\n  padding: 10px;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 14px;\n  line-height: 16px;\n\n  path {\n    ", "\n  }\n\n  span {\n    margin-left: 10px;\n  }\n"]);

  _templateObject4$2 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3$3() {
  var data = _taggedTemplateLiteral(["\n  margin-left: 10px;\n"]);

  _templateObject3$3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$5() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  top: 40px;\n  background-color: white;\n  padding: 5px;\n  border: solid 1px ", ";\n  width: 280px;\n"]);

  _templateObject2$5 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$7() {
  var data = _taggedTemplateLiteral(["\n  background-color: ", ";\n  border-radius: 30px;\n  display: flex;\n  height: 40px;\n  width: fit-content;\n  align-items: center;\n  padding: 0px 15px 0px 10px;\n  position: relative;\n\n  svg {\n    height: 16px;\n    width: 16px;\n  }\n"]);

  _templateObject$7 = function _templateObject() {
    return data;
  };

  return data;
}
var StyledFilterButton = styled.div(_templateObject$7(), function (props) {
  return props.theme.colors.lightestBeige;
});
var Dropdown = styled.div(_templateObject2$5(), function (props) {
  return props.theme.colors.mediumBeige;
});

var getIconColor = function getIconColor(filterLabel, theme) {
  if (filterLabel === "service") {
    return "fill: ".concat(theme.colors.darkBlue);
  } else {
    return "fill: ".concat(theme.colors.grey);
  }
};

var FilterLabel = styled.span(_templateObject3$3());
var FilterTitle = styled.div(_templateObject4$2(), function (props) {
  return props.theme.colors.grey;
}, function (props) {
  return getIconColor(props.filterLabel, props.theme);
});
var CloseContainer = styled.div(_templateObject5$1(), function (props) {
  return props.theme.colors.mediumBeige;
}, function (props) {
  return props.theme.colors.feedback.error.default;
});

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

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      showDropdown = _useState2[0],
      setShowDropdown = _useState2[1];

  var options = getFilterOptions(filter);

  var handleOpen = function handleOpen(e) {
    setShowDropdown(!showDropdown);
  };

  return /*#__PURE__*/React.createElement(StyledFilterButton, null, /*#__PURE__*/React.createElement(FilterTitle, {
    filterLabel: filterLabel
  }, /*#__PURE__*/React.createElement(Icon, {
    name: getIconName(filterLabel)
  }), /*#__PURE__*/React.createElement(FilterLabel, null, filterLabel)), /*#__PURE__*/React.createElement(Button$1, {
    onClick: function onClick(e) {
      return handleOpen();
    },
    icon: "chevron-down"
  }), /*#__PURE__*/React.createElement(CloseContainer, {
    onClick: function onClick(e) {
      return onClose(filter);
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "Close"
  })), showDropdown && /*#__PURE__*/React.createElement(Dropdown, {
    length: options.length
  }, /*#__PURE__*/React.createElement(Select$1, {
    options: options,
    onChange: function onChange(e) {
      return _onChange(e, filter);
    }
  })));
};

FilterButton.propTypes = {
  filterType: propTypes.oneOf(['responsible', 'date', 'service', 'status', 'region']),
  filterValue: propTypes.oneOf([propTypes.string, propTypes.object]),
  filterLabel: propTypes.string,
  translate: propTypes.func,
  options: propTypes.array,
  onChange: propTypes.func,
  onClose: propTypes.func // leftIcon: PropTypes.string,
  // rightIcon: PropTypes.string

};
FilterButton.defaultProps = {
  translate: function translate() {
    return console.log('Changed Filters');
  } // leftIcon: "kanban",
  // rightIcon: "List"

};

function _templateObject3$4() {
  var data = _taggedTemplateLiteral(["\n    padding: 10px;\n    ", ";\n\n    path {\n        ", ";\n    }    \n"]);

  _templateObject3$4 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$6() {
  var data = _taggedTemplateLiteral(["\n    padding: 10px;\n    border-right: 1px solid ", ";\n\n    path {\n        ", ";\n    }\n"]);

  _templateObject2$6 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$8() {
  var data = _taggedTemplateLiteral(["\n    background-color: ", ";\n    border-radius: 30px;\n    display: flex;\n    width: 90px;\n    height: 40px;\n"]);

  _templateObject$8 = function _templateObject() {
    return data;
  };

  return data;
}
var StyledSwitch = styled.div(_templateObject$8(), function (props) {
  return props.theme.colors.lightestBeige;
});

var getActive = function getActive(active, theme) {
  var textColor = active ? theme.colors.darkBlue : theme.colors.grey;
  return "fill: ".concat(textColor, ";");
};

var Left = styled.div(_templateObject2$6(), function (props) {
  return props.theme.colors.mediumBeige;
}, function (props) {
  return getActive(props.active, props.theme);
});
var Right = styled.div(_templateObject3$4(), function (props) {
  return getActive(props.active, props.theme);
}, function (props) {
  return getActive(props.active, props.theme);
});

var IconSwitch = function IconSwitch(_ref) {
  var _ref$leftChecked = _ref.leftChecked,
      leftChecked = _ref$leftChecked === void 0 ? true : _ref$leftChecked,
      leftIcon = _ref.leftIcon,
      rightIcon = _ref.rightIcon,
      onChange = _ref.onChange;

  var _useState = useState(leftChecked),
      _useState2 = _slicedToArray(_useState, 2),
      checked = _useState2[0],
      setChecked = _useState2[1];

  var handleChange = function handleChange() {
    // onChange(!checked)
    setChecked(!checked);
    onChange();
  };

  return /*#__PURE__*/React.createElement(StyledSwitch, null, /*#__PURE__*/React.createElement(Left, {
    active: checked,
    onClick: handleChange
  }, /*#__PURE__*/React.createElement(Icon$1, {
    name: leftIcon
  })), /*#__PURE__*/React.createElement(Right, {
    active: !checked,
    onClick: handleChange
  }, /*#__PURE__*/React.createElement(Icon$1, {
    name: rightIcon
  })));
};

IconSwitch.propTypes = {
  leftChecked: propTypes.bool,
  onChange: propTypes.func,
  leftIcon: propTypes.string,
  rightIcon: propTypes.string
};
IconSwitch.defaultProps = {
  leftIcon: "kanban",
  rightIcon: "List"
};

function _templateObject4$3() {
  var data = _taggedTemplateLiteral(["\n    display: flex;\n    flex-wrap: wrap;\n\n    > * {\n        margin: 16px 16px 0px 0px;\n    }\n"]);

  _templateObject4$3 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3$5() {
  var data = _taggedTemplateLiteral(["\n    display: flex;\n\n    > * {\n        margin-right: 32px;\n    }\n"]);

  _templateObject3$5 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$7() {
  var data = _taggedTemplateLiteral(["\n    display: flex;\n    justify-content: space-between;\n\n    \n"]);

  _templateObject2$7 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$9() {
  var data = _taggedTemplateLiteral(["\n    margin-bottom: 32px;\n"]);

  _templateObject$9 = function _templateObject() {
    return data;
  };

  return data;
}
var StyledFilterBar = styled.div(_templateObject$9());
var Header = styled.div(_templateObject2$7());
var Selects = styled.div(_templateObject3$5());
var Filters = styled.div(_templateObject4$3());

var FilterBar = function FilterBar(_ref) {
  var availableFilters = _ref.availableFilters,
      showLayout = _ref.showLayout,
      handleLayoutChange = _ref.handleLayoutChange;

  var _useState = useState([]),
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

  return /*#__PURE__*/React.createElement(StyledFilterBar, null, /*#__PURE__*/React.createElement(Header, null, /*#__PURE__*/React.createElement(Selects, null, /*#__PURE__*/React.createElement(SearchInput, {
    style: "service",
    onChange: handleQuery
  }), /*#__PURE__*/React.createElement(Select$1, {
    placeholder: "Filtros",
    options: availableFilters,
    onChange: handleToggleFilters
  })), showLayout && /*#__PURE__*/React.createElement(IconSwitch, {
    switchType: "layout",
    onChange: handleLayoutChange
  })), /*#__PURE__*/React.createElement(Filters, null, activeFilters && activeFilters.map(function (filter) {
    return /*#__PURE__*/React.createElement(FilterButton, {
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
  availableFilters: propTypes.arrayOf(propTypes.oneOf(['responsible', 'date', 'service', 'status', 'region'])),
  showLayout: propTypes.bool,
  handleLayoutChange: propTypes.func
};
FilterBar.defaultProps = {// leftIcon: "kanban",
  // rightIcon: "List"
};

function _templateObject2$8() {
  var data = _taggedTemplateLiteral(["\n  border-radius: 2px;\n  padding: ", "px ", "px;\n  border: 1px solid\n    ", ";\n  font-family: Muli;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 16px;\n  line-height: 24px;\n  color: ", ";\n  outline: none;\n  &:focus {\n    outline: none;\n    border-radius: 2px;\n    border-color: ", ";\n  }\n  &:disabled {\n    background-color: ", ";\n    color: ", ";\n  },\n"]);

  _templateObject2$8 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$a() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-flow: column nowrap;\n  justify-content: flex-end;\n  & > nav {\n    position: absolute;\n    align-self: flex-end;\n    background-color: white;\n    padding: 8px;\n    margin: 5px;\n  }\n  color: ", ";\n  > p {\n    margin: ", "px 0;\n  }\n"]);

  _templateObject$a = function _templateObject() {
    return data;
  };

  return data;
}
var InputContainer = styled.div(_templateObject$a(), function (props) {
  return props.error ? props.theme.colors.feedback.error.default : props.theme.colors.darkBlue;
}, function (props) {
  return props.theme.margin / 2;
});
var Input$1 = styled.input(_templateObject2$8(), function (props) {
  return props.theme.margin;
}, function (props) {
  return props.theme.margin / 2;
}, function (props) {
  return props.error ? props.theme.colors.feedback.error.default : props.theme.colors.mediumBeige;
}, function (props) {
  return props.theme.colors.darkBlue;
}, function (props) {
  return props.error ? props.theme.colors.feedback.error.default : props.theme.colors.darkBlue;
}, function (props) {
  return props.theme.colors.lightBeige;
}, function (props) {
  return props.theme.colors.grey;
});

var TextInput = function TextInput(_ref) {
  var error = _ref.error,
      placeholder = _ref.placeholder,
      defaultValue = _ref.defaultValue,
      label = _ref.label,
      _onChange = _ref.onChange,
      type = _ref.type,
      hasIcon = _ref.hasIcon;
  var defaultIcons = [{
    name: 'eye-off',
    type: 'password'
  }, {
    name: 'eye-on',
    type: 'text'
  }];

  var _useState = useState(defaultIcons[0].name),
      _useState2 = _slicedToArray(_useState, 2),
      displayedIcon = _useState2[0],
      setDisplayedIcon = _useState2[1];

  var _useState3 = useState(type || 'text'),
      _useState4 = _slicedToArray(_useState3, 2),
      inputType = _useState4[0],
      setInputType = _useState4[1];

  var handleIconChange = function handleIconChange() {
    var newIcon = defaultIcons.find(function (e) {
      return e.name !== displayedIcon;
    });
    setInputType(newIcon.type);
    setDisplayedIcon(newIcon.name);
  };

  return /*#__PURE__*/React.createElement(InputContainer, {
    error: error
  }, hasIcon && /*#__PURE__*/React.createElement("nav", {
    onClickCapture: handleIconChange
  }, /*#__PURE__*/React.createElement(Icon, {
    name: displayedIcon
  })), label && /*#__PURE__*/React.createElement(Body, null, label), /*#__PURE__*/React.createElement(Input$1, {
    type: inputType,
    error: error,
    defaultValue: defaultValue,
    placeholder: placeholder,
    onChange: function onChange(e) {
      return _onChange(e.target.value);
    }
  }), error && /*#__PURE__*/React.createElement(ErrorText, null, error));
};

TextInput.propTypes = {
  error: propTypes.string,
  placeholder: propTypes.string,
  label: propTypes.string,
  defaultValue: propTypes.string,
  onChange: propTypes.func,
  type: propTypes.string,
  hasIcon: propTypes.bool
};

function _templateObject2$9() {
  var data = _taggedTemplateLiteral(["\n  border-radius: 2px;\n  resize: none;\n  padding: ", "px\n    ", "px;\n  border: 1px solid\n    ", ";\n  font-family: Muli;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 16px;\n  line-height: 24px;\n  color: ", ";\n  outline: none;\n  &:focus {\n    outline: none;\n    border-radius: 2px;\n    border-color: ", ";\n  }\n  &:disabled {\n    background-color: ", ";\n    color: ", ";\n  }\n"]);

  _templateObject2$9 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$b() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-flow: column nowrap;\n  justify-content: flex-start;\n  color: ", ";\n  > p {\n    margin: ", "px 0;\n  }\n"]);

  _templateObject$b = function _templateObject() {
    return data;
  };

  return data;
}
var TextAreaContainer = styled.div(_templateObject$b(), function (props) {
  return props.error ? props.theme.colors.feedback.error.default : props.theme.colors.darkBlue;
}, function (props) {
  return props.theme.margin / 2;
});
var TextArea = styled.textarea(_templateObject2$9(), function (props) {
  return props.theme.margin;
}, function (props) {
  return props.theme.margin / 2;
}, function (props) {
  return props.error ? props.theme.colors.feedback.error.default : props.theme.colors.mediumBeige;
}, function (props) {
  return props.theme.colors.darkBlue;
}, function (props) {
  return props.error ? props.theme.colors.feedback.error.default : props.theme.colors.darkBlue;
}, function (props) {
  return props.theme.colors.lightBeige;
}, function (props) {
  return props.theme.colors.grey;
});

var TextArea$1 = function TextArea$1(_ref) {
  var error = _ref.error,
      placeholder = _ref.placeholder,
      defaultValue = _ref.defaultValue,
      label = _ref.label,
      onChange = _ref.onChange;
  return /*#__PURE__*/React.createElement(TextAreaContainer, {
    error: error
  }, label && /*#__PURE__*/React.createElement(Body, null, label), /*#__PURE__*/React.createElement(TextArea, {
    resize: false,
    error: error,
    placeholder: placeholder
  }), error && /*#__PURE__*/React.createElement(ErrorText, null, error));
};

TextArea$1.propTypes = {
  error: propTypes.string,
  placeholder: propTypes.string,
  label: propTypes.string,
  defaultValue: propTypes.string,
  onChange: propTypes.func
};

function _templateObject2$a() {
  var data = _taggedTemplateLiteral(["\n  div {\n    padding: 10px;\n    & > textarea {\n      min-height: 161px;\n    }\n    & > p {\n      text-align: left;\n    }\n  }\n"]);

  _templateObject2$a = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$c() {
  var data = _taggedTemplateLiteral(["\n  background-color: ", ";\n  border-radius: 10px;\n  display: flex;\n  flex-direction: column;\n  padding: 20px;\n  top: ", ";\n  margin 0 auto;\n  max-width: 616px;\n  text-align: center;\n  div {\n    padding: 0;\n  }\n  button {\n    align-self: center;\n    margin-bottom: 20px;\n    margin-top: 30px;\n  }\n"]);

  _templateObject$c = function _templateObject() {
    return data;
  };

  return data;
}

var getSelectedBackground$1 = function getSelectedBackground(props) {
  switch (props.bg) {
    case "alt":
      return props.theme.colors.lightBeige;

    case "secondary":
      return props.theme.colors.brand.yellow;

    case "terceary":
      return props.theme.colors.brand.lightBlue;

    default:
      return props.theme.colors.white;
  }
};

var FormContainer = styled.div(_templateObject$c(), function (props) {
  return getSelectedBackground$1(props);
}, function (props) {
  return props.top ? "-80px" : "0";
});
var StyledForm = styled.form(_templateObject2$a());

var Form = function Form(_ref) {
  var onSubmit = _ref.onSubmit,
      formFields = _ref.formFields,
      top = _ref.top,
      fullWidth = _ref.fullWidth,
      _ref$btnLabel = _ref.btnLabel,
      btnLabel = _ref$btnLabel === void 0 ? 'Inscrever-se' : _ref$btnLabel,
      children = _ref.children,
      bg = _ref.bg;
  var formRef = useRef();
  return /*#__PURE__*/React.createElement(FormContainer, {
    top: top,
    bg: bg
  }, children, /*#__PURE__*/React.createElement(StyledForm, {
    fullWidth: fullWidth,
    ref: formRef,
    onSubmit: onSubmit
  }, formFields && formFields.map(function (field, index) {
    return renderFields(field);
  })), /*#__PURE__*/React.createElement(Button$1, {
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
      return /*#__PURE__*/React.createElement(TextInput, _extends({
        key: field.label
      }, field));

    case 'text-area':
      return /*#__PURE__*/React.createElement(TextArea$1, _extends({
        key: field.label
      }, field));

    default:
      return;
  }
};

Form.propTypes = {
  formFields: propTypes.arrayOf(propTypes.object)
};

function _templateObject7$1() {
  var data = _taggedTemplateLiteral(["\n  flex: ", ";\n  display: flex;\n  flex-flow: column nowrap;\n  align-items: ", ";\n  justify-content: ", ";\n  padding: ", "px;\n  ", "\n  ", "\n  ", "\n"]);

  _templateObject7$1 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6$1() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-flow: row ", ";\n  align-items: ", ";\n  max-width: ", "%;\n  width: 100%;\n  justify-content: ", ";\n  min-height: ", "px;\n  ", "\n  ", "\n"]);

  _templateObject6$1 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5$2() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  max-height: calc(70vh);\n  overflow-x: scroll;\n  overflow-y: hidden;\n  padding-bottom: 40px;\n  transition: height 0.3s ease-out;\n\n  > * {\n    margin-right: 16px;\n  }\n\n  &::-webkit-scrollbar {\n    margin-top: 32px;\n    height: 4px;\n    background-color: ", ";\n  }\n\n  &::-webkit-scrollbar-thumb {\n    margin-top: 30px;\n    background: ", ";\n    border-radius: 30px;\n  }\n"]);

  _templateObject5$2 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4$4() {
  var data = _taggedTemplateLiteral(["\n  margin: 0px 32px;\n"]);

  _templateObject4$4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3$6() {
  var data = _taggedTemplateLiteral(["\n  background-color: ", ";\n  height: 100vh;\n  width: calc(100vw - 240px);\n  margin-left: 240px;\n"]);

  _templateObject3$6 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$b() {
  var data = _taggedTemplateLiteral(["\n  background-color: ", ";\n  min-height: 100vh;\n  display: flex;\n  flex-flow: column nowrap;\n  flex: 1;\n  margin: 0 ", "px;\n\n  &::-webkit-scrollbar {\n    margin-top: 32px;\n    height: 4px;\n    background-color: ", ";\n  }\n\n  &::-webkit-scrollbar-thumb {\n    margin-top: 30px;\n    background: ", ";\n    border-radius: 30px;\n  }\n"]);

  _templateObject2$b = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$d() {
  var data = _taggedTemplateLiteral(["\n  flex-flow: row nowrap;\n  max-width: 60%;\n  > pre {\n    max-height: 30vh;\n    padding: 16px;\n    background-color: ", "ff;\n  }\n"]);

  _templateObject$d = function _templateObject() {
    return data;
  };

  return data;
}
var media = {
  mobile: function mobile(styles) {
    return "\n    @media only screen and (max-width: 375px) {\n      ".concat(styles, "\n    }\n  ");
  },
  tablet: function tablet(styles) {
    return "\n    @media only screen and (max-width: 768px) {\n      ".concat(styles, "\n    }\n  ");
  },
  smallDesktop: function smallDesktop(styles) {
    return "\n    @media only screen and (max-width: 1024px) {\n      ".concat(styles, "\n    }\n  ");
  },
  desktop: function desktop(styles) {
    return "\n    @media only screen and (min-width: 1024px) {\n      ".concat(styles, "\n    }\n  ");
  }
};

var getPageBackground = function getPageBackground(props) {
  switch (props.bg) {
    case "white":
      return props.theme.colors.white;

    case "orange":
      return props.theme.colors.brand.orange;

    default:
      return props.theme.colors.white;
  }
};

var Code = styled.div(_templateObject$d(), function (props) {
  return props.theme.colors.mediumBeige;
});
var Page = styled.div(_templateObject2$b(), function (props) {
  return getPageBackground(props);
}, function (props) {
  return props.theme.margin * 2;
}, function (props) {
  return props.theme.colors.lightestBeige;
}, function (props) {
  return props.theme.colors.darkBlue;
});
var BackofficePage = styled.div(_templateObject3$6(), function (props) {
  return getPageBackground(props);
});
var BackofficeContainer = styled.div(_templateObject4$4());
var BackofficeKanbanContainer = styled.div(_templateObject5$2(), function (props) {
  return props.theme.colors.lightestBeige;
}, function (props) {
  return props.theme.colors.darkBlue;
});
var Row = styled.div(_templateObject6$1(), function (props) {
  return props.noWrap ? "nowrap" : "wrap";
}, function (props) {
  return props.align ? props.align : "none";
}, function (props) {
  return props.theme.maxWidth || 100;
}, function (props) {
  return props.justify ? props.justify : "none";
}, function (props) {
  return props.theme.margin * (props.size || 0);
}, function (props) {
  return props.margin && "\n    ".concat(media.desktop("\n    margin: 0 auto;\n  "), "\n  ").concat(media.smallDesktop("\n    margin: 0 120px;\n  "), "\n  ").concat(media.tablet("\n    margin: 0 48px;\n  "), "\n  ").concat(media.mobile("\n    margin: 0 32px;\n  "), "\n  ") || "margin: 0 auto;";
}, function (props) {
  return props.inlineStyle || "";
});
var Col = styled.div(_templateObject7$1(), function (props) {
  return props.size || 1;
}, function (props) {
  return props.center ? "center" : "flex-start";
}, function (props) {
  return props.justify ? props.justify : "none";
}, function (props) {
  return props.padding || props.theme.margin;
}, function (props) {
  return props.collapse && media[props.collapse]("\n  display: none;\n  ");
}, function (props) {
  return props.center && "margin: 0 auto;";
}, function (props) {
  return props.inlineStyle || "";
});

function _templateObject7$2() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject7$2 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6$2() {
  var data = _taggedTemplateLiteral(["\n  margin: 8px 0px;\n  text-transform: capitalize;\n\n  span {\n    color: ", ";\n  }\n"]);

  _templateObject6$2 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5$3() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  margin-top: 14px;\n  text-transform: capitalize;\n"]);

  _templateObject5$3 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4$5() {
  var data = _taggedTemplateLiteral(["\n  margin-top: 16px;\n  padding-top: 8px;\n  border-top: 1px solid ", ";\n"]);

  _templateObject4$5 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3$7() {
  var data = _taggedTemplateLiteral(["\n  min-height: 32px;\n  min-width: 32px;\n  border-radius: 50%;\n  background-color: ", ";\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-right: 8px;\n\n  svg {\n    width: 14px;\n  }\n"]);

  _templateObject3$7 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$c() {
  var data = _taggedTemplateLiteral(["\n  padding: 0px;\n  margin-bottom: 8px;\n  display: flex;\n  flex-direction: flex-start;\n\n  p {\n    color: white !important;\n  }\n"]);

  _templateObject2$c = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$e() {
  var data = _taggedTemplateLiteral(["\n  width: 260px;\n  border: 1px solid ", ";\n  box-sizing: border-box;\n  border-radius: 4px;\n  padding: 16px 8px 8px;\n  background-color: white;\n  margin-bottom: ", "px;\n"]);

  _templateObject$e = function _templateObject() {
    return data;
  };

  return data;
}
var KanbanCard = styled.div(_templateObject$e(), function (props) {
  return props.theme.colors.mediumBeige;
}, function (props) {
  return props.theme.margin;
});
var BadgeContainer = styled.div(_templateObject2$c());
var IconContainer = styled.div(_templateObject3$7(), function (props) {
  return props.theme.colors.lightBeige;
});
var AdminContainer = styled.div(_templateObject4$5(), function (props) {
  return props.theme.colors.mediumBeige;
});
var Details = styled.div(_templateObject5$3());
var ServiceDetails = styled(SmallBody)(_templateObject6$2(), function (props) {
  return props.theme.colors.grey;
});
var Recurrent = styled.div(_templateObject7$2());

var KanbanCard$1 = function KanbanCard$1(_ref) {
  var cardKey = _ref.cardKey,
      index = _ref.index,
      cardData = _ref.cardData,
      cardType = _ref.cardType,
      translate = _ref.translate;
  return /*#__PURE__*/React.createElement(Draggable, {
    key: cardKey,
    draggableId: cardKey,
    index: index
  }, function (provided, snapshot) {
    var _cardData$provider, _cardData$service, _cardData$provider2, _cardData$provider3, _cardData$provider4, _cardData$provider5, _cardData$admin;

    return /*#__PURE__*/React.createElement(KanbanCard, _extends({
      ref: provided.innerRef
    }, provided.draggableProps, provided.dragHandleProps), /*#__PURE__*/React.createElement(BadgeContainer, null, /*#__PURE__*/React.createElement(Badge$1, {
      text: cardData.status,
      status: cardData.status
    })), /*#__PURE__*/React.createElement(ButtonText, null, cardType === 'candidates' ? (_cardData$provider = cardData.provider) === null || _cardData$provider === void 0 ? void 0 : _cardData$provider.attributes.fullName : (_cardData$service = cardData.service) === null || _cardData$service === void 0 ? void 0 : _cardData$service.attributes.name), cardType === 'candidates' ? /*#__PURE__*/React.createElement("div", null, ((_cardData$provider2 = cardData.provider) === null || _cardData$provider2 === void 0 ? void 0 : _cardData$provider2.attributes.serviceList) && /*#__PURE__*/React.createElement(Details, null, /*#__PURE__*/React.createElement(IconContainer, null, /*#__PURE__*/React.createElement(Icon, {
      name: "tool-1"
    })), /*#__PURE__*/React.createElement(SmallBody, null, (_cardData$provider3 = cardData.provider) === null || _cardData$provider3 === void 0 ? void 0 : _cardData$provider3.attributes.serviceList)), ((_cardData$provider4 = cardData.provider) === null || _cardData$provider4 === void 0 ? void 0 : _cardData$provider4.attributes.district) && /*#__PURE__*/React.createElement(Details, null, /*#__PURE__*/React.createElement(IconContainer, null, /*#__PURE__*/React.createElement(Icon, {
      name: "map-pin"
    })), /*#__PURE__*/React.createElement(SmallBody, null, (_cardData$provider5 = cardData.provider) === null || _cardData$provider5 === void 0 ? void 0 : _cardData$provider5.attributes.district))) : /*#__PURE__*/React.createElement("div", null, cardData.client && /*#__PURE__*/React.createElement(ServiceDetails, null, /*#__PURE__*/React.createElement("span", null, t$1(translate, 'client'), ": "), cardData.client.attributes.fullName), cardData.provider && /*#__PURE__*/React.createElement(ServiceDetails, null, /*#__PURE__*/React.createElement("span", null, t$1(translate, 'specialist'), ": "), cardData.provider.attributes.fullName), cardData.isRecurrent && /*#__PURE__*/React.createElement(Recurrent, null)), cardData.admin && /*#__PURE__*/React.createElement(AdminContainer, null, /*#__PURE__*/React.createElement(Avatar, {
      user: (_cardData$admin = cardData.admin) === null || _cardData$admin === void 0 ? void 0 : _cardData$admin.attributes,
      size: "small",
      hasText: true
    })));
  });
};

KanbanCard$1.propTypes = {
  cardKey: propTypes.string,
  index: propTypes.number,
  cardType: propTypes.oneOf(['requests', 'candidates']),
  translate: propTypes.func,
  cardData: propTypes.shape({
    id: propTypes.string,
    status: propTypes.string,
    isRecurrent: propTypes.bool,
    admin: propTypes.object,
    client: propTypes.object,
    provider: propTypes.object,
    service: propTypes.object
  })
};

function _templateObject4$6() {
  var data = _taggedTemplateLiteral(["\n  path {\n    fill: ", ";\n  }\n"]);

  _templateObject4$6 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3$8() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  position: sticky;\n  top: 0;\n  background-color: ", ";\n  align-items: baseline;\n  justify-content: space-between;\n  width: 85%;\n  padding: 0px 30px;\n\n  h3 {\n    font-size: 16px;\n  }\n"]);

  _templateObject3$8 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$d() {
  var data = _taggedTemplateLiteral(["\n  overflow-y: scroll;\n  &::-webkit-scrollbar {\n    margin-top: 32px;\n    height: 4px;\n    width: 4px;\n    background-color: ", ";\n  }\n\n  &::-webkit-scrollbar-thumb {\n    margin-top: 30px;\n    background: ", ";\n    border-radius: 30px;\n  }\n"]);

  _templateObject2$d = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$f() {
  var data = _taggedTemplateLiteral(["\n  background-color: ", ";\n  border-radius: 4px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 0px 16px 16px 16px;\n  min-width: 260px;\n\n  .items > * {\n    margin-bottom: 16px;\n  }\n"]);

  _templateObject$f = function _templateObject() {
    return data;
  };

  return data;
}
var KanbanColumn = styled.div(_templateObject$f(), function (props) {
  return props.theme.colors.lightestBeige;
});
var ColumnCardsContainer = styled.div(_templateObject2$d(), function (props) {
  return props.theme.colors.lightestBeige;
}, function (props) {
  return props.theme.colors.darkBlue;
});
var Header$1 = styled.div(_templateObject3$8(), function (props) {
  return props.theme.colors.lightestBeige;
});
var IconContainer$1 = styled.div(_templateObject4$6(), function (props) {
  return props.theme.colors.grey;
});

var KanbanColumn$1 = function KanbanColumn$1(_ref) {
  var colName = _ref.colName,
      items = _ref.items,
      kanbanType = _ref.kanbanType,
      data = _ref.data,
      translate = _ref.translate;
  var renderCards = useCallback(function () {
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
      return /*#__PURE__*/React.createElement(KanbanCard$1, {
        key: 'kanbanCard' + item.id,
        cardKey: item.id,
        cardType: kanbanType,
        index: index,
        cardData: cardProps
      });
    });
  }, [data, items, kanbanType]);
  return /*#__PURE__*/React.createElement(Droppable, {
    droppableId: colName,
    key: 'column' + colName
  }, function (provided) {
    return /*#__PURE__*/React.createElement(KanbanColumn, _extends({
      ref: provided.innerRef
    }, provided.droppableProps), /*#__PURE__*/React.createElement(Header$1, null, colName && /*#__PURE__*/React.createElement(SubHeading, null, t$1(translate, colName)), /*#__PURE__*/React.createElement(IconContainer$1, null, /*#__PURE__*/React.createElement(Icon, {
      name: "maximize"
    }))), provided.placeholder, /*#__PURE__*/React.createElement(ColumnCardsContainer, null, renderCards()));
  });
};

KanbanColumn$1.propTypes = {
  items: propTypes.arrayOf(propTypes.object),
  translate: propTypes.func,
  kanbanType: propTypes.oneOf(['requests', 'candidates']),
  colName: propTypes.string,
  data: propTypes.shape({
    admins: propTypes.object,
    providers: propTypes.object,
    clients: propTypes.object,
    services: propTypes.object
  })
};

var Kanban = function Kanban(_ref) {
  var items = _ref.items,
      colNames = _ref.colNames,
      kanbanData = _ref.kanbanData,
      onChangeStatus = _ref.onChangeStatus;

  var _useState = useState({}),
      _useState2 = _slicedToArray(_useState, 2),
      columns = _useState2[0],
      setColumns = _useState2[1];

  useEffect(function () {
    var COLUMNS = {};
    colNames.forEach(function (cn) {
      COLUMNS[cn] = [];
    });
    items.forEach(function (item) {
      if (!COLUMNS[item.column]) {
        return null;
      }

      COLUMNS[item.column].push(item);
    });
    setColumns(COLUMNS);
  }, [colNames, items, kanbanData]);
  var handleChangeColumn = useCallback(function (params) {
    var cardId = params.draggableId;
    var destinationColumn = params.destination.droppableId;
    var sourceColumn = params.source.droppableId;

    if (destinationColumn !== sourceColumn) {
      var COLUMNS = _objectSpread2(_objectSpread2({}, columns), {}, _defineProperty({}, sourceColumn, columns[sourceColumn].filter(function (c) {
        return c.id !== cardId;
      })));

      COLUMNS[destinationColumn] = [items.find(function (itm) {
        return itm.id === cardId;
      })].concat(_toConsumableArray(columns[destinationColumn]));
      setColumns(COLUMNS);

      if (onChangeStatus) {
        onChangeStatus(destinationColumn, cardId);
      }
    }
  }, [columns, items, onChangeStatus]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(DragDropContext, {
    onDragEnd: handleChangeColumn
  }, /*#__PURE__*/React.createElement(BackofficeKanbanContainer, null, columns && Object.keys(columns).map(function (key, index) {
    return /*#__PURE__*/React.createElement(KanbanColumn$1, {
      key: 'kanbanCol' + index,
      colName: key,
      items: columns[key],
      data: kanbanData,
      kanbanType: "requests"
    });
  }))));
};
Kanban.propTypes = {
  items: propTypes.arrayOf(propTypes.shape({
    status: propTypes.string,
    column: propTypes.string
  })),
  kanbanData: propTypes.shape({
    admins: propTypes.object,
    clients: propTypes.object,
    services: propTypes.object
  }),
  colNames: propTypes.arrayOf(propTypes.string),
  onChangeStatus: propTypes.func
};

function _templateObject$g() {
  var data = _taggedTemplateLiteral(["\n  min-width: ", "px;\n  ", "\n  svg {\n    width: ", "px;\n    vertical-align: middle;\n    z-index: 1000;\n  }\n"]);

  _templateObject$g = function _templateObject() {
    return data;
  };

  return data;
}
var Logo = styled.div(_templateObject$g(), function (props) {
  return props.size || 120;
}, function (props) {
  return props.center && "\n      display: flex;\n      flex-flow: row nowrap;\n      justify-content: center;\n  ";
}, function (props) {
  return props.size;
});

var LOGO_MAP = {
  colorful: /*#__PURE__*/React.createElement(ReactComponent, null),
  black: /*#__PURE__*/React.createElement(ReactComponent$1, null),
  white: /*#__PURE__*/React.createElement(ReactComponent$2, null),
  colorfulTag: /*#__PURE__*/React.createElement(ReactComponent$3, null),
  whiteTag: /*#__PURE__*/React.createElement(ReactComponent$4, null),
  blackTag: /*#__PURE__*/React.createElement(ReactComponent$5, null)
};

var Logo$1 = function Logo$1(_ref) {
  var size = _ref.size,
      _ref$isCenter = _ref.isCenter,
      isCenter = _ref$isCenter === void 0 ? true : _ref$isCenter,
      color = _ref.color,
      background = _ref.background;
  return /*#__PURE__*/React.createElement(Logo, {
    center: isCenter,
    size: size
  }, !background ? LOGO_MAP[color] : background);
};

Logo$1.propTypes = {
  size: propTypes.number,
  isCenter: propTypes.bool,
  color: propTypes.string,
  background: propTypes.node
};
Logo$1.defaultProps = {
  size: 120,
  color: 'colorful'
};

function _templateObject$h() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  margin-right: 8px;\n  height: 24px;\n  min-width: 23px;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  letter-spacing: 1px;\n  text-transform: uppercase;\n  box-sizing: border-box;\n  border-radius: 2px;\n  font-size: 12px;\n  ", ";\n\n  &:hover {\n    cursor: pointer;\n  }\n\n  h3 {\n    margin: 0px;\n  }\n\n  svg {\n    height: 24px;\n    width: 24px;\n  }\n"]);

  _templateObject$h = function _templateObject() {
    return data;
  };

  return data;
}

var getActiveStyles = function getActiveStyles(theme, isActive, type) {
  if (isActive) {
    return "\n            border: ".concat(type === "ellipsis" ? "none" : "1px solid " + theme.colors.darkBlue, ";\n            color: ").concat(theme.colors.darkBlue, ";\n        ");
  } else {
    return "\n            border: ".concat(type === "ellipsis" ? "none" : "1px solid " + theme.colors.mediumBeige, ";\n            h3 {\n                color: ").concat(theme.colors.mediumBeige, ";\n            }\n        ");
  }
};

var StyledTracker = styled.div(_templateObject$h(), function (props) {
  return getActiveStyles(props.theme, props.isActive, props.type);
});

var TrackerBox = function TrackerBox(_ref) {
  var text = _ref.text,
      currentPage = _ref.currentPage,
      totalPages = _ref.totalPages,
      iconName = _ref.iconName,
      isActive = _ref.isActive,
      boxType = _ref.boxType,
      action = _ref.action;

  var handleClick = function handleClick() {
    switch (boxType) {
      case 'last':
        if (currentPage > 1) {
          action(currentPage - 1);
        }

        break;

      case 'ellipsis':
        break;

      case 'next':
        if (currentPage !== totalPages) {
          action(currentPage + 1);
        }

        break;

      default:
        action(text);
        break;
    }
  };

  return /*#__PURE__*/React.createElement(StyledTracker, {
    isActive: isActive,
    onClick: function onClick(e) {
      return handleClick();
    },
    type: boxType
  }, text ? /*#__PURE__*/React.createElement(Tiny, null, text) : /*#__PURE__*/React.createElement(Icon, {
    name: iconName
  }));
};

TrackerBox.propTypes = {
  text: propTypes.string,
  iconName: propTypes.string,
  isActive: propTypes.bool,
  currentPage: propTypes.number,
  totalPage: propTypes.number,
  boxType: propTypes.oneOf(['single', 'ellipsis', 'last', 'next']),
  action: propTypes.func
};

function _templateObject3$9() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n"]);

  _templateObject3$9 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$e() {
  var data = _taggedTemplateLiteral(["\n  p {\n    color: ", ";\n  }\n"]);

  _templateObject2$e = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$i() {
  var data = _taggedTemplateLiteral(["\n  margin: 24px 0px 32px;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n"]);

  _templateObject$i = function _templateObject() {
    return data;
  };

  return data;
}
var StyledPagination = styled.div(_templateObject$i());
var Left$1 = styled.div(_templateObject2$e(), function (props) {
  return props.theme.colors.grey;
});
var Right$1 = styled.div(_templateObject3$9());

var Pagination = function Pagination(_ref) {
  var totalPages = _ref.totalPages,
      currentPage = _ref.currentPage,
      action = _ref.action,
      translate = _ref.translate;

  var getBoxes = function getBoxes(currentPage, totalPages) {
    if (totalPages >= 4) {
      if (currentPage === 1 || currentPage === totalPages || currentPage === totalPages - 1) {
        return [1, 2, totalPages - 1, totalPages];
      } else {
        return [currentPage - 1, currentPage, totalPages - 1, totalPages];
      }
    } else {
      switch (totalPages) {
        case 3:
          return [1, 2, totalPages];

        case 2:
          return [1, totalPages];

        default:
          return [totalPages];
      }
    }
  };

  var pageNumberAry = getBoxes(currentPage, totalPages);
  return /*#__PURE__*/React.createElement(StyledPagination, null, /*#__PURE__*/React.createElement(Left$1, null, /*#__PURE__*/React.createElement(SmallBody, {
    bold: true
  }, t$1(translate, 'page'), " ", currentPage, " ", t$1(translate, 'of'), " ", totalPages)), /*#__PURE__*/React.createElement(Right$1, null, /*#__PURE__*/React.createElement(TrackerBox, {
    iconName: "chevron-left",
    boxType: "last",
    currentPage: currentPage,
    totalPages: totalPages,
    action: action
  }), pageNumberAry && pageNumberAry.map(function (num, index) {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(TrackerBox, {
      text: num,
      isActive: num === currentPage,
      currentPage: currentPage,
      action: action
    }), index === 1 && pageNumberAry.length >= 4 && /*#__PURE__*/React.createElement(TrackerBox, {
      text: "...",
      boxType: "ellipsis"
    }));
  }), /*#__PURE__*/React.createElement(TrackerBox, {
    iconName: "chevron-right",
    boxType: "next",
    currentPage: currentPage,
    totalPages: totalPages,
    action: action
  })));
};

Pagination.propTypes = {
  totalPages: propTypes.string,
  currentPage: propTypes.string,
  action: propTypes.func
};

function _templateObject5$4() {
  var data = _taggedTemplateLiteral(["\n  padding: 0px 30px;\n  height: 40px;\n  display: flex;\n  align-items: center;\n\n  color: ", ";\n  ", "\n"]);

  _templateObject5$4 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4$7() {
  var data = _taggedTemplateLiteral(["\n  padding: 0px 30px;\n  height: 40px;\n  display: flex;\n  align-items: center;\n  color: ", ";\n  &:visited {\n    color: ", ";\n  }\n  ", ";\n"]);

  _templateObject4$7 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3$a() {
  var data = _taggedTemplateLiteral(["\n  margin-bottom: ", "px;\n  button {\n    transition: all 0.5s;\n    svg {\n      transition: all 0.5s;\n      transform: ", ";\n      > path {\n        fill: ", ";\n      }\n    }\n    ", "\n  }\n"]);

  _templateObject3$a = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$f() {
  var data = _taggedTemplateLiteral(["\n  text-transform: uppercase;\n  margin-top: ", ";\n  color: ", ";\n"]);

  _templateObject2$f = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$j() {
  var data = _taggedTemplateLiteral(["\n  background-color: ", ";\n  color: white;\n  transition: width 0.5s linear;\n  width: ", ";\n  height: 100vh;\n  svg {\n    margin-top: ", "px;\n  }\n  > div {\n    transition: all 0.5s linear;\n\n    ", "\n  }\n"]);

  _templateObject$j = function _templateObject() {
    return data;
  };

  return data;
}
var StyledSidebar = styled.div(_templateObject$j(), function (props) {
  return props.theme.colors.brand.orange;
}, function (props) {
  return props.open ? '240px' : '45px';
}, function (props) {
  return props.theme.margin;
}, function (props) {
  return !props.open ? "\n    position: fixed;\n    left: -240px;\n  " : "\n    position: fixed;\n    left: 0px;";
});
var NavHeader = styled(Tiny)(_templateObject2$f(), function (props) {
  return props.theme.margin * 2;
}, function (props) {
  return props.theme.colors.white;
});
var NavSection = styled.div(_templateObject3$a(), function (props) {
  return props.theme.margin * 2;
}, function (props) {
  return props.open ? 'rotate(180deg)' : 'rotate(0deg)';
}, function (props) {
  return props.theme.colors.white;
}, function (props) {
  return !props.open ? "\n    position: fixed;\n    top: 64px;\n    left: 8px;\n  " : "\n    position: fixed;\n    top: 64px;\n    left: ".concat(240 - 16, "px;\n    ");
});

var getActiveLinkStyle = function getActiveLinkStyle(theme, active) {
  if (!active) {
    return "\n      background-color: none;\n      border-left: solid 2px transparent;\n      ";
  } else {
    return "\n      background-color: ".concat(theme.colors.brand.orangeLight, ";\n      border-left: solid 2px white;\n      ");
  }
};

var NavLink$1 = styled(Link$1)(_templateObject4$7(), function (props) {
  return props.theme.colors.white;
}, function (props) {
  return props.theme.colors.white;
}, function (props) {
  return getActiveLinkStyle(props.theme, props.disabled);
});
var NavText = styled(ButtonText)(_templateObject5$4(), function (props) {
  return props.theme.colors.white;
}, function (props) {
  return getActiveLinkStyle(props.theme, props.disabled);
});

var Sidebar = function Sidebar(_ref) {
  var sidebarSections = _ref.sidebarSections,
      translate = _ref.translate,
      isOpenable = _ref.isOpenable;

  var _useState = useState(true),
      _useState2 = _slicedToArray(_useState, 2),
      isOpen = _useState2[0],
      setIsOpen = _useState2[1]; // eslint-disable-next-line react/prop-types


  var SidebarLink = function SidebarLink(_ref2) {
    var route = _ref2.route,
        text = _ref2.text,
        disabled = _ref2.disabled,
        disabledIcon = _ref2.disabledIcon;
    return route && !disabled ? /*#__PURE__*/React.createElement(NavLink$1, {
      to: route,
      active: disabled
    }, text) : /*#__PURE__*/React.createElement(NavText, {
      disabled: disabled
    }, text, " ", disabledIcon || '');
  };

  return /*#__PURE__*/React.createElement(StyledSidebar, {
    open: isOpen
  }, /*#__PURE__*/React.createElement(Col, null, /*#__PURE__*/React.createElement(NavSection, {
    open: isOpen
  }, /*#__PURE__*/React.createElement(Row, {
    align: "center"
  }, /*#__PURE__*/React.createElement(Col, null, /*#__PURE__*/React.createElement(SubHeading, {
    color: "lightestBeige"
  }, "55+ UI Kit"), /*#__PURE__*/React.createElement(NavHeader, null, "by Gaspard+Bruno")), isOpenable && /*#__PURE__*/React.createElement(Button$1, {
    open: isOpen,
    icon: "arrow-left",
    action: function action() {
      return setIsOpen(!isOpen);
    },
    btnType: 'terceary'
  }))), /*#__PURE__*/React.createElement(SidebarLink, {
    route: '/',
    text: "Home"
  }), Object.keys(sidebarSections).map(function (s) {
    var section = sidebarSections[s];
    return /*#__PURE__*/React.createElement(NavSection, {
      key: 'section-' + section.title
    }, /*#__PURE__*/React.createElement(NavHeader, null, t$1(translate, section.title)), section.items.map(function (item) {
      return /*#__PURE__*/React.createElement(SidebarLink, {
        key: 'sidebar-' + item.label,
        route: item.route,
        text: t$1(translate, item.label),
        disabled: item.disabled,
        disabledIcon: "\uD83D\uDEA7"
      });
    }));
  })));
};

Sidebar.propTypes = {
  isOpenable: propTypes.bool,
  translate: propTypes.func,
  sidebarSections: propTypes.arrayOf({
    title: propTypes.string,
    items: propTypes.arrayOf({
      text: propTypes.string,
      route: propTypes.string,
      disabled: propTypes.bool
    })
  })
};
Sidebar.defaultProps = {
  sidebarSections: []
};

function _templateObject$k() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  font-weight: normal;\n  border-bottom: 1px solid ", ";\n\n  .service {\n    font-weight: 500;\n    font-size: 16px;\n    line-height: 24px;\n    color: ", ";\n  }\n"]);

  _templateObject$k = function _templateObject() {
    return data;
  };

  return data;
}
var StyledTableRow = styled.div(_templateObject$k(), function (props) {
  return props.theme.colors.mediumBeige;
}, function (props) {
  return props.theme.colors.brand.orange;
});

var getRowDetails = function getRowDetails(tableType) {
  var item = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  if (item === null) item = {
    javascript: 'is stupid'
  };
  var tableTypes = {
    archive: [{
      size: 2,
      header: 'serviceType',
      content: /*#__PURE__*/React.createElement("span", {
        className: "service"
      }, item.serviceName)
    }, {
      size: 2,
      header: 'client',
      content: /*#__PURE__*/React.createElement(Avatar, {
        size: "small",
        hasText: true,
        user: item.client
      })
    }, {
      size: 2,
      header: 'specialist',
      content: /*#__PURE__*/React.createElement(Avatar, {
        size: "small",
        hasText: true,
        user: item.provider
      })
    }, {
      size: 2,
      header: 'date',
      content: /*#__PURE__*/React.createElement(React.Fragment, null, item.deliveryDate)
    }, {
      size: 2,
      header: 'totalHours',
      content: /*#__PURE__*/React.createElement(React.Fragment, null, item.totalHours, " Horas")
    }, {
      size: 2,
      header: 'totalPrice',
      content: /*#__PURE__*/React.createElement(React.Fragment, null, item.totalPrice, "\u20AC")
    }],
    specialists: [{
      size: 3,
      header: 'name',
      content: /*#__PURE__*/React.createElement(Avatar, {
        size: "small",
        hasText: true,
        user: item.provider
      })
    }, {
      size: 3,
      header: 'service',
      content: /*#__PURE__*/React.createElement(React.Fragment, null, item.serviceName)
    }, {
      size: 2,
      header: 'totalRequests',
      content: /*#__PURE__*/React.createElement(React.Fragment, null, item.totalRequests)
    }, {
      size: 2,
      header: 'totalHours',
      content: /*#__PURE__*/React.createElement(React.Fragment, null, item.totalHours, " Horas")
    }, {
      size: 2,
      header: 'rating',
      content: /*#__PURE__*/React.createElement(React.Fragment, null, "sttarrrrs")
    }],
    clients: [{
      size: 9,
      header: 'name',
      content: /*#__PURE__*/React.createElement(Avatar, {
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
  return /*#__PURE__*/React.createElement(StyledTableRow, null, cols && cols.map(function (col, i) {
    return /*#__PURE__*/React.createElement(Col, {
      key: i + 'row',
      size: col.size
    }, col.content);
  }));
};

function _templateObject2$g() {
  var data = _taggedTemplateLiteral(["\n  border-radius: 2px;\n  background-color: ", ";\n  height: 48px;\n  width: 100%;\n  display: flex;\n  font-weight: bold;\n"]);

  _templateObject2$g = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$l() {
  var data = _taggedTemplateLiteral(["\n  font-size: 14px;\n  line-height: 16px;\n  color: ", ";\n"]);

  _templateObject$l = function _templateObject() {
    return data;
  };

  return data;
}
var StyledTable = styled.div(_templateObject$l(), function (props) {
  return props.theme.colors.darkBlue;
});
var Header$2 = styled.div(_templateObject2$g(), function (props) {
  return props.theme.colors.lightestBeige;
});

var getRowDetails$1 = function getRowDetails(tableType) {
  var item = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  if (item === null) item = {
    javascript: 'is stupid'
  };
  var tableTypes = {
    archive: [{
      size: 2,
      header: 'serviceType',
      content: /*#__PURE__*/React.createElement("span", {
        className: "service"
      }, item.serviceName)
    }, {
      size: 2,
      header: 'client',
      content: /*#__PURE__*/React.createElement(Avatar, {
        size: "small",
        hasText: true,
        user: item.client
      })
    }, {
      size: 2,
      header: 'specialist',
      content: /*#__PURE__*/React.createElement(Avatar, {
        size: "small",
        hasText: true,
        user: item.provider
      })
    }, {
      size: 2,
      header: 'date',
      content: /*#__PURE__*/React.createElement(React.Fragment, null, item.deliveryDate)
    }, {
      size: 2,
      header: 'totalHours',
      content: /*#__PURE__*/React.createElement(React.Fragment, null, item.totalHours, " Horas")
    }, {
      size: 2,
      header: 'totalPrice',
      content: /*#__PURE__*/React.createElement(React.Fragment, null, item.totalPrice, "\u20AC")
    }],
    specialists: [{
      size: 3,
      header: 'name',
      content: /*#__PURE__*/React.createElement(Avatar, {
        size: "small",
        hasText: true,
        user: item.provider
      })
    }, {
      size: 3,
      header: 'service',
      content: /*#__PURE__*/React.createElement(React.Fragment, null, item.serviceName)
    }, {
      size: 2,
      header: 'totalRequests',
      content: /*#__PURE__*/React.createElement(React.Fragment, null, item.totalRequests)
    }, {
      size: 2,
      header: 'totalHours',
      content: /*#__PURE__*/React.createElement(React.Fragment, null, item.totalHours, " Horas")
    }, {
      size: 2,
      header: 'rating',
      content: /*#__PURE__*/React.createElement(React.Fragment, null, "sttarrrrs")
    }],
    clients: [{
      size: 9,
      header: 'name',
      content: /*#__PURE__*/React.createElement(Avatar, {
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
  var cols = getRowDetails$1(tableType);
  return /*#__PURE__*/React.createElement(StyledTable, null, /*#__PURE__*/React.createElement(Header$2, null, cols && cols.map(function (col, i) {
    return /*#__PURE__*/React.createElement(Col, {
      key: 'header row' + i,
      size: col.size
    }, col.header);
  })), items && items.map(function (item, i) {
    return /*#__PURE__*/React.createElement(TableRow, {
      key: 'header row' + i,
      tableType: tableType,
      item: item
    });
  }));
};

function _templateObject3$b() {
  var data = _taggedTemplateLiteral(["\n  border-radius: 4px;\n  padding: ", "px;\n  margin: ", "px;\n  outline: none;\n  border: none;\n  background-color: ", ";\n  margin-bottom: ", "px;\n  transition: all 0.25s;\n  > * {\n    color: ", ";\n    &:hover {\n      color: ", ";\n    }\n  }\n"]);

  _templateObject3$b = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$h() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  width: 100%;\n  flex-flow: row nowrap;\n  justify-content: ", ";\n"]);

  _templateObject2$h = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$m() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  display: flex;\n  flex-flow: column nowrap;\n  justify-content: flex-start;\n"]);

  _templateObject$m = function _templateObject() {
    return data;
  };

  return data;
}
var TabContainer = styled.div(_templateObject$m());
var TabGroup = styled.div(_templateObject2$h(), function (props) {
  return props.justify ? props.justify : "flex-start";
});
var TabButton = styled.button(_templateObject3$b(), function (props) {
  return props.theme.margin / 1.5;
}, function (props) {
  return props.theme.margin;
}, function (props) {
  return props.isSelected ? props.theme.colors.brand.orange : props.theme.colors.white;
}, function (props) {
  return props.theme.margin;
}, function (props) {
  return props.isSelected ? props.theme.colors.white : props.theme.colors.darkBlue;
}, function (props) {
  return props.isSelected ? props.theme.colors.white : props.theme.colors.darkBlue;
});

var Tabs = function Tabs(_ref) {
  var justify = _ref.justify,
      tabs = _ref.tabs,
      initialTabIndex = _ref.initialTabIndex;

  var _useState = useState(initialTabIndex),
      _useState2 = _slicedToArray(_useState, 2),
      selectedTab = _useState2[0],
      setSelectedTab = _useState2[1];

  return /*#__PURE__*/React.createElement(TabContainer, null, /*#__PURE__*/React.createElement(TabGroup, {
    justify: justify
  }, tabs && tabs.length ? tabs.map(function (tab, i) {
    return /*#__PURE__*/React.createElement(TabButton, {
      isSelected: i === selectedTab,
      onClick: function onClick() {
        return setSelectedTab(i);
      },
      key: tabs + tab.name + i
    }, /*#__PURE__*/React.createElement(ButtonText, null, tab.name));
  }) : ''), tabs && tabs[selectedTab] && tabs[selectedTab].children());
};

Tabs.propTypes = {
  justify: propTypes.string,
  initialTabIndex: propTypes.number,
  tabs: propTypes.arrayOf(propTypes.shape({
    name: propTypes.string,
    children: propTypes.function
  }))
};
Tabs.defaultProps = {
  type: 'primary'
};

function _templateObject3$c() {
  var data = _taggedTemplateLiteral(["\n    display: flex;\n    align-items: center;\n\n    svg {\n        margin-right: 26px;\n    }\n"]);

  _templateObject3$c = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$i() {
  var data = _taggedTemplateLiteral(["\n    display: flex;\n    align-items: center;\n    padding-left: 32px;\n\n    svg {\n        margin-right: 24px;\n    }\n\n    p {\n        font-weight: bold;\n        font-size: 24px;\n        line-height: 32px;\n        margin: 0px;\n    }\n\n    span {\n        font-weight: bold;\n        font-size: 12px;\n        line-height: 10px;\n        letter-spacing: 1px;\n        text-transform: uppercase;\n        color: ", ";\n    }\n"]);

  _templateObject2$i = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$n() {
  var data = _taggedTemplateLiteral(["\n    height: 80px;\n    display: flex;\n    justify-content: space-between;\n    margin-bottom: 24px;\n    padding-bottom: 10px;\n    -webkit-box-shadow: 0px 2px 2px 0px rgba(113, 109, 106, 0.05);\n    -moz-box-shadow:    0px 2px 2px 0px rgba(113, 109, 106, 0.05);\n    box-shadow:         0px 2px 2px 0px rgba(113, 109, 106, 0.05);\n"]);

  _templateObject$n = function _templateObject() {
    return data;
  };

  return data;
}
var StyledTopBar = styled.div(_templateObject$n());
var LeftSection = styled.div(_templateObject2$i(), function (props) {
  return props.theme.colors.grey;
});
var RightSection = styled.div(_templateObject3$c());

var TopBar = function TopBar(_ref) {
  var location = _ref.location,
      title = _ref.title,
      back = _ref.back,
      user = _ref.user;
  var history = useHistory();
  return /*#__PURE__*/React.createElement(StyledTopBar, null, /*#__PURE__*/React.createElement(LeftSection, null, back && /*#__PURE__*/React.createElement(Link$1, null, /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-left"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("span", null, location)), /*#__PURE__*/React.createElement("p", null, title))), /*#__PURE__*/React.createElement(RightSection, null, /*#__PURE__*/React.createElement(Icon, {
    name: "Bell"
  }), /*#__PURE__*/React.createElement(Avatar, {
    size: "medium",
    hasCarat: true,
    hasText: true,
    user: user
  })));
};

export { AlertText, AlertTitle, Avatar, BackofficeContainer, BackofficeKanbanContainer, BackofficePage, Badge$1 as Badge, Body, Button$1 as Button, ButtonText, Card$1 as Card, Code, Col, ErrorText, FilterBar, FilterButton, Form, Heading, Icon, IconSwitch, Jumbo, Kanban, KanbanCard$1 as KanbanCard, KanbanColumn$1 as KanbanColumn, Link$1 as Link, Logo$1 as Logo, Page, Pagination, Row, SearchInput as Search, Select$1 as Select, Sidebar, SmallBody, SmallBodyFAQ, SubHeading, Table, Tabs, TextArea$1 as TextArea, Tiny, TopBar, TrackerBox, media };
