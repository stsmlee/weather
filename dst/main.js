/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `* {\n  box-sizing: border-box;\n  /* font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif; */\n  font-family: Trebuchet MS, sans-serif;\n}\n\nbody {\n  margin: 0px;\n}\n\n.switch {\n  position: relative;\n  display: inline-block;\n  width: 60px;\n  height: 34px;\n}\n\n.switch input { \n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n\n.slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #ccc;\n  -webkit-transition: .4s;\n  transition: .4s;\n}\n\n.slider::before {\n  position: absolute;\n  text-align: center;\n  text-indent: -5px;\n  letter-spacing: -2px;\n  font-size: 16px;\n  content: \"°F\";\n  font-family: Trebuchet MS, sans-serif;\n  line-height: 26px;\n  height: 26px;\n  width: 26px;\n  left: 4px;\n  bottom: 4px;\n  background-color: white;\n  -webkit-transition: .4s;\n  transition: .4s;\n}\n\ninput:checked + .slider {\n  /* background-color: #2196F3; */\n  background-color: #b0b0b0;\n}\n\ninput:checked + .slider::before {\n  -webkit-transform: translateX(26px);\n  -ms-transform: translateX(26px);\n  transform: translateX(26px);\n  content: \"°C\";\n}\n\n/* Rounded sliders */\n.slider.round {\n  border-radius: 34px;\n}\n\n.slider.round:before {\n  border-radius: 50%;\n}\n\n#header {\n  white-space: nowrap;\n}\n\n#header-div {\n  font-size: 1.3em;\n  display: flex;\n  justify-content: space-between;\n  max-width: 1080px;\n  min-width: 700px;\n  height: 65px;\n  padding: 20px 80px 20px 80px;\n  margin:auto;\n  align-items: center;\n}\n\n#location-form {\n  height: 25px;\n  line-height: 1em;\n  white-space: nowrap;\n}\n\n#location-form input[type=\"text\"], input[type=\"submit\"] {\n  height: 100%;\n}\n\n@keyframes skew-y-shake{\n  0% { transform: skewY(-3deg); }\n  5% { transform: skewY(3deg); }\n  10% { transform: skewY(-3deg); }\n  15% { transform: skewY(3deg); }\n  20% { transform: skewY(0deg); }\n  100% { transform: skewY(0deg); }\n}\n\n#location-form input[type=\"text\"]:required:invalid {\n  border: 2px solid red;\n}\n\n#location-form input[type=\"text\"]:invalid.err {\n  border: 2px solid red;\n  animation: skew-y-shake 0.1s ease-in-out 0s 2;\n  /* animation: skew-y-shake 0.2s ease-in-out 0s 2; */\n  box-shadow: 0 0 0.3rem 0.1rem red;\n}\n\n#container {\n  padding: 20px 80px 20px 80px;\n  max-width: 1080px;\n  min-width: 700px;\n  margin: auto;\n  line-height: 1.5em;\n}\n\n#aqi-rating, #uv-index {\n  padding: 1px 5px;\n  border-radius: 15px;\n}\n\n#location-div {\n  font-size: 1.1em;\n}\n\n#current-time-div {\n  font-size: .8em;\n}\n\n#current-icon-div {\n  height: 64px;\n}\n\n#forecast-div {\n  display: flex;\n  gap: 20px;\n}\n\n#forecast-div div {\n  text-align: center;\n  width: 160px;\n  white-space: nowrap;\n}\n\n.icon-container {\n  position: relative;\n}\n\n.icon-container .chance {\n  position: absolute;\n  top: 60%;\n  left: 56%;\n  font-size: .7em;\n  /* transform: translate(-50%, -50%); */\n}\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://weather/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://weather/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://weather/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://weather/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://weather/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://weather/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://weather/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://weather/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://weather/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://weather/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/api.js":
/*!********************!*\
  !*** ./src/api.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ callAPI)\n/* harmony export */ });\n/* eslint-disable prefer-destructuring */\nconst months = [\n  'January',\n  'February',\n  'March',\n  'April',\n  'May',\n  'June',\n  'July',\n  'August',\n  'September',\n  'October',\n  'November',\n  'December',\n];\nconst weekdays = [\n  'Sunday',\n  'Monday',\n  'Tuesday',\n  'Wednesday',\n  'Thursday',\n  'Friday',\n  'Saturday',\n];\nconst weekdaysShort = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];\nlet data;\nconst unitSwitch = document.getElementById('unit-switch');\nconst locationDiv = document.getElementById('location-div');\nconst currentTimeDiv = document.getElementById('current-time-div');\nconst currentCondition = document.getElementById('current-condition');\nconst currentIcon = document.getElementById('current-icon');\nconst currentTemp = document.getElementById('current-temp');\nconst currentHumidity = document.getElementById('current-humidity');\nconst uvLabel = document.getElementById('uv-label');\nconst uvIndex = document.getElementById('uv-index');\nconst uvCode = {\n  1: ['#acd162', 'Low'],\n  2: ['#acd162', 'Low'],\n  3: ['#f7d45f', 'Moderate'],\n  4: ['#f7d45f', 'Moderate'],\n  5: ['#f7d45f', 'Moderate'],\n  6: ['#fc9956', 'High'],\n  7: ['#fc9956', 'High'],\n  8: ['#f5676b', 'Very High'],\n  9: ['#f5676b', 'Very High'],\n  10: ['#f5676b', 'Very High'],\n  11: ['#a17584', 'Extreme'],\n};\nconst currentWind = document.getElementById('current-wind');\nconst currentCloud = document.getElementById('current-cloud');\nconst visibility = document.getElementById('visibility');\nconst aqiLabel = document.getElementById('aqi-label');\nconst aqiRating = document.getElementById('aqi-rating');\nconst aqiCode = {\n  1: ['#acd162', 'Good'],\n  2: ['#f7d45f', 'Moderate'],\n  3: ['#fc9956', 'Unhealthy for Sensitive Groups'],\n  4: ['#f5676b', 'Unhealthy for All'],\n  5: ['#a37eb8', 'Very Unhealthy'],\n  6: ['#a17584', 'Hazardous'],\n};\nconst next24Hours = document.getElementById('next-24-hours-div');\nconst day0date = document.getElementById('day-0-date');\nconst day0Lo = document.getElementById('day-0-lo');\nconst day0Hi = document.getElementById('day-0-hi');\nconst day1date = document.getElementById('day-1-date');\nconst day1Lo = document.getElementById('day-1-lo');\nconst day1Hi = document.getElementById('day-1-hi');\nconst day2date = document.getElementById('day-2-date');\nconst day2Lo = document.getElementById('day-2-lo');\nconst day2Hi = document.getElementById('day-2-hi');\n\nfunction updateUnits() {\n  if (unitSwitch.checked) {\n    currentTemp.textContent = `Current Temp: ${data.current.temp_c}°C, but feels like: ${data.current.feelslike_c}°C`;\n    currentWind.textContent = `Wind/Gust/Direction: ${data.current.wind_kph}kph / ${data.current.gust_kph}kph / ${data.current.wind_dir}`;\n    visibility.textContent = `Visibility: ${data.current.vis_km}km`;\n    day0Lo.textContent = `Lo: ${data.forecast.forecastday[0].day.mintemp_c}°C`;\n    day0Hi.textContent = `Hi: ${data.forecast.forecastday[0].day.maxtemp_c}°C`;\n    day1Lo.textContent = `Lo: ${data.forecast.forecastday[1].day.mintemp_c}°C`;\n    day1Hi.textContent = `Hi: ${data.forecast.forecastday[1].day.maxtemp_c}°C`;\n    day2Lo.textContent = `Lo: ${data.forecast.forecastday[2].day.mintemp_c}°C`;\n    day2Hi.textContent = `Hi: ${data.forecast.forecastday[2].day.maxtemp_c}°C`;\n  } else {\n    currentTemp.textContent = `Current Temp: ${data.current.temp_f}°F, but feels like: ${data.current.feelslike_f}°F`;\n    currentWind.textContent = `Wind/Gust/Direction: ${data.current.wind_mph}mph / ${data.current.gust_mph}mph / ${data.current.wind_dir}`;\n    visibility.textContent = `Visibility: ${data.current.vis_miles}mi`;\n    day0Lo.textContent = `Lo: ${data.forecast.forecastday[0].day.mintemp_f}°F`;\n    day0Hi.textContent = `Hi: ${data.forecast.forecastday[0].day.maxtemp_f}°F`;\n    day1Lo.textContent = `Lo: ${data.forecast.forecastday[1].day.mintemp_f}°F`;\n    day1Hi.textContent = `Hi: ${data.forecast.forecastday[1].day.maxtemp_f}°F`;\n    day2Lo.textContent = `Lo: ${data.forecast.forecastday[2].day.mintemp_f}°F`;\n    day2Hi.textContent = `Hi: ${data.forecast.forecastday[2].day.maxtemp_f}°F`;\n  }\n}\n\nunitSwitch.addEventListener('click', () => {\n  if (data) updateUnits();\n});\n\nfunction setIcon(currentData, image) {\n  const isDay = currentData.is_day;\n  const iconNum = currentData.condition.icon.slice(-7);\n  const iconEl = image;\n  if (isDay) {\n    iconEl.src = `../weather_icons/day/${iconNum}`;\n  } else iconEl.src = `../weather_icons/night/${iconNum}`;\n}\n\nfunction update3DayForecast(idx) {\n  const condition = document.getElementById(`day-${idx}-condition`);\n  const precip = document.getElementById(`day-${idx}-chance-of-precip`);\n  const icon = document.getElementById(`day-${idx}-icon`);\n  const currentData = data.forecast.forecastday[idx].day;\n  condition.textContent = currentData.condition.text;\n  icon.src = `../weather_icons/day/${data.forecast.forecastday[\n    idx\n  ].day.condition.icon.slice(-7)}`;\n  const rainChance = currentData.daily_chance_of_rain;\n  const snowChance = currentData.daily_chance_of_snow;\n  let percent;\n  if (rainChance > snowChance) percent = rainChance;\n  else percent = snowChance;\n  if (percent > 0) precip.textContent = `${percent}%`;\n}\n\nfunction update24HourForecast(start) {\n  next24Hours.replaceChildren();\n  next24Hours.textContent = 'Looking ahead at your next 24 hours:';\n  let currentHour = start;\n  let currentDay = 0;\n  for (let i = 0; i < 25; i += 1) {\n    const newHourDiv = document.createElement('div');\n    if (currentHour === 24) {\n      currentHour = 0;\n      currentDay += 1;\n    }\n    let formattedHour = currentHour;\n    const hourData = data.forecast.forecastday[currentDay].hour[currentHour];\n    if (currentHour < 10) formattedHour = `0${currentHour}`;\n    newHourDiv.textContent = formattedHour;\n    const condition = document.createElement('div');\n    condition.textContent = hourData.condition.text;\n    next24Hours.appendChild(newHourDiv);\n    currentHour += 1;\n  }\n}\n\nfunction updateDisplay() {\n  const currentEpoch = data.current.last_updated_epoch;\n  const currentDate = new Date(currentEpoch * 1000);\n  const currentHour = currentDate.getHours();\n  let formattedHour = currentHour;\n  if (currentHour < 10) formattedHour = `0${currentHour}`;\n  let currentMinutes = currentDate.getMinutes();\n  if (currentMinutes < 10) currentMinutes = `0${currentMinutes}`;\n  const currentTime = `${weekdays[currentDate.getDay()]}, ${\n    months[currentDate.getMonth()]\n  } ${currentDate.getDate()}, ${currentDate.getFullYear()} at ${formattedHour}:${currentMinutes}`;\n  locationDiv.textContent = `${data.location.name}, ${data.location.region} (${data.location.country})`;\n  currentTimeDiv.textContent = `last updated ${currentTime}`;\n  currentCondition.textContent = `Current Conditions: ${data.current.condition.text}`;\n  setIcon(data.current, currentIcon);\n  currentHumidity.textContent = `Humidity: ${data.current.humidity}%`;\n  uvLabel.textContent = 'UV index:';\n  let currentUV = data.current.uv;\n  if (currentUV > 8) currentUV = 8;\n  uvIndex.textContent = `${data.current.uv} (${uvCode[currentUV][1]})`;\n  uvIndex.style.backgroundColor = uvCode[currentUV][0];\n  currentCloud.textContent = `Cloud coverage: ${data.current.cloud}%`;\n  const usAQI = data.current.air_quality['us-epa-index'];\n  const currentAQI = aqiCode[usAQI];\n  aqiLabel.textContent = 'Air quality:';\n  aqiRating.style.backgroundColor = currentAQI[0];\n  aqiRating.textContent = currentAQI[1];\n\n  update24HourForecast(currentHour);\n\n  day0date.textContent = 'Today';\n  update3DayForecast(0);\n\n  if (currentDate.getDay() + 1 < 7) {\n    day1date.textContent = weekdaysShort[currentDate.getDay() + 1];\n  } else day1date.textContent = weekdaysShort[0];\n  update3DayForecast(1);\n\n  const day2day = currentDate.getDay() + 2;\n  if (day2day < 7) {\n    day2date.textContent = weekdaysShort[day2day];\n  } else if (day2day === 7) {\n    day2date.textContent = weekdaysShort[0];\n  } else day2date.textContent = weekdaysShort[1];\n  update3DayForecast(2);\n\n  updateUnits();\n}\n\nasync function callAPI(input) {\n  const location = input.value;\n  try {\n    const response = await fetch(\n      `http://api.weatherapi.com/v1/forecast.json?key=2000ac3edfaa40c689f152811232808&q=${location}&days=3&aqi=yes&alerts=yes`,\n      { mode: 'cors' },\n    );\n    const responseJSON = await response.json();\n    if (response.status !== 200) {\n      console.log('oops: ', response.status, responseJSON.error.message);\n      input.setCustomValidity(\n        `Status ${response.status}: ${responseJSON.error.message}.`,\n      );\n      input.reportValidity();\n      input.classList.add('err');\n    } else {\n      if (input.classList.contains('err')) input.classList.remove('err');\n      console.log(responseJSON);\n      data = responseJSON;\n      updateDisplay();\n    }\n  } catch (error) {\n    console.log(error);\n  }\n}\n\n\n//# sourceURL=webpack://weather/./src/api.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api */ \"./src/api.js\");\n\n\n\nconst locationForm = document.getElementById('location-form');\nconst locationInput = document.getElementById('location-input');\nlocationInput.addEventListener('input', (e) => e.target.setCustomValidity(''));\n\nlocationForm.addEventListener('submit', (e) => {\n  e.preventDefault();\n  const input = document.getElementById('location-input');\n  (0,_api__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(input);\n});\n\n// callAPI('New York');\n\n\n//# sourceURL=webpack://weather/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;