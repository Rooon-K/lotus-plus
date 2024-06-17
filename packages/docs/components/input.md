---
search: false
prev:
  link: /components/link
  text: Link 链接
next:
  link: /components/collapse
  text: Collapse 折叠面板
---

# Input 输入框

## 基本用法

输入框的基本用法。

::: preview
demo-preview=../demo/input/Basic.vue
:::

## 输入框状态

可以通过`status`设置, 包括`success`, `warning`, `error`三种状态。

也可以直接设置`success`, `warning`, `error`属性。

::: preview
demo-preview=../demo/input/Status.vue
:::

## 输入框尺寸

可以通过`size`属性设置输入框的尺寸，包括`small`, `medium`, `large`三种尺寸。

::: preview
demo-preview=../demo/input/Size.vue
:::

## 前缀与后缀

通过指定`prefix`和`suffix`插槽, 可以在输入框内添加前缀和后缀。

::: preview
demo-preview=../demo/input/PrefixAndSuffix.vue
:::

## 前置、后置标签

通过指定`prepend`和`append`插槽, 可以在输入框前后添加元素。

::: preview
demo-preview=../demo/input/PrependAndAppend.vue
:::

## 密码输入框

可以通过设置`type`属性为`password`来实现密码输入框。

通过`showPassword`属性设置是否显示密码，默认不显示。

::: preview
demo-preview=../demo/input/Password.vue
:::

## 文本域

可以通过设置`type`属性为`textarea`来实现文本域。

::: preview
demo-preview=../demo/input/Textarea.vue
:::

## Input API

### Props

| 属性名       | 描述                                                  | 类型                              | 默认值   |
| ------------ | ----------------------------------------------------- | --------------------------------- | -------- |
| type         | 原生 input 类型 `text` 、 `password` 、 `textarea` 等 | string                            | `text`   |
| modelValue   | 绑定值                                                | string \| number                  | -        |
| size         | 输入框尺寸                                            | `small` \| `medium` \| `large`    | `medium` |
| status       | 输入框状态                                            | `success` \| `warning` \| `error` | -        |
| defalutValue | 输入框默认值                                          | string \| number                  | -        |
| placeholder  | 输入框占位符                                          | string                            | -        |
| disabled     | 是否禁用                                              | boolean                           | `false`  |
| readonly     | 是否只读                                              | boolean                           | `false`  |
| success      | 成功状态                                              | boolean                           | `false`  |
| warning      | 警告状态                                              | boolean                           | `false`  |
| error        | 错误状态                                              | boolean                           | `false`  |
| showPassword | 是否显示密码                                          | boolean                           | `false`  |
| clearable    | 是否显示清除按钮                                      | boolean                           | `false`  |
| width        | 输入框宽度                                            | string                            | -        |
| style        | 输入框样式                                            | CSSProperties                     | -        |

### Events

| 事件名 | 描述                                                        | 回调参数 |
| ------ | ----------------------------------------------------------- | -------- |
| input  | input 值变化                                                | -        |
| change | 仅当 modelValue 值变化, 输入框失去焦点或用户按 Enter 时触发 | -        |
| focus  | 输入框获得焦点                                              | -        |
| blur   | 输入框失去焦点                                              | -        |
| clear  | 点击`clearable`属性生成的清除按钮                           | -        |

### Slots

| 插槽名  | 描述           |
| ------- | -------------- |
| prefix  | 输入框前缀内容 |
| suffix  | 输入框后缀内容 |
| prepend | 输入框前置内容 |
| append  | 输入框后置内容 |

### Exposed

| 名称   | 描述           |
| ------ | -------------- |
| ref    | 输入框实例     |
| clear  | 清除输入框内容 |
| focus  | 聚焦输入框     |
| blur   | 失焦输入框     |
| select | 选中输入框内容 |
