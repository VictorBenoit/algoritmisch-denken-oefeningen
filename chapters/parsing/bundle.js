/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/algo-testing-framework/dist/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/algo-testing-framework/dist/index.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/***/ }),

/***/ "./node_modules/fbjs/lib/emptyFunction.js":
/*!************************************************!*\
  !*** ./node_modules/fbjs/lib/emptyFunction.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/**\n * Copyright (c) 2013-present, Facebook, Inc.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n *\n * \n */\n\nfunction makeEmptyFunction(arg) {\n  return function () {\n    return arg;\n  };\n}\n\n/**\n * This function accepts and discards inputs; it has no side effects. This is\n * primarily useful idiomatically for overridable function endpoints which\n * always need to be callable, since JS lacks a null-call idiom ala Cocoa.\n */\nvar emptyFunction = function emptyFunction() {};\n\nemptyFunction.thatReturns = makeEmptyFunction;\nemptyFunction.thatReturnsFalse = makeEmptyFunction(false);\nemptyFunction.thatReturnsTrue = makeEmptyFunction(true);\nemptyFunction.thatReturnsNull = makeEmptyFunction(null);\nemptyFunction.thatReturnsThis = function () {\n  return this;\n};\nemptyFunction.thatReturnsArgument = function (arg) {\n  return arg;\n};\n\nmodule.exports = emptyFunction;\n\n//# sourceURL=webpack:///./node_modules/fbjs/lib/emptyFunction.js?");

/***/ }),

/***/ "./node_modules/fbjs/lib/emptyObject.js":
/*!**********************************************!*\
  !*** ./node_modules/fbjs/lib/emptyObject.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/**\n * Copyright (c) 2013-present, Facebook, Inc.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n *\n */\n\n\n\nvar emptyObject = {};\n\nif (true) {\n  Object.freeze(emptyObject);\n}\n\nmodule.exports = emptyObject;\n\n//# sourceURL=webpack:///./node_modules/fbjs/lib/emptyObject.js?");

/***/ }),

/***/ "./node_modules/fbjs/lib/invariant.js":
/*!********************************************!*\
  !*** ./node_modules/fbjs/lib/invariant.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/**\n * Copyright (c) 2013-present, Facebook, Inc.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n *\n */\n\n\n\n/**\n * Use invariant() to assert state which your program assumes to be true.\n *\n * Provide sprintf-style format (only %s is supported) and arguments\n * to provide information about what broke and what you were\n * expecting.\n *\n * The invariant message will be stripped in production, but the invariant\n * will remain to ensure logic does not differ in production.\n */\n\nvar validateFormat = function validateFormat(format) {};\n\nif (true) {\n  validateFormat = function validateFormat(format) {\n    if (format === undefined) {\n      throw new Error('invariant requires an error message argument');\n    }\n  };\n}\n\nfunction invariant(condition, format, a, b, c, d, e, f) {\n  validateFormat(format);\n\n  if (!condition) {\n    var error;\n    if (format === undefined) {\n      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');\n    } else {\n      var args = [a, b, c, d, e, f];\n      var argIndex = 0;\n      error = new Error(format.replace(/%s/g, function () {\n        return args[argIndex++];\n      }));\n      error.name = 'Invariant Violation';\n    }\n\n    error.framesToPop = 1; // we don't care about invariant's own frame\n    throw error;\n  }\n}\n\nmodule.exports = invariant;\n\n//# sourceURL=webpack:///./node_modules/fbjs/lib/invariant.js?");

/***/ }),

/***/ "./node_modules/fbjs/lib/warning.js":
/*!******************************************!*\
  !*** ./node_modules/fbjs/lib/warning.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/**\n * Copyright (c) 2014-present, Facebook, Inc.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n *\n */\n\n\n\nvar emptyFunction = __webpack_require__(/*! ./emptyFunction */ \"./node_modules/fbjs/lib/emptyFunction.js\");\n\n/**\n * Similar to invariant but only logs a warning if the condition is not met.\n * This can be used to log issues in development environments in critical\n * paths. Removing the logging code for production environments will keep the\n * same logic and follow the same code paths.\n */\n\nvar warning = emptyFunction;\n\nif (true) {\n  var printWarning = function printWarning(format) {\n    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {\n      args[_key - 1] = arguments[_key];\n    }\n\n    var argIndex = 0;\n    var message = 'Warning: ' + format.replace(/%s/g, function () {\n      return args[argIndex++];\n    });\n    if (typeof console !== 'undefined') {\n      console.error(message);\n    }\n    try {\n      // --- Welcome to debugging React ---\n      // This error was thrown as a convenience so that you can use this stack\n      // to find the callsite that caused this warning to fire.\n      throw new Error(message);\n    } catch (x) {}\n  };\n\n  warning = function warning(condition, format) {\n    if (format === undefined) {\n      throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');\n    }\n\n    if (format.indexOf('Failed Composite propType: ') === 0) {\n      return; // Ignore CompositeComponent proptype check.\n    }\n\n    if (!condition) {\n      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {\n        args[_key2 - 2] = arguments[_key2];\n      }\n\n      printWarning.apply(undefined, [format].concat(args));\n    }\n  };\n}\n\nmodule.exports = warning;\n\n//# sourceURL=webpack:///./node_modules/fbjs/lib/warning.js?");

/***/ }),

