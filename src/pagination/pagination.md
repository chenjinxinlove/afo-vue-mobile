
## Pagination 分页

### 使用指南
``` javascript
import { Pagination } from 'afo';

Vue.use(Pagination);
```

### 代码演示

#### 基础用法


```html
<afo-pagination 
  v-model="currentPage" 
  :total="24" 
  :page-size="5"
/>
```

```javascript
export default {
  data() {
    return  {
      currentPage: 1
    }
  }
}
```

#### 简单模式

```html
<afo-pagination 
  v-model="currentPage" 
  :count="12"
  mode="simple" 
/>
```

#### 显示省略号

```html
<afo-pagination 
  v-model="currentPage" 
  :total="125" 
  :show-page="3" 
  ellipses
/>
```

### API

| 参数 | 说明 | 类型 | 默认值 |
|-----------|-----------|-----------|-------------|
| v-model | 当前页码 | `Number` | - |
| mode | 显示模式，可选值为 `simple` `multi` | `String` | `multi` |
| page-size | 每页记录数 | `Number` | `10` |
| prev-text | 上一页 | `String` | `上一页` |
| next-text | 下一页 | `String` | `下一页` |
| show-page | 显示的页码个数 | `Number` | `5` |
| ellipses | 显示省略号 | `Boolean` | `false` |
| total  | 总数  | `Number` | `0` | 
| count  | 总页数 | `Number` | |

### Event

| 事件名 | 说明 | 参数 |
|-----------|-----------|-----------|
| onChange | 页码改变时触发 | - |
