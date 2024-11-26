<template>
  <div class="tag-demo">
    <section>
      <h4>基础用法</h4>
      <div class="tag-group">
        <afo-tag>默认标签</afo-tag>
        <afo-tag type="primary">主要标签</afo-tag>
        <afo-tag type="danger">危险标签</afo-tag>
      </div>
      <div class="description">支持 default、primary、danger 三种类型，默认为 default。</div>
    </section>

    <section>
      <h4>空心样式</h4>
      <div class="tag-group">
        <afo-tag plain>空心默认</afo-tag>
        <afo-tag plain type="primary">空心主要</afo-tag>
        <afo-tag plain type="danger">空心危险</afo-tag>
      </div>
      <div class="description">设置 plain 属性设置为空心样式。</div>
    </section>

    <section>
      <h4>圆角样式</h4>
      <div class="tag-group">
        <afo-tag mark>圆角默认</afo-tag>
        <afo-tag mark type="primary">圆角主要</afo-tag>
        <afo-tag mark type="danger">圆角危险</afo-tag>
      </div>
      <div class="description">设置 mark 属性设置为圆角样式。</div>
    </section>

    <section>
      <h4>组合样式</h4>
      <div class="tag-group">
        <afo-tag mark plain>圆角空心</afo-tag>
        <afo-tag mark plain type="primary">圆角空心主要</afo-tag>
        <afo-tag mark plain type="danger">圆角空心危险</afo-tag>
      </div>
      <div class="description">mark 和 plain 属性可以组合使用。</div>
    </section>

    <section>
      <h4>使用场景示例</h4>
      <div class="scene-demo">
        <div class="scene-item">
          <div class="scene-title">商品标签：</div>
          <div class="tag-group">
            <afo-tag type="primary">新品</afo-tag>
            <afo-tag type="danger">热销</afo-tag>
            <afo-tag>促销</afo-tag>
          </div>
        </div>
        <div class="scene-item">
          <div class="scene-title">状态标签：</div>
          <div class="tag-group">
            <afo-tag plain type="primary">进行中</afo-tag>
            <afo-tag plain type="danger">已结束</afo-tag>
            <afo-tag plain>未开始</afo-tag>
          </div>
        </div>
        <div class="scene-item">
          <div class="scene-title">分类标签：</div>
          <div class="tag-group">
            <afo-tag mark v-for="(tag, index) in categories" :key="index">
              {{ tag }}
            </afo-tag>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'tagDemo',
  data() {
    return {
      categories: ['美食', '电影', '酒店', '休闲', '购物']
    }
  }
}
</script>

<style lang="stylus" scoped>
.tag-demo
  padding: 15px
  background: #fff
  
  section
    margin-bottom: 24px
    
    h4
      margin: 0 0 12px
      font-size: 14px
      color: #323233
      font-weight: 600
      
  .tag-group
    .afo-tag
      margin-right: 10px
      margin-bottom: 8px

  .description
    margin-top: 8px
    font-size: 12px
    color: #969799
    line-height: 1.5

  .scene-demo
    .scene-item
      margin-bottom: 16px
      
      .scene-title
        font-size: 13px
        color: #646566
        margin-bottom: 8px
</style>
