import { dataUnique } from '@/api/users'
/**
 * Created by jiachenpan on 16/11/18.
 */
/* 合法uri*/
export function validateURL(textval) {
  const urlregex = /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/
  return urlregex.test(textval)
}

/* 小写字母*/
export function validateLowerCase(str) {
  const reg = /^[a-z]+$/
  return reg.test(str)
}

/* 大写字母*/
export function validateUpperCase(str) {
  const reg = /^[A-Z]+$/
  return reg.test(str)
}

/* 大小写字母*/
export function validatAlphabets(str) {
  const reg = /^[A-Za-z]+$/
  return reg.test(str)
}

export function passwordConfirm(value, password){
  var msg = '';
  if (value === '') {
    msg = 'Debe confirmar la contraseña'
  } else if (value !== password) {
    msg = 'La contraseña no coincide'
  } else {
    msg = 200
  }
  return msg
}

export function unique(table, colum, data, id){
  return dataUnique(table, colum,data, id).then(({data}) => {
    return data.unique
  }).catch(error => {
    return error
  })
}
