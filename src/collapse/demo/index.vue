<template>
  <div>
    <p>基础用法</p>
    <afo-collapse v-model="activeNames">
      <afo-collapse-item title="1" name="1">
        111111111
      </afo-collapse-item>
      <afo-collapse-item title="2" name="2">
        22222222
      </afo-collapse-item>
      <afo-collapse-item title="3" name="3">
        2222222222
      </afo-collapse-item>
    </afo-collapse>
    <p>手风琴</p>
    <afo-collapse v-model="active2" accordion>
      <afo-collapse-item title="1" name="1">
        1111111111
      </afo-collapse-item>
      <afo-collapse-item title="2" name="2">
        2222222222
      </afo-collapse-item>
      <afo-collapse-item title="3" name="3">
        333333333333
      </afo-collapse-item>
    </afo-collapse>
    <p>自定义标题内容</p>
    <afo-collapse v-model="activeNames">
      <afo-collapse-item name="1">
        <div slot="title">1<afo-icon type="question" size="16px" /></div>
        11111111111
      </afo-collapse-item>
      <afo-collapse-item title="2" name="2">
        22222222222
      </afo-collapse-item>
    </afo-collapse>
  </div>
</template>
<script>
export default {
  name: 'collapseDemo',
  data () {
    return {
      activeNames: ['1'],
      active2: 0
    }
  }
}
</script>
