import Vue from 'vue'
import Card from '../../src/card/index'
import Demo from '../../src/card/demo'
import {shallowMount, mount} from '@vue/test-utils'

describe('Card.vue', () => {
  // 测试是否可以被使用
  it('use', () => {
    Vue.use(Card)
    expect(Vue.component(Card.name))
      .toHaveProperty('name', 'VueComponent')
  })
  // 是否能正确渲染
  it('should render correct contents', () => {
    const wrapper = shallowMount(Card, {
      propsData: {
        desc: '描述信息'
      }
    })
    expect(wrapper.find('.afo-card--label').text()).toBe('描述信息')
  })
  // 测试props
  it('props', () => {
    const wrapper = shallowMount(Card, {
      propsData: {
        title: '标题',
        desc: '描述信息'
      },
      slots: {
        header: '<button>按钮</button>',
        footer: '<button>按钮</button>'
      }
    })
    expect(wrapper.find('button').text()).toBe('按钮')
  })
  // demo测试快照
  it('demo snapshot', () => {
    expect(mount(Demo).html()).toMatchSnapshot()
  })
})
