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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config),\n/* harmony export */   \"default\": () => (/* binding */ middleware)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(middleware)/./node_modules/next/dist/esm/api/server.js\");\n/* harmony import */ var next_auth_jwt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/jwt */ \"(middleware)/./node_modules/next-auth/jwt/index.js\");\n/* harmony import */ var next_auth_jwt__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_jwt__WEBPACK_IMPORTED_MODULE_1__);\n\n\n// export { default } from 'next-auth/middleware';\nconst config = {\n    matcher: [\n        \"/dashboard\",\n        \"/signin\",\n        \"/signup\",\n        \"/\"\n    ]\n};\nasync function middleware(request) {\n    const token = await (0,next_auth_jwt__WEBPACK_IMPORTED_MODULE_1__.getToken)({\n        req: request\n    });\n    const url = request.nextUrl;\n    // Redirect to dashboard if the user is already authenticated\n    // and trying to access sign-in, sign-up, or home page\n    if (token && (url.pathname.startsWith(\"/signin\") || url.pathname.startsWith(\"/signup\") || url.pathname === \"/\")) {\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.redirect(new URL(\"/dashboard\", request.url));\n    }\n    if (!token && (url.pathname.startsWith(\"/dashboard\") || url.pathname.startsWith(\"/attendance\") || url.pathname === \"/\")) {\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.redirect(new URL(\"/signin\", request.url));\n    }\n    return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.next();\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vc3JjL21pZGRsZXdhcmUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBd0Q7QUFFZjtBQUN6QyxrREFBa0Q7QUFFM0MsTUFBTUUsU0FBUztJQUNsQkMsU0FBUztRQUFDO1FBQWM7UUFBVztRQUFXO0tBQUk7QUFDdEQsRUFBRTtBQUVhLGVBQWVDLFdBQVdDLE9BQW9CO0lBRXpELE1BQU1DLFFBQVEsTUFBTUwsdURBQVFBLENBQUM7UUFBRU0sS0FBS0Y7SUFBUTtJQUM1QyxNQUFNRyxNQUFNSCxRQUFRSSxPQUFPO0lBRTNCLDZEQUE2RDtJQUM3RCxzREFBc0Q7SUFDdEQsSUFDSUgsU0FDQ0UsQ0FBQUEsSUFBSUUsUUFBUSxDQUFDQyxVQUFVLENBQUMsY0FDckJILElBQUlFLFFBQVEsQ0FBQ0MsVUFBVSxDQUFDLGNBQ3hCSCxJQUFJRSxRQUFRLEtBQUssR0FBRSxHQUN6QjtRQUNFLE9BQU9WLHFEQUFZQSxDQUFDWSxRQUFRLENBQUMsSUFBSUMsSUFBSSxjQUFjUixRQUFRRyxHQUFHO0lBQ2xFO0lBRUEsSUFDSSxDQUFDRixTQUNBRSxDQUFBQSxJQUFJRSxRQUFRLENBQUNDLFVBQVUsQ0FBQyxpQkFDckJILElBQUlFLFFBQVEsQ0FBQ0MsVUFBVSxDQUFDLGtCQUN4QkgsSUFBSUUsUUFBUSxLQUFLLEdBQUUsR0FDekI7UUFDRSxPQUFPVixxREFBWUEsQ0FBQ1ksUUFBUSxDQUFDLElBQUlDLElBQUksV0FBV1IsUUFBUUcsR0FBRztJQUMvRDtJQUVBLE9BQU9SLHFEQUFZQSxDQUFDYyxJQUFJO0FBQzVCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9taWRkbGV3YXJlLnRzP2QxOTkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dFJlcXVlc3QsIE5leHRSZXNwb25zZSB9IGZyb20gJ25leHQvc2VydmVyJztcclxuaW1wb3J0IHsgYXV0aE9wdGlvbnMgfSBmcm9tICdAL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0vb3B0aW9ucyc7XHJcbmltcG9ydCB7IGdldFRva2VuIH0gZnJvbSAnbmV4dC1hdXRoL2p3dCc7XHJcbi8vIGV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tICduZXh0LWF1dGgvbWlkZGxld2FyZSc7XHJcblxyXG5leHBvcnQgY29uc3QgY29uZmlnID0ge1xyXG4gICAgbWF0Y2hlcjogWycvZGFzaGJvYXJkJywgJy9zaWduaW4nLCAnL3NpZ251cCcsICcvJ10sXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBtaWRkbGV3YXJlKHJlcXVlc3Q6IE5leHRSZXF1ZXN0KSB7XHJcblxyXG4gICAgY29uc3QgdG9rZW4gPSBhd2FpdCBnZXRUb2tlbih7IHJlcTogcmVxdWVzdCB9KTtcclxuICAgIGNvbnN0IHVybCA9IHJlcXVlc3QubmV4dFVybDtcclxuXHJcbiAgICAvLyBSZWRpcmVjdCB0byBkYXNoYm9hcmQgaWYgdGhlIHVzZXIgaXMgYWxyZWFkeSBhdXRoZW50aWNhdGVkXHJcbiAgICAvLyBhbmQgdHJ5aW5nIHRvIGFjY2VzcyBzaWduLWluLCBzaWduLXVwLCBvciBob21lIHBhZ2VcclxuICAgIGlmIChcclxuICAgICAgICB0b2tlbiAmJlxyXG4gICAgICAgICh1cmwucGF0aG5hbWUuc3RhcnRzV2l0aCgnL3NpZ25pbicpIHx8XHJcbiAgICAgICAgICAgIHVybC5wYXRobmFtZS5zdGFydHNXaXRoKCcvc2lnbnVwJykgfHxcclxuICAgICAgICAgICAgdXJsLnBhdGhuYW1lID09PSAnLycpXHJcbiAgICApIHtcclxuICAgICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLnJlZGlyZWN0KG5ldyBVUkwoJy9kYXNoYm9hcmQnLCByZXF1ZXN0LnVybCkpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChcclxuICAgICAgICAhdG9rZW4gJiZcclxuICAgICAgICAodXJsLnBhdGhuYW1lLnN0YXJ0c1dpdGgoJy9kYXNoYm9hcmQnKSB8fFxyXG4gICAgICAgICAgICB1cmwucGF0aG5hbWUuc3RhcnRzV2l0aCgnL2F0dGVuZGFuY2UnKSB8fFxyXG4gICAgICAgICAgICB1cmwucGF0aG5hbWUgPT09ICcvJylcclxuICAgICkge1xyXG4gICAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UucmVkaXJlY3QobmV3IFVSTCgnL3NpZ25pbicsIHJlcXVlc3QudXJsKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5uZXh0KCk7XHJcbn0iXSwibmFtZXMiOlsiTmV4dFJlc3BvbnNlIiwiZ2V0VG9rZW4iLCJjb25maWciLCJtYXRjaGVyIiwibWlkZGxld2FyZSIsInJlcXVlc3QiLCJ0b2tlbiIsInJlcSIsInVybCIsIm5leHRVcmwiLCJwYXRobmFtZSIsInN0YXJ0c1dpdGgiLCJyZWRpcmVjdCIsIlVSTCIsIm5leHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(middleware)/./src/middleware.ts\n");

/***/ })

});