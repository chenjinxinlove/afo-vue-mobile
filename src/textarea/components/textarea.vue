<template>
  <div class="afo-textarea-wrapper" :class="{'afo-textarea__expanded': expanded, 'afo-textarea--active': isFocus}">
    <textarea
      class="afo-textarea"
      v-model="textareaValue"
      v-bind="$props"
      :placeholder="placeholder"
      :maxlength="maxlength"
      :disabled="disabled"
      @focus="handleFocus"
      @blur="handleFocus"
    >
    </textarea>
    <span v-if="indicator" v-show="expanded" class="afo-textarea__indicator">{{indicatorConf.remain ? remain : count}}</span>
  </div>
</template>
<script>
export default {
  name: 'afo-textarea',
  data () {
    return {
      textareaValue: this.value,
      expanded: false,
      isFocus: false
    }
  },
  props: {
    value: {
      type: String,
      default: ''
    },
    cols: Number,
    rows: Number,
    readonly: Boolean,
    wrap: String,
    required: Boolean,
    placeholder: {
      type: String,
      default: 'please type here...'
    },
    dirname: String,
    form: String,
    name: String,
    autofocus: Boolean,
    disabled: {
      type: Boolean,
      default: false
    },
    maxlength: {
      type: Number,
      default: 60
    },
    indicator: {
      type: [Boolean, Object],
      default: true
    }
  },
  computed: {
    indicatorConf () {
      let indicator = this.indicator
      if (typeof indicator === 'boolean') {
        indicator = {}
      }
      return Object.assign({}, {
        negative: true,
        remain: true
      }, indicator)
    },
    count () {
      return this.textareaValue.length
    },
    remain () {
      let diff = this.maxlength - this.count
      if (!this.indicatorConf.negative && diff < 0) {
        diff = 0
      }
      return diff
    }
  },
  watch: {
    value (newValue) {
      this.textareaValue = newValue
    },
    textareaValue (newValue) {
      this.$emit('input', newValue)
      if (!this.isFocus && this.expanded) {
        this.expanded = false
      }
    }
  },
  methods: {
    handleFocus (e) {
      this.$emit('focus', e)
      this.expanded = true
      this.isFocus = true
    },
    handleBlur (e) {
      this.$emit('blur', e)
      if (this.textareaValue.length === 0) {
        this.expanded = false
      }
      this.isFocus = false
    }
  }
}
</script>
<style lang="stylus">
@require "../../../common/stylus/variable.styl"
@require "../../../common/stylus/mixin.styl"
.afo-textarea-wrapper
  position: relative
  transition: height 200ms
  height: 40px
  font-size: $fontsize-medium
  line-height: 1.429
  textarea::-webkit-input-placeholder
    color: $color-light-grey-s !important
    text-overflow: ellipsis
  border-1px($color-row-line)
.afo-textarea
  width: 100%
  height: 100%
  text-align: left
  padding: 10px
  box-sizing: border-box
  font-size: 100%
  line-height: inherit
  color: $color-grey
  background-color: $color-white
  border-radius: 2px
  resize: none
  border: none
  outline: none
  &__expanded
    height: 80px
  &--active
    border-1px($brand-primary)
  &__indicator
    position: absolute
    bottom: 7px
    right: 10px
    color: $color-light-grey-s
</style>
