<template>
  <div>
    <p>基础用法</p>
    <afo-pagination
      v-model="currentPage"
      :total="214"
      :per-page="5"
    />
    <p>简单模式</p>
    <afo-pagination
      v-model="currentPage"
      :count="12"
      mode="simple"
    />
    <p>显示省略号</p>
    <afo-pagination
      v-model="currentPage"
      :total="125"
      :show-page="3"
      ellipses
    />
  </div>
</template>
<script>
export default {
  name: 'PaginationDemo',
  data () {
    return {
      currentPage: 1
    }
  }
}
</script>
