webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Projects/index.js":
/*!**************************************!*\
  !*** ./components/Projects/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swr */ "./node_modules/swr/esm/index.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ "./components/Projects/style.css");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_3__);


var _jsxFileName = "C:\\Users\\bmalk\\nextPort\\components\\Projects\\index.js",
    _s = $RefreshSig$();





var fetcher = function fetcher(url) {
  return fetch(url).then(function (res) {
    return res.json();
  });
};

function Projects() {
  _s();

  var _useSwr = useSwr('/api/projects', fetcher),
      data = _useSwr.data,
      error = _useSwr.error;

  if (error) return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: "Failed to load users"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 21
  }, this);
  if (!data) return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: "Loading..."
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 21
  }, this);
  console.log(data);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
      children: "TEST DATA IMPORT"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 9
  }, this);
} // Projects.getInitialProps = async (ctx) => {
//     const res = await fetch('api/projects')
//     console.log(res)
//     const json = await res.json()
//     return { projects: json }
//   }


_s(Projects, "0Md9nfe1w9EeNtTpqsFmc6MYhdg=", true);

_c = Projects;
/* harmony default export */ __webpack_exports__["default"] = (Projects);

var _c;

$RefreshReg$(_c, "Projects");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js":
false,

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
false,

/***/ "./node_modules/dequal/lite/index.mjs":
/*!********************************************!*\
  !*** ./node_modules/dequal/lite/index.mjs ***!
  \********************************************/
/*! exports provided: dequal */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dequal", function() { return dequal; });
var has = Object.prototype.hasOwnProperty;

function dequal(foo, bar) {
	var ctor, len;
	if (foo === bar) return true;

	if (foo && bar && (ctor=foo.constructor) === bar.constructor) {
		if (ctor === Date) return foo.getTime() === bar.getTime();
		if (ctor === RegExp) return foo.toString() === bar.toString();

		if (ctor === Array) {
			if ((len=foo.length) === bar.length) {
				while (len-- && dequal(foo[len], bar[len]));
			}
			return len === -1;
		}

		if (!ctor || typeof foo === 'object') {
			len = 0;
			for (ctor in foo) {
				if (has.call(foo, ctor) && ++len && !has.call(bar, ctor)) return false;
				if (!(ctor in bar) || !dequal(foo[ctor], bar[ctor])) return false;
			}
			return Object.keys(bar).length === len;
		}
	}

	return foo !== foo && bar !== bar;
}


/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
false,

/***/ "./node_modules/swr/esm/cache.js":
/*!***************************************!*\
  !*** ./node_modules/swr/esm/cache.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _libs_hash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./libs/hash */ "./node_modules/swr/esm/libs/hash.js");

var Cache = /** @class */ (function () {
    function Cache(initialData) {
        if (initialData === void 0) { initialData = {}; }
        this.__cache = new Map(Object.entries(initialData));
        this.__listeners = [];
    }
    Cache.prototype.get = function (key) {
        var _key = this.serializeKey(key)[0];
        return this.__cache.get(_key);
    };
    Cache.prototype.set = function (key, value) {
        var _key = this.serializeKey(key)[0];
        this.__cache.set(_key, value);
        this.notify();
    };
    Cache.prototype.keys = function () {
        return Array.from(this.__cache.keys());
    };
    Cache.prototype.has = function (key) {
        var _key = this.serializeKey(key)[0];
        return this.__cache.has(_key);
    };
    Cache.prototype.clear = function () {
        this.__cache.clear();
        this.notify();
    };
    Cache.prototype.delete = function (key) {
        var _key = this.serializeKey(key)[0];
        this.__cache.delete(_key);
        this.notify();
    };
    // TODO: introduce namespace for the cache
    Cache.prototype.serializeKey = function (key) {
        var args = null;
        if (typeof key === 'function') {
            try {
                key = key();
            }
            catch (err) {
                // dependencies not ready
                key = '';
            }
        }
        if (Array.isArray(key)) {
            // args array
            args = key;
            key = Object(_libs_hash__WEBPACK_IMPORTED_MODULE_0__["default"])(key);
        }
        else {
            // convert null to ''
            key = String(key || '');
        }
        var errorKey = key ? 'err@' + key : '';
        var isValidatingKey = key ? 'validating@' + key : '';
        return [key, args, errorKey, isValidatingKey];
    };
    Cache.prototype.subscribe = function (listener) {
        var _this = this;
        if (typeof listener !== 'function') {
            throw new Error('Expected the listener to be a function.');
        }
        var isSubscribed = true;
        this.__listeners.push(listener);
        return function () {
            if (!isSubscribed)
                return;
            isSubscribed = false;
            var index = _this.__listeners.indexOf(listener);
            if (index > -1) {
                _this.__listeners[index] = _this.__listeners[_this.__listeners.length - 1];
                _this.__listeners.length--;
            }
        };
    };
    // Notify Cache subscribers about a change in the cache
    Cache.prototype.notify = function () {
        for (var _i = 0, _a = this.__listeners; _i < _a.length; _i++) {
            var listener = _a[_i];
            listener();
        }
    };
    return Cache;
}());
/* harmony default export */ __webpack_exports__["default"] = (Cache);


/***/ }),

/***/ "./node_modules/swr/esm/config.js":
/*!****************************************!*\
  !*** ./node_modules/swr/esm/config.js ***!
  \****************************************/
/*! exports provided: cache, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cache", function() { return cache; });
/* harmony import */ var dequal_lite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dequal/lite */ "./node_modules/dequal/lite/index.mjs");
/* harmony import */ var _cache__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cache */ "./node_modules/swr/esm/cache.js");
/* harmony import */ var _libs_web_preset__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./libs/web-preset */ "./node_modules/swr/esm/libs/web-preset.js");



// cache
var cache = new _cache__WEBPACK_IMPORTED_MODULE_1__["default"]();
// error retry
function onErrorRetry(_, __, config, revalidate, opts) {
    if (!config.isDocumentVisible()) {
        // if it's hidden, stop
        // it will auto revalidate when focus
        return;
    }
    if (typeof config.errorRetryCount === 'number' &&
        opts.retryCount > config.errorRetryCount) {
        return;
    }
    // exponential backoff
    var count = Math.min(opts.retryCount || 0, 8);
    var timeout = ~~((Math.random() + 0.5) * (1 << count)) * config.errorRetryInterval;
    setTimeout(revalidate, timeout, opts);
}
// client side: need to adjust the config
// based on the browser status
// slow connection (<= 70Kbps)
var slowConnection = typeof window !== 'undefined' &&
    navigator['connection'] &&
    ['slow-2g', '2g'].indexOf(navigator['connection'].effectiveType) !== -1;
// config
var defaultConfig = {
    // events
    onLoadingSlow: function () { },
    onSuccess: function () { },
    onError: function () { },
    onErrorRetry: onErrorRetry,
    errorRetryInterval: (slowConnection ? 10 : 5) * 1000,
    focusThrottleInterval: 5 * 1000,
    dedupingInterval: 2 * 1000,
    loadingTimeout: (slowConnection ? 5 : 3) * 1000,
    refreshInterval: 0,
    revalidateOnFocus: true,
    revalidateOnReconnect: true,
    refreshWhenHidden: false,
    refreshWhenOffline: false,
    shouldRetryOnError: true,
    suspense: false,
    compare: dequal_lite__WEBPACK_IMPORTED_MODULE_0__["dequal"],
    fetcher: _libs_web_preset__WEBPACK_IMPORTED_MODULE_2__["default"].fetcher,
    isOnline: _libs_web_preset__WEBPACK_IMPORTED_MODULE_2__["default"].isOnline,
    isDocumentVisible: _libs_web_preset__WEBPACK_IMPORTED_MODULE_2__["default"].isDocumentVisible
};

/* harmony default export */ __webpack_exports__["default"] = (defaultConfig);


/***/ }),

/***/ "./node_modules/swr/esm/index.js":
/*!***************************************!*\
  !*** ./node_modules/swr/esm/index.js ***!
  \***************************************/
/*! exports provided: trigger, mutate, SWRConfig, useSWRInfinite, cache, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _use_swr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./use-swr */ "./node_modules/swr/esm/use-swr.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "trigger", function() { return _use_swr__WEBPACK_IMPORTED_MODULE_0__["trigger"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mutate", function() { return _use_swr__WEBPACK_IMPORTED_MODULE_0__["mutate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SWRConfig", function() { return _use_swr__WEBPACK_IMPORTED_MODULE_0__["SWRConfig"]; });

/* harmony import */ var _use_swr_infinite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./use-swr-infinite */ "./node_modules/swr/esm/use-swr-infinite.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useSWRInfinite", function() { return _use_swr_infinite__WEBPACK_IMPORTED_MODULE_1__["useSWRInfinite"]; });

/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config */ "./node_modules/swr/esm/config.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cache", function() { return _config__WEBPACK_IMPORTED_MODULE_2__["cache"]; });





/* harmony default export */ __webpack_exports__["default"] = (_use_swr__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./node_modules/swr/esm/libs/hash.js":
/*!*******************************************!*\
  !*** ./node_modules/swr/esm/libs/hash.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return hash; });
// use WeakMap to store the object->key mapping
// so the objects can be garbage collected.
// WeakMap uses a hashtable under the hood, so the lookup
// complexity is almost O(1).
var table = new WeakMap();
// counter of the key
var counter = 0;
// hashes an array of objects and returns a string
function hash(args) {
    if (!args.length)
        return '';
    var key = 'arg';
    for (var i = 0; i < args.length; ++i) {
        var _hash = void 0;
        if (args[i] === null ||
            (typeof args[i] !== 'object' && typeof args[i] !== 'function')) {
            // need to consider the case that args[i] is a string:
            // args[i]        _hash
            // "undefined" -> '"undefined"'
            // undefined   -> 'undefined'
            // 123         -> '123'
            // null        -> 'null'
            // "null"      -> '"null"'
            if (typeof args[i] === 'string') {
                _hash = '"' + args[i] + '"';
            }
            else {
                _hash = String(args[i]);
            }
        }
        else {
            if (!table.has(args[i])) {
                _hash = counter;
                table.set(args[i], counter++);
            }
            else {
                _hash = table.get(args[i]);
            }
        }
        key += '@' + _hash;
    }
    return key;
}


/***/ }),

/***/ "./node_modules/swr/esm/libs/web-preset.js":
/*!*************************************************!*\
  !*** ./node_modules/swr/esm/libs/web-preset.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function isOnline() {
    if (typeof navigator.onLine !== 'undefined') {
        return navigator.onLine;
    }
    // always assume it's online
    return true;
}
function isDocumentVisible() {
    if (typeof document !== 'undefined' &&
        typeof document.visibilityState !== 'undefined') {
        return document.visibilityState !== 'hidden';
    }
    // always assume it's visible
    return true;
}
var fetcher = function (url) { return fetch(url).then(function (res) { return res.json(); }); };
/* harmony default export */ __webpack_exports__["default"] = ({
    isOnline: isOnline,
    isDocumentVisible: isDocumentVisible,
    fetcher: fetcher
});


/***/ }),

/***/ "./node_modules/swr/esm/swr-config-context.js":
/*!****************************************************!*\
  !*** ./node_modules/swr/esm/swr-config-context.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var SWRConfigContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])({});
SWRConfigContext.displayName = 'SWRConfigContext';
/* harmony default export */ __webpack_exports__["default"] = (SWRConfigContext);


/***/ }),

/***/ "./node_modules/swr/esm/use-swr-infinite.js":
/*!**************************************************!*\
  !*** ./node_modules/swr/esm/use-swr-infinite.js ***!
  \**************************************************/
/*! exports provided: useSWRInfinite */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useSWRInfinite", function() { return useSWRInfinite; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config */ "./node_modules/swr/esm/config.js");
/* harmony import */ var _swr_config_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./swr-config-context */ "./node_modules/swr/esm/swr-config-context.js");
/* harmony import */ var _use_swr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./use-swr */ "./node_modules/swr/esm/use-swr.js");
var __assign = (undefined && undefined.__assign) || function () {
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
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};




function useSWRInfinite() {
    var _this = this;
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var getKey, fn, config = {};
    if (args.length >= 1) {
        getKey = args[0];
    }
    if (args.length > 2) {
        fn = args[1];
        config = args[2];
    }
    else {
        if (typeof args[1] === 'function') {
            fn = args[1];
        }
        else if (typeof args[1] === 'object') {
            config = args[1];
        }
    }
    config = Object.assign({}, _config__WEBPACK_IMPORTED_MODULE_1__["default"], Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_swr_config_context__WEBPACK_IMPORTED_MODULE_2__["default"]), config);
    var _a = config.initialSize, initialSize = _a === void 0 ? 1 : _a, _b = config.revalidateAll, revalidateAll = _b === void 0 ? false : _b, _c = config.persistSize, persistSize = _c === void 0 ? false : _c, defaultFetcher = config.fetcher, extraConfig = __rest(config, ["initialSize", "revalidateAll", "persistSize", "fetcher"]);
    if (typeof fn === 'undefined') {
        // use the global fetcher
        // we have to convert the type here
        fn = defaultFetcher;
    }
    // get the serialized key of the first page
    var firstPageKey = null;
    try {
        ;
        firstPageKey = _config__WEBPACK_IMPORTED_MODULE_1__["cache"].serializeKey(getKey(0, null))[0];
    }
    catch (err) {
        // not ready
    }
    var rerender = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false)[1];
    // we use cache to pass extra info (context) to fetcher so it can be globally shared
    // here we get the key of the fetcher context cache
    var contextCacheKey = null;
    if (firstPageKey) {
        contextCacheKey = 'context@' + firstPageKey;
    }
    // page count is cached as well, so when navigating the list can be restored
    var pageCountCacheKey = null;
    var cachedPageSize;
    if (firstPageKey) {
        pageCountCacheKey = 'size@' + firstPageKey;
        cachedPageSize = _config__WEBPACK_IMPORTED_MODULE_1__["cache"].get(pageCountCacheKey);
    }
    var pageCountRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(cachedPageSize || initialSize);
    var didMountRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(false);
    // every time the key changes, we reset the page size if it's not persisted
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        if (didMountRef.current) {
            if (!persistSize) {
                pageCountRef.current = initialSize;
            }
        }
        else {
            didMountRef.current = true;
        }
    }, [firstPageKey]);
    // actual swr of all pages
    var swr = Object(_use_swr__WEBPACK_IMPORTED_MODULE_3__["default"])(firstPageKey ? ['many', firstPageKey] : null, function () { return __awaiter(_this, void 0, void 0, function () {
        var _a, originalData, force, data, previousPageData, i, _b, pageKey, pageArgs, pageData, shouldRevalidatePage;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    _a = _config__WEBPACK_IMPORTED_MODULE_1__["cache"].get(contextCacheKey) || {}, originalData = _a.originalData, force = _a.force;
                    data = [];
                    previousPageData = null;
                    i = 0;
                    _c.label = 1;
                case 1:
                    if (!(i < pageCountRef.current)) return [3 /*break*/, 8];
                    _b = _config__WEBPACK_IMPORTED_MODULE_1__["cache"].serializeKey(getKey(i, previousPageData)), pageKey = _b[0], pageArgs = _b[1];
                    if (!pageKey) {
                        // pageKey is falsy, stop fetching next pages
                        return [3 /*break*/, 8];
                    }
                    pageData = _config__WEBPACK_IMPORTED_MODULE_1__["cache"].get(pageKey);
                    shouldRevalidatePage = revalidateAll ||
                        force ||
                        (typeof force === 'undefined' && i === 0) ||
                        (originalData && !config.compare(originalData[i], pageData)) ||
                        typeof pageData === 'undefined';
                    if (!shouldRevalidatePage) return [3 /*break*/, 6];
                    if (!(pageArgs !== null)) return [3 /*break*/, 3];
                    return [4 /*yield*/, fn.apply(void 0, pageArgs)];
                case 2:
                    pageData = _c.sent();
                    return [3 /*break*/, 5];
                case 3: return [4 /*yield*/, fn(pageKey)];
                case 4:
                    pageData = _c.sent();
                    _c.label = 5;
                case 5:
                    _config__WEBPACK_IMPORTED_MODULE_1__["cache"].set(pageKey, pageData);
                    _c.label = 6;
                case 6:
                    data.push(pageData);
                    previousPageData = pageData;
                    _c.label = 7;
                case 7:
                    ++i;
                    return [3 /*break*/, 1];
                case 8:
                    // once we executed the data fetching based on the context, clear the context
                    _config__WEBPACK_IMPORTED_MODULE_1__["cache"].delete(contextCacheKey);
                    // return the data
                    return [2 /*return*/, data];
            }
        });
    }); }, extraConfig);
    // keep the data inside a ref
    var dataRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(swr.data);
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        dataRef.current = swr.data;
    }, [swr.data]);
    var mutate = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (data, shouldRevalidate) {
        if (shouldRevalidate === void 0) { shouldRevalidate = true; }
        if (shouldRevalidate && typeof data !== 'undefined') {
            // we only revalidate the pages that are changed
            var originalData = dataRef.current;
            _config__WEBPACK_IMPORTED_MODULE_1__["cache"].set(contextCacheKey, { originalData: originalData, force: false });
        }
        else if (shouldRevalidate) {
            // calling `mutate()`, we revalidate all pages
            _config__WEBPACK_IMPORTED_MODULE_1__["cache"].set(contextCacheKey, { force: true });
        }
        return swr.mutate(data, shouldRevalidate);
    }, [swr.mutate, contextCacheKey]);
    // extend the SWR API
    var size = pageCountRef.current;
    var setSize = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (arg) {
        if (typeof arg === 'function') {
            pageCountRef.current = arg(pageCountRef.current);
        }
        else if (typeof arg === 'number') {
            pageCountRef.current = arg;
        }
        _config__WEBPACK_IMPORTED_MODULE_1__["cache"].set(pageCountCacheKey, pageCountRef.current);
        rerender(function (v) { return !v; });
        return mutate(function (v) { return v; });
    }, [mutate, pageCountCacheKey]);
    return __assign(__assign({}, swr), { mutate: mutate,
        size: size,
        setSize: setSize });
}



