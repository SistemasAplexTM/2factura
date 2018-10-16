webpackJsonp([15],{

/***/ 1615:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1721)
}
var normalizeComponent = __webpack_require__(6)
/* script */
var __vue_script__ = __webpack_require__(1723)
/* template */
var __vue_template__ = __webpack_require__(1738)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-6a7e3b2d"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/js/views/users/Img.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6a7e3b2d", Component.options)
  } else {
    hotAPI.reload("data-v-6a7e3b2d", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 1721:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1722);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(8)("4822159a", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-6a7e3b2d\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Img.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-6a7e3b2d\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Img.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1722:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, "\n.avatar[data-v-6a7e3b2d]{\n  width: 200px;\n  height: 200px;\n  border-radius: 50%;\n}\n", ""]);

// exports


/***/ }),

/***/ 1723:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_ImageCropper__ = __webpack_require__(1724);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_ImageCropper___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_ImageCropper__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_PanThumb__ = __webpack_require__(1733);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_PanThumb___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_PanThumb__);
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'avatarUpload',
  components: { ImageCropper: __WEBPACK_IMPORTED_MODULE_0__components_ImageCropper___default.a, PanThumb: __WEBPACK_IMPORTED_MODULE_1__components_PanThumb___default.a },
  data: function data() {
    return {
      imagecropperShow: false,
      imagecropperKey: 0,
      image: 'https://cdn.icon-icons.com/icons2/20/PNG/256/businessapplication_edit_male_user_thepencil_theclient_negocio_2321.png'
    };
  },

  methods: {
    cropSuccess: function cropSuccess(resData) {
      this.imagecropperShow = false;
      this.imagecropperKey = this.imagecropperKey + 1;
      this.image = resData.files.avatar;
    },
    close: function close() {
      this.imagecropperShow = false;
    }
  }
});

/***/ }),

