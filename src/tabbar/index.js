import TabBar from './components/tabbar.vue'

TabBar.install = function (Vue) {
  Vue.component(TabBar.name, TabBar)
}

export default TabBar
