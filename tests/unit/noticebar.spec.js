import {shallowMount, mount} from '@vue/test-utils'
import sinon from 'sinon'
import Vue from 'vue'
import NoticeBar from '../../src/notice-bar'
import Demo from '../../src/notice-bar/demo'

describe('NotiveBar.vue', () => {
  // 测试是否可以被使用
  it('use', () => {
    Vue.use(NoticeBar)
    expect(Vue.component(NoticeBar.name))
      .toHaveProperty('name', 'VueComponent')
  })
  // 测试是否能正确的显示内容
  it('should render correct contents', () => {
    const wrapper = shallowMount(NoticeBar, {
      propsData: { text: 'test' }
    })
    expect(wrapper.find('.afo-notice-bar__content').text()).toBe('test')
  })
  // 测试不可以滚动
  it('should not scroll', () => {
    const wrapper = shallowMount(NoticeBar, {
      propsData: {
        text: '最近做的项目是从0开始采用Vue作为数据驱动框架。所以有很多Vue实战上的经验体会，下面就专门拿几个常用的但难度不高的VUe功能说',
        scrollable: false
      }
    })
    expect(wrapper.find('.afo-notice-bar__content').html()).toBe('<div class="afo-notice-bar__content " style="padding-left: 0px;">最近做的项目是从0开始采用Vue作为数据驱动框架。所以有很多Vue实战上的经验体会，下面就专门拿几个常用的但难度不高的VUe功能说</div>')
  })
  // 测试props
  it('should render correct contents', () => {
    const wrapper = shallowMount(NoticeBar, {
      propsData: {
        text: 'test',
        mode: 'link',
        color: '#fff',
        background: '#ccc',
        fps: 40,
        delay: 10
      }
    })
    expect(wrapper.attributes().style).toBe('color: rgb(255, 255, 255); background: rgb(204, 204, 204);')
  })
  // 测试关闭
  it('events-called', () => {
    const wrapper = shallowMount(NoticeBar, {
      propsData: {
        text: 'test',
        mode: 'closeable'
      }
    })
    const clickHandler = sinon.stub()
    wrapper.vm.$on('onClick', clickHandler)
    wrapper.trigger('click')
    expect(clickHandler.called).toBe(true)
  })
  // demo测试快照
  it('demo snapshot', () => {
    expect(mount(Demo)).toMatchSnapshot()
  })
})
