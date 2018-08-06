## Icon 图标

### 使用指南
``` javascript
import { Icon } from 'afo';

Vue.use(Icon);
```

### 代码演示

#### 基础用法

设置`type`属性为对应的图标名称即可

```html
<afo-icon type="select" />
```

### API

| 参数 | 说明 | 类型 | 默认值 |
|-----------|-----------|-----------|-------------|
| type | 图标名称 | `String` | - |
| color | 图标颜色 | `String` | `inherit` |
| size | 图标大小 | `String` | `32px` |

### Event

| 事件名 | 说明 | 参数 |
|-----------|-----------|-----------|
| onClick | 点击图标时触发 | - |
