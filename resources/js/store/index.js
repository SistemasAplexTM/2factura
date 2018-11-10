import Vue from 'vue'
import Vuex from 'vuex'
import app from './modules/app'
import user from './modules/user'
import admin from './modules/admin_table'
import adminProduct from './modules/admin_product'
import product from './modules/product'
import getters from './getters'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    app,
    user,
    admin,
    adminProduct,
    product,
  },
  getters
})

export default store
