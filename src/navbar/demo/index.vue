<template>
  <div>
    <afo-navbar title="我是fixed标题" fixed>
      <afo-button slot="left" icon="back" @onClick="handleBack">返回</afo-button>
      <afo-button slot="right" icon="more"></afo-button>
    </afo-navbar>
    <afo-navbar title="我是标题">
      <afo-button slot="left" icon="back" @onClick="handleBack">返回</afo-button>
      <afo-button slot="right" icon="more"></afo-button>
    </afo-navbar>
  </div>
</template>
<script>
export default {
  name: 'navbarDemo',
  methods: {
    handleBack () {
      console.log('click')
    }
  }
}
</script>