/***/ "./node_modules/object-assign/index.js":
/*!*********************************************!*\
  !*** ./node_modules/object-assign/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/*\nobject-assign\n(c) Sindre Sorhus\n@license MIT\n*/\n\n\n/* eslint-disable no-unused-vars */\nvar getOwnPropertySymbols = Object.getOwnPropertySymbols;\nvar hasOwnProperty = Object.prototype.hasOwnProperty;\nvar propIsEnumerable = Object.prototype.propertyIsEnumerable;\n\nfunction toObject(val) {\n\tif (val === null || val === undefined) {\n\t\tthrow new TypeError('Object.assign cannot be called with null or undefined');\n\t}\n\n\treturn Object(val);\n}\n\nfunction shouldUseNative() {\n\ttry {\n\t\tif (!Object.assign) {\n\t\t\treturn false;\n\t\t}\n\n\t\t// Detect buggy property enumeration order in older V8 versions.\n\n\t\t// https://bugs.chromium.org/p/v8/issues/detail?id=4118\n\t\tvar test1 = new String('abc');  // eslint-disable-line no-new-wrappers\n\t\ttest1[5] = 'de';\n\t\tif (Object.getOwnPropertyNames(test1)[0] === '5') {\n\t\t\treturn false;\n\t\t}\n\n\t\t// https://bugs.chromium.org/p/v8/issues/detail?id=3056\n\t\tvar test2 = {};\n\t\tfor (var i = 0; i < 10; i++) {\n\t\t\ttest2['_' + String.fromCharCode(i)] = i;\n\t\t}\n\t\tvar order2 = Object.getOwnPropertyNames(test2).map(function (n) {\n\t\t\treturn test2[n];\n\t\t});\n\t\tif (order2.join('') !== '0123456789') {\n\t\t\treturn false;\n\t\t}\n\n\t\t// https://bugs.chromium.org/p/v8/issues/detail?id=3056\n\t\tvar test3 = {};\n\t\t'abcdefghijklmnopqrst'.split('').forEach(function (letter) {\n\t\t\ttest3[letter] = letter;\n\t\t});\n\t\tif (Object.keys(Object.assign({}, test3)).join('') !==\n\t\t\t\t'abcdefghijklmnopqrst') {\n\t\t\treturn false;\n\t\t}\n\n\t\treturn true;\n\t} catch (err) {\n\t\t// We don't expect any of the above to throw, but better to be safe.\n\t\treturn false;\n\t}\n}\n\nmodule.exports = shouldUseNative() ? Object.assign : function (target, source) {\n\tvar from;\n\tvar to = toObject(target);\n\tvar symbols;\n\n\tfor (var s = 1; s < arguments.length; s++) {\n\t\tfrom = Object(arguments[s]);\n\n\t\tfor (var key in from) {\n\t\t\tif (hasOwnProperty.call(from, key)) {\n\t\t\t\tto[key] = from[key];\n\t\t\t}\n\t\t}\n\n\t\tif (getOwnPropertySymbols) {\n\t\t\tsymbols = getOwnPropertySymbols(from);\n\t\t\tfor (var i = 0; i < symbols.length; i++) {\n\t\t\t\tif (propIsEnumerable.call(from, symbols[i])) {\n\t\t\t\t\tto[symbols[i]] = from[symbols[i]];\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n\n\treturn to;\n};\n\n\n//# sourceURL=webpack:///./node_modules/object-assign/index.js?");

/***/ }),

