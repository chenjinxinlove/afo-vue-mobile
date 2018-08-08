<template>
  <div class="afo-card">
      <slot name="header">
        <div class="afo-card-header afo-card--cell" >
          <div class="afo-card--title"><span>{{title}}</span><div class="afo-card--label">{{desc}}</div></div>
        </div>
      </slot>
    <div class="afo-card-content afo-card--cell">
      <slot />
    </div>
    <div v-if="$slots.footer" class="afp-card-footer afo-card--cell afo-hairline--top">
      <slot name="footer" />
    </div>
  </div>
</template>
<script>
/**
 * afo-card
 * @module components/card
 * @desc 卡片
 * @param {string} [title=''] - 卡牌的标题
 * @param {string} [desc=''] - 卡牌的描述
 * @example <afo-card title="标题" desc="描述信息"><div>内容</div></afo-card>
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
@require "../../../common/stylus/variable.styl"
@require "../../../common/stylus/mixin.styl"
.afo-card
  background: $fill-base
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
    .afo-card--title
      flex: 1
    .afo-card--label
      font-size: 12px
      line-height: 1.2
      color: #666
  .afo-card-content
    padding: 20px
  .afo-card-footer
    text-align: right
    padding: 10px 15px
</style>
