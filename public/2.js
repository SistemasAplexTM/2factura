webpackJsonp([2],{

/***/ 1627:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1781)
}
var normalizeComponent = __webpack_require__(6)
/* script */
var __vue_script__ = __webpack_require__(1783)
/* template */
var __vue_template__ = __webpack_require__(1789)
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
Component.options.__file = "resources/js/views/settings/general/Index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6552a81e", Component.options)
  } else {
    hotAPI.reload("data-v-6552a81e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 1639:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(6)
/* script */
var __vue_script__ = __webpack_require__(1640)
/* template */
var __vue_template__ = __webpack_require__(1641)
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

/***/ 1640:
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

/***/ 1641:
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
          _vm._t("default", [_c("div")])
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

/***/ 1781:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1782);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(8)("7ab8ebb3", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-6552a81e\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Index.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-6552a81e\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Index.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1782:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ 1783:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Sticky__ = __webpack_require__(1639);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Sticky___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_Sticky__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ParamsPrint__ = __webpack_require__(1784);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ParamsPrint___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__ParamsPrint__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  components: { Sticky: __WEBPACK_IMPORTED_MODULE_0__components_Sticky___default.a, ParamsPrint: __WEBPACK_IMPORTED_MODULE_1__ParamsPrint___default.a },
  data: function data() {
    return {};
  },

  methods: {
    save: function save() {}
  }
});

/***/ }),

/***/ 1784:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1785)
}
var normalizeComponent = __webpack_require__(6)
/* script */
var __vue_script__ = __webpack_require__(1787)
/* template */
var __vue_template__ = __webpack_require__(1788)
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
Component.options.__file = "resources/js/views/settings/general/ParamsPrint.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-be799ada", Component.options)
  } else {
    hotAPI.reload("data-v-be799ada", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 1785:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1786);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(8)("362556c0", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-be799ada\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./ParamsPrint.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-be799ada\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./ParamsPrint.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1786:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ 1787:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Sticky__ = __webpack_require__(1639);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Sticky___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_Sticky__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_config__ = __webpack_require__(1727);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      options: [{
        value: 'Option1',
        label: 'Option1'
      }],
      value: '',
      formParams: {
        code: '',
        name: '',
        desc: ''
      },
      params: [],
      search: ''
    };
  },
  created: function created() {
    this.getData();
  },

  methods: {
    save: function save() {
      var _this = this;

      Object(__WEBPACK_IMPORTED_MODULE_1__api_config__["b" /* saveConfig */])('params_print_product', 'params', false, this.params).then(function (_ref) {
        var data = _ref.data;


        _this.reset();
        _this.getData();
        _this.$message({
          message: 'Registrado con éxito.',
          type: 'success'
        });
      }).catch(function (error) {
        _this.$message.error('Error al registrar.');
      });
    },
    getData: function getData() {
      var me = this;
      Object(__WEBPACK_IMPORTED_MODULE_1__api_config__["a" /* getConfig */])('params_print_product').then(function (_ref2) {
        var data = _ref2.data;

        var data = JSON.parse(data.value);
        me.params = data.params;
      }).catch(function (error) {
        console.log(error);
      });
    },
    destroy: function destroy() {},
    update: function update() {},
    handleEdit: function handleEdit() {},
    handleDelete: function handleDelete() {},
    reset: function reset() {
      this.formParams = {
        code: '',
        name: '',
        desc: ''
      };
    }
  }
});

/***/ }),

