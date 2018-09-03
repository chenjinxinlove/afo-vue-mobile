<template>
  <div>
    <p>基本用法</p>
    <afo-slider v-model="value" @onChange="onChange" />
    <div style="height: 50px"></div>
    <p>指定选择范围</p>
    <afo-slider v-model="value" :min="10" :max="90" />
    <div style="height: 50px"></div>
    <p>禁操作</p>
    <afo-slider v-model="value" disabled />
    <p>指定步长</p>
    <div style="height: 50px"></div>
    <afo-slider v-model="value" :step="10" bar-height="4px" />
  </div>
</template>
<script>
export default {
  name: 'SliderDemo',
  data () {
    return {
      value: 50
    }
  },
  methods: {
    onChange (value) {
      console('当前值：' + value)
    }
  }
}
</script>
