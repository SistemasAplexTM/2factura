webpackJsonp([5],{

/***/ 1623:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1778)
}
var normalizeComponent = __webpack_require__(6)
/* script */
var __vue_script__ = __webpack_require__(1780)
/* template */
var __vue_template__ = __webpack_require__(1784)
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
Component.options.__file = "resources/js/views/settings/TestFormatPrint.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1a7e9e12", Component.options)
  } else {
    hotAPI.reload("data-v-1a7e9e12", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 1636:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(6)
/* script */
var __vue_script__ = __webpack_require__(1637)
/* template */
var __vue_template__ = __webpack_require__(1638)
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
Component.options.__file = "resources/js/components/Sticky/index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-cfd769d2", Component.options)
  } else {
    hotAPI.reload("data-v-cfd769d2", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 1637:
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
  name: 'Sticky',
  props: {
    title: {
      type: String
    },
    stickyTop: {
      type: Number,
      default: 0
    },
    zIndex: {
      type: Number,
      default: 1
    },
    className: {
      type: String
    }
  },
  data: function data() {
    return {
      active: false,
      position: '',
      width: undefined,
      height: undefined,
      isSticky: false
    };
  },
  mounted: function mounted() {
    this.height = this.$el.getBoundingClientRect().height;
    window.addEventListener('scroll', this.handleScroll);
    window.addEventListener('resize', this.handleReize);
  },
  activated: function activated() {
    this.handleScroll();
  },
  destroyed: function destroyed() {
    window.removeEventListener('scroll', this.handleScroll);
    window.removeEventListener('resize', this.handleReize);
  },

  methods: {
    sticky: function sticky() {
      if (this.active) {
        return;
      }
      this.position = 'fixed';
      this.active = true;
      this.width = this.width + 'px';
      this.isSticky = true;
    },
    reset: function reset() {
      if (!this.active) {
        return;
      }
      this.position = '';
      this.width = 'auto';
      this.active = false;
      this.isSticky = false;
    },
    handleScroll: function handleScroll() {
      this.width = this.$el.getBoundingClientRect().width;
      var offsetTop = this.$el.getBoundingClientRect().top;
      if (offsetTop < this.stickyTop) {
        this.sticky();
        return;
      }
      this.reset();
    },
    handleReize: function handleReize() {
      if (this.isSticky) {
        this.width = this.$el.getBoundingClientRect().width + 'px';
      }
    }
  }
});

/***/ }),

/***/ 1638:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { style: { height: _vm.height + "px", zIndex: _vm.zIndex } },
    [
      _c(
        "div",
        {
          class: _vm.className,
          style: {
            top: _vm.stickyTop + "px",
            zIndex: _vm.zIndex,
            position: _vm.position,
            width: _vm.width,
            height: _vm.height + "px"
          }
        },
        [
          _c(
            "span",
            {
              staticClass: "fl",
              staticStyle: { "font-size": "25px", "margin-left": "15px" }
            },
            [_vm._v(_vm._s(_vm.title))]
          ),
          _vm._v(" "),
          _vm._t("default", [_c("div", [_vm._v("sticky")])])
        ],
        2
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-cfd769d2", module.exports)
  }
}

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

/***/ 1778:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1779);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(8)("081364b2", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-1a7e9e12\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./TestFormatPrint.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-1a7e9e12\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./TestFormatPrint.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1779:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ 1780:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Sticky__ = __webpack_require__(1636);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Sticky___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_Sticky__);
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
  components: { Sticky: __WEBPACK_IMPORTED_MODULE_0__components_Sticky___default.a },
  data: function data() {
    return {
      myHTML: ''
    };
  },
  created: function created() {
    var _this = this;

    Object(__WEBPACK_IMPORTED_MODULE_1__api_config__["a" /* getConfig */])('test_format_print').then(function (_ref) {
      var data = _ref.data;

      _this.myHTML = data.value;
      _this.$refs.editor.setContent(_this.myHTML);
    }).catch(function (error) {
      console.log(error);
    });
  },

  methods: {
    save: function save() {
      var _this2 = this;

      this.myHTML = this.$refs.editor.getContent();
      Object(__WEBPACK_IMPORTED_MODULE_1__api_config__["b" /* saveConfig */])('test_format_print', 'format_print', true, this.myHTML).then(function (_ref2) {
        var data = _ref2.data;

        _this2.$message({
          message: 'Registrado con éxito.',
          type: 'success'
        });
      }).catch(function (error) {
        _this2.$message.error('Error al registrar.');
      });
    }
  }
});

/***/ }),

