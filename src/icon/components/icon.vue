<template>
    <i class="afo-icon" :class="iconClass" :style="{color, fontSize: size}" @click="handleClick" />
</template>
<script>
export default {
  name: 'afo-icon',
  props: {
    size: {
      type: String,
      default: '32px'
    },
    color: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: ''
    }
  },
  methods: {
    handleClick (e) {
      this.$emit('onClick', e)
    }
  },
  computed: {
    iconClass () {
      return `afo-icon-${this.type}`
    }
  }
}
</script>
