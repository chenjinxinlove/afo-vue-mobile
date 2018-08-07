## Tag 标记

### 使用指南
``` javascript
import { Tag } from 'afo';

Vue.use(Tag);
```

### 代码演示

#### 基础用法
通过 type 属性控制 Tag 颜色，默认为灰色

```html
<afo-tag>标签</afo-tag>
<afo-tag type="danger">标签</afo-tag>
<afo-tag type="primary">标签</afo-tag>
```

#### 空心样式
设置`plain`属性设置为空心样式

```html
<afo-tag plain>标签</afo-tag>
<afo-tag plain type="danger">标签</afo-tag>
<afo-tag plain type="success">标签</afo-tag>
```

#### 圆角样式
通过`mark`设置为圆角样式

```html
<afo-tag mark>标签</afo-tag>
<afo-tag mark type="danger">标签</afo-tag>
<afo-tag mark type="primary">标签</afo-tag>
```

### API

| 参数 | 说明 | 类型 | 默认值 |
|-----------|-----------|-----------|-------------|
| type | 类型，可选值为`primary` `default` `danger` | `String` | `''`|
| plain | 是否为空心样式 | `Boolean` | `false` |
| mark | 是否为圆角样式 | `Boolean` | `false` |

### Slot

| 名称 | 说明 |
|-----------|-----------|
| default | 自定义 Tag 显示内容 |
