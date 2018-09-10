<template>
  <div>
    <p>基础用法</p>
    <afo-radio-group v-model="radio">
      <afo-radio name="1">单选框 1</afo-radio>
      <afo-radio name="2">单选框 2</afo-radio>
    </afo-radio-group>
    <div style="height: 20px"></div>
    <p>禁用状态</p>
    <afo-radio-group v-model="radio" disabled>
      <afo-radio name="1">单选框 1</afo-radio>
      <afo-radio name="2">单选框 2</afo-radio>
    </afo-radio-group>
  </div>
</template>
<script>
export default {
  name: 'RadioDemo',
  data () {
    return {
      radio: '1'
    }
  }
}
</script>
