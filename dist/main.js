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

  const box = document.createElement("div");
  box.classList.add("box_for_p");
  const p = document.createElement("p");
  p.classList.add("contact_p");
  const email = "REALEMAIL@gmail.com";
  const phoneNum = "929 - 123 - 123 - 123 - 343";
  p.textContent = `You can order by sending a message on ${email} or by calling on ${phoneNum}.`;
  box.appendChild(p);
  div.appendChild(box);
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
  const divForImg = document.createElement("div");
  divForImg.classList.add("divForImg");
  const image = document.createElement("img");
  image.classList.add("home_image");
  image.src = "./pictures/rest.jpg";
  const para = document.createElement("p");
  para.textContent = `
  Matija's restaurant is a culinary haven where flavors dance on your palate, leaving you in awe of each delectable bite.
  From the moment you step through the door, Matija's restaurant transforms dining into a gastronomic adventure, where every dish is a masterpiece.
  `;
  divForImg.appendChild(image);
  content.appendChild(header);
  content.appendChild(divForImg);
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
  home.classList.add("home");
  home.textContent = "HOME";
  const menu = document.createElement("button");
  menu.classList.add("menu");
  menu.textContent = "MENU";
  const contact = document.createElement("button");
  contact.classList.add("contact");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyREFBMkQsT0FBTyxtQkFBbUIsU0FBUztBQUM5RjtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ2hCTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDbEJPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7VUM1RUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7O0FDTndDO0FBQ0E7QUFDTTs7QUFFOUMscURBQWM7O0FBRWQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxXQUFXO0FBQ1gsQ0FBQzs7QUFFRDtBQUNBO0FBQ0EsRUFBRSxxREFBYztBQUNoQixDQUFDOztBQUVEO0FBQ0E7QUFDQSxFQUFFLHFEQUFjO0FBQ2hCLENBQUM7O0FBRUQ7QUFDQTtBQUNBLEVBQUUsMkRBQWlCO0FBQ25CLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9qZWN0LXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9jb250YWN0LmpzIiwid2VicGFjazovL3Byb2plY3QtcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXJlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9wcm9qZWN0LXJlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9wcm9qZWN0LXJlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Byb2plY3QtcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBjcmVhdGVDb250YWN0UGFnZSgpIHtcbiAgY29uc3QgZGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gIGhlYWRlci50ZXh0Q29udGVudCA9IFwiQ29udGFjdFwiO1xuICBkaXYuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChkaXYpO1xuXG4gIGNvbnN0IGJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGJveC5jbGFzc0xpc3QuYWRkKFwiYm94X2Zvcl9wXCIpO1xuICBjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIHAuY2xhc3NMaXN0LmFkZChcImNvbnRhY3RfcFwiKTtcbiAgY29uc3QgZW1haWwgPSBcIlJFQUxFTUFJTEBnbWFpbC5jb21cIjtcbiAgY29uc3QgcGhvbmVOdW0gPSBcIjkyOSAtIDEyMyAtIDEyMyAtIDEyMyAtIDM0M1wiO1xuICBwLnRleHRDb250ZW50ID0gYFlvdSBjYW4gb3JkZXIgYnkgc2VuZGluZyBhIG1lc3NhZ2Ugb24gJHtlbWFpbH0gb3IgYnkgY2FsbGluZyBvbiAke3Bob25lTnVtfS5gO1xuICBib3guYXBwZW5kQ2hpbGQocCk7XG4gIGRpdi5hcHBlbmRDaGlsZChib3gpO1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUhvbWVQYWdlKCkge1xuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gIGhlYWRlci50ZXh0Q29udGVudCA9IFwiTWF0aWphJ3MgUmVzdGF1cmFudFwiO1xuICBjb25zdCBkaXZGb3JJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBkaXZGb3JJbWcuY2xhc3NMaXN0LmFkZChcImRpdkZvckltZ1wiKTtcbiAgY29uc3QgaW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICBpbWFnZS5jbGFzc0xpc3QuYWRkKFwiaG9tZV9pbWFnZVwiKTtcbiAgaW1hZ2Uuc3JjID0gXCIuL3BpY3R1cmVzL3Jlc3QuanBnXCI7XG4gIGNvbnN0IHBhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgcGFyYS50ZXh0Q29udGVudCA9IGBcbiAgTWF0aWphJ3MgcmVzdGF1cmFudCBpcyBhIGN1bGluYXJ5IGhhdmVuIHdoZXJlIGZsYXZvcnMgZGFuY2Ugb24geW91ciBwYWxhdGUsIGxlYXZpbmcgeW91IGluIGF3ZSBvZiBlYWNoIGRlbGVjdGFibGUgYml0ZS5cbiAgRnJvbSB0aGUgbW9tZW50IHlvdSBzdGVwIHRocm91Z2ggdGhlIGRvb3IsIE1hdGlqYSdzIHJlc3RhdXJhbnQgdHJhbnNmb3JtcyBkaW5pbmcgaW50byBhIGdhc3Ryb25vbWljIGFkdmVudHVyZSwgd2hlcmUgZXZlcnkgZGlzaCBpcyBhIG1hc3RlcnBpZWNlLlxuICBgO1xuICBkaXZGb3JJbWcuYXBwZW5kQ2hpbGQoaW1hZ2UpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKGhlYWRlcik7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZGl2Rm9ySW1nKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChwYXJhKTtcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBjcmVhdGVNZW51UGFnZSgpIHtcbiAgY29uc3QgYm94MSA9IGNyZWF0ZURpdkJveCgpO1xuICBjb25zdCBib3gyID0gY3JlYXRlRGl2Qm94KCk7XG4gIGNvbnN0IGJveDMgPSBjcmVhdGVEaXZCb3goKTtcbiAgLyogICovXG4gIGNvbnN0IGRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICBoZWFkZXIudGV4dENvbnRlbnQgPSBcIk1lbnVcIjtcbiAgZGl2LmFwcGVuZENoaWxkKGhlYWRlcik7XG4gIC8qICAqL1xuICBjb25zdCBhcHBldGl6ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gIGFwcGV0aXplci50ZXh0Q29udGVudCA9IFwiQXBwZXRpemVyXCI7XG4gIGRpdi5hcHBlbmRDaGlsZChhcHBldGl6ZXIpO1xuICBjb25zdCB0aXRsZTEgPSBjcmVhdGVUaXRsZSgpO1xuICB0aXRsZTEudGV4dENvbnRlbnQgPSBcInZlZ2V0YWJsZSBzYWxhZCBzZXJ2ZWQgb24gd2hpdGUgYm93bFwiO1xuICBjb25zdCBpbWcxID0gY3JlYXRlSW1hZ2UoKTtcbiAgaW1nMS5zcmMgPSBcIi4vcGljdHVyZXMvMS5qcGdcIjtcbiAgY29uc3QgcDEgPSBjcmVhdGVQYXJhZ3JhcGgoKTtcbiAgcDEudGV4dENvbnRlbnQgPVxuICAgIFwiSW5kdWxnZSBpbiB0aGUgdmlicmFudCBmbGF2b3JzIG9mIG91ciBmcmVzaCB2ZWdldGFibGUgc2FsYWQsIGFydGZ1bGx5IHByZXNlbnRlZCBpbiBhIHByaXN0aW5lIHdoaXRlIGJvd2wsIGEgY3VsaW5hcnkgbWFzdGVycGllY2UgdGhhdCBkZWxpZ2h0cyB0aGUgc2Vuc2VzLlwiO1xuXG4gIGNvbnN0IHRpdGxlMiA9IGNyZWF0ZVRpdGxlKCk7XG4gIHRpdGxlMi50ZXh0Q29udGVudCA9IFwiZ3JlZW4gdmVnZXRhYmxlIG9uIGJyb3duIGNlcmFtaWMgcGxhdGVcIjtcbiAgY29uc3QgaW1nMiA9IGNyZWF0ZUltYWdlKCk7XG4gIGltZzIuc3JjID0gXCIuL3BpY3R1cmVzLzIuanBnXCI7XG4gIGNvbnN0IHAyID0gY3JlYXRlUGFyYWdyYXBoKCk7XG4gIHAyLnRleHRDb250ZW50ID1cbiAgICBcIlNhdm9yIHRoZSBjcmlzcCBnb29kbmVzcyBvZiBvdXIgZ3JlZW4gdmVnZXRhYmxlIG1lZGxleSwgZWxlZ2FudGx5IGFycmFuZ2VkIG9uIGEgcnVzdGljIGJyb3duIGNlcmFtaWMgcGxhdGUsIGEgc3ltcGhvbnkgb2YgY29sb3JzIGFuZCB0ZXh0dXJlcyB0aGF0IGVtYm9kaWVzIGJvdGggdGFzdGUgYW5kIHZpc3VhbCBhcHBlYWwuXCI7XG5cbiAgYm94MS5hcHBlbmRDaGlsZCh0aXRsZTEpO1xuICBib3gxLmFwcGVuZENoaWxkKGltZzEpO1xuICBib3gxLmFwcGVuZENoaWxkKHAxKTtcbiAgYm94Mi5hcHBlbmRDaGlsZCh0aXRsZTIpO1xuICBib3gyLmFwcGVuZENoaWxkKGltZzIpO1xuICBib3gyLmFwcGVuZENoaWxkKHAyKTtcblxuICBkaXYuYXBwZW5kQ2hpbGQoYm94MSk7XG4gIGRpdi5hcHBlbmRDaGlsZChib3gyKTtcblxuICBjb25zdCBtYWluRGlzaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgbWFpbkRpc2gudGV4dENvbnRlbnQgPSBcIk1haW4gZGlzaFwiO1xuICBkaXYuYXBwZW5kQ2hpbGQobWFpbkRpc2gpO1xuICBjb25zdCB0aXRsZTMgPSBjcmVhdGVUaXRsZSgpO1xuICB0aXRsZTMudGV4dENvbnRlbnQgPSBcIlZlZ2FuIHBpenphXCI7XG4gIGNvbnN0IGltZzMgPSBjcmVhdGVJbWFnZSgpO1xuICBpbWczLnNyYyA9IFwiLi9waWN0dXJlcy8zLmpwZ1wiO1xuICBjb25zdCBwMyA9IGNyZWF0ZVBhcmFncmFwaCgpO1xuICBwMy50ZXh0Q29udGVudCA9XG4gICAgXCJFeHBlcmllbmNlIHRoZSBwZXJmZWN0IGhhcm1vbnkgb2YgcGxhbnQtYmFzZWQgZGVsaWdodCB3aXRoIG91ciB2ZWdhbiBwaXp6YSwgY3JhZnRlZCB0byBwZXJmZWN0aW9uIGFuZCBzZXJ2ZWQgb24gYSBnb2xkZW4tYnJvd24gY3J1c3QgdGhhdCBjYXB0dXJlcyB0aGUgZXNzZW5jZSBvZiBmbGF2b3Igd2l0aG91dCBjb21wcm9taXNlXCI7XG4gIGJveDMuYXBwZW5kQ2hpbGQodGl0bGUzKTtcbiAgYm94My5hcHBlbmRDaGlsZChpbWczKTtcbiAgYm94My5hcHBlbmRDaGlsZChwMyk7XG4gIGRpdi5hcHBlbmRDaGlsZChib3gzKTtcblxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGRpdik7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZURpdkJveCgpIHtcbiAgY29uc3QgYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgYm94LmNsYXNzTGlzdC5hZGQoXCJib3hcIik7XG4gIHJldHVybiBib3g7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVRpdGxlKCkge1xuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgcmV0dXJuIHRpdGxlO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVJbWFnZSgpIHtcbiAgY29uc3QgaW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICByZXR1cm4gaW1hZ2U7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVBhcmFncmFwaCgpIHtcbiAgY29uc3QgcGFyYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICByZXR1cm4gcGFyYTtcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgY3JlYXRlSG9tZVBhZ2UgfSBmcm9tIFwiLi9ob21lXCI7XG5pbXBvcnQgeyBjcmVhdGVNZW51UGFnZSB9IGZyb20gXCIuL21lbnVcIjtcbmltcG9ydCB7IGNyZWF0ZUNvbnRhY3RQYWdlIH0gZnJvbSBcIi4vY29udGFjdFwiO1xuXG5jcmVhdGVIb21lUGFnZSgpO1xuXG5jb25zdCBidXR0b25zID0gKGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgYnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYnV0dG9uc1wiKTtcbiAgY29uc3QgZGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xuICBjb25zdCBob21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgaG9tZS5jbGFzc0xpc3QuYWRkKFwiaG9tZVwiKTtcbiAgaG9tZS50ZXh0Q29udGVudCA9IFwiSE9NRVwiO1xuICBjb25zdCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgbWVudS5jbGFzc0xpc3QuYWRkKFwibWVudVwiKTtcbiAgbWVudS50ZXh0Q29udGVudCA9IFwiTUVOVVwiO1xuICBjb25zdCBjb250YWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgY29udGFjdC5jbGFzc0xpc3QuYWRkKFwiY29udGFjdFwiKTtcbiAgY29udGFjdC50ZXh0Q29udGVudCA9IFwiQ09OVEFDVFwiO1xuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGRpdik7XG4gIGJ1dHRvbnMuYXBwZW5kQ2hpbGQoaG9tZSk7XG4gIGJ1dHRvbnMuYXBwZW5kQ2hpbGQobWVudSk7XG4gIGJ1dHRvbnMuYXBwZW5kQ2hpbGQoY29udGFjdCk7XG5cbiAgZnVuY3Rpb24gcmVzZXREaXYoKSB7XG4gICAgd2hpbGUgKGRpdi5maXJzdENoaWxkKSB7XG4gICAgICBkaXYucmVtb3ZlQ2hpbGQoZGl2LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7IGhvbWUsIG1lbnUsIGNvbnRhY3QsIHJlc2V0RGl2IH07XG59KSgpO1xuXG5idXR0b25zLmhvbWUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgYnV0dG9ucy5yZXNldERpdigpO1xuICBjcmVhdGVIb21lUGFnZSgpO1xufSk7XG5cbmJ1dHRvbnMubWVudS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBidXR0b25zLnJlc2V0RGl2KCk7XG4gIGNyZWF0ZU1lbnVQYWdlKCk7XG59KTtcblxuYnV0dG9ucy5jb250YWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIGJ1dHRvbnMucmVzZXREaXYoKTtcbiAgY3JlYXRlQ29udGFjdFBhZ2UoKTtcbn0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9