/***/ "./node_modules/prop-types/checkPropTypes.js":
/*!***************************************************!*\
  !*** ./node_modules/prop-types/checkPropTypes.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/**\n * Copyright (c) 2013-present, Facebook, Inc.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\n\n\nif (true) {\n  var invariant = __webpack_require__(/*! fbjs/lib/invariant */ \"./node_modules/fbjs/lib/invariant.js\");\n  var warning = __webpack_require__(/*! fbjs/lib/warning */ \"./node_modules/fbjs/lib/warning.js\");\n  var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ \"./node_modules/prop-types/lib/ReactPropTypesSecret.js\");\n  var loggedTypeFailures = {};\n}\n\n/**\n * Assert that the values match with the type specs.\n * Error messages are memorized and will only be shown once.\n *\n * @param {object} typeSpecs Map of name to a ReactPropType\n * @param {object} values Runtime values that need to be type-checked\n * @param {string} location e.g. \"prop\", \"context\", \"child context\"\n * @param {string} componentName Name of the component for error messages.\n * @param {?Function} getStack Returns the component stack.\n * @private\n */\nfunction checkPropTypes(typeSpecs, values, location, componentName, getStack) {\n  if (true) {\n    for (var typeSpecName in typeSpecs) {\n      if (typeSpecs.hasOwnProperty(typeSpecName)) {\n        var error;\n        // Prop type validation may throw. In case they do, we don't want to\n        // fail the render phase where it didn't fail before. So we log it.\n        // After these have been cleaned up, we'll let them throw.\n        try {\n          // This is intentionally an invariant that gets caught. It's the same\n          // behavior as without this statement except with a better message.\n          invariant(typeof typeSpecs[typeSpecName] === 'function', '%s: %s type `%s` is invalid; it must be a function, usually from ' + 'the `prop-types` package, but received `%s`.', componentName || 'React class', location, typeSpecName, typeof typeSpecs[typeSpecName]);\n          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);\n        } catch (ex) {\n          error = ex;\n        }\n        warning(!error || error instanceof Error, '%s: type specification of %s `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error);\n        if (error instanceof Error && !(error.message in loggedTypeFailures)) {\n          // Only monitor this failure once because there tends to be a lot of the\n          // same error.\n          loggedTypeFailures[error.message] = true;\n\n          var stack = getStack ? getStack() : '';\n\n          warning(false, 'Failed %s type: %s%s', location, error.message, stack != null ? stack : '');\n        }\n      }\n    }\n  }\n}\n\nmodule.exports = checkPropTypes;\n\n\n//# sourceURL=webpack:///./node_modules/prop-types/checkPropTypes.js?");

/***/ }),

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*************************************************************!*\
  !*** ./node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/**\n * Copyright (c) 2013-present, Facebook, Inc.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\n\n\nvar ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';\n\nmodule.exports = ReactPropTypesSecret;\n\n\n//# sourceURL=webpack:///./node_modules/prop-types/lib/ReactPropTypesSecret.js?");

/***/ }),

/***/ "./node_modules/react/cjs/react.development.js":
/*!*****************************************************!*\
  !*** ./node_modules/react/cjs/react.development.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/***/ }),

/***/ "./node_modules/react/index.js":
/*!*************************************!*\
  !*** ./node_modules/react/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nif (false) {} else {\n  module.exports = __webpack_require__(/*! ./cjs/react.development.js */ \"./node_modules/react/cjs/react.development.js\");\n}\n\n\n//# sourceURL=webpack:///./node_modules/react/index.js?");

/***/ }),

/***/ "./src/parsing/exercise-section.tsx":
/*!******************************************!*\
  !*** ./src/parsing/exercise-section.tsx ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];\r\n    result[\"default\"] = mod;\r\n    return result;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nconst ATF = __importStar(__webpack_require__(/*! algo-testing-framework */ \"./node_modules/algo-testing-framework/dist/index.js\"));\r\nconst algo_testing_framework_1 = __webpack_require__(/*! algo-testing-framework */ \"./node_modules/algo-testing-framework/dist/index.js\");\r\nclass ExerciseSection extends ATF.Exercises.Exercise {\r\n    constructor() {\r\n        super();\r\n        this.exerciseCache = new ATF.Lazy(() => this.createExercise());\r\n    }\r\n    createExercise() {\r\n        const me = this;\r\n        return new class extends ATF.Exercise.Coding.TestCaseBased.ReferenceBased.ReturnValue.Exercise {\r\n            get referenceImplementation() {\r\n                return me.referenceImplementation;\r\n            }\r\n            get testedImplementation() {\r\n                return me.testedImplementation;\r\n            }\r\n            generateTestCaseInputs() {\r\n                if (me.verifySolutions) {\r\n                    const testCases = Array.from(me.generateTestCaseInputs());\r\n                    for (const testCase of testCases) {\r\n                        const solutions = algo_testing_framework_1.retrieveSolutions(me.referenceImplementation);\r\n                        const results = solutions.map(solution => ATF.Functional.typedCallFunction(solution.implementation, ...testCase.parameterValues));\r\n                        const reference = results[0];\r\n                        for (let i = 1; i < results.length; ++i) {\r\n                            const current = results[i];\r\n                            if (!reference.sameAs(current)) {\r\n                                const str = ATF.Formatters.String.convertToString;\r\n                                const functionName = ATF.Functional.parseFunction(reference.func).functionName;\r\n                                console.log(`Call: ${functionName}(${reference.argumentsBeforeCall.map(str).join(\", \")})`);\r\n                                console.log(`Expected: ${str(reference.returnValue)}`);\r\n                                console.log(`Actual: ${str(current.returnValue)}`);\r\n                                throw new Error(`Solutions don't agree for ${me.id}!`);\r\n                            }\r\n                        }\r\n                    }\r\n                    return testCases;\r\n                }\r\n                else {\r\n                    return me.generateTestCaseInputs();\r\n                }\r\n            }\r\n        };\r\n    }\r\n    get exercise() {\r\n        return this.exerciseCache.value;\r\n    }\r\n    get id() {\r\n        return ATF.Functional.parseFunction(this.referenceImplementation).functionName;\r\n    }\r\n    get tocEntry() {\r\n        return (react_1.default.createElement(react_1.default.Fragment, null, this.id));\r\n    }\r\n    isScored() { return true; }\r\n    hasDifficulty() { return true; }\r\n    get header() {\r\n        return (react_1.default.createElement(react_1.default.Fragment, null, ATF.Functional.parseFunction(this.referenceImplementation).signature));\r\n    }\r\n    get exerciseContent() {\r\n        return (react_1.default.createElement(react_1.default.Fragment, null,\r\n            react_1.default.createElement(ATF.Components.DescriptionBox, null, this.description),\r\n            this.exercise.render(),\r\n            this.renderSolutions()));\r\n    }\r\n    get score() {\r\n        return this.exercise.score;\r\n    }\r\n    renderSolutions() {\r\n        const solutions = ATF.retrieveSolutions(this.referenceImplementation);\r\n        return react_1.default.createElement(ATF.Components.MultiSolutionViewer, { solutions: solutions });\r\n    }\r\n}\r\nexports.ExerciseSection = ExerciseSection;\r\n\n\n//# sourceURL=webpack:///./src/parsing/exercise-section.tsx?");

