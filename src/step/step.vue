<template>
   <div :class="itemCls">
    <div class="afo-step__title" :style="titleStyle">
      <slot />
    </div>
    <div class="afo-step__circle-container">
      <i class="afo-step__circle" v-if="status !== 'process'" />
      <afo-icon v-else type="right" size="12px" :style="{ color: $parent.activeColor }" />
    </div>
    <div class="afo-step__line" />
  </div>
</template>
<script>
export default {
  name: 'afo-step',
  beforeCreate () {
    this.$parent.steps.push(this)
  },
  computed: {
    status () {
      const index = this.$parent.steps.indexOf(this)
      const active = this.$parent.active
      if (index < active) {
        return 'finish'
      } else if (index === active) {
        return 'process'
      }
    },
    itemCls () {
      return {
        'afo-step': true,
        'afo-hairline': this.$parent.direction === 'vertical',
        [`afo-step--${this.$parent.direction}`]: true,
        [`afo-step--${this.status}`]: true

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
<style lang="stylus">
@require "../../common/stylus/variable.styl"
.afo-step
  flex: 1
  font-size: 14px
  position: relative
  color: $color-text-caption

  &--horizontal
    float: left

    &:first-child
      .afo-step__title
        transform: none
        margin-left: 0
    &:last-child
      position: absolute
      right: 10px
      width: auto

      .afo-step__title
        transform: none
        margin-left: 0
      .afo-step__circle-container
        left: auto
        right: -9px

      .afo-step__line
        width: 0
    .afo-step__circle-container
      position: absolute
      top: 28px
      left: -8px
      padding: 0 8px
      background-color: $fill-base
      z-index: 1

    .afo-step__title
      font-size: 12px
      transform: translate3d(-50%, 0, 0)
      display: inline-block
      margin-left: 3px

    .afo-step__line
      position: absolute
      left: 0
      top: 30px
      width: 100%
      height: 1px
      background-color: $border-color-base

    &.afo-step--finish
      color: $text-color

      .afo-step__circle,
      .afo-step__line
        background-color: $brand-primary
    &.afo-step--process
      color: $text-color

      .afo-step__circle-container
        top: 24px
      .afo-icon
        font-size: 12px
        color: $brand-primary
        display: block
  .afo-step__circle
    display: block
    width: 5px
    height: 5px
    background-color: #888
    border-radius: 50%
  &--vertical
    float: none
    display: block
    font-size: 14px
    line-height: 18px
    padding: 10px 10px 10px 0

    &:not(:last-child)::after
      border-bottom-width: 1px
    &:first-child
      &::before
        content: ''
        position: absolute
        width: 1px
        height: 20px
        background-color: $fill-base
        top: 0
        left: -15px
        z-index: 1
    .afo-step__circle-container > i
      position: absolute
      z-index: 2
    .afo-icon-right
      top: 12px
      left: -20px
      line-height: 1
      font-size: 12px
    .afo-step__circle
      top: 16px;
      left: -17px
    .afo-step__line
      position: absolute
      top: 0
      left: -15px
      width: 1px
      height: 100%
      background-color: $border-color-base
</style>