/***/ }),

/***/ "./node_modules/swr/esm/use-swr.js":
/*!*****************************************!*\
  !*** ./node_modules/swr/esm/use-swr.js ***!
  \*****************************************/
/*! exports provided: trigger, mutate, SWRConfig, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "trigger", function() { return trigger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mutate", function() { return mutate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SWRConfig", function() { return SWRConfig; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config */ "./node_modules/swr/esm/config.js");
/* harmony import */ var _swr_config_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./swr-config-context */ "./node_modules/swr/esm/swr-config-context.js");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



var IS_SERVER = typeof window === 'undefined' ||
    // @ts-ignore
    !!(typeof Deno !== 'undefined' && Deno && Deno.version && Deno.version.deno);
// polyfill for requestAnimationFrame
var rAF = IS_SERVER
    ? null
    : window['requestAnimationFrame'] || (function (f) { return setTimeout(f, 1); });
// React currently throws a warning when using useLayoutEffect on the server.
// To get around it, we can conditionally useEffect on the server (no-op) and
// useLayoutEffect in the browser.
var useIsomorphicLayoutEffect = IS_SERVER ? react__WEBPACK_IMPORTED_MODULE_0__["useEffect"] : react__WEBPACK_IMPORTED_MODULE_0__["useLayoutEffect"];
// global state managers
var CONCURRENT_PROMISES = {};
var CONCURRENT_PROMISES_TS = {};
var FOCUS_REVALIDATORS = {};
var RECONNECT_REVALIDATORS = {};
var CACHE_REVALIDATORS = {};
var MUTATION_TS = {};
var MUTATION_END_TS = {};
// generate strictly increasing timestamps
var now = (function () {
    var ts = 0;
    return function () { return ts++; };
})();
// setup DOM events listeners for `focus` and `reconnect` actions
if (!IS_SERVER && window.addEventListener) {
    var revalidate_1 = function (revalidators) {
        if (!_config__WEBPACK_IMPORTED_MODULE_1__["default"].isDocumentVisible() || !_config__WEBPACK_IMPORTED_MODULE_1__["default"].isOnline())
            return;
        for (var key in revalidators) {
            if (revalidators[key][0])
                revalidators[key][0]();
        }
    };
    // focus revalidate
    window.addEventListener('visibilitychange', function () { return revalidate_1(FOCUS_REVALIDATORS); }, false);
    window.addEventListener('focus', function () { return revalidate_1(FOCUS_REVALIDATORS); }, false);
    // reconnect revalidate
    window.addEventListener('online', function () { return revalidate_1(RECONNECT_REVALIDATORS); }, false);
}
var trigger = function (_key, shouldRevalidate) {
    if (shouldRevalidate === void 0) { shouldRevalidate = true; }
    // we are ignoring the second argument which correspond to the arguments
    // the fetcher will receive when key is an array
    var _a = _config__WEBPACK_IMPORTED_MODULE_1__["cache"].serializeKey(_key), key = _a[0], keyErr = _a[2], keyValidating = _a[3];
    if (!key)
        return Promise.resolve();
    var updaters = CACHE_REVALIDATORS[key];
    if (key && updaters) {
        var currentData = _config__WEBPACK_IMPORTED_MODULE_1__["cache"].get(key);
        var currentError = _config__WEBPACK_IMPORTED_MODULE_1__["cache"].get(keyErr);
        var currentIsValidating = _config__WEBPACK_IMPORTED_MODULE_1__["cache"].get(keyValidating);
        var promises = [];
        for (var i = 0; i < updaters.length; ++i) {
            promises.push(updaters[i](shouldRevalidate, currentData, currentError, currentIsValidating, i > 0));
        }
        // return new updated value
        return Promise.all(promises).then(function () { return _config__WEBPACK_IMPORTED_MODULE_1__["cache"].get(key); });
    }
    return Promise.resolve(_config__WEBPACK_IMPORTED_MODULE_1__["cache"].get(key));
};
var broadcastState = function (key, data, error, isValidating) {
    var updaters = CACHE_REVALIDATORS[key];
    if (key && updaters) {
        for (var i = 0; i < updaters.length; ++i) {
            updaters[i](false, data, error, isValidating);
        }
    }
};
var mutate = function (_key, _data, shouldRevalidate) {
    if (shouldRevalidate === void 0) { shouldRevalidate = true; }
    return __awaiter(void 0, void 0, void 0, function () {
        var _a, key, keyErr, beforeMutationTs, beforeConcurrentPromisesTs, data, error, isAsyncMutation, err_1, shouldAbort, updaters, promises, i;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _a = _config__WEBPACK_IMPORTED_MODULE_1__["cache"].serializeKey(_key), key = _a[0], keyErr = _a[2];
                    if (!key)
                        return [2 /*return*/];
                    // if there is no new data to update, let's just revalidate the key
                    if (typeof _data === 'undefined')
                        return [2 /*return*/, trigger(_key, shouldRevalidate)
                            // update global timestamps
                        ];
                    // update global timestamps
                    MUTATION_TS[key] = now() - 1;
                    MUTATION_END_TS[key] = 0;
                    beforeMutationTs = MUTATION_TS[key];
                    beforeConcurrentPromisesTs = CONCURRENT_PROMISES_TS[key];
                    isAsyncMutation = false;
                    if (_data && typeof _data === 'function') {
                        // `_data` is a function, call it passing current cache value
                        try {
                            _data = _data(_config__WEBPACK_IMPORTED_MODULE_1__["cache"].get(key));
                        }
                        catch (err) {
                            error = err;
                        }
                    }
                    if (!(_data && typeof _data.then === 'function')) return [3 /*break*/, 5];
                    // `_data` is a promise
                    isAsyncMutation = true;
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, _data];
                case 2:
                    data = _b.sent();
                    return [3 /*break*/, 4];
                case 3:
                    err_1 = _b.sent();
                    error = err_1;
                    return [3 /*break*/, 4];
                case 4: return [3 /*break*/, 6];
                case 5:
                    data = _data;
                    _b.label = 6;
                case 6:
                    shouldAbort = function () {
                        // check if other mutations have occurred since we've started this mutation
                        if (beforeMutationTs !== MUTATION_TS[key] ||
                            beforeConcurrentPromisesTs !== CONCURRENT_PROMISES_TS[key]) {
                            if (error)
                                throw error;
                            return true;
                        }
                    };
                    // if there's a race we don't update cache or broadcast change, just return the data
                    if (shouldAbort())
                        return [2 /*return*/, data];
                    if (typeof data !== 'undefined') {
                        // update cached data
                        _config__WEBPACK_IMPORTED_MODULE_1__["cache"].set(key, data);
                    }
                    // always update or reset the error
                    _config__WEBPACK_IMPORTED_MODULE_1__["cache"].set(keyErr, error);
                    // reset the timestamp to mark the mutation has ended
                    MUTATION_END_TS[key] = now() - 1;
                    if (!!isAsyncMutation) return [3 /*break*/, 8];
                    // let's always broadcast in the next tick
                    // to dedupe synchronous mutation calls
                    // check out https://github.com/vercel/swr/pull/735 for more details
                    return [4 /*yield*/, 0
                        // we skip broadcasting if there's another mutation happened synchronously
                    ];
                case 7:
                    // let's always broadcast in the next tick
                    // to dedupe synchronous mutation calls
                    // check out https://github.com/vercel/swr/pull/735 for more details
                    _b.sent();
                    // we skip broadcasting if there's another mutation happened synchronously
                    if (shouldAbort())
                        return [2 /*return*/, data];
                    _b.label = 8;
                case 8:
                    updaters = CACHE_REVALIDATORS[key];
                    if (updaters) {
                        promises = [];
                        for (i = 0; i < updaters.length; ++i) {
                            promises.push(updaters[i](!!shouldRevalidate, data, error, undefined, i > 0));
                        }
                        // return new updated value
                        return [2 /*return*/, Promise.all(promises).then(function () {
                                if (error)
                                    throw error;
                                return _config__WEBPACK_IMPORTED_MODULE_1__["cache"].get(key);
                            })];
                    }
                    // throw error or return data to be used by caller of mutate
                    if (error)
                        throw error;
                    return [2 /*return*/, data];
            }
        });
    });
};
function useSWR() {
    var _this = this;
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var _key, fn, config = {};
    if (args.length >= 1) {
        _key = args[0];
    }
    if (args.length > 2) {
        fn = args[1];
        config = args[2];
    }
    else {
        if (typeof args[1] === 'function') {
            fn = args[1];
        }
        else if (typeof args[1] === 'object') {
            config = args[1];
        }
    }
    // we assume `key` as the identifier of the request
    // `key` can change but `fn` shouldn't
    // (because `revalidate` only depends on `key`)
    // `keyErr` is the cache key for error objects
    var _a = _config__WEBPACK_IMPORTED_MODULE_1__["cache"].serializeKey(_key), key = _a[0], fnArgs = _a[1], keyErr = _a[2], keyValidating = _a[3];
    config = Object.assign({}, _config__WEBPACK_IMPORTED_MODULE_1__["default"], Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_swr_config_context__WEBPACK_IMPORTED_MODULE_2__["default"]), config);
    var configRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(config);
    useIsomorphicLayoutEffect(function () {
        configRef.current = config;
    });
    if (typeof fn === 'undefined') {
        // use the global fetcher
        fn = config.fetcher;
    }
    var resolveData = function () {
        var cachedData = _config__WEBPACK_IMPORTED_MODULE_1__["cache"].get(key);
        return typeof cachedData === 'undefined' ? config.initialData : cachedData;
    };
    var initialData = resolveData();
    var initialError = _config__WEBPACK_IMPORTED_MODULE_1__["cache"].get(keyErr);
    var initialIsValidating = !!_config__WEBPACK_IMPORTED_MODULE_1__["cache"].get(keyValidating);
    // if a state is accessed (data, error or isValidating),
    // we add the state to dependencies so if the state is
    // updated in the future, we can trigger a rerender
    var stateDependencies = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])({
        data: false,
        error: false,
        isValidating: false
    });
    var stateRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])({
        data: initialData,
        error: initialError,
        isValidating: initialIsValidating
    });
    // display the data label in the React DevTools next to SWR hooks
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useDebugValue"])(stateRef.current.data);
    var rerender = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null)[1];
    var dispatch = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (payload) {
        var shouldUpdateState = false;
        for (var k in payload) {
            if (stateRef.current[k] === payload[k]) {
                continue;
            }
            stateRef.current[k] = payload[k];
            if (stateDependencies.current[k]) {
                shouldUpdateState = true;
            }
        }
        if (shouldUpdateState || config.suspense) {
            // if component is unmounted, should skip rerender
            // if component is not mounted, should skip rerender
            if (unmountedRef.current || !initialMountedRef.current)
                return;
            rerender({});
        }
    }, []);
    // error ref inside revalidate (is last request errored?)
    var unmountedRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(false);
    var keyRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(key);
    // check if component is mounted in suspense mode
    var initialMountedRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(false);
    // do unmount check for callbacks
    var eventsRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])({
        emit: function (event) {
            var _a;
            var params = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                params[_i - 1] = arguments[_i];
            }
            if (unmountedRef.current)
                return;
            (_a = configRef.current)[event].apply(_a, params);
        }
    });
    var boundMutate = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (data, shouldRevalidate) {
        return mutate(keyRef.current, data, shouldRevalidate);
    }, []);
    var addRevalidator = function (revalidators, callback) {
        if (!callback)
            return;
        if (!revalidators[key]) {
            revalidators[key] = [callback];
        }
        else {
            revalidators[key].push(callback);
        }
    };
    var removeRevalidator = function (revlidators, callback) {
        if (revlidators[key]) {
            var revalidators = revlidators[key];
            var index = revalidators.indexOf(callback);
            if (index >= 0) {
                // 10x faster than splice
                // https://jsperf.com/array-remove-by-index
                revalidators[index] = revalidators[revalidators.length - 1];
                revalidators.pop();
            }
        }
    };
    // start a revalidation
    var revalidate = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (revalidateOpts) {
        if (revalidateOpts === void 0) { revalidateOpts = {}; }
        return __awaiter(_this, void 0, void 0, function () {
            var loading, shouldDeduping, newData, startAt, shouldIgnoreRequest, newState, err_2, retryCount;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!key || !fn)
                            return [2 /*return*/, false];
                        if (unmountedRef.current)
                            return [2 /*return*/, false];
                        revalidateOpts = Object.assign({ dedupe: false }, revalidateOpts);
                        loading = true;
                        shouldDeduping = typeof CONCURRENT_PROMISES[key] !== 'undefined' && revalidateOpts.dedupe;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 6, , 7]);
                        dispatch({
                            isValidating: true
                        });
                        _config__WEBPACK_IMPORTED_MODULE_1__["cache"].set(keyValidating, true);
                        if (!shouldDeduping) {
                            // also update other hooks
                            broadcastState(key, stateRef.current.data, stateRef.current.error, true);
                        }
                        newData = void 0;
                        startAt = void 0;
                        if (!shouldDeduping) return [3 /*break*/, 3];
                        // there's already an ongoing request,
                        // this one needs to be deduplicated.
                        startAt = CONCURRENT_PROMISES_TS[key];
                        return [4 /*yield*/, CONCURRENT_PROMISES[key]];
                    case 2:
                        newData = _a.sent();
                        return [3 /*break*/, 5];
                    case 3:
                        // if no cache being rendered currently (it shows a blank page),
                        // we trigger the loading slow event.
                        if (config.loadingTimeout && !_config__WEBPACK_IMPORTED_MODULE_1__["cache"].get(key)) {
                            setTimeout(function () {
                                if (loading)
                                    eventsRef.current.emit('onLoadingSlow', key, config);
                            }, config.loadingTimeout);
                        }
                        if (fnArgs !== null) {
                            CONCURRENT_PROMISES[key] = fn.apply(void 0, fnArgs);
                        }
                        else {
                            CONCURRENT_PROMISES[key] = fn(key);
                        }
                        CONCURRENT_PROMISES_TS[key] = startAt = now();
                        return [4 /*yield*/, CONCURRENT_PROMISES[key]];
                    case 4:
                        newData = _a.sent();
                        setTimeout(function () {
                            delete CONCURRENT_PROMISES[key];
                            delete CONCURRENT_PROMISES_TS[key];
                        }, config.dedupingInterval);
                        // trigger the success event,
                        // only do this for the original request.
                        eventsRef.current.emit('onSuccess', newData, key, config);
                        _a.label = 5;
                    case 5:
                        shouldIgnoreRequest = 
                        // if there're other ongoing request(s), started after the current one,
                        // we need to ignore the current one to avoid possible race conditions:
                        //   req1------------------>res1        (current one)
                        //        req2---------------->res2
                        // the request that fired later will always be kept.
                        CONCURRENT_PROMISES_TS[key] > startAt ||
                            // if there're other mutations(s), overlapped with the current revalidation:
                            // case 1:
                            //   req------------------>res
                            //       mutate------>end
                            // case 2:
                            //         req------------>res
                            //   mutate------>end
                            // case 3:
                            //   req------------------>res
                            //       mutate-------...---------->
                            // we have to ignore the revalidation result (res) because it's no longer fresh.
                            // meanwhile, a new revalidation should be triggered when the mutation ends.
                            (MUTATION_TS[key] &&
                                // case 1
                                (startAt <= MUTATION_TS[key] ||
                                    // case 2
                                    startAt <= MUTATION_END_TS[key] ||
                                    // case 3
                                    MUTATION_END_TS[key] === 0));
                        if (shouldIgnoreRequest) {
                            dispatch({ isValidating: false });
                            return [2 /*return*/, false];
                        }
                        _config__WEBPACK_IMPORTED_MODULE_1__["cache"].set(key, newData);
                        _config__WEBPACK_IMPORTED_MODULE_1__["cache"].set(keyErr, undefined);
                        _config__WEBPACK_IMPORTED_MODULE_1__["cache"].set(keyValidating, false);
                        newState = {
                            isValidating: false
                        };
                        if (typeof stateRef.current.error !== 'undefined') {
                            // we don't have an error
                            newState.error = undefined;
                        }
                        if (!config.compare(stateRef.current.data, newData)) {
                            // deep compare to avoid extra re-render
                            // data changed
                            newState.data = newData;
                        }
                        // merge the new state
                        dispatch(newState);
                        if (!shouldDeduping) {
                            // also update other hooks
                            broadcastState(key, newData, newState.error, false);
                        }
                        return [3 /*break*/, 7];
                    case 6:
                        err_2 = _a.sent();
                        delete CONCURRENT_PROMISES[key];
                        delete CONCURRENT_PROMISES_TS[key];
                        _config__WEBPACK_IMPORTED_MODULE_1__["cache"].set(keyErr, err_2);
                        // get a new error
                        // don't use deep equal for errors
                        if (stateRef.current.error !== err_2) {
                            // we keep the stale data
                            dispatch({
                                isValidating: false,
                                error: err_2
                            });
                            if (!shouldDeduping) {
                                // also broadcast to update other hooks
                                broadcastState(key, undefined, err_2, false);
                            }
                        }
                        // events and retry
                        eventsRef.current.emit('onError', err_2, key, config);
                        if (config.shouldRetryOnError) {
                            retryCount = (revalidateOpts.retryCount || 0) + 1;
                            eventsRef.current.emit('onErrorRetry', err_2, key, config, revalidate, Object.assign({ dedupe: true }, revalidateOpts, { retryCount: retryCount }));
                        }
                        return [3 /*break*/, 7];
                    case 7:
                        loading = false;
                        return [2 /*return*/, true];
                }
            });
        });
    }, [key]);
    // mounted (client side rendering)
    useIsomorphicLayoutEffect(function () {
        if (!key)
            return undefined;
        // after `key` updates, we need to mark it as mounted
        unmountedRef.current = false;
        initialMountedRef.current = true;
        // after the component is mounted (hydrated),
        // we need to update the data from the cache
        // and trigger a revalidation
        var currentHookData = stateRef.current.data;
        var latestKeyedData = resolveData();
        // update the state if the key changed (not the inital render) or cache updated
        if (keyRef.current !== key) {
            keyRef.current = key;
        }
        if (!config.compare(currentHookData, latestKeyedData)) {
            dispatch({ data: latestKeyedData });
        }
        // revalidate with deduping
        var softRevalidate = function () { return revalidate({ dedupe: true }); };
        // trigger a revalidation
        if (config.revalidateOnMount ||
            (!config.initialData && config.revalidateOnMount === undefined)) {
            if (typeof latestKeyedData !== 'undefined') {
                // delay revalidate if there's cache
                // to not block the rendering
                rAF(softRevalidate);
            }
            else {
                softRevalidate();
            }
        }
        var pending = false;
        var onFocus = function () {
            if (pending || !configRef.current.revalidateOnFocus)
                return;
            pending = true;
            softRevalidate();
            setTimeout(function () { return (pending = false); }, configRef.current.focusThrottleInterval);
        };
        var onReconnect = function () {
            if (configRef.current.revalidateOnReconnect) {
                softRevalidate();
            }
        };
        // register global cache update listener
        var onUpdate = function (shouldRevalidate, updatedData, updatedError, updatedIsValidating, dedupe) {
            if (shouldRevalidate === void 0) { shouldRevalidate = true; }
            if (dedupe === void 0) { dedupe = true; }
            // update hook state
            var newState = {};
            var needUpdate = false;
            if (typeof updatedData !== 'undefined' &&
                !config.compare(stateRef.current.data, updatedData)) {
                newState.data = updatedData;
                needUpdate = true;
            }
            // always update error
            // because it can be `undefined`
            if (stateRef.current.error !== updatedError) {
                newState.error = updatedError;
                needUpdate = true;
            }
            if (typeof updatedIsValidating !== 'undefined' &&
                stateRef.current.isValidating !== updatedIsValidating) {
                newState.isValidating = updatedIsValidating;
                needUpdate = true;
            }
            if (needUpdate) {
                dispatch(newState);
            }
            if (shouldRevalidate) {
                if (dedupe) {
                    return softRevalidate();
                }
                else {
                    return revalidate();
                }
            }
            return false;
        };
        addRevalidator(FOCUS_REVALIDATORS, onFocus);
        addRevalidator(RECONNECT_REVALIDATORS, onReconnect);
        addRevalidator(CACHE_REVALIDATORS, onUpdate);
        return function () {
            // cleanup
            dispatch = function () { return null; };
            // mark it as unmounted
            unmountedRef.current = true;
            removeRevalidator(FOCUS_REVALIDATORS, onFocus);
            removeRevalidator(RECONNECT_REVALIDATORS, onReconnect);
            removeRevalidator(CACHE_REVALIDATORS, onUpdate);
        };
    }, [key, revalidate]);
    useIsomorphicLayoutEffect(function () {
        var timer = null;
        var tick = function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(!stateRef.current.error &&
                            (configRef.current.refreshWhenHidden ||
                                configRef.current.isDocumentVisible()) &&
                            (configRef.current.refreshWhenOffline || configRef.current.isOnline()))) return [3 /*break*/, 2];
                        // only revalidate when the page is visible
                        // if API request errored, we stop polling in this round
                        // and let the error retry function handle it
                        return [4 /*yield*/, revalidate({ dedupe: true })];
                    case 1:
                        // only revalidate when the page is visible
                        // if API request errored, we stop polling in this round
                        // and let the error retry function handle it
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        // Read the latest refreshInterval
                        if (configRef.current.refreshInterval && !stateRef.current.error) {
                            timer = setTimeout(tick, configRef.current.refreshInterval);
                        }
                        return [2 /*return*/];
                }
            });
        }); };
        if (configRef.current.refreshInterval) {
            timer = setTimeout(tick, configRef.current.refreshInterval);
        }
        return function () {
            if (timer)
                clearTimeout(timer);
        };
    }, [
        config.refreshInterval,
        config.refreshWhenHidden,
        config.refreshWhenOffline,
        revalidate
    ]);
    // define returned state
    // can be memorized since the state is a ref
    var memoizedState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
        var state = { revalidate: revalidate, mutate: boundMutate };
        Object.defineProperties(state, {
            error: {
                // `key` might be changed in the upcoming hook re-render,
                // but the previous state will stay
                // so we need to match the latest key and data (fallback to `initialData`)
                get: function () {
                    stateDependencies.current.error = true;
                    return keyRef.current === key ? stateRef.current.error : initialError;
                },
                enumerable: true
            },
            data: {
                get: function () {
                    stateDependencies.current.data = true;
                    return keyRef.current === key ? stateRef.current.data : initialData;
                },
                enumerable: true
            },
            isValidating: {
                get: function () {
                    stateDependencies.current.isValidating = true;
                    return stateRef.current.isValidating;
                },
                enumerable: true
            }
        });
        return state;
    }, [revalidate]);
    // suspense
    if (config.suspense) {
        // in suspense mode, we can't return empty state
        // (it should be suspended)
        // try to get data and error from cache
        var latestData = _config__WEBPACK_IMPORTED_MODULE_1__["cache"].get(key);
        var latestError = _config__WEBPACK_IMPORTED_MODULE_1__["cache"].get(keyErr);
        if (typeof latestData === 'undefined') {
            latestData = initialData;
        }
        if (typeof latestError === 'undefined') {
            latestError = initialError;
        }
        if (typeof latestData === 'undefined' &&
            typeof latestError === 'undefined') {
            // need to start the request if it hasn't
            if (!CONCURRENT_PROMISES[key]) {
                // trigger revalidate immediately
                // to get the promise
                // in this revalidate, should not rerender
                revalidate();
            }
            if (CONCURRENT_PROMISES[key] &&
                typeof CONCURRENT_PROMISES[key].then === 'function') {
                // if it is a promise
                throw CONCURRENT_PROMISES[key];
            }
            // it's a value, return it directly (override)
            latestData = CONCURRENT_PROMISES[key];
        }
        if (typeof latestData === 'undefined' && latestError) {
            // in suspense mode, throw error if there's no content
            throw latestError;
        }
        // return the latest data / error from cache
        // in case `key` has changed
        return {
            error: latestError,
            data: latestData,
            revalidate: revalidate,
            mutate: boundMutate,
            isValidating: stateRef.current.isValidating
        };
    }
    return memoizedState;
}
var SWRConfig = _swr_config_context__WEBPACK_IMPORTED_MODULE_2__["default"].Provider;

