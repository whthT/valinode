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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/define-properties/index.js":
/*!*************************************************!*\
  !*** ./node_modules/define-properties/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar keys = __webpack_require__(/*! object-keys */ \"./node_modules/object-keys/index.js\");\nvar hasSymbols = typeof Symbol === 'function' && typeof Symbol('foo') === 'symbol';\n\nvar toStr = Object.prototype.toString;\nvar concat = Array.prototype.concat;\nvar origDefineProperty = Object.defineProperty;\n\nvar isFunction = function (fn) {\n\treturn typeof fn === 'function' && toStr.call(fn) === '[object Function]';\n};\n\nvar arePropertyDescriptorsSupported = function () {\n\tvar obj = {};\n\ttry {\n\t\torigDefineProperty(obj, 'x', { enumerable: false, value: obj });\n\t\t// eslint-disable-next-line no-unused-vars, no-restricted-syntax\n\t\tfor (var _ in obj) { // jscs:ignore disallowUnusedVariables\n\t\t\treturn false;\n\t\t}\n\t\treturn obj.x === obj;\n\t} catch (e) { /* this is IE 8. */\n\t\treturn false;\n\t}\n};\nvar supportsDescriptors = origDefineProperty && arePropertyDescriptorsSupported();\n\nvar defineProperty = function (object, name, value, predicate) {\n\tif (name in object && (!isFunction(predicate) || !predicate())) {\n\t\treturn;\n\t}\n\tif (supportsDescriptors) {\n\t\torigDefineProperty(object, name, {\n\t\t\tconfigurable: true,\n\t\t\tenumerable: false,\n\t\t\tvalue: value,\n\t\t\twritable: true\n\t\t});\n\t} else {\n\t\tobject[name] = value;\n\t}\n};\n\nvar defineProperties = function (object, map) {\n\tvar predicates = arguments.length > 2 ? arguments[2] : {};\n\tvar props = keys(map);\n\tif (hasSymbols) {\n\t\tprops = concat.call(props, Object.getOwnPropertySymbols(map));\n\t}\n\tfor (var i = 0; i < props.length; i += 1) {\n\t\tdefineProperty(object, props[i], map[props[i]], predicates[props[i]]);\n\t}\n};\n\ndefineProperties.supportsDescriptors = !!supportsDescriptors;\n\nmodule.exports = defineProperties;\n\n\n//# sourceURL=webpack:///./node_modules/define-properties/index.js?");

/***/ }),

/***/ "./node_modules/is-nan/implementation.js":
/*!***********************************************!*\
  !*** ./node_modules/is-nan/implementation.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/* http://www.ecma-international.org/ecma-262/6.0/#sec-number.isnan */\n\nmodule.exports = function isNaN(value) {\n\treturn value !== value;\n};\n\n\n//# sourceURL=webpack:///./node_modules/is-nan/implementation.js?");

/***/ }),

/***/ "./node_modules/is-nan/index.js":
/*!**************************************!*\
  !*** ./node_modules/is-nan/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar define = __webpack_require__(/*! define-properties */ \"./node_modules/define-properties/index.js\");\n\nvar implementation = __webpack_require__(/*! ./implementation */ \"./node_modules/is-nan/implementation.js\");\nvar getPolyfill = __webpack_require__(/*! ./polyfill */ \"./node_modules/is-nan/polyfill.js\");\nvar shim = __webpack_require__(/*! ./shim */ \"./node_modules/is-nan/shim.js\");\n\n/* http://www.ecma-international.org/ecma-262/6.0/#sec-number.isnan */\n\ndefine(implementation, {\n\tgetPolyfill: getPolyfill,\n\timplementation: implementation,\n\tshim: shim\n});\n\nmodule.exports = implementation;\n\n\n//# sourceURL=webpack:///./node_modules/is-nan/index.js?");

/***/ }),

/***/ "./node_modules/is-nan/polyfill.js":
/*!*****************************************!*\
  !*** ./node_modules/is-nan/polyfill.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar implementation = __webpack_require__(/*! ./implementation */ \"./node_modules/is-nan/implementation.js\");\n\nmodule.exports = function getPolyfill() {\n\tif (Number.isNaN && Number.isNaN(NaN) && !Number.isNaN('a')) {\n\t\treturn Number.isNaN;\n\t}\n\treturn implementation;\n};\n\n\n//# sourceURL=webpack:///./node_modules/is-nan/polyfill.js?");

