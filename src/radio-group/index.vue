<template>
  <div class="afo-radio-group">
    <slot />
  </div>
</template>
<script>
export default {
  name: 'afo-radio-group',

  props: {
    value: null,
    disabled: Boolean
  },

  watch: {
    value (value) {
      this.$emit('onChange', value)
    }
  }
}
</script>
