webpackJsonp([0,3],{

/***/ 2:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_normalize_css__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_normalize_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_normalize_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_scss__ = __webpack_require__(3);
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
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(1)))

/***/ }),

/***/ 3:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 34:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_normalize_css__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_normalize_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_normalize_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__works_scss__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__works_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__works_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__about_about__ = __webpack_require__(2);




// let slider = require('./slider/slider');

var someVar = 1111;

console.log(someVar);

// var data1 = [{
//   title: 'Project 1',
//   image: './images/slide1.png',
//   link: '#',
//   tags: ['HTML' , 'CSS', 'JAVASCRIPT'],
//   num: '1',
// },
// {
//   title: 'Project 2',
//   image: './images/slide2.png',
//   link: '#',
//   tags: ['HTML' , 'CSS', 'JAVASCRIPT'],
//   num: '2',
// },
// {
//   title: 'Project 3',
//   image: './images/slide3.png',
//   link: '#',
//   tags: ['HTML' , 'CSS', 'JAVASCRIPT', 'Vue'],
//   num: '3',
// },
// {
//   title: 'Project 4',
//   image: './images/slide4.png',
//   link: '#',
//   tags: ['HTML' , 'CSS', 'JAVASCRIPT', 'NodeJS'],
//   num: '4',
// },
// {
//   title: 'Project 5',
//   image: './images/slide1.png',
//   link: '#',
//   tags: ['HTML' , 'CSS', 'JAVASCRIPT'],
//   num: '5',
// },
// ];





/***/ }),

/***/ 35:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

},[34]);