"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Blog; }
/* harmony export */ });
/* harmony import */ var _components_MyLayout_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/MyLayout.js */ "./components/MyLayout.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\SynologyDrive\\Hanxbeen\\nextBlog\\Blog\\BeenBlog\\pages\\index.js",
    _this = undefined;

// import Link from "next/link";
// // import Header from "../components/Header";
// import Layout from "../components/MyLayout";
// const Index = () => (
//   <div>
//     {/* <Link href="/about">
//       <a>About Page</a>
//     </Link> */}
//     {/* <Header /> */}
//     <Layout>
//       <p>Hello Next.js</p>
//     </Layout>
//   </div>
// );
// export default Index;




var PostLink = function PostLink(props) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("li", {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
      href: "/p/[id]",
      as: "/p/".concat(props.id),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
        children: [props.id, "d"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 7
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 5
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 3
  }, _this);
};

_c = PostLink;
function Blog() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_components_MyLayout_js__WEBPACK_IMPORTED_MODULE_0__.default, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h1", {
      children: "My Blog"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("ul", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(PostLink, {
        id: "Hello Next.js"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(PostLink, {
        id: "Learn Next.js is awesome"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(PostLink, {
        id: "Deploy apps with Zeit"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 33,
    columnNumber: 5
  }, this);
}
_c2 = Blog;

var _c, _c2;

$RefreshReg$(_c, "PostLink");
$RefreshReg$(_c2, "Blog");

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
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
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


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZDI3ZDRmYTI1OTYzZjdhNjAwYjkuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7O0FBRUEsSUFBTUUsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQ0MsS0FBRDtBQUFBLHNCQUNmO0FBQUEsMkJBSUUsOERBQUMsa0RBQUQ7QUFBTSxVQUFJLEVBQUMsU0FBWDtBQUFxQixRQUFFLGVBQVFBLEtBQUssQ0FBQ0MsRUFBZCxDQUF2QjtBQUFBLDZCQUNFO0FBQUEsbUJBQUlELEtBQUssQ0FBQ0MsRUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURlO0FBQUEsQ0FBakI7O0tBQU1GO0FBV1MsU0FBU0csSUFBVCxHQUFnQjtBQUM3QixzQkFDRSw4REFBQyw0REFBRDtBQUFBLDRCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFFRTtBQUFBLDhCQUNFLDhEQUFDLFFBQUQ7QUFBVSxVQUFFLEVBQUM7QUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFFRSw4REFBQyxRQUFEO0FBQVUsVUFBRSxFQUFDO0FBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGLGVBR0UsOERBQUMsUUFBRDtBQUFVLFVBQUUsRUFBQztBQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQVVEO01BWHVCQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbi8vIC8vIGltcG9ydCBIZWFkZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvSGVhZGVyXCI7XHJcbi8vIGltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvTXlMYXlvdXRcIjtcclxuLy8gY29uc3QgSW5kZXggPSAoKSA9PiAoXHJcbi8vICAgPGRpdj5cclxuLy8gICAgIHsvKiA8TGluayBocmVmPVwiL2Fib3V0XCI+XHJcbi8vICAgICAgIDxhPkFib3V0IFBhZ2U8L2E+XHJcbi8vICAgICA8L0xpbms+ICovfVxyXG4vLyAgICAgey8qIDxIZWFkZXIgLz4gKi99XHJcbi8vICAgICA8TGF5b3V0PlxyXG4vLyAgICAgICA8cD5IZWxsbyBOZXh0LmpzPC9wPlxyXG4vLyAgICAgPC9MYXlvdXQ+XHJcbi8vICAgPC9kaXY+XHJcbi8vICk7XHJcblxyXG4vLyBleHBvcnQgZGVmYXVsdCBJbmRleDtcclxuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9NeUxheW91dC5qc1wiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcblxyXG5jb25zdCBQb3N0TGluayA9IChwcm9wcykgPT4gKFxyXG4gIDxsaT5cclxuICAgIHsvKiA8TGluayBocmVmPXtgL3Bvc3Q/dGl0bGU9JHtwcm9wcy50aXRsZX1gfT5cclxuICAgICAgPGE+e3Byb3BzLnRpdGxlfTwvYT5cclxuICAgIDwvTGluaz4gKi99XHJcbiAgICA8TGluayBocmVmPVwiL3AvW2lkXVwiIGFzPXtgL3AvJHtwcm9wcy5pZH1gfT5cclxuICAgICAgPGE+e3Byb3BzLmlkfWQ8L2E+XHJcbiAgICA8L0xpbms+XHJcbiAgPC9saT5cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJsb2coKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxMYXlvdXQ+XHJcbiAgICAgIDxoMT5NeSBCbG9nPC9oMT5cclxuICAgICAgPHVsPlxyXG4gICAgICAgIDxQb3N0TGluayBpZD1cIkhlbGxvIE5leHQuanNcIiAvPlxyXG4gICAgICAgIDxQb3N0TGluayBpZD1cIkxlYXJuIE5leHQuanMgaXMgYXdlc29tZVwiIC8+XHJcbiAgICAgICAgPFBvc3RMaW5rIGlkPVwiRGVwbG95IGFwcHMgd2l0aCBaZWl0XCIgLz5cclxuICAgICAgPC91bD5cclxuICAgIDwvTGF5b3V0PlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbIkxheW91dCIsIkxpbmsiLCJQb3N0TGluayIsInByb3BzIiwiaWQiLCJCbG9nIl0sInNvdXJjZVJvb3QiOiIifQ==