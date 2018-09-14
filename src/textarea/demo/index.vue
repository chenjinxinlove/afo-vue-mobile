<template>
  <div>
    <p>基础用法</p>
    <afo-textarea v-model="value"></afo-textarea>
    <div style="height: 20px"></div>
    <p>配置计数标识</p>
    <afo-textarea v-model="value" indicator="indicator"></afo-textarea>
    <p>多项配置</p>
    <afo-textarea
      v-model="value"
      :placeholder="placeholder"
      :maxlength="maxlength"
      :readonly="readonly"
      :disabled="disabled"
      :autofocus="autofocus"
    ></afo-textarea>
  </div>
</template>
<script>
export default {
  name: 'TextareaDemo',
  data () {
    return {
      value: '的康师傅开始的疯狂谁',
      indicator: {
        negative: true,
        remain: true
      },
      placeholder: '请输入内容',
      readonly: true,
      maxlength: 100,
      disabled: true,
      autofocus: true
    }
  }
}
</script>
