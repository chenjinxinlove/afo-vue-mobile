## Collapse 折叠面板

### 使用指南
``` javascript
import { Collapse, CollapseItem } from 'afo';

Vue.use(Collapse).use(CollapseItem);
```

### 代码演示

#### 基础用法
通过`v-model`控制展开的面板列表，`activeNames`为数组格式

```html
<afo-collapse v-model="activeNames">
  <afo-collapse-item title="1" name="1">
    111111111
  </afo-collapse-item>
  <afo-collapse-item title="2" name="2">
    22222222
  </afo-collapse-item>
  <afo-collapse-item title="3" name="3">
    2222222222
  </afo-collapse-item>
</afo-collapse>
```

``` javascript
export default {
  data() {
    return {
      activeNames: ['1']
    };
  }
};
```

#### 手风琴
通过`accordion`可以设置为手风琴模式，最多展开一个面板，此时`activeName`为字符串格式

```html
<afo-collapse v-model="activeName" accordion>
  <afo-collapse-item title="1" name="1">
    1111111111
  </afo-collapse-item>
  <afo-collapse-item title="2" name="2">
    2222222222
  </afo-collapse-item>
  <afo-collapse-item title="3" name="3">
    333333333333
  </afo-collapse-item>
</afo-collapse>
```

``` javascript
export default {
  data() {
    return {
      activeName: '1'
    };
  }
};
```

#### 自定义标题内容

```html
<afo-collapse v-model="activeNames">
  <afo-collapse-item name="1">
    <div slot="title">1<afo-icon type="question" /></div>
    11111111111
  </afo-collapse-item>
  <afo-collapse-item title="2" name="2">
    22222222222
  </afo-collapse-item>
</afo-collapse>
```



### Collapse API

| 参数 | 说明 | 类型 | 默认值 |
|-----------|-----------|-----------|-------------|-------------|
| v-model | 当前展开面板的 name | `Array | String | Number` | - |
| accordion | 是否开启手风琴模式 | `Boolean` | `false` |

### Collapse Event

| 事件名 | 说明 | 参数 |
|-----------|-----------|-----------|
| onChange | 切换面板时触发 | activeNames: `string | array` |

### CollapseItem API

| 参数 | 说明 | 类型 | 默认值 |
|-----------|-----------|-----------|-------------|-------------|
| name | 面板唯一标识符，默认为索引值 | `String | Number` | `index` |
| title | 标题 | `String` | - |


### CollapseItem Slot

| 名称 | 说明 |
|-----------|-----------|
| default | 面板内容 |
| title | 自定义标题内容 |