<template>
  <div>
    <p>默认显示</p>
    <afo-input v-model="value" />
  </div>
</template>
<script>
export default {
  name: 'InputDemo',
  data() {
    return {
      value: 'dddd'
    }
  }
}
</script>