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

/***/ "./js/modules/accordion.js":
/*!*********************************!*\
  !*** ./js/modules/accordion.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initAccordion)\n/* harmony export */ });\nfunction initAccordion() {\n  const accordionList = document.querySelectorAll('.js-accordion dt');\n  const activeClass = 'active';\n\n  function activeAccordion() {\n    this.classList.toggle(activeClass);\n    this.nextElementSibling.classList.toggle(activeClass);\n  }\n\n  if (accordionList.length) {\n    accordionList[0].classList.add(activeClass);\n    accordionList[0].nextElementSibling.classList.add(activeClass);\n\n    accordionList.forEach((item) => {\n      item.addEventListener('click', activeAccordion);\n    });\n  }\n}\n\n\n//# sourceURL=webpack://fantastic-beasts/./js/modules/accordion.js?");

/***/ }),

/***/ "./js/modules/animation-numbers.js":
/*!*****************************************!*\
  !*** ./js/modules/animation-numbers.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initAnimaNumbers)\n/* harmony export */ });\nfunction initAnimaNumbers() {\n  function animaNumbers() {\n    const numbers = document.querySelectorAll('[data-number]');\n\n    numbers.forEach((item) => {\n      const number = +item.innerText;\n      const increment = number / 100;\n      let start = 0;\n      const timer = setInterval(() => {\n        start += increment;\n\n        item.innerText = Math.floor(start);\n\n        if (start > number) {\n          item.innerText = number;\n          clearInterval(timer);\n        }\n      }, 25 * Math.random());\n    });\n  }\n\n  let observer;\n\n  function handleMutation(mutation) {\n    if (mutation[0].target.classList.contains('active')) {\n      observer.disconnect();\n      animaNumbers();\n    }\n  }\n\n  const observeTarget = document.querySelector('.numbers');\n  observer = new MutationObserver(handleMutation);\n  observer.observe(observeTarget, { attributes: true });\n}\n\n\n//# sourceURL=webpack://fantastic-beasts/./js/modules/animation-numbers.js?");

/***/ }),

/***/ "./js/modules/animation-scroll.js":
/*!****************************************!*\
  !*** ./js/modules/animation-scroll.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initAnimationScroll)\n/* harmony export */ });\nfunction initAnimationScroll() {\n  const sections = document.querySelectorAll('.js-scroll');\n  const windowHalf = window.innerHeight * 0.6;\n\n  function animaScroll() {\n    sections.forEach((item) => {\n      const sectionTop = item.getBoundingClientRect().top;\n      const isSectionVisible = sectionTop - windowHalf < 0;\n\n      if (isSectionVisible) {\n        item.classList.add('active');\n      } else if (item.classList.contains('active')) {\n        item.classList.remove('active');\n      }\n    });\n  }\n\n  if (sections.length) {\n    animaScroll();\n\n    window.addEventListener('scroll', animaScroll);\n  }\n}\n\n\n//# sourceURL=webpack://fantastic-beasts/./js/modules/animation-scroll.js?");

/***/ }),

/***/ "./js/modules/dropdown-menu.js":
/*!*************************************!*\
  !*** ./js/modules/dropdown-menu.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initDropdownMenu)\n/* harmony export */ });\n/* harmony import */ var _outside_click_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./outside-click.js */ \"./js/modules/outside-click.js\");\n\n\nfunction initDropdownMenu() {\n  const dropdownMenus = document.querySelectorAll('[data-dropdown]');\n\n  function handleClick(event) {\n    event.preventDefault();\n\n    this.classList.toggle('active');\n\n    (0,_outside_click_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, ['touch', 'click'], () => {\n      this.classList.remove('active');\n    });\n  }\n\n  dropdownMenus.forEach((item) => {\n    ['touch', 'click'].forEach((userEvent) => {\n      item.addEventListener(userEvent, handleClick, { passive: true });\n    });\n  });\n}\n\n\n//# sourceURL=webpack://fantastic-beasts/./js/modules/dropdown-menu.js?");