/***/ }),

/***/ "./node_modules/is-nan/shim.js":
/*!*************************************!*\
  !*** ./node_modules/is-nan/shim.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar define = __webpack_require__(/*! define-properties */ \"./node_modules/define-properties/index.js\");\nvar getPolyfill = __webpack_require__(/*! ./polyfill */ \"./node_modules/is-nan/polyfill.js\");\n\n/* http://www.ecma-international.org/ecma-262/6.0/#sec-number.isnan */\n\nmodule.exports = function shimNumberIsNaN() {\n\tvar polyfill = getPolyfill();\n\tdefine(Number, { isNaN: polyfill }, { isNaN: function () { return Number.isNaN !== polyfill; } });\n\treturn polyfill;\n};\n\n\n//# sourceURL=webpack:///./node_modules/is-nan/shim.js?");

/***/ }),

/***/ "./node_modules/object-keys/index.js":
/*!*******************************************!*\
  !*** ./node_modules/object-keys/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// modified from https://github.com/es-shims/es5-shim\nvar has = Object.prototype.hasOwnProperty;\nvar toStr = Object.prototype.toString;\nvar slice = Array.prototype.slice;\nvar isArgs = __webpack_require__(/*! ./isArguments */ \"./node_modules/object-keys/isArguments.js\");\nvar isEnumerable = Object.prototype.propertyIsEnumerable;\nvar hasDontEnumBug = !isEnumerable.call({ toString: null }, 'toString');\nvar hasProtoEnumBug = isEnumerable.call(function () {}, 'prototype');\nvar dontEnums = [\n\t'toString',\n\t'toLocaleString',\n\t'valueOf',\n\t'hasOwnProperty',\n\t'isPrototypeOf',\n\t'propertyIsEnumerable',\n\t'constructor'\n];\nvar equalsConstructorPrototype = function (o) {\n\tvar ctor = o.constructor;\n\treturn ctor && ctor.prototype === o;\n};\nvar excludedKeys = {\n\t$applicationCache: true,\n\t$console: true,\n\t$external: true,\n\t$frame: true,\n\t$frameElement: true,\n\t$frames: true,\n\t$innerHeight: true,\n\t$innerWidth: true,\n\t$outerHeight: true,\n\t$outerWidth: true,\n\t$pageXOffset: true,\n\t$pageYOffset: true,\n\t$parent: true,\n\t$scrollLeft: true,\n\t$scrollTop: true,\n\t$scrollX: true,\n\t$scrollY: true,\n\t$self: true,\n\t$webkitIndexedDB: true,\n\t$webkitStorageInfo: true,\n\t$window: true\n};\nvar hasAutomationEqualityBug = (function () {\n\t/* global window */\n\tif (typeof window === 'undefined') { return false; }\n\tfor (var k in window) {\n\t\ttry {\n\t\t\tif (!excludedKeys['$' + k] && has.call(window, k) && window[k] !== null && typeof window[k] === 'object') {\n\t\t\t\ttry {\n\t\t\t\t\tequalsConstructorPrototype(window[k]);\n\t\t\t\t} catch (e) {\n\t\t\t\t\treturn true;\n\t\t\t\t}\n\t\t\t}\n\t\t} catch (e) {\n\t\t\treturn true;\n\t\t}\n\t}\n\treturn false;\n}());\nvar equalsConstructorPrototypeIfNotBuggy = function (o) {\n\t/* global window */\n\tif (typeof window === 'undefined' || !hasAutomationEqualityBug) {\n\t\treturn equalsConstructorPrototype(o);\n\t}\n\ttry {\n\t\treturn equalsConstructorPrototype(o);\n\t} catch (e) {\n\t\treturn false;\n\t}\n};\n\nvar keysShim = function keys(object) {\n\tvar isObject = object !== null && typeof object === 'object';\n\tvar isFunction = toStr.call(object) === '[object Function]';\n\tvar isArguments = isArgs(object);\n\tvar isString = isObject && toStr.call(object) === '[object String]';\n\tvar theKeys = [];\n\n\tif (!isObject && !isFunction && !isArguments) {\n\t\tthrow new TypeError('Object.keys called on a non-object');\n\t}\n\n\tvar skipProto = hasProtoEnumBug && isFunction;\n\tif (isString && object.length > 0 && !has.call(object, 0)) {\n\t\tfor (var i = 0; i < object.length; ++i) {\n\t\t\ttheKeys.push(String(i));\n\t\t}\n\t}\n\n\tif (isArguments && object.length > 0) {\n\t\tfor (var j = 0; j < object.length; ++j) {\n\t\t\ttheKeys.push(String(j));\n\t\t}\n\t} else {\n\t\tfor (var name in object) {\n\t\t\tif (!(skipProto && name === 'prototype') && has.call(object, name)) {\n\t\t\t\ttheKeys.push(String(name));\n\t\t\t}\n\t\t}\n\t}\n\n\tif (hasDontEnumBug) {\n\t\tvar skipConstructor = equalsConstructorPrototypeIfNotBuggy(object);\n\n\t\tfor (var k = 0; k < dontEnums.length; ++k) {\n\t\t\tif (!(skipConstructor && dontEnums[k] === 'constructor') && has.call(object, dontEnums[k])) {\n\t\t\t\ttheKeys.push(dontEnums[k]);\n\t\t\t}\n\t\t}\n\t}\n\treturn theKeys;\n};\n\nkeysShim.shim = function shimObjectKeys() {\n\tif (Object.keys) {\n\t\tvar keysWorksWithArguments = (function () {\n\t\t\t// Safari 5.0 bug\n\t\t\treturn (Object.keys(arguments) || '').length === 2;\n\t\t}(1, 2));\n\t\tif (!keysWorksWithArguments) {\n\t\t\tvar originalKeys = Object.keys;\n\t\t\tObject.keys = function keys(object) { // eslint-disable-line func-name-matching\n\t\t\t\tif (isArgs(object)) {\n\t\t\t\t\treturn originalKeys(slice.call(object));\n\t\t\t\t} else {\n\t\t\t\t\treturn originalKeys(object);\n\t\t\t\t}\n\t\t\t};\n\t\t}\n\t} else {\n\t\tObject.keys = keysShim;\n\t}\n\treturn Object.keys || keysShim;\n};\n\nmodule.exports = keysShim;\n\n\n//# sourceURL=webpack:///./node_modules/object-keys/index.js?");