/***/ 1724:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1725)
}
var normalizeComponent = __webpack_require__(6)
/* script */
var __vue_script__ = __webpack_require__(1727)
/* template */
var __vue_template__ = __webpack_require__(1732)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/js/components/ImageCropper/index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4a985340", Component.options)
  } else {
    hotAPI.reload("data-v-4a985340", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 1725:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1726);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(8)("981ee69c", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-4a985340\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-4a985340\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1726:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, "\n@charset \"UTF-8\";\n@-webkit-keyframes vicp_progress {\n0% {\r\n    background-position-y: 0;\n}\n100% {\r\n    background-position-y: 40px;\n}\n}\n@keyframes vicp_progress {\n0% {\r\n    background-position-y: 0;\n}\n100% {\r\n    background-position-y: 40px;\n}\n}\n@-webkit-keyframes vicp {\n0% {\r\n    opacity: 0;\r\n    -webkit-transform: scale(0) translatey(-60px);\r\n            transform: scale(0) translatey(-60px);\n}\n100% {\r\n    opacity: 1;\r\n    -webkit-transform: scale(1) translatey(0);\r\n            transform: scale(1) translatey(0);\n}\n}\n@keyframes vicp {\n0% {\r\n    opacity: 0;\r\n    -webkit-transform: scale(0) translatey(-60px);\r\n            transform: scale(0) translatey(-60px);\n}\n100% {\r\n    opacity: 1;\r\n    -webkit-transform: scale(1) translatey(0);\r\n            transform: scale(1) translatey(0);\n}\n}\n.vue-image-crop-upload {\r\n  position: fixed;\r\n  display: block;\r\n  -webkit-box-sizing: border-box;\r\n          box-sizing: border-box;\r\n  z-index: 10000;\r\n  top: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  background-color: rgba(0, 0, 0, 0.65);\r\n  -webkit-tap-highlight-color: transparent;\r\n  -moz-tap-highlight-color: transparent;\n}\n.vue-image-crop-upload .vicp-wrap {\r\n    -webkit-box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.23);\r\n            box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.23);\r\n    position: fixed;\r\n    display: block;\r\n    -webkit-box-sizing: border-box;\r\n            box-sizing: border-box;\r\n    z-index: 10000;\r\n    top: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    right: 0;\r\n    margin: auto;\r\n    width: 600px;\r\n    height: 330px;\r\n    padding: 25px;\r\n    background-color: #fff;\r\n    border-radius: 2px;\r\n    -webkit-animation: vicp 0.12s ease-in;\r\n            animation: vicp 0.12s ease-in;\n}\n.vue-image-crop-upload .vicp-wrap .vicp-close {\r\n      position: absolute;\r\n      right: -30px;\r\n      top: -30px;\n}\n.vue-image-crop-upload .vicp-wrap .vicp-close .vicp-icon4 {\r\n        position: relative;\r\n        display: block;\r\n        width: 30px;\r\n        height: 30px;\r\n        cursor: pointer;\r\n        -webkit-transition: -webkit-transform 0.18s;\r\n        transition: -webkit-transform 0.18s;\r\n        transition: transform 0.18s;\r\n        transition: transform 0.18s, -webkit-transform 0.18s;\r\n        -webkit-transform: rotate(0);\r\n                transform: rotate(0);\n}\n.vue-image-crop-upload .vicp-wrap .vicp-close .vicp-icon4::after, .vue-image-crop-upload .vicp-wrap .vicp-close .vicp-icon4::before {\r\n          -webkit-box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.23);\r\n                  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.23);\r\n          content: '';\r\n          position: absolute;\r\n          top: 12px;\r\n          left: 4px;\r\n          width: 20px;\r\n          height: 3px;\r\n          -webkit-transform: rotate(45deg);\r\n                  transform: rotate(45deg);\r\n          background-color: #fff;\n}\n.vue-image-crop-upload .vicp-wrap .vicp-close .vicp-icon4::after {\r\n          -webkit-transform: rotate(-45deg);\r\n                  transform: rotate(-45deg);\n}\n.vue-image-crop-upload .vicp-wrap .vicp-close .vicp-icon4:hover {\r\n          -webkit-transform: rotate(90deg);\r\n                  transform: rotate(90deg);\n}\n.vue-image-crop-upload .vicp-wrap .vicp-step1 .vicp-drop-area {\r\n      position: relative;\r\n      -webkit-box-sizing: border-box;\r\n              box-sizing: border-box;\r\n      padding: 35px;\r\n      height: 170px;\r\n      background-color: rgba(0, 0, 0, 0.03);\r\n      text-align: center;\r\n      border: 1px dashed rgba(0, 0, 0, 0.08);\r\n      overflow: hidden;\n}\n.vue-image-crop-upload .vicp-wrap .vicp-step1 .vicp-drop-area .vicp-icon1 {\r\n        display: block;\r\n        margin: 0 auto 6px;\r\n        width: 42px;\r\n        height: 42px;\r\n        overflow: hidden;\n}\n.vue-image-crop-upload .vicp-wrap .vicp-step1 .vicp-drop-area .vicp-icon1 .vicp-icon1-arrow {\r\n          display: block;\r\n          margin: 0 auto;\r\n          width: 0;\r\n          height: 0;\r\n          border-bottom: 14.7px solid rgba(0, 0, 0, 0.3);\r\n          border-left: 14.7px solid transparent;\r\n          border-right: 14.7px solid transparent;\n}\n.vue-image-crop-upload .vicp-wrap .vicp-step1 .vicp-drop-area .vicp-icon1 .vicp-icon1-body {\r\n          display: block;\r\n          width: 12.6px;\r\n          height: 14.7px;\r\n          margin: 0 auto;\r\n          background-color: rgba(0, 0, 0, 0.3);\n}\n.vue-image-crop-upload .vicp-wrap .vicp-step1 .vicp-drop-area .vicp-icon1 .vicp-icon1-bottom {\r\n          -webkit-box-sizing: border-box;\r\n                  box-sizing: border-box;\r\n          display: block;\r\n          height: 12.6px;\r\n          border: 6px solid rgba(0, 0, 0, 0.3);\r\n          border-top: none;\n}\n.vue-image-crop-upload .vicp-wrap .vicp-step1 .vicp-drop-area .vicp-hint {\r\n        display: block;\r\n        padding: 15px;\r\n        font-size: 14px;\r\n        color: #666;\r\n        line-height: 30px;\n}\n.vue-image-crop-upload .vicp-wrap .vicp-step1 .vicp-drop-area .vicp-no-supported-hint {\r\n        display: block;\r\n        position: absolute;\r\n        top: 0;\r\n        left: 0;\r\n        padding: 30px;\r\n        width: 100%;\r\n        height: 60px;\r\n        line-height: 30px;\r\n        background-color: #eee;\r\n        text-align: center;\r\n        color: #666;\r\n        font-size: 14px;\n}\n.vue-image-crop-upload .vicp-wrap .vicp-step1 .vicp-drop-area:hover {\r\n        cursor: pointer;\r\n        border-color: rgba(0, 0, 0, 0.1);\r\n        background-color: rgba(0, 0, 0, 0.05);\n}\n.vue-image-crop-upload .vicp-wrap .vicp-step2 .vicp-crop {\r\n      overflow: hidden;\n}\n.vue-image-crop-upload .vicp-wrap .vicp-step2 .vicp-crop .vicp-crop-left {\r\n        float: left;\n}\n.vue-image-crop-upload .vicp-wrap .vicp-step2 .vicp-crop .vicp-crop-left .vicp-img-container {\r\n          position: relative;\r\n          display: block;\r\n          width: 240px;\r\n          height: 180px;\r\n          background-color: #e5e5e0;\r\n          overflow: hidden;\n}\n.vue-image-crop-upload .vicp-wrap .vicp-step2 .vicp-crop .vicp-crop-left .vicp-img-container .vicp-img {\r\n            position: absolute;\r\n            display: block;\r\n            cursor: move;\r\n            -webkit-user-select: none;\r\n               -moz-user-select: none;\r\n                -ms-user-select: none;\r\n                    user-select: none;\n}\n.vue-image-crop-upload .vicp-wrap .vicp-step2 .vicp-crop .vicp-crop-left .vicp-img-container .vicp-img-shade {\r\n            -webkit-box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.18);\r\n                    box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.18);\r\n            position: absolute;\r\n            background-color: rgba(241, 242, 243, 0.8);\n}\n.vue-image-crop-upload .vicp-wrap .vicp-step2 .vicp-crop .vicp-crop-left .vicp-img-container .vicp-img-shade.vicp-img-shade-1 {\r\n              top: 0;\r\n              left: 0;\n}\n.vue-image-crop-upload .vicp-wrap .vicp-step2 .vicp-crop .vicp-crop-left .vicp-img-container .vicp-img-shade.vicp-img-shade-2 {\r\n              bottom: 0;\r\n              right: 0;\n}\n.vue-image-crop-upload .vicp-wrap .vicp-step2 .vicp-crop .vicp-crop-left .vicp-rotate {\r\n          position: relative;\r\n          width: 240px;\r\n          height: 18px;\n}\n.vue-image-crop-upload .vicp-wrap .vicp-step2 .vicp-crop .vicp-crop-left .vicp-rotate i {\r\n            display: block;\r\n            width: 18px;\r\n            height: 18px;\r\n            border-radius: 100%;\r\n            line-height: 18px;\r\n            text-align: center;\r\n            font-size: 12px;\r\n            font-weight: bold;\r\n            background-color: rgba(0, 0, 0, 0.08);\r\n            color: #fff;\r\n            overflow: hidden;\n}\n.vue-image-crop-upload .vicp-wrap .vicp-step2 .vicp-crop .vicp-crop-left .vicp-rotate i:hover {\r\n              -webkit-box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.12);\r\n                      box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.12);\r\n              cursor: pointer;\r\n              background-color: rgba(0, 0, 0, 0.14);\n}\n.vue-image-crop-upload .vicp-wrap .vicp-step2 .vicp-crop .vicp-crop-left .vicp-rotate i:first-child {\r\n              float: left;\n}\n.vue-image-crop-upload .vicp-wrap .vicp-step2 .vicp-crop .vicp-crop-left .vicp-rotate i:last-child {\r\n              float: right;\n}\n.vue-image-crop-upload .vicp-wrap .vicp-step2 .vicp-crop .vicp-crop-left .vicp-range {\r\n          position: relative;\r\n          margin: 30px 0 10px 0;\r\n          width: 240px;\r\n          height: 18px;\n}\n.vue-image-crop-upload .vicp-wrap .vicp-step2 .vicp-crop .vicp-crop-left .vicp-range .vicp-icon5,\r\n          .vue-image-crop-upload .vicp-wrap .vicp-step2 .vicp-crop .vicp-crop-left .vicp-range .vicp-icon6 {\r\n            position: absolute;\r\n            top: 0;\r\n            width: 18px;\r\n            height: 18px;\r\n            border-radius: 100%;\r\n            background-color: rgba(0, 0, 0, 0.08);\n}\n.vue-image-crop-upload .vicp-wrap .vicp-step2 .vicp-crop .vicp-crop-left .vicp-range .vicp-icon5:hover,\r\n            .vue-image-crop-upload .vicp-wrap .vicp-step2 .vicp-crop .vicp-crop-left .vicp-range .vicp-icon6:hover {\r\n              -webkit-box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.12);\r\n                      box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.12);\r\n              cursor: pointer;\r\n              background-color: rgba(0, 0, 0, 0.14);\n}\n.vue-image-crop-upload .vicp-wrap .vicp-step2 .vicp-crop .vicp-crop-left .vicp-range .vicp-icon5 {\r\n            left: 0;\n}\n.vue-image-crop-upload .vicp-wrap .vicp-step2 .vicp-crop .vicp-crop-left .vicp-range .vicp-icon5::before {\r\n              position: absolute;\r\n              content: '';\r\n              display: block;\r\n              left: 3px;\r\n              top: 8px;\r\n              width: 12px;\r\n              height: 2px;\r\n              background-color: #fff;\n}\n.vue-image-crop-upload .vicp-wrap .vicp-step2 .vicp-crop .vicp-crop-left .vicp-range .vicp-icon6 {\r\n            right: 0;\n}\n.vue-image-crop-upload .vicp-wrap .vicp-step2 .vicp-crop .vicp-crop-left .vicp-range .vicp-icon6::before {\r\n              position: absolute;\r\n              content: '';\r\n              display: block;\r\n              left: 3px;\r\n              top: 8px;\r\n              width: 12px;\r\n              height: 2px;\r\n              background-color: #fff;\n}\n.vue-image-crop-upload .vicp-wrap .vicp-step2 .vicp-crop .vicp-crop-left .vicp-range .vicp-icon6::after {\r\n              position: absolute;\r\n              content: '';\r\n              display: block;\r\n              top: 3px;\r\n              left: 8px;\r\n              width: 2px;\r\n              height: 12px;\r\n              background-color: #fff;\n}\n.vue-image-crop-upload .vicp-wrap .vicp-step2 .vicp-crop .vicp-crop-left .vicp-range input[type=range] {\r\n            display: block;\r\n            padding-top: 5px;\r\n            margin: 0 auto;\r\n            width: 180px;\r\n            height: 8px;\r\n            vertical-align: top;\r\n            background: transparent;\r\n            -webkit-appearance: none;\r\n               -moz-appearance: none;\r\n                    appearance: none;\r\n            cursor: pointer;\r\n            /* 滑块\r\n               ---------------------------------------------------------------*/\r\n            /* 轨道\r\n               ---------------------------------------------------------------*/\n}\n.vue-image-crop-upload .vicp-wrap .vicp-step2 .vicp-crop .vicp-crop-left .vicp-range input[type=range]:focus {\r\n              outline: none;\n}\n.vue-image-crop-upload .vicp-wrap .vicp-step2 .vicp-crop .vicp-crop-left .vicp-range input[type=range]::-webkit-slider-thumb {\r\n              -webkit-box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.18);\r\n                      box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.18);\r\n              -webkit-appearance: none;\r\n                      appearance: none;\r\n              margin-top: -3px;\r\n              width: 12px;\r\n              height: 12px;\r\n              background-color: #61c091;\r\n              border-radius: 100%;\r\n              border: none;\r\n              -webkit-transition: 0.2s;\r\n              transition: 0.2s;\n}\n.vue-image-crop-upload .vicp-wrap .vicp-step2 .vicp-crop .vicp-crop-left .vicp-range input[type=range]::-moz-range-thumb {\r\n              box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.18);\r\n              -moz-appearance: none;\r\n                   appearance: none;\r\n              width: 12px;\r\n              height: 12px;\r\n              background-color: #61c091;\r\n              border-radius: 100%;\r\n              border: none;\r\n              -webkit-transition: 0.2s;\r\n              transition: 0.2s;\n}\n.vue-image-crop-upload .vicp-wrap .vicp-step2 .vicp-crop .vicp-crop-left .vicp-range input[type=range]::-ms-thumb {\r\n              box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.18);\r\n              appearance: none;\r\n              width: 12px;\r\n              height: 12px;\r\n              background-color: #61c091;\r\n              border: none;\r\n              border-radius: 100%;\r\n              -webkit-transition: 0.2s;\r\n              transition: 0.2s;\n}\n.vue-image-crop-upload .vicp-wrap .vicp-step2 .vicp-crop .vicp-crop-left .vicp-range input[type=range]:active::-moz-range-thumb {\r\n              box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.23);\r\n              width: 14px;\r\n              height: 14px;\n}\n.vue-image-crop-upload .vicp-wrap .vicp-step2 .vicp-crop .vicp-crop-left .vicp-range input[type=range]:active::-ms-thumb {\r\n              box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.23);\r\n              width: 14px;\r\n              height: 14px;\n}\n.vue-image-crop-upload .vicp-wrap .vicp-step2 .vicp-crop .vicp-crop-left .vicp-range input[type=range]:active::-webkit-slider-thumb {\r\n              -webkit-box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.23);\r\n                      box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.23);\r\n              margin-top: -4px;\r\n              width: 14px;\r\n              height: 14px;\n}\n.vue-image-crop-upload .vicp-wrap .vicp-step2 .vicp-crop .vicp-crop-left .vicp-range input[type=range]::-webkit-slider-runnable-track {\r\n              -webkit-box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.12);\r\n                      box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.12);\r\n              width: 100%;\r\n              height: 6px;\r\n              cursor: pointer;\r\n              border-radius: 2px;\r\n              border: none;\r\n              background-color: rgba(68, 170, 119, 0.3);\n}\n.vue-image-crop-upload .vicp-wrap .vicp-step2 .vicp-crop .vicp-crop-left .vicp-range input[type=range]::-moz-range-track {\r\n              box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.12);\r\n              width: 100%;\r\n              height: 6px;\r\n              cursor: pointer;\r\n              border-radius: 2px;\r\n              border: none;\r\n              background-color: rgba(68, 170, 119, 0.3);\n}\n.vue-image-crop-upload .vicp-wrap .vicp-step2 .vicp-crop .vicp-crop-left .vicp-range input[type=range]::-ms-track {\r\n              box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.12);\r\n              width: 100%;\r\n              cursor: pointer;\r\n              background: transparent;\r\n              border-color: transparent;\r\n              color: transparent;\r\n              height: 6px;\r\n              border-radius: 2px;\r\n              border: none;\n}\n.vue-image-crop-upload .vicp-wrap .vicp-step2 .vicp-crop .vicp-crop-left .vicp-range input[type=range]::-ms-fill-lower {\r\n              background-color: rgba(68, 170, 119, 0.3);\n}\n.vue-image-crop-upload .vicp-wrap .vicp-step2 .vicp-crop .vicp-crop-left .vicp-range input[type=range]::-ms-fill-upper {\r\n              background-color: rgba(68, 170, 119, 0.15);\n}\n.vue-image-crop-upload .vicp-wrap .vicp-step2 .vicp-crop .vicp-crop-left .vicp-range input[type=range]:focus::-webkit-slider-runnable-track {\r\n              background-color: rgba(68, 170, 119, 0.5);\n}\n.vue-image-crop-upload .vicp-wrap .vicp-step2 .vicp-crop .vicp-crop-left .vicp-range input[type=range]:focus::-moz-range-track {\r\n              background-color: rgba(68, 170, 119, 0.5);\n}\n.vue-image-crop-upload .vicp-wrap .vicp-step2 .vicp-crop .vicp-crop-left .vicp-range input[type=range]:focus::-ms-fill-lower {\r\n              background-color: rgba(68, 170, 119, 0.45);\n}\n.vue-image-crop-upload .vicp-wrap .vicp-step2 .vicp-crop .vicp-crop-left .vicp-range input[type=range]:focus::-ms-fill-upper {\r\n              background-color: rgba(68, 170, 119, 0.25);\n}\n.vue-image-crop-upload .vicp-wrap .vicp-step2 .vicp-crop .vicp-crop-right {\r\n        float: right;\n}\n.vue-image-crop-upload .vicp-wrap .vicp-step2 .vicp-crop .vicp-crop-right .vicp-preview {\r\n          height: 150px;\r\n          overflow: hidden;\n}\n.vue-image-crop-upload .vicp-wrap .vicp-step2 .vicp-crop .vicp-crop-right .vicp-preview .vicp-preview-item {\r\n            position: relative;\r\n            padding: 5px;\r\n            width: 100px;\r\n            height: 100px;\r\n            float: left;\r\n            margin-right: 16px;\n}\n.vue-image-crop-upload .vicp-wrap .vicp-step2 .vicp-crop .vicp-crop-right .vicp-preview .vicp-preview-item span {\r\n              position: absolute;\r\n              bottom: -30px;\r\n              width: 100%;\r\n              font-size: 14px;\r\n              color: #bbb;\r\n              display: block;\r\n              text-align: center;\n}\n.vue-image-crop-upload .vicp-wrap .vicp-step2 .vicp-crop .vicp-crop-right .vicp-preview .vicp-preview-item img {\r\n              position: absolute;\r\n              display: block;\r\n              top: 0;\r\n              bottom: 0;\r\n              left: 0;\r\n              right: 0;\r\n              margin: auto;\r\n              padding: 3px;\r\n              background-color: #fff;\r\n              border: 1px solid rgba(0, 0, 0, 0.15);\r\n              overflow: hidden;\r\n              -webkit-user-select: none;\r\n                 -moz-user-select: none;\r\n                  -ms-user-select: none;\r\n                      user-select: none;\n}\n.vue-image-crop-upload .vicp-wrap .vicp-step2 .vicp-crop .vicp-crop-right .vicp-preview .vicp-preview-item.vicp-preview-item-circle {\r\n              margin-right: 0;\n}\n.vue-image-crop-upload .vicp-wrap .vicp-step2 .vicp-crop .vicp-crop-right .vicp-preview .vicp-preview-item.vicp-preview-item-circle img {\r\n                border-radius: 100%;\n}\n.vue-image-crop-upload .vicp-wrap .vicp-step3 .vicp-upload {\r\n      position: relative;\r\n      -webkit-box-sizing: border-box;\r\n              box-sizing: border-box;\r\n      padding: 35px;\r\n      height: 170px;\r\n      background-color: rgba(0, 0, 0, 0.03);\r\n      text-align: center;\r\n      border: 1px dashed #ddd;\n}\n.vue-image-crop-upload .vicp-wrap .vicp-step3 .vicp-upload .vicp-loading {\r\n        display: block;\r\n        padding: 15px;\r\n        font-size: 16px;\r\n        color: #999;\r\n        line-height: 30px;\n}\n.vue-image-crop-upload .vicp-wrap .vicp-step3 .vicp-upload .vicp-progress-wrap {\r\n        margin-top: 12px;\r\n        background-color: rgba(0, 0, 0, 0.08);\r\n        border-radius: 3px;\n}\n.vue-image-crop-upload .vicp-wrap .vicp-step3 .vicp-upload .vicp-progress-wrap .vicp-progress {\r\n          position: relative;\r\n          display: block;\r\n          height: 5px;\r\n          border-radius: 3px;\r\n          background-color: #4a7;\r\n          -webkit-box-shadow: 0 2px 6px 0 rgba(68, 170, 119, 0.3);\r\n                  box-shadow: 0 2px 6px 0 rgba(68, 170, 119, 0.3);\r\n          -webkit-transition: width 0.15s linear;\r\n          transition: width 0.15s linear;\r\n          background-image: linear-gradient(-45deg, rgba(255, 255, 255, 0.2) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.2) 50%, rgba(255, 255, 255, 0.2) 75%, transparent 75%, transparent);\r\n          background-size: 40px 40px;\r\n          -webkit-animation: vicp_progress 0.5s linear infinite;\r\n                  animation: vicp_progress 0.5s linear infinite;\n}\n.vue-image-crop-upload .vicp-wrap .vicp-step3 .vicp-upload .vicp-progress-wrap .vicp-progress::after {\r\n            content: '';\r\n            position: absolute;\r\n            display: block;\r\n            top: -3px;\r\n            right: -3px;\r\n            width: 9px;\r\n            height: 9px;\r\n            border: 1px solid rgba(245, 246, 247, 0.7);\r\n            -webkit-box-shadow: 0 1px 4px 0 rgba(68, 170, 119, 0.7);\r\n                    box-shadow: 0 1px 4px 0 rgba(68, 170, 119, 0.7);\r\n            border-radius: 100%;\r\n            background-color: #4a7;\n}\n.vue-image-crop-upload .vicp-wrap .vicp-step3 .vicp-upload .vicp-error,\r\n      .vue-image-crop-upload .vicp-wrap .vicp-step3 .vicp-upload .vicp-success {\r\n        height: 100px;\r\n        line-height: 100px;\n}\n.vue-image-crop-upload .vicp-wrap .vicp-operate {\r\n      position: absolute;\r\n      right: 20px;\r\n      bottom: 20px;\n}\n.vue-image-crop-upload .vicp-wrap .vicp-operate a {\r\n        position: relative;\r\n        float: left;\r\n        display: block;\r\n        margin-left: 10px;\r\n        width: 100px;\r\n        height: 36px;\r\n        line-height: 36px;\r\n        text-align: center;\r\n        cursor: pointer;\r\n        font-size: 14px;\r\n        color: #4a7;\r\n        border-radius: 2px;\r\n        overflow: hidden;\r\n        -webkit-user-select: none;\r\n           -moz-user-select: none;\r\n            -ms-user-select: none;\r\n                user-select: none;\n}\n.vue-image-crop-upload .vicp-wrap .vicp-operate a:hover {\r\n          background-color: rgba(0, 0, 0, 0.03);\n}\n.vue-image-crop-upload .vicp-wrap .vicp-error,\r\n    .vue-image-crop-upload .vicp-wrap .vicp-success {\r\n      display: block;\r\n      font-size: 14px;\r\n      line-height: 24px;\r\n      height: 24px;\r\n      color: #d10;\r\n      text-align: center;\r\n      vertical-align: top;\n}\n.vue-image-crop-upload .vicp-wrap .vicp-success {\r\n      color: #4a7;\n}\n.vue-image-crop-upload .vicp-wrap .vicp-icon3 {\r\n      position: relative;\r\n      display: inline-block;\r\n      width: 20px;\r\n      height: 20px;\r\n      top: 4px;\n}\n.vue-image-crop-upload .vicp-wrap .vicp-icon3::after {\r\n        position: absolute;\r\n        top: 3px;\r\n        left: 6px;\r\n        width: 6px;\r\n        height: 10px;\r\n        border-width: 0 2px 2px 0;\r\n        border-color: #4a7;\r\n        border-style: solid;\r\n        -webkit-transform: rotate(45deg);\r\n                transform: rotate(45deg);\r\n        content: '';\n}\n.vue-image-crop-upload .vicp-wrap .vicp-icon2 {\r\n      position: relative;\r\n      display: inline-block;\r\n      width: 20px;\r\n      height: 20px;\r\n      top: 4px;\n}\n.vue-image-crop-upload .vicp-wrap .vicp-icon2::after, .vue-image-crop-upload .vicp-wrap .vicp-icon2::before {\r\n        content: '';\r\n        position: absolute;\r\n        top: 9px;\r\n        left: 4px;\r\n        width: 13px;\r\n        height: 2px;\r\n        background-color: #d10;\r\n        -webkit-transform: rotate(45deg);\r\n                transform: rotate(45deg);\n}\n.vue-image-crop-upload .vicp-wrap .vicp-icon2::after {\r\n        -webkit-transform: rotate(-45deg);\r\n                transform: rotate(-45deg);\n}\n.e-ripple {\r\n  position: absolute;\r\n  border-radius: 100%;\r\n  background-color: rgba(0, 0, 0, 0.15);\r\n  background-clip: padding-box;\r\n  pointer-events: none;\r\n  -webkit-user-select: none;\r\n     -moz-user-select: none;\r\n      -ms-user-select: none;\r\n          user-select: none;\r\n  -webkit-transform: scale(0);\r\n          transform: scale(0);\r\n  opacity: 1;\n}\n.e-ripple.z-active {\r\n    opacity: 0;\r\n    -webkit-transform: scale(2);\r\n            transform: scale(2);\r\n    -webkit-transition: opacity 1.2s ease-out, -webkit-transform 0.6s ease-out;\r\n    transition: opacity 1.2s ease-out, -webkit-transform 0.6s ease-out;\r\n    transition: opacity 1.2s ease-out, transform 0.6s ease-out;\r\n    transition: opacity 1.2s ease-out, transform 0.6s ease-out, -webkit-transform 0.6s ease-out;\n}\r\n", ""]);

