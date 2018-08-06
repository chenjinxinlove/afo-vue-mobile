<template>
  <ul>
      <li>
        <afo-badge dot>
            <span :style="{ width: '26px', height: '26px', background: '#ddd', display: 'inline-block' }" />
        </afo-badge>
        <span :style="{ marginLeft: '12px' }">点徽章</span>
      </li>
      <li>
          <afo-badge text="促" corner>
            <div class="corner-afo-badge">使用corner属性</div>
          </afo-badge>
      </li>
      <li>
        <afo-badge text=0 :style="{marginLeft: '12px'}">文本 number 0</afo-badge>
        <afo-badge text="new" :style="{ marginLeft: '12px' }" />
      </li>
      <li>
        行销:
        <afo-badge text="减" hot :style="{ marginLeft: '12px' }" />
        <afo-badge text="惠" hot :style="{ marginLeft: '12px' }" />
        <afo-badge text="免" hot :style="{ marginLeft: '12px' }" />
        <afo-badge text="反" hot :style="{ marginLeft: '12px' }" />
        <afo-badge text="HOT" hot :style="{ marginLeft: '12px' }" />
      </li>
      <li>
        定做
        <afo-badge text="券" :style="{ marginLeft: '12px', padding: '0 3px', backgroundColor: '#f19736', borderRadius: '2px' }" />
        <afo-badge text="NEW" :style="{ marginLeft: '12px', padding: '0 3px', backgroundColor: '#21b68a', borderRadius: '2px' }" />
        <afo-badge text="自动缴费"
            :style="{
            marginLeft: '12px',
            padding: '0 3px',
            backgroundColor: '#fff',
            borderRadius: '2px',
            color: '#f19736',
            border: '1px solid #f19736',
            }"
        />
      </li>
  </ul>
</template>
<script>
export default {
  name: 'afo-badgeDemo'
}
</script>
<style>
li{
  height: 60px;
  list-style: none;
  border-bottom: 1px solide #ccc;
}
.corner-afo-badge {
  height: 50px;
  width: 200px;
}

.special-afo-badge .am-list-line {
  padding-right: 0;
}

.special-afo-badge .am-list-line .am-list-extra {
  padding: 0;
  height: 44px;
}

.special-afo-badge .am-afo-badge {
  transform: rotate(45deg);
  transform-origin: right bottom;
  right: 0;
  top: 13px;
  width: 50px;
}

.special-afo-badge .am-afo-badge-text {
  border-radius: 1px;
}

</style>
