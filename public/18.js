webpackJsonp([18],{

/***/ 1626:
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
var __vue_template__ = __webpack_require__(1786)
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

/***/ 1633:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(6)
/* script */
var __vue_script__ = __webpack_require__(1639)
/* template */
var __vue_template__ = __webpack_require__(1640)
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

/***/ 1639:
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

/***/ 1640:
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

/***/ 1641:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(6)
/* script */
var __vue_script__ = __webpack_require__(1642)
/* template */
var __vue_template__ = __webpack_require__(1643)
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
Component.options.__file = "resources/js/components/Buttons/ConfirmButton.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-28e45489", Component.options)
  } else {
    hotAPI.reload("data-v-28e45489", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 1642:
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

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'confirm-button',
  props: {
    messages: Array,
    css: {
      type: String,
      default: ''
    }
  },
  data: function data() {
    return {
      defaultSteps: ['el-icon-delete', 'el-icon-check'],
      currentStep: 0,
      tooltipMessages: ['Eliminar', 'Confirmar'],
      type: ['danger', 'success']
    };
  },

  computed: {
    messageList: function messageList() {
      return this.messages ? this.messages : this.defaultSteps;
    },
    currentMessage: function currentMessage() {
      return this.messageList[this.currentStep];
    },
    currentTooltipMessage: function currentTooltipMessage() {
      return this.tooltipMessages[this.currentStep];
    },
    currentType: function currentType() {
      return this.type[this.currentStep];
    },
    lastMessageIndex: function lastMessageIndex() {
      return this.messageList.length;
    },
    stepsComplete: function stepsComplete() {
      return this.currentStep === this.lastMessageIndex;
    }
  },
  methods: {
    incrementStep: function incrementStep() {
      this.currentStep++;
      if (this.stepsComplete) {
        this.$emit('confirmation-success');
        this.reset();
      } else {
        this.$emit('confirmation-incremented');
      }
    },
    reset: function reset() {
      this.currentStep = 0;
      this.$emit('confirmation-reset');
    }
  }
});

/***/ }),

/***/ 1643:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "el-tooltip",
    {
      staticClass: "item",
      attrs: {
        effect: "dark",
        content: _vm.currentTooltipMessage,
        placement: "top"
      }
    },
    [
      _c("el-button", {
        attrs: {
          size: "small",
          type: _vm.currentType,
          icon: _vm.currentMessage,
          circle: ""
        },
        on: {
          click: function($event) {
            $event.preventDefault()
            _vm.incrementStep()
          }
        },
        nativeOn: {
          blur: function($event) {
            _vm.reset()
          }
        }
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
    require("vue-hot-reload-api")      .rerender("data-v-28e45489", module.exports)
  }
}

/***/ }),

/***/ 1644:
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

/***/ 1778:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1779);
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

/***/ 1779:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ 1780:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Sticky__ = __webpack_require__(1633);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Sticky___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_Sticky__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ParamsPrint__ = __webpack_require__(1781);
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

/***/ 1781:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1782)
}
var normalizeComponent = __webpack_require__(6)
/* script */
var __vue_script__ = __webpack_require__(1784)
/* template */
var __vue_template__ = __webpack_require__(1785)
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

/***/ 1782:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1783);
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