// exports


/***/ }),

/***/ 1727:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_request__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_language_js__ = __webpack_require__(1728);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_mimes_js__ = __webpack_require__(1729);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_data2blob_js__ = __webpack_require__(1730);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_effectRipple_js__ = __webpack_require__(1731);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* eslint-disable */


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };






/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    // 域，上传文件name，触发事件会带上（如果一个页面多个图片上传控件，可以做区分
    field: {
      type: String,
      'default': 'avatar'
    },
    // 原名key，类似于id，触发事件会带上（如果一个页面多个图片上传控件，可以做区分
    ki: {
      'default': 0
    },
    // 显示该控件与否
    value: {
      'default': true
    },
    // 上传地址
    url: {
      type: String,
      'default': ''
    },
    // 其他要上传文件附带的数据，对象格式
    params: {
      type: Object,
      'default': null
    },
    // Add custom headers
    headers: {
      type: Object,
      'default': null
    },
    // 剪裁图片的宽
    width: {
      type: Number,
      default: 200
    },
    // 剪裁图片的高
    height: {
      type: Number,
      default: 200
    },
    // 不显示旋转功能
    noRotate: {
      type: Boolean,
      default: true
    },
    // 不预览圆形图片
    noCircle: {
      type: Boolean,
      default: false
    },
    // 不预览方形图片
    noSquare: {
      type: Boolean,
      default: false
    },
    // 单文件大小限制
    maxSize: {
      type: Number,
      'default': 10240
    },
    // 语言类型
    langType: {
      type: String,
      'default': 'zh'
    },
    // 语言包
    langExt: {
      type: Object,
      'default': null
    },
    // 图片上传格式
    imgFormat: {
      type: String,
      'default': 'png'
    },
    // 是否支持跨域
    withCredentials: {
      type: Boolean,
      'default': false
    }
  },
  data: function data() {
    var that = this;
    var imgFormat = that.imgFormat,
        langType = that.langType,
        langExt = that.langExt,
        width = that.width,
        height = that.height;

    var isSupported = true;
    var allowImgFormat = ['jpg', 'png'];
    var tempImgFormat = allowImgFormat.indexOf(imgFormat) === -1 ? 'jpg' : imgFormat;
    var lang = __WEBPACK_IMPORTED_MODULE_1__utils_language_js__["a" /* default */][langType] ? __WEBPACK_IMPORTED_MODULE_1__utils_language_js__["a" /* default */][langType] : __WEBPACK_IMPORTED_MODULE_1__utils_language_js__["a" /* default */]['en'];
    var mime = __WEBPACK_IMPORTED_MODULE_2__utils_mimes_js__["a" /* default */][tempImgFormat];
    // 规范图片格式
    that.imgFormat = tempImgFormat;
    if (langExt) {
      Object.assign(lang, langExt);
    }
    if (typeof FormData !== 'function') {
      isSupported = false;
    }
    return {
      // 图片的mime
      mime: mime,
      // 语言包
      lang: lang,
      // 浏览器是否支持该控件
      isSupported: isSupported,
      // 浏览器是否支持触屏事件
      isSupportTouch: document.hasOwnProperty('ontouchstart'),
      // 步骤
      step: 1, // 1选择文件 2剪裁 3上传
      // 上传状态及进度
      loading: 0, // 0未开始 1正在 2成功 3错误
      progress: 0,
      // 是否有错误及错误信息
      hasError: false,
      errorMsg: '',
      // 需求图宽高比
      ratio: width / height,
      // 原图地址、生成图片地址
      sourceImg: null,
      sourceImgUrl: '',
      createImgUrl: '',
      // 原图片拖动事件初始值
      sourceImgMouseDown: {
        on: false,
        mX: 0, // 鼠标按下的坐标
        mY: 0,
        x: 0, // scale原图坐标
        y: 0
      },
      // 生成图片预览的容器大小
      previewContainer: {
        width: 100,
        height: 100
      },
      // 原图容器宽高
      sourceImgContainer: { // sic
        width: 240,
        height: 184 // 如果生成图比例与此一致会出现bug，先改成特殊的格式吧，哈哈哈
      },
      // 原图展示属性
      scale: {
        zoomAddOn: false, // 按钮缩放事件开启
        zoomSubOn: false, // 按钮缩放事件开启
        range: 1, // 最大100
        rotateLeft: false, // 按钮向左旋转事件开启
        rotateRight: false, // 按钮向右旋转事件开启
        degree: 0, // 旋转度数
        x: 0,
        y: 0,
        width: 0,
        height: 0,
        maxWidth: 0,
        maxHeight: 0,
        minWidth: 0, // 最宽
        minHeight: 0,
        naturalWidth: 0, // 原宽
        naturalHeight: 0
      }
    };
  },

  computed: {
    // 进度条样式
    progressStyle: function progressStyle() {
      var progress = this.progress;

      return {
        width: progress + '%'
      };
    },

    // 原图样式
    sourceImgStyle: function sourceImgStyle() {
      var scale = this.scale,
          sourceImgMasking = this.sourceImgMasking;

      var top = scale.y + sourceImgMasking.y + 'px';
      var left = scale.x + sourceImgMasking.x + 'px';
      return {
        top: top,
        left: left,
        width: scale.width + 'px',
        height: scale.height + 'px',
        transform: 'rotate(' + scale.degree + 'deg)', // 旋转时 左侧原始图旋转样式
        '-ms-transform': 'rotate(' + scale.degree + 'deg)', // 兼容IE9
        '-moz-transform': 'rotate(' + scale.degree + 'deg)', // 兼容FireFox
        '-webkit-transform': 'rotate(' + scale.degree + 'deg)', // 兼容Safari 和 chrome
        '-o-transform': 'rotate(' + scale.degree + 'deg)' // 兼容 Opera
      };
    },

    // 原图蒙版属性
    sourceImgMasking: function sourceImgMasking() {
      var width = this.width,
          height = this.height,
          ratio = this.ratio,
          sourceImgContainer = this.sourceImgContainer;

      var sic = sourceImgContainer;
      var sicRatio = sic.width / sic.height; // 原图容器宽高比
      var x = 0;
      var y = 0;
      var w = sic.width;
      var h = sic.height;
      var scale = 1;
      if (ratio < sicRatio) {
        scale = sic.height / height;
        w = sic.height * ratio;
        x = (sic.width - w) / 2;
      }
      if (ratio > sicRatio) {
        scale = sic.width / width;
        h = sic.width / ratio;
        y = (sic.height - h) / 2;
      }
      return {
        scale: scale, // 蒙版相对需求宽高的缩放
        x: x,
        y: y,
        width: w,
        height: h
      };
    },

    // 原图遮罩样式
    sourceImgShadeStyle: function sourceImgShadeStyle() {
      var sourceImgMasking = this.sourceImgMasking,
          sourceImgContainer = this.sourceImgContainer;

      var sic = sourceImgContainer;
      var sim = sourceImgMasking;
      var w = sim.width == sic.width ? sim.width : (sic.width - sim.width) / 2;
      var h = sim.height == sic.height ? sim.height : (sic.height - sim.height) / 2;
      return {
        width: w + 'px',
        height: h + 'px'
      };
    },
    previewStyle: function previewStyle() {
      var width = this.width,
          height = this.height,
          ratio = this.ratio,
          previewContainer = this.previewContainer;

      var pc = previewContainer;
      var w = pc.width;
      var h = pc.height;
      var pcRatio = w / h;
      if (ratio < pcRatio) {
        w = pc.height * ratio;
      }
      if (ratio > pcRatio) {
        h = pc.width / ratio;
      }
      return {
        width: w + 'px',
        height: h + 'px'
      };
    }
  },
  watch: {
    value: function value(newValue) {
      if (newValue && this.loading != 1) {
        this.reset();
      }
    }
  },
  methods: {
    // 点击波纹效果
    ripple: function ripple(e) {
      Object(__WEBPACK_IMPORTED_MODULE_4__utils_effectRipple_js__["a" /* default */])(e);
    },

    // 关闭控件
    off: function off() {
      var _this = this;

      setTimeout(function () {
        _this.$emit('input', false);
        _this.$emit('close');
        if (_this.step == 3 && _this.loading == 2) {
          _this.setStep(1);
        }
      }, 200);
    },

    // 设置步骤
    setStep: function setStep(no) {
      var _this2 = this;

      // 延时是为了显示动画效果呢，哈哈哈
      setTimeout(function () {
        _this2.step = no;
      }, 200);
    },

    /* 图片选择区域函数绑定
     ---------------------------------------------------------------*/
    preventDefault: function preventDefault(e) {
      e.preventDefault();
      return false;
    },
    handleClick: function handleClick(e) {
      if (this.loading !== 1) {
        if (e.target !== this.$refs.fileinput) {
          e.preventDefault();
          if (document.activeElement !== this.$refs) {
            this.$refs.fileinput.click();
          }
        }
      }
    },
    handleChange: function handleChange(e) {
      e.preventDefault();
      if (this.loading !== 1) {
        var files = e.target.files || e.dataTransfer.files;
        this.reset();
        if (this.checkFile(files[0])) {
          this.setSourceImg(files[0]);
        }
      }
    },

    /* ---------------------------------------------------------------*/
    // 检测选择的文件是否合适
    checkFile: function checkFile(file) {
      var that = this,
          lang = that.lang,
          maxSize = that.maxSize;
      // 仅限图片
      if (file.type.indexOf('image') === -1) {
        that.hasError = true;
        that.errorMsg = lang.error.onlyImg;
        return false;
      }
      // 超出大小
      if (file.size / 1024 > maxSize) {
        that.hasError = true;
        that.errorMsg = lang.error.outOfSize + maxSize + 'kb';
        return false;
      }
      return true;
    },

    // 重置控件
    reset: function reset() {
      var that = this;
      that.loading = 0;
      that.hasError = false;
      that.errorMsg = '';
      that.progress = 0;
    },

    // 设置图片源
    setSourceImg: function setSourceImg(file) {
      var that = this,
          fr = new FileReader();
      fr.onload = function (e) {
        that.sourceImgUrl = fr.result;
        that.startCrop();
      };
      fr.readAsDataURL(file);
    },

    // 剪裁前准备工作
    startCrop: function startCrop() {
      var that = this,
          width = that.width,
          height = that.height,
          ratio = that.ratio,
          scale = that.scale,
          sourceImgUrl = that.sourceImgUrl,
          sourceImgMasking = that.sourceImgMasking,
          lang = that.lang,
          sim = sourceImgMasking,
          img = new Image();

      img.src = sourceImgUrl;
      img.onload = function () {
        var nWidth = img.naturalWidth,
            nHeight = img.naturalHeight,
            nRatio = nWidth / nHeight,
            w = sim.width,
            h = sim.height,
            x = 0,
            y = 0;
        // 图片像素不达标
        if (nWidth < width || nHeight < height) {
          that.hasError = true;
          that.errorMsg = lang.error.lowestPx + width + '*' + height;
          return false;
        }
        if (ratio > nRatio) {
          h = w / nRatio;
          y = (sim.height - h) / 2;
        }
        if (ratio < nRatio) {
          w = h * nRatio;
          x = (sim.width - w) / 2;
        }
        scale.range = 0;
        scale.x = x;
        scale.y = y;
        scale.width = w;
        scale.height = h;
        scale.degree = 0;
        scale.minWidth = w;
        scale.minHeight = h;
        scale.maxWidth = nWidth * sim.scale;
        scale.maxHeight = nHeight * sim.scale;
        scale.naturalWidth = nWidth;
        scale.naturalHeight = nHeight;
        that.sourceImg = img;
        that.createImg();
        that.setStep(2);
      };
    },

    // 鼠标按下图片准备移动
    imgStartMove: function imgStartMove(e) {
      e.preventDefault();
      // 支持触摸事件，则鼠标事件无效
      if (this.isSupportTouch && !e.targetTouches) {
        return false;
      }
      var et = e.targetTouches ? e.targetTouches[0] : e,
          sourceImgMouseDown = this.sourceImgMouseDown,
          scale = this.scale,
          simd = sourceImgMouseDown;

      simd.mX = et.screenX;
      simd.mY = et.screenY;
      simd.x = scale.x;
      simd.y = scale.y;
      simd.on = true;
    },

    // 鼠标按下状态下移动，图片移动
    imgMove: function imgMove(e) {
      e.preventDefault();
      // 支持触摸事件，则鼠标事件无效
      if (this.isSupportTouch && !e.targetTouches) {
        return false;
      }
      var et = e.targetTouches ? e.targetTouches[0] : e,
          _sourceImgMouseDown = this.sourceImgMouseDown,
          on = _sourceImgMouseDown.on,
          mX = _sourceImgMouseDown.mX,
          mY = _sourceImgMouseDown.mY,
          x = _sourceImgMouseDown.x,
          y = _sourceImgMouseDown.y,
          scale = this.scale,
          sourceImgMasking = this.sourceImgMasking,
          sim = sourceImgMasking,
          nX = et.screenX,
          nY = et.screenY,
          dX = nX - mX,
          dY = nY - mY,
          rX = x + dX,
          rY = y + dY;

      if (!on) return;
      if (rX > 0) {
        rX = 0;
      }
      if (rY > 0) {
        rY = 0;
      }
      if (rX < sim.width - scale.width) {
        rX = sim.width - scale.width;
      }
      if (rY < sim.height - scale.height) {
        rY = sim.height - scale.height;
      }
      scale.x = rX;
      scale.y = rY;
    },

    // 按钮按下开始向右旋转
    startRotateRight: function startRotateRight(e) {
      var that = this,
          scale = that.scale;

      scale.rotateRight = true;
      function rotate() {
        if (scale.rotateRight) {
          var degree = ++scale.degree;
          that.createImg(degree);
          setTimeout(function () {
            rotate();
          }, 60);
        }
      }
      rotate();
    },

    // 按钮按下开始向右旋转
    startRotateLeft: function startRotateLeft(e) {
      var that = this,
          scale = that.scale;

      scale.rotateLeft = true;
      function rotate() {
        if (scale.rotateLeft) {
          var degree = --scale.degree;
          that.createImg(degree);
          setTimeout(function () {
            rotate();
          }, 60);
        }
      }
      rotate();
    },

    // 停止旋转
    endRotate: function endRotate() {
      var scale = this.scale;

      scale.rotateLeft = false;
      scale.rotateRight = false;
    },

    // 按钮按下开始放大
    startZoomAdd: function startZoomAdd(e) {
      var that = this,
          scale = that.scale;

      scale.zoomAddOn = true;
      function zoom() {
        if (scale.zoomAddOn) {
          var range = scale.range >= 100 ? 100 : ++scale.range;
          that.zoomImg(range);
          setTimeout(function () {
            zoom();
          }, 60);
        }
      }
      zoom();
    },

    // 按钮松开或移开取消放大
    endZoomAdd: function endZoomAdd(e) {
      this.scale.zoomAddOn = false;
    },

    // 按钮按下开始缩小
    startZoomSub: function startZoomSub(e) {
      var that = this,
          scale = that.scale;

      scale.zoomSubOn = true;
      function zoom() {
        if (scale.zoomSubOn) {
          var range = scale.range <= 0 ? 0 : --scale.range;
          that.zoomImg(range);
          setTimeout(function () {
            zoom();
          }, 60);
        }
      }
      zoom();
    },

    // 按钮松开或移开取消缩小
    endZoomSub: function endZoomSub(e) {
      var scale = this.scale;

      scale.zoomSubOn = false;
    },
    zoomChange: function zoomChange(e) {
      this.zoomImg(e.target.value);
    },

    // 缩放原图
    zoomImg: function zoomImg(newRange) {
      var that = this;
      var sourceImgMasking = this.sourceImgMasking,
          sourceImgMouseDown = this.sourceImgMouseDown,
          scale = this.scale;
      var maxWidth = scale.maxWidth,
          maxHeight = scale.maxHeight,
          minWidth = scale.minWidth,
          minHeight = scale.minHeight,
          width = scale.width,
          height = scale.height,
          x = scale.x,
          y = scale.y,
          range = scale.range;

      var sim = sourceImgMasking;
      // 蒙版宽高
      var sWidth = sim.width;
      var sHeight = sim.height;
      // 新宽高
      var nWidth = minWidth + (maxWidth - minWidth) * newRange / 100;
      var nHeight = minHeight + (maxHeight - minHeight) * newRange / 100;
      // 新坐标（根据蒙版中心点缩放）
      var nX = sWidth / 2 - nWidth / width * (sWidth / 2 - x);
      var nY = sHeight / 2 - nHeight / height * (sHeight / 2 - y);
      // 判断新坐标是否超过蒙版限制
      if (nX > 0) {
        nX = 0;
      }
      if (nY > 0) {
        nY = 0;
      }
      if (nX < sWidth - nWidth) {
        nX = sWidth - nWidth;
      }
      if (nY < sHeight - nHeight) {
        nY = sHeight - nHeight;
      }
      // 赋值处理
      scale.x = nX;
      scale.y = nY;
      scale.width = nWidth;
      scale.height = nHeight;
      scale.range = newRange;
      setTimeout(function () {
        if (scale.range == newRange) {
          that.createImg();
        }
      }, 300);
    },

    // 生成需求图片
    createImg: function createImg(e) {
      var that = this,
          mime = that.mime,
          sourceImg = that.sourceImg,
          _that$scale = that.scale,
          x = _that$scale.x,
          y = _that$scale.y,
          width = _that$scale.width,
          height = _that$scale.height,
          degree = _that$scale.degree,
          scale = that.sourceImgMasking.scale,
          canvas = that.$refs.canvas,
          ctx = canvas.getContext('2d');

      if (e) {
        // 取消鼠标按下移动状态
        that.sourceImgMouseDown.on = false;
      }
      canvas.width = that.width;
      canvas.height = that.height;
      ctx.clearRect(0, 0, that.width, that.height);
      // 将透明区域设置为白色底边
      ctx.fillStyle = '#fff';
      ctx.fillRect(0, 0, that.width, that.height);
      ctx.translate(that.width * 0.5, that.height * 0.5);
      ctx.rotate(Math.PI * degree / 180);
      ctx.translate(-that.width * 0.5, -that.height * 0.5);
      ctx.drawImage(sourceImg, x / scale, y / scale, width / scale, height / scale);
      that.createImgUrl = canvas.toDataURL(mime);
    },
    prepareUpload: function prepareUpload() {
      var url = this.url,
          createImgUrl = this.createImgUrl,
          field = this.field,
          ki = this.ki;

      this.$emit('crop-success', createImgUrl, field, ki);
      if (typeof url === 'string' && url) {
        this.upload();
      } else {
        this.off();
      }
    },

    // 上传图片
    upload: function upload() {
      var that = this,
          lang = this.lang,
          imgFormat = this.imgFormat,
          mime = this.mime,
          url = this.url,
          params = this.params,
          headers = this.headers,
          field = this.field,
          ki = this.ki,
          createImgUrl = this.createImgUrl,
          withCredentials = this.withCredentials,
          fmData = new FormData();

      fmData.append(field, Object(__WEBPACK_IMPORTED_MODULE_3__utils_data2blob_js__["a" /* default */])(createImgUrl, mime), field + '.' + imgFormat);
      // 添加其他参数
      if ((typeof params === 'undefined' ? 'undefined' : _typeof(params)) === 'object' && params) {
        Object.keys(params).forEach(function (k) {
          fmData.append(k, params[k]);
        });
      }
      // 监听进度回调
      var uploadProgress = function uploadProgress(event) {
        if (event.lengthComputable) {
          that.progress = 100 * Math.round(event.loaded) / event.total;
        }
      };
      // 上传文件
      that.reset();
      that.loading = 1;
      that.setStep(3);
      Object(__WEBPACK_IMPORTED_MODULE_0__utils_request__["a" /* default */])({
        url: url,
        method: 'post',
        data: fmData
      }).then(function (resData) {
        that.loading = 2;
        that.$emit('crop-upload-success', resData.data);
      }).catch(function (err) {
        if (that.value) {
          that.loading = 3;
          that.hasError = true;
          that.errorMsg = lang.fail;
          that.$emit('crop-upload-fail', err, field, ki);
        }
      });
    }
  },
  created: function created() {
    var _this3 = this;

    // 绑定按键esc隐藏此插件事件
    document.addEventListener('keyup', function (e) {
      if (_this3.value && (e.key == 'Escape' || e.keyCode == 27)) {
        _this3.off();
      }
    });
  }
});

