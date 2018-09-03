import { mount } from '@vue/test-utils'
import Demo from '../../src/slider/demo'
import Vue from 'vue'
import Slider from '../../src/slider'

describe('Rate.vue', () => {
  // 测试是否可以被使用
  it('use', () => {
    Vue.use(Slider)
    expect(Vue.component(Slider.name)).toHaveProperty('name', 'VueComponent')
  })
  // demo测试快照
  it('demo snapshot', () => {
    expect(mount(Demo)).toMatchSnapshot()
  })
})
