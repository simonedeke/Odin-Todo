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

/***/ "./src/domManager.js":
/*!***************************!*\
  !*** ./src/domManager.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"domManager\": () => (/* binding */ domManager)\n/* harmony export */ });\n\nconst domManager = (function () {\n\n    function displayToDos(toDoList, listDisplay) {\n        console.log(toDoList);\n        for(const item in toDoList) {\n        console.log(item);\n        const container = document.createElement('div');\n        container.classList = 'to-do-item';\n\n        const checkedDiv = document.createElement('div');\n        checkedDiv.classList = 'to-do-item__checked';\n        checkedDiv.innerHTML = \"check\";\n        container.appendChild(checkedDiv);\n\n        const titleDiv = document.createElement('div');\n        titleDiv.classList = 'to-do-item__title';\n        titleDiv.innerHTML = toDoList[item].title;\n        container.appendChild(titleDiv);\n        \n        const dueDateDiv = document.createElement('div');\n        dueDateDiv.classList = 'to-do-item__due-date';\n        dueDateDiv.innerHTML = toDoList[item].dueDate;\n        container.appendChild(dueDateDiv);\n\n        const editDiv = document.createElement('div');\n        editDiv.classList = 'to-do-item__edit';\n        editDiv.innerHTML = \"edit\";\n        container.appendChild(editDiv);\n\n        const priorityDiv = document.createElement('div');\n        priorityDiv.classList = 'to-do-item__priority';\n        priorityDiv.innerHTML = \"priority\";\n        container.appendChild(priorityDiv);\n\n        const moveToFolderDiv = document.createElement('div');\n        moveToFolderDiv.classList = 'to-do-item__move-to-folder';\n        moveToFolderDiv.innerHTML = \"move\";\n        container.appendChild(moveToFolderDiv);\n\n        const deleteDiv = document.createElement('div');\n        deleteDiv.classList = 'to-do-item__delete';\n        deleteDiv.innerHTML = \"delete\";\n        container.appendChild(deleteDiv);\n\n\n        listDisplay.appendChild(container);\n        //     <div class='to-do-item'>\n        //   <div class='to-do-item__checked'><input type='checkbox'></div>\n        //   <div class='to-do-item__title'>To do task - task to do</div>\n        //   <div class='to-do-item__due-date'>October 31st</div>\n        //   <div class='to-do-item__edit'>Edit</div>\n        //   <div class='to-do-item__priority'>Priority</div>\n        //   <div class='to-do-item__move-to-folder'>Move</div>\n        //   <div class='to-do-item__delete'>Delete</div>\n        // </div>\n        }\n    }\n\n    function displayAllToDos() {\n\n    }\n\n    function displayNav() {\n\n    }\n\n    return {\n        displayToDos\n    }\n})();\n\n//# sourceURL=webpack://odin-todo/./src/domManager.js?");

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
/******/ 	__webpack_modules__["./src/domManager.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;