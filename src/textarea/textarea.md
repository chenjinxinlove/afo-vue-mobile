## Textarea 标记

### 使用指南
``` javascript
import { Textarea } from 'afo';

Vue.use(Textarea);
```

### 代码演示

#### 基础用法

```html
<afo-textarea v-model="value"></afo-textarea>
```

#### 配置计数标识

```html
<afo-textarea v-model="value" indicator="indicator"></afo-textarea>
```

#### 多项配置
```html
<afo-textarea
  v-model="value"
  :placeholder="placeholder"
  :maxlength="maxlength"
  :readonly="readonly"
  :disabled="disabled"
  :autofocus="autofocus"
></afo-textarea>
```

### API

| 参数 | 说明 | 类型 | 默认值 |
|-----------|-----------|-----------|-------------|
| v-model | 绑定的值 | `String` | `''`|
| disabled | 禁用状态 | `Boolean` | `false` |
| readonly | 只读状态 | `Boolean` | `false` |
| maxlength | 最大输入长度 | `Number` | `60` |
| placeholder | 占位文本 | `String` | `''` |
| autofocus | 自动对焦 | `Boolean` | `false` |
| indicator | 计数标识配置 | `Boolean` | `true`|

### Tabs Event

| 事件名 | 说明 | 参数 |
|-----------|-----------|-----------|
| focus | 输入框聚焦后触发此事件，如果禁用状态，则不触发 | e - 事件对象 |
| change | 输入框内容改变时触发 | e - 事件对象 |
| blur | 输入框失焦后触发此事件 | e - 事件对象 |