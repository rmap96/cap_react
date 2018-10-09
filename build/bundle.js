/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "build/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


var _big = __webpack_require__(3);

var _big2 = _interopRequireDefault(_big);

var _small = __webpack_require__(4);

var _small2 = _interopRequireDefault(_small);

__webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var image = document.createElement('img'); // Every non JS file must have their extension specified

image.src = _small2.default;

document.body.appendChild(image);

var bigImage = document.createElement('img');
bigImage.src = _big2.default;

document.body.appendChild(bigImage);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var sum = function sum(a, b) {
  return a + b;
};

exports.default = sum;

/***/ },
/* 2 */
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "76d1de4f7f5453168db91c8401fd11db.png";

/***/ },
/* 4 */
/***/ function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


var _sum = __webpack_require__(1);

var _sum2 = _interopRequireDefault(_sum);

__webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// relative file reference
//const sum = require('./sum');
var total = (0, _sum2.default)(10, 5);
console.log(total);

/***/ }
/******/ ]);