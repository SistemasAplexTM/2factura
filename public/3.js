webpackJsonp([3],{

/***/ 1619:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1752)
}
var normalizeComponent = __webpack_require__(6)
/* script */
var __vue_script__ = __webpack_require__(1754)
/* template */
var __vue_template__ = __webpack_require__(1768)
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
Component.options.__file = "resources/js/views/products/form/Index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2aa8d1fa", Component.options)
  } else {
    hotAPI.reload("data-v-2aa8d1fa", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 1631:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(6)
/* script */
var __vue_script__ = __webpack_require__(1632)
/* template */
var __vue_template__ = __webpack_require__(1633)
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

/***/ 1632:
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

/***/ 1633:
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
            { staticClass: "fl", staticStyle: { "font-size": "25px" } },
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

/***/ 1634:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = addAdminProduct;
/* harmony export (immutable) */ __webpack_exports__["c"] = getAdminProduct;
/* harmony export (immutable) */ __webpack_exports__["d"] = getAdminProductMetaByIds;
/* harmony export (immutable) */ __webpack_exports__["b"] = destroy;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_request__ = __webpack_require__(23);


function addAdminProduct(type, data) {
  return Object(__WEBPACK_IMPORTED_MODULE_0__utils_request__["a" /* default */])({
    url: 'api/adminProduct/' + type,
    method: 'post',
    data: data
  });
}

function getAdminProduct(type) {
  return Object(__WEBPACK_IMPORTED_MODULE_0__utils_request__["a" /* default */])({
    url: 'api/adminProduct/' + type,
    method: 'get'
  });
}

function getAdminProductMetaByIds(data) {
  return Object(__WEBPACK_IMPORTED_MODULE_0__utils_request__["a" /* default */])({
    url: 'api/adminProductMetaByIds',
    method: 'post',
    data: data
  });
}

function destroy(type, id) {
  return Object(__WEBPACK_IMPORTED_MODULE_0__utils_request__["a" /* default */])({
    url: 'api/adminProduct/' + type + '/' + id,
    method: 'delete'
  });
}

/***/ }),

/***/ 1720:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = saveConfig;
/* harmony export (immutable) */ __webpack_exports__["a"] = getConfig;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_request__ = __webpack_require__(23);


function saveConfig(key, data) {
  return Object(__WEBPACK_IMPORTED_MODULE_0__utils_request__["a" /* default */])({
    url: 'api/config/' + key,
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

/***/ 1752:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1753);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(8)("ee2ec6a6", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-2aa8d1fa\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Index.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-2aa8d1fa\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Index.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1753:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ 1754:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Sticky__ = __webpack_require__(1631);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Sticky___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_Sticky__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__General__ = __webpack_require__(1755);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__General___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__General__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Panels__ = __webpack_require__(1760);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Panels___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__Panels__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__api_config__ = __webpack_require__(1720);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  components: { Sticky: __WEBPACK_IMPORTED_MODULE_0__components_Sticky___default.a, General: __WEBPACK_IMPORTED_MODULE_1__General___default.a, Panels: __WEBPACK_IMPORTED_MODULE_2__Panels___default.a },
  data: function data() {
    return {
      columns: 20,
      options: [{
        value: 10,
        label: '10'
      }, {
        value: 12,
        label: '12'
      }, {
        value: 15,
        label: '15'
      }, {
        value: 18,
        label: '18'
      }, {
        value: 20,
        label: '20'
      }],
      ids: []
    };
  },

  computed: {
    columnsPanels: function columnsPanels() {
      return 24 - this.columns;
    }
  },
  created: function created() {
    this.configPanels();
  },

  methods: {
    configPanels: function configPanels() {
      var _this = this;

      Object(__WEBPACK_IMPORTED_MODULE_3__api_config__["a" /* getConfig */])('product').then(function (_ref) {
        var data = _ref.data;

        var data = JSON.parse(data.value);
        _this.ids = data.taxonomies;
      }).catch(function (error) {
        console.log(error);
        _this.$message.error('Error al traer los datos de configuración actual.');
      });
    }
  }
});

/***/ }),

/***/ 1755:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1756)
}
var normalizeComponent = __webpack_require__(6)
/* script */
var __vue_script__ = __webpack_require__(1758)
/* template */
var __vue_template__ = __webpack_require__(1759)
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
Component.options.__file = "resources/js/views/products/form/General.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1164b9d9", Component.options)
  } else {
    hotAPI.reload("data-v-1164b9d9", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 1756:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1757);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(8)("ab92815e", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-1164b9d9\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./General.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-1164b9d9\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./General.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1757:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ 1758:
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

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      form: {
        code: '',
        ref: '',
        name: ''
      },
      loading: false,
      options: [{
        value: 'Option1',
        label: 'Option1'
      }, {
        value: 'Option2',
        label: 'Option2'
      }, {
        value: 'Option3',
        label: 'Option3'
      }, {
        value: 'Option4',
        label: 'Option4'
      }, {
        value: 'Option5',
        label: 'Option5'
      }],
      value: ''
    };
  }
});

/***/ }),

