
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
export function wrapper (promise, name) {
  return promise.then(component => component)
}
