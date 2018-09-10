<template>
  <div :class="radioCLs" @click="$emit('click')">
    <span class="afo-radio__input">
      <input type="radio" :value="name" v-model="currentValue" class="afo-radio__control" :disabled="isDisabled">
      <afo-icon size="18px" :type="currentValue === name ? 'right' : 'round-border'" />
    </span>
    <span v-if="$slots.default" :class="labelCls" @click="onClickLable">
      <slot />
    </span>
  </div>
</template>

<script>
import findParent from '../../../common/mixins/find-partent'
export default {
  name: 'afo-radio',
  mixins: [findParent],
  props: {
    name: null,
    value: null,
    disabled: Boolean,
    labelDisabled: Boolean,
    labelPosition: Boolean
  },
  computed: {
    radioCLs () {
      return {
        'afo-radio': true,
        'afo-radio--disabled': this.isDisabled
      }
    },
    labelCls () {
      return {
        'afo-radio__label': true,
        [`afo-radio__label--${this.labelPosition}`]: true
      }
    },
    currentValue: {
      get () {
        return this.parent ? this.parent.value : this.value
      },
      set (val) {
        (this.parent || this).$emit('input', val)
      }
    },
    isDisabled () {
      return this.parent
        ? this.parent.disabled || this.disabled
        : this.disabled
    }
  },
  created () {
    this.findParent('afo-radio-group')
  },
  methods: {
    onClickLable () {
      if (!this.isDisabled && !this.labelDisabled) {
        this.currentValue = this.name
      }
    }
  }
}
</script>
<style lang="stylus">
.afo-radio
  overflow hidden
  user-select none

  &__input,
  &__label
    display inline-block
    vertical-align middle
  &__input
    height 1em
    position relative
    font-size 20px
  &__control
    position absolute
    top 0
    left 0
    opacity 0
    margin 0
    width 100%
    height 100%
  &__label
    line-height 20px
    margin-left 10px

    &--left
      float left
      margin 0 10px 0 0
  .afo-icon
    width 1em
    pointer-events none

  .afo-icon-right
    color red
  .afo-icon-round-border
    color #ccc

  &--disabled
    .afo-icon
        color #e5e5e5
        border-radius 100%
        background-color #f8f8f8
</style>