/***/ 1783:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ 1784:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Sticky__ = __webpack_require__(1633);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Sticky___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_Sticky__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_config__ = __webpack_require__(1644);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Buttons_ConfirmButton__ = __webpack_require__(1641);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Buttons_ConfirmButton___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_Buttons_ConfirmButton__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  components: { Sticky: __WEBPACK_IMPORTED_MODULE_0__components_Sticky___default.a, ConfirmButton: __WEBPACK_IMPORTED_MODULE_2__components_Buttons_ConfirmButton___default.a },
  data: function data() {
    return {
      editing: false,
      index_editing: null,
      options: [{
        value: 'product',
        label: 'Product'
      }, {
        value: 'nuevo',
        label: 'Nuevo'
      }],
      format: '',
      params: [],
      search: '',
      formParams: {
        code: '',
        name: '',
        desc: ''
      },
      rules: {
        format: [{ required: true, message: 'Formato requerido', trigger: 'change' }],
        code: [{ required: true, message: 'Código requerido', trigger: 'blur' }],
        name: [{ required: true, message: 'Nombre requerido', trigger: 'blur' }],
        desc: [{ required: true, message: 'Descripción requerida', trigger: 'blur' }]
      }
    };
  },

  methods: {
    save: function save(push) {
      var _this = this;

      this.$refs['formParams'].validate(function (valid) {
        if (valid) {
          if (push) {
            _this.params.push(_this.formParams);
          }
          Object(__WEBPACK_IMPORTED_MODULE_1__api_config__["b" /* saveConfig */])('params_print_' + _this.format, 'params', false, _this.params).then(function (_ref) {
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
        }
      });
    },
    getData: function getData() {
      var me = this;
      if (this.format != "") {
        Object(__WEBPACK_IMPORTED_MODULE_1__api_config__["a" /* getConfig */])('params_print_' + this.format).then(function (_ref2) {
          var data = _ref2.data;

          var data = JSON.parse(data.value);
          me.params = data.params;
        }).catch(function (error) {
          console.log(error);
        });
      } else {
        me.params = [];
      }
    },
    edit: function edit(index, row) {
      this.editing = true;
      this.index_editing = index;
      this.formParams = row;
    },
    update: function update() {
      this.params[this.index_editing] = this.formParams;
      this.save(false);
    },
    destroy: function destroy(index, row) {
      var _this2 = this;

      this.params.splice(index, 1);
      Object(__WEBPACK_IMPORTED_MODULE_1__api_config__["b" /* saveConfig */])('params_print_' + this.format, 'params', false, this.params).then(function (_ref3) {
        var data = _ref3.data;

        _this2.getData();
        _this2.$message({
          message: 'Eliminado con éxito.',
          type: 'success'
        });
      }).catch(function (error) {
        _this2.$message.error('Error al registrar.');
      });
    },
    reset: function reset() {
      this.editing = false;
      this.formParams = {
        code: '',
        name: '',
        desc: ''
      };
      this.$refs['formParams'].resetFields();
      this.getData();
    }
  }
});

/***/ }),

/***/ 1785:
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
                          !_vm.editing
                            ? _c(
                                "el-button",
                                {
                                  attrs: { size: "small", type: "primary" },
                                  on: {
                                    click: function($event) {
                                      _vm.save(true)
                                    }
                                  }
                                },
                                [
                                  _vm._v(
                                    "\n              Guardar\n            "
                                  )
                                ]
                              )
                            : _c(
                                "el-button",
                                {
                                  attrs: { size: "small", type: "primary" },
                                  on: { click: _vm.update }
                                },
                                [
                                  _vm._v(
                                    "\n              Actualizar\n            "
                                  )
                                ]
                              ),
                          _vm._v(" "),
                          _c(
                            "el-button",
                            {
                              attrs: {
                                id: "cancelButton",
                                type: "default",
                                size: "small"
                              },
                              on: { click: _vm.reset }
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
                      ref: "formParams",
                      staticClass: "demo-ruleForm",
                      attrs: {
                        model: _vm.formParams,
                        rules: _vm.rules,
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
                              staticClass: "w100",
                              attrs: {
                                clearable: "",
                                placeholder: "Seleccione formato"
                              },
                              on: {
                                change: function($event) {
                                  _vm.getData()
                                }
                              },
                              model: {
                                value: _vm.format,
                                callback: function($$v) {
                                  _vm.format = $$v
                                },
                                expression: "format"
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
                        }),
                        "empty-text": "No hay datos"
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
                        attrs: { width: "100", align: "right" },
                        scopedSlots: _vm._u([
                          {
                            key: "default",
                            fn: function(scope) {
                              return [
                                _c("el-button", {
                                  attrs: {
                                    size: "small",
                                    icon: "el-icon-edit",
                                    type: "primary",
                                    circle: ""
                                  },
                                  on: {
                                    click: function($event) {
                                      _vm.edit(scope.$index, scope.row)
                                    }
                                  }
                                }),
                                _vm._v(" "),
                                _c("confirm-button", {
                                  on: {
                                    "confirmation-success": function($event) {
                                      _vm.destroy(scope.$index, scope.row)
                                    }
                                  }
                                })
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

/***/ 1786:
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
                  _c(
                    "el-menu-item",
                    { attrs: { index: "2" } },
                    [
                      _c("icon-aplex", {
                        staticClass: "icon-menu",
                        attrs: { name: "earth", type: "lnr" }
                      }),
                      _vm._v(" "),
                      _c("span", [_vm._v("Idioma")])
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