<template>
  <div :class="itemCls" @click="onClick">
    <div :class="iconCls">
      <slot name="icon" :active="active">
        <afo-icon v-if="icon" :type="icon" :size="size"/>
      </slot>
      <div v-if="isDef(info)" class="icon__info">{{ info }}</div>
    </div>
    <div class="afo-tabbar-item-text">
      <slot/>
    </div>
  </div>
</template>
<script>
import {isDef} from '../../common/utils/'
export default {
  name: 'afo-tabbar-item',
  data () {
    return {
      active: false
    }
  },
  props: {
    icon: String,
    dot: Boolean,
    info: [String, Number],
    size: {
      type: String,
      default: '21px'
    }
  },
  computed: {
    itemCls () {
      return {
        'afo-tabbar-item': true,
        'afo-tabbar-item--active': this.active
      }
    },
    iconCls () {
      return {
        'afo-tabbar-item__icon': true,
        'icon--dot': this.dot
      }
    }
  },
  beforeCreate () {
    this.$parent.items.push(this)
  },
  destroyed () {
    this.$parent.items.splice(this.$parent.items.indexOf(this), 1)
  },
  methods: {
    onClick (e) {
      this.$parent.onChange(this.$parent.items.indexOf(this))
      this.$emit('click', e)
    },
    isDef (info) {
      return isDef(info)
    }
  }
}
</script>
<style lang="stylus">
@require "../../common/stylus/variable.styl"
.afo-tabbar-item
  flex: 1
  display: flex
  line-height: 1
  font-size: 12px
  color: #666
  align-items: center
  flex-direction: column
  justify-content: center
  .afo-tabbar-item__icon
    margin-bottom: 5px
    position: relative
    img
      height 21px
  .icon--dot::after
    top: 0
    right: -8px
    width: 8px
    height: 8px
    content: ' '
    position: absolute
    border-radius: 100%
    background-color: $brand-important
  .icon__info
    color: #fff
    left: 100%
    top: -.5em
    font-size: .5em
    padding: 0 .3em
    text-align: center
    min-width: 1.2em
    line-height: 1.2
    position: absolute
    border-radius: .6em
    box-sizing: border-box
    background-color: $brand-important
    -webkit-transform: translateX(-50%)
    transform: translateX(-50%)
.afo-tabbar-item--active
  color: $brand-primary
</style>
