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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/task3/index.js");
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

/***/ "./src/task3/index.js":
/*!****************************!*\
  !*** ./src/task3/index.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _common_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common.css */ "./src/common.css");
/* harmony import */ var _common_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_common_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_createElement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/createElement */ "./src/utils/createElement.js");
/* harmony import */ var _observer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./observer */ "./src/task3/observer.js");
/* harmony import */ var _utils___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/_ */ "./src/utils/_.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




 // 约会（消息）发布器

var DateClient =
/*#__PURE__*/
function (_Observer) {
  _inherits(DateClient, _Observer);

  function DateClient(users) {
    var _this;

    _classCallCheck(this, DateClient);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(DateClient).call(this));
    _this.users = {};
    _this.user = {};
    return _this;
  }

  _createClass(DateClient, [{
    key: "register",
    value: function register(user) {
      if (!Object(_utils___WEBPACK_IMPORTED_MODULE_3__["isObject"])(user) || !Object(_utils___WEBPACK_IMPORTED_MODULE_3__["isString"])(user.name) || !Object(_utils___WEBPACK_IMPORTED_MODULE_3__["isString"])(user.password)) {
        console.error('register failed');
        return false;
      }

      this.users[user.name] = user;
    }
  }, {
    key: "login",
    value: function login(username, password) {
      var user = this.users[username];

      if (!user) {
        console.error('user does not exist');
        return false;
      }

      if (user.password !== password) {
        console.error('incorrect password');
        return false;
      }

      console.info("".concat(username, " login success"));
      this.user = {
        username: username,
        password: password
      };
    } // 载入用户列表

  }, {
    key: "load",
    value: function load(users) {
      try {
        for (var i = 0; i < users.length; i++) {
          console.info("\u8F7D\u5165 ".concat(users[i].name, " \u5B8C\u6BD5"));
          this.update(users[i].name, users[i].handle);
        }
      } catch (e) {
        console.error(e);
      }
    } // 读取约会列表

  }, {
    key: "list",
    value: function list() {
      return this.handlers;
    } // 发布订阅

  }, {
    key: "update",
    value: function update(name, handle) {
      this.on(name, handle);
    } // 向目标用户发出邀请

  }, {
    key: "invite",
    value: function invite(user, invitation) {
      console.info("\u5411 ".concat(user, " \u53D1\u51FA\u4E86\u9080\u8BF7"));
      this.emit(user, invitation);
    }
  }]);

  return DateClient;
}(_observer__WEBPACK_IMPORTED_MODULE_2__["default"]);

var userlist = [{
  name: 'Mary',
  handle: function handle(evt) {
    console.info("得到了" + evt.name + "的" + evt.date + "的邀请！");
    console.info("在" + evt.year + "年" + evt.month + "月" + evt.date + "日，在" + evt.where + evt.todo);
  }
}, {
  name: 'Lily',
  handle: function handle(params) {
    console.info(params);
  }
}];
var Tom = {
  name: "Tom",
  password: '123456',
  date: "约会",
  year: "2019",
  month: "2",
  where: "老门框卤煮店",
  todo: "共进晚餐"
};
var dateClient = new DateClient(); // 注册

dateClient.register(Tom); // 登陆

dateClient.login(Tom.name, Tom.password); // 载入用户列表

dateClient.load(userlist); // 读取约会列表

var datable = dateClient.list(); // 约会 Mary

dateClient.invite('Mary', {
  name: "男朋友",
  date: "约会",
  year: "2019",
  month: "2",
  where: "老门框卤煮店",
  todo: "共进晚餐"
});
var describe = "\n  \u901A\u8FC7\u53D1\u5E03\u8BA2\u9605\u6A21\u5F0F\u5B9E\u73B0 Boy \u5BF9 Girl \u7684\u9080\u8BF7\u3002\n";

function generateStory() {
  var div = new _utils_createElement__WEBPACK_IMPORTED_MODULE_1__["default"]('div').create();
  var p = new _utils_createElement__WEBPACK_IMPORTED_MODULE_1__["default"]('p').create();
  var pre = new _utils_createElement__WEBPACK_IMPORTED_MODULE_1__["default"]('pre').create();
  p.append(pre.insertHTML(describe).build());
  div.append(p.build());
  return div.build();
}

