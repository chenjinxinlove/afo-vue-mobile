## Icon 图标

### 使用指南
``` javascript
import { Loading } from 'afo';

Vue.use(Loading);
```

### 代码演示

#### 基础用法

设置`title`属性为标题

```html
<afo-navbar title="我是fixed标题" fixed>
  <afo-button slot="left" icon="back" @onClick="handleBack">返回</afo-button>
  <afo-button slot="right" icon="more"></afo-button>
</afo-navbar>
```

### API

| 参数 | 说明 | 类型 | 默认值 |
|-----------|-----------|-----------|-------------|
| title | 标题 | `String` | `''` |
| fixed | 是否固定在顶部 | `Boolean` | `false` |

### Slot

| 名称 | 说明 |
|-----------|-----------|
| left | 自定义左侧区域内容 |
| right | 自定义右侧区域内容 |