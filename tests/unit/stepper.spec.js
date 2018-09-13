import { mount } from '@vue/test-utils'
import Demo from '../../src/stepper/demo'
import Vue from 'vue'
import Stepper from '../../src/stepper'

describe('Rate.vue', () => {
  // 测试是否可以被使用
  it('use', () => {
    Vue.use(Stepper)
    expect(Vue.component(Stepper.name)).toHaveProperty('name', 'VueComponent')
  })
  // demo测试快照
  it('demo snapshot', () => {
    expect(mount(Demo)).toMatchSnapshot()
  })
})