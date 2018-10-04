webpackJsonp([9],{

/***/ 1686:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(6)
/* script */
var __vue_script__ = __webpack_require__(1687)
/* template */
var __vue_template__ = __webpack_require__(1688)
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

/***/ 1687:
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

/***/ 1688:
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

/***/ 1780:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(6)
/* script */
var __vue_script__ = __webpack_require__(1783)
/* template */
var __vue_template__ = __webpack_require__(1784)
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
Component.options.__file = "resources/js/views/products/config/Index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-e232f1fe", Component.options)
  } else {
    hotAPI.reload("data-v-e232f1fe", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 1783:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__attributes__ = __webpack_require__(1788);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__attributes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__attributes__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__attributes_Form__ = __webpack_require__(1804);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__attributes_Form___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__attributes_Form__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__PanelGroup__ = __webpack_require__(1796);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__PanelGroup___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__PanelGroup__);
//
//
//
//
//
//
//
//
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
    return {};
  },

  components: {
    AttributesList: __WEBPACK_IMPORTED_MODULE_0__attributes___default.a, AttributesForm: __WEBPACK_IMPORTED_MODULE_1__attributes_Form___default.a, PanelGroup: __WEBPACK_IMPORTED_MODULE_2__PanelGroup___default.a
  },
  methods: {}
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
    {},
    [
      _c("panel-group"),
      _vm._v(" "),
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
            [_c("span", [_vm._v("Atributos")])]
          ),
          _vm._v(" "),
          _c(
            "el-row",
            { attrs: { gutter: 20 } },
            [
              _c(
                "el-col",
                { attrs: { span: 6 } },
                [_c("attributes-form"), _vm._v(" "), _c("attributes-list")],
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
    require("vue-hot-reload-api")      .rerender("data-v-e232f1fe", module.exports)
  }
}

/***/ }),

/***/ 1788:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(6)
/* script */
var __vue_script__ = __webpack_require__(1789)
/* template */
var __vue_template__ = __webpack_require__(1790)
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
Component.options.__file = "resources/js/views/products/config/attributes/index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-aa58faca", Component.options)
  } else {
    hotAPI.reload("data-v-aa58faca", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 1789:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Buttons_ConfirmButton_vue__ = __webpack_require__(1686);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Buttons_ConfirmButton_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_Buttons_ConfirmButton_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  components: { ConfirmButton: __WEBPACK_IMPORTED_MODULE_0__components_Buttons_ConfirmButton_vue___default.a },
  data: function data() {
    return {
      tableData: [{
        date: '2016-05-03',
        name: 'Color',
        address: 'No. 189, Grove St, Los Angeles'
      }, {
        date: '2016-05-02',
        name: 'Talla',
        address: 'No. 189, Grove St, Los Angeles'
      }, {
        date: '2016-05-04',
        name: 'Estampado',
        address: 'No. 189, Grove St, Los Angeles'
      }, {
        date: '2016-05-01',
        name: 'Bordado',
        address: 'No. 189, Grove St, Los Angeles'
      }]
    };
  }
});

/***/ }),

