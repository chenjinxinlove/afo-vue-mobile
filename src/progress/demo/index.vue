<template>
  <div>
    <p>基础用法</p>
    <afo-progress :percentage="50" />
    <div style="height: 20px"></div>
    <p>置灰</p>
    <afo-progress inactive :percentage="50" />
    <div style="height: 20px"></div>
    <p>样式定制</p>
    <afo-progress
      :percentage="75"
      pivot-text="紫色"
      pivot-color="#7232dd"
      color="linear-gradient(to right, #be99ff, #7232dd)"
    />
  </div>
</template>
<script>
export default {
  name: 'ProgressDemo'
}
</script>
<style lang="stylus">
.afo-progress
    margin 20px
    &:first-of-type
      margin-top 5px
</style>
