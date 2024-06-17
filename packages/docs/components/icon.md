---
search: false
prev:
  link: /components/button
  text: Button 按钮
next:
  link: /components/layout
  text: Layout 布局
---

# Icon 图标

常用的图标

## 基础用法

通过 `icon` 设置图标, `type` (优先级高) 、 `color` 调整颜色

::: preview
demo-preview=../demo/icon/Basic.vue
:::

## 图标合集

包含 Fontawesome 免费版所有图标

[点击此处](https://fontawesome.com.cn/v5) 查看所有图标名称

## API

### Props

| 属性名 | 说明       | 类型       | 默认值       |
| ------ | ---------- | ---------- | ------------ |
| color  | svg 的颜色 | `string`   | 继承颜色     |
| size   | svg 的大小 | `iconSize` | 继承字体大小 |
| icon   | svg 的名称 | `string`   | —            |

### Types

| 属性名   | 说明          | 数值                                                                                                                                                            | 默认值 |
| -------- | ------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------ |
| iconSize | size 的可选值 | `"2xs"` \| `"xs"` \| `"sm"` \| `"lg"` \| `"xl"` \| `"2xl"` \| `"1x"` \| `"2x"` \| `"3x"` \| `"4x"` \| `"5x"` \| `"6x"` \| `"7x"` \| `"8x"` \| `"9x"` \| `"10x"` | `"1x"` |
