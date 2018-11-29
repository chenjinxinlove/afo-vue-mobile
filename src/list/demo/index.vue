<template>
  <div>
    <afo-pull-refresh v-model="refreshing" @refresh="onRefresh">
      <afo-list
        v-model="loading"
        :finished="finished"
        @load="onLoad"
      >
        <div v-for="item in list" :key="item" style="height: 50px; border: 1px solid red">{{item}}</div>
      </afo-list>
    </afo-pull-refresh>
  </div>
</template>

<script>
export default {
  data () {
    return {
      list: [],
      refreshing: false,
      loading: false,
      finished: false
    }
  },

  methods: {
    onLoad () {
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          const text = this.list.length + 1
          this.list.push(text < 10 ? '0' + text : text)
        }
        this.loading = false

        if (this.list.length >= 40) {
          this.finished = true
        }
      }, 500)
    },

    onRefresh () {
      setTimeout(() => {
        this.list = []
        this.finished = false
        this.refreshing = false
        window.scrollTo(0, 10)
      }, 1000)
    }
  }
}
</script>
