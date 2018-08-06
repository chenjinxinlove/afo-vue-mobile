<template>
    <i class="afo-icon" :class="iconClass" :style="{color, fontSize: size}" @click="handleClick" />
</template>
<script>
/**
 * afo-icon
 * @module components/icon
 * @desc 图标
 * @param {string} [size='32px'] - 图标的大小
 * @param {string} [color=''] - 图标的颜色
 * @param {sting} [type=''] - 图标的名称
 * @example <afo-icon type="select" color="red" size="30px"></afo-icon> 
 */
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
