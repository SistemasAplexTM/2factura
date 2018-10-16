import Vue from 'vue'
import Router from 'vue-router'
import before from '@/utils/middleware/before/auth';
import { removeToken } from '@/utils/auth' // getToken from cookie

Vue.use(Router)
import Layout from '../views/layout/Layout'

export const constantRouterMap = [
  {
    path: '/login',
    meta: {title: 'Entrar'},
    component: () => import('@/views/login/index'),
    // beforeEnter: (to, from, next) => {
    //     removeToken()
    //     next();
    // }
   },
  {
    path: '/',
    component: Layout,
    redirect: '/inicio',
    name: 'Dashboard',
    hidden: true,
    children: [
      {
        path: 'inicio',
        meta: {title: 'Inicio'},
        component: () => import('@/views/dashboard/Index')
      },
      {
        path: 'perfil',
        meta: {title: 'Perfil'},
        component: () => import('@/views/users/profile/Index')
      },
      {
        path: 'productos',
        meta: {title: 'Productos'},
        component: () => import('@/views/products/Index')
      },
      {
        path: 'productos/nuevo',
        meta: {title: 'Productos'},
        component: () => import('@/views/products/form/Index')
      },
      {
        path: 'configuracion',
        meta: {title: 'Configuración'},
        component: () => import('@/views/settings/Index')
      },
      {
        path: 'configuracion_productos',
        meta: {title: 'Configuración de productos'},
        component: () => import('@/views/products/config/Index')
      },
      {
        path: 'usuarios',
        meta: {title: 'Usuarios'},
        component: () => import('@/views/users/Index')
      },
      {
        path: 'prueba_impresion',
        meta: {title: 'Prueba impresión'},
        component: () => import('@/views/reports/Index')
      },
      {
        path: 'administracion/:type',
        meta: {title: 'administracion'},
        component: () => import('@/views/admin_tables/Index')
      }
    ]
  }
]

const router = new Router({
  // mode: 'history',
  routes: constantRouterMap
})

router.beforeEach(before);

export default router
