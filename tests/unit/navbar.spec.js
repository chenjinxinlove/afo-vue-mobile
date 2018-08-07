import Navbar from '../../src/navbar/index'
import Vue from 'vue'
// import Demo from '../../src/Navbar/demo'
import { shallowMount } from '@vue/test-utils'
// import { renderToString } from '@vue/server-test-utils'

describe('Navbar.vue', () => {
  // 测试是否可以被使用
  it('use', () => {
    Vue.use(Navbar)
    expect(Vue.component(Navbar.name))
      .toHaveProperty('name', 'VueComponent')
  })
  // 测试props
  it('props', () => {
    const wrapper = shallowMount(Navbar, {
      propsData: {
        title: 'title',
        fixed: true
      },
      slots: {
        left: '<afo-button slot="left" icon="back" @onClick="handleBack">返回</afo-button>',
        right: '<afo-button slot="right" icon="more"></afo-button>'
      }
    })
    expect(wrapper.classes()).toEqual(['afo-navbar', 'is-fixed'])
  })
  // demo测试快照
  // it('demo snapshot', () => {
  //   expect(shallowMount(Demo).html()).toMatchSnapshot()
  // })
})
