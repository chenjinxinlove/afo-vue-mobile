import List from './components/list.vue'

List.install = function (Vue) {
  Vue.component(List.name, List)
}

export default List
