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
              }
          ]
        }
      ]
    }
  ]
}