/***/ }),

/***/ 1728:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  zh: {
    hint: '点击，或拖动图片至此处',
    loading: '正在上传……',
    noSupported: '浏览器不支持该功能，请使用IE10以上或其他现在浏览器！',
    success: '上传成功',
    fail: '图片上传失败',
    preview: '头像预览',
    btn: {
      off: '取消',
      close: '关闭',
      back: '上一步',
      save: '保存'
    },
    error: {
      onlyImg: '仅限图片格式',
      outOfSize: '单文件大小不能超过 ',
      lowestPx: '图片最低像素为（宽*高）：'
    }
  },
  'zh-tw': {
    hint: '點擊，或拖動圖片至此處',
    loading: '正在上傳……',
    noSupported: '瀏覽器不支持該功能，請使用IE10以上或其他現代瀏覽器！',
    success: '上傳成功',
    fail: '圖片上傳失敗',
    preview: '頭像預覽',
    btn: {
      off: '取消',
      close: '關閉',
      back: '上一步',
      save: '保存'
    },
    error: {
      onlyImg: '僅限圖片格式',
      outOfSize: '單文件大小不能超過 ',
      lowestPx: '圖片最低像素為（寬*高）：'
    }
  },
  en: {
    hint: 'Click or drag the file here to upload',
    loading: 'Uploading…',
    noSupported: 'Browser is not supported, please use IE10+ or other browsers',
    success: 'Upload success',
    fail: 'Upload failed',
    preview: 'Preview',
    btn: {
      off: 'Cancel',
      close: 'Close',
      back: 'Back',
      save: 'Save'
    },
    error: {
      onlyImg: 'Image only',
      outOfSize: 'Image exceeds size limit: ',
      lowestPx: 'Image\'s size is too low. Expected at least: '
    }
  },
  ro: {
    hint: 'Atinge sau trage fișierul aici',
    loading: 'Se încarcă',
    noSupported: 'Browser-ul tău nu suportă acest feature. Te rugăm încearcă cu alt browser.',
    success: 'S-a încărcat cu succes',
    fail: 'A apărut o problemă la încărcare',
    preview: 'Previzualizează',

    btn: {
      off: 'Anulează',
      close: 'Închide',
      back: 'Înapoi',
      save: 'Salvează'
    },

    error: {
      onlyImg: 'Doar imagini',
      outOfSize: 'Imaginea depășește limita de: ',
      loewstPx: 'Imaginea este prea mică; Minim: '
    }
  },
  ru: {
    hint: 'Нажмите, или перетащите файл в это окно',
    loading: 'Загружаю……',
    noSupported: 'Ваш браузер не поддерживается, пожалуйста, используйте IE10 + или другие браузеры',
    success: 'Загрузка выполнена успешно',
    fail: 'Ошибка загрузки',
    preview: 'Предпросмотр',
    btn: {
      off: 'Отменить',
      close: 'Закрыть',
      back: 'Назад',
      save: 'Сохранить'
    },
    error: {
      onlyImg: 'Только изображения',
      outOfSize: 'Изображение превышает предельный размер: ',
      lowestPx: 'Минимальный размер изображения: '
    }
  },
  'pt-br': {
    hint: 'Clique ou arraste o arquivo aqui para carregar',
    loading: 'Carregando…',
    noSupported: 'Browser não suportado, use o IE10+ ou outro browser',
    success: 'Sucesso ao carregar imagem',
    fail: 'Falha ao carregar imagem',
    preview: 'Pré-visualizar',
    btn: {
      off: 'Cancelar',
      close: 'Fechar',
      back: 'Voltar',
      save: 'Salvar'
    },
    error: {
      onlyImg: 'Apenas imagens',
      outOfSize: 'A imagem excede o limite de tamanho: ',
      lowestPx: 'O tamanho da imagem é muito pequeno. Tamanho mínimo: '
    }
  },
  fr: {
    hint: 'Cliquez ou glissez le fichier ici.',
    loading: 'Téléchargement…',
    noSupported: 'Votre navigateur n\'est pas supporté. Utilisez IE10 + ou un autre navigateur s\'il vous plaît.',
    success: 'Téléchargement réussit',
    fail: 'Téléchargement echoué',
    preview: 'Aperçu',
    btn: {
      off: 'Annuler',
      close: 'Fermer',
      back: 'Retour',
      save: 'Enregistrer'
    },
    error: {
      onlyImg: 'Image uniquement',
      outOfSize: 'L\'image sélectionnée dépasse la taille maximum: ',
      lowestPx: 'L\'image sélectionnée est trop petite. Dimensions attendues: '
    }
  },
  nl: {
    hint: 'Klik hier of sleep een afbeelding in dit vlak',
    loading: 'Uploaden…',
    noSupported: 'Je browser wordt helaas niet ondersteund. Gebruik IE10+ of een andere browser.',
    success: 'Upload succesvol',
    fail: 'Upload mislukt',
    preview: 'Voorbeeld',
    btn: {
      off: 'Annuleren',
      close: 'Sluiten',
      back: 'Terug',
      save: 'Opslaan'
    },
    error: {
      onlyImg: 'Alleen afbeeldingen',
      outOfSize: 'De afbeelding is groter dan: ',
      lowestPx: 'De afbeelding is te klein! Minimale afmetingen: '
    }
  },
  tr: {
    hint: 'Tıkla veya yüklemek istediğini buraya sürükle',
    loading: 'Yükleniyor…',
    noSupported: 'Tarayıcı desteklenmiyor, lütfen IE10+ veya farklı tarayıcı kullanın',
    success: 'Yükleme başarılı',
    fail: 'Yüklemede hata oluştu',
    preview: 'Önizle',
    btn: {
      off: 'İptal',
      close: 'Kapat',
      back: 'Geri',
      save: 'Kaydet'
    },
    error: {
      onlyImg: 'Sadece resim',
      outOfSize: 'Resim yükleme limitini aşıyor: ',
      lowestPx: 'Resmin boyutu çok küçük. En az olması gereken: '
    }
  },
  'es-MX': {
    hint: 'Selecciona o arrastra una imagen',
    loading: 'Subiendo...',
    noSupported: 'Tu navegador no es soportado, porfavor usa IE10+ u otros navegadores mas recientes',
    success: 'Subido exitosamente',
    fail: 'Sucedió un error',
    preview: 'Vista previa',
    btn: {
      off: 'Cancelar',
      close: 'Cerrar',
      back: 'Atras',
      save: 'Guardar'
    },
    error: {
      onlyImg: 'Unicamente imagenes',
      outOfSize: 'La imagen excede el tamaño maximo:',
      lowestPx: 'La imagen es demasiado pequeño. Se espera por lo menos:'
    }
  },
  de: {
    hint: 'Klick hier oder zieh eine Datei hier rein zum Hochladen',
    loading: 'Hochladen…',
    noSupported: 'Browser wird nicht unterstützt, bitte verwende IE10+ oder andere Browser',
    success: 'Upload erfolgreich',
    fail: 'Upload fehlgeschlagen',
    preview: 'Vorschau',
    btn: {
      off: 'Abbrechen',
      close: 'Schließen',
      back: 'Zurück',
      save: 'Speichern'
    },
    error: {
      onlyImg: 'Nur Bilder',
      outOfSize: 'Das Bild ist zu groß: ',
      lowestPx: 'Das Bild ist zu klein. Mindestens: '
    }
  },
  ja: {
    hint: 'クリック・ドラッグしてファイルをアップロード',
    loading: 'アップロード中...',
    noSupported: 'このブラウザは対応されていません。IE10+かその他の主要ブラウザをお使いください。',
    success: 'アップロード成功',
    fail: 'アップロード失敗',
    preview: 'プレビュー',
    btn: {
      off: 'キャンセル',
      close: '閉じる',
      back: '戻る',
      save: '保存'
    },
    error: {
      onlyImg: '画像のみ',
      outOfSize: '画像サイズが上限を超えています。上限: ',
      lowestPx: '画像が小さすぎます。最小サイズ: '
    }
  }
});

