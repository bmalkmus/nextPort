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
/* harmony import */ var react_responsive_carousel_lib_styles_carousel_min_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-responsive-carousel/lib/styles/carousel.min.css */ "./node_modules/react-responsive-carousel/lib/styles/carousel.min.css");
/* harmony import */ var react_responsive_carousel_lib_styles_carousel_min_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_responsive_carousel_lib_styles_carousel_min_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_responsive_carousel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-responsive-carousel */ "./node_modules/react-responsive-carousel/lib/js/index.js");
/* harmony import */ var react_responsive_carousel__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_responsive_carousel__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Projects_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Projects.module.css */ "./components/Projects/Projects.module.css");
/* harmony import */ var _Projects_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_Projects_module_css__WEBPACK_IMPORTED_MODULE_5__);


var _jsxFileName = "C:\\Users\\bmalk\\nextPort\\components\\Projects\\index.js";





function Projects(_ref) {
  var _this = this;

  var projects = _ref.projects;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
    className: _Projects_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.cardsContainer,
    children: [Object(C_Users_bmalk_nextPort_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(projects).map(function (project) {
      var keyName = project.name + 1;
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
        className: _Projects_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.mobileCards,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h3", {
          children: project.name
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 25
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("img", {
          alt: "Project image",
          src: project.imgPath
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 25
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
          className: _Projects_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.cardInfo,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
            children: project.description
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 18,
            columnNumber: 29
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
            children: ["Technologies: ", project.technologies]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 19,
            columnNumber: 29
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
            children: ["Deployed: ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("a", {
              className: _Projects_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.externalLinks,
              target: "_blank",
              rel: "noopener noreferrer",
              href: project.deployed,
              children: project.deployed
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 20,
              columnNumber: 42
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 20,
            columnNumber: 29
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
            children: ["Repo: ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("a", {
              className: _Projects_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.externalLinks,
              target: "_blank",
              rel: "noopener noreferrer",
              href: project.repo,
              children: project.repo
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 21,
              columnNumber: 38
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 21,
            columnNumber: 29
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 25
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 25
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("a", {
          className: _Projects_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.backToTop,
          href: "#homePage",
          alt: "back to top",
          children: "Back to Homepage"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 25
        }, _this)]
      }, keyName, true, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 21
      }, _this);
    }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: "slideContainer",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react_responsive_carousel__WEBPACK_IMPORTED_MODULE_4__["Carousel"], {
        children: Object(C_Users_bmalk_nextPort_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(projects).map(function (project) {
          var key = project.name + 2;
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
            className: _Projects_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.slideContent,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h2", {
              children: project.name
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 35,
              columnNumber: 33
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("img", {
              src: project.imgPath,
              className: _Projects_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.slideImg,
              alt: "project image"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 36,
              columnNumber: 37
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
              className: _Projects_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.contentContainer,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
                children: project.description
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 38,
                columnNumber: 41
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
                children: ["Technologies: ", project.technologies]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 39,
                columnNumber: 41
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
                children: ["Deployed: ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("a", {
                  className: _Projects_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.externalLinks,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  href: project.deployed,
                  children: project.deployed
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 40,
                  columnNumber: 54
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 40,
                columnNumber: 41
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
                children: ["Repo: ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("a", {
                  className: _Projects_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.externalLinks,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  href: project.repo,
                  children: project.repo
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 41,
                  columnNumber: 50
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 41,
                columnNumber: 41
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 37,
              columnNumber: 37
            }, _this)]
          }, key, true, {
            fileName: _jsxFileName,
            lineNumber: 34,
            columnNumber: 29
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 9
  }, this);
}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9qZWN0cy9pbmRleC5qcyJdLCJuYW1lcyI6WyJQcm9qZWN0cyIsInByb2plY3RzIiwic3R5bGVzIiwiY2FyZHNDb250YWluZXIiLCJtYXAiLCJwcm9qZWN0Iiwia2V5TmFtZSIsIm5hbWUiLCJtb2JpbGVDYXJkcyIsImltZ1BhdGgiLCJjYXJkSW5mbyIsImRlc2NyaXB0aW9uIiwidGVjaG5vbG9naWVzIiwiZXh0ZXJuYWxMaW5rcyIsImRlcGxveWVkIiwicmVwbyIsImJhY2tUb1RvcCIsImtleSIsInNsaWRlQ29udGVudCIsInNsaWRlSW1nIiwiY29udGVudENvbnRhaW5lciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUdBLFNBQVNBLFFBQVQsT0FBNkI7QUFBQTs7QUFBQSxNQUFWQyxRQUFVLFFBQVZBLFFBQVU7QUFFekIsc0JBQ0k7QUFBSyxhQUFTLEVBQUVDLDJEQUFNLENBQUNDLGNBQXZCO0FBQUEsZUFDSyxnSUFBSUYsUUFBSixFQUFjRyxHQUFkLENBQWtCLFVBQUFDLE9BQU8sRUFBSTtBQUMxQixVQUFNQyxPQUFPLEdBQUdELE9BQU8sQ0FBQ0UsSUFBUixHQUFlLENBQS9CO0FBQ0EsMEJBQ0k7QUFBbUIsaUJBQVMsRUFBRUwsMkRBQU0sQ0FBQ00sV0FBckM7QUFBQSxnQ0FDSTtBQUFBLG9CQUFLSCxPQUFPLENBQUNFO0FBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESixlQUVJO0FBQUssYUFBRyxFQUFHLGVBQVg7QUFBMkIsYUFBRyxFQUFFRixPQUFPLENBQUNJO0FBQXhDO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkosZUFHSTtBQUFLLG1CQUFTLEVBQUVQLDJEQUFNLENBQUNRLFFBQXZCO0FBQUEsa0NBQ0k7QUFBQSxzQkFBSUwsT0FBTyxDQUFDTTtBQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREosZUFFSTtBQUFBLHlDQUFrQk4sT0FBTyxDQUFDTyxZQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkosZUFHSTtBQUFBLGtEQUFhO0FBQUcsdUJBQVMsRUFBRVYsMkRBQU0sQ0FBQ1csYUFBckI7QUFBb0Msb0JBQU0sRUFBQyxRQUEzQztBQUFvRCxpQkFBRyxFQUFDLHFCQUF4RDtBQUE4RSxrQkFBSSxFQUFFUixPQUFPLENBQUNTLFFBQTVGO0FBQUEsd0JBQXVHVCxPQUFPLENBQUNTO0FBQS9HO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUhKLGVBSUk7QUFBQSw4Q0FBUztBQUFHLHVCQUFTLEVBQUVaLDJEQUFNLENBQUNXLGFBQXJCO0FBQW9DLG9CQUFNLEVBQUMsUUFBM0M7QUFBb0QsaUJBQUcsRUFBQyxxQkFBeEQ7QUFBOEUsa0JBQUksRUFBRVIsT0FBTyxDQUFDVSxJQUE1RjtBQUFBLHdCQUFtR1YsT0FBTyxDQUFDVTtBQUEzRztBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFKSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSEosZUFTSTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVRKLGVBVUk7QUFBRyxtQkFBUyxFQUFFYiwyREFBTSxDQUFDYyxTQUFyQjtBQUFnQyxjQUFJLEVBQUMsV0FBckM7QUFBaUQsYUFBRyxFQUFDLGFBQXJEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVZKO0FBQUEsU0FBVVYsT0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREo7QUFlSCxLQWpCQSxDQURMLGVBbUJJO0FBQUssZUFBUyxFQUFDLGdCQUFmO0FBQUEsNkJBQ0kscUVBQUMsa0VBQUQ7QUFBQSxrQkFDSyxnSUFBSUwsUUFBSixFQUFjRyxHQUFkLENBQWtCLFVBQUFDLE9BQU8sRUFBRTtBQUN4QixjQUFNWSxHQUFHLEdBQUdaLE9BQU8sQ0FBQ0UsSUFBUixHQUFhLENBQXpCO0FBQ0EsOEJBQ0k7QUFBSyxxQkFBUyxFQUFFTCwyREFBTSxDQUFDZ0IsWUFBdkI7QUFBQSxvQ0FDSTtBQUFBLHdCQUFLYixPQUFPLENBQUNFO0FBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFESixlQUVRO0FBQUssaUJBQUcsRUFBRUYsT0FBTyxDQUFDSSxPQUFsQjtBQUEyQix1QkFBUyxFQUFFUCwyREFBTSxDQUFDaUIsUUFBN0M7QUFBdUQsaUJBQUcsRUFBQztBQUEzRDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUZSLGVBR1E7QUFBSyx1QkFBUyxFQUFFakIsMkRBQU0sQ0FBQ2tCLGdCQUF2QjtBQUFBLHNDQUNJO0FBQUEsMEJBQUlmLE9BQU8sQ0FBQ007QUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURKLGVBRUk7QUFBQSw2Q0FBa0JOLE9BQU8sQ0FBQ08sWUFBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUZKLGVBR0k7QUFBQSxzREFBYTtBQUFHLDJCQUFTLEVBQUVWLDJEQUFNLENBQUNXLGFBQXJCO0FBQW9DLHdCQUFNLEVBQUMsUUFBM0M7QUFBb0QscUJBQUcsRUFBQyxxQkFBeEQ7QUFBOEUsc0JBQUksRUFBRVIsT0FBTyxDQUFDUyxRQUE1RjtBQUFBLDRCQUF1R1QsT0FBTyxDQUFDUztBQUEvRztBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFISixlQUlJO0FBQUEsa0RBQVM7QUFBRywyQkFBUyxFQUFFWiwyREFBTSxDQUFDVyxhQUFyQjtBQUFvQyx3QkFBTSxFQUFDLFFBQTNDO0FBQW9ELHFCQUFHLEVBQUMscUJBQXhEO0FBQThFLHNCQUFJLEVBQUVSLE9BQU8sQ0FBQ1UsSUFBNUY7QUFBQSw0QkFBbUdWLE9BQU8sQ0FBQ1U7QUFBM0c7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFBVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBSko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUhSO0FBQUEsYUFBMENFLEdBQTFDO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREo7QUFZSCxTQWRBO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFuQko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUE0Q0g7O0tBOUNRakIsUTtBQW1ETUEsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMjRkYzM4NWI3NGRmMzg1N2NjMDcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBcInJlYWN0LXJlc3BvbnNpdmUtY2Fyb3VzZWwvbGliL3N0eWxlcy9jYXJvdXNlbC5taW4uY3NzXCI7XHJcbmltcG9ydCB7IENhcm91c2VsIH0gZnJvbSAncmVhY3QtcmVzcG9uc2l2ZS1jYXJvdXNlbCc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vUHJvamVjdHMubW9kdWxlLmNzc1wiO1xyXG5cclxuXHJcbmZ1bmN0aW9uIFByb2plY3RzKHtwcm9qZWN0c30pe1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jYXJkc0NvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgIHtbLi4ucHJvamVjdHNdLm1hcChwcm9qZWN0ID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGtleU5hbWUgPSBwcm9qZWN0Lm5hbWUgKyAxXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtrZXlOYW1lfSBjbGFzc05hbWU9e3N0eWxlcy5tb2JpbGVDYXJkc30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMz57cHJvamVjdC5uYW1lfTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgYWx0ID0gXCJQcm9qZWN0IGltYWdlXCIgc3JjPXtwcm9qZWN0LmltZ1BhdGh9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jYXJkSW5mb30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57cHJvamVjdC5kZXNjcmlwdGlvbn08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5UZWNobm9sb2dpZXM6IHtwcm9qZWN0LnRlY2hub2xvZ2llc308L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5EZXBsb3llZDogPGEgY2xhc3NOYW1lPXtzdHlsZXMuZXh0ZXJuYWxMaW5rc30gdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiIGhyZWY9e3Byb2plY3QuZGVwbG95ZWR9Pntwcm9qZWN0LmRlcGxveWVkfTwvYT48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5SZXBvOiA8YSBjbGFzc05hbWU9e3N0eWxlcy5leHRlcm5hbExpbmtzfSB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCIgaHJlZj17cHJvamVjdC5yZXBvfT57cHJvamVjdC5yZXBvfTwvYT48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e3N0eWxlcy5iYWNrVG9Ub3B9IGhyZWY9XCIjaG9tZVBhZ2VcIiBhbHQ9XCJiYWNrIHRvIHRvcFwiPkJhY2sgdG8gSG9tZXBhZ2U8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbGlkZUNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgPENhcm91c2VsPlxyXG4gICAgICAgICAgICAgICAgICAgIHtbLi4ucHJvamVjdHNdLm1hcChwcm9qZWN0PT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGtleSA9IHByb2plY3QubmFtZSsyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2xpZGVDb250ZW50fSBrZXk9e2tleX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyPntwcm9qZWN0Lm5hbWV9PC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3Byb2plY3QuaW1nUGF0aH0gY2xhc3NOYW1lPXtzdHlsZXMuc2xpZGVJbWd9IGFsdD1cInByb2plY3QgaW1hZ2VcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGVudENvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57cHJvamVjdC5kZXNjcmlwdGlvbn08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5UZWNobm9sb2dpZXM6IHtwcm9qZWN0LnRlY2hub2xvZ2llc308L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5EZXBsb3llZDogPGEgY2xhc3NOYW1lPXtzdHlsZXMuZXh0ZXJuYWxMaW5rc30gdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiIGhyZWY9e3Byb2plY3QuZGVwbG95ZWR9Pntwcm9qZWN0LmRlcGxveWVkfTwvYT48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5SZXBvOiA8YSBjbGFzc05hbWU9e3N0eWxlcy5leHRlcm5hbExpbmtzfSB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCIgaHJlZj17cHJvamVjdC5yZXBvfT57cHJvamVjdC5yZXBvfTwvYT48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgIDwvQ2Fyb3VzZWw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICBcclxuXHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0cyJdLCJzb3VyY2VSb290IjoiIn0=