import Icon from '../../src/icon/index'
import Vue from 'vue'
import sinon from 'sinon'
import Demo from '../../src/icon/demo'
import { shallowMount } from '@vue/test-utils'

describe('Icon.vue', () => {
  // 测试是否可以被使用
  it('use', () => {
    Vue.use(Icon)
    expect(Vue.component(Icon.name))
      .toHaveProperty('name', 'VueComponent')
  })
  // 测试是否可以正确的显示内容
  it('should render correct contents', () => {
    const wrapper = shallowMount(Icon, {
      propsData: {type: 'select'}
    })
    expect(wrapper.find('i').classes()).toContain('afo-icon-select')
  })
  // 测试props
  it('props', () => {
    const wrapper = shallowMount(Icon, {
      propsData: {
        type: 'select',
        color: 'red',
        size: '24px'
      }
    })
    expect(wrapper.attributes().style).toBe('color: red; font-size: 24px;')
    expect(wrapper.html()).toBe('<i class="afo-icon afo-icon-select" style="color: red; font-size: 24px;"></i>')
  })
  // 测试事件可以被处理
  it('events-called', () => {
    const clickHandler = sinon.stub()
    const wrapper = shallowMount(Icon)
    wrapper.vm.$on('onClick', clickHandler)
    wrapper.trigger('click')
    expect(clickHandler.called).toBe(true)
  })
  // demo测试快照
  it('demo snapshot', () => {
    expect(shallowMount(Demo).html()).toMatchSnapshot()
  })
})
