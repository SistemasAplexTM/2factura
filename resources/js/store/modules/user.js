import { login, logout, getInfo } from '@/api/login'
import { userById } from '@/api/users'
import { getToken, setToken, removeToken, setAuth, getAuth } from '@/utils/auth'
import { Message, MessageBox } from 'element-ui'

const user = {
  state: {
    token: '',
    isAuth: getAuth() === 'true',
    user: {},
    user_editing: {},
    rol_selected: ''
  },

  mutations: {
    SET_ROL_SELECTED: (state, rol) => {
      state.rol_selected = rol
    },
    SET_USER_EDITING: (state, user_editing) => {
      state.user_editing = user_editing
    },
    SET_LOGIN: (state) => {
      state.isAuth = true
      setToken(true)
    },
    SET_LOGOUT: (state) => {
      state.isAuth = false
      removeToken()
    },
    SET_USER: (state, user) => {
      state.user = user
    },
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_IS_AUTH: (state, val) => {
      state.isAuth = val
    }
  },

  actions: {
    changeRolSelected({ commit }, rol){
      commit('SET_ROL_SELECTED', rol)
    },
    userEditing({ commit }, id){
      if (!id) {
        commit('SET_USER_EDITING', '')
        return false
      }else{
        return new Promise((resolve, reject) => {
          userById(id).then(response => {
            if (!response.data) {
              reject('error')
            }
            commit('SET_ROL_SELECTED', response.data.data.rol)
            commit('SET_USER_EDITING', response.data.data)
          }).catch(error => {
            reject(error)
          })
        })
      }
    },
    // Inicio de sesión
    Login({ commit, state }, userInfo) {
      const username = userInfo.username.trim()
      return new Promise((resolve, reject) => {
        // Llamado a la función login del archivo api/login
        login(username, userInfo.password, false).then(({data}) => {
          commit('SET_TOKEN', data.access_token)
          commit('SET_IS_AUTH', true)
          // Llamada a la funcion del archivo utils/auth
          setToken(data.access_token)
          setAuth(true)
          resolve(true)
        }).catch((error) => {
          reject(error)
        })
      }).catch((error) => {
        // Message({
        //    message: "Datos de acceso invalidos",
        //    type: 'error',
        //    duration: 5 * 1000
        //  })
        return false
      })
    },
    logoutAction({ commit, state }) {
      return new Promise((resolve, reject) => {
        logout().then(() => {
          commit('SET_TOKEN', '')
          commit('SET_IS_AUTH', false)
          setAuth(false)
          removeToken()
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },

    // 前端 登出
    FedLogOut({ commit }) {
      return new Promise(resolve => {
        commit('SET_TOKEN', '')
        removeToken()
        resolve()
      })
    },

    // 动态修改权限
    ChangeRoles({ commit }, role) {
      return new Promise(resolve => {
        commit('SET_TOKEN', role)
        setToken(role)
        getInfo(role).then(response => {
          const data = response.data
          commit('SET_ROLES', data.roles)
          commit('SET_NAME', data.name)
          commit('SET_AVATAR', data.avatar)
          commit('SET_INTRODUCTION', data.introduction)
          resolve()
        })
      })
    }
  }
}

export default user
