import Loading from '../../src/loading/index'
import Vue from 'vue'
import Demo from '../../src/loading/demo'
import {shallowMount, mount} from '@vue/test-utils'

describe('Loading.vue', () => {
  // 测试是否可以被使用
  it('use', () => {
    Vue.use(Loading)
    expect(Vue.component(Loading.name))
      .toHaveProperty('name', 'VueComponent')
  })
  // 测试props
  it('props', () => {
    const wrapper = shallowMount(Loading, {
      propsData: {
        color: 'white',
        size: '40'
      }
    })
    expect(wrapper.classes()).toEqual(['afo-loading', 'afo-loading-white'])
    expect(wrapper.find('.afo-loading-spinners').attributes().style).toBe('width: 40px; height: 40px;')
  })
  // demo测试快照
  it('demo snapshot', () => {
    expect(mount(Demo)).toMatchSnapshot()
  })
})
