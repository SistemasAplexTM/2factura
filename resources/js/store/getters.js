const getters = {
  sidebar: state => state.app.sidebar,
  avatar: state => 'http://tusimagenesde.com/wp-content/uploads/2018/03/foto-perfil-1.png',
  token: state => state.user.token,
  rol_selected: state => state.user.rol_selected,
  user_editing: state => state.user.user_editing,
  admin_editing: state => state.admin.admin_editing,

  selected_type_text: state => state.adminProduct.selected_type_text,
  selected_text: state => state.adminProduct.selected_text,
  selected: state => state.adminProduct.selected,
  selected_id: state => state.adminProduct.selected_id,

  tree_selected: state => state.product.tree_selected
}
export default getters
