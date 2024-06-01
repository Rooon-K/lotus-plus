---
search: false
next:
  link: /components/notification
  text: Notification 通知
---
# Message 全局提示

## 基本用法

从顶部出现, 3 秒后自动消失。

::: preview
demo-preview=../demo/message/Basic.vue
:::

## 消息类型

全局提示有 5 种不同的类型, 分别为: `info` , `success` , `warning` , `error` , `loading`

::: preview
demo-preview=../demo/message/Status.vue
:::

## 自定义图标

通过 `icon` 属性可以自定义图标。

::: preview
demo-preview=../demo/message/Icon.vue
:::

## 可关闭

通过 `showClose` 属性可以让提示可关闭。

::: preview
demo-preview=../demo/message/ShowClose.vue
:::

## 关闭所有消息

通过 `closeAll` 方法可以关闭所有消息。

::: preview
demo-preview=../demo/message/CloseAll.vue
:::

<!-- ## 控制显示位置 -->

## 更新内容

更新消息内容。

::: preview
demo-preview=../demo/message/Update.vue
:::

## 调用方式

Lotus Plus 为 `app.config.globalProperties` 添加了全局方法 `$message` , 可以通过 `$message` 调用。同时也提供了 `$message.info` 、`$message.success` 、`$message.warning` 、`$message.error` 、`$message.loading` 等方法。

::: preview
demo-preview=../demo/message/Call.vue
:::

## Message API

### Config

| 参数名    | 描述                 | 类型                                                     | 默认值  |
| --------- | -------------------- | -------------------------------------------------------- | ------- |
| id        | 唯一 id              | `string`                                                 | -       |
| message   | 内容                 | `string` \| `VNode` \| `(() => VNode)`                   | -       |
| type      | 消息类型             | `info` \| `success` \| `warning` \| `error` \| `loading` | `info`  |
| icon      | 自定义图标           | `string` \| `Component`                                  | -       |
| showClose | 是否显示关闭按钮     | `boolean`                                                | `false` |
| duration  | 显示时长, 单位毫秒   | `number`                                                 | `3000`  |
| onClose   | 关闭时触发的回调函数 | `() => void`                                             | -       |
| onDestroy | 销毁时触发的回调函数 | `() => void`                                             | -       |

### Methods

| 事件名   | 描述                     | 类型                                        |
| -------- | ------------------------ | ------------------------------------------- |
| info     | 显示信息提示             | `(config: MessageParams) => MessageHandler` |
| success  | 显示成功提示             | `(config: MessageParams) => MessageHandler` |
| warning  | 显示警告提示             | `(config: MessageParams) => MessageHandler` |
| error    | 显示错误提示             | `(config: MessageParams) => MessageHandler` |
| loading  | 显示加载提示             | `(config: MessageParams) => MessageHandler` |
| closeAll | 关闭所有消息(可筛选类型) | `(type?: MessageType) => void`              |

### Slots

| 插槽名  | 描述       |
| ------- | ---------- |
| default | 自定义内容 |