document.body.appendChild(generateStory());

/***/ }),

/***/ "./src/task3/observer.js":
/*!*******************************!*\
  !*** ./src/task3/observer.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/_ */ "./src/utils/_.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Observer =
/*#__PURE__*/
function () {
  function Observer() {
    _classCallCheck(this, Observer);

    this.handlers = {};
  }

  _createClass(Observer, [{
    key: "on",
    value: function on(type, handle) {
      if (!Object(_utils___WEBPACK_IMPORTED_MODULE_0__["isFunction"])(handle)) {
        return false;
      }

      if (!Object(_utils___WEBPACK_IMPORTED_MODULE_0__["has"])(this.handlers, type)) {
        this.handlers[type] = [];
      }

      this.handlers[type].push(handle);
    }
  }, {
    key: "off",
    value: function off(type, handle) {
      if (!Object(_utils___WEBPACK_IMPORTED_MODULE_0__["has"])(this.handlers, type)) {
        return false;
      }

      var handlers = this.handlers[type];

      if (!handle) {
        this.handlers[type].length = 0;
      } else {
        for (var i = 0; i < handlers.length; i++) {
          if (handlers[i] === handle) {
            handlers.splice(i, 1);
          }
        }
      }
    }
  }, {
    key: "emit",
    value: function emit(type) {
      if (!Object(_utils___WEBPACK_IMPORTED_MODULE_0__["has"])(this.handlers, type)) {
        return false;
      }

      Array.prototype.shift.apply(arguments);

      for (var i = 0; i < this.handlers[type].length; i++) {
        this.handlers[type][i].apply(this, arguments);
      }
    }
  }]);

  return Observer;
}();

/* harmony default export */ __webpack_exports__["default"] = (Observer);

/***/ }),

/***/ "./src/utils/_.js":
/*!************************!*\
  !*** ./src/utils/_.js ***!
  \************************/
