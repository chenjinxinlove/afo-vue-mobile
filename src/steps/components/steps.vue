<template>
  
</template>
<script>
export default {
  name: 'steps',
  props: {
    icon: String,
    title: String,
    avtive: Number,
    iconClass: String,
    description: String,
    direction: {
      type: String,
      default: 'horizontal'
    },
    activeColor: {
      type: String,
      default: '#06bf04'
    }
  },
  data () {
    return {
      steps: []
    }
  }
}
</script>
<style lang="stylus">
.afo-steps
  overflow: hidden
  background-color: $white

  &--horizontal {
    padding: 0 10px

    .afo-steps__items
      display: flex
      margin: 0 0 10px
      overflow: hidden
      position: relative
      padding-bottom: 22px

      &.afo-steps__items--alone
        padding-top: 10px

  &--vertical
    padding: 0 0 0 35px

  &__icon
    float: left
    margin-right: 10px

  .afo-icon
    font-size: 40px

  &__message
    height: 40px
    margin: 15px 0
  &__title
    font-size: 14px
    color: $text-color
    padding-top: 4px

  &__desc
    font-size: 12px
    line-height: 1.5
    color: $gray-dark
</style>
