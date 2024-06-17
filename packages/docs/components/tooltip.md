---
search: false
prev:
  link: /components/collapse
  text: Collapse 折叠面板
next:
  link: /components/message
  text: Message 消息提示
---

# Tooltip 文字提示

## 基础用法

通过使用`v-tooltip`指令, 给元素添加文字提示。

::: preview
demo-preview=../demo/tooltip/Basic.vue
:::

## 修饰符用法

通过位置修饰符`position`来控制文字提示的位置。

::: preview
demo-preview=../demo/tooltip/Modifiers.vue
:::

## Tooltip API

### Options

| 属性名   | 描述         | 类型     | 默认值 |
| -------- | ------------ | -------- | ------ |
| content  | 文字提示内容 | `string` | -      |
| position | 文字提示位置 | `string` | `top`  |
| delay    | 延迟显示时间 | `number` | `100`  |