/***/ }),

/***/ "./js/modules/fetch-beasts.js":
/*!************************************!*\
  !*** ./js/modules/fetch-beasts.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initFetchBeasts)\n/* harmony export */ });\n/* harmony import */ var _animation_numbers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./animation-numbers.js */ \"./js/modules/animation-numbers.js\");\n\n\nasync function initFetchBeasts() {\n  async function fetchBeasts(url) {\n    const fetchData = await fetch(url);\n    const response = await fetchData.json();\n    const numbersGrid = document.querySelector('.numbers-grid');\n\n    function createBeast(beast) {\n      const div = document.createElement('div');\n      div.classList.add('number-beast');\n      div.innerHTML = `\n                <h3>${beast.specie}</h3>\n                <span data-number>${beast.total}</span>\n            `;\n\n      return div;\n    }\n\n    response.forEach((beast) => {\n      const divAnimal = createBeast(beast);\n\n      numbersGrid.appendChild(divAnimal);\n    });\n\n    (0,_animation_numbers_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n  }\n\n  fetchBeasts('./api-beasts.json');\n}\n\n\n//# sourceURL=webpack://fantastic-beasts/./js/modules/fetch-beasts.js?");

/***/ }),

/***/ "./js/modules/fetch-bitcoin.js":
/*!*************************************!*\
  !*** ./js/modules/fetch-bitcoin.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initFetchBitcoin)\n/* harmony export */ });\nfunction initFetchBitcoin() {\n  const btc = document.querySelector('.price-btc');\n\n  async function fetchBitcoin() {\n    const fetchData = await fetch('https://blockchain.info/ticker');\n    const response = await fetchData.json();\n    btc.innerText = (100 / response.BRL.sell).toFixed(5);\n  }\n\n  try {\n    fetchBitcoin();\n  } catch (error) {\n    // eslint-disable-next-line no-console\n    console.error(error.message);\n  }\n}\n\n\n//# sourceURL=webpack://fantastic-beasts/./js/modules/fetch-bitcoin.js?");

/***/ }),

/***/ "./js/modules/menu-mobile.js":
/*!***********************************!*\
  !*** ./js/modules/menu-mobile.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initMenuMobile)\n/* harmony export */ });\n/* harmony import */ var _outside_click_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./outside-click.js */ \"./js/modules/outside-click.js\");\n\n\nfunction initMenuMobile() {\n  const menuButton = document.querySelector('[data-menu=\"button\"]');\n  const menuList = document.querySelector('[data-menu=\"list\"]');\n  const eventos = ['click', 'touch'];\n\n  function openMenu() {\n    menuList.classList.add('active');\n    menuButton.classList.add('active');\n\n    (0,_outside_click_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(menuList, eventos, () => {\n      menuList.classList.remove('active');\n      menuButton.classList.remove('active');\n    });\n  }\n\n  if (menuButton) {\n    eventos.forEach((item) =>\n      menuButton.addEventListener(item, openMenu, { passive: true })\n    );\n  }\n}\n\n\n//# sourceURL=webpack://fantastic-beasts/./js/modules/menu-mobile.js?");

/***/ }),

/***/ "./js/modules/modal.js":
/*!*****************************!*\
  !*** ./js/modules/modal.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initModal)\n/* harmony export */ });\nfunction initModal() {\n  const container = document.querySelector('[data-modal=\"container\"]');\n  const buttonOpen = document.querySelector('[data-modal=\"open\"]');\n  const buttonClose = document.querySelector('[data-modal=\"close\"]');\n\n  function toggleModal(event) {\n    event.preventDefault();\n    container.classList.toggle('active');\n  }\n\n  function clickOut(event) {\n    if (event.target === this) {\n      toggleModal(event);\n    }\n  }\n\n  function pressEsc(event) {\n    if (container.classList.contains('active') && event.key === 'Escape') {\n      container.classList.toggle('active');\n    }\n  }\n\n  if (container && buttonOpen && buttonClose) {\n    buttonOpen.addEventListener('click', toggleModal);\n    buttonClose.addEventListener('click', toggleModal);\n    container.addEventListener('click', clickOut);\n    window.addEventListener('keydown', pressEsc);\n  }\n}\n\n\n//# sourceURL=webpack://fantastic-beasts/./js/modules/modal.js?");

