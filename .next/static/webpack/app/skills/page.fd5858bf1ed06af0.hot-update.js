"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/skills/page",{

/***/ "(app-pages-browser)/./src/components/skills-panel.tsx":
/*!*****************************************!*\
  !*** ./src/components/skills-panel.tsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n/* harmony import */ var _components_scroll_panel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/scroll-panel */ \"(app-pages-browser)/./src/components/scroll-panel.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n // Предполагается, что ScrollPanel уже реализован\nconst SkillsPanel = (param)=>{\n    let { items } = param;\n    _s();\n    const [hoveredId, setHoveredId] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const containerVariants = {\n        initial: {\n            opacity: 0,\n            y: 20\n        },\n        animate: {\n            opacity: 1,\n            y: 0,\n            transition: {\n                when: \"beforeChildren\",\n                staggerChildren: 0.1\n            }\n        }\n    };\n    const itemVariants = {\n        rest: {\n            filter: \"blur(0px)\",\n            scale: 1\n        },\n        hover: {\n            filter: \"blur(4px)\",\n            scale: 0.95\n        }\n    };\n    const subSkillVariants = {\n        rest: {\n            filter: \"blur(4px)\",\n            scale: 0.95\n        },\n        hover: {\n            filter: \"blur(0px)\",\n            scale: 1\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"page-content fixed z-5 top-0 right-0 h-full w-1/2 p-6 sm:p-8 md:p-10 lg:p-14\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_scroll_panel__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {\n                className: \"flex flex-col gap-2\",\n                variants: containerVariants,\n                initial: \"initial\",\n                animate: \"animate\",\n                children: items.map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {\n                        className: \"relative cursor-default\",\n                        onMouseEnter: ()=>setHoveredId(item.id),\n                        onMouseLeave: ()=>setHoveredId(null),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {\n                                className: \"text-3xl text-light-blue font-bold text-center\",\n                                variants: itemVariants,\n                                initial: \"rest\",\n                                animate: hoveredId === item.id ? \"hover\" : \"rest\",\n                                children: item.mainSkill\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Projects\\\\Sites\\\\Portfolio\\\\src\\\\components\\\\skills-panel.tsx\",\n                                lineNumber: 56,\n                                columnNumber: 15\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {\n                                className: \"flex flex-wrap gap-2 justify-center pt-2\",\n                                variants: subSkillVariants,\n                                initial: \"rest\",\n                                animate: hoveredId === item.id ? \"hover\" : \"rest\",\n                                children: item.subSkills.map((subSkill, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"font-semibold px-2.5 py-1 rounded\",\n                                        children: subSkill\n                                    }, index, false, {\n                                        fileName: \"C:\\\\Projects\\\\Sites\\\\Portfolio\\\\src\\\\components\\\\skills-panel.tsx\",\n                                        lineNumber: 71,\n                                        columnNumber: 19\n                                    }, undefined))\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Projects\\\\Sites\\\\Portfolio\\\\src\\\\components\\\\skills-panel.tsx\",\n                                lineNumber: 64,\n                                columnNumber: 15\n                            }, undefined)\n                        ]\n                    }, item.id, true, {\n                        fileName: \"C:\\\\Projects\\\\Sites\\\\Portfolio\\\\src\\\\components\\\\skills-panel.tsx\",\n                        lineNumber: 50,\n                        columnNumber: 13\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"C:\\\\Projects\\\\Sites\\\\Portfolio\\\\src\\\\components\\\\skills-panel.tsx\",\n                lineNumber: 43,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"C:\\\\Projects\\\\Sites\\\\Portfolio\\\\src\\\\components\\\\skills-panel.tsx\",\n            lineNumber: 42,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Projects\\\\Sites\\\\Portfolio\\\\src\\\\components\\\\skills-panel.tsx\",\n        lineNumber: 41,\n        columnNumber: 5\n    }, undefined);\n};\n_s(SkillsPanel, \"W+Gi/GY1c+T76G87axG09SVXkEc=\");\n_c = SkillsPanel;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SkillsPanel);\nvar _c;\n$RefreshReg$(_c, \"SkillsPanel\");\n\n\n;\r\n    // Wrapped in an IIFE to avoid polluting the global scope\r\n    ;\r\n    (function () {\r\n        var _a, _b;\r\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\r\n        // to extract CSS. For backwards compatibility, we need to check we're in a\r\n        // browser context before continuing.\r\n        if (typeof self !== 'undefined' &&\r\n            // AMP / No-JS mode does not inject these helpers:\r\n            '$RefreshHelpers$' in self) {\r\n            // @ts-ignore __webpack_module__ is global\r\n            var currentExports = module.exports;\r\n            // @ts-ignore __webpack_module__ is global\r\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\r\n            // This cannot happen in MainTemplate because the exports mismatch between\r\n            // templating and execution.\r\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\r\n            // A module can be accepted automatically based on its exports, e.g. when\r\n            // it is a Refresh Boundary.\r\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\r\n                // Save the previous exports signature on update so we can compare the boundary\r\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\r\n                module.hot.dispose(function (data) {\r\n                    data.prevSignature =\r\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\r\n                });\r\n                // Unconditionally accept an update to this module, we'll check if it's\r\n                // still a Refresh Boundary later.\r\n                // @ts-ignore importMeta is replaced in the loader\r\n                module.hot.accept();\r\n                // This field is set when the previous version of this module was a\r\n                // Refresh Boundary, letting us know we need to check for invalidation or\r\n                // enqueue an update.\r\n                if (prevSignature !== null) {\r\n                    // A boundary can become ineligible if its exports are incompatible\r\n                    // with the previous exports.\r\n                    //\r\n                    // For example, if you add/remove/change exports, we'll want to\r\n                    // re-execute the importing modules, and force those components to\r\n                    // re-render. Similarly, if you convert a class component to a\r\n                    // function, we want to invalidate the boundary.\r\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\r\n                        module.hot.invalidate();\r\n                    }\r\n                    else {\r\n                        self.$RefreshHelpers$.scheduleUpdate();\r\n                    }\r\n                }\r\n            }\r\n            else {\r\n                // Since we just executed the code for the module, it's possible that the\r\n                // new exports made it ineligible for being a boundary.\r\n                // We only care about the case when we were _previously_ a boundary,\r\n                // because we already accepted this update (accidental side effect).\r\n                var isNoLongerABoundary = prevSignature !== null;\r\n                if (isNoLongerABoundary) {\r\n                    module.hot.invalidate();\r\n                }\r\n            }\r\n        }\r\n    })();\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL3NraWxscy1wYW5lbC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDcUM7QUFDRTtBQUNhLENBQUMsaURBQWlEO0FBUXRHLE1BQU1HLGNBQTBDO1FBQUMsRUFBRUMsS0FBSyxFQUFFOztJQUN4RCxNQUFNLENBQUNDLFdBQVdDLGFBQWEsR0FBR04sK0NBQVFBLENBQWdCO0lBRTFELE1BQU1PLG9CQUFvQjtRQUN4QkMsU0FBUztZQUNQQyxTQUFTO1lBQ1RDLEdBQUc7UUFDTDtRQUNBQyxTQUFTO1lBQ1BGLFNBQVM7WUFDVEMsR0FBRztZQUNIRSxZQUFZO2dCQUNWQyxNQUFNO2dCQUNOQyxpQkFBaUI7WUFDbkI7UUFDRjtJQUNGO0lBRUEsTUFBTUMsZUFBZTtRQUNuQkMsTUFBTTtZQUFFQyxRQUFRO1lBQWFDLE9BQU87UUFBRTtRQUN0Q0MsT0FBTztZQUFFRixRQUFRO1lBQWFDLE9BQU87UUFBSztJQUM1QztJQUVBLE1BQU1FLG1CQUFtQjtRQUN2QkosTUFBTTtZQUFFQyxRQUFRO1lBQWFDLE9BQU87UUFBSztRQUN6Q0MsT0FBTztZQUFFRixRQUFRO1lBQWFDLE9BQU87UUFBQztJQUN4QztJQUVBLHFCQUNFLDhEQUFDRztRQUFJQyxXQUFVO2tCQUNiLDRFQUFDcEIsZ0VBQVdBO3NCQUNWLDRFQUFDRCxpREFBTUEsQ0FBQ29CLEdBQUc7Z0JBQ1RDLFdBQVU7Z0JBQ1ZDLFVBQVVoQjtnQkFDVkMsU0FBUTtnQkFDUkcsU0FBUTswQkFFUFAsTUFBTW9CLEdBQUcsQ0FBQyxDQUFDQyxNQUFNQyxzQkFDaEIsOERBQUN6QixpREFBTUEsQ0FBQ29CLEdBQUc7d0JBRVRDLFdBQVU7d0JBQ1ZLLGNBQWMsSUFBTXJCLGFBQWFtQixLQUFLRyxFQUFFO3dCQUN4Q0MsY0FBYyxJQUFNdkIsYUFBYTs7MENBRWpDLDhEQUFDTCxpREFBTUEsQ0FBQ29CLEdBQUc7Z0NBQ1RDLFdBQVU7Z0NBQ1ZDLFVBQVVSO2dDQUNWUCxTQUFRO2dDQUNSRyxTQUFTTixjQUFjb0IsS0FBS0csRUFBRSxHQUFHLFVBQVU7MENBRTFDSCxLQUFLSyxTQUFTOzs7Ozs7MENBRWpCLDhEQUFDN0IsaURBQU1BLENBQUNvQixHQUFHO2dDQUNUQyxXQUFZO2dDQUNaQyxVQUFVSDtnQ0FDVlosU0FBUTtnQ0FDUkcsU0FBU04sY0FBY29CLEtBQUtHLEVBQUUsR0FBRyxVQUFVOzBDQUUxQ0gsS0FBS00sU0FBUyxDQUFDUCxHQUFHLENBQUMsQ0FBQ1EsVUFBVU4sc0JBQzdCLDhEQUFDTzt3Q0FBaUJYLFdBQVU7a0RBQ3pCVTt1Q0FEUU47Ozs7Ozs7Ozs7O3VCQXBCVkQsS0FBS0csRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUErQjFCO0dBdEVNekI7S0FBQUE7QUF3RU4sK0RBQWVBLFdBQVdBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvc2tpbGxzLXBhbmVsLnRzeD80NThkIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50JztcclxuaW1wb3J0IHsgRkMsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJztcclxuaW1wb3J0IFNjcm9sbFBhbmVsIGZyb20gJ0AvY29tcG9uZW50cy9zY3JvbGwtcGFuZWwnOyAvLyDQn9GA0LXQtNC/0L7Qu9Cw0LPQsNC10YLRgdGPLCDRh9GC0L4gU2Nyb2xsUGFuZWwg0YPQttC1INGA0LXQsNC70LjQt9C+0LLQsNC9XHJcblxyXG5pbnRlcmZhY2UgU2tpbGxJdGVtIHtcclxuICBpZDogbnVtYmVyO1xyXG4gIG1haW5Ta2lsbDogc3RyaW5nO1xyXG4gIHN1YlNraWxsczogc3RyaW5nW107XHJcbn1cclxuXHJcbmNvbnN0IFNraWxsc1BhbmVsOiBGQzx7IGl0ZW1zOiBTa2lsbEl0ZW1bXSB9PiA9ICh7IGl0ZW1zIH0pID0+IHtcclxuICBjb25zdCBbaG92ZXJlZElkLCBzZXRIb3ZlcmVkSWRdID0gdXNlU3RhdGU8bnVtYmVyIHwgbnVsbD4obnVsbCk7XHJcblxyXG4gIGNvbnN0IGNvbnRhaW5lclZhcmlhbnRzID0ge1xyXG4gICAgaW5pdGlhbDoge1xyXG4gICAgICBvcGFjaXR5OiAwLFxyXG4gICAgICB5OiAyMCxcclxuICAgIH0sXHJcbiAgICBhbmltYXRlOiB7XHJcbiAgICAgIG9wYWNpdHk6IDEsXHJcbiAgICAgIHk6IDAsXHJcbiAgICAgIHRyYW5zaXRpb246IHtcclxuICAgICAgICB3aGVuOiBcImJlZm9yZUNoaWxkcmVuXCIsXHJcbiAgICAgICAgc3RhZ2dlckNoaWxkcmVuOiAwLjEsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGl0ZW1WYXJpYW50cyA9IHtcclxuICAgIHJlc3Q6IHsgZmlsdGVyOiAnYmx1cigwcHgpJywgc2NhbGU6IDEgfSxcclxuICAgIGhvdmVyOiB7IGZpbHRlcjogJ2JsdXIoNHB4KScsIHNjYWxlOiAwLjk1IH0sXHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgc3ViU2tpbGxWYXJpYW50cyA9IHtcclxuICAgIHJlc3Q6IHsgZmlsdGVyOiAnYmx1cig0cHgpJywgc2NhbGU6IDAuOTUgfSxcclxuICAgIGhvdmVyOiB7IGZpbHRlcjogJ2JsdXIoMHB4KScsIHNjYWxlOiAxfSxcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJwYWdlLWNvbnRlbnQgZml4ZWQgei01IHRvcC0wIHJpZ2h0LTAgaC1mdWxsIHctMS8yIHAtNiBzbTpwLTggbWQ6cC0xMCBsZzpwLTE0XCI+XHJcbiAgICAgIDxTY3JvbGxQYW5lbD5cclxuICAgICAgICA8bW90aW9uLmRpdlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBnYXAtMlwiXHJcbiAgICAgICAgICB2YXJpYW50cz17Y29udGFpbmVyVmFyaWFudHN9XHJcbiAgICAgICAgICBpbml0aWFsPVwiaW5pdGlhbFwiXHJcbiAgICAgICAgICBhbmltYXRlPVwiYW5pbWF0ZVwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge2l0ZW1zLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgPG1vdGlvbi5kaXZcclxuICAgICAgICAgICAgICBrZXk9e2l0ZW0uaWR9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicmVsYXRpdmUgY3Vyc29yLWRlZmF1bHRcIlxyXG4gICAgICAgICAgICAgIG9uTW91c2VFbnRlcj17KCkgPT4gc2V0SG92ZXJlZElkKGl0ZW0uaWQpfVxyXG4gICAgICAgICAgICAgIG9uTW91c2VMZWF2ZT17KCkgPT4gc2V0SG92ZXJlZElkKG51bGwpfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPG1vdGlvbi5kaXZcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtM3hsIHRleHQtbGlnaHQtYmx1ZSBmb250LWJvbGQgdGV4dC1jZW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgdmFyaWFudHM9e2l0ZW1WYXJpYW50c31cclxuICAgICAgICAgICAgICAgIGluaXRpYWw9XCJyZXN0XCJcclxuICAgICAgICAgICAgICAgIGFuaW1hdGU9e2hvdmVyZWRJZCA9PT0gaXRlbS5pZCA/IFwiaG92ZXJcIiA6IFwicmVzdFwifVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHtpdGVtLm1haW5Ta2lsbH1cclxuICAgICAgICAgICAgICA8L21vdGlvbi5kaXY+XHJcbiAgICAgICAgICAgICAgPG1vdGlvbi5kaXZcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGZsZXggZmxleC13cmFwIGdhcC0yIGp1c3RpZnktY2VudGVyIHB0LTJgfVxyXG4gICAgICAgICAgICAgICAgdmFyaWFudHM9e3N1YlNraWxsVmFyaWFudHN9XHJcbiAgICAgICAgICAgICAgICBpbml0aWFsPVwicmVzdFwiXHJcbiAgICAgICAgICAgICAgICBhbmltYXRlPXtob3ZlcmVkSWQgPT09IGl0ZW0uaWQgPyBcImhvdmVyXCIgOiBcInJlc3RcIn1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7aXRlbS5zdWJTa2lsbHMubWFwKChzdWJTa2lsbCwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgICAgPHNwYW4ga2V5PXtpbmRleH0gY2xhc3NOYW1lPVwiZm9udC1zZW1pYm9sZCBweC0yLjUgcHktMSByb3VuZGVkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge3N1YlNraWxsfVxyXG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICA8L21vdGlvbi5kaXY+XHJcbiAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvbW90aW9uLmRpdj5cclxuICAgICAgPC9TY3JvbGxQYW5lbD5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTa2lsbHNQYW5lbDsiXSwibmFtZXMiOlsidXNlU3RhdGUiLCJtb3Rpb24iLCJTY3JvbGxQYW5lbCIsIlNraWxsc1BhbmVsIiwiaXRlbXMiLCJob3ZlcmVkSWQiLCJzZXRIb3ZlcmVkSWQiLCJjb250YWluZXJWYXJpYW50cyIsImluaXRpYWwiLCJvcGFjaXR5IiwieSIsImFuaW1hdGUiLCJ0cmFuc2l0aW9uIiwid2hlbiIsInN0YWdnZXJDaGlsZHJlbiIsIml0ZW1WYXJpYW50cyIsInJlc3QiLCJmaWx0ZXIiLCJzY2FsZSIsImhvdmVyIiwic3ViU2tpbGxWYXJpYW50cyIsImRpdiIsImNsYXNzTmFtZSIsInZhcmlhbnRzIiwibWFwIiwiaXRlbSIsImluZGV4Iiwib25Nb3VzZUVudGVyIiwiaWQiLCJvbk1vdXNlTGVhdmUiLCJtYWluU2tpbGwiLCJzdWJTa2lsbHMiLCJzdWJTa2lsbCIsInNwYW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/skills-panel.tsx\n"));

/***/ })

});