/***/ }),

/***/ 1729:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  'jpg': 'image/jpeg',
  'png': 'image/png',
  'gif': 'image/gif',
  'svg': 'image/svg+xml',
  'psd': 'image/photoshop'
});

/***/ }),

/***/ 1730:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * database64文件格式转换为2进制
 *
 * @param  {[String]} data dataURL 的格式为 “data:image/png;base64,****”,逗号之前都是一些说明性的文字，我们只需要逗号之后的就行了
 * @param  {[String]} mime [description]
 * @return {[blob]}      [description]
 */
/* harmony default export */ __webpack_exports__["a"] = (function (data, mime) {
  data = data.split(',')[1];
  data = window.atob(data);
  var ia = new Uint8Array(data.length);
  for (var i = 0; i < data.length; i++) {
    ia[i] = data.charCodeAt(i);
  }
  // canvas.toDataURL 返回的默认格式就是 image/png
  return new Blob([ia], {
    type: mime
  });
});

/***/ }),

/***/ 1731:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * 点击波纹效果
 *
 * @param  {[event]} e        [description]
 * @param  {[Object]} arg_opts [description]
 * @return {[bollean]}          [description]
 */
/* harmony default export */ __webpack_exports__["a"] = (function (e, arg_opts) {
  var opts = Object.assign({
    ele: e.target, // 波纹作用元素
    type: 'hit', // hit点击位置扩散center中心点扩展
    bgc: 'rgba(0, 0, 0, 0.15)' // 波纹颜色
  }, arg_opts);
  var target = opts.ele;
  if (target) {
    var rect = target.getBoundingClientRect();
    var ripple = target.querySelector('.e-ripple');
    if (!ripple) {
      ripple = document.createElement('span');
      ripple.className = 'e-ripple';
      ripple.style.height = ripple.style.width = Math.max(rect.width, rect.height) + 'px';
      target.appendChild(ripple);
    } else {
      ripple.className = 'e-ripple';
    }
    switch (opts.type) {
      case 'center':
        ripple.style.top = rect.height / 2 - ripple.offsetHeight / 2 + 'px';
        ripple.style.left = rect.width / 2 - ripple.offsetWidth / 2 + 'px';
        break;
      default:
        ripple.style.top = e.pageY - rect.top - ripple.offsetHeight / 2 - document.body.scrollTop + 'px';
        ripple.style.left = e.pageX - rect.left - ripple.offsetWidth / 2 - document.body.scrollLeft + 'px';
    }
    ripple.style.backgroundColor = opts.bgc;
    ripple.className = 'e-ripple z-active';
    return false;
  }
});

