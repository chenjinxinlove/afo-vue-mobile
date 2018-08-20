<template>
  <div>
    <p>默认显示</p>
    <afo-tabs v-model="active">
      <afo-tab v-for="index in 4" :title="'选项 ' + index" :key="index">
        内容 {{ index }}
      </afo-tab>
    </afo-tabs>
  </div>
</template>
<script>
export default {
  name: 'TabDemo',
  data () {
    return {
      active: 0
    }
  }
}
</script>
