---
search: false
prev:
  link: /components/layout
  text: Layout 布局
next:
  link: /components/space
  text: Space 间距
---

# Link 链接

## 基本用法

基础的文字链接用法。

::: preview
demo-preview=../demo/link/Basic.vue
:::

## 链接状态

链接的状态分为 `normal` - 正常(默认) 、 `warning` 、 `success` 、 `danger` 四种，可以通过 `status` 属性设置。

::: preview
demo-preview=../demo/link/Status.vue
:::

## 加载中

通过设置 `loading` 属性来让链接处于加载中状态。

::: preview
demo-preview=../demo/link/Loading.vue
:::

## Link API

### Link Props

| 属性名   | 说明                 | 类型                                           | 默认值   |
| -------- | -------------------- | ---------------------------------------------- | -------- |
| href     | 链接地址             | string                                         | -        |
| status   | 链接状态             | 'normal' \| 'warning' \| 'success' \| 'danger' | "normal" |
| loading  | 加载状态             | boolean                                        | false    |
| disabled | 禁用状态             | boolean                                        | false    |
| target   | 同原生 `target` 属性 | '\_self' \| '\_blank' \| '\_parent' \| '\_top' | '\_self' |

### Link Slots

| 插槽名  | 说明     |
| ------- | -------- |
| default | 默认内容 |

### Link Events

| 事件名 | 说明           | 回调参数                |
| ------ | -------------- | ----------------------- |
| click  | 点击链接时触发 | (e: MouseEvent) => void |
