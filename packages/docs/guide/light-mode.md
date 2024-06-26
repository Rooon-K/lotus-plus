---
search: false
next:
  link: /guide/dark-mode
  text: 暗黑模式
---

<script setup>
import ColorsWatches from '../.vitepress/components/ColorsWatches.vue'
</script>

# 浅色模式

## useTextColorBasedOnBgColor

通过预设的 `useTextColorBasedOnBgColor()` 钩子函数, 可以实现文字颜色根据背景颜色自动调整。

```ts
import { useTextColorBasedOnBgColor } from "lotus-plus";

useTextColorBasedOnBgColor(el); // 接收两个参数, el 为需要调整的元素, threshold 为亮度阈值, 默认为 128。
```

## Primary

常规、悬浮(hover)、点击(click)、特殊场景、激活(active)/浅色禁用、禁用(disabled)/浅色悬浮、浅色。

<ColorsWatches :colors="['#165DFF', '#4080FF', '#0E42D2', '#6AA1FF', '#94BFFF', '#BEDAFF', '#E8F3FF']" />

## Normal

常规、悬浮(hover)、点击(click)、特殊场景、激活(active)/浅色禁用、禁用(disabled)/浅色悬浮、浅色。

<ColorsWatches :colors="['#86909C', '#A9AEB8', '#6B7785', '#C9CDD4', '#E5E6EB', '#F2F3F5', '#F7F8FA']" />

## Success

常规、悬浮(hover)、点击(click)、特殊场景、激活(active)/浅色禁用、禁用(disabled)/浅色悬浮、浅色。

<ColorsWatches :colors="['#00B42A', '#23C343', '#009A29', '#4CD263', '#7BE188', '#AFF0B5', '#E8FFEA']" />

## Warning

常规、悬浮(hover)、点击(click)、特殊场景、激活(active)/浅色禁用、禁用(disabled)/浅色悬浮、浅色。

<ColorsWatches :colors="['#FF7D00', '#FF9A2E', '#D25F00', '#FFB65D', '#FFCF8B', '#FFE4BA', '#FFF7E8']" />

## Danger

常规、悬浮(hover)、点击(click)、特殊场景、激活(active)/浅色禁用、禁用(disabled)/浅色悬浮、浅色。

<ColorsWatches :colors="['#F53F3F', '#F76560', '#CB272D', '#F98981', '#FBACA3', '#FDCDC5', '#FFECE8']" />

## 边框颜色

浅色/禁用、一般、深/悬浮、重/按钮描边。

<ColorsWatches :colors="['#F2F3F5', '#E5E6EB', '#C9CDD4', '#86909C']" />

## 填充颜色

浅色/禁用、常规/白底悬浮、深/灰底悬浮、重/特殊场景。

<ColorsWatches :colors="['#F7F8FA', '#F2F3F5', '#E5E6EB', '#C9CDD4']" />

## 文字颜色

强调/正文标题、次强调/正文标题、次要信息、置灰信息。

<ColorsWatches :colors="['#1D2129', '#4E5969', '#86909C', '#C9CDD4']" />
