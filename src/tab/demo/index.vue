<template>
  <div>
    <p>默认显示</p>
    <afo-tabs v-model="active" sticky>
      <afo-tab v-for="index in 4" :title="'选项 ' + index" :key="index">
        内容 {{ index }}
      </afo-tab>
    </afo-tabs>
    <p>显示card类型</p>
    <afo-tabs v-model="active" type="card">
      <afo-tab v-for="index in 4" :title="'选项 ' + index" :key="index">
        内容 {{ index }}
      </afo-tab>
    </afo-tabs>
    <p>禁用类型</p>
    <afo-tabs @disabled="onClickDisabled">
      <afo-tab v-for="index in 4" :title="'选项 ' + index" :disabled="index === 2" :key="index">
        内容 {{ index }}
      </afo-tab>
    </afo-tabs>
    <p>点击事件</p>
    <afo-tabs @click="onClick">
      <afo-tab v-for="index in 4" :title="'选项 ' + index" :key="index">
        内容 {{ index }}
      </afo-tab>
    </afo-tabs>
    <p>横向滑动</p>
    <afo-tabs>
      <afo-tab v-for="index in 8" :title="'选项 ' + index" :key="index">
        内容 {{ index }}
      </afo-tab>
    </afo-tabs>
    <p>滑动切换</p>
    <afo-tabs v-model="active" swipeable>
      <afo-tab v-for="index in 4" :title="'选项 ' + index" :key="index">
        内容 {{ index }}
      </afo-tab>
    </afo-tabs>
    <p>自定义</p>
    <afo-tabs v-model="active">
      <afo-tab v-for="index in 2" :key="index">
        <div slot="title">
          选项
        </div>
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
  },
  methods: {
    onClickDisabled (index) {
      window.console.log(index)
    },
    onClick (index, title) {
      window.console.log(title)
    }
  }
}
</script>
<style lang="stylus">
.afo-tab__pane {
    background-color: #fff;
    padding: 20px;
}
</style>
