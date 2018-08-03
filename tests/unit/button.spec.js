import { shallowMount } from '@vue/test-utils'
import sinon from 'sinon'
import Vue from 'vue'
import Button from '../../src/button'
import Demo from '../../src/button/demo'

describe('Button.vue', () => {
  // 测试是否可以被使用
  it('use', () => {
    Vue.use(Button)
    expect(Vue.component(Button.name))
      .toHaveProperty('name', 'VueComponent')
  })
  // 测试是否能正确的显示内容
  it('should render correct contents', () => {
    const wrapper = shallowMount(Button, {
      propsData: { icon: 'test' }
    })
    expect(wrapper.find('i').classes()).toContain('afo-test')
  })
  // 测试props
  it('props', () => {
    const wrapper = shallowMount(Button, {
      propsData: {
        effect: 'submit',
        type: 'primary',
        size: 'large',
        disabled: true,
        inline: true,
        plain: true
      }
    })
    expect(wrapper.attributes().type).toBe('submit')
    expect(wrapper.attributes().disabled).toBe('disabled')
    expect(wrapper.classes()).toEqual(['afo-button', 'afo-button--primaryplain', 'afo-button--large', 'afo-button-disabled', 'afo-button-inline'])
  })
  // 测试事件可以被处理
  it('events-called', () => {
    const clickHandler = sinon.stub()
    const wrapper = shallowMount(Button)
    wrapper.vm.$on('onClick', clickHandler)
    wrapper.trigger('click')
    expect(clickHandler.called).toBe(true)
  })
  // 测试事件disabled不被响应
  it('events-no-disabled-called', () => {
    const clickHandler = sinon.stub()
    const wrapper = shallowMount(Button, {
      propsData: {
        disabled: true
      }
    })
    wrapper.vm.$on('onClick', clickHandler)
    wrapper.trigger('click')
    expect(clickHandler.called).toBe(false)
  })
  // 测试事件loading不被响应
  it('events-no-loading-called', () => {
    const clickHandler = sinon.stub()
    const wrapper = shallowMount(Button, {
      propsData: {
        loading: true
      }
    })
    wrapper.vm.$on('onClick', clickHandler)
    wrapper.trigger('click')
    expect(clickHandler.called).toBe(false)
  })
  // demo测试快照
  it('demo snapshot', () => {
    expect(shallowMount(Demo).html()).toMatchSnapshot()
  })
})
