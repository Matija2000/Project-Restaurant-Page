/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createContactPage: () => (/* binding */ createContactPage)
/* harmony export */ });
function createContactPage() {
  const div = document.querySelector("#content");
  const header = document.createElement("h1");
  header.textContent = "Contact";
  div.appendChild(header);
  document.body.appendChild(div);
}

function createDivBox() {
  const box = document.createElement("div");
  box.classList.add("box");
  return box;
}


/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createHomePage: () => (/* binding */ createHomePage)
/* harmony export */ });
function createHomePage() {
  const content = document.querySelector("#content");
  const header = document.createElement("h1");
  header.textContent = "Matija's Restaurant";
  const image = document.createElement("img");
  image.src = "./pictures/rest.jpg";
  const para = document.createElement("p");
  para.textContent = `
  Matija's restaurant is a culinary haven where flavors dance on your palate, leaving you in awe of each delectable bite.
  From the moment you step through the door, Matija's restaurant transforms dining into a gastronomic adventure, where every dish is a masterpiece.
  `;

  content.appendChild(header);
  content.appendChild(image);
  content.appendChild(para);
}


/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createMenuPage: () => (/* binding */ createMenuPage)
/* harmony export */ });
function createMenuPage() {
  const box1 = createDivBox();
  const box2 = createDivBox();
  const box3 = createDivBox();
  /*  */
  const div = document.querySelector("#content");
  const header = document.createElement("h1");
  header.textContent = "Menu";
  div.appendChild(header);
  /*  */
  const appetizer = document.createElement("h2");
  appetizer.textContent = "Appetizer";
  div.appendChild(appetizer);
  const title1 = createTitle();
  title1.textContent = "vegetable salad served on white bowl";
  const img1 = createImage();
  img1.src = "./pictures/1.jpg";
  const p1 = createParagraph();
  p1.textContent =
    "Indulge in the vibrant flavors of our fresh vegetable salad, artfully presented in a pristine white bowl, a culinary masterpiece that delights the senses.";

  const title2 = createTitle();
  title2.textContent = "green vegetable on brown ceramic plate";
  const img2 = createImage();
  img2.src = "./pictures/2.jpg";
  const p2 = createParagraph();
  p2.textContent =
    "Savor the crisp goodness of our green vegetable medley, elegantly arranged on a rustic brown ceramic plate, a symphony of colors and textures that embodies both taste and visual appeal.";

  box1.appendChild(title1);
  box1.appendChild(img1);
  box1.appendChild(p1);
  box2.appendChild(title2);
  box2.appendChild(img2);
  box2.appendChild(p2);

  div.appendChild(box1);
  div.appendChild(box2);

  const mainDish = document.createElement("h2");
  mainDish.textContent = "Main dish";
  div.appendChild(mainDish);
  const title3 = createTitle();
  title3.textContent = "Vegan pizza";
  const img3 = createImage();
  img3.src = "./pictures/3.jpg";
  const p3 = createParagraph();
  p3.textContent =
    "Experience the perfect harmony of plant-based delight with our vegan pizza, crafted to perfection and served on a golden-brown crust that captures the essence of flavor without compromise";
  box3.appendChild(title3);
  box3.appendChild(img3);
  box3.appendChild(p3);
  div.appendChild(box3);

  document.body.appendChild(div);
}

function createDivBox() {
  const box = document.createElement("div");
  box.classList.add("box");
  return box;
}

function createTitle() {
  const title = document.createElement("h3");
  return title;
}

function createImage() {
  const image = document.createElement("img");
  return image;
}

function createParagraph() {
  const para = document.createElement("p");
  return para;
}


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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ "./src/contact.js");




(0,_home__WEBPACK_IMPORTED_MODULE_0__.createHomePage)();

const buttons = (function () {
  const buttons = document.querySelector("#buttons");
  const div = document.querySelector("#content");
  const home = document.createElement("button");
  home.textContent = "HOME";
  const menu = document.createElement("button");
  menu.textContent = "MENU";
  const contact = document.createElement("button");
  contact.textContent = "CONTACT";
  document.body.appendChild(div);
  buttons.appendChild(home);
  buttons.appendChild(menu);
  buttons.appendChild(contact);

  function resetDiv() {
    while (div.firstChild) {
      div.removeChild(div.firstChild);
    }
  }

  return { home, menu, contact, resetDiv };
})();

