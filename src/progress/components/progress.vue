<template>
  <div class="afo-progress">
    <span :class="portionCls" :style="portionStyle">
      <span v-if="showPivot && text" ref="pivot" :style="pivotStyle" class="afo-progress__pivot">{{ text }}</span>
    </span>
  </div>
</template>
<script>
import {isDef} from '../../../common/utils/'
export default {
  name: 'afo-progress',
  props: {
    inactive: Boolean,
    pivotText: String,
    pivotColor: String,
    percentage: {
      type: Number,
      required: true,
      validator: value => value >= 0 && value <= 100
    },
    showPivot: {
      type: Boolean,
      default: true
    },
    color: {
      type: String,
      default: '#38f'
    },
    textColor: {
      type: String,
      default: '#fff'
    }
  },
  data () {
    return {
      pivotWidth: 0,
      progressWidth: 0
    }
  },
  computed: {
    portionCls () {
      return {
        'afo-progress__portion': true,
        'afo-progress__portion--with-pivot': this.showPivot && this.text
      }
    },
    text () {
      return isDef(this.pivotText)
        ? this.pivotText
        : this.percentage + '%'
    },
    currentColor () {
      return this.inactive ? '#cacaca' : this.color
    },
    pivotStyle () {
      return {
        color: this.textColor,
        background: this.pivotColor || this.currentColor
      }
    },
    portionStyle () {
      return {
        width: (this.progressWidth - this.pivotWidth) * this.percentage / 100 + 'px',
        background: this.currentColor
      }
    }
  },
  mounted () {
    this.getWidth()
  },
  watch: {
    showPivot () {
      this.getWidth()
    },
    pivotText () {
      this.getWidth()
    }
  },
  methods: {
    getWidth () {
      this.progressWidth = this.$el.offsetWidth
      this.pivotWidth = this.$refs.pivot ? this.$refs.pivot.offsetWidth : 0
    }
  }
}
</script>
<style lang="stylus">
@require "../../../common/stylus/variable.styl"
.afo-progress
  height: 4px
  position: relative
  border-radius: 4px
  background: $fill-tap
  &__portion
    left: 0
    height: 100%
    position: absolute
    border-radius: inherit
    &--with-pivot
      border-top-right-radius: 0
      border-bottom-right-radius: 0
  &__pivot
    top: 50%
    right: 0
    min-width: 2em
    padding: 0 5px
    font-size: 10px
    position: absolute
    line-height: 1.6
    text-align: center
    border-radius: 1em
    word-break: keep-all
    box-sizing: border-box
    background-color: $fill-tap
    transform: translate(100%, -50%)
</style>
