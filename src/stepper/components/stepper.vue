<template>
  <div class="afo-stepper">
    <button
      :class="minusCls"
      @click="onChange('minus')"
    />
    <input
      type="number"
      class="afo-stepper__input"
      :value="currentValue"
      :disabled="disabled || disabledInput"
      @input="onInpout"
      @blur="onBlur"
    >
    <button
      :class="plusCls"
      @click="onChange('plus')"
    />
  </div>
</template>
<script>
export default {
  name: 'afo-stepper',
  props: {
    value: null,
    integer: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    disabledInput: {
      type: Boolean,
      default: false
    },
    min: {
      type: [String, Number],
      default: 1
    },
    max: {
      type: [String, Number],
      default: Infinity
    },
    step: {
      type: [String, Number],
      default: 1
    },
    defaultValue: {
      type: [String, Number],
      default: 1
    }
  },
  data () {
    const value = this.range(this.value || this.defaultValue)
    if (value !== +this.value) {
      this.$emit('input', value)
    }
    return {
      currentValue: value
    }
  },

  computed: {
    minusCls () {
      return {
        'afo-stepper__minus': true,
        'afo-stepper__minus--disabled': this.minusDisabled
      }
    },
    plusCls () {
      return {
        'afo-stepper__plus': true,
        'afo-stepper__plus--disabled': this.plusDisabled
      }
    },
    minusDisabled () {
      return this.disabled || this.currentValue <= this.min
    },
    plusDisabled () {
      return this.disabled || this.currentValue >= this.max
    }
  },

  watch: {
    value (val) {
      if (val !== this.currentValue) {
        this.currentValue = this.format(val)
      }
    },
    currentValue (val) {
      this.$emit('input', val)
      this.$emit('change', val)
    }
  },
  methods: {
    format (value) {
      value = String(value).replace(/[^0-9]\.-/g, '')
      return value === '' ? 0 : this.integer ? Math.floor(value) : +value
    },
    range (value) {
      return Math.max(Math.min(this.max, this.format(value)), this.min)
    },
    onInpout (event) {
      const {value} = event.target
      const formatted = this.format(value)
      if (+value !== formatted) {
        event.target.value = formatted
      }
      this.currentValue = formatted
    },
    onChange (type) {
      if (this[`${type}Disabled`]) {
        this.$emit('overlimit', type)
        return
      }
      const diff = type === 'minus' ? -this.step : +this.step
      const value = Math.round((this.currentValue + diff) * 100) / 100
      this.currentValue = this.range(value)
      this.$emit(type)
    },
    onBlur (event) {
      this.currentValue = this.range(this.currentValue)
      this.$emit('blur', event)
    }
  }
}
</script>
<style lang="stylus">
@require "../../../common/stylus/variable.styl"
.afo-stepper
  font-size 0
  &__minus,
  &__plus
    width 40px
    height 30px
    box-sizing border-box
    background-color $fill-base
    border 1px solid $border-color-base
    position relative
    padding 5px
    vertical-align middle
    outline none
    &::before
      width 9px
      height 1px
    &::after
      width 1px
      height 9px
    &::before,
    &::after
      content ''
      position absolute
      margin auto
      top 0
      left 0
      right 0
      bottom 0
      background-color #6c6c6c
    &::active
      background-color $brand-primary
    &--disabled
      background-color #f8f8f8

      &::before,
      &::after
        background-color #c9c9c9
      &--disabled:active
        background-color $fill-base
  &__minus
    border-radius 2px 0 0 2px
    &::after
      display none
  &__plus
    border-radius 0 2px 2px 0
  &__input
    width 33px
    height 26px
    padding 1px
    border 1px solid $border-color-base
    border-width 1px 0
    border-radius 0
    box-sizing content-box
    color $color-text-base
    vertical-align middle
    text-align center
    -webkit-appearance none
    &[disabled]
      color $fill-disabled
      background-color #f8f8f8
  input[type="number"]::-webkit-inner-spin-button,
  input[type="number"]::-webkit-outer-spin-button
    -webkit-appearance none
    margin 0
</style>