/***/ 1784:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { attrs: { id: "app" } },
    [
      _c(
        "el-card",
        { staticClass: "box-card", attrs: { shadow: "hover" } },
        [
          _c(
            "div",
            {
              staticClass: "clearfix",
              attrs: { slot: "header" },
              slot: "header"
            },
            [
              _c(
                "sticky",
                {
                  attrs: {
                    className: "sub-navbar draft",
                    title: "Formato de impresión"
                  }
                },
                [
                  _c(
                    "el-button",
                    {
                      attrs: { size: "small", type: "primary" },
                      on: { click: _vm.save }
                    },
                    [_vm._v("\n            Guardar\n          ")]
                  ),
                  _vm._v(" "),
                  _c(
                    "el-button",
                    {
                      attrs: {
                        id: "cancelButton",
                        type: "default",
                        size: "small"
                      }
                    },
                    [_vm._v("Cancelar")]
                  )
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c("br"),
          _vm._v(" "),
          _c("vueditor", {
            ref: "editor",
            staticStyle: { "min-height": "500px" }
          }),
          _vm._v(" "),
          _c("div", { staticStyle: { "text-align": "center" } }, [
            _c("span", { staticStyle: { color: "inherit" } }, [
              _vm._v("Bienvenido")
            ])
          ]),
          _c("div", { staticStyle: { "text-align": "center" } }, [
            _c("span", { staticStyle: { "font-size": "15px" } }, [_c("br")])
          ]),
          _c("div", { staticStyle: { "text-align": "center" } }, [
            _c("span", { staticStyle: { color: "inherit" } }, [
              _vm._v("{nom_consignee}")
            ])
          ]),
          _c("div", { staticStyle: { "text-align": "center" } }, [
            _c("span", { staticStyle: { "font-size": "15px" } }, [_c("br")])
          ]),
          _c("div", { staticStyle: { "text-align": "center" } }, [
            _c("span", { staticStyle: { color: "inherit" } }, [
              _vm._v(
                "Usted se ha registrado a nuestro servicio de casillero, a partir de ahora cuenta con una dirección física en {pais_agencia}, sus compras o encomiendas que deba realizar, debe dirigirlos a la siguiente dirección:"
              )
            ])
          ]),
          _c("div", { staticStyle: { "text-align": "center" } }, [
            _c("span", { staticStyle: { "font-size": "15px" } }, [_c("br")])
          ]),
          _c("strong", [
            _c("div", { staticStyle: { "text-align": "center" } }, [
              _c("strong", { staticStyle: { color: "inherit" } }, [
                _vm._v("Dirección:")
              ]),
              _c("span", { staticStyle: { color: "inherit" } }, [
                _vm._v(" {dir_agencia}.")
              ])
            ])
          ]),
          _c("strong", [
            _c("div", { staticStyle: { "text-align": "center" } }, [
              _c("strong", { staticStyle: { color: "inherit" } }, [
                _vm._v("Ciudad:")
              ]),
              _c("span", { staticStyle: { color: "inherit" } }, [
                _vm._v(" {ciudad_agencia}")
              ])
            ])
          ]),
          _c("strong", [
            _c("div", { staticStyle: { "text-align": "center" } }, [
              _c("strong", { staticStyle: { color: "inherit" } }, [
                _vm._v("Estado:")
              ]),
              _c("span", { staticStyle: { color: "inherit" } }, [
                _vm._v(" {estado_agencia}")
              ])
            ])
          ]),
          _c("strong", [
            _c("div", { staticStyle: { "text-align": "center" } }, [
              _c("strong", { staticStyle: { color: "inherit" } }, [
                _vm._v("Código Postal:")
              ]),
              _c("span", { staticStyle: { color: "inherit" } }, [
                _vm._v(" {zip_agencia}")
              ])
            ])
          ]),
          _c("div", { staticStyle: { "text-align": "center" } }, [
            _c("span", { staticStyle: { "font-size": "15px" } }, [_c("br")])
          ]),
          _c("div", { staticStyle: { "text-align": "center" } }, [
            _c("span", { staticStyle: { color: "inherit" } }, [
              _vm._v(
                "El código de casillero asignado a usted es: {pobox_consignee}"
              )
            ])
          ]),
          _c("div", { staticStyle: { "text-align": "center" } }, [
            _c("span", { staticStyle: { "font-size": "15px" } }, [_c("br")])
          ]),
          _c("div", { staticStyle: { "text-align": "center" } }, [
            _c("span", { staticStyle: { color: "inherit" } }, [
              _vm._v("-----------------------------------------------")
            ])
          ]),
          _c("div", { staticStyle: { "text-align": "center" } }, [
            _c("span", { staticStyle: { color: "inherit" } }, [
              _vm._v("Sus datos de acceso al sistema son:")
            ])
          ]),
          _c("div", { staticStyle: { "text-align": "center" } }, [
            _c("span", { staticStyle: { "font-size": "15px" } }, [_c("br")])
          ]),
          _c("strong", [
            _c("div", { staticStyle: { "text-align": "center" } }, [
              _c("strong", { staticStyle: { color: "inherit" } }, [
                _vm._v("Link:")
              ]),
              _c("span", { staticStyle: { color: "inherit" } }, [
                _vm._v(" {url_principal}/")
              ]),
              _c("span", { staticStyle: { color: "inherit" } }, [
                _vm._v("{id_agencia}")
              ])
            ])
          ]),
          _c("strong", [
            _c("div", { staticStyle: { "text-align": "center" } }, [
              _c("strong", { staticStyle: { color: "inherit" } }, [
                _vm._v("Usuario:")
              ]),
              _c("span", { staticStyle: { color: "inherit" } }, [
                _vm._v(" {email_consignee}")
              ])
            ])
          ]),
          _c("strong", [
            _c("div", { staticStyle: { "text-align": "center" } }, [
              _c("strong", { staticStyle: { color: "inherit" } }, [
                _vm._v("Contraseña:")
              ]),
              _c("span", { staticStyle: { color: "inherit" } }, [
                _vm._v(" {pass_consignee}")
              ])
            ])
          ]),
          _c("div", { staticStyle: { "text-align": "center" } }, [
            _c("span", { staticStyle: { "font-size": "15px" } }, [_c("br")])
          ]),
          _c("div", { staticStyle: { "text-align": "center" } }, [
            _c("span", { staticStyle: { "font-size": "15px" } }, [_c("br")])
          ]),
          _c("div", { staticStyle: { "text-align": "center" } }, [
            _c("span", { staticStyle: { color: "inherit" } }, [
              _vm._v("-----------------------------------------------")
            ])
          ]),
          _c("div", { staticStyle: { "text-align": "center" } }, [
            _c("span", { staticStyle: { "font-size": "15px" } }, [_c("br")])
          ]),
          _c("div", { staticStyle: { "text-align": "center" } }, [
            _c("span", { staticStyle: { color: "inherit" } }, [
              _vm._v(
                "Los envíos a {pais_consignee}, se realizarán a la siguiente dirección:"
              )
            ])
          ]),
          _c("div", { staticStyle: { "text-align": "center" } }, [
            _c("span", { staticStyle: { "font-size": "15px" } }, [_c("br")])
          ]),
          _c("strong", [
            _c("div", { staticStyle: { "text-align": "center" } }, [
              _c("strong", { staticStyle: { color: "inherit" } }, [
                _vm._v("Dirección:")
              ]),
              _c("span", { staticStyle: { color: "inherit" } }, [
                _vm._v(" {dir_consignee}.")
              ])
            ])
          ]),
          _c("strong", [
            _c("div", { staticStyle: { "text-align": "center" } }, [
              _c("strong", { staticStyle: { color: "inherit" } }, [
                _vm._v("Ciudad:")
              ]),
              _c("span", { staticStyle: { color: "inherit" } }, [
                _vm._v(" {ciu_consignee}")
              ])
            ])
          ]),
          _c("strong", [
            _c("div", { staticStyle: { "text-align": "center" } }, [
              _c("strong", { staticStyle: { color: "inherit" } }, [
                _vm._v("Departamento / Estado:")
              ]),
              _c("span", { staticStyle: { color: "inherit" } }, [
                _vm._v(" {depto_consignee}")
              ])
            ])
          ]),
          _c("strong", [
            _c("div", { staticStyle: { "text-align": "center" } }, [
              _c("strong", { staticStyle: { color: "inherit" } }, [
                _vm._v("Código Postal:")
              ]),
              _c("span", { staticStyle: { color: "inherit" } }, [
                _vm._v(" {zip_consignee}")
              ])
            ])
          ]),
          _c("div", { staticStyle: { "text-align": "center" } }, [
            _c("span", { staticStyle: { "font-size": "15px" } }, [_c("br")])
          ]),
          _c("div", { staticStyle: { "text-align": "center" } }, [
            _c("span", { staticStyle: { "font-size": "15px" } }, [_c("br")])
          ]),
          _c("div", { staticStyle: { "text-align": "center" } }, [
            _c("span", { staticStyle: { color: "inherit" } }, [
              _vm._v(
                "Los alertas del sistema se enviarán al email: {email_consignee} El teléfono de contacto con el cual nos comunicaremos en caso de ser requerido será: Movil: {cel_consignee} o Fijo: {tel_consignee}."
              )
            ])
          ]),
          _c("div", { staticStyle: { "text-align": "center" } }, [_c("br")])
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
    require("vue-hot-reload-api")      .rerender("data-v-1a7e9e12", module.exports)
  }
}

/***/ })

});