/* eslint-disable */
const version = require('../package.json').version;

module.exports = {
  header: {
    logo: {
      image: 'https://img.yzcdn.cn/public_files/2017/12/18/fd78cf6bb5d12e2a119d0576bedfd230.png',
      title: 'afo-vue-mobile',
      version,
      href: '#/'
    },
    nav: {
      github: 'https://github.com/chenjinxinlove/afo-vue-mobile'
    }
  },
  nav: [
    {
      name: '组件',
      childrens: [
        {
          childrensName: '基础组件',
          list: [
            {
              path: 'button',
              title: 'button - 按钮'
            },
            {
              path: 'icon',
              title: 'icon-图标'
            },
            {
              path: 'loading',
              title: 'loading'
            },
            {
              path: 'badge',
              title: 'badge-徽章'
            },
            {
              path: 'navbar',
              title: 'navbar-导航'
            },
            {
              path: 'tag',
              title: 'tag-标签'
            },
            {
              path: 'card',
              title: 'card-卡片'
            },
            {
              path: 'notice-bar', title: 'NoticeBar-通告栏'
            },
            {
              path: 'tabbar', title: 'Tarbar'
            },
            {
              path: 'rate', title: 'Rate-评分'
            },
            {
              path: 'tab', title: 'Tab'
            },
            {
              path: 'pagination', title: 'Paganation-分页'
            },
            {
              path: 'progress', title: 'Progress-进度条'
            },
            {
              path: 'steps', title: 'Steps-分步骤'
            },
            {
              path: 'slider', title: 'Slider-滑块'
            },
            {
              path: 'collapse', title: 'Collapse-折叠面板'
            },
            {
              path: 'radio', title: 'Radio-单选框'
            },
            {
              path: 'switch', title: 'Switch-滑动开关'
            },
            {
              path: 'stepper', title: 'Stepper-计步器'
            },
            {
              path: 'textarea', title: 'Textarea-输入框'
            },
            {
              path: 'input', title: 'Input-输入框'
            },
            {
              path: 'popup', title: 'Popup-弹出层'
            },
            {
              path: 'pull-refresh', title: 'PullRefresh-下拉刷新'
            },
            {
              path: 'list', title: 'List-列表'
            },
            {
              path: 'toast', title: 'Toast-轻提示'
            }
          ]
        }
      ]
    }
  ]
}