/***/ }),

/***/ 1732:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      directives: [
        {
          name: "show",
          rawName: "v-show",
          value: _vm.value,
          expression: "value"
        }
      ],
      staticClass: "vue-image-crop-upload"
    },
    [
      _c("div", { staticClass: "vicp-wrap" }, [
        _c("div", { staticClass: "vicp-close", on: { click: _vm.off } }, [
          _c("i", { staticClass: "vicp-icon4" })
        ]),
        _vm._v(" "),
        _c(
          "div",
          {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: _vm.step == 1,
                expression: "step == 1"
              }
            ],
            staticClass: "vicp-step1"
          },
          [
            _c(
              "div",
              {
                staticClass: "vicp-drop-area",
                on: {
                  dragleave: _vm.preventDefault,
                  dragover: _vm.preventDefault,
                  dragenter: _vm.preventDefault,
                  click: _vm.handleClick,
                  drop: _vm.handleChange
                }
              },
              [
                _c(
                  "i",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: _vm.loading != 1,
                        expression: "loading != 1"
                      }
                    ],
                    staticClass: "vicp-icon1"
                  },
                  [
                    _c("i", { staticClass: "vicp-icon1-arrow" }),
                    _vm._v(" "),
                    _c("i", { staticClass: "vicp-icon1-body" }),
                    _vm._v(" "),
                    _c("i", { staticClass: "vicp-icon1-bottom" })
                  ]
                ),
                _vm._v(" "),
                _c(
                  "span",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: _vm.loading !== 1,
                        expression: "loading !== 1"
                      }
                    ],
                    staticClass: "vicp-hint"
                  },
                  [_vm._v(_vm._s(_vm.lang.hint))]
                ),
                _vm._v(" "),
                _c(
                  "span",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: !_vm.isSupported,
                        expression: "!isSupported"
                      }
                    ],
                    staticClass: "vicp-no-supported-hint"
                  },
                  [_vm._v(_vm._s(_vm.lang.noSupported))]
                ),
                _vm._v(" "),
                _vm.step == 1
                  ? _c("input", {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: false,
                          expression: "false"
                        }
                      ],
                      ref: "fileinput",
                      attrs: { type: "file" },
                      on: { change: _vm.handleChange }
                    })
                  : _vm._e()
              ]
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: _vm.hasError,
                    expression: "hasError"
                  }
                ],
                staticClass: "vicp-error"
              },
              [
                _c("i", { staticClass: "vicp-icon2" }),
                _vm._v(" " + _vm._s(_vm.errorMsg) + "\r\n      ")
              ]
            ),
            _vm._v(" "),
            _c("div", { staticClass: "vicp-operate" }, [
              _c("a", { on: { click: _vm.off, mousedown: _vm.ripple } }, [
                _vm._v(_vm._s(_vm.lang.btn.off))
              ])
            ])
          ]
        ),
        _vm._v(" "),
        _vm.step == 2
          ? _c("div", { staticClass: "vicp-step2" }, [
              _c("div", { staticClass: "vicp-crop" }, [
                _c(
                  "div",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: true,
                        expression: "true"
                      }
                    ],
                    staticClass: "vicp-crop-left"
                  },
                  [
                    _c("div", { staticClass: "vicp-img-container" }, [
                      _c("img", {
                        ref: "img",
                        staticClass: "vicp-img",
                        style: _vm.sourceImgStyle,
                        attrs: { src: _vm.sourceImgUrl, draggable: "false" },
                        on: {
                          drag: _vm.preventDefault,
                          dragstart: _vm.preventDefault,
                          dragend: _vm.preventDefault,
                          dragleave: _vm.preventDefault,
                          dragover: _vm.preventDefault,
                          dragenter: _vm.preventDefault,
                          drop: _vm.preventDefault,
                          touchstart: _vm.imgStartMove,
                          touchmove: _vm.imgMove,
                          touchend: _vm.createImg,
                          touchcancel: _vm.createImg,
                          mousedown: _vm.imgStartMove,
                          mousemove: _vm.imgMove,
                          mouseup: _vm.createImg,
                          mouseout: _vm.createImg
                        }
                      }),
                      _vm._v(" "),
                      _c("div", {
                        staticClass: "vicp-img-shade vicp-img-shade-1",
                        style: _vm.sourceImgShadeStyle
                      }),
                      _vm._v(" "),
                      _c("div", {
                        staticClass: "vicp-img-shade vicp-img-shade-2",
                        style: _vm.sourceImgShadeStyle
                      })
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "vicp-range" }, [
                      _c("input", {
                        attrs: {
                          type: "range",
                          step: "1",
                          min: "0",
                          max: "100"
                        },
                        domProps: { value: _vm.scale.range },
                        on: { input: _vm.zoomChange }
                      }),
                      _vm._v(" "),
                      _c("i", {
                        staticClass: "vicp-icon5",
                        on: {
                          mousedown: _vm.startZoomSub,
                          mouseout: _vm.endZoomSub,
                          mouseup: _vm.endZoomSub
                        }
                      }),
                      _vm._v(" "),
                      _c("i", {
                        staticClass: "vicp-icon6",
                        on: {
                          mousedown: _vm.startZoomAdd,
                          mouseout: _vm.endZoomAdd,
                          mouseup: _vm.endZoomAdd
                        }
                      })
                    ]),
                    _vm._v(" "),
                    !_vm.noRotate
                      ? _c("div", { staticClass: "vicp-rotate" }, [
                          _c(
                            "i",
                            {
                              on: {
                                mousedown: _vm.startRotateLeft,
                                mouseout: _vm.endRotate,
                                mouseup: _vm.endRotate
                              }
                            },
                            [_vm._v("↺")]
                          ),
                          _vm._v(" "),
                          _c(
                            "i",
                            {
                              on: {
                                mousedown: _vm.startRotateRight,
                                mouseout: _vm.endRotate,
                                mouseup: _vm.endRotate
                              }
                            },
                            [_vm._v("↻")]
                          )
                        ])
                      : _vm._e()
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: true,
                        expression: "true"
                      }
                    ],
                    staticClass: "vicp-crop-right"
                  },
                  [
                    _c("div", { staticClass: "vicp-preview" }, [
                      !_vm.noSquare
                        ? _c("div", { staticClass: "vicp-preview-item" }, [
                            _c("img", {
                              style: _vm.previewStyle,
                              attrs: { src: _vm.createImgUrl }
                            }),
                            _vm._v(" "),
                            _c("span", [_vm._v(_vm._s(_vm.lang.preview))])
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      !_vm.noCircle
                        ? _c(
                            "div",
                            {
                              staticClass:
                                "vicp-preview-item vicp-preview-item-circle"
                            },
                            [
                              _c("img", {
                                style: _vm.previewStyle,
                                attrs: { src: _vm.createImgUrl }
                              }),
                              _vm._v(" "),
                              _c("span", [_vm._v(_vm._s(_vm.lang.preview))])
                            ]
                          )
                        : _vm._e()
                    ])
                  ]
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "vicp-operate" }, [
                _c(
                  "a",
                  {
                    on: {
                      click: function($event) {
                        _vm.setStep(1)
                      },
                      mousedown: _vm.ripple
                    }
                  },
                  [_vm._v(_vm._s(_vm.lang.btn.back))]
                ),
                _vm._v(" "),
                _c(
                  "a",
                  {
                    staticClass: "vicp-operate-btn",
                    on: { click: _vm.prepareUpload, mousedown: _vm.ripple }
                  },
                  [_vm._v(_vm._s(_vm.lang.btn.save))]
                )
              ])
            ])
          : _vm._e(),
        _vm._v(" "),
        _vm.step == 3
          ? _c("div", { staticClass: "vicp-step3" }, [
              _c("div", { staticClass: "vicp-upload" }, [
                _c(
                  "span",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: _vm.loading === 1,
                        expression: "loading === 1"
                      }
                    ],
                    staticClass: "vicp-loading"
                  },
                  [_vm._v(_vm._s(_vm.lang.loading))]
                ),
                _vm._v(" "),
                _c("div", { staticClass: "vicp-progress-wrap" }, [
                  _c("span", {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: _vm.loading === 1,
                        expression: "loading === 1"
                      }
                    ],
                    staticClass: "vicp-progress",
                    style: _vm.progressStyle
                  })
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: _vm.hasError,
                        expression: "hasError"
                      }
                    ],
                    staticClass: "vicp-error"
                  },
                  [
                    _c("i", { staticClass: "vicp-icon2" }),
                    _vm._v(" " + _vm._s(_vm.errorMsg) + "\r\n        ")
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: _vm.loading === 2,
                        expression: "loading === 2"
                      }
                    ],
                    staticClass: "vicp-success"
                  },
                  [
                    _c("i", { staticClass: "vicp-icon3" }),
                    _vm._v(" " + _vm._s(_vm.lang.success) + "\r\n        ")
                  ]
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "vicp-operate" }, [
                _c(
                  "a",
                  {
                    on: {
                      click: function($event) {
                        _vm.setStep(2)
                      },
                      mousedown: _vm.ripple
                    }
                  },
                  [_vm._v(_vm._s(_vm.lang.btn.back))]
                ),
                _vm._v(" "),
                _c("a", { on: { click: _vm.off, mousedown: _vm.ripple } }, [
                  _vm._v(_vm._s(_vm.lang.btn.close))
                ])
              ])
            ])
          : _vm._e(),
        _vm._v(" "),
        _c("canvas", {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: false,
              expression: "false"
            }
          ],
          ref: "canvas",
          attrs: { width: _vm.width, height: _vm.height }
        })
      ])
    ]
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-4a985340", module.exports)
  }
}

