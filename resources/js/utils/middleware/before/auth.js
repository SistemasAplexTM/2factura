import { getToken } from '@/utils/auth' // getToken from cookie
import store from '@/store'
const whiteList = ['/login']// Lista de rutas que no redireccionan
export default (to, from, next) => {
  document.title = to.meta.title;
  if (store.state.user.isAuth) {
    if (to.path === '/login') {
      next({ path: '/' })
    } else {
      next()
    }
    /* sí hay token*/
  } else {
    /* no hay token*/
    if (whiteList.indexOf(to.path) !== -1) { // Si la ruta esta en la lista de excepciones, va directamente
      next()
    } else {
      next('/login') // Los demás se dirijen al login
    }
  }
}
