import { mount } from '@vue/test-utils'
import Demo from '../../src/pagination/demo'
import Vue from 'vue'
import Pagination from '../../src/pagination'

describe('Rate.vue', () => {
  // 测试是否可以被使用
  it('use', () => {
    Vue.use(Pagination)
    expect(Vue.component(Pagination.name)).toHaveProperty('name', 'VueComponent')
  })
  // demo测试快照
  it('demo snapshot', () => {
    expect(mount(Demo)).toMatchSnapshot()
  })
})
