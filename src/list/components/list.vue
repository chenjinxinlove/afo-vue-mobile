<template>
  <div class="afo-list">
    <slot />
    <div v-show="loading" class="afo-list__loading">
      <slot name="loading">
        <afo-loading  />
        <span class="afo-list-text">{{loadingText}}</span>
      </slot>
    </div>
  </div>
</template>

<script>
import utils from '../../../common/utils/scroll'
import { on, off } from '../../../common/utils/event'

export default {
  name: 'afo-list',
  model: {
    prop: 'loading'
  },
  props: {
    loading: Boolean,
    finished: Boolean,
    immediateCheck: {
      type: Boolean,
      default: true
    },
    offset: {
      type: Number,
      default: 300
    },
    loadingText: String
  },
  mounted () {
    this.scroller = utils.getScrollEventTarget(this.$el)
    this.handler(true)
    if (this.immediateCheck) {
      this.$nextTick(this.check)
    }
  },
  destroyed () {
    this.handler(false)
  },
  activated () {
    this.handler(true)
  },
  deactivated () {
    this.handler(false)
  },
  watch: {
    loading () {
      this.$nextTick(this.check)
    },

    finished () {
      this.$nextTick(this.check)
    }
  },
  methods: {
    check () {
      if (this.loading || this.finished) {
        return
      }
      const el = this.$el
      const {scroller} = this
      // 获取#app的高度，或者window的高度
      // return element === window ? element.innerHeight : element.getBoundingClientRect().height
      const scrollerHeight = utils.getVisibleHeight(scroller)

      if (!scrollerHeight || utils.getComputedStyle(el).display === 'none' || el.offsetParent === null) {
        return
      }
      // return 'scrollTop' in element ? element.scrollTop : element.pageYOffset
      const scrollTop = utils.getScrollTop(scroller)
      // 窗口高度+滑动高度就是总的滑动高度
      const targetBottom = scrollTop + scrollerHeight

      let reachBottom = false

      if (el === scroller) {
        reachBottom = scroller.scrollHeight - targetBottom < this.offset
      } else {
        const elBottom =
          utils.getElementTop(el) -
          utils.getElementTop(scroller) +
          utils.getVisibleHeight(el)
        reachBottom = elBottom - scrollerHeight < this.offset
      }
      if (reachBottom) {
        this.$emit('input', true)
        this.$emit('load')
      }
    },
    handler (bind) {
      if (this.binded !== bind) {
        /* eslint-disable */
        this.binded = bind;
        (bind ? on : off)(this.scroller, 'scroll', this.check)
      }
    }
  }
}
</script>

<style lang="stylus" >
.afo-list
  &__loading
     text-align: center
  .afo-loading,
  &-text
    display: inline-block
    vertical-align: middle
  .afo-loading
    width: 16px
    height: 16px
    margin-right: 5px
  &-text
     font-size: 13px
     color: #c9c9c9
     line-height: 50px
</style>
