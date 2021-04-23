webpackHotUpdate_N_E("pages/index",{

/***/ "./src/context/PlayerContext.tsx":
/*!***************************************!*\
  !*** ./src/context/PlayerContext.tsx ***!
  \***************************************/
/*! exports provided: PlayerContext, PlayerContextProvider, usePlayer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PlayerContext\", function() { return PlayerContext; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PlayerContextProvider\", function() { return PlayerContextProvider; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"usePlayer\", function() { return usePlayer; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar _jsxFileName = \"/Users/felipesilva/nlw05/nlw-react-05-Podcast/src/context/PlayerContext.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$(),\n    _s2 = $RefreshSig$();\n\n\nvar PlayerContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__[\"createContext\"])({});\nvar PlayerContextProvider = function PlayerContextProvider(_ref) {\n  _s();\n\n  var children = _ref.children;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])([]),\n      episodeList = _useState[0],\n      setEpisodeList = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      currentEpisodeIndex = _useState2[0],\n      setCurrentEpisodeIndex = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      isPlaying = _useState3[0],\n      setIsPlaying = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      isLooping = _useState4[0],\n      setIsLooping = _useState4[1];\n\n  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      isShuffling = _useState5[0],\n      setIsShuffling = _useState5[1];\n\n  function play(episode) {\n    setEpisodeList([episode]);\n    setCurrentEpisodeIndex(0);\n    setIsPlaying(true);\n  }\n\n  function playList(list, index) {\n    setEpisodeList(list);\n    setCurrentEpisodeIndex(index);\n    setIsPlaying(true);\n  }\n\n  function togglePlay() {\n    setIsPlaying(!isPlaying);\n  }\n\n  function toggleLoop() {\n    setIsLooping(!isLooping);\n  }\n\n  function toggleShuffle() {\n    setIsShuffling(!isShuffling);\n  }\n\n  function setPlayingState(state) {\n    setIsPlaying(state);\n  }\n\n  var hasPrevious = currentEpisodeIndex > 0;\n  var hasNext = isShuffling || currentEpisodeIndex + 1 < episodeList.length;\n\n  function playNext() {\n    if (isShuffling) {\n      var nextRandomEpisodeIndex = Math.floor(Math.random() * episodeList.length);\n      setCurrentEpisodeIndex(nextRandomEpisodeIndex);\n    } else if (hasNext) {\n      setCurrentEpisodeIndex(currentEpisodeIndex + 1);\n    }\n  }\n\n  function playPrevious() {\n    if (hasPrevious) {\n      setCurrentEpisodeIndex(currentEpisodeIndex - 1);\n    }\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(PlayerContext.Provider, {\n    value: {\n      episodeList: episodeList,\n      currentEpisodeIndex: currentEpisodeIndex,\n      play: play,\n      hasPrevious: hasPrevious,\n      playList: playList,\n      hasNext: hasNext,\n      isShuffling: isShuffling,\n      toggleShuffle: toggleShuffle,\n      playNext: playNext,\n      playPrevious: playPrevious,\n      toggleLoop: toggleLoop,\n      isLooping: isLooping,\n      isPlaying: isPlaying,\n      togglePlay: togglePlay,\n      setPlayingState: setPlayingState\n    },\n    children: children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 89,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(PlayerContextProvider, \"YSXWY8OfLfVxd5To+FHcHi+GAY0=\");\n\n_c = PlayerContextProvider;\nvar usePlayer = function usePlayer() {\n  _s2();\n\n  return Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useContext\"])(PlayerContext);\n};\n\n_s2(usePlayer, \"gDsCjeeItUuvgOWf1v4qoK9RF6k=\");\n\nvar _c;\n\n$RefreshReg$(_c, \"PlayerContextProvider\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRleHQvUGxheWVyQ29udGV4dC50c3g/MjAxMSJdLCJuYW1lcyI6WyJQbGF5ZXJDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsIlBsYXllckNvbnRleHRQcm92aWRlciIsImNoaWxkcmVuIiwidXNlU3RhdGUiLCJlcGlzb2RlTGlzdCIsInNldEVwaXNvZGVMaXN0IiwiY3VycmVudEVwaXNvZGVJbmRleCIsInNldEN1cnJlbnRFcGlzb2RlSW5kZXgiLCJpc1BsYXlpbmciLCJzZXRJc1BsYXlpbmciLCJpc0xvb3BpbmciLCJzZXRJc0xvb3BpbmciLCJpc1NodWZmbGluZyIsInNldElzU2h1ZmZsaW5nIiwicGxheSIsImVwaXNvZGUiLCJwbGF5TGlzdCIsImxpc3QiLCJpbmRleCIsInRvZ2dsZVBsYXkiLCJ0b2dnbGVMb29wIiwidG9nZ2xlU2h1ZmZsZSIsInNldFBsYXlpbmdTdGF0ZSIsInN0YXRlIiwiaGFzUHJldmlvdXMiLCJoYXNOZXh0IiwibGVuZ3RoIiwicGxheU5leHQiLCJuZXh0UmFuZG9tRXBpc29kZUluZGV4IiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwicGxheVByZXZpb3VzIiwidXNlUGxheWVyIiwidXNlQ29udGV4dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUE0Qk8sSUFBTUEsYUFBYSxnQkFBR0MsMkRBQWEsQ0FBQyxFQUFELENBQW5DO0FBTUEsSUFBTUMscUJBQXFCLEdBQUUsU0FBdkJBLHFCQUF1QixPQUE2QztBQUFBOztBQUFBLE1BQTFDQyxRQUEwQyxRQUExQ0EsUUFBMEM7O0FBQUEsa0JBQ3pDQyxzREFBUSxDQUFDLEVBQUQsQ0FEaUM7QUFBQSxNQUN4RUMsV0FEd0U7QUFBQSxNQUMzREMsY0FEMkQ7O0FBQUEsbUJBRXpCRixzREFBUSxDQUFDLENBQUQsQ0FGaUI7QUFBQSxNQUV4RUcsbUJBRndFO0FBQUEsTUFFbkRDLHNCQUZtRDs7QUFBQSxtQkFHN0NKLHNEQUFRLENB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SUFBTWtDLFMiLCJmaWxlIjoiLi9zcmMvY29udGV4dC9QbGF5ZXJDb250ZXh0LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIHVzZVN0YXRlLCBSZWFjdE5vZGUsIHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XG5cbnR5cGUgRXBpc29kZSA9IHtcbiAgdGl0bGU6IHN0cmluZztcbiAgbWVtYmVyczogc3RyaW5nO1xuICB0aHVtYm5haWw6IHN0cmluZztcbiAgZHVyYXRpb246IG51bWJlcjtcbiAgdXJsOiBzdHJpbmc7XG59O1xuXG50eXBlIFBsYXllckNvbnRleHREYXRhID0ge1xuICBlcGlzb2RlTGlzdDogRXBpc29kZVtdO1xuICBjdXJyZW50RXBpc29kZUluZGV4OiBudW1iZXI7XG4gIGlzUGxheWluZzogYm9vbGVhbjtcbiAgaXNMb29waW5nOiBib29sZWFuO1xuICBpc1NodWZmbGluZzogYm9vbGVhbjtcbiAgcGxheTogKGVwaXNvZGU6IEVwaXNvZGUpID0+IHZvaWQ7XG4gIHNldFBsYXlpbmdTdGF0ZTogKHN0YXRlOiBib29sZWFuKSA9PiB2b2lkO1xuICB0b2dnbGVQbGF5OiAoKSA9PiB2b2lkO1xuICB0b2dnbGVMb29wOiAoKSA9PiB2b2lkO1xuICB0b2dnbGVTaHVmZmxlOiAoKSA9PiB2b2lkO1xuICBwbGF5TGlzdDogKGxpc3Q6IEVwaXNvZGVbXSwgaW5kZXg6IG51bWJlcikgPT4gdm9pZDtcbiAgcGxheU5leHQ6ICgpID0+IHZvaWQ7XG4gIHBsYXlQcmV2aW91czogKCkgPT4gdm9pZDtcbiAgaGFzTmV4dDpib29sZWFuO1xuICBoYXNQcmV2aW91czpib29sZWFuO1xufTtcblxuZXhwb3J0IGNvbnN0IFBsYXllckNvbnRleHQgPSBjcmVhdGVDb250ZXh0KHt9IGFzIFBsYXllckNvbnRleHREYXRhKTtcblxudHlwZSBQbGF5ZXJDb250ZXh0UHJvdmlkZXJQcm9wcyA9IHtcbiAgY2hpbGRyZW46IFJlYWN0Tm9kZTtcbn07XG5cbmV4cG9ydCBjb25zdCBQbGF5ZXJDb250ZXh0UHJvdmlkZXIgPSh7IGNoaWxkcmVuIH06IFBsYXllckNvbnRleHRQcm92aWRlclByb3BzICk9PntcbiAgY29uc3QgW2VwaXNvZGVMaXN0LCBzZXRFcGlzb2RlTGlzdF0gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtjdXJyZW50RXBpc29kZUluZGV4LCBzZXRDdXJyZW50RXBpc29kZUluZGV4XSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbaXNQbGF5aW5nLCBzZXRJc1BsYXlpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbaXNMb29waW5nLCBzZXRJc0xvb3BpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbaXNTaHVmZmxpbmcsIHNldElzU2h1ZmZsaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBmdW5jdGlvbiBwbGF5KGVwaXNvZGU6IEVwaXNvZGUpIHtcbiAgICBzZXRFcGlzb2RlTGlzdChbZXBpc29kZV0pXG4gICAgc2V0Q3VycmVudEVwaXNvZGVJbmRleCgwKTtcbiAgICBzZXRJc1BsYXlpbmcodHJ1ZSk7XG4gIH1cbiAgZnVuY3Rpb24gcGxheUxpc3QobGlzdDogRXBpc29kZVtdLCBpbmRleDogbnVtYmVyKSB7XG4gICAgc2V0RXBpc29kZUxpc3QobGlzdCk7XG4gICAgc2V0Q3VycmVudEVwaXNvZGVJbmRleChpbmRleCk7XG4gICAgc2V0SXNQbGF5aW5nKHRydWUpO1xuXG4gIH1cbiAgZnVuY3Rpb24gdG9nZ2xlUGxheSgpIHtcbiAgICBzZXRJc1BsYXlpbmcoIWlzUGxheWluZyk7XG4gIH1cblxuICBmdW5jdGlvbiB0b2dnbGVMb29wKCkge1xuICAgIHNldElzTG9vcGluZyghaXNMb29waW5nKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHRvZ2dsZVNodWZmbGUoKSB7XG4gICAgc2V0SXNTaHVmZmxpbmcoIWlzU2h1ZmZsaW5nKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNldFBsYXlpbmdTdGF0ZShzdGF0ZTogYm9vbGVhbikge1xuICAgIHNldElzUGxheWluZyhzdGF0ZSk7XG4gIH1cblxuICBjb25zdCBoYXNQcmV2aW91cyA9IGN1cnJlbnRFcGlzb2RlSW5kZXggPiAwIDtcblxuICBjb25zdCBoYXNOZXh0ID0gaXNTaHVmZmxpbmcgfHwgKGN1cnJlbnRFcGlzb2RlSW5kZXggKyAxKSA8ZXBpc29kZUxpc3QubGVuZ3RoO1xuXG4gIGZ1bmN0aW9uIHBsYXlOZXh0KCkge1xuICAgIGlmKGlzU2h1ZmZsaW5nKSB7XG4gICAgICBjb25zdCBuZXh0UmFuZG9tRXBpc29kZUluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogZXBpc29kZUxpc3QubGVuZ3RoKTtcbiAgICAgIHNldEN1cnJlbnRFcGlzb2RlSW5kZXgobmV4dFJhbmRvbUVwaXNvZGVJbmRleCk7XG4gICAgfSBlbHNlIGlmKGhhc05leHQpIHtcbiAgICAgIHNldEN1cnJlbnRFcGlzb2RlSW5kZXgoY3VycmVudEVwaXNvZGVJbmRleCArIDEpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHBsYXlQcmV2aW91cygpIHtcbiAgICBpZiAoaGFzUHJldmlvdXMpIHtcbiAgICAgIHNldEN1cnJlbnRFcGlzb2RlSW5kZXgoY3VycmVudEVwaXNvZGVJbmRleCAtIDEpXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8UGxheWVyQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17e1xuICAgICAgZXBpc29kZUxpc3QsXG4gICAgICBjdXJyZW50RXBpc29kZUluZGV4LFxuICAgICAgcGxheSxcbiAgICAgIGhhc1ByZXZpb3VzLFxuICAgICAgcGxheUxpc3QsXG4gICAgICBoYXNOZXh0LFxuICAgICAgaXNTaHVmZmxpbmcsXG4gICAgICB0b2dnbGVTaHVmZmxlLFxuICAgICAgcGxheU5leHQsXG4gICAgICBwbGF5UHJldmlvdXMsXG4gICAgICB0b2dnbGVMb29wLFxuICAgICAgaXNMb29waW5nLFxuICAgICAgaXNQbGF5aW5nLFxuICAgICAgdG9nZ2xlUGxheSxcbiAgICAgIHNldFBsYXlpbmdTdGF0ZVxuICAgIH19PlxuICAgICAgeyBjaGlsZHJlbn1cbiAgICA8L1BsYXllckNvbnRleHQuUHJvdmlkZXI+XG4gICk7XG59XG5cbmV4cG9ydCBjb25zdCB1c2VQbGF5ZXIgPSAoKSA9PiB7XG4gIHJldHVybiB1c2VDb250ZXh0KFBsYXllckNvbnRleHQpO1xufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/context/PlayerContext.tsx\n");

/***/ })

})