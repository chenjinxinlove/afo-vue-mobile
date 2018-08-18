<template>
  <div>
    <p>默认显示</p>
    <afo-rate v-model="value1" />
    <div style="height: 50px"></div>
    <p>自定义显示</p>
    <afo-rate
      v-model="value2"
      :size="25"
      :count="6"
      color="#2ba"
      void-color="#ceefe8"
    />
    <div style="height: 50px"></div>
    <p>禁操作</p>
    <afo-rate disabled v-model="value3" />
  </div>
</template>
<script>
export default {
  name: 'RateDemo',
  data() {
    return {
      value1: 3,
      value2: 4,
      value3: 2
    };
  }
}
</script>