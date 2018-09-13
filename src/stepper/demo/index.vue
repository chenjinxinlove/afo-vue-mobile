<template>
  <div>
    <p>基础用法</p>
    <afo-stepper v-model="value" />
    <div style="height: 20px"></div>
    <p>禁用状态</p>
    <afo-stepper v-model="value" disabled />
    <div style="height: 20px"></div>
    <p>高级用法</p>
    <afo-stepper
      v-model="value1"
      integer
      :min="5"
      :max="40"
      :step="2"
      :default-value="9"
    />
  </div>
</template>
<script>
export default {
  name: 'StepperDemo',
  data () {
    return {
      value: 1,
      value1: null
    }
  }
}
</script>
