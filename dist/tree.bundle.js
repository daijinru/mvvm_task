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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/task2/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/common.css":
/*!************************!*\
  !*** ./src/common.css ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/task2/index.js":
/*!****************************!*\
  !*** ./src/task2/index.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _common_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common.css */ "./src/common.css");
/* harmony import */ var _common_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_common_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_createElement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/createElement */ "./src/utils/createElement.js");
/* harmony import */ var _tree_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tree.js */ "./src/task2/tree.js");



var json = [{
  "name": "实战训练营",
  key: 1
}, {
  "name": "MVVM设计",
  pid: 1,
  key: 2
}, {
  "name": "webpack配置",
  pid: 1,
  key: 3
}, {
  "name": "递归调用",
  pid: 1,
  key: 4
}, {
  "name": "设计模式实战",
  pid: 1,
  key: 5
}, {
  "name": "订阅发布",
  pid: 4,
  key: 6
}, {
  "name": "原生JS开发",
  pid: 6,
  key: 7
}, {
  "name": "新增测试",
  key: 10
}];

function generateJsonTree() {
  var jsonString = json.reduce(function (acc, curr) {
    acc += '    ' + JSON.stringify(curr) + '\n';
    return acc;
  }, '');
  var resource = "\n  const json = [\n".concat(jsonString, "  ]\n  ");
  var div = new _utils_createElement__WEBPACK_IMPORTED_MODULE_1__["default"]('div');
  var button = new _utils_createElement__WEBPACK_IMPORTED_MODULE_1__["default"]('button');
  var p = new _utils_createElement__WEBPACK_IMPORTED_MODULE_1__["default"]('p');
  var pre = new _utils_createElement__WEBPACK_IMPORTED_MODULE_1__["default"]('pre');
  button.create().insertHTML('打开 console 并点击');
  p.create().append(pre.create().insertHTML(resource).build());
  div.create().append(p.build()).append(button.build());

  button.build().onclick = function (e) {
    console.log(Object(_tree_js__WEBPACK_IMPORTED_MODULE_2__["default"])(json));
  };

  return div.build();
}

document.body.appendChild(generateJsonTree());

/***/ }),

/***/ "./src/task2/tree.js":
/*!***************************!*\
  !*** ./src/task2/tree.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var jsonTree = function jsonTree(jsonObj, pid) {
  var resObj = [];
  jsonObj.forEach(function (curr) {
    if (curr.pid === pid) {
      resObj.push({
        name: curr.name,
        pid: curr.pid || 0,
        key: curr.key,
        children: jsonTree(jsonObj, curr.key)
      });
    }
  });
  return resObj;
};

/* harmony default export */ __webpack_exports__["default"] = (jsonTree);

/***/ }),

/***/ "./src/utils/createElement.js":
/*!************************************!*\
  !*** ./src/utils/createElement.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var CreateElement =
/*#__PURE__*/
function () {
  function CreateElement(elementName) {
    _classCallCheck(this, CreateElement);

    this.elementName = elementName;
    this.element = '';
  }

  _createClass(CreateElement, [{
    key: "create",
    value: function create() {
      this.element = document.createElement(this.elementName);
      return this;
    }
  }, {
    key: "addClass",
    value: function addClass(className) {
      this.element.classList.add(className);
      return this;
    }
  }, {
    key: "append",
    value: function append(element) {
      this.element.appendChild(element);
      return this;
    }
  }, {
    key: "insertHTML",
    value: function insertHTML(htmlText) {
      this.element.innerHTML = htmlText;
      return this;
    }
  }, {
    key: "build",
    value: function build() {
      return this.element;
    }
  }]);

  return CreateElement;
}();