/***/ }),

/***/ 1733:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1734)
}
var normalizeComponent = __webpack_require__(6)
/* script */
var __vue_script__ = __webpack_require__(1736)
/* template */
var __vue_template__ = __webpack_require__(1737)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-59fad0b2"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/js/components/PanThumb/index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-59fad0b2", Component.options)
  } else {
    hotAPI.reload("data-v-59fad0b2", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 1734:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1735);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(8)("6be68337", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-59fad0b2\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-59fad0b2\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1735:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, "\n.pan-item[data-v-59fad0b2] {\r\n  width: 200px;\r\n  height: 200px;\r\n  border-radius: 50%;\r\n  display: inline-block;\r\n  position: relative;\r\n  cursor: default;\r\n  -webkit-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);\r\n          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);\n}\n.pan-info-roles-container[data-v-59fad0b2] {\r\n  padding: 20px;\r\n  text-align: center;\n}\n.pan-thumb[data-v-59fad0b2] {\r\n  width: 100%;\r\n  height: 100%;\r\n  background-size: 100%;\r\n  border-radius: 50%;\r\n  overflow: hidden;\r\n  position: absolute;\r\n  -webkit-transform-origin: 95% 40%;\r\n          transform-origin: 95% 40%;\r\n  -webkit-transition: all 0.3s ease-in-out;\r\n  transition: all 0.3s ease-in-out;\n}\n.pan-thumb[data-v-59fad0b2]:after {\r\n  content: '';\r\n  width: 8px;\r\n  height: 8px;\r\n  position: absolute;\r\n  border-radius: 50%;\r\n  top: 40%;\r\n  left: 95%;\r\n  margin: -4px 0 0 -4px;\r\n  background: radial-gradient(ellipse at center, rgba(14, 14, 14, 1) 0%, rgba(125, 126, 125, 1) 100%);\r\n  -webkit-box-shadow: 0 0 1px rgba(255, 255, 255, 0.9);\r\n          box-shadow: 0 0 1px rgba(255, 255, 255, 0.9);\n}\n.pan-info[data-v-59fad0b2] {\r\n  position: absolute;\r\n  width: inherit;\r\n  height: inherit;\r\n  border-radius: 50%;\r\n  overflow: hidden;\r\n  -webkit-box-shadow: inset 0 0 0 5px rgba(0, 0, 0, 0.05);\r\n          box-shadow: inset 0 0 0 5px rgba(0, 0, 0, 0.05);\n}\n.pan-info h3[data-v-59fad0b2] {\r\n  color: #fff;\r\n  text-transform: uppercase;\r\n  position: relative;\r\n  letter-spacing: 2px;\r\n  font-size: 18px;\r\n  margin: 0 60px;\r\n  padding: 22px 0 0 0;\r\n  height: 85px;\r\n  font-family: 'Open Sans', Arial, sans-serif;\r\n  text-shadow: 0 0 1px #fff, 0 1px 2px rgba(0, 0, 0, 0.3);\n}\n.pan-info p[data-v-59fad0b2] {\r\n  color: #fff;\r\n  padding: 10px 5px;\r\n  font-style: italic;\r\n  margin: 0 30px;\r\n  font-size: 12px;\r\n  border-top: 1px solid rgba(255, 255, 255, 0.5);\n}\n.pan-info p a[data-v-59fad0b2] {\r\n  display: block;\r\n  color: #333;\r\n  width: 80px;\r\n  height: 80px;\r\n  background: rgba(255, 255, 255, 0.3);\r\n  border-radius: 50%;\r\n  color: #fff;\r\n  font-style: normal;\r\n  font-weight: 700;\r\n  text-transform: uppercase;\r\n  font-size: 9px;\r\n  letter-spacing: 1px;\r\n  padding-top: 24px;\r\n  margin: 7px auto 0;\r\n  font-family: 'Open Sans', Arial, sans-serif;\r\n  opacity: 0;\r\n  -webkit-transition: opacity 0.3s ease-in-out 0.2s, background 0.2s linear 0s, -webkit-transform 0.3s ease-in-out 0.2s;\r\n  transition: opacity 0.3s ease-in-out 0.2s, background 0.2s linear 0s, -webkit-transform 0.3s ease-in-out 0.2s;\r\n  transition: transform 0.3s ease-in-out 0.2s, opacity 0.3s ease-in-out 0.2s, background 0.2s linear 0s;\r\n  transition: transform 0.3s ease-in-out 0.2s, opacity 0.3s ease-in-out 0.2s, background 0.2s linear 0s, -webkit-transform 0.3s ease-in-out 0.2s;\r\n  -webkit-transform: translateX(60px) rotate(90deg);\r\n          transform: translateX(60px) rotate(90deg);\n}\n.pan-info p a[data-v-59fad0b2]:hover {\r\n  background: rgba(255, 255, 255, 0.5);\n}\n.pan-item:hover .pan-thumb[data-v-59fad0b2] {\r\n  -webkit-transform: rotate(-110deg);\r\n          transform: rotate(-110deg);\n}\n.pan-item:hover .pan-info p a[data-v-59fad0b2] {\r\n  opacity: 1;\r\n  -webkit-transform: translateX(0px) rotate(0deg);\r\n          transform: translateX(0px) rotate(0deg);\n}\r\n", ""]);