/***/ }),

/***/ "./src/parsing/solutions.ts":
/*!**********************************!*\
  !*** ./src/parsing/solutions.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst algo_testing_framework_1 = __webpack_require__(/*! algo-testing-framework */ \"./node_modules/algo-testing-framework/dist/index.js\");\r\nexports.isBinaryDigit = (() => {\r\n    const withComparison = function isBinaryDigit(char) {\r\n        return char === '0' || char === '1';\r\n    };\r\n    const withRegex = function isBinaryDigit(char) {\r\n        return /^[01]$/.exec(char) !== null;\r\n    };\r\n    return algo_testing_framework_1.packSolutions(new class extends algo_testing_framework_1.Solution {\r\n        constructor() {\r\n            super(...arguments);\r\n            this.label = 'vergelijking';\r\n            this.implementation = withComparison;\r\n        }\r\n    }, new class extends algo_testing_framework_1.Solution {\r\n        constructor() {\r\n            super(...arguments);\r\n            this.label = 'regex';\r\n            this.implementation = withRegex;\r\n        }\r\n    });\r\n})();\r\nexports.isBinaryString = (() => {\r\n    const withLoop = function isBinaryString(str) {\r\n        for (let i = 0; i !== str.length; ++i) {\r\n            const char = str[i];\r\n            if (!exports.isBinaryDigit(char)) {\r\n                return false;\r\n            }\r\n        }\r\n        return str.length > 0;\r\n    };\r\n    const withRegex = function isBinaryString(str) {\r\n        return /^[01]+$/.exec(str) !== null;\r\n    };\r\n    const ibd = exports.isBinaryDigit;\r\n    const withLambdas = (() => {\r\n        // Some weird trickery required, possible TypeScript bug\r\n        const isBinaryDigit = ibd;\r\n        return function isBinaryString(str) {\r\n            return str.length > 0 && str.split('').every(isBinaryDigit);\r\n        };\r\n    })();\r\n    const withRecursion = (() => {\r\n        const isBinaryDigit = ibd;\r\n        return function isBinaryString(str) {\r\n            return str.length > 0 && aux(str);\r\n            function aux(str) {\r\n                return str.length === 0 || (isBinaryDigit(str[0]) && aux(str.substring(1)));\r\n            }\r\n        };\r\n    })();\r\n    return algo_testing_framework_1.packSolutions(new class extends algo_testing_framework_1.Solution {\r\n        constructor() {\r\n            super(...arguments);\r\n            this.label = 'lus';\r\n            this.implementation = withLoop;\r\n        }\r\n    }, new class extends algo_testing_framework_1.Solution {\r\n        constructor() {\r\n            super(...arguments);\r\n            this.label = 'regex';\r\n            this.implementation = withRegex;\r\n        }\r\n    }, new class extends algo_testing_framework_1.Solution {\r\n        constructor() {\r\n            super(...arguments);\r\n            this.label = \"lambda's\";\r\n            this.implementation = withLambdas;\r\n        }\r\n    }, new class extends algo_testing_framework_1.Solution {\r\n        constructor() {\r\n            super(...arguments);\r\n            this.label = \"recursie\";\r\n            this.implementation = withRecursion;\r\n        }\r\n    });\r\n})();\r\nexports.toBinary = (() => {\r\n    const withNested = function toBinary(n) {\r\n        if (n === 0) {\r\n            return '0';\r\n        }\r\n        else {\r\n            let result = '';\r\n            while (digitsLeft(n)) {\r\n                const lastDigit = getLastDigit(n);\r\n                n = removeLastDigit(n);\r\n                result = lastDigit + result;\r\n            }\r\n            return result;\r\n        }\r\n        function digitsLeft(n) {\r\n            return n > 0;\r\n        }\r\n        function getLastDigit(n) {\r\n            return n % 2;\r\n        }\r\n        function removeLastDigit(n) {\r\n            return Math.floor(n / 2);\r\n        }\r\n    };\r\n    const withoutNested = function toBinary(n) {\r\n        if (n === 0) {\r\n            return '0';\r\n        }\r\n        else {\r\n            let result = '';\r\n            while (n > 0) {\r\n                const lastDigit = n % 2;\r\n                n = Math.floor(n / 2);\r\n                result = lastDigit + result;\r\n            }\r\n            return result;\r\n        }\r\n    };\r\n    const withRecursion = (() => {\r\n        function toBinary(n) {\r\n            const prefix = n > 1 ? toBinary(Math.floor(n / 2)) : '';\r\n            return prefix + (n % 2);\r\n        }\r\n        return toBinary;\r\n    })();\r\n    return algo_testing_framework_1.packSolutions(new class extends algo_testing_framework_1.Solution {\r\n        constructor() {\r\n            super(...arguments);\r\n            this.label = 'met geneste functies';\r\n            this.implementation = withNested;\r\n        }\r\n    }, new class extends algo_testing_framework_1.Solution {\r\n        constructor() {\r\n            super(...arguments);\r\n            this.label = 'zonder geneste functies';\r\n            this.implementation = withoutNested;\r\n        }\r\n    }, new class extends algo_testing_framework_1.Solution {\r\n        constructor() {\r\n            super(...arguments);\r\n            this.label = 'recursie';\r\n            this.implementation = withRecursion;\r\n        }\r\n    });\r\n})();\r\nexports.parseBinaryString = (() => {\r\n    const withNested = function parseBinaryString(string) {\r\n        let result = 0;\r\n        for (let char of string) {\r\n            const digit = convertToDigit(char);\r\n            result = result * 2 + digit;\r\n        }\r\n        return result;\r\n        function convertToDigit(char) {\r\n            if (char === '0') {\r\n                return 0;\r\n            }\r\n            else {\r\n                return 1;\r\n            }\r\n        }\r\n    };\r\n    const withRecursionR2L = (() => {\r\n        return function parseBinaryString(string) {\r\n            if (string.length === 0) {\r\n                return 0;\r\n            }\r\n            else {\r\n                const digitsExceptLast = string.substring(0, string.length - 1);\r\n                const lastDigit = string[string.length - 1];\r\n                const lastDigitValue = lastDigit === '0' ? 0 : 1;\r\n                return parseBinaryString(digitsExceptLast) * 2 + lastDigitValue;\r\n            }\r\n        };\r\n    })();\r\n    const withRecursionL2R = (() => {\r\n        return function parseBinaryString(string) {\r\n            return aux(0, string);\r\n            function aux(acc, string) {\r\n                if (string.length === 0) {\r\n                    return acc;\r\n                }\r\n                else {\r\n                    const firstDigit = string[0];\r\n                    const firstDigitValue = firstDigit === '0' ? 0 : 1;\r\n                    const rest = string.substring(1);\r\n                    return aux(acc * 2 + firstDigitValue, rest);\r\n                }\r\n            }\r\n        };\r\n    })();\r\n    return algo_testing_framework_1.packSolutions(new class extends algo_testing_framework_1.Solution {\r\n        constructor() {\r\n            super(...arguments);\r\n            this.label = 'met geneste functies';\r\n            this.implementation = withNested;\r\n        }\r\n    }, new class extends algo_testing_framework_1.Solution {\r\n        constructor() {\r\n            super(...arguments);\r\n            this.label = 'recursie (rechts naar links)';\r\n            this.implementation = withRecursionR2L;\r\n        }\r\n    }, new class extends algo_testing_framework_1.Solution {\r\n        constructor() {\r\n            super(...arguments);\r\n            this.label = 'recursie (links naar rechts)';\r\n            this.implementation = withRecursionL2R;\r\n        }\r\n    });\r\n})();\r\nfunction parseDecimalDigit(char) {\r\n    const digits = '0123456789';\r\n    for (let i = 0; i !== digits.length; ++i) {\r\n        if (digits[i] === char) {\r\n            return i;\r\n        }\r\n    }\r\n    return -1;\r\n}\r\nexports.parseDecimalDigit = parseDecimalDigit;\r\nexports.parseDecimalString = (() => {\r\n    const withLoop = function parseDecimalString(string) {\r\n        let result = 0;\r\n        for (let char of string) {\r\n            const digit = parseDecimalDigit(char);\r\n            result = result * 10 + digit;\r\n        }\r\n        return result;\r\n    };\r\n    const withRecursion = function parseDecimalString(string) {\r\n        return aux(0, string);\r\n        function aux(acc, string) {\r\n            if (string.length === 0) {\r\n                return acc;\r\n            }\r\n            else {\r\n                const firstDigit = parseDecimalDigit(string[0]);\r\n                const rest = string.substring(1);\r\n                return aux(acc * 10 + firstDigit, rest);\r\n            }\r\n        }\r\n    };\r\n    const withLambdas = function parseDecimalString(string) {\r\n        return string.split('').reduce((acc, digit) => acc * 10 + parseDecimalDigit(digit), 0);\r\n    };\r\n    return algo_testing_framework_1.packSolutions(new class extends algo_testing_framework_1.Solution {\r\n        constructor() {\r\n            super(...arguments);\r\n            this.label = 'lus';\r\n            this.implementation = withLoop;\r\n        }\r\n    }, new class extends algo_testing_framework_1.Solution {\r\n        constructor() {\r\n            super(...arguments);\r\n            this.label = 'recursie';\r\n            this.implementation = withRecursion;\r\n        }\r\n    }, new class extends algo_testing_framework_1.Solution {\r\n        constructor() {\r\n            super(...arguments);\r\n            this.label = `lambda's`;\r\n            this.implementation = withLambdas;\r\n        }\r\n    });\r\n})();\r\nfunction parseDecimalString2(string) {\r\n    if (string[0] === '-') {\r\n        return -exports.parseDecimalString(string.substring(1, string.length));\r\n    }\r\n    else {\r\n        return exports.parseDecimalString(string);\r\n    }\r\n}\r\nexports.parseDecimalString2 = parseDecimalString2;\r\nfunction parseDecimalString3(string) {\r\n    let sign;\r\n    if (string[0] === '-') {\r\n        sign = -1;\r\n        string = string.substring(1);\r\n    }\r\n    else {\r\n        sign = 1;\r\n    }\r\n    let [left, right] = `${string}`.split('.');\r\n    left = left || '0';\r\n    right = right || '0';\r\n    const leftValue = parseDecimalString2(left);\r\n    const rightValue = parseDecimalString2(right);\r\n    return sign * (leftValue + rightValue * 10 ** -right.length);\r\n}\r\nexports.parseDecimalString3 = parseDecimalString3;\r\nfunction toRomanNumerals(n) {\r\n    let result = '';\r\n    let thousands = Math.floor(n / 1000) % 10;\r\n    let hundreds = Math.floor(n / 100) % 10;\r\n    let tens = Math.floor(n / 10) % 10;\r\n    let units = n % 10;\r\n    result += addMagnitude('M', '?', '?', thousands);\r\n    result += addMagnitude('C', 'D', 'M', hundreds);\r\n    result += addMagnitude('X', 'L', 'C', tens);\r\n    result += addMagnitude('I', 'V', 'X', units);\r\n    return result;\r\n    function addMagnitude(single, five, ten, n) {\r\n        if (n === 0) {\r\n            return '';\r\n        }\r\n        else if (n < 4) {\r\n            return single.repeat(n);\r\n        }\r\n        else if (n === 4) {\r\n            return `${single}${five}`;\r\n        }\r\n        else if (n < 9) {\r\n            return `${five}${single.repeat(n - 5)}`;\r\n        }\r\n        else {\r\n            return `${single}${ten}`;\r\n        }\r\n    }\r\n}\r\nexports.toRomanNumerals = toRomanNumerals;\r\nexports.parseRomanNumeral = (() => {\r\n    const withIfs = function parseRomanNumeral(char) {\r\n        if (char === 'I') {\r\n            return 1;\r\n        }\r\n        else if (char === 'V') {\r\n            return 5;\r\n        }\r\n        else if (char === 'X') {\r\n            return 10;\r\n        }\r\n        else if (char === 'L') {\r\n            return 50;\r\n        }\r\n        else if (char === 'C') {\r\n            return 100;\r\n        }\r\n        else if (char === 'D') {\r\n            return 500;\r\n        }\r\n        else {\r\n            return 1000;\r\n        }\r\n    };\r\n    const withObject = function parseRomanNumeral(str) {\r\n        const map = {\r\n            I: 1,\r\n            V: 5,\r\n            X: 10,\r\n            L: 50,\r\n            C: 100,\r\n            D: 500,\r\n            M: 1000\r\n        };\r\n        return map[str];\r\n    };\r\n    return algo_testing_framework_1.packSolutions(new class extends algo_testing_framework_1.Solution {\r\n        constructor() {\r\n            super(...arguments);\r\n            this.label = `ifs`;\r\n            this.implementation = withIfs;\r\n        }\r\n    }, new class extends algo_testing_framework_1.Solution {\r\n        constructor() {\r\n            super(...arguments);\r\n            this.label = 'object';\r\n            this.implementation = withObject;\r\n        }\r\n    });\r\n})();\r\nexports.parseRomanNumerals = (() => {\r\n    const withLoop = function parseRomanNumerals(str) {\r\n        let result = 0;\r\n        let i = 0;\r\n        while (i !== str.length) {\r\n            const current = str[i];\r\n            const currentValue = exports.parseRomanNumeral(current);\r\n            if (i + 1 < str.length) {\r\n                const next = str[i + 1];\r\n                const nextValue = exports.parseRomanNumeral(next);\r\n                if (currentValue < nextValue) {\r\n                    result += nextValue - currentValue;\r\n                    i += 2;\r\n                }\r\n                else {\r\n                    result += currentValue;\r\n                    ++i;\r\n                }\r\n            }\r\n            else {\r\n                result += currentValue;\r\n                ++i;\r\n            }\r\n        }\r\n        return result;\r\n    };\r\n    const prn = exports.parseRomanNumeral;\r\n    const withRecursion = (() => {\r\n        const parseRomanNumeral = prn;\r\n        return function parseRomanNumerals(str) {\r\n            if (str.length === 0) {\r\n                return 0;\r\n            }\r\n            else {\r\n                const first = parseRomanNumeral(str[0]);\r\n                const second = str.length > 1 ? parseRomanNumeral(str[1]) : 0;\r\n                if (first < second) {\r\n                    return second - first + parseRomanNumerals(str.substring(2));\r\n                }\r\n                else {\r\n                    return first + parseRomanNumerals(str.substring(1));\r\n                }\r\n            }\r\n        };\r\n    })();\r\n    return algo_testing_framework_1.packSolutions(new class extends algo_testing_framework_1.Solution {\r\n        constructor() {\r\n            super(...arguments);\r\n            this.label = 'lus';\r\n            this.implementation = withLoop;\r\n        }\r\n    }, new class extends algo_testing_framework_1.Solution {\r\n        constructor() {\r\n            super(...arguments);\r\n            this.label = 'recursie';\r\n            this.implementation = withRecursion;\r\n        }\r\n    });\r\n})();\r\nexports.isHexadecimalDigit = (() => {\r\n    const withLoop = function isHexadecimalDigit(char) {\r\n        const hexadecimalDigits = \"0123456789ABCDEF\";\r\n        for (const c of hexadecimalDigits) {\r\n            if (c === char) {\r\n                return true;\r\n            }\r\n        }\r\n        return false;\r\n    };\r\n    const withCharCodes = function isHexadecimalDigit(char) {\r\n        return isBetween('0', '9') || isBetween('A', 'F');\r\n        function isBetween(left, right) {\r\n            return left.charCodeAt(0) <= char.charCodeAt(0) && char.charCodeAt(0) <= right.charCodeAt(0);\r\n        }\r\n    };\r\n    const withRegex = function isHexadecimalDigit(char) {\r\n        return /^[0-9A-F]$/.exec(char) !== null;\r\n    };\r\n    return algo_testing_framework_1.packSolutions(new class extends algo_testing_framework_1.Solution {\r\n        constructor() {\r\n            super(...arguments);\r\n            this.label = 'lus';\r\n            this.implementation = withLoop;\r\n        }\r\n    }, new class extends algo_testing_framework_1.Solution {\r\n        constructor() {\r\n            super(...arguments);\r\n            this.label = 'char codes';\r\n            this.implementation = withCharCodes;\r\n        }\r\n    }, new class extends algo_testing_framework_1.Solution {\r\n        constructor() {\r\n            super(...arguments);\r\n            this.label = 'regex';\r\n            this.implementation = withRegex;\r\n        }\r\n    });\r\n})();\r\nexports.isHexadecimalString = (() => {\r\n    const withLoop = function isHexadecimalString(str) {\r\n        for (let i = 0; i !== str.length; ++i) {\r\n            const char = str[i];\r\n            if (!exports.isHexadecimalDigit(char)) {\r\n                return false;\r\n            }\r\n        }\r\n        return str.length > 0;\r\n    };\r\n    const withRegex = function isHexadecimalString(str) {\r\n        return /^[0-9A-Z]+$/.exec(str) !== null;\r\n    };\r\n    const ihd = exports.isHexadecimalDigit;\r\n    const withLambdas = (() => {\r\n        // Some weird trickery required, possible TypeScript bug\r\n        const isHexadecimalDigit = ihd;\r\n        return function isBinaryString(str) {\r\n            return str.length > 0 && str.split('').every(isHexadecimalDigit);\r\n        };\r\n    })();\r\n    const withRecursion = (() => {\r\n        const isHexadecimalDigit = ihd;\r\n        return function isHexadecimalString(str) {\r\n            return str.length > 0 && aux(str);\r\n            function aux(str) {\r\n                return str.length === 0 || (isHexadecimalDigit(str[0]) && aux(str.substring(1)));\r\n            }\r\n        };\r\n    })();\r\n    return algo_testing_framework_1.packSolutions(new class extends algo_testing_framework_1.Solution {\r\n        constructor() {\r\n            super(...arguments);\r\n            this.label = 'lus';\r\n            this.implementation = withLoop;\r\n        }\r\n    }, new class extends algo_testing_framework_1.Solution {\r\n        constructor() {\r\n            super(...arguments);\r\n            this.label = 'regex';\r\n            this.implementation = withRegex;\r\n        }\r\n    }, new class extends algo_testing_framework_1.Solution {\r\n        constructor() {\r\n            super(...arguments);\r\n            this.label = \"lambda's\";\r\n            this.implementation = withLambdas;\r\n        }\r\n    }, new class extends algo_testing_framework_1.Solution {\r\n        constructor() {\r\n            super(...arguments);\r\n            this.label = \"recursie\";\r\n            this.implementation = withRecursion;\r\n        }\r\n    });\r\n})();\r\nexports.parseHexadecimalDigit = (() => {\r\n    const withLoop = function parseHexadecimalDigit(char) {\r\n        const hexadecimalDigits = \"0123456789ABCDEF\";\r\n        for (let i = 0; i !== hexadecimalDigits.length; ++i) {\r\n            if (char === hexadecimalDigits[i]) {\r\n                return i;\r\n            }\r\n        }\r\n        return -1;\r\n    };\r\n    const withIndexOf = function isHexadecimalDigit(char) {\r\n        return \"0123456789ABCDEF\".split('').indexOf(char);\r\n    };\r\n    const withObject = function isHexadecimalDigit(char) {\r\n        const map = {\r\n            '0': 0,\r\n            '1': 1,\r\n            '2': 2,\r\n            '3': 3,\r\n            '4': 4,\r\n            '5': 5,\r\n            '6': 6,\r\n            '7': 7,\r\n            '8': 8,\r\n            '9': 9,\r\n            A: 10,\r\n            B: 11,\r\n            C: 12,\r\n            D: 13,\r\n            E: 14,\r\n            F: 15\r\n        };\r\n        return map[char];\r\n    };\r\n    return algo_testing_framework_1.packSolutions(new class extends algo_testing_framework_1.Solution {\r\n        constructor() {\r\n            super(...arguments);\r\n            this.label = 'lus';\r\n            this.implementation = withLoop;\r\n        }\r\n    }, new class extends algo_testing_framework_1.Solution {\r\n        constructor() {\r\n            super(...arguments);\r\n            this.label = 'indexOf';\r\n            this.implementation = withIndexOf;\r\n        }\r\n    }, new class extends algo_testing_framework_1.Solution {\r\n        constructor() {\r\n            super(...arguments);\r\n            this.label = 'object';\r\n            this.implementation = withObject;\r\n        }\r\n    });\r\n})();\r\nexports.parseHexadecimalString = (() => {\r\n    const withLoop = function parseHexadecimalString(string) {\r\n        let result = 0;\r\n        for (const char of string) {\r\n            result = result * 16 + exports.parseHexadecimalDigit(char);\r\n        }\r\n        return result;\r\n    };\r\n    const withRecursion = (() => {\r\n        return function parseHexadecimalString(string) {\r\n            if (string.length === 0) {\r\n                return 0;\r\n            }\r\n            else {\r\n                const digitsExceptLast = string.substring(0, string.length - 1);\r\n                const lastDigit = string[string.length - 1];\r\n                const lastDigitValue = exports.parseHexadecimalDigit(lastDigit);\r\n                return parseHexadecimalString(digitsExceptLast) * 16 + lastDigitValue;\r\n            }\r\n        };\r\n    })();\r\n    const withLambdas = function parseHexadecimalString(string) {\r\n        return string.split('').reduce((acc, digit) => acc * 16 + exports.parseHexadecimalDigit(digit), 0);\r\n    };\r\n    return algo_testing_framework_1.packSolutions(new class extends algo_testing_framework_1.Solution {\r\n        constructor() {\r\n            super(...arguments);\r\n            this.label = 'lus';\r\n            this.implementation = withLoop;\r\n        }\r\n    }, new class extends algo_testing_framework_1.Solution {\r\n        constructor() {\r\n            super(...arguments);\r\n            this.label = 'recursie';\r\n            this.implementation = withRecursion;\r\n        }\r\n    }, new class extends algo_testing_framework_1.Solution {\r\n        constructor() {\r\n            super(...arguments);\r\n            this.label = `lambda's`;\r\n            this.implementation = withLambdas;\r\n        }\r\n    });\r\n})();\r\n\n\n//# sourceURL=webpack:///./src/parsing/solutions.ts?");

