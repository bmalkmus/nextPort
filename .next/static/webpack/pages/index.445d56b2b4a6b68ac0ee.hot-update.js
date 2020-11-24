webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Projects/index.js":
/*!**************************************!*\
  !*** ./components/Projects/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var C_Users_bmalk_nextPort_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swr */ "./node_modules/swr/esm/index.js");
/* harmony import */ var react_responsive_carousel_lib_styles_carousel_min_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-responsive-carousel/lib/styles/carousel.min.css */ "./node_modules/react-responsive-carousel/lib/styles/carousel.min.css");
/* harmony import */ var react_responsive_carousel_lib_styles_carousel_min_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_responsive_carousel_lib_styles_carousel_min_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_responsive_carousel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-responsive-carousel */ "./node_modules/react-responsive-carousel/lib/js/index.js");
/* harmony import */ var react_responsive_carousel__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_responsive_carousel__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./style.css */ "./components/Projects/style.css");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_6__);



var _jsxFileName = "C:\\Users\\bmalk\\nextPort\\components\\Projects\\index.js",
    _s = $RefreshSig$();







var fetcher = function fetcher(url) {
  return fetch(url).then(function (res) {
    return res.json();
  });
};

function Projects() {
  _s();

  var _this = this;

  var _useSwr = Object(swr__WEBPACK_IMPORTED_MODULE_3__["default"])('/api/projects', fetcher),
      data = _useSwr.data,
      error = _useSwr.error;

  if (error) return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
    children: "Failed to load users"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 19
  }, this);
  if (!data) return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
    children: "Loading..."
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 19
  }, this);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
    className: "cardsContainer",
    children: [Object(C_Users_bmalk_nextPort_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(data).map(function (project) {
      var keyName = project.name + 1;
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
        className: "mobileCards",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h3", {
          children: project.name
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 25
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("img", {
          alt: "Project image",
          src: project.imgPath
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 25
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
            children: project.description
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 26,
            columnNumber: 29
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
            children: ["Technologies: ", project.technologies]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 27,
            columnNumber: 29
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
            children: ["Deployed: ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("a", {
              href: project.deployed,
              children: project.deployed
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 28,
              columnNumber: 42
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 28,
            columnNumber: 29
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
            children: ["Repo: ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("a", {
              href: project.repo,
              children: project.repo
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 29,
              columnNumber: 38
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 29,
            columnNumber: 29
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 25
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 25
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("a", {
          className: "backToTop",
          href: "#homePage",
          alt: "back to top",
          children: "Back to Homepage"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 25
        }, _this)]
      }, keyName, true, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 21
      }, _this);
    }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: "slideContainer",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react_responsive_carousel__WEBPACK_IMPORTED_MODULE_5__["Carousel"], {
        children: Object(C_Users_bmalk_nextPort_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(data).map(function (project) {
          var key = project.name + 2;
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
            className: "slideContent",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h2", {
              children: project.name
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 43,
              columnNumber: 33
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("img", {
              src: project.imgPath,
              className: "slideImg",
              alt: "project image"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 44,
              columnNumber: 37
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
              className: "contentContainer",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
                children: project.description
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 46,
                columnNumber: 41
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
                children: ["Technologies: ", project.technologies]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 47,
                columnNumber: 41
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
                children: ["Deployed: ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("a", {
                  href: project.deployed,
                  children: project.deployed
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 48,
                  columnNumber: 54
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 48,
                columnNumber: 41
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
                children: ["Repo: ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("a", {
                  href: project.repo,
                  children: project.repo
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 49,
                  columnNumber: 50
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 49,
                columnNumber: 41
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 45,
              columnNumber: 37
            }, _this)]
          }, key, true, {
            fileName: _jsxFileName,
            lineNumber: 42,
            columnNumber: 29
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 9
  }, this);
}

_s(Projects, "0Md9nfe1w9EeNtTpqsFmc6MYhdg=", false, function () {
  return [swr__WEBPACK_IMPORTED_MODULE_3__["default"]];
});

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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9qZWN0cy9pbmRleC5qcyJdLCJuYW1lcyI6WyJmZXRjaGVyIiwidXJsIiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwianNvbiIsIlByb2plY3RzIiwidXNlU3dyIiwiZGF0YSIsImVycm9yIiwibWFwIiwicHJvamVjdCIsImtleU5hbWUiLCJuYW1lIiwiaW1nUGF0aCIsImRlc2NyaXB0aW9uIiwidGVjaG5vbG9naWVzIiwiZGVwbG95ZWQiLCJyZXBvIiwia2V5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsT0FBTyxHQUFHLFNBQVZBLE9BQVUsQ0FBQ0MsR0FBRDtBQUFBLFNBQVNDLEtBQUssQ0FBQ0QsR0FBRCxDQUFMLENBQVdFLElBQVgsQ0FBZ0IsVUFBQ0MsR0FBRDtBQUFBLFdBQVNBLEdBQUcsQ0FBQ0MsSUFBSixFQUFUO0FBQUEsR0FBaEIsQ0FBVDtBQUFBLENBQWhCOztBQUVBLFNBQVNDLFFBQVQsR0FBbUI7QUFBQTs7QUFBQTs7QUFBQSxnQkFFS0MsbURBQU0sQ0FBQyxlQUFELEVBQWtCUCxPQUFsQixDQUZYO0FBQUEsTUFFWFEsSUFGVyxXQUVYQSxJQUZXO0FBQUEsTUFFTEMsS0FGSyxXQUVMQSxLQUZLOztBQUduQixNQUFJQSxLQUFKLEVBQVcsb0JBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUDtBQUNYLE1BQUksQ0FBQ0QsSUFBTCxFQUFXLG9CQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQVA7QUFJUCxzQkFDSTtBQUFLLGFBQVMsRUFBQyxnQkFBZjtBQUFBLGVBQ0ssZ0lBQUlBLElBQUosRUFBVUUsR0FBVixDQUFjLFVBQUFDLE9BQU8sRUFBSTtBQUN0QixVQUFNQyxPQUFPLEdBQUdELE9BQU8sQ0FBQ0UsSUFBUixHQUFlLENBQS9CO0FBQ0EsMEJBQ0k7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O0tBRmZELFE7QUF1RE1BLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjQ0NWQ1NmIyYjRhNmI2OGFjMGVlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgdXNlU3dyIGZyb20gJ3N3cic7XHJcbmltcG9ydCBcInJlYWN0LXJlc3BvbnNpdmUtY2Fyb3VzZWwvbGliL3N0eWxlcy9jYXJvdXNlbC5taW4uY3NzXCI7XHJcbmltcG9ydCB7IENhcm91c2VsIH0gZnJvbSAncmVhY3QtcmVzcG9uc2l2ZS1jYXJvdXNlbCc7XHJcbmltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XHJcblxyXG5jb25zdCBmZXRjaGVyID0gKHVybCkgPT4gZmV0Y2godXJsKS50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXHJcblxyXG5mdW5jdGlvbiBQcm9qZWN0cygpe1xyXG5cclxuY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gdXNlU3dyKCcvYXBpL3Byb2plY3RzJywgZmV0Y2hlcilcclxuaWYgKGVycm9yKSByZXR1cm4gPGRpdj5GYWlsZWQgdG8gbG9hZCB1c2VyczwvZGl2PlxyXG5pZiAoIWRhdGEpIHJldHVybiA8ZGl2PkxvYWRpbmcuLi48L2Rpdj5cclxuXHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkc0NvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICB7Wy4uLmRhdGFdLm1hcChwcm9qZWN0ID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGtleU5hbWUgPSBwcm9qZWN0Lm5hbWUgKyAxXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtrZXlOYW1lfSBjbGFzc05hbWU9XCJtb2JpbGVDYXJkc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDM+e3Byb2plY3QubmFtZX08L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGFsdCA9IFwiUHJvamVjdCBpbWFnZVwiIHNyYz17cHJvamVjdC5pbWdQYXRofS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57cHJvamVjdC5kZXNjcmlwdGlvbn08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5UZWNobm9sb2dpZXM6IHtwcm9qZWN0LnRlY2hub2xvZ2llc308L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5EZXBsb3llZDogPGEgaHJlZj17cHJvamVjdC5kZXBsb3llZH0+e3Byb2plY3QuZGVwbG95ZWR9PC9hPjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlJlcG86IDxhIGhyZWY9e3Byb2plY3QucmVwb30+e3Byb2plY3QucmVwb308L2E+PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPSBcImJhY2tUb1RvcFwiIGhyZWY9XCIjaG9tZVBhZ2VcIiBhbHQ9XCJiYWNrIHRvIHRvcFwiPkJhY2sgdG8gSG9tZXBhZ2U8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbGlkZUNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgPENhcm91c2VsPlxyXG4gICAgICAgICAgICAgICAgICAgIHtbLi4uZGF0YV0ubWFwKHByb2plY3Q9PntcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qga2V5ID0gcHJvamVjdC5uYW1lKzJcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbGlkZUNvbnRlbnRcIiBrZXk9e2tleX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyPntwcm9qZWN0Lm5hbWV9PC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3Byb2plY3QuaW1nUGF0aH0gY2xhc3NOYW1lPVwic2xpZGVJbWdcIiBhbHQ9XCJwcm9qZWN0IGltYWdlXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRDb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPntwcm9qZWN0LmRlc2NyaXB0aW9ufTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlRlY2hub2xvZ2llczoge3Byb2plY3QudGVjaG5vbG9naWVzfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkRlcGxveWVkOiA8YSBocmVmPXtwcm9qZWN0LmRlcGxveWVkfT57cHJvamVjdC5kZXBsb3llZH08L2E+PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+UmVwbzogPGEgaHJlZj17cHJvamVjdC5yZXBvfT57cHJvamVjdC5yZXBvfTwvYT48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgIDwvQ2Fyb3VzZWw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICBcclxuXHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdHMiXSwic291cmNlUm9vdCI6IiJ9