// exports


/***/ }),

/***/ 1736:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'PanThumb',
  props: {
    image: {
      type: String,
      required: true
    },
    zIndex: {
      type: Number,
      default: 1
    },
    width: {
      type: String,
      default: '150px'
    },
    height: {
      type: String,
      default: '150px'
    }
  }
});

/***/ }),

/***/ 1737:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "pan-item",
      style: { zIndex: _vm.zIndex, height: _vm.height, width: _vm.width }
    },
    [
      _c("div", { staticClass: "pan-info" }, [
        _c(
          "div",
          { staticClass: "pan-info-roles-container" },
          [_vm._t("default")],
          2
        )
      ]),
      _vm._v(" "),
      _c("img", { staticClass: "pan-thumb", attrs: { src: _vm.image } })
    ]
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-59fad0b2", module.exports)
  }
}

/***/ }),

/***/ 1738:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "components-container" },
    [
      _c(
        "pan-thumb",
        { attrs: { image: _vm.image, width: "80px", height: "80px" } },
        [
          _c(
            "a",
            {
              attrs: { href: "#" },
              on: {
                click: function($event) {
                  _vm.imagecropperShow = true
                }
              }
            },
            [_c("icon-aplex", { attrs: { name: "upload", type: "lnr" } })],
            1
          )
        ]
      ),
      _vm._v(" "),
      _c("image-cropper", {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: _vm.imagecropperShow,
            expression: "imagecropperShow"
          }
        ],
        key: _vm.imagecropperKey,
        attrs: {
          width: 300,
          height: 300,
          url: "https://httpbin.org/post",
          langType: "es"
        },
        on: { close: _vm.close, "crop-upload-success": _vm.cropSuccess }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-6a7e3b2d", module.exports)
  }
}

/***/ })

});