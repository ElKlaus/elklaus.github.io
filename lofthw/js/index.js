webpackJsonp([2],{

/***/ 4:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_normalize_css__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_normalize_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_normalize_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index_scss__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__index_scss__);


// import menuMacker from '../../components/menu/menu';
// let menu = menuMacker(['Главная','Обо мне','Блог'], 'menu');
// document.body.appendChild(menu);

// console.log('in index.js');
// console.log($);


$(document).ready(function()
{
  portpro.init();
});


var portpro =  
{
   
  init:function()
  {
    this.flipFunc();
  },
  flipFunc:function() {
    let 
      flipContainer = $('.flip-container'),
      button = $('.welcome__button_link');


    button.on( 'click' , function() {
      flipContainer.toggleClass('hover');
    });
  },
};
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(3)))

/***/ }),

/***/ 6:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

},[4]);