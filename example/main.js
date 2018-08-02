import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import routes from './router'
import VueLazyload from 'vue-lazyload'

window.Promise = window.Promise || Promise

Vue.use(VueRouter)
Vue.use(VueLazyload)

const router = new VueRouter({
  mode: 'hash',
  routes: routes()
})

console.log(router, 'router')

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
