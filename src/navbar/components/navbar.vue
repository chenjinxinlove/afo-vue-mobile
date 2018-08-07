<template>
  <header :class="navbarCls">
    <div class="afo-navbar-button is-left">
      <slot name="left"></slot>
    </div>
    <h1 class="afo-navbar-title" v-text="title"></h1>
    <div class="afo-navbar-button is-right">
      <slot name="right"></slot>
    </div>
  </header>
</template>
<script>
/**
 * afo-navbar
 * @module components/header
 * @desc 顶部导航
 * @param {boolean} [fixed=false] - 固定顶部
 * @param {string} [title] - 标题
 * @param {slot} [left] - 显示在左侧区域
 * @param {slot} [right] - 显示在右侧区域
 *
 * @example
 * <afo-navbar title="我是标题" fixed>
 *   <afo-button slot="left" icon="back" @onClick="handleBack">返回</afo-button>
 *   <afo-button slot="right" icon="more"></afo-button>
 * </afo-navbar>
 */
export default {
  name: 'afo-navbar',
  props: {
    fixed: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: ''
    }
  },
  computed: {
    navbarCls () {
      return [
        {
          'afo-navbar': true,
          'is-fixed': this.fixed
        }
      ]
    }
  }
}
</script>
<style lang="stylus">
@require "../../../common/stylus/variable.styl"
@require "../../../common/stylus/mixin.styl"
.afo-navbar
  align-items: center
  background-color: $fill-base
  box-sizing: border-box
  color: $color-text-base
  display: flex
  font-size: 14px
  height: $header-height
  line-height: 1
  padding: 0 10px
  position: relative
  text-align: center
  white-space: nowrap
  width: 100%
  .afo-navbar-title
    font-size: inherit
    font-weight: normal
    flex: 1
  .afo-button
    background-color: transparent
    border: 0
    box-shadow: none
    color: inherit
    display: inline-block
    padding: 0
    font-size: inherit
  .afo-button::after
    border: none
.is-fixed
  position: fixed
  top: 0
  left: 0
  z-index: $z-index-normal
</style>
