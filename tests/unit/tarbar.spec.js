import {shallowMount, mount} from '@vue/test-utils'
import Demo from '../../src/tabbar/demo/'
import Vue from 'vue'
import TarBar from '../../src/tabbar/'
// import TarBarItem from '../../src/tabbar-item'

describe('Tarbar.vue', () => {
  // 测试是否可以被使用
  it('use', () => {
    Vue.use(TarBar)
    expect(Vue.component(TarBar.name))
      .toHaveProperty('name', 'VueComponent')
  })
  // 测试props
  it('props', () => {
    const wrapper = shallowMount(TarBar, {
      propsData: {
        title: 'title',
        fixed: true
      },
      slots: {
        default: '<TarBarItem>left</TarBarItem>'
      }
    })
    expect(wrapper.classes()).toEqual(['afo-tabbar', 'afo-tabbar--fixed'])
  })
  // demo测试快照
  it('demo snapshot', () => {
    expect(mount(Demo)).toMatchSnapshot()
  })
})
