---
search: false
next:
  link: /components/collapse
  text: Collapse 折叠面板
---

# Layout 布局

## 基础布局

使用列创建基础网格布局。

通过 `row` 和 `col` 组件，并通过 `col` 组件的 `span` 属性我们就可以自由地组合布局。

::: preview
demo-preview=../demo/layout/Basic.vue
:::

## 分栏间隔

行提供 `gutter` 属性来指定列之间的间距，其默认值为 0。

::: preview
demo-preview=../demo/layout/Gutter.vue
:::

## 混合布局

通过基础的 1/24 分栏任意扩展组合形成较为复杂的混合布局。

::: preview
demo-preview=../demo/layout/Mix.vue
:::

## 列偏移

通过制定 `col` 组件的 `offset` 属性可以指定分栏偏移的栏数。

::: preview
demo-preview=../demo/layout/Offset.vue
:::

## 对齐方式

默认使用 `flex` 布局来对分栏进行灵活的对齐。

您可以通过 `justify` 属性来定义子元素的排版方式，其取值为 `start` 、 `center` 、 `end` 、 `space-between` 、 `space-around` 或 `space-evenly` 。

::: preview
demo-preview=../demo/layout/Justify.vue
:::
