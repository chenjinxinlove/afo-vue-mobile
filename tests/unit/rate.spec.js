import { shallowMount, mount } from '@vue/test-utils'
import Demo from '../../src/rate/demo'
import Vue from 'vue'
import Rate from '../../src/rate'

describe('Rate.vue', () => {
  // 测试是否可以被使用
  it('use', () => {
    Vue.use(Rate)
    expect(Vue.component(Rate.name)).toHaveProperty('name', 'VueComponent')
  })
  // 测试能正常显示内容
  it('props', () => {
    const wrapper = shallowMount(Rate, {
      propsData: {
        type: 'primary',
        plain: true
      }
    })
    expect(wrapper.classes()).toEqual(['afo-tag--primaryplain', 'afo-tag'])
  })
  // demo测试快照
  it('demo snapshot', () => {
    expect(mount(Demo)).toMatchSnapshot()
  })
})
