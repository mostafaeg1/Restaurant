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

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createContact()\n{\n    let contactdiv=document.createElement(\"div\");\n    let p1=document.createElement(\"p\");\n    let p2=document.createElement(\"p\");\n    let img=document.createElement(\"img\");\n    \n    contactdiv.classList.add(\"contact\");\n\n    p1.textContent=\"Phone: +972 505 970 038\";\n    p2.textContent=\"Addres: alkhalayel st, umm al-fahm, israel\";\n    \n    img.src=\"images/location.png\";\n    img.alt=\"location\";\n\n    contactdiv.appendChild(p1);\n    contactdiv.appendChild(p2);\n    contactdiv.appendChild(img);\n\n    return contactdiv;\n\n}\n\nfunction loadContant()\n{\n    const main = document.getElementById(\"content\");\n    main.textContent = \"\";\n    main.appendChild(createContact());\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadContant);\n\n//# sourceURL=webpack://restaurant/./src/contact.js?");

/***/ }),

/***/ "./src/footer.js":
/*!***********************!*\
  !*** ./src/footer.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createFooter()\n{\n\n   let p=document.createElement(\"p\");\n   let a=document.createElement(\"a\");\n   let footer=document.createElement(\"footer\");\n   let img=document.createElement(\"img\");\n   img.src=\"images/GitHub-Mark-64px.png\";\n   img.alt=\"github\";\n   img.classList.add(\"github-symbol\")\n\n    a.href=\"https://github.com/mostafaeg1\";\n    a.appendChild(img);\n    p.textContent=\"Copyright © 2021 mostafaeg\";\n\n    \n    //let footer=document.getElementById(\"footer\") ;\n    footer.id=\"footer\";\n\n    footer.appendChild(p);\n    footer.appendChild(a);\n\n    return footer;\n}\n\n\nfunction loadFooter()\n{\n  let main = document.getElementById(\"footerdiv\");\n  main.textContent = \"\";\n  main.appendChild(createFooter());\n    \n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadFooter);\n\n//# sourceURL=webpack://restaurant/./src/footer.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createHome()\n{\n    let homediv=document.createElement(\"div\");\n    let p1=document.createElement(\"p\");\n    let p2=document.createElement(\"p\");\n    let img=document.createElement(\"img\");\n    \n    img.src=\"images/razChef.jpg\";\n    img.alt=\"chef\";\n\n    homediv.classList.add(\"home\");\n\n    homediv.appendChild(createParagraph(\"Eat with purpose\"));\n    homediv.appendChild(createParagraph(\"Made with passion since 1980\"));\n    homediv.appendChild(img);\n    homediv.appendChild(createParagraph(\"Order online or visit us!\"));\n\n    return homediv;\n}\n\nfunction createParagraph(text) {\n    const paragraph = document.createElement(\"p\");\n    paragraph.textContent = text;\n    return paragraph;\n  }\n  function loadHome()\n  {\n    const main = document.getElementById(\"content\");\n    main.textContent = \"\";\n    main.appendChild(createHome());\n  }\n\n  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadHome);\n\n//# sourceURL=webpack://restaurant/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n/* harmony import */ var _footer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./footer.js */ \"./src/footer.js\");\n/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact.js */ \"./src/contact.js\");\n\n\n\n//import loadHeader from \"./header.js\";\n\n\n\nfunction createHeader()\n{\n\n   let flex_container=document.createElement(\"div\");\n   let h1=document.createElement(\"h1\");\n   let  nav=document.createElement(\"nav\");\n\n    h1.textContent=\"Eat clean\";\n    \n    flex_container.classList.add(\"flex-container\");\n    h1.classList.add(\"restaurant-name\");\n\n    nav.appendChild(createButton(\"Home\",\"button-nav\"));\n    nav.appendChild(createButton(\"Menu\",\"button-nav\"));\n    nav.appendChild(createButton(\"Contact\",\"button-nav\"));\n\n   \n\n    flex_container.appendChild(h1);\n    flex_container.appendChild(nav);\n    \n \n\n    return flex_container;\n\n}\n\nfunction createButton(text,classname)\n{\nlet btn= document.createElement(\"button\");\nbtn.textContent=text;\nbtn.classList.add(classname);\nbtn.addEventListener(\"click\",(e)=>{\nif(e.target.textContent===\"Home\"){\n    (0,_home_js__WEBPACK_IMPORTED_MODULE_1__.default)();\n    e.target.classList.add(\"btn-active\");\n    let btns=document.querySelectorAll(\".button-nav\");\n    for(let i=0;i<btns.length;i++)\n    {\n        if(btns[i].textContent!==e.target.textContent)\n        {\n            btns[i].classList.remove(\"btn-active\");\n        }\n    }\n}\nif(e.target.textContent===\"Menu\"){ \n    (0,_menu_js__WEBPACK_IMPORTED_MODULE_0__.default)();\n    e.target.classList.add(\"btn-active\");\n    let btns=document.querySelectorAll(\".button-nav\");\n    for(let i=0;i<btns.length;i++)\n    {\n        if(btns[i].textContent!==e.target.textContent)\n        {\n            btns[i].classList.remove(\"btn-active\");\n        }\n    }}\nif(e.target.textContent===\"Contact\"){\n    (0,_contact_js__WEBPACK_IMPORTED_MODULE_3__.default)();\n    e.target.classList.add(\"btn-active\");\n    let btns=document.querySelectorAll(\".button-nav\");\n    \n    for(let i=0;i<btns.length;i++)\n    {\n        console.log(i<btns.length);\n        if(btns[i].textContent!==e.target.textContent)\n        {\n            btns[i].classList.remove(\"btn-active\");\n        }\n    }   \n}\n})\nreturn btn;\n}\n\n\nfunction loadHeader()\n{\n  const main = document.getElementById(\"header\");\n  main.textContent = \"\";\n  main.appendChild(createHeader());\n}\n\nloadHeader();\n(0,_home_js__WEBPACK_IMPORTED_MODULE_1__.default)();\n(0,_footer_js__WEBPACK_IMPORTED_MODULE_2__.default)();\n\n\n\n\n//# sourceURL=webpack://restaurant/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction creatMenu(){\n    let grid_container=document.createElement(\"div\");\n\n\n    grid_container.classList.add(\"menu-grid-container\");\n   grid_container.appendChild(createMenuItem(\"Homestyle protien pancake\",\"Our classic homestyle pancakes combine premium whey protein, greek yogurt\",\"Homestyle\"));\n    grid_container.appendChild(createMenuItem( \"bacon wrapped shrimp\",\"Shrimp wrapped in smoked bacon\",\"bacon\"));\n    grid_container.appendChild(createMenuItem( \"ground turkey rice broccoli\",\"Ground 93/7 ground turkey perfectly seasoned with our ICON house blend. Served with rice\",\"ground\"));\n    grid_container.appendChild(createMenuItem( \"del rio chicken\",\"Juicy chicken breast layered with cheese, peppers\",\"chicken\"));\n\n    return grid_container;\n\n    \n}\n\nfunction createMenuItem(name,description,src)\n{\n    const menuItem=document.createElement(\"div\");\n    const foodescription=document.createElement(\"p\");\n    const foodName=document.createElement(\"h2\");\n    const foodimg=document.createElement(\"img\");\n\n    foodimg.src=`images/${src}.jpg`;\n    foodimg.alt=name;\n\n    foodName.textContent=name;\n    foodescription.textContent=description;\n\n    menuItem.classList.add(\"menueitem\");\n\n    menuItem.appendChild(foodimg);\n    menuItem.appendChild(foodName);\n    menuItem.appendChild(foodescription);\n\n    return menuItem;\n\n}\n\n\nfunction loadMenu()\n{\n    const main = document.getElementById(\"content\");\n    main.textContent = \"\";\n    main.appendChild(creatMenu());\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadMenu);\n\n//# sourceURL=webpack://restaurant/./src/menu.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;