/***/ }),

/***/ "./js/modules/operation.js":
/*!*********************************!*\
  !*** ./js/modules/operation.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initOperation)\n/* harmony export */ });\nfunction initOperation() {\n  const operation = document.querySelector('[data-week]');\n  const daysWeek = operation.dataset.week.split(', ').map(Number);\n  const hours = operation.dataset.hour.split(', ').map(Number);\n  const now = new Date();\n  const dayWeek = now.getDay();\n  const hour = now.getHours();\n\n  const dayWeekOpen = daysWeek.indexOf(dayWeek) !== -1;\n  const hourOpen = hour >= hours[0] && hour < hours[1];\n\n  if (dayWeekOpen && hourOpen) {\n    operation.classList.add('open');\n  }\n}\n\n\n//# sourceURL=webpack://fantastic-beasts/./js/modules/operation.js?");

/***/ }),

/***/ "./js/modules/outside-click.js":
/*!*************************************!*\
  !*** ./js/modules/outside-click.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ outsideClick)\n/* harmony export */ });\nfunction outsideClick(element, events, callback) {\n  const html = document.documentElement;\n  const outside = 'data-outside';\n\n  function handleOutsideClick(event) {\n    if (!element.contains(event.target)) {\n      element.removeAttribute(outside);\n\n      events.forEach((item) => {\n        html.removeEventListener(item, handleOutsideClick);\n      });\n\n      callback();\n    }\n  }\n\n  if (!element.hasAttribute(outside)) {\n    events.forEach((item) => {\n      setTimeout(() => {\n        html.addEventListener(item, handleOutsideClick);\n      }, 0);\n    });\n\n    element.setAttribute(outside, '');\n  }\n}\n\n\n//# sourceURL=webpack://fantastic-beasts/./js/modules/outside-click.js?");

/***/ }),

/***/ "./js/modules/scroll-smooth.js":
/*!*************************************!*\
  !*** ./js/modules/scroll-smooth.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initScrollSmooth)\n/* harmony export */ });\nfunction initScrollSmooth() {\n  const intenalLinks = document.querySelectorAll('.js-menu a[href^=\"#\"]');\n\n  function scrollToSection(event) {\n    event.preventDefault();\n\n    const href = event.currentTarget.getAttribute('href');\n    const section = document.querySelector(href);\n\n    section.scrollIntoView({\n      behavior: 'smooth',\n      block: 'start',\n    });\n  }\n\n  if (intenalLinks.length) {\n    intenalLinks.forEach((item) => {\n      item.addEventListener('click', scrollToSection);\n    });\n  }\n}\n\n\n//# sourceURL=webpack://fantastic-beasts/./js/modules/scroll-smooth.js?");

/***/ }),

/***/ "./js/modules/tab-nav.js":
/*!*******************************!*\
  !*** ./js/modules/tab-nav.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initTabNav)\n/* harmony export */ });\nfunction initTabNav() {\n  const tabMenu = document.querySelectorAll('.js-tabmenu li');\n  const tabContent = document.querySelectorAll('.js-tabcontent section');\n\n  if (tabMenu.length && tabContent.length) {\n    tabContent[0].classList.add('active');\n\n    const activeTab = (index) => {\n      tabContent.forEach((item) => {\n        item.classList.remove('active');\n      });\n\n      tabContent[index].classList.add('active');\n    };\n\n    tabMenu.forEach((item, index) => {\n      item.addEventListener('click', () => {\n        activeTab(index);\n      });\n    });\n  }\n}\n\n\n//# sourceURL=webpack://fantastic-beasts/./js/modules/tab-nav.js?");

