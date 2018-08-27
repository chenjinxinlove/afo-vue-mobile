import {mount} from '@vue/test-utils'
import Demo from '../../src/steps/demo'
import Vue from 'vue'
import Steps from '../../src/steps/index'

describe('Tag.vue', () => {
  // 测试是否可以被使用
  it('use', () => {
    Vue.use(Steps)
    expect(Vue.component(Steps.name))
      .toHaveProperty('name', 'VueComponent')
  })
  it('use', () => {
    Vue.use(Steps)
    expect(Vue.component(Steps.name))
      .toHaveProperty('name', 'VueComponent')
  })
  // demo测试快照
  it('demo snapshot', () => {
    expect(mount(Demo)).toMatchSnapshot()
  })
})
