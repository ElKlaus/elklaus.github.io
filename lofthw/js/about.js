webpackJsonp([3],[
/* 0 */,
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_normalize_css__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_normalize_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_normalize_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_scss__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__about_scss__);





$(document).ready(function()
{
  totalMenu.init();
});


var totalMenu =  
{
   
  init:function()
  {
    this.menuToggle();
  },
  menuToggle:function() {
    $('.hamburger').click(function(){
      $(this).toggleClass('is-active');
      $('.total-menu').toggleClass('total-menu-hidden');
      console.log('adfaf');
    });
  },
};
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(3)))

/***/ }),
/* 2 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
],[1]);