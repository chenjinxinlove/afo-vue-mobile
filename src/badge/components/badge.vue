<template>
  <span :class="badgeCls">
    <slot></slot>
    <sup v-if="text || dot" :class="scrollNumberCls" >{{text}}</sup>
  </span>
</template>
<script>
export default {
  name: 'afo-badge',
  props: {
    size: {
      type: String,
      default: 'large',
      validator: (value) => {
        return ['large', 'small'].indexOf(value) > -1
      }
    },
    overflowCount: {
      type: Number,
      default: 99
    },
    corner: {
      type: Boolean,
      default: false
    },
    dot: {
      type: Boolean,
      default: false
    },
    hot: {
      type: Boolean,
      default: false
    },
    text: {
      type: [String, Number]
    }
  },
  computed: {
    textValue () {
      if (this.dot) {
        return ''
      } else {
        return typeof this.text === 'number' && this.text > this.overflowCount
          ? `${this.overflowCount}+`
          : this.text
      }
    },
    scrollNumberCls () {
      return [
        {
          'afo-badge-dot': this.dot,
          'afo-badge-dot-large': this.dot && this.size === 'large',
          'afo-badge-text': !this.dot && !this.corner,
          'afo-badge-corner': this.corner,
          'afo-badge-corner-large': this.corner && this.size === 'large'
        }
      ]
    },
    badgeCls () {
      return [
        {
          'afo-badge': true,
          'afo-badge-not-a-wrapper': !this.Solts,
          'afo-badge-corner-wrapper': this.corner,
          'afo-badge-hot': !!this.hot,
          'afo-badge-corner-wrapper-large': this.corner && this.size === 'large'
        }
      ]
    }
  }

}
</script>
<style lang="stylus">
@require "../../../common/stylus/variable.styl"
@require "../../../common/stylus/mixin.styl"

.afo-badge
  position: relative
  display: inline-block
  line-height: $line-height-base
  vertical-align: middle
.afo-badge-text
  text-rendering: optimizeLegibility
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  position: absolute
  top: -1 * $v-spacing-sm
  height: $icon-size-xs
  line-height: $icon-size-xs
  min-width: 9px
  border-radius: 2 * $v-spacing-sm
  padding: 0 $h-spacing-sm
  text-align: center
  font-size: $font-size-caption-sm
  color: $color-text-base-inverse
  background-color: $brand-important
  white-space: nowrap
  transform: translateX(-45%)
  transform-origin: -10% center
  z-index: 10
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "\5FAE\8F6F\96C5\9ED1", SimSun, sans-serif
  a
    color: $color-text-base-inverse

  p
    margin: 0
    padding: 0

.afo-badge-hot .afo-badge-text
    background-color: #f96268
.afo-badge-dot
  position: absolute
  transform: translateX(-50%)
  transform-origin: 0 center
  top: -2 * $border-width-lg
  height: 0.5 * $link-button-font-size
  width: 0.5 * $link-button-font-size
  border-radius: 100%
  background: $brand-important
  z-index: 10
.afo-badge-dot-large
  height: $link-button-font-size
  width: $link-button-font-size
.afo-badge-not-a-wrapper .afo-badge-text,
.afo-badge-not-a-wrapper .afo-badge-hot
  top: auto
  display: block
  position: relative
  transform: translateX(0)
.afo-badge-corner
  width: 5 * $link-button-font-size
  padding: 0.5 * $link-button-font-size
  position: absolute
  right: -2 * $link-button-font-size
  top: 0.5 * $link-button-font-size
  background-color: $brand-important
  color: $color-text-base-inverse
  white-space: nowrap
  transform: rotate(45deg)
  text-align: center
  font-size: $font-size-subhead
.afo-badge-corner-wrapper
  overflow: hidden
</style>
