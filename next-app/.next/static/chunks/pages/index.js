/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["pages/index"],{

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=D%3A%5Cgithub_folder%5Callinhacks%5Cnext-app%5Cpages%5Cindex.js&page=%2F!":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=D%3A%5Cgithub_folder%5Callinhacks%5Cnext-app%5Cpages%5Cindex.js&page=%2F! ***!
  \*****************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("\n    (window.__NEXT_P = window.__NEXT_P || []).push([\n      \"/\",\n      function () {\n        return __webpack_require__(/*! ./pages/index.js */ \"./pages/index.js\");\n      }\n    ]);\n    if(true) {\n      module.hot.dispose(function () {\n        window.__NEXT_P.push([\"/\"])\n      });\n    }\n  //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWNsaWVudC1wYWdlcy1sb2FkZXIuanM/YWJzb2x1dGVQYWdlUGF0aD1EJTNBJTVDZ2l0aHViX2ZvbGRlciU1Q2FsbGluaGFja3MlNUNuZXh0LWFwcCU1Q3BhZ2VzJTVDaW5kZXguanMmcGFnZT0lMkYhLmpzIiwibWFwcGluZ3MiOiI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLG1CQUFPLENBQUMsMENBQWtCO0FBQ3pDO0FBQ0E7QUFDQSxPQUFPLElBQVU7QUFDakIsTUFBTSxVQUFVO0FBQ2hCO0FBQ0EsT0FBTztBQUNQO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLz85NGE1Il0sInNvdXJjZXNDb250ZW50IjpbIlxuICAgICh3aW5kb3cuX19ORVhUX1AgPSB3aW5kb3cuX19ORVhUX1AgfHwgW10pLnB1c2goW1xuICAgICAgXCIvXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiByZXF1aXJlKFwiLi9wYWdlcy9pbmRleC5qc1wiKTtcbiAgICAgIH1cbiAgICBdKTtcbiAgICBpZihtb2R1bGUuaG90KSB7XG4gICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24gKCkge1xuICAgICAgICB3aW5kb3cuX19ORVhUX1AucHVzaChbXCIvXCJdKVxuICAgICAgfSk7XG4gICAgfVxuICAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=D%3A%5Cgithub_folder%5Callinhacks%5Cnext-app%5Cpages%5Cindex.js&page=%2F!\n"));

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Context_CroudFunding__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Context/CroudFunding */ \"./Context/CroudFunding.js\");\n/* harmony import */ var _Components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Components */ \"./Components/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst index = ()=>{\n    _s();\n    const { titleData , getCampaigns , createCampaign , donate , getUserCampaigns , getDonations  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_Context_CroudFunding__WEBPACK_IMPORTED_MODULE_2__.CrowdFundingContext);\n    const [allcampaign, setAllcampaigns] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [usercampaign, setUsercampaign] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const getCampaignsData = getCampaigns();\n        const userCampaignData = getUserCampaigns();\n        return async ()=>{\n            const allData = await getCampaignsData;\n            const userData = await userCampaignData;\n            setAllcampaigns(allData);\n            setUsercampaign(userData);\n        };\n    }, []);\n    //donate popup model\n    const [openModel, setOpenModel] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [donateCampaign, setDonateCampaign] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    console.log(donateCampaign);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Components__WEBPACK_IMPORTED_MODULE_3__.Hero, {\n                titleData: titleData,\n                createCampaign: createCampaign\n            }, void 0, false, {\n                fileName: \"D:\\\\github_folder\\\\allinhacks\\\\next-app\\\\pages\\\\index.js\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Components__WEBPACK_IMPORTED_MODULE_3__.Card, {\n                title: \"All listed campaign\",\n                allcampaign: allcampaign,\n                setOpenModel: setOpenModel,\n                setDonate: setDonateCampaign\n            }, void 0, false, {\n                fileName: \"D:\\\\github_folder\\\\allinhacks\\\\next-app\\\\pages\\\\index.js\",\n                lineNumber: 42,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Components__WEBPACK_IMPORTED_MODULE_3__.Card, {\n                title: \"Your Campaign(s)\",\n                allcampaign: usercampaign,\n                setOpenModel: setOpenModel,\n                setDonate: setDonateCampaign\n            }, void 0, false, {\n                fileName: \"D:\\\\github_folder\\\\allinhacks\\\\next-app\\\\pages\\\\index.js\",\n                lineNumber: 49,\n                columnNumber: 7\n            }, undefined),\n            openModel && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Components__WEBPACK_IMPORTED_MODULE_3__.PupUp, {\n                setOpenModel: setOpenModel,\n                donate: donateCampaign,\n                getDonations: getDonations,\n                donateFunction: donate\n            }, void 0, false, {\n                fileName: \"D:\\\\github_folder\\\\allinhacks\\\\next-app\\\\pages\\\\index.js\",\n                lineNumber: 58,\n                columnNumber: 11\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(index, \"g7zu+YpqezeWT/KzA11BQ10T7XA=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (index);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBK0Q7QUFFRDtBQUNaO0FBRWxELE1BQU1RLFFBQVEsSUFBTTs7SUFDbEIsTUFBTSxFQUNKQyxVQUFTLEVBQ1RDLGFBQVksRUFDWkMsZUFBYyxFQUNkQyxPQUFNLEVBQ05DLGlCQUFnQixFQUNoQkMsYUFBWSxFQUNiLEdBQUdiLGlEQUFVQSxDQUFDRyxzRUFBbUJBO0lBRWxDLE1BQU0sQ0FBQ1csYUFBYUMsZ0JBQWdCLEdBQUdiLCtDQUFRQTtJQUUvQyxNQUFNLENBQUNjLGNBQWNDLGdCQUFnQixHQUFHZiwrQ0FBUUE7SUFFaERELGdEQUFTQSxDQUFDLElBQU07UUFDZCxNQUFNaUIsbUJBQW1CVDtRQUN6QixNQUFNVSxtQkFBbUJQO1FBQ3pCLE9BQU8sVUFBWTtZQUNqQixNQUFNUSxVQUFVLE1BQU1GO1lBQ3RCLE1BQU1HLFdBQVcsTUFBTUY7WUFDdkJKLGdCQUFnQks7WUFDaEJILGdCQUFnQkk7UUFDbEI7SUFDRixHQUFHLEVBQUU7SUFFTCxvQkFBb0I7SUFDcEIsTUFBTSxDQUFDQyxXQUFXQyxhQUFhLEdBQUdyQiwrQ0FBUUEsQ0FBQyxLQUFLO0lBQ2hELE1BQU0sQ0FBQ3NCLGdCQUFnQkMsa0JBQWtCLEdBQUd2QiwrQ0FBUUE7SUFDcER3QixRQUFRQyxHQUFHLENBQUNIO0lBQ1oscUJBQ0U7OzBCQUNFLDhEQUFDcEIsNkNBQUlBO2dCQUNISSxXQUFXQTtnQkFDWEUsZ0JBQWdCQTs7Ozs7OzBCQUdsQiw4REFBQ0wsNkNBQUlBO2dCQUNIdUIsT0FBTTtnQkFDTmQsYUFBYUE7Z0JBQ2JTLGNBQWNBO2dCQUNkTSxXQUFXSjs7Ozs7OzBCQUdiLDhEQUFDcEIsNkNBQUlBO2dCQUNIdUIsT0FBTTtnQkFDTmQsYUFBYUU7Z0JBQ2JPLGNBQWNBO2dCQUNkTSxXQUFXSjs7Ozs7O1lBSVhILDJCQUNFLDhEQUFDaEIsOENBQUtBO2dCQUNKaUIsY0FBY0E7Z0JBQ2RaLFFBQVFhO2dCQUNSWCxjQUFjQTtnQkFDZGlCLGdCQUFnQm5COzs7Ozs7OztBQU01QjtHQTlETUo7QUFnRU4sK0RBQWVBLEtBQUtBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW1wb3J0IHsgQ3Jvd2RGdW5kaW5nQ29udGV4dCB9IGZyb20gXCIuLi9Db250ZXh0L0Nyb3VkRnVuZGluZ1wiO1xyXG5pbXBvcnQgeyBIZXJvLCBDYXJkLCBQdXBVcCB9IGZyb20gXCIuLi9Db21wb25lbnRzXCI7XHJcblxyXG5jb25zdCBpbmRleCA9ICgpID0+IHtcclxuICBjb25zdCB7XHJcbiAgICB0aXRsZURhdGEsXHJcbiAgICBnZXRDYW1wYWlnbnMsXHJcbiAgICBjcmVhdGVDYW1wYWlnbixcclxuICAgIGRvbmF0ZSxcclxuICAgIGdldFVzZXJDYW1wYWlnbnMsXHJcbiAgICBnZXREb25hdGlvbnNcclxuICB9ID0gdXNlQ29udGV4dChDcm93ZEZ1bmRpbmdDb250ZXh0KTtcclxuXHJcbiAgY29uc3QgW2FsbGNhbXBhaWduLCBzZXRBbGxjYW1wYWlnbnNdID0gdXNlU3RhdGUoKTtcclxuXHJcbiAgY29uc3QgW3VzZXJjYW1wYWlnbiwgc2V0VXNlcmNhbXBhaWduXSA9IHVzZVN0YXRlKCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBnZXRDYW1wYWlnbnNEYXRhID0gZ2V0Q2FtcGFpZ25zKCk7XHJcbiAgICBjb25zdCB1c2VyQ2FtcGFpZ25EYXRhID0gZ2V0VXNlckNhbXBhaWducygpO1xyXG4gICAgcmV0dXJuIGFzeW5jICgpID0+IHtcclxuICAgICAgY29uc3QgYWxsRGF0YSA9IGF3YWl0IGdldENhbXBhaWduc0RhdGE7XHJcbiAgICAgIGNvbnN0IHVzZXJEYXRhID0gYXdhaXQgdXNlckNhbXBhaWduRGF0YTtcclxuICAgICAgc2V0QWxsY2FtcGFpZ25zKGFsbERhdGEpO1xyXG4gICAgICBzZXRVc2VyY2FtcGFpZ24odXNlckRhdGEpO1xyXG4gICAgfTtcclxuICB9LCBbXSk7XHJcblxyXG4gIC8vZG9uYXRlIHBvcHVwIG1vZGVsXHJcbiAgY29uc3QgW29wZW5Nb2RlbCwgc2V0T3Blbk1vZGVsXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbZG9uYXRlQ2FtcGFpZ24sIHNldERvbmF0ZUNhbXBhaWduXSA9IHVzZVN0YXRlKCk7XHJcbiAgY29uc29sZS5sb2coZG9uYXRlQ2FtcGFpZ24pO1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8SGVyb1xyXG4gICAgICAgIHRpdGxlRGF0YT17dGl0bGVEYXRhfVxyXG4gICAgICAgIGNyZWF0ZUNhbXBhaWduPXtjcmVhdGVDYW1wYWlnbn1cclxuICAgICAgLz5cclxuXHJcbiAgICAgIDxDYXJkXHJcbiAgICAgICAgdGl0bGU9XCJBbGwgbGlzdGVkIGNhbXBhaWduXCJcclxuICAgICAgICBhbGxjYW1wYWlnbj17YWxsY2FtcGFpZ259XHJcbiAgICAgICAgc2V0T3Blbk1vZGVsPXtzZXRPcGVuTW9kZWx9XHJcbiAgICAgICAgc2V0RG9uYXRlPXtzZXREb25hdGVDYW1wYWlnbn1cclxuICAgICAgLz5cclxuXHJcbiAgICAgIDxDYXJkXHJcbiAgICAgICAgdGl0bGU9XCJZb3VyIENhbXBhaWduKHMpXCJcclxuICAgICAgICBhbGxjYW1wYWlnbj17dXNlcmNhbXBhaWdufVxyXG4gICAgICAgIHNldE9wZW5Nb2RlbD17c2V0T3Blbk1vZGVsfVxyXG4gICAgICAgIHNldERvbmF0ZT17c2V0RG9uYXRlQ2FtcGFpZ259XHJcbiAgICAgIC8+XHJcblxyXG4gICAgICB7XHJcbiAgICAgICAgb3Blbk1vZGVsICYmIChcclxuICAgICAgICAgIDxQdXBVcFxyXG4gICAgICAgICAgICBzZXRPcGVuTW9kZWw9e3NldE9wZW5Nb2RlbH1cclxuICAgICAgICAgICAgZG9uYXRlPXtkb25hdGVDYW1wYWlnbn1cclxuICAgICAgICAgICAgZ2V0RG9uYXRpb25zPXtnZXREb25hdGlvbnN9XHJcbiAgICAgICAgICAgIGRvbmF0ZUZ1bmN0aW9uPXtkb25hdGV9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIClcclxuICAgICAgfVxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGluZGV4O1xyXG5cclxuXHJcblxyXG5cclxuXHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUNvbnRleHQiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkNyb3dkRnVuZGluZ0NvbnRleHQiLCJIZXJvIiwiQ2FyZCIsIlB1cFVwIiwiaW5kZXgiLCJ0aXRsZURhdGEiLCJnZXRDYW1wYWlnbnMiLCJjcmVhdGVDYW1wYWlnbiIsImRvbmF0ZSIsImdldFVzZXJDYW1wYWlnbnMiLCJnZXREb25hdGlvbnMiLCJhbGxjYW1wYWlnbiIsInNldEFsbGNhbXBhaWducyIsInVzZXJjYW1wYWlnbiIsInNldFVzZXJjYW1wYWlnbiIsImdldENhbXBhaWduc0RhdGEiLCJ1c2VyQ2FtcGFpZ25EYXRhIiwiYWxsRGF0YSIsInVzZXJEYXRhIiwib3Blbk1vZGVsIiwic2V0T3Blbk1vZGVsIiwiZG9uYXRlQ2FtcGFpZ24iLCJzZXREb25hdGVDYW1wYWlnbiIsImNvbnNvbGUiLCJsb2ciLCJ0aXRsZSIsInNldERvbmF0ZSIsImRvbmF0ZUZ1bmN0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["pages/_app","main"], function() { return __webpack_exec__("./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=D%3A%5Cgithub_folder%5Callinhacks%5Cnext-app%5Cpages%5Cindex.js&page=%2F!"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);