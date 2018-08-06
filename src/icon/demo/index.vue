<template>
<div>
  <div v-for="(item, index) in list" :key="index">
    <afo-icon :type="item" />
    <span>{{item}}</span>
  </div>
</div>
</template>
<script>
export default {
  name: 'AfoIconDemo',
  data: function () {
    return {
      list: [
        'eye-invisible', 'eye-visible', 'square-right',
        'select', 'pulldown', 'pullup',
        'more', 'back', 'arrow',
        'close', 'warn',
        'question', 'right', 'wrong', 'info', 'remove', 'add',
        'share', 'no-wifi', 'smile', 'sad', 'email', 'game',
        'wifi', 'hot', 'notification', 'delete', 'vip', 'mute',
        'danger', 'volume', 'bad', 'mobile-phone', 'aim', 'navigation',
        'safe-pay', 'tag', 'lock', 'unlock', 'edit', 'scan', 'qr-code',
        'calendar', 'time', 'red-packet', 'star', 'setting', 'home',
        'credit-card', 'mall', 'microphone', 'search', 'good',
        'alert', 'picture', 'message', 'phone', 'location',
        'like', 'camera', 'person', 'round-border', 'important',
        'ok', 'square-border'
      ]
    }
  }
}
</script>
