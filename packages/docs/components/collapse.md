---
search: false
prev:
  link: /components/input
  text: Input 输入框
next:
  link: /components/message
  text: Message 消息提示
---

# Collapse 折叠面板

## 基础用法

可同时展开多个面板，面板之间不影响

::: preview
demo-preview=../demo/collapse/Basic.vue
:::

## 手风琴模式

每次只能打开一个面板，其他面板收起。

::: preview
demo-preview=../demo/collapse/Accordion.vue
:::

## 自定义标题

通过具名 slot 来实现自定义面板的标题内容。

::: preview
demo-preview=../demo/collapse/Custom.vue
:::

## 禁用状态

设置 `disabled` 属性可以禁用某个面板。

::: preview
demo-preview=../demo/collapse/Disabled.vue
:::

## Collapse API

### Props

| 属性名               | 描述                  | 类型               | 默认值 |
| -------------------- | --------------------- | ------------------ | ------ |
| v-model / modelValue | 当前激活的面板的 name | CollapseItemName[] | []     |
| accordion            | 是否开启手风琴模式    | boolean            | false  |

### Events

| 事件名 | 描述           | 类型                               |
| ------ | -------------- | ---------------------------------- |
| change | 切换面板时触发 | (name: CollapseItemName[]) => void |

### Slots

| 插槽名  | 描述     | 子标签       |
| ------- | -------- | ------------ |
| default | 面板内容 | CollapseItem |

## CollapseItem API

### Props

| 属性名   | 描述           | 类型             | 默认值 |
| -------- | -------------- | ---------------- | ------ |
| name     | 唯一标识符     | CollapseItemName | -      |
| title    | 面板标题       | string           | ""     |
| disabled | 是否禁用该面板 | boolean          | false  |

### Slots

| 插槽名  | 描述                        |
| ------- | --------------------------- |
| default | 默认插槽, CollapseItem 内容 |
| title   | 自定义标题内容              |
