## Radio 单选框

### 使用指南
``` javascript
import { RadioGroup, Radio } from 'afo';

Vue.use(RadioGroup);
Vue.use(Radio);
```

### 代码演示

#### 基础用法
通过`v-model`绑定值当前选中项的 name

```html
<afo-radio-group v-model="radio">
  <afo-radio name="1">单选框 1</afo-radio>
  <afo-radio name="2">单选框 2</afo-radio>
</afo-radio-group>
```

```javascript
export default {
  data() {
    return {
      radio: '1'
    }
  }
};
```

#### 禁用状态
通过`disabled`属性禁止选项切换，在`afo-radio`上设置`diabled`可以禁用单个选项

```html
<afo-radio-group v-model="radio" disabled>
  <afo-radio name="1">单选框 1</afo-radio>
  <afo-radio name="2">单选框 2</afo-radio>
</afo-radio-group>
```

### Radio API

| 参数 | 说明 | 类型 | 默认值 |
|-----------|-----------|-----------|-------------|
| name | 标识 Radio 名称 | 任意类型 | - |
| disabled | 是否为禁用状态 | `Boolean` | `false` |
| label-disabled | 是否禁用文本内容点击 | `Boolean` | `false` |
| label-position | 文本位置，可选值为 `left` | `String` | `right` |

### RadioGroup API

| 参数 | 说明 | 类型 | 默认值 |
|-----------|-----------|-----------|-------------|
| v-model | 当前选中项的 name | 任意类型 | - |
| disabled | 是否禁用所有单选框 | `Boolean` | `false` |

### RadioGroup Event

| 事件名称 | 说明 | 回调参数 |
|-----------|-----------|-----------|
| change | 当绑定值变化时触发的事件 | 当前选中项的 name |
