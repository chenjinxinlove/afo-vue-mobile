<template>
  <div :class="loadingCls">
    <span class="afo-loading-spinners" :style="{width: `${size}px`, height: `${size}px`}">
      <i v-for="(item,index) in 12" :key="index" class="afo-loading-spinner"></i>
    </span>
  </div>
</template>
<script>
/**
 * afo-loading
 * @module components/loading
 * @param {number} [size=30] -laoding的大小
 * @param {string} [color=black] - loading的颜色，接受black,white
 * @desc loading
 * @example <afo-loading size=40 color="white"></afo-loading>
 */
export default {
  name: 'afo-loading',
  props: {
    size: {
      type: String,
      default: '30'
    },
    color: {
      type: String,
      default: 'black',
      validator (value) {
        return [
          'black', 'white'
        ].indexOf(value) > -1
      }
    }
  },
  computed: {
    loadingCls () {
      return [
        'afo-loading',
        `afo-loading-${this.color}`
      ]
    }
  }
}
</script>
<style lang="stylus">
@require "../../../common/stylus/variable.styl"

.afo-loading
  font-size: $fontsize-large-xxx
.afo-loading-black
  color: black
.afo-loading-white
  color: white
  padding: 10px
  border-radius: 3px
  background-color: rgba(0, 0, 0, .5)
  display: inline-block
.afo-loading-spinners
  position: relative
  display: block
  width: 1em
  height: 1em
.afo-loading-spinner
  position: absolute
  left: 44.5%
  top: 37%
  width: 2PX // for rem
  height: 25%
  border-radius: 50%/20%
  opacity: .25
  background-color: currentColor
  animation: spinner-fade 1s linear infinite
  for num in (1..12)
    &:nth-child({num})
      animation-delay: ((num - 1) / 12)s
      transform: rotate(30deg * (num - 6)) translateY(-150%)

@keyframes spinner-fade
  0%
    opacity: .85
  50%
    opacity: .25
  100%
    opacity: .25
</style>
