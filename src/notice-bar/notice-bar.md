## NoticeBar 通告栏

### 使用指南
``` javascript
import { NoticeBar } from 'afo';

Vue.use(NoticeBar);
```

### 代码演示

#### 基础用法

```html
<afo-notice-bar
  text="最近做的项目是从0开始采用Vue作为数据驱动框架。所以有很多Vue实战上的经验体会，下面就专门拿几个常用的但难度不高的VUe功能说"
  left-icon="https://img.yzcdn.cn/1.png"
/>
```

#### 禁用滚动
文字内容多于一行时，可通过`scrollable`参数控制是否开启滚动

```html
<afo-notice-bar :scrollable="false">
  最近做的项目是从0开始采用Vue作为数据驱动框架。所以有很多Vue实战上的经验体会，下面就专门拿几个常用的但难度不高的VUe功能说
</afo-notice-bar>
```

#### 通告栏模式
默认模式为空，支持`closeable`和`link`。

```html
<!-- closeable 模式，在右侧显示关闭按钮 -->
<afo-notice-bar mode="closeable">
  最近做的项目是从0开始采用Vue作为数据驱动框架。所以有很多Vue实战上的经验体会，下面就专门拿几个常用的但难度不高的VUe功能说
</afo-notice-bar>

<!-- link 模式，在右侧显示链接箭头 -->
<afo-notice-bar mode="link">
  最近做的项目是从0开始采用Vue作为数据驱动框架。所以有很多Vue实战上的经验体会，下面就专门拿几个常用的但难度不高的VUe功能说
</afo-notice-bar>
```

### API

| 参数 | 说明 | 类型 | 默认值 |
|-----------|-----------|-----------|-------------|
| mode | 通告栏模式，可选值为 `closeable` `link` | `String` | `''` |
| delay | 动画延迟时间 (s) | `Number` | `0` |
| fps | 滚动速率 (px/s) | `Number` | `40` |
| scrollable | 是否在长度溢出时滚动播放 | `Boolean` | `true` |
| left-icon | 左侧图标图片 URL | `String` | - |
| color | 文本颜色 | `String` | `#f60` |
| background | 滚动条背景 | `String` | `#fff7cc` |

### Event

| 事件名 | 说明 | 参数 |
|-----------|-----------|-----------|
| onClick | 点击事件回调 | - |