/***/ 1790:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "el-table",
    {
      staticStyle: { width: "100%" },
      attrs: { border: "", data: _vm.tableData }
    },
    [
      _c("el-table-column", { attrs: { type: "index", width: "50" } }),
      _vm._v(" "),
      _c("el-table-column", {
        attrs: { prop: "name", label: "Nombre", width: "227" }
      }),
      _vm._v(" "),
      _c("el-table-column", {
        attrs: { label: "Operaciones", width: "120" },
        scopedSlots: _vm._u([
          {
            key: "default",
            fn: function(scope) {
              return [
                _c(
                  "el-tooltip",
                  {
                    staticClass: "item",
                    attrs: {
                      effect: "dark",
                      content: "Editar",
                      placement: "top"
                    }
                  },
                  [
                    _c("el-button", {
                      attrs: {
                        size: "small",
                        icon: "el-icon-edit",
                        circle: "",
                        type: "primary"
                      },
                      on: {
                        click: function($event) {
                          _vm.handleEdit(scope.$index, scope.row)
                        }
                      }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c("confirm-button", {
                  on: {
                    "confirmation-success": function($event) {
                      _vm.doAction(_vm.button, _vm.row)
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
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-aa58faca", module.exports)
  }
}

/***/ }),

/***/ 1796:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1801)
}
var normalizeComponent = __webpack_require__(6)
/* script */
var __vue_script__ = __webpack_require__(1799)
/* template */
var __vue_template__ = __webpack_require__(1803)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-4bf36488"
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
Component.options.__file = "resources/js/views/products/config/PanelGroup.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4bf36488", Component.options)
  } else {
    hotAPI.reload("data-v-4bf36488", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 1799:
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

/* harmony default export */ __webpack_exports__["default"] = ({
  methods: {
    handleSetLineChartData: function handleSetLineChartData(type) {
      this.$emit('handleSetLineChartData', type);
    }
  }
});

/***/ }),

/***/ 1801:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1802);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(8)("bc8af2da", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-4bf36488\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./PanelGroup.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-4bf36488\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./PanelGroup.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1802:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, "\n.panel-group[data-v-4bf36488] {\n  margin-top: 18px;\n}\n.panel-group .card-panel-col[data-v-4bf36488] {\n    margin-bottom: 32px;\n}\n.panel-group .card-panel[data-v-4bf36488] {\n    height: 108px;\n    cursor: pointer;\n    font-size: 12px;\n    position: relative;\n    overflow: hidden;\n    color: #666;\n    background: #fff;\n    -webkit-box-shadow: 4px 4px 40px rgba(0, 0, 0, 0.05);\n            box-shadow: 4px 4px 40px rgba(0, 0, 0, 0.05);\n    border-color: rgba(0, 0, 0, 0.05);\n}\n.panel-group .card-panel:hover .card-panel-icon-wrapper[data-v-4bf36488] {\n      color: #fff;\n}\n.panel-group .card-panel:hover .icon-people[data-v-4bf36488] {\n      background: #40c9c6;\n}\n.panel-group .card-panel:hover .icon-message[data-v-4bf36488] {\n      background: #36a3f7;\n}\n.panel-group .card-panel:hover .icon-money[data-v-4bf36488] {\n      background: #f4516c;\n}\n.panel-group .card-panel:hover .icon-shoppingCard[data-v-4bf36488] {\n      background: #34bfa3;\n}\n.panel-group .card-panel .icon-people[data-v-4bf36488] {\n      color: #40c9c6;\n}\n.panel-group .card-panel .icon-message[data-v-4bf36488] {\n      color: #36a3f7;\n}\n.panel-group .card-panel .icon-money[data-v-4bf36488] {\n      color: #f4516c;\n}\n.panel-group .card-panel .icon-shoppingCard[data-v-4bf36488] {\n      color: #34bfa3;\n}\n.panel-group .card-panel .card-panel-icon-wrapper[data-v-4bf36488] {\n      float: left;\n      margin: 14px 0 0 14px;\n      padding: 14px;\n      -webkit-transition: all 0.38s ease-out;\n      transition: all 0.38s ease-out;\n      border-radius: 6px;\n}\n.panel-group .card-panel .card-panel-icon[data-v-4bf36488] {\n      float: left;\n      font-size: 48px;\n}\n.panel-group .card-panel .card-panel-description[data-v-4bf36488] {\n      float: right;\n      font-weight: bold;\n      margin: 26px;\n      margin-left: 0px;\n}\n.panel-group .card-panel .card-panel-description .card-panel-text[data-v-4bf36488] {\n        line-height: 18px;\n        color: rgba(0, 0, 0, 0.45);\n        font-size: 16px;\n        margin-bottom: 12px;\n}\n.panel-group .card-panel .card-panel-description .card-panel-num[data-v-4bf36488] {\n        font-size: 20px;\n}\n", ""]);

// exports


/***/ }),

/***/ 1803:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "el-row",
    { staticClass: "panel-group", attrs: { gutter: 40 } },
    [
      _c(
        "el-col",
        { staticClass: "card-panel-col", attrs: { xs: 12, sm: 12, lg: 6 } },
        [
          _c(
            "div",
            {
              staticClass: "card-panel",
              on: {
                click: function($event) {
                  _vm.handleSetLineChartData("shoppings")
                }
              }
            },
            [
              _c(
                "div",
                { staticClass: "card-panel-icon-wrapper icon-shoppingCard" },
                [
                  _c("icon-aplex", {
                    attrs: {
                      name: "cog",
                      scale: "4",
                      type: "lnr",
                      "class-name": "card-panel-icon"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c("div", { staticClass: "card-panel-description" }, [
                _c("div", { staticClass: "card-panel-text" }, [
                  _vm._v("general")
                ]),
                _vm._v("\n        12564\n      ")
              ])
            ]
          )
        ]
      ),
      _vm._v(" "),
      _c(
        "el-col",
        { staticClass: "card-panel-col", attrs: { xs: 12, sm: 12, lg: 6 } },
        [
          _c(
            "div",
            {
              staticClass: "card-panel",
              on: {
                click: function($event) {
                  _vm.handleSetLineChartData("messages")
                }
              }
            },
            [
              _c(
                "div",
                { staticClass: "card-panel-icon-wrapper icon-message" },
                [
                  _c("icon-aplex", {
                    attrs: {
                      name: "text-size",
                      scale: "4",
                      type: "lnr",
                      "class-name": "card-panel-icon"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c("div", { staticClass: "card-panel-description" }, [
                _c("div", { staticClass: "card-panel-text" }, [
                  _vm._v("Atributos")
                ]),
                _vm._v("\n        12564\n      ")
              ])
            ]
          )
        ]
      ),
      _vm._v(" "),
      _c(
        "el-col",
        { staticClass: "card-panel-col", attrs: { xs: 12, sm: 12, lg: 6 } },
        [
          _c(
            "div",
            {
              staticClass: "card-panel",
              on: {
                click: function($event) {
                  _vm.handleSetLineChartData("newVisitis")
                }
              }
            },
            [
              _c(
                "div",
                { staticClass: "card-panel-icon-wrapper icon-people" },
                [
                  _c("icon-aplex", {
                    attrs: {
                      name: "layers",
                      scale: "4",
                      type: "lnr",
                      "class-name": "card-panel-icon"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c("div", { staticClass: "card-panel-description" }, [
                _c("div", { staticClass: "card-panel-text" }, [
                  _vm._v("Taxonomías")
                ]),
                _vm._v("\n        12564\n      ")
              ])
            ]
          )
        ]
      ),
      _vm._v(" "),
      _c(
        "el-col",
        { staticClass: "card-panel-col", attrs: { xs: 12, sm: 12, lg: 6 } },
        [
          _c(
            "div",
            {
              staticClass: "card-panel",
              on: {
                click: function($event) {
                  _vm.handleSetLineChartData("purchases")
                }
              }
            },
            [
              _c(
                "div",
                { staticClass: "card-panel-icon-wrapper icon-money" },
                [
                  _c("icon-aplex", {
                    attrs: {
                      name: "select",
                      scale: "4",
                      type: "lnr",
                      "class-name": "card-panel-icon"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c("div", { staticClass: "card-panel-description" }, [
                _c("div", { staticClass: "card-panel-text" }, [
                  _vm._v("Tipos de producto")
                ]),
                _vm._v("\n        12564\n      ")
              ])
            ]
          )
        ]
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
    require("vue-hot-reload-api")      .rerender("data-v-4bf36488", module.exports)
  }
}

/***/ }),

/***/ 1804:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(6)
/* script */
var __vue_script__ = __webpack_require__(1805)
/* template */
var __vue_template__ = __webpack_require__(1806)
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
Component.options.__file = "resources/js/views/products/config/attributes/Form.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-14ed11aa", Component.options)
  } else {
    hotAPI.reload("data-v-14ed11aa", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 1805:
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

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      form: {
        name: ''
      }
    };
  },

  methods: {
    onSubmit: function onSubmit() {
      console.log('submit!');
    }
  }
});

/***/ }),

/***/ 1806:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "el-form",
    { ref: "form", attrs: { inline: true, model: _vm.form } },
    [
      _c(
        "el-form-item",
        [
          _c("el-input", {
            attrs: { placeholder: "Nuevo atributo" },
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
      ),
      _vm._v(" "),
      _c(
        "el-form-item",
        { attrs: { label: "" } },
        [
          _c("el-button", {
            attrs: { icon: "el-icon-check", size: "small", type: "success" }
          })
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
    require("vue-hot-reload-api")      .rerender("data-v-14ed11aa", module.exports)
  }
}

/***/ })

});