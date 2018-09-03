<template>
  <div class="afo-collapse afo-hairline--top-bottom">
    <slot />
  </div>
</template>
<script>
export default {
  name: 'afo-collapse',
  props: {
    accordion: Boolean,
    value: [String, Number, Array]
  },
  data () {
    return {
      items: []
    }
  },
  methods: {
    switch (name, expanded) {
      if (!this.accordion) {
        name = expanded
          ? this.value.concat(name)
          : this.value.filter(activeName => activeName !== name)
      }
      this.$emit('onChange', name)
      this.$emit('input', name)
    }
  }
}
</script>
