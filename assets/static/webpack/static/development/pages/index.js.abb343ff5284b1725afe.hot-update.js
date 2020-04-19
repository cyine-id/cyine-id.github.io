webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/Homepage/Page2.jsx":
false,

/***/ "./node_modules/rc-scroll-anim/es/EventDispatcher.js":
false,

/***/ "./node_modules/rc-scroll-anim/es/ScrollElement.js":
false,

/***/ "./node_modules/rc-scroll-anim/es/ScrollLink.js":
false,

/***/ "./node_modules/rc-scroll-anim/es/ScrollOverPack.js":
false,

/***/ "./node_modules/rc-scroll-anim/es/ScrollParallax.js":
false,

/***/ "./node_modules/rc-scroll-anim/es/ScrollScreen.js":
false,

/***/ "./node_modules/rc-scroll-anim/es/index.js":
false,

/***/ "./node_modules/rc-scroll-anim/es/util.js":
false,

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var enquire_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! enquire-js */ "./node_modules/enquire-js/main.js");
/* harmony import */ var enquire_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(enquire_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_MainLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/MainLayout */ "./components/MainLayout.jsx");
/* harmony import */ var _components_Homepage_Banner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Homepage/Banner */ "./components/Homepage/Banner.jsx");
/* harmony import */ var _components_Homepage_Page1__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Homepage/Page1 */ "./components/Homepage/Page1.jsx");
/* harmony import */ var _assets_homepage_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/homepage/style */ "./assets/homepage/style.js");
var _this = undefined,
    _jsxFileName = "D:\\Development\\ReactJS\\cyineid\\pages\\index.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




 // import Page2 from "../components/Homepage/Page2";



var Homepage = function Homepage() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      isMobile = _useState[0],
      setMobile = _useState[1]; // let isMobile;


  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    Object(enquire_js__WEBPACK_IMPORTED_MODULE_1__["enquireScreen"])(function (b) {
      setMobile(b);
    });
  }, []);
  return __jsx(_components_MainLayout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    pageTitle: "Homepage",
    isMobile: isMobile || false,
    className: "home-wrapper",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }
  }, __jsx(_components_Homepage_Banner__WEBPACK_IMPORTED_MODULE_3__["default"], {
    isMobile: isMobile || false,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 13
    }
  }), __jsx(_components_Homepage_Page1__WEBPACK_IMPORTED_MODULE_4__["default"], {
    isMobile: isMobile || false,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Homepage);

/***/ })

})
//# sourceMappingURL=index.js.abb343ff5284b1725afe.hot-update.js.map