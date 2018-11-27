import { mount } from '@vue/test-utils'
import Demo from '../../src/pull-refresh/demo'
import Vue from 'vue'
import PullRefresh from '../../src/pull-refresh'

describe('PullRefresh.vue', () => {
  // 测试是否可以被使用
  it('use', () => {
    Vue.use(PullRefresh)
    expect(Vue.component(PullRefresh.name)).toHaveProperty('name', 'VueComponent')
  })
  //  拉动时改变头部内容
  it('change head content when pulling down', () => {
    const wrapper = mount(PullRefresh, {
      propsData: {
        value: false
      }
    })
    wrapper.vm.$on('input', value => {
      wrapper.vm.value = value
    })

    const track = wrapper.find('.afo-pull-refresh__track')
    // pulling
    track.trigger('touchstart', 0, 0)
    track.trigger('touchmove', 0, 10)
    expect(wrapper).toMatchSnapshot()

    // loosing
    track.trigger('touchmove', 0, 100)
    expect(wrapper).toMatchSnapshot()

    // loading
    track.trigger('touchend', 0, 100)
    expect(wrapper).toMatchSnapshot()

    expect(wrapper.emitted('input')).toBeTruthy()
    expect(wrapper.emitted('refresh')).toBeTruthy()

    // end loading
    wrapper.vm.value = false
    expect(wrapper).toMatchSnapshot()
  })

  it('not in page top', () => {
    const wrapper = mount(PullRefresh, {
      propsData: {
        value: false
      }
    })

    window.scrollTop = 100
    const track = wrapper.find('.van-pull-refresh__track')
    window.scrollTop = 0
    track.trigger(track, 'touchmove', 0, 100)
    expect(wrapper).toMatchSnapshot()
  })

  // demo测试快照
  it('demo snapshot', () => {
    expect(mount(Demo)).toMatchSnapshot()
  })
})
