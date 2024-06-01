# Notification 通知

## 基本用法

支持函数式调用和全局调用
::: preview
demo-preview=../demo/notification/Basic.vue
:::

## 不同类型的通知

我们提供了四种不同类型的提示框: info, success, warning 和 error。

他们可以通过设置 `type` 字段来指定类型(默认为 `info` ), 除此之外, 也可以在不传入 `type` 字段的情况下像 `open3` 、`open4` 那样直接调用。
::: preview
demo-preview=../demo/notification/Status.vue
:::

## 自定义消息弹出的位置

可以通过设置 `position` 字段来指定消息弹出的位置(默认为 `top-right` ), 目前支持 `top-right`、`top-left`、`bottom-right`、`bottom-left` 四个位置。
::: preview
demo-preview=../demo/notification/Position.vue
:::

## VNode

title 和 message 支持 VNode，可以传入组件、HTML 标签、文本等。
::: preview
demo-preview=../demo/notification/VNode.vue
:::

## 通知的关闭

可以设置 `duration` 字段来指定通知的持续时间(单位为毫秒)，默认为 `3000` 毫秒, 若设置为 `0` 则不会自动关闭。

可以通过设置 `showClose` 字段来指定是否显示关闭按钮。

可以通过 `closeAll()` 来关闭所有通知, 也可以通过 `closeAll(type)` 来关闭指定类型的通知。

::: preview
demo-preview=../demo/notification/Close.vue
:::

## 通知的更新

通过设置 `id` 字段来标识通知，当相同 `id` 的通知发生变化时，会重新渲染通知。

::: preview
demo-preview=../demo/notification/Update.vue
:::

## Notification API

### Config

| 参数名    | 描述                 | 类型                                                          | 默认值      |
| --------- | -------------------- | ------------------------------------------------------------- | ----------- |
| id        | 唯一 id              | `string`                                                      | -           |
| title     | 标题                 | `string` \| `VNode` \| `(() => VNode)`                        | -           |
| content   | 内容                 | `string` \| `VNode` \| `(() => VNode)`                        | -           |
| type      | 消息类型             | `info` \| `success` \| `warning` \| `error` \| `loading`      | `info`      |
| position  | 弹出位置             | `top-right` \| `top-left` \| `bottom- right` \| `bottom-left` | `top-right` |
| icon      | 自定义图标           | `string` \| `Component`                                       | -           |
| showClose | 是否显示关闭按钮     | `boolean`                                                     | `false`     |
| duration  | 显示时长, 单位毫秒   | `number`                                                      | `3000`      |
| onClose   | 关闭时触发的回调函数 | `() => void`                                                  | -           |
| onDestroy | 销毁时触发的回调函数 | `() => void`                                                  | -           |

### Methods

| 事件名   | 描述                     | 类型                                   |
| -------- | ------------------------ | -------------------------------------- |
| info     | 显示信息提示             | `(config: NotificationParams) => void` |
| success  | 显示成功提示             | `(config: NotificationParams) => void` |
| warning  | 显示警告提示             | `(config: NotificationParams) => void` |
| error    | 显示错误提示             | `(config: NotificationParams) => void` |
| closeAll | 关闭所有消息(可筛选类型) | `(type?: NotificationType) => void`    |

### Slots

| 插槽名  | 描述       |
| ------- | ---------- |
| default | 自定义内容 |
