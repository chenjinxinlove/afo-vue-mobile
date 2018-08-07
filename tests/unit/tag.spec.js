import { shallowMount } from '@vue/test-utils'
import Vue from 'vue'
import Tag from '../../src/tag'

describe('Tag.vue', () => {
  // 测试是否可以被使用
  it('use', () => {
    Vue.use(Tag)
    expect(Vue.component(Tag.name))
      .toHaveProperty('name', 'VueComponent')
  })
  // 测试props
  it('props', () => {
    const wrapper = shallowMount(Tag, {
      propsData: {
        type: 'primary',
        plain: true
      }
    })
    expect(wrapper.classes()).toEqual(['afo-tag--primaryplain', 'afo-tag'])
  })
  // 测试props
  it('props', () => {
    const wrapper = shallowMount(Tag, {
      propsData: {
        mark: true
      }
    })
    expect(wrapper.classes()).toEqual(['afo-tag--default', 'afo-tag--mark', 'afo-tag'])
  })
})
