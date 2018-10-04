const adminProduct = {
  state: {
    selected_type_text: '',
    selected: '',
    selected_text: '',
    selected_id: ''
  },

  mutations: {
    SET_OPTIONS: (state, data) => {
      state.selected_type_text = data.selected_type_text
      state.selected = data.selected
    },
    SET_SELECTED_ID: (state,data) => {
      state.selected_id = data.selected_id
      state.selected_text = data.selected_text
    }
  }
}

export default adminProduct
