
<template>
  <div :class="tabsCls">
    <div ref="wrap" :class="wrapCls">
      <div ref="nav" :class="navCls">
        <div v-if="type === 'line'" class="afo-tabs__line" :style="lineStyle" />
        <div
          v-for="(tab, index) in tabs"
          :key="index"
          ref="tabs"
          class="afo-tab"
          :class="{
            'afo-tab--active': index === curActive,
            'af0-tab--disabled': tab.disabled
          }"
          @click="onClick(index)"
        >
          <span class="afo-ellipsis" ref="title">{{ tab.title }}</span>
        </div>
      </div>
    </div>
     <div :class="afo-tabs__content" ref="content">
      <slot />
    </div>
  </div>
</template>
<script>
export default {
  name: 'afo-tabs',
  props: {
    sticky: Boolean,
    lineWidth: Number,
    swipeable: Boolean,
    active: {
      type: [Number, String],
      default: 0
    },
    type: {
      type: String,
      default: 'line'
    },
    duration: {
      type: Number,
      default: 0.2
    },
    swipeThreshold: {
      type: Number,
      default: 4
    }
  },
  computed: {
    tabsCls () {
      return [
        `afo-tabs--${this.type}`,
        {
          'afo-tabs': true
        }
      ]
    },
    wrapCls () {
      return [
        {
          'afo-hairline--top-bottom': this.type === 'line',
          'afo-tabs__wrap': true,
          'afo-tabs__wrap--scrollable': this.scrollable,
          'afo-tabs__wrap--position': this.position
        }
      ]
    },
    navCls () {
      return [
        'afo-tabs__nav',
        `afo-tabs__nav--${this.type}`
      ]
    },
    // 判断nav是否滑动
    scrollable () {
      return this.tabs.length > this.swipeThreshold
    }
  },
  watch: {
    active (val) {
      if (val !== this.curActive) {
        this.correctActive(val)
      }
    },
    curActive () {
      // this.scrollIntoView()
      this.setLine()

      // scroll to correct position
      // if (this.position === 'page-top' || this.position === 'content-bottom') {
      //   scrollUtils.setScrollTop(window, scrollUtils.getElementTop(this.$el));
      // }
    }
  },
  data () {
    return {
      tabs: [],
      curActive: null,
      position: 'content-top',
      lineStyle: {}
    }
  },
  mounted () {
    // 初始化
    this.correctActive(this.active)
    this.setLine()

    // this.$nextTick(() => {
    //   this.handlers(true);
    //   this.scrollIntoView(true);
    // })
  },
  methods: {
    correctActive (active) {
      active = +active
      const exist = this.tabs.some(tab => tab.index === active)
      const defaultActive = (this.tabs[0] || {}) || 0
      this.serCurActive(exist ? active : defaultActive)
    },

    serCurActive (active) {
      if (active !== this.curActive) {
        this.$emit('input', active)
        if (this.curActive !== null) {
          this.$emit('change', active, this.tabs[active].title)
        }
        this.curActive = active
      }
    },

    onClick (index) {
      const {title, disabled} = this.tabs[index]
      if (disabled) {
        this.$emit('disabled', index, title)
      } else {
        this.serCurActive(index)
        this.$emit('click', index, title)
      }
    },

    // 更新nav的bar style
    setLine () {
      this.$nextTick(() => {
        if (!this.$refs.tabs || this.type !== 'line') {
          return
        }

        const tab = this.$refs.tabs[this.curActive]
        const width = this.lineWidth || tab.offsetWidth
        const left = tab.offsetLeft + (tab.offsetWidth - width) / 2

        this.lineStyle = {
          width: `${width}px`,
          transform: `translateX(${left}px)`,
          transitionDuration: `${this.duration}s`
        }
      })
    }
  }
}
</script>
<style lang="stylus">
@require "../../common/stylus/variable.styl"
@require "../../common/stylus/mixin.styl"
.afo-hairline--top-bottom
  border-top-bottom-1px($btn-default-border)
.afo-tabs
  position: relative
  &__wrap
    top: 0
    left: 0
    right: 0
    z-index: 99
    overflow: hidden
    position: absolute
    &--page-top
      position: fixed
    &--content-bottom
      top: auto
      bottom: 0
    &--scrollable
      .afo-tab
        flex: 0 0 22%
      .afo-tabs__nav
        overflow: hidden
        overflow-x: auto
        &::-webkit-scrollbar
          display: none
  &__nav
    display: flex
    user-select: none
    position: relative
    background-color: $fill-base
    &--line
      height: 100%
      padding-bottom: 15px
      box-sizing: content-box
    &--card
      margin: 0 15px
      border-radius: 2px
      box-sizing: border-box
      border: 1px solid $brand-important
      height: $afo-tabs-card-height
      .afo-tab
        color: $brand-important
        border-right: 1px solid $brand-important
        line-height: calc($afo-tabs-card-height - 2px)
        &:last-child
          border-right: none
        &.afo-tab--active
          color: $fill-base
          background-color: $brand-important
  &__line
    z-index: 1
    left: 0
    bottom: 15px
    height: 2px
    position: absolute
    background-color: $brand-important
  &--line
    padding-top: $afo-tabs-line-height
    .afo-tabs__wrap
      height: $afo-tabs-line-height
  &--card
    padding-top: $afo-tabs-card-height
    .afo-tabs__wrap
      height: $afo-tabs-card-height
.afo-tab
  flex: 1
  cursor: pointer
  padding: 0 5px
  font-size: 14px
  position: relative
  color: $text-color
  line-height: $afo-tabs-line-height
  text-align: center
  box-sizing: border-box
  background-color: $fill-base
  min-width: 0
  span
    display: block
  &:active
    background-color: $active-color
  &--active
    color: $brand-important
  &--disabled
    color: $gray
    &:active
      background-color: $fill-base
</style>
