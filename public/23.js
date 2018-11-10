webpackJsonp([23],{

/***/ 1624:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1772)
}
var normalizeComponent = __webpack_require__(6)
/* script */
var __vue_script__ = __webpack_require__(1774)
/* template */
var __vue_template__ = __webpack_require__(1775)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-23154785"
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
Component.options.__file = "resources/js/views/settings/Index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-23154785", Component.options)
  } else {
    hotAPI.reload("data-v-23154785", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 1772:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1773);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(8)("daa32082", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-23154785\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Index.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-23154785\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Index.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1773:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, "\nh1[data-v-23154785]{\n  color: #005AEE;\n  font-size: 2em;\n}\n.card-config[data-v-23154785]{\n  height: 200px\n}\n", ""]);

// exports


/***/ }),

/***/ 1774:
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
  data: function data() {
    return {
      toggleSideBar: false
    };
  }
});

/***/ }),

/***/ 1775:
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
        { attrs: { gutter: 12 } },
        [
          _c(
            "el-col",
            { attrs: { span: 6 } },
            [
              _c(
                "router-link",
                { attrs: { to: { path: "general" } } },
                [
                  _c(
                    "el-card",
                    { staticClass: "card-config", attrs: { shadow: "hover" } },
                    [
                      _c(
                        "h1",
                        [
                          _vm._v("\n            General\n            "),
                          _c("icon-aplex", {
                            staticClass: "fr",
                            attrs: { name: "cog", scale: "1.5", type: "lnr" }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("hr"),
                      _vm._v(" "),
                      _c("p", [
                        _vm._v(
                          "Configure los aspectos generales de la aplicación, como aspecto visual, idioma, entre otros."
                        )
                      ])
                    ]
                  )
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "el-col",
            { attrs: { span: 6 } },
            [
              _c(
                "router-link",
                { attrs: { to: { path: "usuarios" } } },
                [
                  _c(
                    "el-card",
                    { staticClass: "card-config", attrs: { shadow: "hover" } },
                    [
                      _c(
                        "h1",
                        [
                          _c("icon-aplex", {
                            staticClass: "fr",
                            attrs: { name: "users", scale: "1.5", type: "lnr" }
                          }),
                          _vm._v("\n            Usuarios\n          ")
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("hr"),
                      _vm._v(" "),
                      _c("p", [
                        _vm._v(
                          "Configure los aspectos de usuarios, roles, permisos, etc"
                        )
                      ])
                    ]
                  )
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "el-col",
            { attrs: { span: 6 } },
            [
              _c(
                "router-link",
                { attrs: { to: { path: "roles-permisos" } } },
                [
                  _c(
                    "el-card",
                    { staticClass: "card-config", attrs: { shadow: "hover" } },
                    [
                      _c(
                        "h1",
                        [
                          _c("icon-aplex", {
                            staticClass: "fr",
                            attrs: { name: "lock", scale: "1.5", type: "lnr" }
                          }),
                          _vm._v("\n            Roles y permisos\n          ")
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("hr"),
                      _vm._v(" "),
                      _c("p", [
                        _vm._v(
                          "Configure los roles y permisos de la aplicación."
                        )
                      ])
                    ]
                  )
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "el-col",
            { attrs: { span: 6 } },
            [
              _c(
                "el-card",
                { staticClass: "card-config", attrs: { shadow: "hover" } },
                [
                  _c(
                    "h1",
                    [
                      _c("icon-aplex", {
                        staticClass: "fr",
                        attrs: { name: "envelope", scale: "1.5", type: "lnr" }
                      }),
                      _vm._v(" "),
                      _c("span", [_vm._v("Correos")])
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("hr"),
                  _vm._v(" "),
                  _c("p", [
                    _vm._v(
                      "Configure los aspectos de correo electrónico, como plantillas, listas mailchimp, entre otros."
                    )
                  ])
                ]
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
      _c(
        "el-row",
        { attrs: { gutter: 12 } },
        [
          _c(
            "el-col",
            { attrs: { span: 6 } },
            [
              _c(
                "router-link",
                { attrs: { to: { path: "administracion/puc" } } },
                [
                  _c(
                    "el-card",
                    { staticClass: "card-config", attrs: { shadow: "hover" } },
                    [
                      _c(
                        "h1",
                        [
                          _vm._v("\n            PUC\n            "),
                          _c("icon-aplex", {
                            staticClass: "fr",
                            attrs: { name: "book", scale: "1.5", type: "lnr" }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("hr"),
                      _vm._v(" "),
                      _c("p", [
                        _vm._v(
                          "Configure los códigos PUC usados en la aplicación."
                        )
                      ])
                    ]
                  )
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "el-col",
            { attrs: { span: 6 } },
            [
              _c(
                "router-link",
                { attrs: { to: { path: "administracion/fp" } } },
                [
                  _c(
                    "el-card",
                    { staticClass: "card-config", attrs: { shadow: "hover" } },
                    [
                      _c(
                        "h1",
                        [
                          _c("icon-aplex", {
                            staticClass: "fr",
                            attrs: {
                              name: "briefcase",
                              scale: "1.5",
                              type: "lnr"
                            }
                          }),
                          _vm._v("\n            Forma de pago\n          ")
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("hr"),
                      _vm._v(" "),
                      _c("p", [
                        _vm._v(
                          "Configure las formas de pago permitidas en la aplicación."
                        )
                      ])
                    ]
                  )
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "el-col",
            { attrs: { span: 6 } },
            [
              _c(
                "router-link",
                { attrs: { to: { path: "administracion/iva" } } },
                [
                  _c(
                    "el-card",
                    { staticClass: "card-config", attrs: { shadow: "hover" } },
                    [
                      _c(
                        "h1",
                        [
                          _c("icon-aplex", {
                            staticClass: "fr",
                            attrs: {
                              name: "pie-chart",
                              scale: "1.5",
                              type: "lnr"
                            }
                          }),
                          _vm._v("\n            IVA\n          ")
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("hr"),
                      _vm._v(" "),
                      _c("p", [
                        _vm._v(
                          "Configure el impuesto que tendrá disponible la aplicación."
                        )
                      ])
                    ]
                  )
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "el-col",
            { attrs: { span: 6 } },
            [
              _c(
                "el-card",
                { staticClass: "card-config", attrs: { shadow: "hover" } },
                [
                  _c(
                    "h1",
                    [
                      _c("icon-aplex", {
                        staticClass: "fr",
                        attrs: { name: "file-empty", scale: "1.5", type: "lnr" }
                      }),
                      _vm._v(" "),
                      _c("span", [_vm._v("Tipo de documento")])
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("hr"),
                  _vm._v(" "),
                  _c("p", [
                    _vm._v(
                      "Configure los tipos de documentos con los que realizará los tramites de la aplicación."
                    )
                  ])
                ]
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
      _c(
        "el-row",
        { attrs: { gutter: 12 } },
        [
          _c(
            "el-col",
            { attrs: { span: 6 } },
            [
              _c(
                "router-link",
                { attrs: { to: { path: "configuracion_productos" } } },
                [
                  _c(
                    "el-card",
                    { staticClass: "card-config", attrs: { shadow: "hover" } },
                    [
                      _c(
                        "h1",
                        [
                          _vm._v("\n            Productos\n            "),
                          _c("icon-aplex", {
                            staticClass: "fr",
                            attrs: { name: "shirt", scale: "1.5", type: "lnr" }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("hr"),
                      _vm._v(" "),
                      _c("p", [
                        _vm._v(
                          "Configure los aspectos de productos como taxonomías, impuestos, etc."
                        )
                      ])
                    ]
                  )
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "el-col",
            { attrs: { span: 6 } },
            [
              _c(
                "router-link",
                { attrs: { to: { path: "configuracion/formato_impresion" } } },
                [
                  _c(
                    "el-card",
                    { staticClass: "card-config", attrs: { shadow: "hover" } },
                    [
                      _c(
                        "h1",
                        [
                          _vm._v(
                            "\n            Formato de impresión\n            "
                          ),
                          _c("icon-aplex", {
                            staticClass: "fr",
                            attrs: {
                              name: "file-empty",
                              scale: "1.5",
                              type: "lnr"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("hr"),
                      _vm._v(" "),
                      _c("p", [
                        _vm._v(
                          "Configure un formato de impresión de prueba para la implementación de la nueva manera de imprimir."
                        )
                      ])
                    ]
                  )
                ],
                1
              )
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
    require("vue-hot-reload-api")      .rerender("data-v-23154785", module.exports)
  }
}

/***/ })

});