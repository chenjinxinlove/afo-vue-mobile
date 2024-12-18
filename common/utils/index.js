import Vue from 'vue'

const isServer = Vue.prototype.$isServer

function isDef (value) {
  return value !== undefined && value !== null
}

function isObj (x) {
  const type = typeof x
  return x !== null && (type === 'object' || type === 'function')
}

function get (object, path) {
  const keys = path.split('.')
  let result = object

  keys.forEach(key => {
    result = isDef(result[key]) ? result[key] : ''
  })

  return result
}

const camelizeRE = /-(\w)/g
function camelize (str) {
  return str.replace(camelizeRE, (_, c) => c.toUpperCase())
}

function isAndroid () {
  /* istanbul ignore next */
  return isServer ? false : /android/.test(navigator.userAgent.toLowerCase())
}

function isIOS () {
  /* istanbul ignore next */
  return isServer ? false : /ios|iphone|ipad|ipod/.test(navigator.userAgent.toLowerCase())
}

function isWeixin () {
  /* istanbul ignore next */
  return isServer ? false : /micromessenger/.test(navigator.userAgent.toLowerCase())
}

function isQQ () {
  /* istanbul ignore next */
  return isServer ? false : /qq/.test(navigator.userAgent.toLowerCase())
}
export {
  get,
  isObj,
  isDef,
  isServer,
  camelize,
  isAndroid,
  isIOS,
  isWeixin,
  isQQ
}