/* harmony default export */ __webpack_exports__["default"] = (CreateElement);

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Rhc2syL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy90YXNrMi90cmVlLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9jcmVhdGVFbGVtZW50LmpzIl0sIm5hbWVzIjpbImpzb24iLCJrZXkiLCJwaWQiLCJnZW5lcmF0ZUpzb25UcmVlIiwianNvblN0cmluZyIsInJlZHVjZSIsImFjYyIsImN1cnIiLCJKU09OIiwic3RyaW5naWZ5IiwicmVzb3VyY2UiLCJkaXYiLCJDcmVhdGVFbGVtZW50IiwiYnV0dG9uIiwicCIsInByZSIsImNyZWF0ZSIsImluc2VydEhUTUwiLCJhcHBlbmQiLCJidWlsZCIsIm9uY2xpY2siLCJlIiwiY29uc29sZSIsImxvZyIsInRyZWUiLCJkb2N1bWVudCIsImJvZHkiLCJhcHBlbmRDaGlsZCIsImpzb25UcmVlIiwianNvbk9iaiIsInJlc09iaiIsImZvckVhY2giLCJwdXNoIiwibmFtZSIsImNoaWxkcmVuIiwiZWxlbWVudE5hbWUiLCJlbGVtZW50IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsImNsYXNzTGlzdCIsImFkZCIsImh0bWxUZXh0IiwiaW5uZXJIVE1MIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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LEUiLCJmaWxlIjoidHJlZS5idW5kbGUuanM/NTBkZmNjYzI3NDQyZGFmOGI2ZDUiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy90YXNrMi9pbmRleC5qc1wiKTtcbiIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luIiwiaW1wb3J0ICcuLi9jb21tb24uY3NzJ1xuaW1wb3J0IENyZWF0ZUVsZW1lbnQgZnJvbSAnLi4vdXRpbHMvY3JlYXRlRWxlbWVudCdcbmltcG9ydCB0cmVlIGZyb20gJy4vdHJlZS5qcydcblxuY29uc3QganNvbiA9IFtcbiAgICAgIHsgXCJuYW1lXCI6IFwi5a6e5oiY6K6t57uD6JClXCIsIGtleTogMX0sXG4gICAgICB7IFwibmFtZVwiOiBcIk1WVk3orr7orqFcIiwgcGlkOjEsIGtleToyIH0sXG4gICAgICB7IFwibmFtZVwiOiBcIndlYnBhY2vphY3nva5cIiwgcGlkOjEsIGtleTogM30sXG4gICAgICB7IFwibmFtZVwiOiBcIumAkuW9kuiwg+eUqFwiLCBwaWQ6IDEsIGtleTogNH0sXG4gICAgICB7IFwibmFtZVwiOiBcIuiuvuiuoeaooeW8j+WunuaImFwiLCBwaWQ6IDEsIGtleTogNX0sXG4gICAgICB7IFwibmFtZVwiOiBcIuiuoumYheWPkeW4g1wiLCBwaWQ6IDQsIGtleTogNn0sXG4gICAgICB7IFwibmFtZVwiOiBcIuWOn+eUn0pT5byA5Y+RXCIsIHBpZDogNiwga2V5OiA3fSxcbiAgICAgIHsgXCJuYW1lXCI6IFwi5paw5aKe5rWL6K+VXCIsIGtleTogMTB9LFxuICAgIF1cblxuZnVuY3Rpb24gZ2VuZXJhdGVKc29uVHJlZSgpIHtcbiAgY29uc3QganNvblN0cmluZyA9IGpzb24ucmVkdWNlKGZ1bmN0aW9uKGFjYywgY3Vycikge1xuICAgIGFjYyArPSAnICAgICcgKyBKU09OLnN0cmluZ2lmeShjdXJyKSArICdcXG4nXG4gICAgcmV0dXJuIGFjY1xuICB9LCAnJylcbiAgY29uc3QgcmVzb3VyY2UgPSBgXG4gIGNvbnN0IGpzb24gPSBbXFxuJHtqc29uU3RyaW5nfSAgXVxuICBgXG5cbiAgY29uc3QgZGl2ID0gbmV3IENyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIGNvbnN0IGJ1dHRvbiA9IG5ldyBDcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICBjb25zdCBwID0gbmV3IENyZWF0ZUVsZW1lbnQoJ3AnKVxuICBjb25zdCBwcmUgPSBuZXcgQ3JlYXRlRWxlbWVudCgncHJlJylcblxuICBidXR0b24uY3JlYXRlKCkuaW5zZXJ0SFRNTCgn5omT5byAIGNvbnNvbGUg5bm254K55Ye7JylcbiAgcC5jcmVhdGUoKS5hcHBlbmQocHJlLmNyZWF0ZSgpLmluc2VydEhUTUwocmVzb3VyY2UpLmJ1aWxkKCkpXG4gIGRpdi5jcmVhdGUoKS5hcHBlbmQocC5idWlsZCgpKS5hcHBlbmQoYnV0dG9uLmJ1aWxkKCkpXG5cbiAgYnV0dG9uLmJ1aWxkKCkub25jbGljayA9IGUgPT4ge1xuICAgIGNvbnNvbGUubG9nKHRyZWUoanNvbikpXG4gIH1cblxuICByZXR1cm4gZGl2LmJ1aWxkKClcbn1cblxuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChnZW5lcmF0ZUpzb25UcmVlKCkpIiwiY29uc3QganNvblRyZWUgPSBmdW5jdGlvbihqc29uT2JqLCBwaWQpe1xuICAgIGNvbnN0IHJlc09iaiA9IFtdXG4gICAganNvbk9iai5mb3JFYWNoKGN1cnIgPT4ge1xuICAgICAgICBpZiAoY3Vyci5waWQgPT09IHBpZCkge1xuICAgICAgICAgICAgcmVzT2JqLnB1c2goe1xuICAgICAgICAgICAgICAgIG5hbWU6IGN1cnIubmFtZSxcbiAgICAgICAgICAgICAgICBwaWQ6IGN1cnIucGlkIHx8IDAsXG4gICAgICAgICAgICAgICAga2V5OiBjdXJyLmtleSxcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjoganNvblRyZWUoanNvbk9iaiwgY3Vyci5rZXkpXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfSlcbiAgICByZXR1cm4gcmVzT2JqXG59XG5cbmV4cG9ydCBkZWZhdWx0IGpzb25UcmVlIiwiY2xhc3MgQ3JlYXRlRWxlbWVudHtcbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50TmFtZSkge1xuICAgICAgICB0aGlzLmVsZW1lbnROYW1lID0gZWxlbWVudE5hbWVcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gJydcbiAgICB9XG5cbiAgICBjcmVhdGUoKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGhpcy5lbGVtZW50TmFtZSlcbiAgICAgICAgcmV0dXJuIHRoaXNcbiAgICB9XG5cbiAgICBhZGRDbGFzcyhjbGFzc05hbWUpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKVxuICAgICAgICByZXR1cm4gdGhpc1xuICAgIH1cblxuICAgIGFwcGVuZChlbGVtZW50KSB7XG4gICAgICAgIHRoaXMuZWxlbWVudC5hcHBlbmRDaGlsZChlbGVtZW50KVxuICAgICAgICByZXR1cm4gdGhpc1xuICAgIH1cblxuICAgIGluc2VydEhUTUwoaHRtbFRleHQpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50LmlubmVySFRNTCA9IGh0bWxUZXh0XG4gICAgICAgIHJldHVybiB0aGlzXG4gICAgfVxuXG4gICAgYnVpbGQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmVsZW1lbnRcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENyZWF0ZUVsZW1lbnQiXSwic291cmNlUm9vdCI6IiJ9