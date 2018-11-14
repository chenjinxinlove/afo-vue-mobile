<template>
  <transition :name="currentTransiton">
    <div v-if="shouldRender" v-show="value" :class="popupCls">
      <slot />
    </div>
  </transition>
</template>

<script>
import Popup from '../../../common//mixins/popup'
export default {
  name: 'afo-popup',
  mixins: [Popup],
  props: {
    transition: String,
    overlay: {
      type: Boolean,
      default: true
    },
    closeOnClickOverlay: {
      type: Boolean,
      default: true
    },
    position: {
      type: String,
      default: ''
    }
  },
  computed: {
    popupCls () {
      return `afo-popup afo-popup--${this.position}`
    },
    currentTransiton () {
      return this.transition || (this.position === '' ? 'afo-fade' : `popup-slide-${this.position}`)
    }
  }
}
</script>
<style lang="stylus">
@require "../../../common/stylus/variable.styl"
@require "../../../common/stylus/mixin.styl"
.afo
  &-modal
    position: fixed
    width: 100%
    height: 100%
    top: 0
    left: 0
    background-color: rgba(0, 0, 0, 0.7)
  &-overflow-hidden
    overflow: hidden !important

  &-popup
    position: fixed
    top: 50%
    left: 50%
    max-height: 100%
    overflow-y: auto
    background-color: $white
    transition: .2s ease-out
    -webkit-overflow-scrolling: touch
    transform: translate3d(-50%, -50%, 0)

    &--top
      width: 100%
      top: 0
      right: auto
      bottom: auto
      left: 50%
      transform: translate3d(-50%, 0, 0)

    &--right
      top: 50%
      right: 0
      bottom: auto
      left: auto
      transform: translate3d(0, -50%, 0)

    &--bottom
      width: 100%
      top: auto
      bottom: 0
      right: auto
      left: 50%
      transform: translate3d(-50%, 0, 0)

    &--left
      top: 50%
      right: auto
      bottom: auto
      left: 0
      transform: translate3d(0, -50%, 0)

.popup-slide-top-enter,
.popup-slide-top-leave-active
  transform: translate3d(-50%, -100%, 0)

.popup-slide-right-enter,
.popup-slide-right-leave-active
  transform: translate3d(100%, -50%, 0)

.popup-slide-bottom-enter,
.popup-slide-bottom-leave-active
  transform: translate3d(-50%, 100%, 0)

.popup-slide-left-enter,
.popup-slide-left-leave-active
  transform: translate3d(-100%, -50%, 0)
</style>
