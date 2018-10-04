import axios from 'axios'
import { Message, MessageBox } from 'element-ui'
import store from '@/store'
import { getToken } from '@/utils/auth'

// Creación de la intancia de Axios
const service = axios.create({
  baseURL: process.env.BASE_API, // api base_url
  timeout: 5000, // Tiempo máximo de espera para una solicitud ajax
  // headers: {
  //   'Authorization': 'Bearer ' + getToken(),
  //   'Content-Type': 'application/json',
  //   'X-Requested-With': 'XMLHttpRequest'
  // }
})
//
// Interceptar solicitud
// service.interceptors.request.use(
//   config => {
//     if (store.getters.token) {
//       config.headers['X-Token'] = getToken() // Dar a cada solicutud un token personalizado
//     }
//     return config
//   },
//   error => {
//     // Acá se debe manejar el error
//     console.log(error) // para depuracón
//     Promise.reject(error)
//   }
// )

// Interceptar respuesta
// service.interceptors.response.use(
  // response => {
  //   console.log('correcto ',response);
  //   /**
  //    * Sí el código no es 200 significa que hay un error
  //    */
  //   const res = response.data
  //   if (res.code !== 200) {
  //     Message({
  //       message: res.message,
  //       type: 'error',
  //       duration: 5 * 1000
  //     })
  //
  //     // 50008:token ilegal; 50012:otros clientes conectados;  50014:token caducado;
  //     // if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
  //     //   MessageBox.confirm(
  //     //     // Traducción literal
  //     //     'Ha cerrado la sesión, puede cancelar para permanecer en esta página o iniciar sesión de nuevo',
  //     //     'Confirmar cierre de sesión',
  //     //     {
  //     //       confirmButtonText: 'Volver a iniciar sesión',
  //     //       cancelButtonText: 'Cancelar',
  //     //       type: 'warning'
  //     //     }
  //     //   ).then(() => {
  //     //     store.dispatch('FedLogOut').then(() => {
  //     //       location.reload() // Se recarga para que se cree una nueva instancia de vue-router y así evitar errores
  //     //     })
  //     //   })
  //     // }
  //     return Promise.reject('error')
  //   } else {
  //     return response.data
  //   }
  // },
//   error => {
//     console.log('incorrecto ' + error) // para depuracón
//     Message({
//       message: error.message,
//       type: 'error',
//       duration: 5 * 1000
//     })
//     return Promise.reject(error)
//   }
// )

export default service
