<template>
  <div class="afo-switch">
    <input type="checkbox" class="afo-switch__input" v-model="checkboxValue" :disabled="disabled" />
    <i class="afo-switch__ui" />
    <span class="afo-switch__label">
      <slot />
    </span>
  </div>
</template>
<script>
export default {
  name: 'afo-switch',
  props: {
    checked: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      checkboxValue: this.checked
    }
  },
  watch: {
    checked (newVal) {
      this.checkboxValue = newVal
    },
    checkboxValue (newVal) {
      this.$emit('input', newVal)
      this.$emit('onChange', newVal)
    }
  }
}
</script>
<style lang="stylus">
@require "../../../common/stylus/variable.styl"

$switch-width = 48px
$switch-height = 28px

.afo-switch
  display flex
  position relative
  align-items center
  &__input
    position absolute
    z-index 1
    width $switch-width
    height $switch-height
    opacity 0
    &:checked + .afo-switch__ui
      border-color $brand-primary
      background-color $brand-primary
      &::before
        transform scale(0)
      &::after
        transform translateX($switch-width - $switch-height)
    &:disabled + .afo-switch__ui
      opacity 0.3
  &__ui
    position relative
    display block
    width $switch-width
    height $switch-height
    box-sizing content-box
    border 1px solid $brand-primary
    border-radius $switch-height
    background-color $brand-primary
    &::before, &::after
      content ""
      position absolute
      top 0
      left 0
      width 100%
      height 100%
      border-radius $switch-height
      background-color $fill-base
      transition transform .4s cubic-bezier(.25, .1, .25, 1.28)
    &::after
      width $switch-height
      background-color $fill-base
      box-shadow 0 1px 3px rgba(0, 0, 0, .4)
    &__label
      display block
      margin-left 10px
      &:empty
        margin-left 0
</style>
