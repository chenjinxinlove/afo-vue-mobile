<!-- 
  卡片组件
  提供了一个基础的卡片容器，可以包含标题、内容和底部操作区域
  支持自定义头部、内容和底部插槽
-->
<template>
  <!-- 卡片容器 -->
  <div class="afo-card">
      <!-- 头部插槽，默认显示标题和描述 -->
      <slot name="header">
        <div class="afo-card-header afo-card--cell" >
          <div class="afo-card--title"><span>{{title}}</span><div class="afo-card--label">{{desc}}</div></div>
        </div>
      </slot>
    <!-- 内容区域 -->
    <div class="afo-card-content afo-card--cell">
      <slot />
    </div>
    <!-- 底部区域，仅在有footer插槽时显示 -->
    <div v-if="$slots.footer" class="afp-card-footer afo-card--cell afo-hairline--top">
      <slot name="footer" />
    </div>
  </div>
</template>
<script>
/**
 * afo-card 卡片组件
 * @module components/card
 * @desc 卡片组件，用于展示内容区块/模块
 * @param {string} [title=''] - 卡牌的标题，显示在卡片顶部
 * @param {string} [desc=''] - 卡牌的描述，显示在标题下方
 * @example 
 * <afo-card title="标题" desc="描述信息">
 *   <div>内容</div>
 *   <template #footer>底部内容</template>
 * </afo-card>
*/
export default {
  name: 'afo-card',
  props: {
    title: {
      type: String,
      default: ''
    },
    desc: {
      type: String,
      default: ''
    }
  }
}
</script>
<style lang="stylus">
/* 引入必要的样式变量和混合 */
@require "../../../common/stylus/variable.styl"
@require "../../../common/stylus/mixin.styl"

/* 卡片组件样式 */
.afo-card
  background: $fill-base
  /* 卡片单元格通用样式 */
  .afo-card--cell
    width: 100%
    display: flex
    padding: 10px 15px
    box-sizing: border-box
    line-height: 24px
    position: relative
    background-color: #fff
    color: #333
    font-size: 14px
    overflow: hidden
    border-1px($btn-default-border)
    /* 标题区域样式 */
    .afo-card--title
      flex: 1
    /* 描述文本样式 */
    .afo-card--label
      font-size: 12px
      line-height: 1.2
      color: #666
  /* 内容区域样式 */
  .afo-card-content
    padding: 20px
  /* 底部区域样式 */
  .afo-card-footer
    text-align: right
    padding: 10px 15px
</style>
