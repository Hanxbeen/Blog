"use strict";
self["webpackHotUpdate_N_E"]("pages/p/[id]",{

/***/ "./pages/p/[id].js":
/*!*************************!*\
  !*** ./pages/p/[id].js ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_SynologyDrive_Hanxbeen_nextBlog_Blog_BeenBlog_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var C_SynologyDrive_Hanxbeen_nextBlog_Blog_BeenBlog_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_SynologyDrive_Hanxbeen_nextBlog_Blog_BeenBlog_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_SynologyDrive_Hanxbeen_nextBlog_Blog_BeenBlog_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_MyLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/MyLayout */ "./components/MyLayout.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/next/dist/build/polyfills/fetch/index.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\SynologyDrive\\Hanxbeen\\nextBlog\\Blog\\BeenBlog\\pages\\p\\[id].js",
    _this = undefined;


// 동적 라우팅
// import { useRouter } from "next/router";
// import Layout from "../../components/MyLayout";
// export default function Post() {
//   const router = useRouter();
//   return (
//     <Layout>
//       <h1>{router.query.id}</h1>
//       <p>This is the blog post content.</p>
//     </Layout>
//   );
// }




var Post = function Post(props) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_components_MyLayout__WEBPACK_IMPORTED_MODULE_2__.default, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("h1", {
      children: props.show.name
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 5
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("p", {
      children: props.show.summary.replace(/<[/]?p>/g, '')
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 5
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("img", {
      src: props.show.image.medium
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 5
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 3
  }, _this);
};

_c = Post;

Post.getInitialProps = /*#__PURE__*/function () {
  var _ref = (0,C_SynologyDrive_Hanxbeen_nextBlog_Blog_BeenBlog_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/C_SynologyDrive_Hanxbeen_nextBlog_Blog_BeenBlog_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(context) {
    var id, res, show;
    return C_SynologyDrive_Hanxbeen_nextBlog_Blog_BeenBlog_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            id = context.query.id;
            _context.next = 3;
            return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default()("https://api.tvmaze.com/shows/".concat(id));

          case 3:
            res = _context.sent;
            _context.next = 6;
            return res.json();

          case 6:
            show = _context.sent;
            console.log("Fetched show: ".concat(show.name));
            console.log("img link: ".concat(show.image));
            return _context.abrupt("return", {
              show: show
            });

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (Post);

var _c;

$RefreshReg$(_c, "Post");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcC9baWRdLjcwMmZjOTJlNTI4Y2JhMjExZjJlLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBLElBQU1FLElBQUksR0FBRyxTQUFQQSxJQUFPLENBQUFDLEtBQUs7QUFBQSxzQkFDaEIsOERBQUMseURBQUQ7QUFBQSw0QkFDRTtBQUFBLGdCQUFLQSxLQUFLLENBQUNDLElBQU4sQ0FBV0M7QUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBRUU7QUFBQSxnQkFBSUYsS0FBSyxDQUFDQyxJQUFOLENBQVdFLE9BQVgsQ0FBbUJDLE9BQW5CLENBQTJCLFVBQTNCLEVBQXVDLEVBQXZDO0FBQUo7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZGLGVBR0U7QUFBSyxTQUFHLEVBQUVKLEtBQUssQ0FBQ0MsSUFBTixDQUFXSSxLQUFYLENBQWlCQztBQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBRGdCO0FBQUEsQ0FBbEI7O0tBQU1QOztBQVFOQSxJQUFJLENBQUNRLGVBQUw7QUFBQSwrU0FBdUIsaUJBQWVDLE9BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ2JDLFlBQUFBLEVBRGEsR0FDTkQsT0FBTyxDQUFDRSxLQURGLENBQ2JELEVBRGE7QUFBQTtBQUFBLG1CQUVIWCx5REFBSyx3Q0FBaUNXLEVBQWpDLEVBRkY7O0FBQUE7QUFFZkUsWUFBQUEsR0FGZTtBQUFBO0FBQUEsbUJBR0ZBLEdBQUcsQ0FBQ0MsSUFBSixFQUhFOztBQUFBO0FBR2ZYLFlBQUFBLElBSGU7QUFLckJZLFlBQUFBLE9BQU8sQ0FBQ0MsR0FBUix5QkFBNkJiLElBQUksQ0FBQ0MsSUFBbEM7QUFDQVcsWUFBQUEsT0FBTyxDQUFDQyxHQUFSLHFCQUF5QmIsSUFBSSxDQUFDSSxLQUE5QjtBQU5xQiw2Q0FRZDtBQUFFSixjQUFBQSxJQUFJLEVBQUpBO0FBQUYsYUFSYzs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUF2Qjs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFXQSwrREFBZUYsSUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9wL1tpZF0uanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8g64+Z7KCBIOudvOyasO2MhVxyXG4vLyBpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuLy8gaW1wb3J0IExheW91dCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9NeUxheW91dFwiO1xyXG5cclxuLy8gZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUG9zdCgpIHtcclxuLy8gICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbi8vICAgcmV0dXJuIChcclxuLy8gICAgIDxMYXlvdXQ+XHJcbi8vICAgICAgIDxoMT57cm91dGVyLnF1ZXJ5LmlkfTwvaDE+XHJcbi8vICAgICAgIDxwPlRoaXMgaXMgdGhlIGJsb2cgcG9zdCBjb250ZW50LjwvcD5cclxuLy8gICAgIDwvTGF5b3V0PlxyXG4vLyAgICk7XHJcbi8vIH1cclxuaW1wb3J0IExheW91dCBmcm9tICcuLi8uLi9jb21wb25lbnRzL015TGF5b3V0J1xyXG5pbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy11bmZldGNoJ1xyXG5cclxuY29uc3QgUG9zdCA9IHByb3BzID0+IChcclxuICA8TGF5b3V0PlxyXG4gICAgPGgxPntwcm9wcy5zaG93Lm5hbWV9PC9oMT5cclxuICAgIDxwPntwcm9wcy5zaG93LnN1bW1hcnkucmVwbGFjZSgvPFsvXT9wPi9nLCAnJyl9PC9wPlxyXG4gICAgPGltZyBzcmM9e3Byb3BzLnNob3cuaW1hZ2UubWVkaXVtfSAvPlxyXG4gIDwvTGF5b3V0PlxyXG4pXHJcblxyXG5Qb3N0LmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIGZ1bmN0aW9uKGNvbnRleHQpIHtcclxuICBjb25zdCB7IGlkIH0gPSBjb250ZXh0LnF1ZXJ5XHJcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLnR2bWF6ZS5jb20vc2hvd3MvJHtpZH1gKVxyXG4gIGNvbnN0IHNob3cgPSBhd2FpdCByZXMuanNvbigpXHJcblxyXG4gIGNvbnNvbGUubG9nKGBGZXRjaGVkIHNob3c6ICR7c2hvdy5uYW1lfWApXHJcbiAgY29uc29sZS5sb2coYGltZyBsaW5rOiAke3Nob3cuaW1hZ2V9YClcclxuXHJcbiAgcmV0dXJuIHsgc2hvdyB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBvc3QiXSwibmFtZXMiOlsiTGF5b3V0IiwiZmV0Y2giLCJQb3N0IiwicHJvcHMiLCJzaG93IiwibmFtZSIsInN1bW1hcnkiLCJyZXBsYWNlIiwiaW1hZ2UiLCJtZWRpdW0iLCJnZXRJbml0aWFsUHJvcHMiLCJjb250ZXh0IiwiaWQiLCJxdWVyeSIsInJlcyIsImpzb24iLCJjb25zb2xlIiwibG9nIl0sInNvdXJjZVJvb3QiOiIifQ==