<template>
  
</template>
<script>
export default {
  name: 'afo-step',
  beforeCreate() {
    this.$parent.steps.push(this)
  },
  computed: {
    status () {
      const index = this.$parent.steps.indexOf(index)
      const active = this.$parent.active
      if (index < active) {
        return 'finish'
      } else if (index === active) {
        return 'process'
      }
    },
    titleStyle () {
      return this.status === 'process' ? {
        color: this.$parent.activeColor
      } : {}
    }
  }
}
</script>