/***/ }),

/***/ "./js/modules/tooltip.js":
/*!*******************************!*\
  !*** ./js/modules/tooltip.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initTooltip)\n/* harmony export */ });\nfunction initTooltip() {\n  const tooltips = document.querySelectorAll('[data-tooltip]');\n  const tooltipBox = document.createElement('div');\n\n  function createTooltipBox(element) {\n    const text = element.getAttribute('aria-label');\n    tooltipBox.classList.add('tooltip');\n    tooltipBox.innerText = text;\n    document.body.appendChild(tooltipBox);\n    return tooltipBox;\n  }\n\n  const onMouseMove = {\n    handleEvent(event) {\n      this.tooltipBox.style.top = `${event.pageY + 20}px`;\n      this.tooltipBox.style.left = `${event.pageX + 20}px`;\n    },\n  };\n\n  const onMouseLeave = {\n    handleEvent() {\n      this.tooltipBox.remove();\n      this.element.removeEventListener('mouseleave', onMouseLeave);\n      this.element.removeEventListener('mousemove', onMouseMove);\n    },\n  };\n\n  function onMouseOver() {\n    const tooltip = createTooltipBox(this);\n\n    onMouseMove.tooltipBox = tooltip;\n    this.addEventListener('mousemove', onMouseMove);\n\n    onMouseLeave.tooltipBox = tooltip;\n    onMouseLeave.element = this;\n    this.addEventListener('mouseleave', onMouseLeave);\n  }\n\n  tooltips.forEach((item) => {\n    item.addEventListener('mouseover', onMouseOver);\n  });\n}\n\n\n//# sourceURL=webpack://fantastic-beasts/./js/modules/tooltip.js?");

/***/ }),

/***/ "./js/scripts.js":
/*!***********************!*\
  !*** ./js/scripts.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_animation_scroll_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/animation-scroll.js */ \"./js/modules/animation-scroll.js\");\n/* harmony import */ var _modules_scroll_smooth_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/scroll-smooth.js */ \"./js/modules/scroll-smooth.js\");\n/* harmony import */ var _modules_accordion_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/accordion.js */ \"./js/modules/accordion.js\");\n/* harmony import */ var _modules_tab_nav_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/tab-nav.js */ \"./js/modules/tab-nav.js\");\n/* harmony import */ var _modules_modal_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/modal.js */ \"./js/modules/modal.js\");\n/* harmony import */ var _modules_tooltip_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/tooltip.js */ \"./js/modules/tooltip.js\");\n/* harmony import */ var _modules_dropdown_menu_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/dropdown-menu.js */ \"./js/modules/dropdown-menu.js\");\n/* harmony import */ var _modules_menu_mobile_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/menu-mobile.js */ \"./js/modules/menu-mobile.js\");\n/* harmony import */ var _modules_operation_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/operation.js */ \"./js/modules/operation.js\");\n/* harmony import */ var _modules_fetch_beasts_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/fetch-beasts.js */ \"./js/modules/fetch-beasts.js\");\n/* harmony import */ var _modules_fetch_bitcoin_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/fetch-bitcoin.js */ \"./js/modules/fetch-bitcoin.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n(0,_modules_animation_scroll_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n(0,_modules_scroll_smooth_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n(0,_modules_accordion_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n(0,_modules_tab_nav_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n(0,_modules_modal_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n(0,_modules_tooltip_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\n(0,_modules_dropdown_menu_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\n(0,_modules_menu_mobile_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"])();\n(0,_modules_operation_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"])();\n(0,_modules_fetch_beasts_js__WEBPACK_IMPORTED_MODULE_9__[\"default\"])();\n(0,_modules_fetch_bitcoin_js__WEBPACK_IMPORTED_MODULE_10__[\"default\"])();\n\n\n//# sourceURL=webpack://fantastic-beasts/./js/scripts.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./js/scripts.js");
/******/ 	
/******/ })()
;