<template>
  <div>
    <afo-pull-refresh v-model="isLoading" @refresh="onRefresh">
      <p style="height: 400px">刷新次数: {{ count }}</p>
    </afo-pull-refresh>
  </div>
</template>

<script>
export default {
  data () {
    return {
      count: 0,
      isLoading: false
    }
  },

  methods: {
    onRefresh () {
      setTimeout(() => {
        this.isLoading = false
        this.count++
      }, 500)
    }
  }
}
</script>