/*! exports provided: isObject, getTag, isFunction, has, isString */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isObject", function() { return isObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTag", function() { return getTag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFunction", function() { return isFunction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "has", function() { return has; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isString", function() { return isString; });
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function isObject(value) {
  var type = _typeof(value);

  return value != null && (type == 'object' || type == 'function');
}
function getTag(value) {
  if (value == null) {
    return value === undefined ? '[object Undefined]' : '[object Null]';
  }

  return toString.call(value);
}
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }

  var tag = getTag(value);
  return tag == '[object Function]' || tag == '[object AsyncFunction]' || tag == '[object GeneratorFunction]' || tag == '[object Proxy]';
}
function has(object, key) {
  var hasOwnProperty = Object.prototype.hasOwnProperty;
  return object != null && hasOwnProperty.call(object, key);
}
function isString(value) {
  var type = _typeof(value);

  return type == 'string' || type == 'object' && value != null && !Array.isArray(value) && getTag(value) == '[object String]';
}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Rhc2szL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy90YXNrMy9vYnNlcnZlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvXy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvY3JlYXRlRWxlbWVudC5qcyJdLCJuYW1lcyI6WyJEYXRlQ2xpZW50IiwidXNlcnMiLCJ1c2VyIiwiaXNPYmplY3QiLCJpc1N0cmluZyIsIm5hbWUiLCJwYXNzd29yZCIsImNvbnNvbGUiLCJlcnJvciIsInVzZXJuYW1lIiwiaW5mbyIsImkiLCJsZW5ndGgiLCJ1cGRhdGUiLCJoYW5kbGUiLCJlIiwiaGFuZGxlcnMiLCJvbiIsImludml0YXRpb24iLCJlbWl0IiwiT2JzZXJ2ZXIiLCJ1c2VybGlzdCIsImV2dCIsImRhdGUiLCJ5ZWFyIiwibW9udGgiLCJ3aGVyZSIsInRvZG8iLCJwYXJhbXMiLCJUb20iLCJkYXRlQ2xpZW50IiwicmVnaXN0ZXIiLCJsb2dpbiIsImxvYWQiLCJkYXRhYmxlIiwibGlzdCIsImludml0ZSIsImRlc2NyaWJlIiwiZ2VuZXJhdGVTdG9yeSIsImRpdiIsIkNyZWF0ZUVsZW1lbnQiLCJjcmVhdGUiLCJwIiwicHJlIiwiYXBwZW5kIiwiaW5zZXJ0SFRNTCIsImJ1aWxkIiwiZG9jdW1lbnQiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJ0eXBlIiwiaXNGdW5jdGlvbiIsImhhcyIsInB1c2giLCJzcGxpY2UiLCJBcnJheSIsInByb3RvdHlwZSIsInNoaWZ0IiwiYXBwbHkiLCJhcmd1bWVudHMiLCJ2YWx1ZSIsImdldFRhZyIsInVuZGVmaW5lZCIsInRvU3RyaW5nIiwiY2FsbCIsInRhZyIsIm9iamVjdCIsImtleSIsImhhc093blByb3BlcnR5IiwiT2JqZWN0IiwiaXNBcnJheSIsImVsZW1lbnROYW1lIiwiZWxlbWVudCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJjbGFzc0xpc3QiLCJhZGQiLCJodG1sVGV4dCIsImlubmVySFRNTCJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBLHlDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7Q0FHQTs7SUFDTUEsVTs7Ozs7QUFDSixzQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNqQjtBQUNBLFVBQUtBLEtBQUwsR0FBYSxFQUFiO0FBQ0EsVUFBS0MsSUFBTCxHQUFZLEVBQVo7QUFIaUI7QUFJbEI7Ozs7NkJBRVFBLEksRUFBTTtBQUNiLFVBQUksQ0FBQ0Msd0RBQVEsQ0FBQ0QsSUFBRCxDQUFULElBQW1CLENBQUNFLHdEQUFRLENBQUNGLElBQUksQ0FBQ0csSUFBTixDQUE1QixJQUEyQyxDQUFDRCx3REFBUSxDQUFDRixJQUFJLENBQUNJLFFBQU4s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QUNIOzs7Ozs7QUFHVWhDLDRFQUFmLEUiLCJmaWxlIjoib2JzZXJ2ZXIuYnVuZGxlLmpzPzY5YTViZWYzZmU1YTYyZDFlNDkzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvdGFzazMvaW5kZXguanNcIik7XG4iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpbiIsImltcG9ydCAnLi4vY29tbW9uLmNzcydcbmltcG9ydCBDcmVhdGVFbGVtZW50IGZyb20gJy4uL3V0aWxzL2NyZWF0ZUVsZW1lbnQnXG5pbXBvcnQgT2JzZXJ2ZXIgZnJvbSAnLi9vYnNlcnZlcidcbmltcG9ydCB7aXNPYmplY3QsIGlzU3RyaW5nLCBoYXN9IGZyb20gJy4uL3V0aWxzL18nO1xuXG4vLyDnuqbkvJrvvIjmtojmga/vvInlj5HluIPlmahcbmNsYXNzIERhdGVDbGllbnQgZXh0ZW5kcyBPYnNlcnZlciB7XG4gIGNvbnN0cnVjdG9yKHVzZXJzKSB7XG4gICAgc3VwZXIoKVxuICAgIHRoaXMudXNlcnMgPSB7fVxuICAgIHRoaXMudXNlciA9IHt9XG4gIH1cblxuICByZWdpc3Rlcih1c2VyKSB7XG4gICAgaWYgKCFpc09iamVjdCh1c2VyKSB8fCAhaXNTdHJpbmcodXNlci5uYW1lKSB8fCAhaXNTdHJpbmcodXNlci5wYXNzd29yZCkpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ3JlZ2lzdGVyIGZhaWxlZCcpXG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG4gICAgdGhpcy51c2Vyc1t1c2VyLm5hbWVdID0gdXNlclxuICB9XG5cbiAgbG9naW4odXNlcm5hbWUsIHBhc3N3b3JkKSB7XG4gICAgY29uc3QgdXNlciA9IHRoaXMudXNlcnNbdXNlcm5hbWVdXG4gICAgaWYgKCF1c2VyKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCd1c2VyIGRvZXMgbm90IGV4aXN0JylcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cbiAgICBpZiAodXNlci5wYXNzd29yZCAhPT0gcGFzc3dvcmQpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ2luY29ycmVjdCBwYXNzd29yZCcpXG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG4gICAgY29uc29sZS5pbmZvKGAke3VzZXJuYW1lfSBsb2dpbiBzdWNjZXNzYClcbiAgICB0aGlzLnVzZXIgPSB7dXNlcm5hbWUsIHBhc3N3b3JkfVxuICB9XG5cbiAgLy8g6L295YWl55So5oi35YiX6KGoXG4gIGxvYWQodXNlcnMpIHtcbiAgICB0cnkge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB1c2Vycy5sZW5ndGg7IGkgKyspIHtcbiAgICAgICAgY29uc29sZS5pbmZvKGDovb3lhaUgJHt1c2Vyc1tpXS5uYW1lfSDlrozmr5VgKVxuICAgICAgICB0aGlzLnVwZGF0ZSh1c2Vyc1tpXS5uYW1lLCB1c2Vyc1tpXS5oYW5kbGUpXG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY29uc29sZS5lcnJvcihlKVxuICAgIH1cbiAgfVxuXG4gIC8vIOivu+WPlue6puS8muWIl+ihqFxuICBsaXN0KCkge1xuICAgIHJldHVybiB0aGlzLmhhbmRsZXJzXG4gIH1cblxuICAvLyDlj5HluIPorqLpmIVcbiAgdXBkYXRlKG5hbWUsIGhhbmRsZSkge1xuICAgIHRoaXMub24obmFtZSwgaGFuZGxlKVxuICB9XG5cbiAgLy8g5ZCR55uu5qCH55So5oi35Y+R5Ye66YKA6K+3XG4gIGludml0ZSh1c2VyLCBpbnZpdGF0aW9uKSB7XG4gICAgY29uc29sZS5pbmZvKGDlkJEgJHt1c2VyfSDlj5Hlh7rkuobpgoDor7dgKVxuICAgIHRoaXMuZW1pdCh1c2VyLCBpbnZpdGF0aW9uKVxuICB9XG59IFxuXG5jb25zdCB1c2VybGlzdCA9IFt7XG4gIG5hbWU6ICdNYXJ5JyxcbiAgaGFuZGxlOiBmdW5jdGlvbihldnQpIHtcbiAgICBjb25zb2xlLmluZm8oXCLlvpfliLDkuoZcIitldnQubmFtZStcIueahFwiICsgZXZ0LmRhdGUgKyBcIueahOmCgOivt++8gVwiKVxuICAgIGNvbnNvbGUuaW5mbyhcIuWcqFwiICsgZXZ0LnllYXIgKyBcIuW5tFwiICsgZXZ0Lm1vbnRoICsgXCLmnIhcIiArIGV2dC5kYXRlICsgXCLml6XvvIzlnKhcIiArIGV2dC53aGVyZSArIGV2dC50b2RvKVxuICB9XG59LHtcbiAgbmFtZTogJ0xpbHknLFxuICBoYW5kbGU6IGZ1bmN0aW9uKHBhcmFtcykge1xuICAgIGNvbnNvbGUuaW5mbyhwYXJhbXMpXG4gIH1cbn1dXG5cbmNvbnN0IFRvbSA9IHtcbiAgbmFtZTpcIlRvbVwiLFxuICBwYXNzd29yZDogJzEyMzQ1NicsXG4gIGRhdGU6XCLnuqbkvJpcIixcbiAgeWVhcjpcIjIwMTlcIixcbiAgbW9udGg6XCIyXCIsXG4gIHdoZXJlOlwi6ICB6Zeo5qGG5Y2k54Wu5bqXXCIsXG4gIHRvZG86XCLlhbHov5vmmZrppJBcIlxufVxuXG5jb25zdCBkYXRlQ2xpZW50ID0gbmV3IERhdGVDbGllbnQoKVxuLy8g5rOo5YaMXG5kYXRlQ2xpZW50LnJlZ2lzdGVyKFRvbSlcbi8vIOeZu+mZhlxuZGF0ZUNsaWVudC5sb2dpbihUb20ubmFtZSwgVG9tLnBhc3N3b3JkKVxuLy8g6L295YWl55So5oi35YiX6KGoXG5kYXRlQ2xpZW50LmxvYWQodXNlcmxpc3QpXG4vLyDor7vlj5bnuqbkvJrliJfooahcbmNvbnN0IGRhdGFibGUgPSBkYXRlQ2xpZW50Lmxpc3QoKVxuLy8g57qm5LyaIE1hcnlcbmRhdGVDbGllbnQuaW52aXRlKCdNYXJ5Jywge1xuICBuYW1lOlwi55S35pyL5Y+LXCIsXG4gIGRhdGU6XCLnuqbkvJpcIixcbiAgeWVhcjpcIjIwMTlcIixcbiAgbW9udGg6XCIyXCIsXG4gIHdoZXJlOlwi6ICB6Zeo5qGG5Y2k54Wu5bqXXCIsXG4gIHRvZG86XCLlhbHov5vmmZrppJBcIlxufSlcblxuY29uc3QgZGVzY3JpYmUgPSBgXG4gIOmAmui/h+WPkeW4g+iuoumYheaooeW8j+WunueOsCBCb3kg5a+5IEdpcmwg55qE6YKA6K+344CCXG5gXG5cbmZ1bmN0aW9uIGdlbmVyYXRlU3RvcnkoKSB7XG4gIGNvbnN0IGRpdiA9IG5ldyBDcmVhdGVFbGVtZW50KCdkaXYnKS5jcmVhdGUoKVxuICBjb25zdCBwID0gbmV3IENyZWF0ZUVsZW1lbnQoJ3AnKS5jcmVhdGUoKVxuICBjb25zdCBwcmUgPSBuZXcgQ3JlYXRlRWxlbWVudCgncHJlJykuY3JlYXRlKClcblxuICBwLmFwcGVuZChwcmUuaW5zZXJ0SFRNTChkZXNjcmliZSkuYnVpbGQoKSlcbiAgZGl2LmFwcGVuZChwLmJ1aWxkKCkpXG5cbiAgcmV0dXJuIGRpdi5idWlsZCgpXG59XG5cbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZ2VuZXJhdGVTdG9yeSgpKVxuXG4iLCJpbXBvcnQge2lzRnVuY3Rpb24sIGhhc30gZnJvbSAnLi4vdXRpbHMvXydcblxuY2xhc3MgT2JzZXJ2ZXIge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmhhbmRsZXJzID0ge31cbiAgfVxuXG4gIG9uKHR5cGUsIGhhbmRsZSkge1xuICAgIGlmICghaXNGdW5jdGlvbihoYW5kbGUpKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBpZiAoIWhhcyh0aGlzLmhhbmRsZXJzLCB0eXBlKSkge1xuICAgICAgdGhpcy5oYW5kbGVyc1t0eXBlXSA9IFtdXG4gICAgfVxuXG4gICAgdGhpcy5oYW5kbGVyc1t0eXBlXS5wdXNoKGhhbmRsZSlcbiAgfVxuXG4gIG9mZih0eXBlLCBoYW5kbGUpIHtcbiAgICBpZiAoIWhhcyh0aGlzLmhhbmRsZXJzLCB0eXBlKSkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgbGV0IGhhbmRsZXJzID0gdGhpcy5oYW5kbGVyc1t0eXBlXVxuICAgIGlmICghaGFuZGxlKSB7XG4gICAgICB0aGlzLmhhbmRsZXJzW3R5cGVdLmxlbmd0aCA9IDBcbiAgICB9IGVsc2Uge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBoYW5kbGVycy5sZW5ndGg7IGkgKyspIHtcbiAgICAgICAgaWYgKGhhbmRsZXJzW2ldID09PSBoYW5kbGUpIHtcbiAgICAgICAgICBoYW5kbGVycy5zcGxpY2UoaSwgMSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGVtaXQodHlwZSkge1xuICAgIGlmICghaGFzKHRoaXMuaGFuZGxlcnMsIHR5cGUpKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBBcnJheS5wcm90b3R5cGUuc2hpZnQuYXBwbHkoYXJndW1lbnRzKVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmhhbmRsZXJzW3R5cGVdLmxlbmd0aDsgaSArKykge1xuICAgICAgdGhpcy5oYW5kbGVyc1t0eXBlXVtpXS5hcHBseSh0aGlzLCBhcmd1bWVudHMpXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE9ic2VydmVyIiwiZXhwb3J0IGZ1bmN0aW9uIGlzT2JqZWN0KHZhbHVlKSB7XG4gIGNvbnN0IHR5cGUgPSB0eXBlb2YgdmFsdWVcbiAgcmV0dXJuIHZhbHVlICE9IG51bGwgJiYgKHR5cGUgPT0gJ29iamVjdCcgfHwgdHlwZSA9PSAnZnVuY3Rpb24nKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VGFnKHZhbHVlKSB7XG4gIGlmICh2YWx1ZSA9PSBudWxsKSB7XG4gICAgcmV0dXJuIHZhbHVlID09PSB1bmRlZmluZWQgPyAnW29iamVjdCBVbmRlZmluZWRdJyA6ICdbb2JqZWN0IE51bGxdJ1xuICB9XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbHVlKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNGdW5jdGlvbih2YWx1ZSkge1xuICBpZiAoIWlzT2JqZWN0KHZhbHVlKSkge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG4gIGNvbnN0IHRhZyA9IGdldFRhZyh2YWx1ZSlcbiAgcmV0dXJuIHRhZyA9PSAnW29iamVjdCBGdW5jdGlvbl0nIHx8IHRhZyA9PSAnW29iamVjdCBBc3luY0Z1bmN0aW9uXScgfHxcbiAgICB0YWcgPT0gJ1tvYmplY3QgR2VuZXJhdG9yRnVuY3Rpb25dJyB8fCB0YWcgPT0gJ1tvYmplY3QgUHJveHldJ1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaGFzKG9iamVjdCwga2V5KSB7XG4gIGNvbnN0IGhhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eVxuICByZXR1cm4gb2JqZWN0ICE9IG51bGwgJiYgaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIGtleSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzU3RyaW5nKHZhbHVlKSB7XG4gIGNvbnN0IHR5cGUgPSB0eXBlb2YgdmFsdWVcbiAgcmV0dXJuIHR5cGUgPT0gJ3N0cmluZycgfHwgKHR5cGUgPT0gJ29iamVjdCcgJiYgdmFsdWUgIT0gbnVsbCAmJiAhQXJyYXkuaXNBcnJheSh2YWx1ZSkgJiYgZ2V0VGFnKHZhbHVlKSA9PSAnW29iamVjdCBTdHJpbmddJylcbn0iLCJjbGFzcyBDcmVhdGVFbGVtZW50e1xuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnROYW1lKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudE5hbWUgPSBlbGVtZW50TmFtZVxuICAgICAgICB0aGlzLmVsZW1lbnQgPSAnJ1xuICAgIH1cblxuICAgIGNyZWF0ZSgpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0aGlzLmVsZW1lbnROYW1lKVxuICAgICAgICByZXR1cm4gdGhpc1xuICAgIH1cblxuICAgIGFkZENsYXNzKGNsYXNzTmFtZSkge1xuICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpXG4gICAgICAgIHJldHVybiB0aGlzXG4gICAgfVxuXG4gICAgYXBwZW5kKGVsZW1lbnQpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50LmFwcGVuZENoaWxkKGVsZW1lbnQpXG4gICAgICAgIHJldHVybiB0aGlzXG4gICAgfVxuXG4gICAgaW5zZXJ0SFRNTChodG1sVGV4dCkge1xuICAgICAgICB0aGlzLmVsZW1lbnQuaW5uZXJIVE1MID0gaHRtbFRleHRcbiAgICAgICAgcmV0dXJuIHRoaXNcbiAgICB9XG5cbiAgICBidWlsZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZWxlbWVudFxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ3JlYXRlRWxlbWVudCJdLCJzb3VyY2VSb290IjoiIn0=