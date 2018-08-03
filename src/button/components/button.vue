<template>
  <button
    @click="handleClick"
    :type="effect"
    :disabled="disabled"
    class="afo-button"
    :class="btnClass"
  >
  <i v-if="icon" :class="'afo-' + icon"></i>
  <slot></slot>
  </button>
</template>
<script>
/**
 * afo-button
 * @module components/button
 * @desc 按钮
 * @param {string} [effect=default] - 按钮的作用, 接受button, submit
 * @param {string} [type=defalut] - 按钮的类型, 接受default, primary, danger
 * @param {string} [size=normal] - 按钮大小,接受small, normal, large
 * @param {boolean} [disabled=false] - 禁用状态
 * @param {boolean} [inline=false] - 是否设置为行内按钮
 * @param {boolean} [plain=false] - 是否设置为素按钮
 * @param {boolean} [loading=false] - 设置载入状态
 * @param {string} [icon] - 接受icon的type
 * @example <afo-button size="small" type="primary">按钮</afo-button>
*/
export default {
  name: 'afo-button',
  props: {
    effect: {
      type: String,
      default: 'button',
      validator (value) {
        return [
          'button', 'submit'
        ].indexOf(value) > -1
      }
    },
    type: {
      type: String,
      default: 'default',
      validator (value) {
        return [
          'default', 'danger', 'primary'
        ].indexOf(value) > -1
      }
    },
    size: {
      type: String,
      default: 'normal',
      validator (value) {
        return [
          'small', 'normal', 'large'
        ].indexOf(value) > -1
      }
    },
    disabled: {
      type: Boolean,
      default: false
    },
    inline: {
      type: Boolean,
      default: false
    },
    plain: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: ''
    }
  },
  methods: {
    handleClick (e) {
      if (this.loading || this.disabled) {
        return
      }
      this.$emit('onClick', e)
    }
  },
  computed: {
    btnClass () {
      return [
        `afo-button--${this.plain ? this.type + 'plain' : this.type}`,
        `afo-button--${this.size}`,
        {
          'afo-button-disabled': this.disabled,
          'afo-button-inline': this.inline
        }
      ]
    }
  }
}
</script>
<style lang="stylus">
@require "../../../common/stylus/variable.styl"
@require "../../../common/stylus/mixin.styl"
.afo-button
  display: block
  margin: 0
  padding: 13px 16px
  text-align: center
  white-space: nowrap
  cursor: pointer
  background: $btn-default-bgc
  font-size: $fontsize-large
  line-height: 1
  outline: none
  border: none
  border-radius: 2px
  box-sizing: border-box
  border-1px($btn-default-border)
  -webkit-tap-highlight-color: transparent

.afo-button--primary
  background: $btn-primary-bgc
  color: $btn-default-color

.afo-button--primaryplain
  background: $btn-default-bgc
  border-1px($btn-primary-color)

.afo-button--danger
  background: $btn-danger-bgc
  color: $btn-default-color

.afo-button--dangerplain
  background: $btn-default-bgc
  border-1px($btn-danger-color)

.afo-button-disabled
  background: $btn-disabled-bgc
  border-1px($btn-disabled-bdc)

.afo-button--large
  width: 100%
.afo-button--small
  height: 30px
  padding: 0 8px
  min-width: 60px
  font-size: $fontsize-small
  line-height: 28px
.afo-button-inline
  display inline
</style>
