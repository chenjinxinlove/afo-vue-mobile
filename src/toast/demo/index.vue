<template>
  <div class="page-toast">
    <h1 class="page-title">Toast</h1>
    <div class="page-toast-wrapper">
      <afo-button @click.native="openToast" size="large">点击弹出 Toast</afo-button>
      <afo-button @click.native="openToastWithIcon" size="large">点击弹出带有 icon 的 Toast</afo-button>
      <afo-button @click.native="openBottomToast" size="large">自定义 Toast 位置</afo-button>
    </div>
  </div>
</template>

<style lang="stylus">
.page-toast-wrapper
  position absolute
  top: 50%
  width 100%
  transform translateY(-50%)
</style>

<script>
export default {
  methods: {
    openToast () {
      this.$toast('提示信息')
    },

    openToastWithIcon () {
      this.$toast({
        message: '操作成功',
        iconClass: 'afo'
      })
    },

    openBottomToast () {
      this.$toast({
        message: '提示信息',
        position: 'bottom'
      })
    }
  }
}
</script>
