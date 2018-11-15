<template>
  <afo-pull-refresh v-model="isLoading" @refresh="onRefresh">
    <p>刷新次数: {{ count }}</p>
  <afoa-pull-refresh>
</template>

<script>
export default {
  data() {
    return {
      count: 0,
      isLoading: false
    }
  },

  methods: {
    onRefresh() {
      setTimeout(() => {
        this.alert('success')
        this.isLoading = false
        this.count++
      }, 500)
    }
  }
}
</script>

<style lang="postcss">
  .afo-pull-refresh {
    &,
    &__track {
      height: calc(100vh - 50px);
    }
  }

  p {
    margin: 10px 0 0 15px;
  }
</style>
