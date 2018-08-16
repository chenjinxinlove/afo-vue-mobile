<template>
  <div>
    <afo-tabbar v-model="active">
      <afo-tabbar-item>首页
        <img
          slot="icon"
          slot-scope="props"
          :src="props.active ? icon.active : icon.normal"
        >
      </afo-tabbar-item>
      <afo-tabbar-item icon="mall">购物车</afo-tabbar-item>
      <afo-tabbar-item icon="credit-card" dot>订单</afo-tabbar-item>
      <afo-tabbar-item icon="person" info="12">个人中心</afo-tabbar-item>
    </afo-tabbar>
  </div>
</template>
<script>
export default {
  name: 'TabBarDemo',
  data () {
    return {
      active: 0,
      icon: {
        normal: 'https://img.yzcdn.cn/public_files/2017/10/13/c547715be149dd3faa817e4a948b40c4.png',
        active: 'https://img.yzcdn.cn/public_files/2017/10/13/793c77793db8641c4c325b7f25bf130d.png'
      }
    }
  }
}
</script>
