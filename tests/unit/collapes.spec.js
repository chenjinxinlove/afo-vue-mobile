import {mount} from '@vue/test-utils'
import Demo from '../../src/collapse/demo'
import Vue from 'vue'
import Collapse from '../../src/collapse'
import CollapseItem from '../../src/collapse-item'

describe('Collapse.vue', () => {
  // 测试是否可以被使用
  it('use', () => {
    Vue.use(Collapse)
    expect(Vue.component(Collapse.name))
      .toHaveProperty('name', 'VueComponent')
  })
  it('use', () => {
    Vue.use(CollapseItem)
    expect(Vue.component(CollapseItem.name))
      .toHaveProperty('name', 'VueComponent')
  })
  // demo测试快照
  it('demo snapshot', () => {
    expect(mount(Demo)).toMatchSnapshot()
  })
})
