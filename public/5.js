webpackJsonp([5],{

/***/ 1616:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1724)
  __webpack_require__(1726)
}
var normalizeComponent = __webpack_require__(6)
/* script */
var __vue_script__ = __webpack_require__(1729)
/* template */
var __vue_template__ = __webpack_require__(1730)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-72911c7d"
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
Component.options.__file = "resources/js/views/login/index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-72911c7d", Component.options)
  } else {
    hotAPI.reload("data-v-72911c7d", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 1724:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1725);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(8)("1b9854e0", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-72911c7d\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/sass-loader/lib/loader.js!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-72911c7d\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/sass-loader/lib/loader.js!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1725:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, "/* reset element-ui css */\n.login-container .el-input {\n  display: inline-block;\n  height: 47px;\n  width: 85%;\n}\n.login-container .el-input input {\n    background: transparent;\n    border: 0px;\n    -webkit-appearance: none;\n    border-radius: 0px;\n    padding: 12px 5px 12px 15px;\n    color: #eee;\n    height: 47px;\n}\n.login-container .el-input input:-webkit-autofill {\n      -webkit-box-shadow: 0 0 0px 1000px #2d3a4b inset !important;\n      -webkit-text-fill-color: #fff !important;\n}\n.login-container .el-form-item {\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  background: rgba(0, 0, 0, 0.1);\n  border-radius: 5px;\n  color: #454545;\n}\n", ""]);

// exports


/***/ }),

/***/ 1726:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1727);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(8)("2b24bb18", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-72911c7d\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/sass-loader/lib/loader.js!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=1!./index.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-72911c7d\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/sass-loader/lib/loader.js!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=1!./index.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1727:
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(89);
exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, "\n.login-container[data-v-72911c7d] {\n  position: fixed;\n  height: 100%;\n  width: 100%;\n  background-image: url(" + escape(__webpack_require__(1728)) + ");\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n.login-container .login-form[data-v-72911c7d] {\n    position: absolute;\n    left: 0;\n    right: 0;\n    width: 450px;\n    padding: 35px 35px 15px 35px;\n    margin: 10% auto;\n}\n.login-container .tips[data-v-72911c7d] {\n    font-size: 14px;\n    color: #fff;\n    margin-bottom: 10px;\n}\n.login-container .tips span[data-v-72911c7d]:first-of-type {\n      margin-right: 16px;\n}\n.login-container .svg-container[data-v-72911c7d] {\n    padding: 6px 5px 6px 15px;\n    color: #889aa4;\n    vertical-align: middle;\n    width: 30px;\n    display: inline-block;\n}\n.login-container .svg-container_login[data-v-72911c7d] {\n      font-size: 20px;\n}\n.login-container .title[data-v-72911c7d] {\n    font-size: 26px;\n    font-weight: 400;\n    color: #eee;\n    margin: 0px auto 40px auto;\n    text-align: center;\n    font-weight: bold;\n}\n.login-container .show-pwd[data-v-72911c7d] {\n    position: absolute;\n    right: 10px;\n    top: 7px;\n    font-size: 16px;\n    color: #889aa4;\n    cursor: pointer;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none;\n}\n", ""]);

// exports


/***/ }),

/***/ 1728:
/***/ (function(module, exports) {

module.exports = "/images/6.jpg?a648f9bd52852ae4c9cfd807cf63e401";

/***/ }),

