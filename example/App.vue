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
body, button, select, textarea, input, label, option, fieldset, legend{font-family: 微软雅黑,Tahoma,Verdana;font-size: 12px;line-height: 18px;color: #444;}
body, div, dl, dt, dd, ul, ol, li, h1, h2, h3, h4, h5, h6, pre, form, fieldset, legend, input, textarea, button, p, blockquote, th, td{margin: 0;padding: 0;}
textarea{resize: none}
.clear{height:1px;overflow:hidden;clear:both;}
a,img{border:0;}
a{color: #666;text-decoration: none;}
li{list-style-type:none;}

.afo-vue-mobile-name{
  border-bottom: 1px solid #ccc;
}
</style>
