<template>
  <div :style="style" :class="tabbarCls">
    <slot />
  </div>
</template>
<script>
export default {
  name: 'afo-tabbar',
  data () {
    return {
      items: []
    }
  },
  props: {
    value: Number,
    fixed: {
      type: Boolean,
      default: true
    },
    zIndex: {
      type: Number,
      default: 1
    },
    barTintColor: {
      type: String,
      default: 'white'
    }
  },
  computed: {
    tabbarCls () {
      return {
        'afo-tabbar': true,
        'afo-tabbar--fixed': this.fixed
      }
    },
    style () {
      return {
        zIndex: this.zIndex,
        background: this.barTintColor
      }
    }
  },

  watch: {
    items () {
      this.setActiveItem()
    },
    value () {
      this.setActiveItem()
    }
  },

  methods: {
    setActiveItem () {
      this.items.forEach((item, index) => {
        item.active = index === this.value
      })
    },
    onChange (active) {
      this.$emit('input', active)
      // this.value = active
      this.$emit('change', active)
    }
  }
}
</script>
<style lang="stylus">
@require "../../../common/stylus/variable.styl"
@require "../../../common/stylus/mixin.styl"
.afo-tabbar
  width: 100%
  height: 50px
  display: flex
  border-top-1px($btn-default-border)
.afo-tabbar--fixed
  left: 0
  bottom: 0
  position: fixed
</style>
