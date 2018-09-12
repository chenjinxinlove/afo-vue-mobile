## Switch 开关

### 使用指南
``` javascript
import { Switch } from 'afo'

Vue.use(Switch)
```

### 代码演示

#### 基础用法
```html
<afo-switch v-model="checked" />
```

```javascript
export default {
  data() {
      checked: true
    }
  }
}
```

#### 禁用状态
```html
<afo-switch v-model="checked" disabled />
```

### API

| 参数 | 说明 | 类型 | 默认值 |
|-----------|-----------|-----------|-------------|
| v-model | 开关选中状态 | `Boolean` | `false` |
| disabled | 是否为禁用状态 | `Boolean` | `false` |

### Event

| 事件名 | 说明 | 参数 |
|-----------|-----------|-----------|
| onChange | 开关状态切换回调 | checked: 是否选中开关 |
