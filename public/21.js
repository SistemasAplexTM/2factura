webpackJsonp([21],{

/***/ 1629:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1847)
}
var normalizeComponent = __webpack_require__(6)
/* script */
var __vue_script__ = __webpack_require__(1849)
/* template */
var __vue_template__ = __webpack_require__(1850)
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
Component.options.__file = "resources/js/views/reports/Index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5a44c0f3", Component.options)
  } else {
    hotAPI.reload("data-v-5a44c0f3", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 1728:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["d"] = updateCell;
/* harmony export (immutable) */ __webpack_exports__["c"] = getUrlImpressInfo;
/* harmony export (immutable) */ __webpack_exports__["a"] = getImpressInfo;
/* harmony export (immutable) */ __webpack_exports__["b"] = getJsWebClientPrint;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_request__ = __webpack_require__(24);


function updateCell(data) {
  return Object(__WEBPACK_IMPORTED_MODULE_0__utils_request__["a" /* default */])({
    url: 'api/global/updateCell',
    method: 'put',
    data: data
  });
}

function getUrlImpressInfo() {
  return Object(__WEBPACK_IMPORTED_MODULE_0__utils_request__["a" /* default */])({
    url: 'api/global/getUrlImpressInfo',
    method: 'get'
  });
}

function getImpressInfo(url) {
  return Object(__WEBPACK_IMPORTED_MODULE_0__utils_request__["a" /* default */])({
    url: url,
    method: 'get'
  });
}

function getJsWebClientPrint(url) {
  return Object(__WEBPACK_IMPORTED_MODULE_0__utils_request__["a" /* default */])({
    url: url,
    method: 'get'
  });
}

/***/ }),

/***/ 1847:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1848);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(8)("3987c88b", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-5a44c0f3\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Index.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-5a44c0f3\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Index.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1848:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ 1849:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_global__ = __webpack_require__(1728);
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

var clientPrinters = null;

var wcppGetPrintersTimeout_ms = 10000; //10 sec
var wcppGetPrintersTimeoutStep_ms = 500; //0.5 sec
function wcpGetPrintersOnSuccess() {
  // Display client installed printers
  if (arguments[0].length > 0) {
    clientPrinters = JSON.parse(arguments[0]);
  } else {
    alert("No printers are installed in your system.");
  }
}


/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      dataPrueba: '',
      print: '',
      prints: clientPrinters
    };
  },
  created: function created() {
    var _this = this;

    Object(__WEBPACK_IMPORTED_MODULE_0__api_global__["c" /* getUrlImpressInfo */])().then(function (_ref) {
      var data = _ref.data;

      Object(__WEBPACK_IMPORTED_MODULE_0__api_global__["b" /* getJsWebClientPrint */])(data).then(function (_ref2) {
        var data = _ref2.data;

        _this.dataPrueba = data.substring(21);
      }).catch(function (error) {
        console.log(error);
      });
    }).catch(function (error) {
      console.log(error);
    });
  },

  methods: {
    exePrueba: function exePrueba() {
      var tales = eval(this.dataPrueba);
      tales.getPrinters();
    },
    exePrint: function exePrint() {
      var tales = eval(this.dataPrueba);
      tales.print('useDefaultPrinter=1&printerName=null&filetype=TXT');
    }
  }
});

/***/ }),

/***/ 1850:
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
        "el-row",
        [
          _c("el-col", { attrs: { span: 24 } }, [
            _c("h1", [_vm._v("Acá vamos a imprimir")])
          ])
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "el-row",
        { attrs: { gutter: 14 } },
        [
          _c(
            "el-col",
            { attrs: { span: 12 } },
            [
              _c("el-button", { on: { click: _vm.exePrueba } }, [
                _vm._v("Impresoras...")
              ]),
              _vm._v(" "),
              _c("br"),
              _vm._v(" "),
              _c("br"),
              _vm._v(" "),
              _c(
                "el-select",
                {
                  attrs: { placeholder: "Select" },
                  model: {
                    value: _vm.print,
                    callback: function($$v) {
                      _vm.print = $$v
                    },
                    expression: "print"
                  }
                },
                _vm._l(_vm.prints, function(item) {
                  return _c("el-option", {
                    key: item.name,
                    attrs: { label: item.name, value: item.name }
                  })
                })
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "el-col",
            { attrs: { span: 12 } },
            [
              _c("el-button", { on: { click: _vm.exePrint } }, [
                _vm._v("Imprimir")
              ]),
              _vm._v(" "),
              _c("br"),
              _vm._v(" "),
              _c("br"),
              _vm._v(" "),
              _c("iframe", {
                staticStyle: { width: "100%", height: "500px" },
                attrs: {
                  src:
                    "//docs.google.com/gview?url=http://webclientprintphp.azurewebsites.net/files/LoremIpsum.pdf&embedded=true",
                  frameborder: "0"
                }
              })
            ],
            1
          )
        ],
        1
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
    require("vue-hot-reload-api")      .rerender("data-v-5a44c0f3", module.exports)
  }
}

/***/ })

});