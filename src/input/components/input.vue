<template>
  <div class="afo-input" :class="{'afo-input__active': isFocus}">
    <div class="afo-input__prepend" v-if="$slots.prepend">
      <slot name="prepend"></slot>
    </div>
    <input
      class="afo-input__field"
      ref="input"
      v-model="inputValue"
      v-bind="$props"
      :type="_type"
      :disabled="disabled"
      :readonly="readonly"
      :autocomplete="autocomplete"
      :autofocus="autofocus"
      @focus="handleFocus"
      @blur="handleBlur"
      @change="changeHander"
    >
    <div class="afo-input-append" v-if="$slots.append || _showClear || _showPwdEye">
      <div class="afo-input-clear" v-if="_showClear" @click="handleClear">
        <i class="afo-icon afo-icon-wrong"></i>
      </div>
      <div class="afo-input__eye" v-if="_showPwdEye" @click="handlePwdEye">
        <i :class="eyeClass"></i>
      </div>
      <slot name="append"></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'afo-input',
  props: {
    value: [String, Number],
    type: {
      type: String,
      default: 'text'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    placeholder: String,
    readonly: {
      type: Boolean,
      default: false
    },
    autofocus: {
      type: Boolean,
      default: false
    },
    autocomplete: {
      type: [Boolean, String],
      default: false
    },
    name: String,
    id: String,
    form: String,
    minlength: Number,
    maxlength: Number,
    resize: String,
    min: Number,
    max: Number,
    step: Number,
    tabindex: String,
    clearable: {
      type: Boolean,
      default: false
    },
    eye: {
      type: [Boolean, Object],
      default: false
    }
  },
  data() {
    return {
      inputValue: this.value,
      isFocus: false,
      formatedEye: {
        open: false,
        reverse: false
      }
    }
  },
  computed: {
    _type () {
      const type = this.type
      if (type === 'password' && this.eye && this.pwdVisible) {
        return 'text'
      }
      return type
    },
    _showClear () {
      return this.clearable && this.inputValue && !this.readonly && !this.disabled
    },
    _showPwdEye () {
      return this.type === 'password' && this.eye && !this.disabled
    },
    pwdVisible () {
      const eye = this.formatedEye
      return eye.reverse ? !eye.open : eye.open
    },
    eyeClass () {
      return this.formatedEye.open ? 'cubeic-eye-visible' : 'cubeic-eye-invisible'
    }
  },
  watch: {
    value (newValue) {
      this.inputValue = newValue
    },
    inputValue (newValue) {
      this.$emit(input, newValue)
    },
    eye: {
      handler () {
        this.formateEye()
      },
      immediate: true
    }
  },
  methods: {
    changeHander (e) {
      this.$emit(change, e)
    },
    formateEye () {
      if (typeof this.eye === 'boolean') {
        this.formatedEye.open = this.eye
      } else {
        Object.assign(this.formatedEye, this.eye)
      }
    },
    handleFocus (e) {
      this.$emit(focus, e)
      this.isFocus = true
    },
    handleBlur (e) {
      this.$emit(blur, e)
      this.isFocus = false
    },
    handleClear (e) {
      this.inputValue = ''
      this.$refs.input.focus()
    },
    handlePwdEye () {
      this.formatedEye.open = !this.formatedEye.open
    }
  }
}
</script>
<style lang="stylus">
@require "../../../common/stylus/variable.styl"
@require "../../../common/stylus/mixin.styl"

.afo-input
  display: flex
  align-self: center
  font-size: $fontsize-medium
  line-height 1.429
  background-color: $color-white
  border-1px($color-row-line)
  &__field
    display: block
    flex: 1
    width: 100%
    padding: 10px
    box-sizing: border-box
    color: $color-grey
    line-height: inherit
    background-color: inherit
    border-radius: 2px
    outline: none
    &::-webkit-input-placeholder
      color: $color-light-grey-s!important
      text-overflow: ellipsis
    + .afo-input__append
      margin-left: -5px
  &--active
    &::after
      border-color: $brand-primary
  &__prepend, &__append
    display: flex
    align-items: center
  &__prepend
    + .afo-input__field
      margin-left: -5px
  &__clear, &__eye
    width: 1em
    height: 1em
    line-height: 1
    padding: 10px
    box-sizing: content-box
    color: $color-light-grey
    > i
      display: inline-block
      transform: scale(1.2)
  &__eye
    >
      &--invisible, &--visible
        transform: scale(1.4)
</style>
