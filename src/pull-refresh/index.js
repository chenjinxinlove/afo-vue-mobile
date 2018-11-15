import PullRefresh from './components/pull-refresh'

PullRefresh.install = function (Vue) {
  Vue.component(PullRefresh.name, PullRefresh)
}

export default PullRefresh
