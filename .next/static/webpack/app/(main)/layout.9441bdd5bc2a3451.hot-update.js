"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/(main)/layout",{

/***/ "(app-pages-browser)/./src/app/(main)/layout.tsx":
/*!***********************************!*\
  !*** ./src/app/(main)/layout.tsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ A; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_bottomNav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/bottomNav */ \"(app-pages-browser)/./src/app/components/bottomNav.tsx\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/react */ \"(app-pages-browser)/./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction A(param) {\n    let { children } = param;\n    _s();\n    const { data: session } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.useSession)();\n    const Router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    if (!session) Router.push(\"/signin\");\n    else return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-zinc-800 w-full h-full\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                className: \"text-white text-3xl font-medium relative top-4 left-4 \",\n                children: \"PortalOne\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Nikunj Gupta\\\\OneDrive\\\\Documents\\\\portalone\\\\src\\\\app\\\\(main)\\\\layout.tsx\",\n                lineNumber: 13,\n                columnNumber: 17\n            }, this),\n            children,\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mt-8\",\n                children: [\n                    \" \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_bottomNav__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Nikunj Gupta\\\\OneDrive\\\\Documents\\\\portalone\\\\src\\\\app\\\\(main)\\\\layout.tsx\",\n                        lineNumber: 15,\n                        columnNumber: 39\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Nikunj Gupta\\\\OneDrive\\\\Documents\\\\portalone\\\\src\\\\app\\\\(main)\\\\layout.tsx\",\n                lineNumber: 15,\n                columnNumber: 16\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Nikunj Gupta\\\\OneDrive\\\\Documents\\\\portalone\\\\src\\\\app\\\\(main)\\\\layout.tsx\",\n        lineNumber: 12,\n        columnNumber: 13\n    }, this);\n}\n_s(A, \"/fB4niIhhFTgX4A7R+d9drKCVds=\", false, function() {\n    return [\n        next_auth_react__WEBPACK_IMPORTED_MODULE_2__.useSession,\n        next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = A;\nvar _c;\n$RefreshReg$(_c, \"A\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvKG1haW4pL2xheW91dC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFDa0Q7QUFDTDtBQUNEO0FBRTdCLFNBQVNHLEVBQUUsS0FBcUM7UUFBckMsRUFBQ0MsUUFBUSxFQUE0QixHQUFyQzs7SUFDdEIsTUFBTSxFQUFDQyxNQUFLQyxPQUFPLEVBQUMsR0FBQ0wsMkRBQVVBO0lBQy9CLE1BQU1NLFNBQU9MLDBEQUFTQTtJQUMxQixJQUFHLENBQUNJLFNBQVFDLE9BQU9DLElBQUksQ0FBQztTQUVoQixxQkFDSSw4REFBQ0M7UUFBSUMsV0FBVTs7MEJBQ1gsOERBQUNDO2dCQUFLRCxXQUFVOzBCQUF5RDs7Ozs7O1lBQ3hFTjswQkFDRiw4REFBQ0s7Z0JBQUlDLFdBQVU7O29CQUFPO2tDQUFDLDhEQUFDViw2REFBWUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR25EO0dBWndCRzs7UUFDQ0YsdURBQVVBO1FBQ2xCQyxzREFBU0E7OztLQUZGQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwLyhtYWluKS9sYXlvdXQudHN4P2NjZWEiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcclxuaW1wb3J0IEJvdHRvbU5hdkJhciBmcm9tIFwiQC9jb21wb25lbnRzL2JvdHRvbU5hdlwiO1xyXG5pbXBvcnQgeyB1c2VTZXNzaW9uIH0gZnJvbSBcIm5leHQtYXV0aC9yZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9uYXZpZ2F0aW9uXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBKHtjaGlsZHJlbn06e2NoaWxkcmVuOlJlYWN0LlJlYWN0Tm9kZX0pe1xyXG4gICAgY29uc3Qge2RhdGE6c2Vzc2lvbn09dXNlU2Vzc2lvbigpXHJcbiAgICBjb25zdCBSb3V0ZXI9dXNlUm91dGVyKCkgICAgIFxyXG5pZighc2Vzc2lvbilSb3V0ZXIucHVzaChcIi9zaWduaW5cIilcclxuICAgIGVsc2VcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXppbmMtODAwIHctZnVsbCBoLWZ1bGxcIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0ndGV4dC13aGl0ZSB0ZXh0LTN4bCBmb250LW1lZGl1bSByZWxhdGl2ZSB0b3AtNCBsZWZ0LTQgJz5Qb3J0YWxPbmU8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtOFwiPiA8Qm90dG9tTmF2QmFyLz48L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG59Il0sIm5hbWVzIjpbIkJvdHRvbU5hdkJhciIsInVzZVNlc3Npb24iLCJ1c2VSb3V0ZXIiLCJBIiwiY2hpbGRyZW4iLCJkYXRhIiwic2Vzc2lvbiIsIlJvdXRlciIsInB1c2giLCJkaXYiLCJjbGFzc05hbWUiLCJzcGFuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/(main)/layout.tsx\n"));

/***/ })

});