webpackJsonp([7],{

/***/ 1626:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(6)
/* script */
var __vue_script__ = __webpack_require__(1779)
/* template */
var __vue_template__ = __webpack_require__(1780)
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
Component.options.__file = "resources/js/views/settings/FormatPrint.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0c2fcd2e", Component.options)
  } else {
    hotAPI.reload("data-v-0c2fcd2e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 1634:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(6)
/* script */
var __vue_script__ = __webpack_require__(1641)
/* template */
var __vue_template__ = __webpack_require__(1642)
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

/***/ 1641:
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

/***/ 1642:
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

/***/ 1779:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Sticky__ = __webpack_require__(1634);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Sticky___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_Sticky__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_config__ = __webpack_require__(1640);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      myHTML: '',
      activeName: '1',
      params: []
    };
  },
  created: function created() {
    var _this = this;

    Object(__WEBPACK_IMPORTED_MODULE_1__api_config__["a" /* getConfig */])('params_print_product').then(function (_ref) {
      var data = _ref.data;

      var data = JSON.parse(data.value);
      _this.params = data.params;
    }).catch(function (error) {
      console.log(error);
    });

    Object(__WEBPACK_IMPORTED_MODULE_1__api_config__["a" /* getConfig */])('format_print_product').then(function (_ref2) {
      var data = _ref2.data;

      _this.myHTML = data.value;
      _this.$refs.editor.setContent(_this.myHTML);
    }).catch(function (error) {
      _this.$message.error('Error al registrar.');
    });
  },

  methods: {
    save: function save() {
      var _this2 = this;

      this.myHTML = this.$refs.editor.getContent();
      Object(__WEBPACK_IMPORTED_MODULE_1__api_config__["b" /* saveConfig */])('format_print_product', 'format_print', true, this.myHTML).then(function (_ref3) {
        var data = _ref3.data;

        _this2.$message({
          message: 'Registrado con éxito.',
          type: 'success'
        });
      }).catch(function (error) {
        _this2.$message.error('Error al registrar.');
      });
      Object(__WEBPACK_IMPORTED_MODULE_1__api_config__["b" /* saveConfig */])('params_print_product', 'params', false, this.params).then(function (_ref4) {
        var data = _ref4.data;

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

/***/ 1780:
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
                    [_vm._v("\n          Guardar\n        ")]
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
          _c(
            "el-row",
            { attrs: { gutter: 15 } },
            [
              _c(
                "el-col",
                { attrs: { span: 18 } },
                [
                  _c("vueditor", {
                    ref: "editor",
                    staticStyle: { "min-height": "600px" }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "el-col",
                { attrs: { span: 5, offset: 1 } },
                [
                  _c("h1", { staticClass: "text-center" }, [
                    _c("strong", [_vm._v("Listado de variables")])
                  ]),
                  _vm._v(" "),
                  _c("br"),
                  _vm._v(" "),
                  _c(
                    "el-collapse",
                    {
                      attrs: { accordion: "" },
                      model: {
                        value: _vm.activeName,
                        callback: function($$v) {
                          _vm.activeName = $$v
                        },
                        expression: "activeName"
                      }
                    },
                    _vm._l(_vm.params, function(value, index) {
                      return _c(
                        "el-collapse-item",
                        { key: index, attrs: { name: index } },
                        [
                          _c(
                            "template",
                            { slot: "title" },
                            [
                              _c(
                                "el-popover",
                                {
                                  attrs: {
                                    placement: "left-start",
                                    title: value.name,
                                    width: "200",
                                    trigger: "hover",
                                    content: value.desc
                                  }
                                },
                                [
                                  _c(
                                    "span",
                                    {
                                      staticStyle: { "font-size": "15px" },
                                      attrs: { slot: "reference" },
                                      slot: "reference"
                                    },
                                    [_vm._v(_vm._s(value.code))]
                                  )
                                ]
                              )
                            ],
                            1
                          )
                        ],
                        2
                      )
                    })
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
    require("vue-hot-reload-api")      .rerender("data-v-0c2fcd2e", module.exports)
  }
}

/***/ })

});