/***/ }),

/***/ "./node_modules/object-keys/isArguments.js":
/*!*************************************************!*\
  !*** ./node_modules/object-keys/isArguments.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar toStr = Object.prototype.toString;\n\nmodule.exports = function isArguments(value) {\n\tvar str = toStr.call(value);\n\tvar isArgs = str === '[object Arguments]';\n\tif (!isArgs) {\n\t\tisArgs = str !== '[object Array]' &&\n\t\t\tvalue !== null &&\n\t\t\ttypeof value === 'object' &&\n\t\t\ttypeof value.length === 'number' &&\n\t\t\tvalue.length >= 0 &&\n\t\t\ttoStr.call(value.callee) === '[object Function]';\n\t}\n\treturn isArgs;\n};\n\n\n//# sourceURL=webpack:///./node_modules/object-keys/isArguments.js?");

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var g;\r\n\r\n// This works in non-strict mode\r\ng = (function() {\r\n\treturn this;\r\n})();\r\n\r\ntry {\r\n\t// This works if eval is allowed (see CSP)\r\n\tg = g || Function(\"return this\")() || (1, eval)(\"this\");\r\n} catch (e) {\r\n\t// This works if the window reference is available\r\n\tif (typeof window === \"object\") g = window;\r\n}\r\n\r\n// g can still be undefined, but nothing to do about it...\r\n// We return undefined, instead of nothing here, so it's\r\n// easier to handle this case. if(!global) { ...}\r\n\r\nmodule.exports = g;\r\n\n\n//# sourceURL=webpack:///(webpack)/buildin/global.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib */ \"./src/lib/index.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\nvar __Valinode =\n/*#__PURE__*/\nfunction (_Valinode2) {\n  _inherits(__Valinode, _Valinode2);\n\n  function __Valinode() {\n    _classCallCheck(this, __Valinode);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(__Valinode).apply(this, arguments));\n  }\n\n  return __Valinode;\n}(_lib__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\nglobal.Valinode = __Valinode;\n/* harmony default export */ __webpack_exports__[\"default\"] = (__Valinode); // TODO: date formatında required kuralında ayın 31. gününde boş hatası vermesi düzeltilmelidir. \n// TODO: date formatı için \"bu günden büyük, bu günden küçük\" kuralı eklenmelidir.\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/global.js */ \"./node_modules/webpack/buildin/global.js\")))\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/lib/index.js":
/*!**************************!*\
  !*** ./src/lib/index.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Valinode; });\n/* harmony import */ var _locale_tr_TR__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../locale/tr-TR */ \"./src/locale/tr-TR.js\");\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance\"); }\n\nfunction _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }\n\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nNumber.isNaN = __webpack_require__(/*! is-nan */ \"./node_modules/is-nan/index.js\");\n\nArray.prototype.diff = function (a) {\n  return this.filter(function (i) {\n    return a.indexOf(i) < 0;\n  });\n};\n\n\n\nvar Valinode =\n/*#__PURE__*/\nfunction () {\n  function Valinode() {\n    var args = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n\n    _classCallCheck(this, Valinode);\n\n    this.isDebug = args.debug || false;\n    this.locale = args.locale || _locale_tr_TR__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n    /* OBJECTS */\n\n    this.$ExceptionContainer = {\n      errors: {},\n      message: \"\"\n    };\n    this.$translate = this.locale;\n    /* GLOBALS */\n\n    this.$requests = {};\n    this.$rules = {};\n    this.$messages = {};\n    this.$attributes = {};\n    this._isFailed = false;\n    this._errorCount = 0;\n    this._isValidated = false;\n    this.$regex = {\n      email: /^(([^<>()\\[\\]\\\\.,;:\\s@\"]+(\\.[^<>()\\[\\]\\\\.,;:\\s@\"]+)*)|(\".+\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$/,\n      phone: /^\\+?[0-9]?()[0-9](\\s|\\S)(\\d[0-9]{9})$/\n    };\n    this.failedRules = [];\n  }\n\n  _createClass(Valinode, [{\n    key: \"beginValidate\",\n    value: function beginValidate() {\n      var _this = this;\n\n      this.clear();\n      this._isValidated = true;\n      this._errorCount = 0;\n      return new Promise(function (resolve) {\n        Object.keys(_this.$rules).map(function (v) {\n          var rules = _this.$rules[v];\n\n          if (rules) {\n            var splitRules = _this.$rules[v].split('|'),\n                requestValue = _this.$requests[v],\n                typeOf = _this.getTypeOf(requestValue),\n                isValueExists = typeOf == \"string\" && String(requestValue).length || typeOf == \"numeric\" && parseInt(requestValue) || typeOf == \"array\" && requestValue.length > 0 || typeOf == \"date\" && new Date(requestValue).getTime() ? true : false;\n\n            var requestObj = {\n              property: v,\n              typeOf: typeOf,\n              cond: splitRules.map(function (v) {\n                var split = v.split(':');\n                return {\n                  _fn: split.shift(),\n                  withEqual: split.length > 1 ? true : false,\n                  value: split.pop() || true\n                };\n              }),\n              value: _this.$requests[v],\n              isValueExists: isValueExists\n            };\n\n            if (typeof _this.$ExceptionContainer.errors[requestObj.property] == \"undefined\") {\n              _this.$ExceptionContainer.errors[requestObj.property] = [];\n            }\n\n            requestObj.cond.forEach(function (_v) {\n              var nullable = _this.isNullable(requestObj);\n\n              if (!nullable || nullable && requestObj.isValueExists) {\n                if (typeof _this[_v._fn] != \"undefined\") {\n                  var exception = _this[_v._fn](requestObj, _v);\n\n                  if (exception) {\n                    _this.setIsFailed(true);\n\n                    _this._errorCount++;\n\n                    _this.$ExceptionContainer.errors[requestObj.property].push(exception);\n                  } else {\n                    _this.setIsFailed(false);\n                  }\n                } else {\n                  console.warn(_v._fn + \" is not a valid validation rule!\");\n                }\n              } else {\n                _this.setIsFailed(false);\n              }\n            });\n          }\n        });\n        resolve(_this.$ExceptionContainer);\n      });\n    }\n  }, {\n    key: \"requests\",\n    value: function requests(args) {\n      var append = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;\n\n      if (args instanceof Object) {\n        this.$requests = append ? _objectSpread({}, this.$requests, args) : args;\n        this.clear();\n      }\n\n      return this;\n    }\n  }, {\n    key: \"messages\",\n    value: function messages(args, append) {\n      if (args instanceof Object) {\n        this.$messages = append ? _objectSpread({}, this.$messages, args) : args;\n        this.clear();\n      }\n\n      return this;\n    }\n  }, {\n    key: \"attributes\",\n    value: function attributes(args, append) {\n      if (args instanceof Object) {\n        this.$attributes = append ? _objectSpread({}, this.$attributes, args) : args;\n        this.clear();\n      }\n\n      return this;\n    }\n  }, {\n    key: \"rules\",\n    value: function rules(args, append) {\n      if (args instanceof Object) {\n        this.$rules = append ? _objectSpread({}, this.$rules, args) : args;\n        this.clear();\n      }\n\n      return this;\n    }\n  }, {\n    key: \"translate\",\n    value: function translate(args) {\n      this.$translate = _objectSpread({}, this.$translate, args);\n      return this;\n    }\n  }, {\n    key: \"required\",\n    value: function required(request, rule) {\n      if (!request.isValueExists && !this.isNullable(request)) {\n        return this.createNewExceptionMessage(request, rule);\n      }\n    }\n  }, {\n    key: \"integer\",\n    value: function integer(request, rule) {\n      if (request.typeOf != \"numeric\") {\n        return this.createNewExceptionMessage(request, rule);\n      }\n    }\n  }, {\n    key: \"string\",\n    value: function string(request, rule) {\n      if (request.typeOf != \"string\") {\n        return this.createNewExceptionMessage(request, rule);\n      }\n    }\n  }, {\n    key: \"array\",\n    value: function array(request, rule) {\n      if (request.typeOf != \"array\") {\n        return this.createNewExceptionMessage(request, rule);\n      }\n    }\n  }, {\n    key: \"date\",\n    value: function date(request, rule) {\n      if (request.typeOf != \"date\") {\n        return this.createNewExceptionMessage(request, rule);\n      }\n    }\n  }, {\n    key: \"max\",\n    value: function max(request, rule) {\n      if (request.typeOf == \"numeric\" && parseInt(request.value) > parseInt(rule.value) || request.typeOf == \"string\" && String(request.value).length > parseInt(rule.value) || request.typeOf == \"array\" && request.value.length > parseInt(rule.value) || request.typeOf == \"date\" && new Date(request.value).getTime() > new Date(rule.value).getTime()) {\n        return this.createNewExceptionMessage(request, rule);\n      }\n    }\n  }, {\n    key: \"min\",\n    value: function min(request, rule) {\n      if (request.typeOf == \"numeric\" && parseInt(request.value) < parseInt(rule.value) || request.typeOf == \"string\" && String(request.value).length < parseInt(rule.value) || request.typeOf == \"array\" && request.value.length < parseInt(rule.value) || request.typeOf == \"date\" && new Date(request.value).getTime() < new Date(rule.value).getTime()) {\n        return this.createNewExceptionMessage(request, rule);\n      }\n    }\n  }, {\n    key: \"in\",\n    value: function _in(request, rule) {\n      if ((request.typeOf == \"array\" ? request.value : [request.typeOf == \"numeric\" ? parseInt(request.value) : request.value]).diff(String(rule.value).replace(/\\[|\\]/gm, '').split(',').map(function (v) {\n        return parseInt(v);\n      })).length) {\n        return this.createNewExceptionMessage(request, rule);\n      }\n    }\n  }, {\n    key: \"bigger_than\",\n    value: function bigger_than(request, rule) {\n      if (typeof this.$requests[rule.value] != \"undefined\") {\n        var bigger_who = this.$requests[rule.value];\n\n        if (request.typeOf == \"numeric\" && parseInt(request.value) <= parseInt(bigger_who) || request.typeOf == \"string\" && request.value <= bigger_who || request.typeOf == \"date\" && new Date(request.value).getTime() <= new Date(bigger_who).getTime()) {\n          return this.createNewExceptionMessage(request, rule, this.getAttributeByProperty(rule.value));\n        }\n      }\n    }\n  }, {\n    key: \"smaller_than\",\n    value: function smaller_than(request, rule) {\n      if (typeof this.$requests[rule.value] != \"undefined\") {\n        var smaller_who = this.$requests[rule.value];\n\n        if (request.typeOf == \"numeric\" && parseInt(request.value) >= parseInt(smaller_who) || request.typeOf == \"string\" && request.value >= smaller_who || request.typeOf == \"date\" && new Date(request.value).getTime() >= new Date(smaller_who).getTime()) {\n          return this.createNewExceptionMessage(request, rule, this.getAttributeByProperty(rule.value));\n        }\n      }\n    }\n  }, {\n    key: \"between\",\n    value: function between(request, rule) {\n      var arrRuleValue = rule.value.split(/[,]/g).map(function (v) {\n        return v.trim();\n      });\n\n      if (arrRuleValue.length && arrRuleValue.length == 2 && (request.typeOf == \"numeric\" && parseInt(request.value) < parseInt(arrRuleValue[0]) || parseInt(request.value) > parseInt(arrRuleValue[1]) || request.typeOf == \"string\" && String(request.value).length < parseInt(arrRuleValue[0]) || String(request.value).length > parseInt(arrRuleValue[1]) || request.typeOf == \"date\" && new Date(request.value).getTime() < new Date(arrRuleValue[0]).getTime() || new Date(request.value).getTime() > new Date(arrRuleValue[1]).getTime())) {\n        return this.createNewExceptionMessage(request, rule, arrRuleValue.join(\" \".concat(this._('and'), \" \")));\n      }\n    }\n  }, {\n    key: \"same\",\n    value: function same(request, rule) {\n      var same_who = this.getRequestByProperty(rule.value);\n\n      if (same_who && request.value != same_who) {\n        return this.createNewExceptionMessage(request, rule, this.getAttributeByProperty(rule.value));\n      }\n    }\n  }, {\n    key: \"hard_same\",\n    value: function hard_same(request, rule) {\n      var same_who = this.getRequestByProperty(rule.value);\n\n      if (same_who && request.value !== same_who) {\n        return this.createNewExceptionMessage(request, rule, this.getAttributeByProperty(rule.value));\n      }\n    }\n  }, {\n    key: \"email\",\n    value: function email(request, rule) {\n      if (!this.$regex.email.test(request.value)) {\n        return this.createNewExceptionMessage(request, rule);\n      }\n    }\n  }, {\n    key: \"phone\",\n    value: function phone(request, rule) {\n      if (!this.$regex.phone.test(request.value)) {\n        return this.createNewExceptionMessage(request, rule);\n      }\n    }\n  }, {\n    key: \"nullable\",\n    value: function nullable(_request, _rule) {// is't here for keep works!\n    }\n  }, {\n    key: \"isRuleExists\",\n    value: function isRuleExists(rules, rule) {\n      return rules.cond.filter(function (v) {\n        return v._fn == rule;\n      }).length ? true : false;\n    }\n  }, {\n    key: \"isNullable\",\n    value: function isNullable(request) {\n      return this.isRuleExists(request, \"nullable\");\n    }\n  }, {\n    key: \"createNewExceptionMessage\",\n    value: function createNewExceptionMessage(request, rule) {\n      var other = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;\n      this.failedRules.push({\n        property: request.property,\n        rule: rule._fn,\n        expect: rule.value,\n        found: request.value\n      });\n      return this.compileException({\n        property: request.property,\n        typeOf: request.typeOf,\n        activeRule: rule,\n        value: rule.value,\n        requestValue: request.value,\n        other: other,\n        attribute: this.getAttributeByProperty(request.property)\n      });\n    }\n  }, {\n    key: \"compileException\",\n    value: function compileException(args) {\n      var message = this.getTranslateMessageByType(args);\n      return message ? message.replace(/:attribute/g, args.attribute).replace(/:rule_value/g, args.value).replace(/:other/g, args.other).replace(/:length/g, String(args.requestValue).length) : \"message not exists (\".concat(message, \")\");\n    }\n  }, {\n    key: \"getTranslateMessageByType\",\n    value: function getTranslateMessageByType(args) {\n      return typeof this.$messages[args.property + '.' + args.activeRule._fn] != \"undefined\" ? this.$messages[args.property + '.' + args.activeRule._fn] : _typeof(this.$translate[args.activeRule._fn]) == \"object\" ? this.$translate[args.activeRule._fn][args.typeOf] : typeof this.$translate[args.activeRule._fn] == \"string\" ? this.$translate[args.activeRule._fn] : \"'\".concat(args.activeRule._fn, \"' message is not empty\");\n    }\n  }, {\n    key: \"getAttributeByProperty\",\n    value: function getAttributeByProperty(property) {\n      return typeof this.$attributes[property] != \"undefined\" ? this.$attributes[property] : this.parseBaseProperty(property);\n    }\n  }, {\n    key: \"getRequestByProperty\",\n    value: function getRequestByProperty(property) {\n      return typeof this.$requests[property] != \"undefined\" ? this.$requests[property] : null;\n    }\n  }, {\n    key: \"parseBaseProperty\",\n    value: function parseBaseProperty(property) {\n      return property.replace(/[_-]/g, ' ');\n    }\n  }, {\n    key: \"isInteger\",\n    value: function isInteger(x) {\n      return String(parseInt(x)).length == String(x).length && !Number.isNaN(parseInt(x)) && Object.prototype.toString.call(parseInt(x)) === \"[object Number]\";\n    }\n  }, {\n    key: \"isString\",\n    value: function isString(x) {\n      return Object.prototype.toString.call(x) === \"[object String]\";\n    }\n  }, {\n    key: \"isDate\",\n    value: function isDate(x) {\n      return Object.prototype.toString.call(x) === \"[object Date]\" && x != \"Invalid Date\";\n    }\n  }, {\n    key: \"isArray\",\n    value: function isArray(x) {\n      return Object.prototype.toString.call(x) === \"[object Array]\";\n    }\n  }, {\n    key: \"isObject\",\n    value: function isObject(x) {\n      return Object.prototype.toString.call(x) === \"[object Object]\";\n    }\n  }, {\n    key: \"getTypeOf\",\n    value: function getTypeOf(value) {\n      return this.isArray(value) ? 'array' : this.isObject(value) ? 'object' : this.isInteger(value) ? 'numeric' : this.isDate(new Date(value)) ? 'date' : this.isString(value) ? 'string' : _typeof(value);\n    }\n  }, {\n    key: \"get\",\n    value: function get() {\n      var property = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;\n\n      if (typeof property == \"boolean\") {\n        return this.all();\n      }\n\n      if (property) {\n        var error = Object.keys(this.$ExceptionContainer.errors).filter(function (v) {\n          return v == property;\n        }).shift();\n\n        if (error && this.$ExceptionContainer.errors[error] instanceof Array) {\n          return this.$ExceptionContainer.errors[error];\n        }\n      }\n\n      return [];\n    }\n  }, {\n    key: \"limit\",\n    value: function limit() {\n      var property = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;\n\n      var _limit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;\n\n      if (parseInt(property)) {\n        return this.all().slice(0, property);\n      }\n\n      if (_limit) {\n        return this.get(property).slice(0, parseInt(_limit));\n      }\n    }\n  }, {\n    key: \"first\",\n    value: function first() {\n      var property = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;\n\n      if (property) {\n        return this.get(property).shift();\n      } else {\n        return this.all().shift();\n      }\n    }\n  }, {\n    key: \"all\",\n    value: function all() {\n      var _this2 = this;\n\n      var errorList = [];\n      Object.keys(this.$ExceptionContainer.errors).map(function (v) {\n        return _this2.$ExceptionContainer.errors[v];\n      }).forEach(function (v) {\n        return errorList = _toConsumableArray(errorList).concat(_toConsumableArray(v));\n      });\n      return errorList;\n    }\n  }, {\n    key: \"errors\",\n    value: function errors() {\n      return this.$ExceptionContainer.errors;\n    }\n  }, {\n    key: \"isFailed\",\n    value: function isFailed() {\n      var property = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;\n\n      if (property) {\n        return this.first(property) ? true : false;\n      }\n\n      return this._isFailed;\n    }\n  }, {\n    key: \"setIsFailed\",\n    value: function setIsFailed(bool) {\n      if (this._isFailed != bool) {\n        this._isFailed = bool;\n      }\n    }\n  }, {\n    key: \"fails\",\n    value: function fails() {\n      return this._isFailed;\n    }\n  }, {\n    key: \"isValidated\",\n    value: function isValidated() {\n      return this._isValidated;\n    }\n  }, {\n    key: \"errorCount\",\n    value: function errorCount() {\n      var property = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;\n      return property ? this.all(property).length : this._errorCount;\n    }\n  }, {\n    key: \"clear\",\n    value: function clear() {\n      this.$ExceptionContainer = {\n        errors: {},\n        message: \"\"\n      };\n      return this;\n    }\n  }, {\n    key: \"isFailedRule\",\n    value: function isFailedRule(rule, property) {\n      var match = this.failedRules.filter(function (v) {\n        return v.rule == rule && v.property == property;\n      });\n      return match.length ? match.shift() : null;\n    }\n  }, {\n    key: \"validate\",\n    value: function validate() {\n      this.beginValidate();\n      return this;\n    }\n  }, {\n    key: \"_\",\n    value: function _(str) {\n      return typeof this.$translate[str] != \"undefined\" ? this.$translate[str] : str;\n    }\n  }]);\n\n  return Valinode;\n}();\n\n\n;\n\n//# sourceURL=webpack:///./src/lib/index.js?");

