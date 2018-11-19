import PullRefresh from './compoents/pull-refresh'

PullRefresh.install = function (Vue) {
  Vue.component(PullRefresh.name, PullRefresh)
}

export default PullRefresh