buttons.home.addEventListener("click", () => {
  buttons.resetDiv();
  (0,_home__WEBPACK_IMPORTED_MODULE_0__.createHomePage)();
});

buttons.menu.addEventListener("click", () => {
  buttons.resetDiv();
  (0,_menu__WEBPACK_IMPORTED_MODULE_1__.createMenuPage)();
});

buttons.contact.addEventListener("click", () => {
  buttons.resetDiv();
  (0,_contact__WEBPACK_IMPORTED_MODULE_2__.createContactPage)();
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ1pPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ2ZPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7VUM1RUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7O0FDTndDO0FBQ0E7QUFDTTs7QUFFOUMscURBQWM7O0FBRWQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxXQUFXO0FBQ1gsQ0FBQzs7QUFFRDtBQUNBO0FBQ0EsRUFBRSxxREFBYztBQUNoQixDQUFDOztBQUVEO0FBQ0E7QUFDQSxFQUFFLHFEQUFjO0FBQ2hCLENBQUM7O0FBRUQ7QUFDQTtBQUNBLEVBQUUsMkRBQWlCO0FBQ25CLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9qZWN0LXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9jb250YWN0LmpzIiwid2VicGFjazovL3Byb2plY3QtcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXJlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9wcm9qZWN0LXJlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9wcm9qZWN0LXJlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Byb2plY3QtcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBjcmVhdGVDb250YWN0UGFnZSgpIHtcbiAgY29uc3QgZGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gIGhlYWRlci50ZXh0Q29udGVudCA9IFwiQ29udGFjdFwiO1xuICBkaXYuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChkaXYpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVEaXZCb3goKSB7XG4gIGNvbnN0IGJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGJveC5jbGFzc0xpc3QuYWRkKFwiYm94XCIpO1xuICByZXR1cm4gYm94O1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUhvbWVQYWdlKCkge1xuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gIGhlYWRlci50ZXh0Q29udGVudCA9IFwiTWF0aWphJ3MgUmVzdGF1cmFudFwiO1xuICBjb25zdCBpbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gIGltYWdlLnNyYyA9IFwiLi9waWN0dXJlcy9yZXN0LmpwZ1wiO1xuICBjb25zdCBwYXJhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIHBhcmEudGV4dENvbnRlbnQgPSBgXG4gIE1hdGlqYSdzIHJlc3RhdXJhbnQgaXMgYSBjdWxpbmFyeSBoYXZlbiB3aGVyZSBmbGF2b3JzIGRhbmNlIG9uIHlvdXIgcGFsYXRlLCBsZWF2aW5nIHlvdSBpbiBhd2Ugb2YgZWFjaCBkZWxlY3RhYmxlIGJpdGUuXG4gIEZyb20gdGhlIG1vbWVudCB5b3Ugc3RlcCB0aHJvdWdoIHRoZSBkb29yLCBNYXRpamEncyByZXN0YXVyYW50IHRyYW5zZm9ybXMgZGluaW5nIGludG8gYSBnYXN0cm9ub21pYyBhZHZlbnR1cmUsIHdoZXJlIGV2ZXJ5IGRpc2ggaXMgYSBtYXN0ZXJwaWVjZS5cbiAgYDtcblxuICBjb250ZW50LmFwcGVuZENoaWxkKGhlYWRlcik7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaW1hZ2UpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKHBhcmEpO1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZU1lbnVQYWdlKCkge1xuICBjb25zdCBib3gxID0gY3JlYXRlRGl2Qm94KCk7XG4gIGNvbnN0IGJveDIgPSBjcmVhdGVEaXZCb3goKTtcbiAgY29uc3QgYm94MyA9IGNyZWF0ZURpdkJveCgpO1xuICAvKiAgKi9cbiAgY29uc3QgZGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gIGhlYWRlci50ZXh0Q29udGVudCA9IFwiTWVudVwiO1xuICBkaXYuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbiAgLyogICovXG4gIGNvbnN0IGFwcGV0aXplciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgYXBwZXRpemVyLnRleHRDb250ZW50ID0gXCJBcHBldGl6ZXJcIjtcbiAgZGl2LmFwcGVuZENoaWxkKGFwcGV0aXplcik7XG4gIGNvbnN0IHRpdGxlMSA9IGNyZWF0ZVRpdGxlKCk7XG4gIHRpdGxlMS50ZXh0Q29udGVudCA9IFwidmVnZXRhYmxlIHNhbGFkIHNlcnZlZCBvbiB3aGl0ZSBib3dsXCI7XG4gIGNvbnN0IGltZzEgPSBjcmVhdGVJbWFnZSgpO1xuICBpbWcxLnNyYyA9IFwiLi9waWN0dXJlcy8xLmpwZ1wiO1xuICBjb25zdCBwMSA9IGNyZWF0ZVBhcmFncmFwaCgpO1xuICBwMS50ZXh0Q29udGVudCA9XG4gICAgXCJJbmR1bGdlIGluIHRoZSB2aWJyYW50IGZsYXZvcnMgb2Ygb3VyIGZyZXNoIHZlZ2V0YWJsZSBzYWxhZCwgYXJ0ZnVsbHkgcHJlc2VudGVkIGluIGEgcHJpc3RpbmUgd2hpdGUgYm93bCwgYSBjdWxpbmFyeSBtYXN0ZXJwaWVjZSB0aGF0IGRlbGlnaHRzIHRoZSBzZW5zZXMuXCI7XG5cbiAgY29uc3QgdGl0bGUyID0gY3JlYXRlVGl0bGUoKTtcbiAgdGl0bGUyLnRleHRDb250ZW50ID0gXCJncmVlbiB2ZWdldGFibGUgb24gYnJvd24gY2VyYW1pYyBwbGF0ZVwiO1xuICBjb25zdCBpbWcyID0gY3JlYXRlSW1hZ2UoKTtcbiAgaW1nMi5zcmMgPSBcIi4vcGljdHVyZXMvMi5qcGdcIjtcbiAgY29uc3QgcDIgPSBjcmVhdGVQYXJhZ3JhcGgoKTtcbiAgcDIudGV4dENvbnRlbnQgPVxuICAgIFwiU2F2b3IgdGhlIGNyaXNwIGdvb2RuZXNzIG9mIG91ciBncmVlbiB2ZWdldGFibGUgbWVkbGV5LCBlbGVnYW50bHkgYXJyYW5nZWQgb24gYSBydXN0aWMgYnJvd24gY2VyYW1pYyBwbGF0ZSwgYSBzeW1waG9ueSBvZiBjb2xvcnMgYW5kIHRleHR1cmVzIHRoYXQgZW1ib2RpZXMgYm90aCB0YXN0ZSBhbmQgdmlzdWFsIGFwcGVhbC5cIjtcblxuICBib3gxLmFwcGVuZENoaWxkKHRpdGxlMSk7XG4gIGJveDEuYXBwZW5kQ2hpbGQoaW1nMSk7XG4gIGJveDEuYXBwZW5kQ2hpbGQocDEpO1xuICBib3gyLmFwcGVuZENoaWxkKHRpdGxlMik7XG4gIGJveDIuYXBwZW5kQ2hpbGQoaW1nMik7XG4gIGJveDIuYXBwZW5kQ2hpbGQocDIpO1xuXG4gIGRpdi5hcHBlbmRDaGlsZChib3gxKTtcbiAgZGl2LmFwcGVuZENoaWxkKGJveDIpO1xuXG4gIGNvbnN0IG1haW5EaXNoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICBtYWluRGlzaC50ZXh0Q29udGVudCA9IFwiTWFpbiBkaXNoXCI7XG4gIGRpdi5hcHBlbmRDaGlsZChtYWluRGlzaCk7XG4gIGNvbnN0IHRpdGxlMyA9IGNyZWF0ZVRpdGxlKCk7XG4gIHRpdGxlMy50ZXh0Q29udGVudCA9IFwiVmVnYW4gcGl6emFcIjtcbiAgY29uc3QgaW1nMyA9IGNyZWF0ZUltYWdlKCk7XG4gIGltZzMuc3JjID0gXCIuL3BpY3R1cmVzLzMuanBnXCI7XG4gIGNvbnN0IHAzID0gY3JlYXRlUGFyYWdyYXBoKCk7XG4gIHAzLnRleHRDb250ZW50ID1cbiAgICBcIkV4cGVyaWVuY2UgdGhlIHBlcmZlY3QgaGFybW9ueSBvZiBwbGFudC1iYXNlZCBkZWxpZ2h0IHdpdGggb3VyIHZlZ2FuIHBpenphLCBjcmFmdGVkIHRvIHBlcmZlY3Rpb24gYW5kIHNlcnZlZCBvbiBhIGdvbGRlbi1icm93biBjcnVzdCB0aGF0IGNhcHR1cmVzIHRoZSBlc3NlbmNlIG9mIGZsYXZvciB3aXRob3V0IGNvbXByb21pc2VcIjtcbiAgYm94My5hcHBlbmRDaGlsZCh0aXRsZTMpO1xuICBib3gzLmFwcGVuZENoaWxkKGltZzMpO1xuICBib3gzLmFwcGVuZENoaWxkKHAzKTtcbiAgZGl2LmFwcGVuZENoaWxkKGJveDMpO1xuXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZGl2KTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRGl2Qm94KCkge1xuICBjb25zdCBib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBib3guY2xhc3NMaXN0LmFkZChcImJveFwiKTtcbiAgcmV0dXJuIGJveDtcbn1cblxuZnVuY3Rpb24gY3JlYXRlVGl0bGUoKSB7XG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICByZXR1cm4gdGl0bGU7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUltYWdlKCkge1xuICBjb25zdCBpbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gIHJldHVybiBpbWFnZTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlUGFyYWdyYXBoKCkge1xuICBjb25zdCBwYXJhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIHJldHVybiBwYXJhO1xufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBjcmVhdGVIb21lUGFnZSB9IGZyb20gXCIuL2hvbWVcIjtcbmltcG9ydCB7IGNyZWF0ZU1lbnVQYWdlIH0gZnJvbSBcIi4vbWVudVwiO1xuaW1wb3J0IHsgY3JlYXRlQ29udGFjdFBhZ2UgfSBmcm9tIFwiLi9jb250YWN0XCI7XG5cbmNyZWF0ZUhvbWVQYWdlKCk7XG5cbmNvbnN0IGJ1dHRvbnMgPSAoZnVuY3Rpb24gKCkge1xuICBjb25zdCBidXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNidXR0b25zXCIpO1xuICBjb25zdCBkaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XG4gIGNvbnN0IGhvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBob21lLnRleHRDb250ZW50ID0gXCJIT01FXCI7XG4gIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBtZW51LnRleHRDb250ZW50ID0gXCJNRU5VXCI7XG4gIGNvbnN0IGNvbnRhY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBjb250YWN0LnRleHRDb250ZW50ID0gXCJDT05UQUNUXCI7XG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZGl2KTtcbiAgYnV0dG9ucy5hcHBlbmRDaGlsZChob21lKTtcbiAgYnV0dG9ucy5hcHBlbmRDaGlsZChtZW51KTtcbiAgYnV0dG9ucy5hcHBlbmRDaGlsZChjb250YWN0KTtcblxuICBmdW5jdGlvbiByZXNldERpdigpIHtcbiAgICB3aGlsZSAoZGl2LmZpcnN0Q2hpbGQpIHtcbiAgICAgIGRpdi5yZW1vdmVDaGlsZChkaXYuZmlyc3RDaGlsZCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHsgaG9tZSwgbWVudSwgY29udGFjdCwgcmVzZXREaXYgfTtcbn0pKCk7XG5cbmJ1dHRvbnMuaG9tZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBidXR0b25zLnJlc2V0RGl2KCk7XG4gIGNyZWF0ZUhvbWVQYWdlKCk7XG59KTtcblxuYnV0dG9ucy5tZW51LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIGJ1dHRvbnMucmVzZXREaXYoKTtcbiAgY3JlYXRlTWVudVBhZ2UoKTtcbn0pO1xuXG5idXR0b25zLmNvbnRhY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgYnV0dG9ucy5yZXNldERpdigpO1xuICBjcmVhdGVDb250YWN0UGFnZSgpO1xufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=