---
search: false
next:
  link: /components/icon
  text: Icon 图标
---

# Button 按钮

常用的操作按钮

## 基础用法

使用 `type` 、`size` 、 `status` 和 `shape` 来定义按钮的样式。

::: preview
demo-preview=../demo/button/Basic.vue
:::

## 图标按钮

使用 `icon` 属性来定义按钮的图标。

::: preview
demo-preview=../demo/button/Icon.vue
:::

## 按钮形状

使用 `square` 、`circle` 、 `round` 来定义按钮的形状。

::: preview
demo-preview=../demo/button/Shape.vue
:::

## 按钮状态

使用 `normal` - 正常(默认) 、`success` 、 `warning` 和 `danger` 来定义按钮的状态。

::: preview
demo-preview=../demo/button/Status.vue
:::

## 按钮尺寸

使用 `default` - 正常(默认) 、`small` 、和 `large` 来定义按钮的尺寸。

::: preview
demo-preview=../demo/button/Size.vue
:::

## 按钮组

使用 `<l-button-group>` 对多个按钮分组。

::: preview
demo-preview=../demo/button/ButtonGroup.vue
:::

## 禁用状态

按钮的禁用状态。

::: preview
demo-preview=../demo/button/Disabled.vue
:::

## 加载状态

使用 `loading` 属性来定义按钮的加载状态。

::: preview
demo-preview=../demo/button/Loading.vue
:::

## 节流模式

可以通过 `useThrottle` 属性来定义按钮是否使用节流模式 默认为 `false`, 通过 `throttleDuration` 调整间隔 默认为 500ms。

::: preview
demo-preview=../demo/button/UseThrottle.vue
:::

## API

### Props

| 参数名           | 描述                         | 类型                                                      | 默认值      |
| ---------------- | ---------------------------- | --------------------------------------------------------- | ----------- |
| size             | 按钮大小                     | `Enum` - `"large" \| "default" \| "small"`                | `"default"` |
| type             | 按钮类型                     | `Enum` - `"primary" \| "dashed" \| "outline" \| "text"`   | —           |
| html-type        | 设置`button`的原生`type`属性 | `Enum` - `"button" \| "reset" \| "submit"`                | "button"    |
| status           | 按钮状态                     | `Enum` - `"normal" \| "success" \| "warning" \| "danger"` | "normal"    |
| shape            | 按钮形状                     | `Enum` - `"square" \| "circle" \| "round"`                | "square"    |
| icon             | 自定义图标                   | `string \| Component`                                     | —           |
| tag              | 自定义元素标签               | `string \| Component`                                     | "button"    |
| disabled         | 是否禁用                     | `Boolean`                                                 | false       |
| loading          | 是否加载中                   | `Boolean`                                                 | false       |
| autofocus        | 是否自动聚焦                 | `Boolean`                                                 | false       |
| useThrottle      | 是否开启节流模式             | `Boolean`                                                 | false       |
| throttleDuration | 节流模式间隔                 | `Number`                                                  | 500         |

### Events

| 事件名 | 描述           | 参数              |
| ------ | -------------- | ----------------- |
| click  | 点击按钮时触发 | `(e: MouseEvent)` |

### Slots

| 插槽名  | 描述     |
| ------- | -------- |
| default | 默认插槽 |
