<template>
  <div>
    <afo-popup v-model="show1">展示内容</afo-popup>
    <afo-popup v-model="show2" position="top" :overlay="false">内容</afo-popup>
  </div>
</template>

<script>
export default {
  data () {
    return {
      show1: false,
      show2: false
    }
  },
  mounted () {
    setTimeout(() => {
      this.show2 = true
    }, 3000)
  }
}
</script>
