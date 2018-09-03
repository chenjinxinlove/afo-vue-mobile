<template>
  <div @click.stop="onClick" :class="sliderCls">
    <div class="afo-slider__bar" :style="barStyle">
      <span
        class="afo-slider__button"
        @touchstart="onTouchStart"
        @touchmove.prevent.stop="onTouchMove"
        @touchend="onTouchEnd"
        @touchcancel="onTouchEnd"
      >
      </span>
    </div>
  </div>
</template>
<script>
import Touch from '../../../common/mixins/touch'
export default {
  name: 'afo-slider',
  mixins: [Touch],
  props: {
    disabled: Boolean,
    max: {
      type: Number,
      default: 100
    },
    min: {
      type: Number,
      default: 0
    },
    step: {
      type: Number,
      default: 1
    },
    value: {
      type: Number,
      default: 0
    },
    barHeight: {
      type: String,
      default: '2px'
    }
  },
  computed: {
    sliderCls () {
      return {
        'afo-slider': true,
        'afo-slider--disabled': this.disabled
      }
    },
    barStyle () {
      return {
        width: this.format(this.value) + '%',
        height: this.barHeight
      }
    }
  },
  methods: {
    onTouchStart (event) {
      if (this.disabled) return
      this.touchStart(event)
      this.startValue = this.format(this.value)
    },
    onTouchMove (event) {
      if (this.disabled) return

      this.touchMove(event)
      const rect = this.$el.getBoundingClientRect()
      const diff = this.deltaX / rect.width * 100
      this.updateValue(this.startValue + diff)
    },
    onTouchEnd () {
      if (this.disabled) return
      this.updateValue(this.value, true)
    },
    onClick (event) {
      if (this.disabled) return
      const rect = this.$el.getBoundingClientRect()
      const value = (event.clientX - rect.left) / rect.width * 100
      this.updateValue(value, true)
    },
    updateValue (value, end) {
      value = this.format(value)
      this.$emit('input', value)

      if (end) {
        this.$emit('onChange', value)
      }
    },
    format (value) {
      return (Math.round(Math.max(this.min, Math.min(value, this.max)) / this.step) * this.step)
    }
  }
}
</script>
<style lang="stylus">
@require "../../../common/stylus/variable.styl"
.afo-slider
  position relative
  border-radius 999px
  background-color #e5e5e5
  &__bar
    position relative
    border-radius inherit
    background $brand-primary
  &__button
    position absolute
    top 50%
    right 0
    width 20px
    height 20px
    border-radius 50%
    background-color $fill-base
    transform translate3d(50%, -50%, 0)
    box-shadow 0 1px 2px rgba(0, 0, 0, .5)
    &::after
      content ''
      position absolute
      width 200%
      height 200%
      top -50%
      left -50%
  &--disabled
    opacity .3
</style>
