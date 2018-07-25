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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__manager__ = __webpack_require__(1);


Object(__WEBPACK_IMPORTED_MODULE_0__manager__["a" /* init */])();


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__handlers__ = __webpack_require__(2);


const init = function () {
  const textAreas = targets();
  if (textAreas.length === 0) {
    return;
  }
  listeners(textAreas);
};
/* harmony export (immutable) */ __webpack_exports__["a"] = init;


const targets = () => Array.from(
  document.getElementsByTagName('textarea')
);
/* unused harmony export targets */



function listeners(targets) {
  targets.forEach(function(target){
    target.addEventListener('focus', __WEBPACK_IMPORTED_MODULE_0__handlers__["a" /* focusHandler */]);
  });
  targets.forEach(function(target){
    target.addEventListener('keydown', __WEBPACK_IMPORTED_MODULE_0__handlers__["b" /* keydownHandler */]);
  });
}


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__buffer__ = __webpack_require__(3);


const keyBuffer = new __WEBPACK_IMPORTED_MODULE_0__buffer__["a" /* KeyBuffer */]();

const focusHandler = function() {
  this.setAttribute('readonly', true);
};
/* harmony export (immutable) */ __webpack_exports__["a"] = focusHandler;


const keydownHandler = function(event, ) {
  const key = event.key;
  switch (key) {
    case 'Escape':
      this.setAttribute('readonly', true);
      break;
    case 'i':
      if (this.hasAttribute('readonly')) {
        this.removeAttribute('readonly');
        event.preventDefault();
        return;
      }
      break;
    case 'd':
      if (!this.hasAttribute('readonly')) {
        return;
      }
      if (!keyBuffer.has('d')) {
        keyBuffer.push('d');
        event.preventDefault();
        setTimeout(() => {
          keyBuffer.clear();
        }, 1000);
        return;
      }
      const position = this.selectionStart;
      const content = this.value.trim();
      const lines = content.split('\n');

      if (lines.length === 1) {
        this.value = '';
      }

      let acumPosition = 0;

      const cleaned = lines.map((line) => {
        let oldPosition = acumPosition;
        acumPosition += line.length;
        if (position > oldPosition && position <= acumPosition) {
          return '';
        }
        return line;
      });

      this.value = cleaned.join('\n');
      keyBuffer.clear();
      break;
    default:
      return;
  }
};
/* harmony export (immutable) */ __webpack_exports__["b"] = keydownHandler;



/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = KeyBuffer;
function KeyBuffer () {
  this.keys = [];
}

/**
 * @param {String} key
 */
KeyBuffer.prototype.push = function(key) {
  this.keys.push(key);
};

/**
 * @param {String} key
 * @returns {Boolean}
 */
KeyBuffer.prototype.has = function(key) {
  return this.keys.indexOf(key) !== -1;
};

KeyBuffer.prototype.clear = function() {
  this.keys = [];
};


/***/ })
/******/ ]);