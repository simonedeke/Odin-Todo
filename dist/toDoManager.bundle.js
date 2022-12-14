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

/***/ "./src/toDoManager.js":
/*!****************************!*\
  !*** ./src/toDoManager.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"toDoManager\": () => (/* binding */ toDoManager)\n/* harmony export */ });\n\nconst toDoManager = (function () {\n\n\n\n    function createToDo(title, description, dueDate, priority, project, complete) {\n        return {\n            title,\n            description,\n            dueDate,\n            priority,\n            project,\n            complete\n        }\n    }\n    function editToDo(item, title, description, dueDate, priority, project, complete) {\n        item.title = title;\n        item.description = description;\n        item.dueDate = dueDate;\n        item.priority = priority;\n        item.project = project, \n        item.complete = complete;\n    }\n    function sortListByDate (list) {\n        list.sort((d1,d2) => new Date(d1.dueDate).getTime() - new Date(d2.dueDate).getTime());\n    }\n    function deleteToDo(toDoList, item) {\n        console.log(toDoList);\n        toDoList.splice(item,1);\n        console.log(toDoList);\n    }\n    function setComplete(item, complete) {\n        item.complete = complete;\n    }\n\n    return {\n        createToDo,\n        deleteToDo,\n        editToDo,\n        sortListByDate,\n        setComplete\n    }\n})();\n\n//# sourceURL=webpack://odin-todo/./src/toDoManager.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/toDoManager.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;