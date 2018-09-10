import { mount } from '@vue/test-utils'
import Demo from '../../src/radio/demo'
import Vue from 'vue'
import Radio from '../../src/Radio'

describe('Rate.vue', () => {
  // 测试是否可以被使用
  it('use', () => {
    Vue.use(Radio)
    expect(Vue.component(Radio.name)).toHaveProperty('name', 'VueComponent')
  })
  // demo测试快照
  it('demo snapshot', () => {
    expect(mount(Demo)).toMatchSnapshot()
  })
})
