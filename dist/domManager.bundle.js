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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"domManager\": () => (/* binding */ domManager)\n/* harmony export */ });\n/* harmony import */ var _toDoManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDoManager */ \"./src/toDoManager.js\");\n\n\nconst domManager = (function () {\n\n    let _currentProject = 'Home';\n    function displayToDos(toDoList, listDisplay,clear) {\n        if(clear){\n            listDisplay.innerHTML = \"<div class=\\\"current-folder-title\\\">\" + _currentProject + \"</div>\";\n        }\n\n        if(toDoList.Home != undefined) {\n            let homeList = [];\n            for(const list in toDoList) {\n\n                for(const item in toDoList[list]) {\n                    homeList.push(toDoList[list][item]);\n                }          \n            }\n\n            _toDoManager__WEBPACK_IMPORTED_MODULE_0__.toDoManager.sortListByDate(homeList);\n            toDoList = homeList;\n        }\n     \n        for(const item in toDoList) {\n        const container = document.createElement('div');\n        container.classList = 'to-do-item';\n\n        const checkedDiv = document.createElement('div');\n        checkedDiv.classList = 'to-do-item__checked';\n        checkedDiv.innerHTML = \"check\";\n        container.appendChild(checkedDiv);\n\n        const titleDiv = document.createElement('div');\n        titleDiv.classList = 'to-do-item__title';\n        titleDiv.innerHTML = toDoList[item].title;\n        container.appendChild(titleDiv);\n        \n        const dueDateDiv = document.createElement('div');\n        dueDateDiv.classList = 'to-do-item__due-date';\n        dueDateDiv.innerHTML = toDoList[item].dueDate;\n        container.appendChild(dueDateDiv);\n\n        const editDiv = document.createElement('div');\n        editDiv.classList = 'to-do-item__edit';\n        editDiv.innerHTML = \"edit\";\n        container.appendChild(editDiv);\n\n        const priorityDiv = document.createElement('div');\n        priorityDiv.classList = 'to-do-item__priority';\n        priorityDiv.innerHTML = \"priority\";\n        container.appendChild(priorityDiv);\n\n        // const moveToFolderDiv = document.createElement('div');\n        // moveToFolderDiv.classList = 'to-do-item__move-to-folder';\n        // moveToFolderDiv.innerHTML = \"move\";\n        // container.appendChild(moveToFolderDiv);\n\n        const deleteDiv = document.createElement('div');\n        deleteDiv.classList = 'to-do-item__delete';\n        deleteDiv.innerHTML = \"delete\";\n        container.appendChild(deleteDiv);\n\n        listDisplay.appendChild(container);\n            \n        }\n    }\n\n    function displayNav(toDoList, projectDisplay, toDoListDisplay) {\n        \n        const projectList = Object.assign({}, toDoList);\n        delete projectList.Home;\n        delete projectList.Today;\n        delete projectList.Week;\n        console.log(toDoListDisplay);\n        for(const name in projectList) {\n            const projectLI = document.createElement(\"li\");\n            projectLI.innerHTML = name;\n            console.log('display nav display: ' + toDoListDisplay);\n            projectLI.addEventListener('click', () => {\n                domManager.setCurrentProject(name);\n                domManager.displayToDos(toDoList[name],toDoListDisplay,true);\n            });\n            \n            projectDisplay.appendChild(projectLI);\n        }\n        \n    }\n    function setCurrentProject(project) {\n        _currentProject = project;\n    }\n    function getCurrentProject() {\n        return _currentProject;\n    }\n\n    return {\n        displayToDos,\n        displayNav,\n        getCurrentProject,\n        setCurrentProject\n    }\n})();\n\n//# sourceURL=webpack://odin-todo/./src/domManager.js?");

/***/ }),

/***/ "./src/toDoManager.js":
/*!****************************!*\
  !*** ./src/toDoManager.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"toDoManager\": () => (/* binding */ toDoManager)\n/* harmony export */ });\n\nconst toDoManager = (function () {\n\n\n\n    function createToDo(title, description, dueDate, priority, project, complete) {\n        return {\n            title,\n            description,\n            dueDate,\n            priority,\n            project,\n            complete\n        }\n    }\n    function editToDo() {\n\n    }\n    function sortListByDate (list) {\n        list.sort((d1,d2) => new Date(d1.dueDate).getTime() - new Date(d2.dueDate).getTime());\n    }\n    function deleteToDo() {\n\n    }\n\n    return {\n        createToDo,\n        sortListByDate\n    }\n})();\n\n//# sourceURL=webpack://odin-todo/./src/toDoManager.js?");

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
/******/ 			// no module.id needed
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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/domManager.js");
/******/ 	
/******/ })()
;