---
search: false
prev:
  link: /components/link
  text: Link 链接
next:
  link: /components/collapse
  text: Collapse 折叠面板
---

# Space 间距

## 基本用法

间距组件的基本用法。

::: preview
demo-preview=../demo/space/Basic.vue
:::

## 垂直间距

可以设置竖直方向排列的间距。

::: preview
demo-preview=../demo/space/Vertical.vue
:::

## 尺寸

内置 4 个尺寸, 可以通过 `size` 属性设置, `mini - 4px` 、 `small - 8px(默认)` 、 `medium - 16px` 、 `large - 24px` 。

::: preview
demo-preview=../demo/space/Size.vue
:::

## 对齐

可以设置水平方向的对齐方式, 分别为 `start` 、 `end` 、 `center` 、 `baseline` , 水平模式下默认为 `center` 。

::: preview
demo-preview=../demo/space/Align.vue
:::

## 环绕间距

一般用于换行的场景。

::: preview
demo-preview=../demo/space/Wrap.vue
:::

## 分隔符

可以设置分隔符。

::: preview
demo-preview=../demo/space/Split.vue
:::

## Space API

### Props

| 参数      | 说明                                                              | 类型    | 默认值       |
| --------- | ----------------------------------------------------------------- | ------- | ------------ |
| size      | 间距大小, 可选值为 `mini` 、 `small` 、 `medium` 、 `large`       | string  | `small`      |
| align     | 间距对齐方式, 可选值为 `start` 、 `end` 、 `center` 、 `baseline` | string  | `center`     |
| wrap      | 是否换行                                                          | boolean | `false`      |
| direction | 排列方向, 可选值为 `horizontal` 、 `vertical`                     | string  | `horizontal` |
