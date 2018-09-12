import { mount } from '@vue/test-utils'
import Demo from '../../src/switch/demo'
import Vue from 'vue'
import Switch from '../../src/switch'

describe('Switch.vue', () => {
  // 测试是否可以被使用
  it('use', () => {
    Vue.use(Switch)
    expect(Vue.component(Switch.name)).toHaveProperty('name', 'VueComponent')
  })
  // demo测试快照
  it('demo snapshot', () => {
    expect(mount(Demo)).toMatchSnapshot()
  })
})