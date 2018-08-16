## Tarbar 标签栏

### 使用指南
``` javascript
import { Tabbar, TabbarItem } from 'afo';

Vue.use(Tabbar).use(TabbarItem);
```

### 代码演示

#### 基础用法


```html
<afo-tabbar v-model="active">
    <afo-tabbar-item icon="mall">购物车</afo-tabbar-item>
    <afo-tabbar-item icon="credit-card" dot>订单</afo-tabbar-item>
    <afo-tabbar-item icon="person" info="12">个人中心</afo-tabbar-item>
</afo-tabbar>
```

```javascript
export default {
  data() {
    return {
      active: 0
    }
  }
}
```


#### 自定义图标
通过 icon slot 自定义图标，可以通过 `slot-scope` 判断标签是否选中

```html
<afo-tabbar v-model="active">
    <afo-tabbar-item>首页
    <img
        slot="icon"
        slot-scope="props"
        :src="props.active ? icon.active : icon.normal"
    >
    </afo-tabbar-item>
    <afo-tabbar-item icon="mall">购物车</afo-tabbar-item>
    <afo-tabbar-item icon="credit-card" dot>订单</afo-tabbar-item>
    <afo-tabbar-item icon="person" info="12">个人中心</afo-tabbar-item>
</afo-tabbar>
```

```javascript
export default {
    data () {
    return {
      active: 0,
      icon: {
        normal: 'https://img.yzcdn.cn/public_files/2017/10/13/c547715be149dd3faa817e4a948b40c4.png',
        active: 'https://img.yzcdn.cn/public_files/2017/10/13/793c77793db8641c4c325b7f25bf130d.png'
      }
    }
  }
}
```

API

### Tabber API

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|-----------|-----------|-----------|-------------|-------------|
| barTintColor | tabbar 背景色 | `string` |  | `white` |
| tintColor | 选中的字体颜色 | `string`|| `#108ee9` |
| unselectedTintColor | 未选中的字体颜色 | `string` || `#888` |
| fixed | 是否固定在底部 | `boolean` || `true` |
| zIndex | 元素 z-index | `number` || `1` |

### Tabbar Event

| 事件名 | 说明 | 参数 |
|-----------|-----------|-----------|
| onChange | 切换标签时触发 | active: 当前选中标签 |



### TabbarItem API

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|-----------|-----------|-----------|-------------|-------------|
| icon | 图标名称 (可选值见 Icon 组件) | `string` |  | |
| dot | 是否显示小红点 | `boolean`|||
| size | 图标大小 |`string`|||