<template>
  <div>
    <p class="afo-vue-mobile-name">afo-vue-mobile</p>
    <keep-alive>
      <router-view />
    </keep-alive>
  </div>
</template>
<script>
export default {
  computed: {
    title () {
      const { name } = this.$route.meta
      return name ? name.replace(/-/g, '') : ''
    }
  },
  methods: {
    onBack () {
      history.back()
    }
  }
}
</script>
<style>
.afo-vue-mobile-name{
  border-bottom: 1px solid #ccc;
}
</style>
