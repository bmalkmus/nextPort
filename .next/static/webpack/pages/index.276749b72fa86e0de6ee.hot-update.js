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
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
          children: project.description
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 25
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
          children: ["Technologies: ", project.technologies]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 25
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
          children: ["Deployed: ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("a", {
            href: project.deployed,
            children: project.deployed
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 27,
            columnNumber: 38
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 25
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
          children: ["Repo: ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("a", {
            href: project.repo,
            children: project.repo
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 28,
            columnNumber: 34
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 25
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 25
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("a", {
          className: "backToTop",
          href: "#homePage",
          alt: "back to top",
          children: "Back to Homepage"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 30,
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
              lineNumber: 41,
              columnNumber: 33
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("img", {
              src: project.imgPath,
              className: "slideImg",
              alt: "project image"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 42,
              columnNumber: 37
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
              className: "contentContainer",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
                children: project.description
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 44,
                columnNumber: 41
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
                children: ["Technologies: ", project.technologies]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 45,
                columnNumber: 41
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
                children: ["Deployed: ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("a", {
                  href: project.deployed,
                  children: project.deployed
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 46,
                  columnNumber: 54
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 46,
                columnNumber: 41
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
                children: ["Repo: ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("a", {
                  href: project.repo,
                  children: project.repo
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 47,
                  columnNumber: 50
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 47,
                columnNumber: 41
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 43,
              columnNumber: 37
            }, _this)]
          }, key, true, {
            fileName: _jsxFileName,
            lineNumber: 40,
            columnNumber: 29
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9qZWN0cy9pbmRleC5qcyJdLCJuYW1lcyI6WyJmZXRjaGVyIiwidXJsIiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwianNvbiIsIlByb2plY3RzIiwidXNlU3dyIiwiZGF0YSIsImVycm9yIiwibWFwIiwicHJvamVjdCIsImtleU5hbWUiLCJuYW1lIiwiaW1nUGF0aCIsImRlc2NyaXB0aW9uIiwidGVjaG5vbG9naWVzIiwiZGVwbG95ZWQiLCJyZXBvIiwia2V5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsT0FBTyxHQUFHLFNBQVZBLE9BQVUsQ0FBQ0MsR0FBRDtBQUFBLFNBQVNDLEtBQUssQ0FBQ0QsR0FBRCxDQUFMLENBQVdFLElBQVgsQ0FBZ0IsVUFBQ0MsR0FBRDtBQUFBLFdBQVNBLEdBQUcsQ0FBQ0MsSUFBSixFQUFUO0FBQUEsR0FBaEIsQ0FBVDtBQUFBLENBQWhCOztBQUVBLFNBQVNDLFFBQVQsR0FBbUI7QUFBQTs7QUFBQTs7QUFBQSxnQkFFS0MsbURBQU0sQ0FBQyxlQUFELEVBQWtCUCxPQUFsQixDQUZYO0FBQUEsTUFFWFEsSUFGVyxXQUVYQSxJQUZXO0FBQUEsTUFFTEMsS0FGSyxXQUVMQSxLQUZLOztBQUduQixNQUFJQSxLQUFKLEVBQVcsb0JBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUDtBQUNYLE1BQUksQ0FBQ0QsSUFBTCxFQUFXLG9CQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQVA7QUFJUCxzQkFDSTtBQUFLLGFBQVMsRUFBQyxnQkFBZjtBQUFBLGVBQ0ssZ0lBQUlBLElBQUosRUFBVUUsR0FBVixDQUFjLFVBQUFDLE9BQU8sRUFBSTtBQUN0QixVQUFNQyxPQUFPLEdBQUdELE9BQU8sQ0FBQ0UsSUFBUixHQUFlLENBQS9CO0FBQ0EsMEJBQ0k7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Y2svcGFnZXMvaW5kZXguMjc2NzQ5YjcyZmE4NmUwZGU2ZWUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB1c2VTd3IgZnJvbSAnc3dyJztcclxuaW1wb3J0IFwicmVhY3QtcmVzcG9uc2l2ZS1jYXJvdXNlbC9saWIvc3R5bGVzL2Nhcm91c2VsLm1pbi5jc3NcIjtcclxuaW1wb3J0IHsgQ2Fyb3VzZWwgfSBmcm9tICdyZWFjdC1yZXNwb25zaXZlLWNhcm91c2VsJztcclxuaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcclxuXHJcbmNvbnN0IGZldGNoZXIgPSAodXJsKSA9PiBmZXRjaCh1cmwpLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcclxuXHJcbmZ1bmN0aW9uIFByb2plY3RzKCl7XHJcblxyXG5jb25zdCB7IGRhdGEsIGVycm9yIH0gPSB1c2VTd3IoJy9hcGkvcHJvamVjdHMnLCBmZXRjaGVyKVxyXG5pZiAoZXJyb3IpIHJldHVybiA8ZGl2PkZhaWxlZCB0byBsb2FkIHVzZXJzPC9kaXY+XHJcbmlmICghZGF0YSkgcmV0dXJuIDxkaXY+TG9hZGluZy4uLjwvZGl2PlxyXG5cclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRzQ29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIHtbLi4uZGF0YV0ubWFwKHByb2plY3QgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qga2V5TmFtZSA9IHByb2plY3QubmFtZSArIDFcclxuICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2tleU5hbWV9IGNsYXNzTmFtZT1cIm1vYmlsZUNhcmRzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMz57cHJvamVjdC5uYW1lfTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgYWx0ID0gXCJQcm9qZWN0IGltYWdlXCIgc3JjPXtwcm9qZWN0LmltZ1BhdGh9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+e3Byb2plY3QuZGVzY3JpcHRpb259PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5UZWNobm9sb2dpZXM6IHtwcm9qZWN0LnRlY2hub2xvZ2llc308L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPkRlcGxveWVkOiA8YSBocmVmPXtwcm9qZWN0LmRlcGxveWVkfT57cHJvamVjdC5kZXBsb3llZH08L2E+PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5SZXBvOiA8YSBocmVmPXtwcm9qZWN0LnJlcG99Pntwcm9qZWN0LnJlcG99PC9hPjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPSBcImJhY2tUb1RvcFwiIGhyZWY9XCIjaG9tZVBhZ2VcIiBhbHQ9XCJiYWNrIHRvIHRvcFwiPkJhY2sgdG8gSG9tZXBhZ2U8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbGlkZUNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgPENhcm91c2VsPlxyXG4gICAgICAgICAgICAgICAgICAgIHtbLi4uZGF0YV0ubWFwKHByb2plY3Q9PntcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qga2V5ID0gcHJvamVjdC5uYW1lKzJcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbGlkZUNvbnRlbnRcIiBrZXk9e2tleX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyPntwcm9qZWN0Lm5hbWV9PC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3Byb2plY3QuaW1nUGF0aH0gY2xhc3NOYW1lPVwic2xpZGVJbWdcIiBhbHQ9XCJwcm9qZWN0IGltYWdlXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRDb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPntwcm9qZWN0LmRlc2NyaXB0aW9ufTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlRlY2hub2xvZ2llczoge3Byb2plY3QudGVjaG5vbG9naWVzfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkRlcGxveWVkOiA8YSBocmVmPXtwcm9qZWN0LmRlcGxveWVkfT57cHJvamVjdC5kZXBsb3llZH08L2E+PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+UmVwbzogPGEgaHJlZj17cHJvamVjdC5yZXBvfT57cHJvamVjdC5yZXBvfTwvYT48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgIDwvQ2Fyb3VzZWw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICBcclxuXHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdHMiXSwic291cmNlUm9vdCI6IiJ9