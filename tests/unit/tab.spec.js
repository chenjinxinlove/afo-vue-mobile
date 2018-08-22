import {mount} from '@vue/test-utils'
import Demo from '../../src/tab/demo'
import Vue from 'vue'
import Tab from '../../src/tab'
import Tabs from '../../src/tabs/index'

describe('Tag.vue', () => {
  // 测试是否可以被使用
  it('use', () => {
    Vue.use(Tab)
    expect(Vue.component(Tab.name))
      .toHaveProperty('name', 'VueComponent')
  })
  it('use', () => {
    Vue.use(Tabs)
    expect(Vue.component(Tabs.name))
      .toHaveProperty('name', 'VueComponent')
  })
  // demo测试快照
  it('demo snapshot', () => {
    expect(mount(Demo)).toMatchSnapshot()
  })
})
