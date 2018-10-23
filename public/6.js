webpackJsonp([6],{

/***/ 1620:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1744)
}
var normalizeComponent = __webpack_require__(6)
/* script */
var __vue_script__ = __webpack_require__(1746)
/* template */
var __vue_template__ = __webpack_require__(1747)
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

/***/ 1724:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = saveConfig;
/* harmony export (immutable) */ __webpack_exports__["a"] = getConfig;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_request__ = __webpack_require__(23);


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

/***/ 1726:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = addProduct;
/* harmony export (immutable) */ __webpack_exports__["d"] = urlPrint;
/* harmony export (immutable) */ __webpack_exports__["c"] = print;
/* harmony export (immutable) */ __webpack_exports__["b"] = byId;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_request__ = __webpack_require__(23);


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

/***/ }),

/***/ 1744:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1745);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(8)("51847bb7", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-3fbbd27e\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./PrintProduct.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-3fbbd27e\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./PrintProduct.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1745:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ 1746:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_product__ = __webpack_require__(1726);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_config__ = __webpack_require__(1724);
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




/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      query: '',
      url: '',
      printer_product: '',
      product: []
    };
  },
  created: function created() {
    var _this = this;

    Object(__WEBPACK_IMPORTED_MODULE_0__api_product__["b" /* byId */])(1).then(function (_ref) {
      var data = _ref.data;

      _this.product = data;
    }).catch(function (error) {
      console.log(error);
    });

    Object(__WEBPACK_IMPORTED_MODULE_0__api_product__["d" /* urlPrint */])().then(function (_ref2) {
      var data = _ref2.data;

      _this.url = data;
    }).catch(function (error) {
      console.log(error);
    });

    Object(__WEBPACK_IMPORTED_MODULE_1__api_config__["a" /* getConfig */])('product_printer').then(function (_ref3) {
      var data = _ref3.data;

      _this.printer_product = data.value;
    }).catch(function (error) {
      console.log(error);
    });
  },

  methods: {
    print: function print() {
      var me = this;
      //1. generate an image of HTML content through html2canvas utility
      html2canvas($('#card'), {
        onrendered: function onrendered(canvas) {
          // var b64Prefix = "data:image/png;base64,";
          var imgBase64DataUri = canvas.toDataURL("image/png");
          // var imgBase64Content = imgBase64DataUri.substring(b64Prefix.length, imgBase64DataUri.length);
          // Canvas2Image.convertToPNG(canvasObj, width, height)
          //2. save image base64 content to server-side Application Cache
          $.ajax({
            type: "POST",
            // url: "{{action('StoreImageFileController@createFile')}}",
            url: "api/product/createFile",
            data: { base64ImageContent: imgBase64DataUri },
            success: function success(imgFileName) {
              var _this2 = this;

              // alert("The image file: " + imgFileName + " was created at server side. Continue printing it...");

              //2. Print the stored image file specifying the created file name
              // jsWebClientPrint.print('useDefaultPrinter=' + $('#useDefaultPrinter').attr('checked') + '&printerName=PDFCreator&imageFileName=' + imgFileName);

              Object(__WEBPACK_IMPORTED_MODULE_0__api_product__["c" /* print */])(me.url).then(function (_ref4) {
                var data = _ref4.data;

                _this2.query = data.substring(21);
                var exe = eval(_this2.query);
                // exe.print('useDefaultPrinter=' + $('#useDefaultPrinter').attr('checked') + '&printerName='+me.printer_product+'&imageFileName='+imgFileName);
              }).catch(function (error) {
                console.log(error);
              });
            }
          });
        }
      });
    },
    aPDF: function aPDF() {
      var me = this;
      var pdf = new jsPDF('p', 'pt', 'letter');
      var source = $('#card')[0];

      var specialElementHandlers = {
        '#bypassme': function bypassme(element, renderer) {
          return true;
        }
      };
      var margins = {
        top: 80,
        bottom: 60,
        left: 40,
        width: 522
      };

      pdf.fromHTML(source, margins.left, // x coord
      margins.top, { // y coord
        'width': margins.width,
        'elementHandlers': specialElementHandlers
      }, function (dispose) {
        var tales = pdf.output('datauristring');
        $.ajax({
          type: "POST",
          url: "api/product/createFile",
          data: { base64ImageContent: tales },
          success: function success(name) {
            var _this3 = this;

            Object(__WEBPACK_IMPORTED_MODULE_0__api_product__["c" /* print */])(me.url).then(function (_ref5) {
              var data = _ref5.data;

              _this3.query = data.substring(21);
              var exe = eval(_this3.query);
              exe.print('useDefaultPrinter=0&printerName=' + me.printer_product + '&printRotation=None&fileName=' + name);
            }).catch(function (error) {
              console.log(error);
            });
          }
        });
      }, margins);
    }
  }
});

/***/ }),

/***/ 1747:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {},
    [
      _c("div", { attrs: { id: "card" } }, [
        _c("h1", { staticStyle: { "font-size": "30px" } }, [
          _vm._v(_vm._s(_vm.product.code))
        ]),
        _vm._v(" "),
        _c("h2", [_vm._v(_vm._s(_vm.product.name))])
      ]),
      _vm._v(" "),
      _c("input", {
        staticStyle: { "font-size": "18px" },
        attrs: { id: "printBtn", type: "button", value: "Print HTML Card..." },
        on: { click: _vm.print }
      }),
      _vm._v(" "),
      _c(
        "el-button",
        {
          on: {
            click: function($event) {
              _vm.aPDF()
            }
          }
        },
        [_vm._v("PDF")]
      ),
      _vm._v(" "),
      _c("div", { attrs: { id: "img-out" } })
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