/***/ 1788:
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
        { attrs: { gutter: 20 } },
        [
          _c(
            "el-col",
            { attrs: { span: 8 } },
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
                        { attrs: { className: "sub-navbar draft", title: "" } },
                        [
                          _c(
                            "el-button",
                            {
                              attrs: { size: "small", type: "primary" },
                              on: { click: _vm.save }
                            },
                            [_vm._v("\n              Guardar\n            ")]
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
                  _c(
                    "el-form",
                    {
                      staticClass: "demo-ruleForm",
                      attrs: {
                        model: _vm.formParams,
                        "status-icon": "",
                        "label-width": "110px",
                        "label-position": "left"
                      }
                    },
                    [
                      _c(
                        "el-form-item",
                        { attrs: { label: "Formato" } },
                        [
                          _c(
                            "el-select",
                            {
                              attrs: { placeholder: "Select" },
                              model: {
                                value: _vm.value,
                                callback: function($$v) {
                                  _vm.value = $$v
                                },
                                expression: "value"
                              }
                            },
                            _vm._l(_vm.options, function(item) {
                              return _c("el-option", {
                                key: item.value,
                                attrs: { label: item.label, value: item.value }
                              })
                            })
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "el-form-item",
                        { attrs: { label: "Código", prop: "code" } },
                        [
                          _c("el-input", {
                            attrs: { type: "text", autoComplete: "off" },
                            model: {
                              value: _vm.formParams.code,
                              callback: function($$v) {
                                _vm.$set(_vm.formParams, "code", $$v)
                              },
                              expression: "formParams.code"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "el-form-item",
                        { attrs: { label: "Nombre", prop: "name" } },
                        [
                          _c("el-input", {
                            attrs: { type: "text", autoComplete: "off" },
                            model: {
                              value: _vm.formParams.name,
                              callback: function($$v) {
                                _vm.$set(_vm.formParams, "name", $$v)
                              },
                              expression: "formParams.name"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "el-form-item",
                        { attrs: { label: "Descripción", prop: "desc" } },
                        [
                          _c("el-input", {
                            attrs: {
                              type: "textarea",
                              autosize: { minRows: 3 }
                            },
                            model: {
                              value: _vm.formParams.desc,
                              callback: function($$v) {
                                _vm.$set(_vm.formParams, "desc", _vm._n($$v))
                              },
                              expression: "formParams.desc"
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
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "el-col",
            { attrs: { span: 16 } },
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
                      _c("sticky", {
                        attrs: { className: "sub-navbar draft", title: "" }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "el-table",
                    {
                      staticStyle: { width: "100%" },
                      attrs: {
                        border: "",
                        data: _vm.params.filter(function(data) {
                          return (
                            !_vm.search ||
                            data.name
                              .toLowerCase()
                              .includes(_vm.search.toLowerCase())
                          )
                        })
                      }
                    },
                    [
                      _c("el-table-column", {
                        attrs: { label: "Código", prop: "code" }
                      }),
                      _vm._v(" "),
                      _c("el-table-column", {
                        attrs: { label: "Nombre", prop: "name" }
                      }),
                      _vm._v(" "),
                      _c("el-table-column", {
                        attrs: { label: "Descripción", prop: "desc" }
                      }),
                      _vm._v(" "),
                      _c("el-table-column", {
                        attrs: { align: "right" },
                        scopedSlots: _vm._u([
                          {
                            key: "header",
                            fn: function(slot) {
                              return [
                                _c("el-input", {
                                  attrs: {
                                    size: "mini",
                                    placeholder: "Type to search"
                                  },
                                  model: {
                                    value: _vm.search,
                                    callback: function($$v) {
                                      _vm.search = $$v
                                    },
                                    expression: "search"
                                  }
                                })
                              ]
                            }
                          },
                          {
                            key: "default",
                            fn: function(scope) {
                              return [
                                _c(
                                  "el-button",
                                  {
                                    attrs: { size: "mini" },
                                    on: {
                                      click: function($event) {
                                        _vm.handleEdit(scope.$index, scope.row)
                                      }
                                    }
                                  },
                                  [_vm._v("Edit")]
                                ),
                                _vm._v(" "),
                                _c(
                                  "el-button",
                                  {
                                    attrs: { size: "mini", type: "danger" },
                                    on: {
                                      click: function($event) {
                                        _vm.handleDelete(
                                          scope.$index,
                                          scope.row
                                        )
                                      }
                                    }
                                  },
                                  [_vm._v("Delete")]
                                )
                              ]
                            }
                          }
                        ])
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
    require("vue-hot-reload-api")      .rerender("data-v-be799ada", module.exports)
  }
}

/***/ }),

/***/ 1789:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {},
    [
      _c("sticky", {
        attrs: { className: "sub-navbar draft", title: "General" }
      }),
      _vm._v(" "),
      _c("br"),
      _vm._v(" "),
      _c(
        "el-row",
        { attrs: { gutter: 20 } },
        [
          _c(
            "el-col",
            { attrs: { span: 4 } },
            [
              _c(
                "el-menu",
                {
                  staticClass: "el-menu-vertical-demo",
                  staticStyle: { "min-height": "500px" },
                  attrs: { "default-active": "1" }
                },
                [
                  _c(
                    "el-menu-item",
                    { attrs: { index: "1" } },
                    [
                      _c("icon-aplex", {
                        staticClass: "icon-menu",
                        attrs: { name: "file-empty", type: "lnr" }
                      }),
                      _vm._v(" "),
                      _c("span", [_vm._v("Formato de impresión")])
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("el-menu-item", { attrs: { index: "2" } }, [
                    _c("i", { staticClass: "el-icon-document" }),
                    _vm._v(" "),
                    _c("span", [_vm._v("Navigator Three")])
                  ]),
                  _vm._v(" "),
                  _c("el-menu-item", { attrs: { index: "3" } }, [
                    _c("i", { staticClass: "el-icon-setting" }),
                    _vm._v(" "),
                    _c("span", [_vm._v("Navigator Four")])
                  ])
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c("el-col", { attrs: { span: 20 } }, [_c("params-print")], 1)
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
    require("vue-hot-reload-api")      .rerender("data-v-6552a81e", module.exports)
  }
}

/***/ })

});