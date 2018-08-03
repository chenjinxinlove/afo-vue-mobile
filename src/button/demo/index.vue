<template>
  <div>
    <div>
      <p>按钮用途</p>
      <div class="show">
        <afo-button>默认按钮</afo-button>
        <afo-button effect="submit">提交按钮</afo-button>
      </div>
    </div>
    <div>
      <p>按钮类型</p>
      <div class="show">
        <afo-button>默认按钮</afo-button>
        <afo-button type="primary">主要按钮</afo-button>
        <afo-button type="danger">危险按钮</afo-button>
      </div>
    </div>
    <div>
      <p>素按钮类型</p>
      <div class="show">
        <afo-button plain>默认按钮</afo-button>
        <afo-button plain type="primary">主要按钮</afo-button>
        <afo-button plain type="danger">危险按钮</afo-button>
      </div>
    </div>
    <div>
      <p>按钮大小</p>
      <div class="show marginbottom">
        <afo-button>默认按钮</afo-button>
        <afo-button size="small">小号按钮</afo-button> 
      </div>
      <afo-button size="large">大号按钮</afo-button>
    </div>  
    <div>
      <p>禁用状态</p>
      <afo-button disabled>禁用状态</afo-button>
    </div>
    <div>
      <p>行内按钮</p>
      <afo-button inline>行内按钮</afo-button>
    </div>
    <div>
      <p>loading按钮</p>
      <afo-button loading>loading按钮</afo-button>
    </div>
    <div>
      <p>Icon按钮</p>
      <afo-button icon="left">Icon按钮</afo-button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'AfoButtonDemo'
}
</script>
<style>
.show{
  display: flex;
  justify-content: space-around;
}
.marginbottom{
  margin-bottom: 10px;
}
</style>
