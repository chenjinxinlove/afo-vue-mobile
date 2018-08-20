<template>
  <div v-show="isSelected">
    <slot v-if="inited" />
    <div v-if="$slots.title" ref="title">
      <slot name="title" />
    </div>
  </div>
</template>
<script>
import findParent from '../../../common/mixins/find-partent'
export default {
  name: 'afo-tab',
  mixins: [findParent],
  props: {
    title: String,
    disabled: Boolean
  },
  data () {
    return {
      inited: false
    }
  },
  computed: {
    index () {
      return this.parent.tabs.indexOf(this)
    },
    isSelected () {
      return this.index === this.parent.curActive
    }
  },
  created () {
    this.findParent('afo-tabs')
  },
  mounted () {
    const {tabs} = this.parent
    const index = this.parent.$slots.default.indexOf(this.$vnode)
    tabs.splice(index === -1 ? tabs.length : index, 0, this)

    // if (this.$slots.title) {
    //   this.parent.renderTitle(this.$refs.title, this.index)
    // }
  },
  beforeDestroy () {
    this.parent.tabs.splice(this.index, 1)
  }
}
</script>
