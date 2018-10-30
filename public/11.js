webpackJsonp([11],{

/***/ 1623:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(6)
/* script */
var __vue_script__ = __webpack_require__(1748)
/* template */
var __vue_template__ = __webpack_require__(1749)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
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
Component.options.__file = "resources/js/views/products/PrintProduct.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3fbbd27e", Component.options)
  } else {
    hotAPI.reload("data-v-3fbbd27e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 1727:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = saveConfig;
/* harmony export (immutable) */ __webpack_exports__["a"] = getConfig;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_request__ = __webpack_require__(24);


function saveConfig(key, type, simple, data) {
  if (simple) {
    data = { type: data };
  }
  return Object(__WEBPACK_IMPORTED_MODULE_0__utils_request__["a" /* default */])({
    url: 'api/config/' + key + '/' + type + '/' + simple,
    method: 'post',
    data: data
  });
}

function getConfig(key) {
  return Object(__WEBPACK_IMPORTED_MODULE_0__utils_request__["a" /* default */])({
    url: 'api/config/' + key,
    method: 'get'
  });
}

/***/ }),

/***/ 1729:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = addProduct;
/* harmony export (immutable) */ __webpack_exports__["d"] = urlPrint;
/* harmony export (immutable) */ __webpack_exports__["c"] = print;
/* unused harmony export byId */
/* harmony export (immutable) */ __webpack_exports__["b"] = createPDF;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_request__ = __webpack_require__(24);


function addProduct(data) {
  return Object(__WEBPACK_IMPORTED_MODULE_0__utils_request__["a" /* default */])({
    url: 'api/product',
    method: 'post',
    data: data
  });
}

function urlPrint() {
  return Object(__WEBPACK_IMPORTED_MODULE_0__utils_request__["a" /* default */])({
    url: 'api/product/urlPrint',
    method: 'get'
  });
}

function print(url) {
  return Object(__WEBPACK_IMPORTED_MODULE_0__utils_request__["a" /* default */])({
    url: url,
    method: 'get'
  });
}

function byId(id) {
  return Object(__WEBPACK_IMPORTED_MODULE_0__utils_request__["a" /* default */])({
    url: 'api/product/' + id,
    method: 'get'
  });
}

function createPDF(content, id, params) {
  return Object(__WEBPACK_IMPORTED_MODULE_0__utils_request__["a" /* default */])({
    url: 'api/product/createFile',
    method: 'POST',
    data: {
      content: content,
      id: id,
      params: params
    }
  });
}

/***/ }),

/***/ 1748:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_product__ = __webpack_require__(1729);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_config__ = __webpack_require__(1727);
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      url: '',
      printer_product: '',
      format_print: ''
    };
  },
  created: function created() {
    var _this = this;

    Object(__WEBPACK_IMPORTED_MODULE_0__api_product__["d" /* urlPrint */])().then(function (_ref) {
      var data = _ref.data;

      _this.url = data;
    }).catch(function (error) {
      console.log(error);
    });

    Object(__WEBPACK_IMPORTED_MODULE_1__api_config__["a" /* getConfig */])('product_printer').then(function (_ref2) {
      var data = _ref2.data;

      _this.printer_product = data.value;
    }).catch(function (error) {
      console.log(error);
    });

    Object(__WEBPACK_IMPORTED_MODULE_1__api_config__["a" /* getConfig */])('test_format_print').then(function (_ref3) {
      var data = _ref3.data;

      _this.format_print = data.value;
    }).catch(function (error) {
      console.log(error);
    });
  },

  methods: {
    printPDF: function printPDF() {
      var me = this;
      Object(__WEBPACK_IMPORTED_MODULE_0__api_product__["b" /* createPDF */])(me.format_print).then(function (_ref4) {
        var data = _ref4.data;

        var name = data;
        Object(__WEBPACK_IMPORTED_MODULE_0__api_product__["c" /* print */])(me.url).then(function (_ref5) {
          var data = _ref5.data;

          var exe = eval(data.substring(21));
          exe.print('useDefaultPrinter=0&printerName=' + me.printer_product + '&printRotation=None&fileName=' + name);
        }).catch(function (error) {
          console.log(error);
        });
      }).catch(function (error) {
        return console.log(error);
      });
    }
  }
});

/***/ }),

/***/ 1749:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {},
    [
      _c(
        "el-button",
        {
          on: {
            click: function($event) {
              _vm.printPDF()
            }
          }
        },
        [_vm._v("IMPRIMIR")]
      )
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
    require("vue-hot-reload-api")      .rerender("data-v-3fbbd27e", module.exports)
  }
}

/***/ })

});