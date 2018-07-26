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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__actions__ = __webpack_require__(4);



const keyBuffer = new __WEBPACK_IMPORTED_MODULE_0__buffer__["a" /* KeyBuffer */]();

const focusHandler = function() {
  this.classList.add('disabled');
};
/* harmony export (immutable) */ __webpack_exports__["a"] = focusHandler;


const keydownHandler = function(event) {
  const isDisabled = this.classList.contains('disabled');
  if (isDisabled) {
    event.preventDefault();
  }
  switch (event.key) {
    case 'Escape':
      this.classList.add('disabled');
      break;
    case 'i':
      if (isDisabled) {
        this.classList.remove('disabled');
        return;
      }
      break;
    case 'd':
      if (isDisabled) {
        __WEBPACK_IMPORTED_MODULE_1__actions__["a" /* ddAction */].apply(this, [keyBuffer]);
      }
      break;
    case 'y':
      if (isDisabled) {
        __WEBPACK_IMPORTED_MODULE_1__actions__["b" /* yyAction */].apply(this, [keyBuffer]);
      }
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


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const ddAction = function(buffer) {
  if (!buffer.has('d')) {
    buffer.push('d');
    event.preventDefault();
    setTimeout(() => {
      buffer.clear();
    }, 1000);
    return;
  }
  const position = this.selectionStart,
    content = this.value.trim(),
    lines = content.split('\n');

  if (lines.length === 1) {
    this.value = '';
  }

  const currentLine = content
    .slice(0, position)
    .split('\n').length;

  const filtered = lines.filter((line, index) => (index + 1) !== currentLine);

  this.value = filtered.join('\n');
  buffer.clear();
};
/* harmony export (immutable) */ __webpack_exports__["a"] = ddAction;


const yyAction = function(buffer) {
  if (!buffer.has('y')) {
    buffer.push('y');
    event.preventDefault();
    setTimeout(() => {
      buffer.clear();
    }, 1000);
    return;
  }
  const position = this.selectionStart,
    content = this.value.trim(),
    lines = content.split('\n');

  const currentLine = content
    .slice(0, position)
    .split('\n').length;

  const updatedContent = [];

  lines.forEach((line, number) => {
    updatedContent.push(line);
    if ((number + 1) === currentLine) {
      updatedContent.push(line);
    }
  });

  this.value = updatedContent.join('\n');
  buffer.clear();
};
/* harmony export (immutable) */ __webpack_exports__["b"] = yyAction;



/***/ })
/******/ ]);