<template>
  <div>
    <p>基础用法</p>
    <afo-switch v-model="checked" />
    <div style="height: 20px"></div>
    <p>禁用状态</p>
    <afo-switch v-model="checked" disabled />
  </div>
</template>
<script>
export default {
  name: 'SwitchDemo',
  data () {
    return {
      checked: true
    }
  }
}
</script>
