<template>
  <div>
    <afo-card title="标题" desc="描述信息">
      <div>内容</div>
    </afo-card>
    <afo-card title="标题" desc="描述信息">
      <div>内容</div>
      <div slot="footer">
        <afo-button size="small">按钮</afo-button>
        <afo-button size="small" type="danger">按钮</afo-button>
      </div>
    </afo-card>
  </div>
</template>
<script>
export default {
  name: 'cardDemo'
}
</script>
