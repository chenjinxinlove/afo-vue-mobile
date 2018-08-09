import Navbar from '../../src/navbar/index'
import Vue from 'vue'
import Demo from '../../src/Navbar/demo'
import {shallowMount, mount} from '@vue/test-utils'

describe('Navbar.vue', () => {
  // 测试是否可以被使用
  it('use', () => {
    Vue.use(Navbar)
    expect(Vue.component(Navbar.name))
      .toHaveProperty('name', 'VueComponent')
  })
  // 是否能正确渲染
  it('props', () => {
    const wrapper = shallowMount(Navbar)
    expect(wrapper.classes()).toEqual(['afo-navbar'])
  })
  // 测试props
  it('props', () => {
    const wrapper = shallowMount(Navbar, {
      propsData: {
        title: 'title',
        fixed: true
      },
      slots: {
        left: '<button>left</button>',
        right: '<button>right</button>'
      }
    })
    expect(wrapper.classes()).toEqual(['afo-navbar', 'is-fixed'])
  })
  // demo测试快照
  it('demo snapshot', () => {
    expect(mount(Demo).html()).toMatchSnapshot()
  })
})
