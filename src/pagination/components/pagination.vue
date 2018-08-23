<template>
  <ul :class="paginationCls">
    <li :class="prevCls" @click="selectPage(value - 1)">
      {{prevText || '上一页'}}
    </li>
    <li
      v-if="isMultiMode"
      v-for="page in pages"
      :key="page.number"
      class="afo-hairline afo-pagination__item afo-pagination__page"
      :class="{'afo-pagination__item--active': page.active}"
      @click="selectPage(page.number)"
    >
      {{page.text}}
    </li>
    <li v-if="!isMultiMode" class="afo-pagination__page-desc">
      <slot name="pageDesc">{{ pageDesc }}</slot>
    </li>
    <li :class="nextCls" @click="selectPage(value + 1)">
      {{nextText || '下一页'}}
    </li>
  </ul>
</template>
<script>
export default {
  name: 'afo-pagination',
  props: {
    value: Number,
    prevText: String,
    nextText: String,
    count: Number,
    ellipses: Boolean,
    mode: {
      type: String,
      default: 'multi',
      validator (value) {
        return [
          'multi', 'simple'
        ].indexOf(value) > -1
      }
    },
    pageSize: {
      type: Number,
      default: 10
    },
    showPage: {
      type: Number,
      default: 5
    },
    total: {
      type: Number,
      default: 0
    }
  },
  computed: {
    isMultiMode () {
      return this.mode === 'multi'
    },
    computedPageCount () {
      const count = this.count || Math.ceil(this.total / this.pageSize)
      return Math.max(1, count)
    },
    paginationCls () {
      return {
        'afo-pagination': true,
        'afo-pagination--simple': !this.isMultiMode
      }
    },
    prevCls () {
      return {
        'afo-hairline': true,
        'afo-pagination__item': true,
        'afo-pagination__item--disabled': this.value === 1,
        'afo-pagination__prev': true
      }
    },
    nextCls () {
      return {
        'afo-hairline': true,
        'afo-pagination__item': true,
        'afo-pagination__item--disabled': this.value === this.computedPageCount,
        'afo-pagination__next': true
      }
    },
    pageDesc () {
      return this.value + '/' + this.computedPageCount
    },
    pages () {
      const pages = []
      const pageCount = this.computedPageCount

      let startPage = 1
      let endPage = pageCount
      const isMaxSized = this.showPage !== undefined && this.showPage < pageCount
      if (isMaxSized) {
        startPage = Math.max(this.value - Math.floor(this.pageSize / 2), 1)
        endPage = startPage + this.showPage - 1
      }
      if (endPage > pageCount) {
        endPage = pageCount
        startPage = endPage - this.showPage + 1
      }
      for (let number = startPage; number <= endPage; number++) {
        const page = this.makePage(number, number, number === this.value)
        pages.push(page)
      }
      if (isMaxSized && this.showPage > 0 && this.ellipses) {
        if (startPage > 1) {
          const previousPageSet = this.makePage(startPage - 1, '...', false)
          pages.unshift(previousPageSet)
        }
        if (endPage < pageCount) {
          const nextPageSet = this.makePage(endPage + 1, '...', false)
          pages.push(nextPageSet)
        }
      }
      return pages
    }
  },
  watch: {
    value: {
      handler (page) {
        this.selectPage(page || this.value)
      },
      immediate: true
    }
  },
  methods: {
    selectPage (page) {
      page = Math.max(1, page)
      page = Math.min(this.computedPageCount, page)
      if (this.value !== page) {
        this.$emit('input', page)
        this.$emit('onChange', page)
      }
    },

    makePage (number, text, active) {
      return { number, text, active }
    }
  }
}
</script>
<style lang="stylus">
@require "../../../common/stylus/variable.styl"
@require "../../../common/stylus/mixin.styl"
.afo-hairline
  border-1px($btn-default-border)
.afo-pagination
  display: flex
  text-align: center
  line-height: 40px
  font-size: 14px
  &__item
    flex: 1
    height: 40px
    min-width: 36px
    color: $brand-primary
    background-color: $fill-base
    box-sizing: border-box
    user-select: none
    border-1px($btn-default-border)
    &:active
      background-color: $brand-primary
      color: $fill-base
      opacity: 0.8
    &::after
      border-width: 1px 0 1px 1px
    &:last-child::after
      border-right-width: 1px
    &--disabled,
    &--disabled:active
      background-color: $fill-base
      color: $color-text-disabled
      opacity: 0.6
    &--active
      color: $fill-base
      background-color: $brand-primary
  &__prev,
  &__next
    padding: 0 5px
  &__page
    flex-grow: 0
  &__page-desc
    flex: 1
    height: 40px
    color: $color-text-disabled
  &--simple
    .van-pagination__prev,
    .van-pagination__next
      &::after
        border-width: 1px
</style>
