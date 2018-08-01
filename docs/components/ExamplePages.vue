<template>
  <section class="van-doc-demo-pages">
    <h2>{{ title}}</h2>
    <p>{{ description}}</p>
  </section>
</template>

<script>
export default {
  name: 'van-doc-demo-pages',

  data () {
    return {
      currentDemo: 0,
      title: 'goodsDetail',
      preview: 'https://img.yzcdn.cn/public_files/2017/10/24/7070a8d1d6504b864c605114d32f2aae.png',
      url: 'https://youzan.github.io/vant-demo/#/goods',
      source: 'https://github.com/youzan/vant-demo/tree/master/src/view/goods/index.vue'
    }
  },
  beforeMount () {
    this.$emit('changeDemoURL', this.demos[0].url)
  },

  methods: {
    onChangeDemo (demo, index) {
      this.currentDemo = index
      this.$emit('changeDemoURL', demo.url)
    }
  }
}
</script>

<style lang="postcss">
.van-doc-demo-pages {
  &__gallery {
    margin-top: 30px;
  }

  &__item {
    width: 28%;
    text-align: center;
    margin-bottom: 40px;
    display: inline-block;

    &:nth-child(3n+1),
    &:nth-child(3n+2) {
      margin-right: 4%;
    }

    h4 {
      font-size: 14px;
      line-height: 20px;
      font-weight: normal;
    }

    img {
      width: 100%;
      cursor: pointer;
      border-radius: 3px;
      background-color: #f8f8f8;
      box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);
    }

    a {
      font-size: 12px;
      margin: 4px 0 7px;
      display: inline-block;
    }

    &--active {
      img {
        box-shadow: 0 1px 4px rgba(51, 136, 255, .4), 0 0 0 1px rgba(51, 136, 255, .4);
      }
    }
  }
}
</style>
