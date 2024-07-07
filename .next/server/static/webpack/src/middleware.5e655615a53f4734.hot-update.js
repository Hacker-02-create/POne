"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("src/middleware",{

/***/ "(middleware)/./src/middleware.ts":
/*!***************************!*\
  !*** ./src/middleware.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config),\n/* harmony export */   \"default\": () => (/* binding */ middleware)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(middleware)/./node_modules/next/dist/esm/api/server.js\");\n\n// export { default } from 'next-auth/middleware';\nconst config = {\n    matcher: [\n        \"/dashboard\",\n        \"/signin\",\n        \"/signup\",\n        \"/\"\n    ]\n};\nasync function middleware(request) {\n    const url = request.nextUrl;\n    if (url.pathname === \"/\") return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.redirect(new URL(\"/signin\", url));\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vc3JjL21pZGRsZXdhcmUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQXdEO0FBR3hELGtEQUFrRDtBQUUzQyxNQUFNQyxTQUFTO0lBQ2xCQyxTQUFTO1FBQUM7UUFBYztRQUFXO1FBQVc7S0FBSTtBQUN0RCxFQUFFO0FBRWEsZUFBZUMsV0FBV0MsT0FBb0I7SUFFekQsTUFBTUMsTUFBSUQsUUFBUUUsT0FBTztJQUN6QixJQUFHRCxJQUFJRSxRQUFRLEtBQUcsS0FBSSxPQUFPUCxxREFBWUEsQ0FBQ1EsUUFBUSxDQUFDLElBQUlDLElBQUksV0FBVUo7QUFDekUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL21pZGRsZXdhcmUudHM/ZDE5OSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0UmVxdWVzdCwgTmV4dFJlc3BvbnNlIH0gZnJvbSAnbmV4dC9zZXJ2ZXInO1xyXG5pbXBvcnQgeyBhdXRoT3B0aW9ucyB9IGZyb20gJ0AvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS9vcHRpb25zJztcclxuaW1wb3J0IHsgZ2V0VG9rZW4gfSBmcm9tICduZXh0LWF1dGgvand0JztcclxuLy8gZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gJ25leHQtYXV0aC9taWRkbGV3YXJlJztcclxuXHJcbmV4cG9ydCBjb25zdCBjb25maWcgPSB7XHJcbiAgICBtYXRjaGVyOiBbJy9kYXNoYm9hcmQnLCAnL3NpZ25pbicsICcvc2lnbnVwJywgJy8nXSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIG1pZGRsZXdhcmUocmVxdWVzdDogTmV4dFJlcXVlc3QpIHtcclxuXHJcbiAgICBjb25zdCB1cmw9cmVxdWVzdC5uZXh0VXJsO1xyXG4gICAgaWYodXJsLnBhdGhuYW1lPT09XCIvXCIpcmV0dXJuIE5leHRSZXNwb25zZS5yZWRpcmVjdChuZXcgVVJMKFwiL3NpZ25pblwiLHVybCkpXHJcbn0iXSwibmFtZXMiOlsiTmV4dFJlc3BvbnNlIiwiY29uZmlnIiwibWF0Y2hlciIsIm1pZGRsZXdhcmUiLCJyZXF1ZXN0IiwidXJsIiwibmV4dFVybCIsInBhdGhuYW1lIiwicmVkaXJlY3QiLCJVUkwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(middleware)/./src/middleware.ts\n");

/***/ })

});