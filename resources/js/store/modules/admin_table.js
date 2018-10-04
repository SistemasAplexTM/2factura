import { adminById } from '@/api/admin_tables'

const admin = {
  state: {
    admin_editing: {}
  },

  mutations: {
    SET_ADMIN_EDITING: (state, admin_editing) => {
      state.admin_editing = admin_editing
    }
  },

  actions: {
    adminEditing({ commit }, id){
      if (!id) {
        commit('SET_ADMIN_EDITING', '')
        return false
      }else{
        return new Promise((resolve, reject) => {
          adminById(id).then(response => {
            if (!response.data) {
              reject('error')
            }
            commit('SET_ADMIN_EDITING', response.data)
          }).catch(error => {
            reject(error)
          })
        })
      }
    },
  }
}

export default admin