/* harmony default export */ __webpack_exports__["default"] = (useSWR);


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9qZWN0cy9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2RlcXVhbC9saXRlL2luZGV4Lm1qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3N3ci9lc20vY2FjaGUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9zd3IvZXNtL2NvbmZpZy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3N3ci9lc20vaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9zd3IvZXNtL2xpYnMvaGFzaC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3N3ci9lc20vbGlicy93ZWItcHJlc2V0LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvc3dyL2VzbS9zd3ItY29uZmlnLWNvbnRleHQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9zd3IvZXNtL3VzZS1zd3ItaW5maW5pdGUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9zd3IvZXNtL3VzZS1zd3IuanMiXSwibmFtZXMiOlsiZmV0Y2hlciIsInVybCIsImZldGNoIiwidGhlbiIsInJlcyIsImpzb24iLCJQcm9qZWN0cyIsInVzZVN3ciIsImRhdGEiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLElBQU1BLE9BQU8sR0FBRyxTQUFWQSxPQUFVLENBQUNDLEdBQUQ7QUFBQSxTQUFTQyxLQUFLLENBQUNELEdBQUQsQ0FBTCxDQUFXRSxJQUFYLENBQWdCLFVBQUNDLEdBQUQ7QUFBQSxXQUFTQSxHQUFHLENBQUNDLElBQUosRUFBVDtBQUFBLEdBQWhCLENBQVQ7QUFBQSxDQUFoQjs7QUFFQSxTQUFTQyxRQUFULEdBQW1C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QTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHFEQUFPO0FBQy9CLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5Qiw2Q0FBSztBQUM5QiwwQkFBMEIsNkNBQUs7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLDJEQUFnQjtBQUNNO0FBQ3ZCLHFFQUFNLEVBQUMiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMTAxOGRmOGM4YjE2NDI1NTgxYWMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB1c2VTV1IgZnJvbSAnc3dyJztcclxuaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcclxuXHJcbmNvbnN0IGZldGNoZXIgPSAodXJsKSA9PiBmZXRjaCh1cmwpLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcclxuXHJcbmZ1bmN0aW9uIFByb2plY3RzKCl7XHJcblxyXG4gICAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gdXNlU3dyKCcvYXBpL3Byb2plY3RzJywgZmV0Y2hlcilcclxuXHJcbiAgaWYgKGVycm9yKSByZXR1cm4gPGRpdj5GYWlsZWQgdG8gbG9hZCB1c2VyczwvZGl2PlxyXG4gIGlmICghZGF0YSkgcmV0dXJuIDxkaXY+TG9hZGluZy4uLjwvZGl2PlxyXG5cclxuICBjb25zb2xlLmxvZyhkYXRhKVxyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxoMj5URVNUIERBVEEgSU1QT1JUPC9oMj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuLy8gUHJvamVjdHMuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKGN0eCkgPT4ge1xyXG4vLyAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJ2FwaS9wcm9qZWN0cycpXHJcbi8vICAgICBjb25zb2xlLmxvZyhyZXMpXHJcbi8vICAgICBjb25zdCBqc29uID0gYXdhaXQgcmVzLmpzb24oKVxyXG4vLyAgICAgcmV0dXJuIHsgcHJvamVjdHM6IGpzb24gfVxyXG4vLyAgIH1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2plY3RzIiwidmFyIGhhcyA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG5cbmV4cG9ydCBmdW5jdGlvbiBkZXF1YWwoZm9vLCBiYXIpIHtcblx0dmFyIGN0b3IsIGxlbjtcblx0aWYgKGZvbyA9PT0gYmFyKSByZXR1cm4gdHJ1ZTtcblxuXHRpZiAoZm9vICYmIGJhciAmJiAoY3Rvcj1mb28uY29uc3RydWN0b3IpID09PSBiYXIuY29uc3RydWN0b3IpIHtcblx0XHRpZiAoY3RvciA9PT0gRGF0ZSkgcmV0dXJuIGZvby5nZXRUaW1lKCkgPT09IGJhci5nZXRUaW1lKCk7XG5cdFx0aWYgKGN0b3IgPT09IFJlZ0V4cCkgcmV0dXJuIGZvby50b1N0cmluZygpID09PSBiYXIudG9TdHJpbmcoKTtcblxuXHRcdGlmIChjdG9yID09PSBBcnJheSkge1xuXHRcdFx0aWYgKChsZW49Zm9vLmxlbmd0aCkgPT09IGJhci5sZW5ndGgpIHtcblx0XHRcdFx0d2hpbGUgKGxlbi0tICYmIGRlcXVhbChmb29bbGVuXSwgYmFyW2xlbl0pKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBsZW4gPT09IC0xO1xuXHRcdH1cblxuXHRcdGlmICghY3RvciB8fCB0eXBlb2YgZm9vID09PSAnb2JqZWN0Jykge1xuXHRcdFx0bGVuID0gMDtcblx0XHRcdGZvciAoY3RvciBpbiBmb28pIHtcblx0XHRcdFx0aWYgKGhhcy5jYWxsKGZvbywgY3RvcikgJiYgKytsZW4gJiYgIWhhcy5jYWxsKGJhciwgY3RvcikpIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWYgKCEoY3RvciBpbiBiYXIpIHx8ICFkZXF1YWwoZm9vW2N0b3JdLCBiYXJbY3Rvcl0pKSByZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gT2JqZWN0LmtleXMoYmFyKS5sZW5ndGggPT09IGxlbjtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gZm9vICE9PSBmb28gJiYgYmFyICE9PSBiYXI7XG59XG4iLCJpbXBvcnQgaGFzaCBmcm9tICcuL2xpYnMvaGFzaCc7XG52YXIgQ2FjaGUgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gQ2FjaGUoaW5pdGlhbERhdGEpIHtcbiAgICAgICAgaWYgKGluaXRpYWxEYXRhID09PSB2b2lkIDApIHsgaW5pdGlhbERhdGEgPSB7fTsgfVxuICAgICAgICB0aGlzLl9fY2FjaGUgPSBuZXcgTWFwKE9iamVjdC5lbnRyaWVzKGluaXRpYWxEYXRhKSk7XG4gICAgICAgIHRoaXMuX19saXN0ZW5lcnMgPSBbXTtcbiAgICB9XG4gICAgQ2FjaGUucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgdmFyIF9rZXkgPSB0aGlzLnNlcmlhbGl6ZUtleShrZXkpWzBdO1xuICAgICAgICByZXR1cm4gdGhpcy5fX2NhY2hlLmdldChfa2V5KTtcbiAgICB9O1xuICAgIENhY2hlLnByb3RvdHlwZS5zZXQgPSBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICAgICAgICB2YXIgX2tleSA9IHRoaXMuc2VyaWFsaXplS2V5KGtleSlbMF07XG4gICAgICAgIHRoaXMuX19jYWNoZS5zZXQoX2tleSwgdmFsdWUpO1xuICAgICAgICB0aGlzLm5vdGlmeSgpO1xuICAgIH07XG4gICAgQ2FjaGUucHJvdG90eXBlLmtleXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBBcnJheS5mcm9tKHRoaXMuX19jYWNoZS5rZXlzKCkpO1xuICAgIH07XG4gICAgQ2FjaGUucHJvdG90eXBlLmhhcyA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgdmFyIF9rZXkgPSB0aGlzLnNlcmlhbGl6ZUtleShrZXkpWzBdO1xuICAgICAgICByZXR1cm4gdGhpcy5fX2NhY2hlLmhhcyhfa2V5KTtcbiAgICB9O1xuICAgIENhY2hlLnByb3RvdHlwZS5jbGVhciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5fX2NhY2hlLmNsZWFyKCk7XG4gICAgICAgIHRoaXMubm90aWZ5KCk7XG4gICAgfTtcbiAgICBDYWNoZS5wcm90b3R5cGUuZGVsZXRlID0gZnVuY3Rpb24gKGtleSkge1xuICAgICAgICB2YXIgX2tleSA9IHRoaXMuc2VyaWFsaXplS2V5KGtleSlbMF07XG4gICAgICAgIHRoaXMuX19jYWNoZS5kZWxldGUoX2tleSk7XG4gICAgICAgIHRoaXMubm90aWZ5KCk7XG4gICAgfTtcbiAgICAvLyBUT0RPOiBpbnRyb2R1Y2UgbmFtZXNwYWNlIGZvciB0aGUgY2FjaGVcbiAgICBDYWNoZS5wcm90b3R5cGUuc2VyaWFsaXplS2V5ID0gZnVuY3Rpb24gKGtleSkge1xuICAgICAgICB2YXIgYXJncyA9IG51bGw7XG4gICAgICAgIGlmICh0eXBlb2Yga2V5ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGtleSA9IGtleSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgIC8vIGRlcGVuZGVuY2llcyBub3QgcmVhZHlcbiAgICAgICAgICAgICAgICBrZXkgPSAnJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShrZXkpKSB7XG4gICAgICAgICAgICAvLyBhcmdzIGFycmF5XG4gICAgICAgICAgICBhcmdzID0ga2V5O1xuICAgICAgICAgICAga2V5ID0gaGFzaChrZXkpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy8gY29udmVydCBudWxsIHRvICcnXG4gICAgICAgICAgICBrZXkgPSBTdHJpbmcoa2V5IHx8ICcnKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgZXJyb3JLZXkgPSBrZXkgPyAnZXJyQCcgKyBrZXkgOiAnJztcbiAgICAgICAgdmFyIGlzVmFsaWRhdGluZ0tleSA9IGtleSA/ICd2YWxpZGF0aW5nQCcgKyBrZXkgOiAnJztcbiAgICAgICAgcmV0dXJuIFtrZXksIGFyZ3MsIGVycm9yS2V5LCBpc1ZhbGlkYXRpbmdLZXldO1xuICAgIH07XG4gICAgQ2FjaGUucHJvdG90eXBlLnN1YnNjcmliZSA9IGZ1bmN0aW9uIChsaXN0ZW5lcikge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBpZiAodHlwZW9mIGxpc3RlbmVyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0V4cGVjdGVkIHRoZSBsaXN0ZW5lciB0byBiZSBhIGZ1bmN0aW9uLicpO1xuICAgICAgICB9XG4gICAgICAgIHZhciBpc1N1YnNjcmliZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLl9fbGlzdGVuZXJzLnB1c2gobGlzdGVuZXIpO1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKCFpc1N1YnNjcmliZWQpXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgaXNTdWJzY3JpYmVkID0gZmFsc2U7XG4gICAgICAgICAgICB2YXIgaW5kZXggPSBfdGhpcy5fX2xpc3RlbmVycy5pbmRleE9mKGxpc3RlbmVyKTtcbiAgICAgICAgICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuX19saXN0ZW5lcnNbaW5kZXhdID0gX3RoaXMuX19saXN0ZW5lcnNbX3RoaXMuX19saXN0ZW5lcnMubGVuZ3RoIC0gMV07XG4gICAgICAgICAgICAgICAgX3RoaXMuX19saXN0ZW5lcnMubGVuZ3RoLS07XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfTtcbiAgICAvLyBOb3RpZnkgQ2FjaGUgc3Vic2NyaWJlcnMgYWJvdXQgYSBjaGFuZ2UgaW4gdGhlIGNhY2hlXG4gICAgQ2FjaGUucHJvdG90eXBlLm5vdGlmeSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZm9yICh2YXIgX2kgPSAwLCBfYSA9IHRoaXMuX19saXN0ZW5lcnM7IF9pIDwgX2EubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICB2YXIgbGlzdGVuZXIgPSBfYVtfaV07XG4gICAgICAgICAgICBsaXN0ZW5lcigpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gQ2FjaGU7XG59KCkpO1xuZXhwb3J0IGRlZmF1bHQgQ2FjaGU7XG4iLCJpbXBvcnQgeyBkZXF1YWwgfSBmcm9tICdkZXF1YWwvbGl0ZSc7XG5pbXBvcnQgQ2FjaGUgZnJvbSAnLi9jYWNoZSc7XG5pbXBvcnQgd2ViUHJlc2V0IGZyb20gJy4vbGlicy93ZWItcHJlc2V0Jztcbi8vIGNhY2hlXG52YXIgY2FjaGUgPSBuZXcgQ2FjaGUoKTtcbi8vIGVycm9yIHJldHJ5XG5mdW5jdGlvbiBvbkVycm9yUmV0cnkoXywgX18sIGNvbmZpZywgcmV2YWxpZGF0ZSwgb3B0cykge1xuICAgIGlmICghY29uZmlnLmlzRG9jdW1lbnRWaXNpYmxlKCkpIHtcbiAgICAgICAgLy8gaWYgaXQncyBoaWRkZW4sIHN0b3BcbiAgICAgICAgLy8gaXQgd2lsbCBhdXRvIHJldmFsaWRhdGUgd2hlbiBmb2N1c1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh0eXBlb2YgY29uZmlnLmVycm9yUmV0cnlDb3VudCA9PT0gJ251bWJlcicgJiZcbiAgICAgICAgb3B0cy5yZXRyeUNvdW50ID4gY29uZmlnLmVycm9yUmV0cnlDb3VudCkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIC8vIGV4cG9uZW50aWFsIGJhY2tvZmZcbiAgICB2YXIgY291bnQgPSBNYXRoLm1pbihvcHRzLnJldHJ5Q291bnQgfHwgMCwgOCk7XG4gICAgdmFyIHRpbWVvdXQgPSB+figoTWF0aC5yYW5kb20oKSArIDAuNSkgKiAoMSA8PCBjb3VudCkpICogY29uZmlnLmVycm9yUmV0cnlJbnRlcnZhbDtcbiAgICBzZXRUaW1lb3V0KHJldmFsaWRhdGUsIHRpbWVvdXQsIG9wdHMpO1xufVxuLy8gY2xpZW50IHNpZGU6IG5lZWQgdG8gYWRqdXN0IHRoZSBjb25maWdcbi8vIGJhc2VkIG9uIHRoZSBicm93c2VyIHN0YXR1c1xuLy8gc2xvdyBjb25uZWN0aW9uICg8PSA3MEticHMpXG52YXIgc2xvd0Nvbm5lY3Rpb24gPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJlxuICAgIG5hdmlnYXRvclsnY29ubmVjdGlvbiddICYmXG4gICAgWydzbG93LTJnJywgJzJnJ10uaW5kZXhPZihuYXZpZ2F0b3JbJ2Nvbm5lY3Rpb24nXS5lZmZlY3RpdmVUeXBlKSAhPT0gLTE7XG4vLyBjb25maWdcbnZhciBkZWZhdWx0Q29uZmlnID0ge1xuICAgIC8vIGV2ZW50c1xuICAgIG9uTG9hZGluZ1Nsb3c6IGZ1bmN0aW9uICgpIHsgfSxcbiAgICBvblN1Y2Nlc3M6IGZ1bmN0aW9uICgpIHsgfSxcbiAgICBvbkVycm9yOiBmdW5jdGlvbiAoKSB7IH0sXG4gICAgb25FcnJvclJldHJ5OiBvbkVycm9yUmV0cnksXG4gICAgZXJyb3JSZXRyeUludGVydmFsOiAoc2xvd0Nvbm5lY3Rpb24gPyAxMCA6IDUpICogMTAwMCxcbiAgICBmb2N1c1Rocm90dGxlSW50ZXJ2YWw6IDUgKiAxMDAwLFxuICAgIGRlZHVwaW5nSW50ZXJ2YWw6IDIgKiAxMDAwLFxuICAgIGxvYWRpbmdUaW1lb3V0OiAoc2xvd0Nvbm5lY3Rpb24gPyA1IDogMykgKiAxMDAwLFxuICAgIHJlZnJlc2hJbnRlcnZhbDogMCxcbiAgICByZXZhbGlkYXRlT25Gb2N1czogdHJ1ZSxcbiAgICByZXZhbGlkYXRlT25SZWNvbm5lY3Q6IHRydWUsXG4gICAgcmVmcmVzaFdoZW5IaWRkZW46IGZhbHNlLFxuICAgIHJlZnJlc2hXaGVuT2ZmbGluZTogZmFsc2UsXG4gICAgc2hvdWxkUmV0cnlPbkVycm9yOiB0cnVlLFxuICAgIHN1c3BlbnNlOiBmYWxzZSxcbiAgICBjb21wYXJlOiBkZXF1YWwsXG4gICAgZmV0Y2hlcjogd2ViUHJlc2V0LmZldGNoZXIsXG4gICAgaXNPbmxpbmU6IHdlYlByZXNldC5pc09ubGluZSxcbiAgICBpc0RvY3VtZW50VmlzaWJsZTogd2ViUHJlc2V0LmlzRG9jdW1lbnRWaXNpYmxlXG59O1xuZXhwb3J0IHsgY2FjaGUgfTtcbmV4cG9ydCBkZWZhdWx0IGRlZmF1bHRDb25maWc7XG4iLCJleHBvcnQgKiBmcm9tICcuL3VzZS1zd3InO1xuaW1wb3J0IHsgZGVmYXVsdCBhcyB1c2VTV1IgfSBmcm9tICcuL3VzZS1zd3InO1xuZXhwb3J0IHsgdXNlU1dSSW5maW5pdGUgfSBmcm9tICcuL3VzZS1zd3ItaW5maW5pdGUnO1xuZXhwb3J0IHsgY2FjaGUgfSBmcm9tICcuL2NvbmZpZyc7XG5leHBvcnQgZGVmYXVsdCB1c2VTV1I7XG4iLCIvLyB1c2UgV2Vha01hcCB0byBzdG9yZSB0aGUgb2JqZWN0LT5rZXkgbWFwcGluZ1xuLy8gc28gdGhlIG9iamVjdHMgY2FuIGJlIGdhcmJhZ2UgY29sbGVjdGVkLlxuLy8gV2Vha01hcCB1c2VzIGEgaGFzaHRhYmxlIHVuZGVyIHRoZSBob29kLCBzbyB0aGUgbG9va3VwXG4vLyBjb21wbGV4aXR5IGlzIGFsbW9zdCBPKDEpLlxudmFyIHRhYmxlID0gbmV3IFdlYWtNYXAoKTtcbi8vIGNvdW50ZXIgb2YgdGhlIGtleVxudmFyIGNvdW50ZXIgPSAwO1xuLy8gaGFzaGVzIGFuIGFycmF5IG9mIG9iamVjdHMgYW5kIHJldHVybnMgYSBzdHJpbmdcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhhc2goYXJncykge1xuICAgIGlmICghYXJncy5sZW5ndGgpXG4gICAgICAgIHJldHVybiAnJztcbiAgICB2YXIga2V5ID0gJ2FyZyc7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmdzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgIHZhciBfaGFzaCA9IHZvaWQgMDtcbiAgICAgICAgaWYgKGFyZ3NbaV0gPT09IG51bGwgfHxcbiAgICAgICAgICAgICh0eXBlb2YgYXJnc1tpXSAhPT0gJ29iamVjdCcgJiYgdHlwZW9mIGFyZ3NbaV0gIT09ICdmdW5jdGlvbicpKSB7XG4gICAgICAgICAgICAvLyBuZWVkIHRvIGNvbnNpZGVyIHRoZSBjYXNlIHRoYXQgYXJnc1tpXSBpcyBhIHN0cmluZzpcbiAgICAgICAgICAgIC8vIGFyZ3NbaV0gICAgICAgIF9oYXNoXG4gICAgICAgICAgICAvLyBcInVuZGVmaW5lZFwiIC0+ICdcInVuZGVmaW5lZFwiJ1xuICAgICAgICAgICAgLy8gdW5kZWZpbmVkICAgLT4gJ3VuZGVmaW5lZCdcbiAgICAgICAgICAgIC8vIDEyMyAgICAgICAgIC0+ICcxMjMnXG4gICAgICAgICAgICAvLyBudWxsICAgICAgICAtPiAnbnVsbCdcbiAgICAgICAgICAgIC8vIFwibnVsbFwiICAgICAgLT4gJ1wibnVsbFwiJ1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBhcmdzW2ldID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIF9oYXNoID0gJ1wiJyArIGFyZ3NbaV0gKyAnXCInO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgX2hhc2ggPSBTdHJpbmcoYXJnc1tpXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAoIXRhYmxlLmhhcyhhcmdzW2ldKSkge1xuICAgICAgICAgICAgICAgIF9oYXNoID0gY291bnRlcjtcbiAgICAgICAgICAgICAgICB0YWJsZS5zZXQoYXJnc1tpXSwgY291bnRlcisrKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIF9oYXNoID0gdGFibGUuZ2V0KGFyZ3NbaV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGtleSArPSAnQCcgKyBfaGFzaDtcbiAgICB9XG4gICAgcmV0dXJuIGtleTtcbn1cbiIsImZ1bmN0aW9uIGlzT25saW5lKCkge1xuICAgIGlmICh0eXBlb2YgbmF2aWdhdG9yLm9uTGluZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgcmV0dXJuIG5hdmlnYXRvci5vbkxpbmU7XG4gICAgfVxuICAgIC8vIGFsd2F5cyBhc3N1bWUgaXQncyBvbmxpbmVcbiAgICByZXR1cm4gdHJ1ZTtcbn1cbmZ1bmN0aW9uIGlzRG9jdW1lbnRWaXNpYmxlKCkge1xuICAgIGlmICh0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnICYmXG4gICAgICAgIHR5cGVvZiBkb2N1bWVudC52aXNpYmlsaXR5U3RhdGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHJldHVybiBkb2N1bWVudC52aXNpYmlsaXR5U3RhdGUgIT09ICdoaWRkZW4nO1xuICAgIH1cbiAgICAvLyBhbHdheXMgYXNzdW1lIGl0J3MgdmlzaWJsZVxuICAgIHJldHVybiB0cnVlO1xufVxudmFyIGZldGNoZXIgPSBmdW5jdGlvbiAodXJsKSB7IHJldHVybiBmZXRjaCh1cmwpLnRoZW4oZnVuY3Rpb24gKHJlcykgeyByZXR1cm4gcmVzLmpzb24oKTsgfSk7IH07XG5leHBvcnQgZGVmYXVsdCB7XG4gICAgaXNPbmxpbmU6IGlzT25saW5lLFxuICAgIGlzRG9jdW1lbnRWaXNpYmxlOiBpc0RvY3VtZW50VmlzaWJsZSxcbiAgICBmZXRjaGVyOiBmZXRjaGVyXG59O1xuIiwiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcbnZhciBTV1JDb25maWdDb250ZXh0ID0gY3JlYXRlQ29udGV4dCh7fSk7XG5TV1JDb25maWdDb250ZXh0LmRpc3BsYXlOYW1lID0gJ1NXUkNvbmZpZ0NvbnRleHQnO1xuZXhwb3J0IGRlZmF1bHQgU1dSQ29uZmlnQ29udGV4dDtcbiIsInZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXG4gICAgICAgICAgICAgICAgdFtwXSA9IHNbcF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHQ7XG4gICAgfTtcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn07XG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbnZhciBfX2dlbmVyYXRvciA9ICh0aGlzICYmIHRoaXMuX19nZW5lcmF0b3IpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBib2R5KSB7XG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcbiAgICB9XG59O1xudmFyIF9fcmVzdCA9ICh0aGlzICYmIHRoaXMuX19yZXN0KSB8fCBmdW5jdGlvbiAocywgZSkge1xuICAgIHZhciB0ID0ge307XG4gICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApXG4gICAgICAgIHRbcF0gPSBzW3BdO1xuICAgIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIilcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDAgJiYgT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHMsIHBbaV0pKVxuICAgICAgICAgICAgICAgIHRbcFtpXV0gPSBzW3BbaV1dO1xuICAgICAgICB9XG4gICAgcmV0dXJuIHQ7XG59O1xuaW1wb3J0IHsgdXNlQ29udGV4dCwgdXNlUmVmLCB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBkZWZhdWx0Q29uZmlnLCB7IGNhY2hlIH0gZnJvbSAnLi9jb25maWcnO1xuaW1wb3J0IFNXUkNvbmZpZ0NvbnRleHQgZnJvbSAnLi9zd3ItY29uZmlnLWNvbnRleHQnO1xuaW1wb3J0IHVzZVNXUiBmcm9tICcuL3VzZS1zd3InO1xuZnVuY3Rpb24gdXNlU1dSSW5maW5pdGUoKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcbiAgICB2YXIgYXJncyA9IFtdO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgIGFyZ3NbX2ldID0gYXJndW1lbnRzW19pXTtcbiAgICB9XG4gICAgdmFyIGdldEtleSwgZm4sIGNvbmZpZyA9IHt9O1xuICAgIGlmIChhcmdzLmxlbmd0aCA+PSAxKSB7XG4gICAgICAgIGdldEtleSA9IGFyZ3NbMF07XG4gICAgfVxuICAgIGlmIChhcmdzLmxlbmd0aCA+IDIpIHtcbiAgICAgICAgZm4gPSBhcmdzWzFdO1xuICAgICAgICBjb25maWcgPSBhcmdzWzJdO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgaWYgKHR5cGVvZiBhcmdzWzFdID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBmbiA9IGFyZ3NbMV07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodHlwZW9mIGFyZ3NbMV0gPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICBjb25maWcgPSBhcmdzWzFdO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNvbmZpZyA9IE9iamVjdC5hc3NpZ24oe30sIGRlZmF1bHRDb25maWcsIHVzZUNvbnRleHQoU1dSQ29uZmlnQ29udGV4dCksIGNvbmZpZyk7XG4gICAgdmFyIF9hID0gY29uZmlnLmluaXRpYWxTaXplLCBpbml0aWFsU2l6ZSA9IF9hID09PSB2b2lkIDAgPyAxIDogX2EsIF9iID0gY29uZmlnLnJldmFsaWRhdGVBbGwsIHJldmFsaWRhdGVBbGwgPSBfYiA9PT0gdm9pZCAwID8gZmFsc2UgOiBfYiwgX2MgPSBjb25maWcucGVyc2lzdFNpemUsIHBlcnNpc3RTaXplID0gX2MgPT09IHZvaWQgMCA/IGZhbHNlIDogX2MsIGRlZmF1bHRGZXRjaGVyID0gY29uZmlnLmZldGNoZXIsIGV4dHJhQ29uZmlnID0gX19yZXN0KGNvbmZpZywgW1wiaW5pdGlhbFNpemVcIiwgXCJyZXZhbGlkYXRlQWxsXCIsIFwicGVyc2lzdFNpemVcIiwgXCJmZXRjaGVyXCJdKTtcbiAgICBpZiAodHlwZW9mIGZuID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAvLyB1c2UgdGhlIGdsb2JhbCBmZXRjaGVyXG4gICAgICAgIC8vIHdlIGhhdmUgdG8gY29udmVydCB0aGUgdHlwZSBoZXJlXG4gICAgICAgIGZuID0gZGVmYXVsdEZldGNoZXI7XG4gICAgfVxuICAgIC8vIGdldCB0aGUgc2VyaWFsaXplZCBrZXkgb2YgdGhlIGZpcnN0IHBhZ2VcbiAgICB2YXIgZmlyc3RQYWdlS2V5ID0gbnVsbDtcbiAgICB0cnkge1xuICAgICAgICA7XG4gICAgICAgIGZpcnN0UGFnZUtleSA9IGNhY2hlLnNlcmlhbGl6ZUtleShnZXRLZXkoMCwgbnVsbCkpWzBdO1xuICAgIH1cbiAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgIC8vIG5vdCByZWFkeVxuICAgIH1cbiAgICB2YXIgcmVyZW5kZXIgPSB1c2VTdGF0ZShmYWxzZSlbMV07XG4gICAgLy8gd2UgdXNlIGNhY2hlIHRvIHBhc3MgZXh0cmEgaW5mbyAoY29udGV4dCkgdG8gZmV0Y2hlciBzbyBpdCBjYW4gYmUgZ2xvYmFsbHkgc2hhcmVkXG4gICAgLy8gaGVyZSB3ZSBnZXQgdGhlIGtleSBvZiB0aGUgZmV0Y2hlciBjb250ZXh0IGNhY2hlXG4gICAgdmFyIGNvbnRleHRDYWNoZUtleSA9IG51bGw7XG4gICAgaWYgKGZpcnN0UGFnZUtleSkge1xuICAgICAgICBjb250ZXh0Q2FjaGVLZXkgPSAnY29udGV4dEAnICsgZmlyc3RQYWdlS2V5O1xuICAgIH1cbiAgICAvLyBwYWdlIGNvdW50IGlzIGNhY2hlZCBhcyB3ZWxsLCBzbyB3aGVuIG5hdmlnYXRpbmcgdGhlIGxpc3QgY2FuIGJlIHJlc3RvcmVkXG4gICAgdmFyIHBhZ2VDb3VudENhY2hlS2V5ID0gbnVsbDtcbiAgICB2YXIgY2FjaGVkUGFnZVNpemU7XG4gICAgaWYgKGZpcnN0UGFnZUtleSkge1xuICAgICAgICBwYWdlQ291bnRDYWNoZUtleSA9ICdzaXplQCcgKyBmaXJzdFBhZ2VLZXk7XG4gICAgICAgIGNhY2hlZFBhZ2VTaXplID0gY2FjaGUuZ2V0KHBhZ2VDb3VudENhY2hlS2V5KTtcbiAgICB9XG4gICAgdmFyIHBhZ2VDb3VudFJlZiA9IHVzZVJlZihjYWNoZWRQYWdlU2l6ZSB8fCBpbml0aWFsU2l6ZSk7XG4gICAgdmFyIGRpZE1vdW50UmVmID0gdXNlUmVmKGZhbHNlKTtcbiAgICAvLyBldmVyeSB0aW1lIHRoZSBrZXkgY2hhbmdlcywgd2UgcmVzZXQgdGhlIHBhZ2Ugc2l6ZSBpZiBpdCdzIG5vdCBwZXJzaXN0ZWRcbiAgICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoZGlkTW91bnRSZWYuY3VycmVudCkge1xuICAgICAgICAgICAgaWYgKCFwZXJzaXN0U2l6ZSkge1xuICAgICAgICAgICAgICAgIHBhZ2VDb3VudFJlZi5jdXJyZW50ID0gaW5pdGlhbFNpemU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBkaWRNb3VudFJlZi5jdXJyZW50ID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH0sIFtmaXJzdFBhZ2VLZXldKTtcbiAgICAvLyBhY3R1YWwgc3dyIG9mIGFsbCBwYWdlc1xuICAgIHZhciBzd3IgPSB1c2VTV1IoZmlyc3RQYWdlS2V5ID8gWydtYW55JywgZmlyc3RQYWdlS2V5XSA6IG51bGwsIGZ1bmN0aW9uICgpIHsgcmV0dXJuIF9fYXdhaXRlcihfdGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF9hLCBvcmlnaW5hbERhdGEsIGZvcmNlLCBkYXRhLCBwcmV2aW91c1BhZ2VEYXRhLCBpLCBfYiwgcGFnZUtleSwgcGFnZUFyZ3MsIHBhZ2VEYXRhLCBzaG91bGRSZXZhbGlkYXRlUGFnZTtcbiAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYykge1xuICAgICAgICAgICAgc3dpdGNoIChfYy5sYWJlbCkge1xuICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgX2EgPSBjYWNoZS5nZXQoY29udGV4dENhY2hlS2V5KSB8fCB7fSwgb3JpZ2luYWxEYXRhID0gX2Eub3JpZ2luYWxEYXRhLCBmb3JjZSA9IF9hLmZvcmNlO1xuICAgICAgICAgICAgICAgICAgICBkYXRhID0gW107XG4gICAgICAgICAgICAgICAgICAgIHByZXZpb3VzUGFnZURhdGEgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICBpID0gMDtcbiAgICAgICAgICAgICAgICAgICAgX2MubGFiZWwgPSAxO1xuICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEoaSA8IHBhZ2VDb3VudFJlZi5jdXJyZW50KSkgcmV0dXJuIFszIC8qYnJlYWsqLywgOF07XG4gICAgICAgICAgICAgICAgICAgIF9iID0gY2FjaGUuc2VyaWFsaXplS2V5KGdldEtleShpLCBwcmV2aW91c1BhZ2VEYXRhKSksIHBhZ2VLZXkgPSBfYlswXSwgcGFnZUFyZ3MgPSBfYlsxXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFwYWdlS2V5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBwYWdlS2V5IGlzIGZhbHN5LCBzdG9wIGZldGNoaW5nIG5leHQgcGFnZXNcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDhdO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHBhZ2VEYXRhID0gY2FjaGUuZ2V0KHBhZ2VLZXkpO1xuICAgICAgICAgICAgICAgICAgICBzaG91bGRSZXZhbGlkYXRlUGFnZSA9IHJldmFsaWRhdGVBbGwgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcmNlIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAodHlwZW9mIGZvcmNlID09PSAndW5kZWZpbmVkJyAmJiBpID09PSAwKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgKG9yaWdpbmFsRGF0YSAmJiAhY29uZmlnLmNvbXBhcmUob3JpZ2luYWxEYXRhW2ldLCBwYWdlRGF0YSkpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlb2YgcGFnZURhdGEgPT09ICd1bmRlZmluZWQnO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXNob3VsZFJldmFsaWRhdGVQYWdlKSByZXR1cm4gWzMgLypicmVhayovLCA2XTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEocGFnZUFyZ3MgIT09IG51bGwpKSByZXR1cm4gWzMgLypicmVhayovLCAzXTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgZm4uYXBwbHkodm9pZCAwLCBwYWdlQXJncyldO1xuICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgcGFnZURhdGEgPSBfYy5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDVdO1xuICAgICAgICAgICAgICAgIGNhc2UgMzogcmV0dXJuIFs0IC8qeWllbGQqLywgZm4ocGFnZUtleSldO1xuICAgICAgICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgICAgICAgICAgcGFnZURhdGEgPSBfYy5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgIF9jLmxhYmVsID0gNTtcbiAgICAgICAgICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgICAgICAgICAgIGNhY2hlLnNldChwYWdlS2V5LCBwYWdlRGF0YSk7XG4gICAgICAgICAgICAgICAgICAgIF9jLmxhYmVsID0gNjtcbiAgICAgICAgICAgICAgICBjYXNlIDY6XG4gICAgICAgICAgICAgICAgICAgIGRhdGEucHVzaChwYWdlRGF0YSk7XG4gICAgICAgICAgICAgICAgICAgIHByZXZpb3VzUGFnZURhdGEgPSBwYWdlRGF0YTtcbiAgICAgICAgICAgICAgICAgICAgX2MubGFiZWwgPSA3O1xuICAgICAgICAgICAgICAgIGNhc2UgNzpcbiAgICAgICAgICAgICAgICAgICAgKytpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCAxXTtcbiAgICAgICAgICAgICAgICBjYXNlIDg6XG4gICAgICAgICAgICAgICAgICAgIC8vIG9uY2Ugd2UgZXhlY3V0ZWQgdGhlIGRhdGEgZmV0Y2hpbmcgYmFzZWQgb24gdGhlIGNvbnRleHQsIGNsZWFyIHRoZSBjb250ZXh0XG4gICAgICAgICAgICAgICAgICAgIGNhY2hlLmRlbGV0ZShjb250ZXh0Q2FjaGVLZXkpO1xuICAgICAgICAgICAgICAgICAgICAvLyByZXR1cm4gdGhlIGRhdGFcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIGRhdGFdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTsgfSwgZXh0cmFDb25maWcpO1xuICAgIC8vIGtlZXAgdGhlIGRhdGEgaW5zaWRlIGEgcmVmXG4gICAgdmFyIGRhdGFSZWYgPSB1c2VSZWYoc3dyLmRhdGEpO1xuICAgIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGRhdGFSZWYuY3VycmVudCA9IHN3ci5kYXRhO1xuICAgIH0sIFtzd3IuZGF0YV0pO1xuICAgIHZhciBtdXRhdGUgPSB1c2VDYWxsYmFjayhmdW5jdGlvbiAoZGF0YSwgc2hvdWxkUmV2YWxpZGF0ZSkge1xuICAgICAgICBpZiAoc2hvdWxkUmV2YWxpZGF0ZSA9PT0gdm9pZCAwKSB7IHNob3VsZFJldmFsaWRhdGUgPSB0cnVlOyB9XG4gICAgICAgIGlmIChzaG91bGRSZXZhbGlkYXRlICYmIHR5cGVvZiBkYXRhICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgLy8gd2Ugb25seSByZXZhbGlkYXRlIHRoZSBwYWdlcyB0aGF0IGFyZSBjaGFuZ2VkXG4gICAgICAgICAgICB2YXIgb3JpZ2luYWxEYXRhID0gZGF0YVJlZi5jdXJyZW50O1xuICAgICAgICAgICAgY2FjaGUuc2V0KGNvbnRleHRDYWNoZUtleSwgeyBvcmlnaW5hbERhdGE6IG9yaWdpbmFsRGF0YSwgZm9yY2U6IGZhbHNlIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHNob3VsZFJldmFsaWRhdGUpIHtcbiAgICAgICAgICAgIC8vIGNhbGxpbmcgYG11dGF0ZSgpYCwgd2UgcmV2YWxpZGF0ZSBhbGwgcGFnZXNcbiAgICAgICAgICAgIGNhY2hlLnNldChjb250ZXh0Q2FjaGVLZXksIHsgZm9yY2U6IHRydWUgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHN3ci5tdXRhdGUoZGF0YSwgc2hvdWxkUmV2YWxpZGF0ZSk7XG4gICAgfSwgW3N3ci5tdXRhdGUsIGNvbnRleHRDYWNoZUtleV0pO1xuICAgIC8vIGV4dGVuZCB0aGUgU1dSIEFQSVxuICAgIHZhciBzaXplID0gcGFnZUNvdW50UmVmLmN1cnJlbnQ7XG4gICAgdmFyIHNldFNpemUgPSB1c2VDYWxsYmFjayhmdW5jdGlvbiAoYXJnKSB7XG4gICAgICAgIGlmICh0eXBlb2YgYXJnID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBwYWdlQ291bnRSZWYuY3VycmVudCA9IGFyZyhwYWdlQ291bnRSZWYuY3VycmVudCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodHlwZW9mIGFyZyA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgIHBhZ2VDb3VudFJlZi5jdXJyZW50ID0gYXJnO1xuICAgICAgICB9XG4gICAgICAgIGNhY2hlLnNldChwYWdlQ291bnRDYWNoZUtleSwgcGFnZUNvdW50UmVmLmN1cnJlbnQpO1xuICAgICAgICByZXJlbmRlcihmdW5jdGlvbiAodikgeyByZXR1cm4gIXY7IH0pO1xuICAgICAgICByZXR1cm4gbXV0YXRlKGZ1bmN0aW9uICh2KSB7IHJldHVybiB2OyB9KTtcbiAgICB9LCBbbXV0YXRlLCBwYWdlQ291bnRDYWNoZUtleV0pO1xuICAgIHJldHVybiBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgc3dyKSwgeyBtdXRhdGU6IG11dGF0ZSxcbiAgICAgICAgc2l6ZTogc2l6ZSxcbiAgICAgICAgc2V0U2l6ZTogc2V0U2l6ZSB9KTtcbn1cbmV4cG9ydCB7IHVzZVNXUkluZmluaXRlIH07XG4iLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbnZhciBfX2dlbmVyYXRvciA9ICh0aGlzICYmIHRoaXMuX19nZW5lcmF0b3IpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBib2R5KSB7XG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcbiAgICB9XG59O1xuaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlTGF5b3V0RWZmZWN0LCB1c2VTdGF0ZSwgdXNlUmVmLCB1c2VNZW1vLCB1c2VEZWJ1Z1ZhbHVlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGRlZmF1bHRDb25maWcsIHsgY2FjaGUgfSBmcm9tICcuL2NvbmZpZyc7XG5pbXBvcnQgU1dSQ29uZmlnQ29udGV4dCBmcm9tICcuL3N3ci1jb25maWctY29udGV4dCc7XG52YXIgSVNfU0VSVkVSID0gdHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgfHxcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgISEodHlwZW9mIERlbm8gIT09ICd1bmRlZmluZWQnICYmIERlbm8gJiYgRGVuby52ZXJzaW9uICYmIERlbm8udmVyc2lvbi5kZW5vKTtcbi8vIHBvbHlmaWxsIGZvciByZXF1ZXN0QW5pbWF0aW9uRnJhbWVcbnZhciByQUYgPSBJU19TRVJWRVJcbiAgICA/IG51bGxcbiAgICA6IHdpbmRvd1sncmVxdWVzdEFuaW1hdGlvbkZyYW1lJ10gfHwgKGZ1bmN0aW9uIChmKSB7IHJldHVybiBzZXRUaW1lb3V0KGYsIDEpOyB9KTtcbi8vIFJlYWN0IGN1cnJlbnRseSB0aHJvd3MgYSB3YXJuaW5nIHdoZW4gdXNpbmcgdXNlTGF5b3V0RWZmZWN0IG9uIHRoZSBzZXJ2ZXIuXG4vLyBUbyBnZXQgYXJvdW5kIGl0LCB3ZSBjYW4gY29uZGl0aW9uYWxseSB1c2VFZmZlY3Qgb24gdGhlIHNlcnZlciAobm8tb3ApIGFuZFxuLy8gdXNlTGF5b3V0RWZmZWN0IGluIHRoZSBicm93c2VyLlxudmFyIHVzZUlzb21vcnBoaWNMYXlvdXRFZmZlY3QgPSBJU19TRVJWRVIgPyB1c2VFZmZlY3QgOiB1c2VMYXlvdXRFZmZlY3Q7XG4vLyBnbG9iYWwgc3RhdGUgbWFuYWdlcnNcbnZhciBDT05DVVJSRU5UX1BST01JU0VTID0ge307XG52YXIgQ09OQ1VSUkVOVF9QUk9NSVNFU19UUyA9IHt9O1xudmFyIEZPQ1VTX1JFVkFMSURBVE9SUyA9IHt9O1xudmFyIFJFQ09OTkVDVF9SRVZBTElEQVRPUlMgPSB7fTtcbnZhciBDQUNIRV9SRVZBTElEQVRPUlMgPSB7fTtcbnZhciBNVVRBVElPTl9UUyA9IHt9O1xudmFyIE1VVEFUSU9OX0VORF9UUyA9IHt9O1xuLy8gZ2VuZXJhdGUgc3RyaWN0bHkgaW5jcmVhc2luZyB0aW1lc3RhbXBzXG52YXIgbm93ID0gKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgdHMgPSAwO1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7IHJldHVybiB0cysrOyB9O1xufSkoKTtcbi8vIHNldHVwIERPTSBldmVudHMgbGlzdGVuZXJzIGZvciBgZm9jdXNgIGFuZCBgcmVjb25uZWN0YCBhY3Rpb25zXG5pZiAoIUlTX1NFUlZFUiAmJiB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcikge1xuICAgIHZhciByZXZhbGlkYXRlXzEgPSBmdW5jdGlvbiAocmV2YWxpZGF0b3JzKSB7XG4gICAgICAgIGlmICghZGVmYXVsdENvbmZpZy5pc0RvY3VtZW50VmlzaWJsZSgpIHx8ICFkZWZhdWx0Q29uZmlnLmlzT25saW5lKCkpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIGZvciAodmFyIGtleSBpbiByZXZhbGlkYXRvcnMpIHtcbiAgICAgICAgICAgIGlmIChyZXZhbGlkYXRvcnNba2V5XVswXSlcbiAgICAgICAgICAgICAgICByZXZhbGlkYXRvcnNba2V5XVswXSgpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvLyBmb2N1cyByZXZhbGlkYXRlXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Zpc2liaWxpdHljaGFuZ2UnLCBmdW5jdGlvbiAoKSB7IHJldHVybiByZXZhbGlkYXRlXzEoRk9DVVNfUkVWQUxJREFUT1JTKTsgfSwgZmFsc2UpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsIGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJldmFsaWRhdGVfMShGT0NVU19SRVZBTElEQVRPUlMpOyB9LCBmYWxzZSk7XG4gICAgLy8gcmVjb25uZWN0IHJldmFsaWRhdGVcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignb25saW5lJywgZnVuY3Rpb24gKCkgeyByZXR1cm4gcmV2YWxpZGF0ZV8xKFJFQ09OTkVDVF9SRVZBTElEQVRPUlMpOyB9LCBmYWxzZSk7XG59XG52YXIgdHJpZ2dlciA9IGZ1bmN0aW9uIChfa2V5LCBzaG91bGRSZXZhbGlkYXRlKSB7XG4gICAgaWYgKHNob3VsZFJldmFsaWRhdGUgPT09IHZvaWQgMCkgeyBzaG91bGRSZXZhbGlkYXRlID0gdHJ1ZTsgfVxuICAgIC8vIHdlIGFyZSBpZ25vcmluZyB0aGUgc2Vjb25kIGFyZ3VtZW50IHdoaWNoIGNvcnJlc3BvbmQgdG8gdGhlIGFyZ3VtZW50c1xuICAgIC8vIHRoZSBmZXRjaGVyIHdpbGwgcmVjZWl2ZSB3aGVuIGtleSBpcyBhbiBhcnJheVxuICAgIHZhciBfYSA9IGNhY2hlLnNlcmlhbGl6ZUtleShfa2V5KSwga2V5ID0gX2FbMF0sIGtleUVyciA9IF9hWzJdLCBrZXlWYWxpZGF0aW5nID0gX2FbM107XG4gICAgaWYgKCFrZXkpXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICB2YXIgdXBkYXRlcnMgPSBDQUNIRV9SRVZBTElEQVRPUlNba2V5XTtcbiAgICBpZiAoa2V5ICYmIHVwZGF0ZXJzKSB7XG4gICAgICAgIHZhciBjdXJyZW50RGF0YSA9IGNhY2hlLmdldChrZXkpO1xuICAgICAgICB2YXIgY3VycmVudEVycm9yID0gY2FjaGUuZ2V0KGtleUVycik7XG4gICAgICAgIHZhciBjdXJyZW50SXNWYWxpZGF0aW5nID0gY2FjaGUuZ2V0KGtleVZhbGlkYXRpbmcpO1xuICAgICAgICB2YXIgcHJvbWlzZXMgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB1cGRhdGVycy5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgcHJvbWlzZXMucHVzaCh1cGRhdGVyc1tpXShzaG91bGRSZXZhbGlkYXRlLCBjdXJyZW50RGF0YSwgY3VycmVudEVycm9yLCBjdXJyZW50SXNWYWxpZGF0aW5nLCBpID4gMCkpO1xuICAgICAgICB9XG4gICAgICAgIC8vIHJldHVybiBuZXcgdXBkYXRlZCB2YWx1ZVxuICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMpLnRoZW4oZnVuY3Rpb24gKCkgeyByZXR1cm4gY2FjaGUuZ2V0KGtleSk7IH0pO1xuICAgIH1cbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGNhY2hlLmdldChrZXkpKTtcbn07XG52YXIgYnJvYWRjYXN0U3RhdGUgPSBmdW5jdGlvbiAoa2V5LCBkYXRhLCBlcnJvciwgaXNWYWxpZGF0aW5nKSB7XG4gICAgdmFyIHVwZGF0ZXJzID0gQ0FDSEVfUkVWQUxJREFUT1JTW2tleV07XG4gICAgaWYgKGtleSAmJiB1cGRhdGVycykge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHVwZGF0ZXJzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICB1cGRhdGVyc1tpXShmYWxzZSwgZGF0YSwgZXJyb3IsIGlzVmFsaWRhdGluZyk7XG4gICAgICAgIH1cbiAgICB9XG59O1xudmFyIG11dGF0ZSA9IGZ1bmN0aW9uIChfa2V5LCBfZGF0YSwgc2hvdWxkUmV2YWxpZGF0ZSkge1xuICAgIGlmIChzaG91bGRSZXZhbGlkYXRlID09PSB2b2lkIDApIHsgc2hvdWxkUmV2YWxpZGF0ZSA9IHRydWU7IH1cbiAgICByZXR1cm4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF9hLCBrZXksIGtleUVyciwgYmVmb3JlTXV0YXRpb25UcywgYmVmb3JlQ29uY3VycmVudFByb21pc2VzVHMsIGRhdGEsIGVycm9yLCBpc0FzeW5jTXV0YXRpb24sIGVycl8xLCBzaG91bGRBYm9ydCwgdXBkYXRlcnMsIHByb21pc2VzLCBpO1xuICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9iKSB7XG4gICAgICAgICAgICBzd2l0Y2ggKF9iLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICBfYSA9IGNhY2hlLnNlcmlhbGl6ZUtleShfa2V5KSwga2V5ID0gX2FbMF0sIGtleUVyciA9IF9hWzJdO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWtleSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgICAgICAgICAgICAgLy8gaWYgdGhlcmUgaXMgbm8gbmV3IGRhdGEgdG8gdXBkYXRlLCBsZXQncyBqdXN0IHJldmFsaWRhdGUgdGhlIGtleVxuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIF9kYXRhID09PSAndW5kZWZpbmVkJylcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCB0cmlnZ2VyKF9rZXksIHNob3VsZFJldmFsaWRhdGUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdXBkYXRlIGdsb2JhbCB0aW1lc3RhbXBzXG4gICAgICAgICAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgICAgICAgICAvLyB1cGRhdGUgZ2xvYmFsIHRpbWVzdGFtcHNcbiAgICAgICAgICAgICAgICAgICAgTVVUQVRJT05fVFNba2V5XSA9IG5vdygpIC0gMTtcbiAgICAgICAgICAgICAgICAgICAgTVVUQVRJT05fRU5EX1RTW2tleV0gPSAwO1xuICAgICAgICAgICAgICAgICAgICBiZWZvcmVNdXRhdGlvblRzID0gTVVUQVRJT05fVFNba2V5XTtcbiAgICAgICAgICAgICAgICAgICAgYmVmb3JlQ29uY3VycmVudFByb21pc2VzVHMgPSBDT05DVVJSRU5UX1BST01JU0VTX1RTW2tleV07XG4gICAgICAgICAgICAgICAgICAgIGlzQXN5bmNNdXRhdGlvbiA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICBpZiAoX2RhdGEgJiYgdHlwZW9mIF9kYXRhID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBgX2RhdGFgIGlzIGEgZnVuY3Rpb24sIGNhbGwgaXQgcGFzc2luZyBjdXJyZW50IGNhY2hlIHZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9kYXRhID0gX2RhdGEoY2FjaGUuZ2V0KGtleSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yID0gZXJyO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmICghKF9kYXRhICYmIHR5cGVvZiBfZGF0YS50aGVuID09PSAnZnVuY3Rpb24nKSkgcmV0dXJuIFszIC8qYnJlYWsqLywgNV07XG4gICAgICAgICAgICAgICAgICAgIC8vIGBfZGF0YWAgaXMgYSBwcm9taXNlXG4gICAgICAgICAgICAgICAgICAgIGlzQXN5bmNNdXRhdGlvbiA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIF9iLmxhYmVsID0gMTtcbiAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgIF9iLnRyeXMucHVzaChbMSwgMywgLCA0XSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIF9kYXRhXTtcbiAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgIGRhdGEgPSBfYi5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDRdO1xuICAgICAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICAgICAgZXJyXzEgPSBfYi5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgIGVycm9yID0gZXJyXzE7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDRdO1xuICAgICAgICAgICAgICAgIGNhc2UgNDogcmV0dXJuIFszIC8qYnJlYWsqLywgNl07XG4gICAgICAgICAgICAgICAgY2FzZSA1OlxuICAgICAgICAgICAgICAgICAgICBkYXRhID0gX2RhdGE7XG4gICAgICAgICAgICAgICAgICAgIF9iLmxhYmVsID0gNjtcbiAgICAgICAgICAgICAgICBjYXNlIDY6XG4gICAgICAgICAgICAgICAgICAgIHNob3VsZEFib3J0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY2hlY2sgaWYgb3RoZXIgbXV0YXRpb25zIGhhdmUgb2NjdXJyZWQgc2luY2Ugd2UndmUgc3RhcnRlZCB0aGlzIG11dGF0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYmVmb3JlTXV0YXRpb25UcyAhPT0gTVVUQVRJT05fVFNba2V5XSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJlZm9yZUNvbmN1cnJlbnRQcm9taXNlc1RzICE9PSBDT05DVVJSRU5UX1BST01JU0VTX1RTW2tleV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXJyb3IpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAvLyBpZiB0aGVyZSdzIGEgcmFjZSB3ZSBkb24ndCB1cGRhdGUgY2FjaGUgb3IgYnJvYWRjYXN0IGNoYW5nZSwganVzdCByZXR1cm4gdGhlIGRhdGFcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNob3VsZEFib3J0KCkpXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgZGF0YV07XG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgZGF0YSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHVwZGF0ZSBjYWNoZWQgZGF0YVxuICAgICAgICAgICAgICAgICAgICAgICAgY2FjaGUuc2V0KGtleSwgZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy8gYWx3YXlzIHVwZGF0ZSBvciByZXNldCB0aGUgZXJyb3JcbiAgICAgICAgICAgICAgICAgICAgY2FjaGUuc2V0KGtleUVyciwgZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICAvLyByZXNldCB0aGUgdGltZXN0YW1wIHRvIG1hcmsgdGhlIG11dGF0aW9uIGhhcyBlbmRlZFxuICAgICAgICAgICAgICAgICAgICBNVVRBVElPTl9FTkRfVFNba2V5XSA9IG5vdygpIC0gMTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEhaXNBc3luY011dGF0aW9uKSByZXR1cm4gWzMgLypicmVhayovLCA4XTtcbiAgICAgICAgICAgICAgICAgICAgLy8gbGV0J3MgYWx3YXlzIGJyb2FkY2FzdCBpbiB0aGUgbmV4dCB0aWNrXG4gICAgICAgICAgICAgICAgICAgIC8vIHRvIGRlZHVwZSBzeW5jaHJvbm91cyBtdXRhdGlvbiBjYWxsc1xuICAgICAgICAgICAgICAgICAgICAvLyBjaGVjayBvdXQgaHR0cHM6Ly9naXRodWIuY29tL3ZlcmNlbC9zd3IvcHVsbC83MzUgZm9yIG1vcmUgZGV0YWlsc1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCAwXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB3ZSBza2lwIGJyb2FkY2FzdGluZyBpZiB0aGVyZSdzIGFub3RoZXIgbXV0YXRpb24gaGFwcGVuZWQgc3luY2hyb25vdXNseVxuICAgICAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgICAgIGNhc2UgNzpcbiAgICAgICAgICAgICAgICAgICAgLy8gbGV0J3MgYWx3YXlzIGJyb2FkY2FzdCBpbiB0aGUgbmV4dCB0aWNrXG4gICAgICAgICAgICAgICAgICAgIC8vIHRvIGRlZHVwZSBzeW5jaHJvbm91cyBtdXRhdGlvbiBjYWxsc1xuICAgICAgICAgICAgICAgICAgICAvLyBjaGVjayBvdXQgaHR0cHM6Ly9naXRodWIuY29tL3ZlcmNlbC9zd3IvcHVsbC83MzUgZm9yIG1vcmUgZGV0YWlsc1xuICAgICAgICAgICAgICAgICAgICBfYi5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgIC8vIHdlIHNraXAgYnJvYWRjYXN0aW5nIGlmIHRoZXJlJ3MgYW5vdGhlciBtdXRhdGlvbiBoYXBwZW5lZCBzeW5jaHJvbm91c2x5XG4gICAgICAgICAgICAgICAgICAgIGlmIChzaG91bGRBYm9ydCgpKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIGRhdGFdO1xuICAgICAgICAgICAgICAgICAgICBfYi5sYWJlbCA9IDg7XG4gICAgICAgICAgICAgICAgY2FzZSA4OlxuICAgICAgICAgICAgICAgICAgICB1cGRhdGVycyA9IENBQ0hFX1JFVkFMSURBVE9SU1trZXldO1xuICAgICAgICAgICAgICAgICAgICBpZiAodXBkYXRlcnMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb21pc2VzID0gW107XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgdXBkYXRlcnMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9taXNlcy5wdXNoKHVwZGF0ZXJzW2ldKCEhc2hvdWxkUmV2YWxpZGF0ZSwgZGF0YSwgZXJyb3IsIHVuZGVmaW5lZCwgaSA+IDApKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHJldHVybiBuZXcgdXBkYXRlZCB2YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIFByb21pc2UuYWxsKHByb21pc2VzKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVycm9yKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBjYWNoZS5nZXQoa2V5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KV07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy8gdGhyb3cgZXJyb3Igb3IgcmV0dXJuIGRhdGEgdG8gYmUgdXNlZCBieSBjYWxsZXIgb2YgbXV0YXRlXG4gICAgICAgICAgICAgICAgICAgIGlmIChlcnJvcilcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgZGF0YV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pO1xufTtcbmZ1bmN0aW9uIHVzZVNXUigpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgIHZhciBhcmdzID0gW107XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgYXJnc1tfaV0gPSBhcmd1bWVudHNbX2ldO1xuICAgIH1cbiAgICB2YXIgX2tleSwgZm4sIGNvbmZpZyA9IHt9O1xuICAgIGlmIChhcmdzLmxlbmd0aCA+PSAxKSB7XG4gICAgICAgIF9rZXkgPSBhcmdzWzBdO1xuICAgIH1cbiAgICBpZiAoYXJncy5sZW5ndGggPiAyKSB7XG4gICAgICAgIGZuID0gYXJnc1sxXTtcbiAgICAgICAgY29uZmlnID0gYXJnc1syXTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGlmICh0eXBlb2YgYXJnc1sxXSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgZm4gPSBhcmdzWzFdO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiBhcmdzWzFdID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgY29uZmlnID0gYXJnc1sxXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyB3ZSBhc3N1bWUgYGtleWAgYXMgdGhlIGlkZW50aWZpZXIgb2YgdGhlIHJlcXVlc3RcbiAgICAvLyBga2V5YCBjYW4gY2hhbmdlIGJ1dCBgZm5gIHNob3VsZG4ndFxuICAgIC8vIChiZWNhdXNlIGByZXZhbGlkYXRlYCBvbmx5IGRlcGVuZHMgb24gYGtleWApXG4gICAgLy8gYGtleUVycmAgaXMgdGhlIGNhY2hlIGtleSBmb3IgZXJyb3Igb2JqZWN0c1xuICAgIHZhciBfYSA9IGNhY2hlLnNlcmlhbGl6ZUtleShfa2V5KSwga2V5ID0gX2FbMF0sIGZuQXJncyA9IF9hWzFdLCBrZXlFcnIgPSBfYVsyXSwga2V5VmFsaWRhdGluZyA9IF9hWzNdO1xuICAgIGNvbmZpZyA9IE9iamVjdC5hc3NpZ24oe30sIGRlZmF1bHRDb25maWcsIHVzZUNvbnRleHQoU1dSQ29uZmlnQ29udGV4dCksIGNvbmZpZyk7XG4gICAgdmFyIGNvbmZpZ1JlZiA9IHVzZVJlZihjb25maWcpO1xuICAgIHVzZUlzb21vcnBoaWNMYXlvdXRFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25maWdSZWYuY3VycmVudCA9IGNvbmZpZztcbiAgICB9KTtcbiAgICBpZiAodHlwZW9mIGZuID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAvLyB1c2UgdGhlIGdsb2JhbCBmZXRjaGVyXG4gICAgICAgIGZuID0gY29uZmlnLmZldGNoZXI7XG4gICAgfVxuICAgIHZhciByZXNvbHZlRGF0YSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGNhY2hlZERhdGEgPSBjYWNoZS5nZXQoa2V5KTtcbiAgICAgICAgcmV0dXJuIHR5cGVvZiBjYWNoZWREYXRhID09PSAndW5kZWZpbmVkJyA/IGNvbmZpZy5pbml0aWFsRGF0YSA6IGNhY2hlZERhdGE7XG4gICAgfTtcbiAgICB2YXIgaW5pdGlhbERhdGEgPSByZXNvbHZlRGF0YSgpO1xuICAgIHZhciBpbml0aWFsRXJyb3IgPSBjYWNoZS5nZXQoa2V5RXJyKTtcbiAgICB2YXIgaW5pdGlhbElzVmFsaWRhdGluZyA9ICEhY2FjaGUuZ2V0KGtleVZhbGlkYXRpbmcpO1xuICAgIC8vIGlmIGEgc3RhdGUgaXMgYWNjZXNzZWQgKGRhdGEsIGVycm9yIG9yIGlzVmFsaWRhdGluZyksXG4gICAgLy8gd2UgYWRkIHRoZSBzdGF0ZSB0byBkZXBlbmRlbmNpZXMgc28gaWYgdGhlIHN0YXRlIGlzXG4gICAgLy8gdXBkYXRlZCBpbiB0aGUgZnV0dXJlLCB3ZSBjYW4gdHJpZ2dlciBhIHJlcmVuZGVyXG4gICAgdmFyIHN0YXRlRGVwZW5kZW5jaWVzID0gdXNlUmVmKHtcbiAgICAgICAgZGF0YTogZmFsc2UsXG4gICAgICAgIGVycm9yOiBmYWxzZSxcbiAgICAgICAgaXNWYWxpZGF0aW5nOiBmYWxzZVxuICAgIH0pO1xuICAgIHZhciBzdGF0ZVJlZiA9IHVzZVJlZih7XG4gICAgICAgIGRhdGE6IGluaXRpYWxEYXRhLFxuICAgICAgICBlcnJvcjogaW5pdGlhbEVycm9yLFxuICAgICAgICBpc1ZhbGlkYXRpbmc6IGluaXRpYWxJc1ZhbGlkYXRpbmdcbiAgICB9KTtcbiAgICAvLyBkaXNwbGF5IHRoZSBkYXRhIGxhYmVsIGluIHRoZSBSZWFjdCBEZXZUb29scyBuZXh0IHRvIFNXUiBob29rc1xuICAgIHVzZURlYnVnVmFsdWUoc3RhdGVSZWYuY3VycmVudC5kYXRhKTtcbiAgICB2YXIgcmVyZW5kZXIgPSB1c2VTdGF0ZShudWxsKVsxXTtcbiAgICB2YXIgZGlzcGF0Y2ggPSB1c2VDYWxsYmFjayhmdW5jdGlvbiAocGF5bG9hZCkge1xuICAgICAgICB2YXIgc2hvdWxkVXBkYXRlU3RhdGUgPSBmYWxzZTtcbiAgICAgICAgZm9yICh2YXIgayBpbiBwYXlsb2FkKSB7XG4gICAgICAgICAgICBpZiAoc3RhdGVSZWYuY3VycmVudFtrXSA9PT0gcGF5bG9hZFtrXSkge1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc3RhdGVSZWYuY3VycmVudFtrXSA9IHBheWxvYWRba107XG4gICAgICAgICAgICBpZiAoc3RhdGVEZXBlbmRlbmNpZXMuY3VycmVudFtrXSkge1xuICAgICAgICAgICAgICAgIHNob3VsZFVwZGF0ZVN0YXRlID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoc2hvdWxkVXBkYXRlU3RhdGUgfHwgY29uZmlnLnN1c3BlbnNlKSB7XG4gICAgICAgICAgICAvLyBpZiBjb21wb25lbnQgaXMgdW5tb3VudGVkLCBzaG91bGQgc2tpcCByZXJlbmRlclxuICAgICAgICAgICAgLy8gaWYgY29tcG9uZW50IGlzIG5vdCBtb3VudGVkLCBzaG91bGQgc2tpcCByZXJlbmRlclxuICAgICAgICAgICAgaWYgKHVubW91bnRlZFJlZi5jdXJyZW50IHx8ICFpbml0aWFsTW91bnRlZFJlZi5jdXJyZW50KVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIHJlcmVuZGVyKHt9KTtcbiAgICAgICAgfVxuICAgIH0sIFtdKTtcbiAgICAvLyBlcnJvciByZWYgaW5zaWRlIHJldmFsaWRhdGUgKGlzIGxhc3QgcmVxdWVzdCBlcnJvcmVkPylcbiAgICB2YXIgdW5tb3VudGVkUmVmID0gdXNlUmVmKGZhbHNlKTtcbiAgICB2YXIga2V5UmVmID0gdXNlUmVmKGtleSk7XG4gICAgLy8gY2hlY2sgaWYgY29tcG9uZW50IGlzIG1vdW50ZWQgaW4gc3VzcGVuc2UgbW9kZVxuICAgIHZhciBpbml0aWFsTW91bnRlZFJlZiA9IHVzZVJlZihmYWxzZSk7XG4gICAgLy8gZG8gdW5tb3VudCBjaGVjayBmb3IgY2FsbGJhY2tzXG4gICAgdmFyIGV2ZW50c1JlZiA9IHVzZVJlZih7XG4gICAgICAgIGVtaXQ6IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgdmFyIF9hO1xuICAgICAgICAgICAgdmFyIHBhcmFtcyA9IFtdO1xuICAgICAgICAgICAgZm9yICh2YXIgX2kgPSAxOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgICAgICBwYXJhbXNbX2kgLSAxXSA9IGFyZ3VtZW50c1tfaV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodW5tb3VudGVkUmVmLmN1cnJlbnQpXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgKF9hID0gY29uZmlnUmVmLmN1cnJlbnQpW2V2ZW50XS5hcHBseShfYSwgcGFyYW1zKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHZhciBib3VuZE11dGF0ZSA9IHVzZUNhbGxiYWNrKGZ1bmN0aW9uIChkYXRhLCBzaG91bGRSZXZhbGlkYXRlKSB7XG4gICAgICAgIHJldHVybiBtdXRhdGUoa2V5UmVmLmN1cnJlbnQsIGRhdGEsIHNob3VsZFJldmFsaWRhdGUpO1xuICAgIH0sIFtdKTtcbiAgICB2YXIgYWRkUmV2YWxpZGF0b3IgPSBmdW5jdGlvbiAocmV2YWxpZGF0b3JzLCBjYWxsYmFjaykge1xuICAgICAgICBpZiAoIWNhbGxiYWNrKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBpZiAoIXJldmFsaWRhdG9yc1trZXldKSB7XG4gICAgICAgICAgICByZXZhbGlkYXRvcnNba2V5XSA9IFtjYWxsYmFja107XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXZhbGlkYXRvcnNba2V5XS5wdXNoKGNhbGxiYWNrKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgdmFyIHJlbW92ZVJldmFsaWRhdG9yID0gZnVuY3Rpb24gKHJldmxpZGF0b3JzLCBjYWxsYmFjaykge1xuICAgICAgICBpZiAocmV2bGlkYXRvcnNba2V5XSkge1xuICAgICAgICAgICAgdmFyIHJldmFsaWRhdG9ycyA9IHJldmxpZGF0b3JzW2tleV07XG4gICAgICAgICAgICB2YXIgaW5kZXggPSByZXZhbGlkYXRvcnMuaW5kZXhPZihjYWxsYmFjayk7XG4gICAgICAgICAgICBpZiAoaW5kZXggPj0gMCkge1xuICAgICAgICAgICAgICAgIC8vIDEweCBmYXN0ZXIgdGhhbiBzcGxpY2VcbiAgICAgICAgICAgICAgICAvLyBodHRwczovL2pzcGVyZi5jb20vYXJyYXktcmVtb3ZlLWJ5LWluZGV4XG4gICAgICAgICAgICAgICAgcmV2YWxpZGF0b3JzW2luZGV4XSA9IHJldmFsaWRhdG9yc1tyZXZhbGlkYXRvcnMubGVuZ3RoIC0gMV07XG4gICAgICAgICAgICAgICAgcmV2YWxpZGF0b3JzLnBvcCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICAvLyBzdGFydCBhIHJldmFsaWRhdGlvblxuICAgIHZhciByZXZhbGlkYXRlID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gKHJldmFsaWRhdGVPcHRzKSB7XG4gICAgICAgIGlmIChyZXZhbGlkYXRlT3B0cyA9PT0gdm9pZCAwKSB7IHJldmFsaWRhdGVPcHRzID0ge307IH1cbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcihfdGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBsb2FkaW5nLCBzaG91bGREZWR1cGluZywgbmV3RGF0YSwgc3RhcnRBdCwgc2hvdWxkSWdub3JlUmVxdWVzdCwgbmV3U3RhdGUsIGVycl8yLCByZXRyeUNvdW50O1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFrZXkgfHwgIWZuKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCBmYWxzZV07XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodW5tb3VudGVkUmVmLmN1cnJlbnQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIGZhbHNlXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldmFsaWRhdGVPcHRzID0gT2JqZWN0LmFzc2lnbih7IGRlZHVwZTogZmFsc2UgfSwgcmV2YWxpZGF0ZU9wdHMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbG9hZGluZyA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaG91bGREZWR1cGluZyA9IHR5cGVvZiBDT05DVVJSRU5UX1BST01JU0VTW2tleV0gIT09ICd1bmRlZmluZWQnICYmIHJldmFsaWRhdGVPcHRzLmRlZHVwZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hLmxhYmVsID0gMTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgX2EudHJ5cy5wdXNoKFsxLCA2LCAsIDddKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc1ZhbGlkYXRpbmc6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FjaGUuc2V0KGtleVZhbGlkYXRpbmcsIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFzaG91bGREZWR1cGluZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGFsc28gdXBkYXRlIG90aGVyIGhvb2tzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJvYWRjYXN0U3RhdGUoa2V5LCBzdGF0ZVJlZi5jdXJyZW50LmRhdGEsIHN0YXRlUmVmLmN1cnJlbnQuZXJyb3IsIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3RGF0YSA9IHZvaWQgMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0QXQgPSB2b2lkIDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXNob3VsZERlZHVwaW5nKSByZXR1cm4gWzMgLypicmVhayovLCAzXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoZXJlJ3MgYWxyZWFkeSBhbiBvbmdvaW5nIHJlcXVlc3QsXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGlzIG9uZSBuZWVkcyB0byBiZSBkZWR1cGxpY2F0ZWQuXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGFydEF0ID0gQ09OQ1VSUkVOVF9QUk9NSVNFU19UU1trZXldO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgQ09OQ1VSUkVOVF9QUk9NSVNFU1trZXldXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3RGF0YSA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDVdO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBpZiBubyBjYWNoZSBiZWluZyByZW5kZXJlZCBjdXJyZW50bHkgKGl0IHNob3dzIGEgYmxhbmsgcGFnZSksXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB3ZSB0cmlnZ2VyIHRoZSBsb2FkaW5nIHNsb3cgZXZlbnQuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY29uZmlnLmxvYWRpbmdUaW1lb3V0ICYmICFjYWNoZS5nZXQoa2V5KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobG9hZGluZylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50c1JlZi5jdXJyZW50LmVtaXQoJ29uTG9hZGluZ1Nsb3cnLCBrZXksIGNvbmZpZyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgY29uZmlnLmxvYWRpbmdUaW1lb3V0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmbkFyZ3MgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBDT05DVVJSRU5UX1BST01JU0VTW2tleV0gPSBmbi5hcHBseSh2b2lkIDAsIGZuQXJncyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBDT05DVVJSRU5UX1BST01JU0VTW2tleV0gPSBmbihrZXkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgQ09OQ1VSUkVOVF9QUk9NSVNFU19UU1trZXldID0gc3RhcnRBdCA9IG5vdygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgQ09OQ1VSUkVOVF9QUk9NSVNFU1trZXldXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3RGF0YSA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBDT05DVVJSRU5UX1BST01JU0VTW2tleV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlIENPTkNVUlJFTlRfUFJPTUlTRVNfVFNba2V5XTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIGNvbmZpZy5kZWR1cGluZ0ludGVydmFsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRyaWdnZXIgdGhlIHN1Y2Nlc3MgZXZlbnQsXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBvbmx5IGRvIHRoaXMgZm9yIHRoZSBvcmlnaW5hbCByZXF1ZXN0LlxuICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnRzUmVmLmN1cnJlbnQuZW1pdCgnb25TdWNjZXNzJywgbmV3RGF0YSwga2V5LCBjb25maWcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgX2EubGFiZWwgPSA1O1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgICAgICAgICAgICAgICBzaG91bGRJZ25vcmVSZXF1ZXN0ID0gXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBpZiB0aGVyZSdyZSBvdGhlciBvbmdvaW5nIHJlcXVlc3QocyksIHN0YXJ0ZWQgYWZ0ZXIgdGhlIGN1cnJlbnQgb25lLFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gd2UgbmVlZCB0byBpZ25vcmUgdGhlIGN1cnJlbnQgb25lIHRvIGF2b2lkIHBvc3NpYmxlIHJhY2UgY29uZGl0aW9uczpcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgcmVxMS0tLS0tLS0tLS0tLS0tLS0tLT5yZXMxICAgICAgICAoY3VycmVudCBvbmUpXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgcmVxMi0tLS0tLS0tLS0tLS0tLS0+cmVzMlxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhlIHJlcXVlc3QgdGhhdCBmaXJlZCBsYXRlciB3aWxsIGFsd2F5cyBiZSBrZXB0LlxuICAgICAgICAgICAgICAgICAgICAgICAgQ09OQ1VSUkVOVF9QUk9NSVNFU19UU1trZXldID4gc3RhcnRBdCB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGlmIHRoZXJlJ3JlIG90aGVyIG11dGF0aW9ucyhzKSwgb3ZlcmxhcHBlZCB3aXRoIHRoZSBjdXJyZW50IHJldmFsaWRhdGlvbjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICByZXEtLS0tLS0tLS0tLS0tLS0tLS0+cmVzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgbXV0YXRlLS0tLS0tPmVuZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIHJlcS0tLS0tLS0tLS0tLT5yZXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgIG11dGF0ZS0tLS0tLT5lbmRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjYXNlIDM6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICByZXEtLS0tLS0tLS0tLS0tLS0tLS0+cmVzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgbXV0YXRlLS0tLS0tLS4uLi0tLS0tLS0tLS0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gd2UgaGF2ZSB0byBpZ25vcmUgdGhlIHJldmFsaWRhdGlvbiByZXN1bHQgKHJlcykgYmVjYXVzZSBpdCdzIG5vIGxvbmdlciBmcmVzaC5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBtZWFud2hpbGUsIGEgbmV3IHJldmFsaWRhdGlvbiBzaG91bGQgYmUgdHJpZ2dlcmVkIHdoZW4gdGhlIG11dGF0aW9uIGVuZHMuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKE1VVEFUSU9OX1RTW2tleV0gJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY2FzZSAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChzdGFydEF0IDw9IE1VVEFUSU9OX1RTW2tleV0gfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNhc2UgMlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnRBdCA8PSBNVVRBVElPTl9FTkRfVFNba2V5XSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY2FzZSAzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNVVRBVElPTl9FTkRfVFNba2V5XSA9PT0gMCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNob3VsZElnbm9yZVJlcXVlc3QpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaCh7IGlzVmFsaWRhdGluZzogZmFsc2UgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIGZhbHNlXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNhY2hlLnNldChrZXksIG5ld0RhdGEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FjaGUuc2V0KGtleUVyciwgdW5kZWZpbmVkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhY2hlLnNldChrZXlWYWxpZGF0aW5nLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdTdGF0ZSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc1ZhbGlkYXRpbmc6IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBzdGF0ZVJlZi5jdXJyZW50LmVycm9yICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHdlIGRvbid0IGhhdmUgYW4gZXJyb3JcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdTdGF0ZS5lcnJvciA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghY29uZmlnLmNvbXBhcmUoc3RhdGVSZWYuY3VycmVudC5kYXRhLCBuZXdEYXRhKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGRlZXAgY29tcGFyZSB0byBhdm9pZCBleHRyYSByZS1yZW5kZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBkYXRhIGNoYW5nZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdTdGF0ZS5kYXRhID0gbmV3RGF0YTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIG1lcmdlIHRoZSBuZXcgc3RhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKG5ld1N0YXRlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghc2hvdWxkRGVkdXBpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBhbHNvIHVwZGF0ZSBvdGhlciBob29rc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyb2FkY2FzdFN0YXRlKGtleSwgbmV3RGF0YSwgbmV3U3RhdGUuZXJyb3IsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDddO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDY6XG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJfMiA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBDT05DVVJSRU5UX1BST01JU0VTW2tleV07XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgQ09OQ1VSUkVOVF9QUk9NSVNFU19UU1trZXldO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FjaGUuc2V0KGtleUVyciwgZXJyXzIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gZ2V0IGEgbmV3IGVycm9yXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBkb24ndCB1c2UgZGVlcCBlcXVhbCBmb3IgZXJyb3JzXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3RhdGVSZWYuY3VycmVudC5lcnJvciAhPT0gZXJyXzIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB3ZSBrZWVwIHRoZSBzdGFsZSBkYXRhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc1ZhbGlkYXRpbmc6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcjogZXJyXzJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXNob3VsZERlZHVwaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGFsc28gYnJvYWRjYXN0IHRvIHVwZGF0ZSBvdGhlciBob29rc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicm9hZGNhc3RTdGF0ZShrZXksIHVuZGVmaW5lZCwgZXJyXzIsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBldmVudHMgYW5kIHJldHJ5XG4gICAgICAgICAgICAgICAgICAgICAgICBldmVudHNSZWYuY3VycmVudC5lbWl0KCdvbkVycm9yJywgZXJyXzIsIGtleSwgY29uZmlnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb25maWcuc2hvdWxkUmV0cnlPbkVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0cnlDb3VudCA9IChyZXZhbGlkYXRlT3B0cy5yZXRyeUNvdW50IHx8IDApICsgMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmVudHNSZWYuY3VycmVudC5lbWl0KCdvbkVycm9yUmV0cnknLCBlcnJfMiwga2V5LCBjb25maWcsIHJldmFsaWRhdGUsIE9iamVjdC5hc3NpZ24oeyBkZWR1cGU6IHRydWUgfSwgcmV2YWxpZGF0ZU9wdHMsIHsgcmV0cnlDb3VudDogcmV0cnlDb3VudCB9KSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCA3XTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA3OlxuICAgICAgICAgICAgICAgICAgICAgICAgbG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIHRydWVdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9LCBba2V5XSk7XG4gICAgLy8gbW91bnRlZCAoY2xpZW50IHNpZGUgcmVuZGVyaW5nKVxuICAgIHVzZUlzb21vcnBoaWNMYXlvdXRFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIWtleSlcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgIC8vIGFmdGVyIGBrZXlgIHVwZGF0ZXMsIHdlIG5lZWQgdG8gbWFyayBpdCBhcyBtb3VudGVkXG4gICAgICAgIHVubW91bnRlZFJlZi5jdXJyZW50ID0gZmFsc2U7XG4gICAgICAgIGluaXRpYWxNb3VudGVkUmVmLmN1cnJlbnQgPSB0cnVlO1xuICAgICAgICAvLyBhZnRlciB0aGUgY29tcG9uZW50IGlzIG1vdW50ZWQgKGh5ZHJhdGVkKSxcbiAgICAgICAgLy8gd2UgbmVlZCB0byB1cGRhdGUgdGhlIGRhdGEgZnJvbSB0aGUgY2FjaGVcbiAgICAgICAgLy8gYW5kIHRyaWdnZXIgYSByZXZhbGlkYXRpb25cbiAgICAgICAgdmFyIGN1cnJlbnRIb29rRGF0YSA9IHN0YXRlUmVmLmN1cnJlbnQuZGF0YTtcbiAgICAgICAgdmFyIGxhdGVzdEtleWVkRGF0YSA9IHJlc29sdmVEYXRhKCk7XG4gICAgICAgIC8vIHVwZGF0ZSB0aGUgc3RhdGUgaWYgdGhlIGtleSBjaGFuZ2VkIChub3QgdGhlIGluaXRhbCByZW5kZXIpIG9yIGNhY2hlIHVwZGF0ZWRcbiAgICAgICAgaWYgKGtleVJlZi5jdXJyZW50ICE9PSBrZXkpIHtcbiAgICAgICAgICAgIGtleVJlZi5jdXJyZW50ID0ga2V5O1xuICAgICAgICB9XG4gICAgICAgIGlmICghY29uZmlnLmNvbXBhcmUoY3VycmVudEhvb2tEYXRhLCBsYXRlc3RLZXllZERhdGEpKSB7XG4gICAgICAgICAgICBkaXNwYXRjaCh7IGRhdGE6IGxhdGVzdEtleWVkRGF0YSB9KTtcbiAgICAgICAgfVxuICAgICAgICAvLyByZXZhbGlkYXRlIHdpdGggZGVkdXBpbmdcbiAgICAgICAgdmFyIHNvZnRSZXZhbGlkYXRlID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gcmV2YWxpZGF0ZSh7IGRlZHVwZTogdHJ1ZSB9KTsgfTtcbiAgICAgICAgLy8gdHJpZ2dlciBhIHJldmFsaWRhdGlvblxuICAgICAgICBpZiAoY29uZmlnLnJldmFsaWRhdGVPbk1vdW50IHx8XG4gICAgICAgICAgICAoIWNvbmZpZy5pbml0aWFsRGF0YSAmJiBjb25maWcucmV2YWxpZGF0ZU9uTW91bnQgPT09IHVuZGVmaW5lZCkpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgbGF0ZXN0S2V5ZWREYXRhICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIC8vIGRlbGF5IHJldmFsaWRhdGUgaWYgdGhlcmUncyBjYWNoZVxuICAgICAgICAgICAgICAgIC8vIHRvIG5vdCBibG9jayB0aGUgcmVuZGVyaW5nXG4gICAgICAgICAgICAgICAgckFGKHNvZnRSZXZhbGlkYXRlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHNvZnRSZXZhbGlkYXRlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHBlbmRpbmcgPSBmYWxzZTtcbiAgICAgICAgdmFyIG9uRm9jdXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAocGVuZGluZyB8fCAhY29uZmlnUmVmLmN1cnJlbnQucmV2YWxpZGF0ZU9uRm9jdXMpXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgcGVuZGluZyA9IHRydWU7XG4gICAgICAgICAgICBzb2Z0UmV2YWxpZGF0ZSgpO1xuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7IHJldHVybiAocGVuZGluZyA9IGZhbHNlKTsgfSwgY29uZmlnUmVmLmN1cnJlbnQuZm9jdXNUaHJvdHRsZUludGVydmFsKTtcbiAgICAgICAgfTtcbiAgICAgICAgdmFyIG9uUmVjb25uZWN0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKGNvbmZpZ1JlZi5jdXJyZW50LnJldmFsaWRhdGVPblJlY29ubmVjdCkge1xuICAgICAgICAgICAgICAgIHNvZnRSZXZhbGlkYXRlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIC8vIHJlZ2lzdGVyIGdsb2JhbCBjYWNoZSB1cGRhdGUgbGlzdGVuZXJcbiAgICAgICAgdmFyIG9uVXBkYXRlID0gZnVuY3Rpb24gKHNob3VsZFJldmFsaWRhdGUsIHVwZGF0ZWREYXRhLCB1cGRhdGVkRXJyb3IsIHVwZGF0ZWRJc1ZhbGlkYXRpbmcsIGRlZHVwZSkge1xuICAgICAgICAgICAgaWYgKHNob3VsZFJldmFsaWRhdGUgPT09IHZvaWQgMCkgeyBzaG91bGRSZXZhbGlkYXRlID0gdHJ1ZTsgfVxuICAgICAgICAgICAgaWYgKGRlZHVwZSA9PT0gdm9pZCAwKSB7IGRlZHVwZSA9IHRydWU7IH1cbiAgICAgICAgICAgIC8vIHVwZGF0ZSBob29rIHN0YXRlXG4gICAgICAgICAgICB2YXIgbmV3U3RhdGUgPSB7fTtcbiAgICAgICAgICAgIHZhciBuZWVkVXBkYXRlID0gZmFsc2U7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHVwZGF0ZWREYXRhICE9PSAndW5kZWZpbmVkJyAmJlxuICAgICAgICAgICAgICAgICFjb25maWcuY29tcGFyZShzdGF0ZVJlZi5jdXJyZW50LmRhdGEsIHVwZGF0ZWREYXRhKSkge1xuICAgICAgICAgICAgICAgIG5ld1N0YXRlLmRhdGEgPSB1cGRhdGVkRGF0YTtcbiAgICAgICAgICAgICAgICBuZWVkVXBkYXRlID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGFsd2F5cyB1cGRhdGUgZXJyb3JcbiAgICAgICAgICAgIC8vIGJlY2F1c2UgaXQgY2FuIGJlIGB1bmRlZmluZWRgXG4gICAgICAgICAgICBpZiAoc3RhdGVSZWYuY3VycmVudC5lcnJvciAhPT0gdXBkYXRlZEVycm9yKSB7XG4gICAgICAgICAgICAgICAgbmV3U3RhdGUuZXJyb3IgPSB1cGRhdGVkRXJyb3I7XG4gICAgICAgICAgICAgICAgbmVlZFVwZGF0ZSA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodHlwZW9mIHVwZGF0ZWRJc1ZhbGlkYXRpbmcgIT09ICd1bmRlZmluZWQnICYmXG4gICAgICAgICAgICAgICAgc3RhdGVSZWYuY3VycmVudC5pc1ZhbGlkYXRpbmcgIT09IHVwZGF0ZWRJc1ZhbGlkYXRpbmcpIHtcbiAgICAgICAgICAgICAgICBuZXdTdGF0ZS5pc1ZhbGlkYXRpbmcgPSB1cGRhdGVkSXNWYWxpZGF0aW5nO1xuICAgICAgICAgICAgICAgIG5lZWRVcGRhdGUgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG5lZWRVcGRhdGUpIHtcbiAgICAgICAgICAgICAgICBkaXNwYXRjaChuZXdTdGF0ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoc2hvdWxkUmV2YWxpZGF0ZSkge1xuICAgICAgICAgICAgICAgIGlmIChkZWR1cGUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNvZnRSZXZhbGlkYXRlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmV2YWxpZGF0ZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfTtcbiAgICAgICAgYWRkUmV2YWxpZGF0b3IoRk9DVVNfUkVWQUxJREFUT1JTLCBvbkZvY3VzKTtcbiAgICAgICAgYWRkUmV2YWxpZGF0b3IoUkVDT05ORUNUX1JFVkFMSURBVE9SUywgb25SZWNvbm5lY3QpO1xuICAgICAgICBhZGRSZXZhbGlkYXRvcihDQUNIRV9SRVZBTElEQVRPUlMsIG9uVXBkYXRlKTtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIC8vIGNsZWFudXBcbiAgICAgICAgICAgIGRpc3BhdGNoID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gbnVsbDsgfTtcbiAgICAgICAgICAgIC8vIG1hcmsgaXQgYXMgdW5tb3VudGVkXG4gICAgICAgICAgICB1bm1vdW50ZWRSZWYuY3VycmVudCA9IHRydWU7XG4gICAgICAgICAgICByZW1vdmVSZXZhbGlkYXRvcihGT0NVU19SRVZBTElEQVRPUlMsIG9uRm9jdXMpO1xuICAgICAgICAgICAgcmVtb3ZlUmV2YWxpZGF0b3IoUkVDT05ORUNUX1JFVkFMSURBVE9SUywgb25SZWNvbm5lY3QpO1xuICAgICAgICAgICAgcmVtb3ZlUmV2YWxpZGF0b3IoQ0FDSEVfUkVWQUxJREFUT1JTLCBvblVwZGF0ZSk7XG4gICAgICAgIH07XG4gICAgfSwgW2tleSwgcmV2YWxpZGF0ZV0pO1xuICAgIHVzZUlzb21vcnBoaWNMYXlvdXRFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgdGltZXIgPSBudWxsO1xuICAgICAgICB2YXIgdGljayA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIF9fYXdhaXRlcihfdGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghKCFzdGF0ZVJlZi5jdXJyZW50LmVycm9yICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKGNvbmZpZ1JlZi5jdXJyZW50LnJlZnJlc2hXaGVuSGlkZGVuIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpZ1JlZi5jdXJyZW50LmlzRG9jdW1lbnRWaXNpYmxlKCkpICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKGNvbmZpZ1JlZi5jdXJyZW50LnJlZnJlc2hXaGVuT2ZmbGluZSB8fCBjb25maWdSZWYuY3VycmVudC5pc09ubGluZSgpKSkpIHJldHVybiBbMyAvKmJyZWFrKi8sIDJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gb25seSByZXZhbGlkYXRlIHdoZW4gdGhlIHBhZ2UgaXMgdmlzaWJsZVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gaWYgQVBJIHJlcXVlc3QgZXJyb3JlZCwgd2Ugc3RvcCBwb2xsaW5nIGluIHRoaXMgcm91bmRcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGFuZCBsZXQgdGhlIGVycm9yIHJldHJ5IGZ1bmN0aW9uIGhhbmRsZSBpdFxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgcmV2YWxpZGF0ZSh7IGRlZHVwZTogdHJ1ZSB9KV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIG9ubHkgcmV2YWxpZGF0ZSB3aGVuIHRoZSBwYWdlIGlzIHZpc2libGVcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGlmIEFQSSByZXF1ZXN0IGVycm9yZWQsIHdlIHN0b3AgcG9sbGluZyBpbiB0aGlzIHJvdW5kXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBhbmQgbGV0IHRoZSBlcnJvciByZXRyeSBmdW5jdGlvbiBoYW5kbGUgaXRcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hLmxhYmVsID0gMjtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gUmVhZCB0aGUgbGF0ZXN0IHJlZnJlc2hJbnRlcnZhbFxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvbmZpZ1JlZi5jdXJyZW50LnJlZnJlc2hJbnRlcnZhbCAmJiAhc3RhdGVSZWYuY3VycmVudC5lcnJvcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVyID0gc2V0VGltZW91dCh0aWNrLCBjb25maWdSZWYuY3VycmVudC5yZWZyZXNoSW50ZXJ2YWwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTsgfTtcbiAgICAgICAgaWYgKGNvbmZpZ1JlZi5jdXJyZW50LnJlZnJlc2hJbnRlcnZhbCkge1xuICAgICAgICAgICAgdGltZXIgPSBzZXRUaW1lb3V0KHRpY2ssIGNvbmZpZ1JlZi5jdXJyZW50LnJlZnJlc2hJbnRlcnZhbCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICh0aW1lcilcbiAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQodGltZXIpO1xuICAgICAgICB9O1xuICAgIH0sIFtcbiAgICAgICAgY29uZmlnLnJlZnJlc2hJbnRlcnZhbCxcbiAgICAgICAgY29uZmlnLnJlZnJlc2hXaGVuSGlkZGVuLFxuICAgICAgICBjb25maWcucmVmcmVzaFdoZW5PZmZsaW5lLFxuICAgICAgICByZXZhbGlkYXRlXG4gICAgXSk7XG4gICAgLy8gZGVmaW5lIHJldHVybmVkIHN0YXRlXG4gICAgLy8gY2FuIGJlIG1lbW9yaXplZCBzaW5jZSB0aGUgc3RhdGUgaXMgYSByZWZcbiAgICB2YXIgbWVtb2l6ZWRTdGF0ZSA9IHVzZU1lbW8oZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgc3RhdGUgPSB7IHJldmFsaWRhdGU6IHJldmFsaWRhdGUsIG11dGF0ZTogYm91bmRNdXRhdGUgfTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoc3RhdGUsIHtcbiAgICAgICAgICAgIGVycm9yOiB7XG4gICAgICAgICAgICAgICAgLy8gYGtleWAgbWlnaHQgYmUgY2hhbmdlZCBpbiB0aGUgdXBjb21pbmcgaG9vayByZS1yZW5kZXIsXG4gICAgICAgICAgICAgICAgLy8gYnV0IHRoZSBwcmV2aW91cyBzdGF0ZSB3aWxsIHN0YXlcbiAgICAgICAgICAgICAgICAvLyBzbyB3ZSBuZWVkIHRvIG1hdGNoIHRoZSBsYXRlc3Qga2V5IGFuZCBkYXRhIChmYWxsYmFjayB0byBgaW5pdGlhbERhdGFgKVxuICAgICAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBzdGF0ZURlcGVuZGVuY2llcy5jdXJyZW50LmVycm9yID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGtleVJlZi5jdXJyZW50ID09PSBrZXkgPyBzdGF0ZVJlZi5jdXJyZW50LmVycm9yIDogaW5pdGlhbEVycm9yO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGVEZXBlbmRlbmNpZXMuY3VycmVudC5kYXRhID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGtleVJlZi5jdXJyZW50ID09PSBrZXkgPyBzdGF0ZVJlZi5jdXJyZW50LmRhdGEgOiBpbml0aWFsRGF0YTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWVcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBpc1ZhbGlkYXRpbmc6IHtcbiAgICAgICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGVEZXBlbmRlbmNpZXMuY3VycmVudC5pc1ZhbGlkYXRpbmcgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc3RhdGVSZWYuY3VycmVudC5pc1ZhbGlkYXRpbmc7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgfSwgW3JldmFsaWRhdGVdKTtcbiAgICAvLyBzdXNwZW5zZVxuICAgIGlmIChjb25maWcuc3VzcGVuc2UpIHtcbiAgICAgICAgLy8gaW4gc3VzcGVuc2UgbW9kZSwgd2UgY2FuJ3QgcmV0dXJuIGVtcHR5IHN0YXRlXG4gICAgICAgIC8vIChpdCBzaG91bGQgYmUgc3VzcGVuZGVkKVxuICAgICAgICAvLyB0cnkgdG8gZ2V0IGRhdGEgYW5kIGVycm9yIGZyb20gY2FjaGVcbiAgICAgICAgdmFyIGxhdGVzdERhdGEgPSBjYWNoZS5nZXQoa2V5KTtcbiAgICAgICAgdmFyIGxhdGVzdEVycm9yID0gY2FjaGUuZ2V0KGtleUVycik7XG4gICAgICAgIGlmICh0eXBlb2YgbGF0ZXN0RGF0YSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIGxhdGVzdERhdGEgPSBpbml0aWFsRGF0YTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIGxhdGVzdEVycm9yID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgbGF0ZXN0RXJyb3IgPSBpbml0aWFsRXJyb3I7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiBsYXRlc3REYXRhID09PSAndW5kZWZpbmVkJyAmJlxuICAgICAgICAgICAgdHlwZW9mIGxhdGVzdEVycm9yID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgLy8gbmVlZCB0byBzdGFydCB0aGUgcmVxdWVzdCBpZiBpdCBoYXNuJ3RcbiAgICAgICAgICAgIGlmICghQ09OQ1VSUkVOVF9QUk9NSVNFU1trZXldKSB7XG4gICAgICAgICAgICAgICAgLy8gdHJpZ2dlciByZXZhbGlkYXRlIGltbWVkaWF0ZWx5XG4gICAgICAgICAgICAgICAgLy8gdG8gZ2V0IHRoZSBwcm9taXNlXG4gICAgICAgICAgICAgICAgLy8gaW4gdGhpcyByZXZhbGlkYXRlLCBzaG91bGQgbm90IHJlcmVuZGVyXG4gICAgICAgICAgICAgICAgcmV2YWxpZGF0ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKENPTkNVUlJFTlRfUFJPTUlTRVNba2V5XSAmJlxuICAgICAgICAgICAgICAgIHR5cGVvZiBDT05DVVJSRU5UX1BST01JU0VTW2tleV0udGhlbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgIC8vIGlmIGl0IGlzIGEgcHJvbWlzZVxuICAgICAgICAgICAgICAgIHRocm93IENPTkNVUlJFTlRfUFJPTUlTRVNba2V5XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGl0J3MgYSB2YWx1ZSwgcmV0dXJuIGl0IGRpcmVjdGx5IChvdmVycmlkZSlcbiAgICAgICAgICAgIGxhdGVzdERhdGEgPSBDT05DVVJSRU5UX1BST01JU0VTW2tleV07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiBsYXRlc3REYXRhID09PSAndW5kZWZpbmVkJyAmJiBsYXRlc3RFcnJvcikge1xuICAgICAgICAgICAgLy8gaW4gc3VzcGVuc2UgbW9kZSwgdGhyb3cgZXJyb3IgaWYgdGhlcmUncyBubyBjb250ZW50XG4gICAgICAgICAgICB0aHJvdyBsYXRlc3RFcnJvcjtcbiAgICAgICAgfVxuICAgICAgICAvLyByZXR1cm4gdGhlIGxhdGVzdCBkYXRhIC8gZXJyb3IgZnJvbSBjYWNoZVxuICAgICAgICAvLyBpbiBjYXNlIGBrZXlgIGhhcyBjaGFuZ2VkXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBlcnJvcjogbGF0ZXN0RXJyb3IsXG4gICAgICAgICAgICBkYXRhOiBsYXRlc3REYXRhLFxuICAgICAgICAgICAgcmV2YWxpZGF0ZTogcmV2YWxpZGF0ZSxcbiAgICAgICAgICAgIG11dGF0ZTogYm91bmRNdXRhdGUsXG4gICAgICAgICAgICBpc1ZhbGlkYXRpbmc6IHN0YXRlUmVmLmN1cnJlbnQuaXNWYWxpZGF0aW5nXG4gICAgICAgIH07XG4gICAgfVxuICAgIHJldHVybiBtZW1vaXplZFN0YXRlO1xufVxudmFyIFNXUkNvbmZpZyA9IFNXUkNvbmZpZ0NvbnRleHQuUHJvdmlkZXI7XG5leHBvcnQgeyB0cmlnZ2VyLCBtdXRhdGUsIFNXUkNvbmZpZyB9O1xuZXhwb3J0IGRlZmF1bHQgdXNlU1dSO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==