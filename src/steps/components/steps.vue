<template>
  <div :class="stepsCls">
    <div v-if="title || description" class="afo-steps__status">
      <div v-if="icon || $slots.icon" class="afo-steps__icon">
        <slot name="icon">
          <afo-icon :type="icon" :class="iconClass" />
        </slot>
      </div>
      <div class="afo-steps__message">
        <div class="afo-steps__title" v-text="title" />
        <div class="'afo-steps__desc afo-ellipsis" v-text="description" />
      </div>
      <slot name="message-extra" />
    </div>
    <div :class="itemsCls">
      <slot />
    </div>
  </div>
</template>
<script>
export default {
  name: 'afo-steps',
  props: {
    icon: String,
    title: String,
    active: Number,
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
  computed: {
    stepsCls () {
      return {
        'afo-steps': true,
        [`afo-steps--${this.direction}`]: true
      }
    },
    itemsCls () {
      return {
        'afo-steps__items': true,
        'afo-steps__items--alone': !this.title && !this.description
      }
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
@require "../../../common/stylus/variable.styl"
.afo-steps
  overflow: hidden
  background-color: $fill-base
  &--horizontal
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
    color: $color-text-bas
    padding-top: 4px

  &__desc
    font-size: 12px
    line-height: 1.5
    color: $color-text-caption
</style>
