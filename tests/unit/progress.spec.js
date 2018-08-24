import { mount } from '@vue/test-utils'
import Demo from '../../src/pagination/demo'
import Vue from 'vue'
import Progress from '../../src/pagination'

describe('Progress.vue', () => {
  // 测试是否可以被使用
  it('use', () => {
    Vue.use(Progress)
    expect(Vue.component(Progress.name)).toHaveProperty('name', 'VueComponent')
  })
  // demo测试快照
  it('demo snapshot', () => {
    expect(mount(Demo)).toMatchSnapshot()
  })
})