/***/ 1759:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "el-card",
    {
      directives: [
        {
          name: "loading",
          rawName: "v-loading",
          value: _vm.loading,
          expression: "loading"
        }
      ],
      staticClass: "box-card",
      attrs: { shadow: "hover" }
    },
    [
      _c(
        "div",
        { staticClass: "clearfix", attrs: { slot: "header" }, slot: "header" },
        [_c("span", [_vm._v("Datos básicos")]), _vm._v(" "), _vm._t("action")],
        2
      ),
      _vm._v(" "),
      _c(
        "el-form",
        {
          ref: "form",
          attrs: {
            model: _vm.form,
            "label-width": "120px",
            "label-position": "left"
          }
        },
        [
          _c(
            "el-col",
            { attrs: { span: 12 } },
            [
              _c(
                "el-form-item",
                { attrs: { label: "Código", prop: "" } },
                [
                  _c("el-input", {
                    attrs: { placeholder: "Código del producto" },
                    model: {
                      value: _vm.form.code,
                      callback: function($$v) {
                        _vm.$set(_vm.form, "code", $$v)
                      },
                      expression: "form.code"
                    }
                  })
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "el-col",
            { attrs: { span: 12 } },
            [
              _c(
                "el-form-item",
                { attrs: { label: "Referencia", prop: "" } },
                [
                  _c("el-input", {
                    attrs: { placeholder: "Referencia del producto" },
                    model: {
                      value: _vm.form.ref,
                      callback: function($$v) {
                        _vm.$set(_vm.form, "ref", $$v)
                      },
                      expression: "form.ref"
                    }
                  })
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "el-col",
            { attrs: { span: 24 } },
            [
              _c(
                "el-form-item",
                { attrs: { label: "Descripción", prop: "" } },
                [
                  _c("el-input", {
                    attrs: { placeholder: "Descripción del producto" },
                    model: {
                      value: _vm.form.name,
                      callback: function($$v) {
                        _vm.$set(_vm.form, "name", $$v)
                      },
                      expression: "form.name"
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
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-1164b9d9", module.exports)
  }
}

/***/ }),

/***/ 1760:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1761)
}
var normalizeComponent = __webpack_require__(6)
/* script */
var __vue_script__ = __webpack_require__(1763)
/* template */
var __vue_template__ = __webpack_require__(1767)
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
Component.options.__file = "resources/js/views/products/form/Panels.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-e1660ee4", Component.options)
  } else {
    hotAPI.reload("data-v-e1660ee4", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 1761:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1762);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(8)("6ac721ae", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-e1660ee4\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Panels.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-e1660ee4\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Panels.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1762:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ 1763:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_admin_product__ = __webpack_require__(1634);
//
//
//
//
//
//
//
//
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
  props: {
    id: {
      required: true
    }
  },
  data: function data() {
    return {
      checkboxGroup5: [],
      terms: []
    };
  },
  created: function created() {
    this.allByIds();
  },

  methods: {
    allByIds: function allByIds() {
      var _this = this;

      Object(__WEBPACK_IMPORTED_MODULE_0__api_admin_product__["d" /* getAdminProductMetaByIds */])({ 'id': this.id }).then(function (_ref) {
        var data = _ref.data;

        _this.terms = data[0];
      }).catch(function (error) {
        _this.$message.error('Error al traer los datos.');
      });
    }
  }
});

/***/ }),

/***/ 1767:
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
              _c("span", [_vm._v(_vm._s(_vm.terms.description))]),
              _vm._v(" "),
              _c(
                "el-button",
                {
                  staticStyle: { float: "right", padding: "3px 0" },
                  attrs: { type: "text" }
                },
                [_vm._v("Nueva")]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "el-checkbox-group",
            {
              attrs: { size: "small" },
              model: {
                value: _vm.checkboxGroup5,
                callback: function($$v) {
                  _vm.checkboxGroup5 = $$v
                },
                expression: "checkboxGroup5"
              }
            },
            _vm._l(_vm.terms.admin_product_meta, function(term) {
              return _c(
                "div",
                { staticStyle: { display: "inline-block", margin: "5px" } },
                [
                  _c("el-checkbox", {
                    attrs: { label: term.value, border: "" }
                  })
                ],
                1
              )
            })
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("br")
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
    require("vue-hot-reload-api")      .rerender("data-v-e1660ee4", module.exports)
  }
}

/***/ }),

/***/ 1768:
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
        "sticky",
        {
          attrs: { className: "sub-navbar draft", title: "Registrar producto" }
        },
        [
          _c("el-button", { attrs: { size: "small", type: "primary" } }, [
            _vm._v("\n      Guardar\n    ")
          ]),
          _vm._v(" "),
          _c(
            "el-button",
            { attrs: { id: "cancelButton", type: "default", size: "small" } },
            [_vm._v("Cancelar")]
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("br"),
      _vm._v(" "),
      _c(
        "el-row",
        { attrs: { gutter: 15 } },
        [
          _c(
            "el-col",
            { attrs: { span: _vm.columns } },
            [
              _c(
                "general",
                [
                  _c(
                    "el-select",
                    {
                      staticClass: "fr",
                      attrs: { slot: "action", size: "mini" },
                      slot: "action",
                      model: {
                        value: _vm.columns,
                        callback: function($$v) {
                          _vm.columns = $$v
                        },
                        expression: "columns"
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
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "el-col",
            { attrs: { span: _vm.columnsPanels } },
            _vm._l(_vm.ids, function(value) {
              return _c("panels", { key: value, attrs: { id: value } })
            })
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
    require("vue-hot-reload-api")      .rerender("data-v-2aa8d1fa", module.exports)
  }
}

/***/ })

});