/***/ 1729:
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

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Login',
  data: function data() {
    return {
      loginForm: {
        username: 'duvierm24@gmail.com',
        password: 'admin'
      },
      loginRules: {
        username: [{ required: true, trigger: 'blur' }],
        password: [{ required: true, trigger: 'blur' }]
      },
      loading: false,
      errorLogin: false,
      pwdType: 'password'
    };
  },

  methods: {
    showPwd: function showPwd() {
      if (this.pwdType === 'password') {
        this.pwdType = '';
      } else {
        this.pwdType = 'password';
      }
    },
    handleLogin: function handleLogin() {
      var _this = this;

      this.$refs.loginForm.validate(function (valid) {
        if (valid) {
          _this.loading = true;
          _this.errorLogin = false;
          _this.$store.dispatch('Login', _this.loginForm).then(function (response) {
            _this.loading = false;
            if (!response) {
              _this.errorLogin = true;
              return false;
            }
            _this.$router.push({ path: '/' });
            // this.$store.dispatch('initialiseAction', this.loginForm).then((response) => {
            //   this.loading = false
            //   this.$router.push({ path: '/' })
            //   console.log('then initialise login');
            // }).catch((error) => {
            //   console.log('catch en acción initialise', error);
            //   this.errorLogin = true
            //   this.loading = true
            // })
          }).catch(function (error) {
            console.log('catch en acción login', error);
            _this.errorLogin = true;
            _this.loading = true;
          });
        } else {
          return false;
        }
      });
    }
  }
});

/***/ }),

/***/ 1730:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "login-container" },
    [
      _c(
        "el-form",
        {
          ref: "loginForm",
          staticClass: "login-form",
          attrs: {
            model: _vm.loginForm,
            rules: _vm.loginRules,
            "auto-complete": "on",
            "label-position": "left"
          }
        },
        [
          _c("div", { staticClass: "title" }, [_vm._v("AplexTM")]),
          _vm._v(" "),
          _c(
            "transition",
            { attrs: { name: "fade" } },
            [
              _c("el-alert", {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: _vm.errorLogin,
                    expression: "errorLogin"
                  }
                ],
                attrs: {
                  title: "Datos de acceso invalidos.",
                  type: "error",
                  "show-icon": ""
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c("br"),
          _vm._v(" "),
          _c(
            "el-form-item",
            { attrs: { prop: "username" } },
            [
              _c(
                "span",
                { staticClass: "svg-container " },
                [_c("icon-aplex", { attrs: { name: "user", type: "lnr" } })],
                1
              ),
              _vm._v(" "),
              _c("el-input", {
                attrs: {
                  name: "username",
                  type: "text",
                  "auto-complete": "on",
                  placeholder: "username"
                },
                model: {
                  value: _vm.loginForm.username,
                  callback: function($$v) {
                    _vm.$set(_vm.loginForm, "username", $$v)
                  },
                  expression: "loginForm.username"
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "el-form-item",
            { attrs: { prop: "password" } },
            [
              _c(
                "span",
                { staticClass: "svg-container" },
                [_c("icon-aplex", { attrs: { name: "lock", type: "lnr" } })],
                1
              ),
              _vm._v(" "),
              _c("el-input", {
                attrs: {
                  type: _vm.pwdType,
                  name: "password",
                  "auto-complete": "on",
                  placeholder: "password"
                },
                nativeOn: {
                  keyup: function($event) {
                    if (
                      !("button" in $event) &&
                      _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")
                    ) {
                      return null
                    }
                    return _vm.handleLogin($event)
                  }
                },
                model: {
                  value: _vm.loginForm.password,
                  callback: function($$v) {
                    _vm.$set(_vm.loginForm, "password", $$v)
                  },
                  expression: "loginForm.password"
                }
              }),
              _vm._v(" "),
              _c(
                "span",
                { staticClass: "show-pwd", on: { click: _vm.showPwd } },
                [_c("icon-aplex", { attrs: { name: "eye", type: "lnr" } })],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "el-form-item",
            [
              _c(
                "el-button",
                {
                  staticStyle: { width: "100%" },
                  attrs: { loading: _vm.loading, type: "primary" },
                  nativeOn: {
                    click: function($event) {
                      $event.preventDefault()
                      return _vm.handleLogin($event)
                    }
                  }
                },
                [_vm._v("\n        Entrar\n      ")]
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
    require("vue-hot-reload-api")      .rerender("data-v-72911c7d", module.exports)
  }
}

/***/ })

});