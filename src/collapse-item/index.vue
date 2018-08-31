<template>
  <div :class="itemCls">
    <div class="afo-cell afo-cell--clickable afo-hairlines afo-collapse-item__title" @click="onClick">
      <div class="afo-cell__title">
        <slot name="title">
          <span>{{ title }}</span>
        </slot>
      </div>
      <i class="afo-icon afo-icon-arrow afo-cell__right-icon"></i>
    </div>
    <div v-if="inited" v-show="show" ref="wrapper" class='afo-collapse-item__wrapper' @transitionend="onTransitionEnd">
      <div ref="content" class='afo-collapse-item__content'>
        <slot />
      </div>
    </div>
  </div>
</template>
<script>
import findParent from '../../common//mixins/find-partent'
import {isDef} from '../../common/utils/index'
import {raf} from '../../common/utils/raf'
export default {
  name: 'afo-collapse-item',
  mixins: [findParent],
  props: {
    name: [String, Number],
    title: String
  },
  data () {
    return {
      show: null,
      inited: null
    }
  },
  computed: {
    itemCls () {
      return {
        'afo-collapse-item': true,
        'afo-collapse-item--expanded': this.expanded,
        'afo-hairline--top': this.index
      }
    },
    items () {
      return this.parent.items
    },
    index () {
      return this.items.indexOf(this)
    },
    currentName () {
      return isDef(this.name) ? this.name : this.index
    },
    expanded () {
      if (!this.parent) {
        return null
      }
      const {value} = this.parent
      return this.parent.accordion
        ? value === this.currentName
        : value.some(name => name === this.currentName)
    }
  },
  created () {
    this.findParent('afo-collapse')
    this.items.push(this)
    this.show = this.expanded
    this.inited = this.expanded
  },
  destroyed () {
    this.items.splice(this.index, 1)
  },
  watch: {
    expanded (expanded, prev) {
      if (prev === null) {
        return
      }

      if (expanded) {
        this.show = true
        this.inited = true
      }

      this.$nextTick(() => {
        const { content, wrapper } = this.$refs
        if (!content || !wrapper) {
          return
        }
        const contentHeight = content.clientHeight + 'px'
        wrapper.style.height = expanded ? 0 : contentHeight
        raf(() => {
          wrapper.style.height = expanded ? contentHeight : 0
        })
      })
    }
  },

  methods: {
    onClick () {
      const { parent } = this
      const name = parent.accordion && this.currentName === parent.value ? '' : this.currentName
      const expanded = !this.expanded
      this.parent.switch(name, expanded)
    },

    onTransitionEnd () {
      if (!this.expanded) {
        this.show = false
      } else {
        this.$refs.wrapper.style.height = null
      }
    }
  }
}
</script>
<style lang="stylus">
@require "../../common/stylus/variable.styl"
@require "../../common/stylus/mixin.styl"
.afo-hairline--top
  border-top-1px($btn-default-border)
.afo-cell
  width 100%
  display flex
  padding 10px 15px
  box-sizing border-box
  line-height 24px
  position relative
  background-color #fff
  color #333
  font-size 14px
  overflow hidden
  border-bottom-1px($btn-default-border)
  &::after
    left: 15px
  &--clickable
    &:active
      background-color $fill-body
  &__title
    flex 1
  &__left-icon
    min-width 1em
    font-size 16px
    line-height 24px
    margin-right 5px
  &__right-icon
    color #999
    font-size 12px
    line-height 24px
    margin-left 5px
    &--left::before
      transform rotate(180deg)
    &--up::before
      transform rotate(-90deg)
    &--down::before
      transform rotate(90deg)  
.afo-collapse-item
  &__title
    .afo-cell__right-icon::before
      transition .3s;
      transform rotate(90deg)
    &::after
      visibility hidden
  &__wrapper
    overflow hidden
    will-change height
    transition height .3s ease-in-out
  &__content
    padding 15px
    background-color #fff
  &--expanded
    .afo-collapse-item__title
      .afo-cell__right-icon::before
        transform rotate(-90deg)
      &::after
        visibility visible
</style>
