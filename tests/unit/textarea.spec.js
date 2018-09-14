import { mount } from '@vue/test-utils'
import Demo from '../../src/textarea/demo'
import Vue from 'vue'
import Textarea from '../../src/textarea'

describe('Rate.vue', () => {
  // 测试是否可以被使用
  it('use', () => {
    Vue.use(Textarea)
    expect(Vue.component(Textarea.name)).toHaveProperty('name', 'VueComponent')
  })
  // demo测试快照
  it('demo snapshot', () => {
    expect(mount(Demo)).toMatchSnapshot()
  })
})