<template>
  <div :class="noticeBarCls" :style="noticeBarStyle" v-show="showNoticeBar" @click="$emit('onClick')">
    <div v-if="leftIcon" class="afo-notice-left-icon">
      <img :src="leftIcon" >
    </div>
    <div class="afo-notice-bar__wrap" ref="wrap">
      <div :class="noticeContentCls" ref="content" :style="contentStyle"  @animationend="onAnimationEnd" @webkitAnimationEnd="onAnimationEnd">
        <slot>{{ text }}</slot>
      </div>
    </div>
    <afo-icon
      v-if="iconName"
      class="afo-notice-right-icon"
      :type="iconName"
      size="14px"
      @onClick="onClickIcon"
    />
  </div>
</template>
<script>
export default {
  name: 'afo-notice-bar',
  props: {
    text: String,
    mode: {
      type: String,
      default: ''
    },
    leftIcon: {
      type: String,
      default: ''
    },
    color: {
      type: String,
      default: '#f60'
    },
    background: {
      type: String,
      default: '#fff7cc'
    },
    fps: {
      type: Number,
      default: 50
    },
    delay: {
      type: Number,
      default: 1
    },
    scrollable: {
      type: Boolean,
      default: true
    },
    speed: {
      type: Number,
      default: 50
    },
    loop: {
      type: Boolean,
      default: true
    },
    onClick: {
      type: Function,
      default: () => {}
    }
  },
  data () {
    return {
      wrapWidth: 0,
      firstRound: true,
      duration: 0,
      offsetWidth: 0,
      showNoticeBar: true,
      animationClass: ''
    }
  },
  computed: {
    iconName () {
      return this.mode === 'closeable' ? 'close' : this.mode === 'link' ? 'arrow' : ''
    },
    noticeBarCls () {
      return {
        'afo-notice-bar': true,
        'afo-notice-bar--withicon': this.mode
      }
    },
    noticeBarStyle () {
      return {
        color: this.color,
        background: this.background
      }
    },
    contentStyle () {
      return {
        paddingLeft: this.firstRound ? 0 : this.wrapWidth + 'px',
        animationDelay: (this.firstRound ? this.delay : 0) + 's',
        animationDuration: this.duration + 's'
      }
    },
    noticeContentCls () {
      return {
        'afo-notice-bar__content': true,
        [this.animationClass]: true
      }
    }
  },
  methods: {
    onClickIcon () {
      this.showNoticeBar = this.mode !== 'closeable'
    },
    onAnimationEnd () {
      this.firstRound = false
      this.$nextTick(() => {
        this.duration = (this.offsetWidth + this.wrapWidth) / this.fps
        this.animationClass = 'afo-notice-bar__play--infinite'
      })
    }
  },
  watch: {
    text: {
      handler () {
        this.$nextTick(() => {
          const {wrap, content} = this.$refs
          if (!wrap || !content) {
            return
          }
          const wrapWidth = wrap.getBoundingClientRect().width
          const offsetWidth = content.getBoundingClientRect().width
          if (this.scrollable && offsetWidth > wrapWidth) {
            this.wrapWidth = wrapWidth
            this.offsetWidth = offsetWidth
            this.duration = offsetWidth / this.fps
            this.animationClass = 'afo-notice-bar__play'
          }
        })
      },
      immediate: true
    }
  }
}
</script>
<style lang="stylus">
@require "../../../common/stylus/variable.styl"
@require "../../../common/stylus/mixin.styl"
.afo-notice-bar
  display: flex
  padding: 9px 15px
  font-size: $fontsize-small
  line-height: $line-height-paragraph
  position: relative
  .afo-notice-left-icon
    height: 18px
    min-width: 20px
    padding-top: 1px
    box-sizing: border-box
    img
      width: 16px
      height: 16px
      top: 10px
      right: 10px
  .afo-notice-right-icon
    position: absolute
    line-height: $line-height-base
    top: 12px
    right: 10px
  .afo-notice-bar__wrap
    flex: 1
    height: 18px
    overflow: hidden
    position: relative
  .afo-notice-bar__content
    position: absolute
    white-space: nowrap
  .afo-notice-bar__play
    animation: afo-notice-bar-play linear both
  .afo-notice-bar__play--infinite {
    animation: afo-notice-bar-play-infinite linear infinite both;
  }
.afo-notice-bar--withicon
  position: relative
  padding-right: 30px

@keyframes afo-notice-bar-play
  to { transform: translate3d(-100%, 0, 0); }

@keyframes afo-notice-bar-play-infinite
  to { transform: translate3d(-100%, 0, 0); }
</style>
