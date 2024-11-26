<!-- 
  图标组件
  提供了一个可自定义大小、颜色的图标组件
  支持点击事件，可用于各种交互场景
-->
<template>
    <!-- 
      图标元素
      使用 i 标签配合对应的类名来显示特定图标
      支持自定义样式：颜色和字体大小
      支持点击事件
    -->
    <i class="afo-icon" :class="iconClass" :style="{color, fontSize: size}" @click="handleClick" />
</template>
<script>
/**
 * afo-icon 图标组件
 * @module components/icon
 * @desc 通用图标组件，支持自定义大小、颜色和点击事件
 * @param {string} [size='32px'] - 图标的大小，支持任何有效的 CSS 尺寸值
 * @param {string} [color=''] - 图标的颜色，支持任何有效的 CSS 颜色值
 * @param {string} [type=''] - 图标的类型名称，对应具体的图标样式
 * @event {Function} onClick - 点击图标时触发的事件，传入原生事件对象
 * @example 
 * <!-- 基础用法 -->
 * <afo-icon type="select" color="red" size="30px" @onClick="handleClick"></afo-icon>
 * 
 * <!-- 不同颜色和大小的用法 -->
 * <afo-icon type="success" color="#67C23A" size="40px"></afo-icon>
 */
export default {
  name: 'afo-icon',
  props: {
    // 图标尺寸，支持任何有效的 CSS 尺寸值
    size: {
      type: String,
      default: '32px'
    },
    // 图标颜色，支持任何有效的 CSS 颜色值
    color: {
      type: String,
      default: ''
    },
    // 图标类型，对应具体的图标样式类名
    type: {
      type: String,
      default: ''
    }
  },
  methods: {
    /**
     * 处理图标点击事件
     * @param {Event} e - 原生点击事件对象
     * @emits onClick - 触发 onClick 事件
     */
    handleClick (e) {
      this.$emit('onClick', e)
    }
  },
  computed: {
    /**
     * 生成图标的类名
     * @returns {string} 返回完整的图标类名
     */
    iconClass () {
      return `afo-icon-${this.type}`
    }
  }
}
</script>
<style>
/* 图标基础样式 */
.afo-icon {
  font-family: "afo-icon" !important;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