/***/ }),

/***/ "./src/locale/tr-TR.js":
/*!*****************************!*\
  !*** ./src/locale/tr-TR.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  and: \"ve\",\n  required: \":attribute alanı boş olamaz.\",\n  integer: \":attribute sayı olmalıdır.\",\n  string: \":attribute alanının değeri yazı olmalıdır.\",\n  array: \":attribute alanının değeri dizi olmalıdır.\",\n  max: {\n    numeric: \":attribute alanının değeri en fazla :rule_value olabilir. Lütfen düzeltiniz.\",\n    string: \":attribute alanı en fazla :rule_value karakterden oluşabilir. (:length karakter)\",\n    array: \":attribute alanında en fazla :rule_value seçim yapabilirsiniz.\",\n    date: \":attribute alanının tarih aralığı en fazla :rule_value olabilir.\"\n  },\n  min: {\n    numeric: \":attribute alanının değeri en az :rule_value olabilir. Lütfen düzeltiniz.\",\n    string: \":attribute alanı en az :rule_value karakterden oluşabilir.\",\n    array: \":attribute alanında en az :rule_value seçim yapmalısınız.\",\n    date: \":attribute alanının tarih aralığı en az :rule_value olabilir.\"\n  },\n  in: \":attribute alanının değeri geçersizdir.\",\n  bigger_than: \":attribute alanı :other alanından büyük olmalıdır.\",\n  between: \":attribute alanı :other arasında olabilir.\",\n  same: \":attribute alanı :other alanı ile aynı olmalıdır.\",\n  hard_same: \":attribute alanı :other alanı ile aynı olmak zorundadır.\",\n  email: \":attribute alanı geçerli bir email adresi olmalıdır.\",\n  phone: \":attribute alanı geçerli bir telefon numarası olmalıdır.\",\n  date: \":attribute alanı geçerli bir tarih olmalıdır.\"\n});\n\n//# sourceURL=webpack:///./src/locale/tr-TR.js?");

/***/ })

/******/ });