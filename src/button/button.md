## Button 按钮

### 使用
``` javascript
import { Button } from 'afo'

Vue.use(Button)

```

### 代码演示

#### 按钮的作用
支持`button`,`submit`两种类型，默认是`button`

```html
<afo-button effect="button">默认按钮</afo-button>
<afo-button effect="submit">提交按钮</afo-button>
```

#### 按钮的类型
支持`default`,`primary`,`danger`三种类型，默认是`default`

```html
<afo-button type="defalut">默认按钮</afo-button>
<afo-button type="primary">主要按钮</afo-button>
<afo-button type="danger">危险按钮</afo-button>
```

#### 朴素按钮

```html
<afo-button type="defalut" plain>默认按钮</afo-button>
<afo-button type="primary">主要按钮</afo-button>
<afo-button type="danger">危险按钮</afo-button>
```

#### 按钮尺寸

支持`large`、`normal`、`small`四种尺寸，默认为`normal`

```html 
<afo-button size="large">大号按钮</afo-button>
<afo-button size="normal">普通按钮</afo-button>
<afo-button size="small">小型按钮</afo-button>
```

#### 禁用状态

通过`disabled`属性来禁用按钮，此时按钮不可点击

```html
<afo-button disabled>禁用状态</afo-button>
```
#### 内联标签

```html 
<afo-button inline />
```
#### 加载状态

```html 
<afo-button loading />
```

#### Icon

```html
<afo-button type="test">Icons按钮</afo-button>
```

###API


| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|-----------|-----------|-----------|-------------|-------------|
| effect | 按钮的作用 | `string` | `button/submit` |`button` |
| type | 按钮的类型 | `string` | `default, primary, danger` | `default` |
| size | 按钮大小 | `string` | `small, normal, large`|	`normal` |
| disabled | 禁用状态 | `boolean`| `true/false`	| `false`
| inline | 	是否设置为行内按钮| `true/false`	|`boolean`	| `false`
| plain | 	是否设置为素按钮| `true/false`	|`boolean`	| `false`
| loading | 设置载入状态| 	`boolean`|`true/false`	| `false`
| icon| 	icons | `string` |`icon的type`|
### Event

| 事件名 | 说明 | 参数 |
|-----------|-----------|-----------|
| onClick | 点击按钮且按钮状态不为加载或禁用时触发 | - |