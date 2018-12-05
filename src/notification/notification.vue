<template>
  <transition name="fade">
    <div 
      class="notification"
      :style="style"
    >
      <span class="content">{{content}}</span>
      <a href="" class="btn" @click="handleClose">{{btn}}</a>
    </div>
  </transition>
</template>
<script>
export default {
  name: 'afo-notification',
  props: {
    content: {
      type: String,
      required: true
    },
    btn: {
      type: String,
      default: '关闭'
    }
  },
  computed: {
    style(){
      return {}
    }
  },
  methods: {
    handleClose (e) {
      e.preventDefault()
      this.$emit('close')
    }
  }
}
</script>
<style lang="stylus">
.notification
  display flex 
  background red
  position fixed
  width 200px
  height 50px
  transition all .3s
</style>