/***/ }),

/***/ "./src/parsing/tests.tsx":
/*!*******************************!*\
  !*** ./src/parsing/tests.tsx ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/***/ }),

/***/ "./src/student.js":
/*!************************!*\
  !*** ./src/student.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"student.js\";\n\n//# sourceURL=webpack:///./src/student.js?");

/***/ }),

/***/ "./src/tests.html":
/*!************************!*\
  !*** ./src/tests.html ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"tests.html\";\n\n//# sourceURL=webpack:///./src/tests.html?");

/***/ }),

/***/ 0:
/*!***********************************************************************!*\
  !*** multi ./src/parsing/tests.tsx ./src/tests.html ./src/student.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! E:\\repos\\ucll\\algo\\1819\\labs\\src\\parsing\\tests.tsx */\"./src/parsing/tests.tsx\");\n__webpack_require__(/*! E:\\repos\\ucll\\algo\\1819\\labs\\src\\tests.html */\"./src/tests.html\");\nmodule.exports = __webpack_require__(/*! E:\\repos\\ucll\\algo\\1819\\labs\\src\\student.js */\"./src/student.js\");\n\n\n//# sourceURL=webpack:///multi_./src/parsing/tests.tsx_./src/tests.html_./src/student.js?");

/***/ })

/******/ });