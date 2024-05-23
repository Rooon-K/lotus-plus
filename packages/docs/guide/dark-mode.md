---
search: false
next:
  link: /components/button
  text: Button 按钮
---

<script setup>
import ColorsWatches from '../.vitepress/components/ColorsWatches.vue'
</script>

# 暗黑模式

## Primary

常规、悬浮(hover)、点击(click)、特殊场景、激活(active)、禁用(disabled)、浅色、浅色悬浮、浅色禁用。

<ColorsWatches :colors="['#3C7EFF', '#306FFF', '#689FFF', '#1D4DD2', '#0E32A6', '#041B79', 'rgba(60, 126, 255, 0.2)', 'rgba(60, 126, 255, 0.35)', 'rgba(60, 126, 255, 0.5)']" />

## Normal

常规、悬浮(hover)、点击(click)、特殊场景、激活(active)、禁用(disabled)、浅色、浅色悬浮、浅色禁用。

<ColorsWatches :colors="['#929293', '#78787A', '#ABABAC', '#5F5F60', '#484849', '#2E2E30', 'rgba(146, 146, 147, 0.2)', 'rgba(146, 146, 147, 0.35)', 'rgba(146, 146, 147, 0.5)']" />

## Success

常规、悬浮(hover)、点击(click)、特殊场景、激活(active)、禁用(disabled)、浅色、浅色悬浮、浅色禁用。

<ColorsWatches :colors="['#27C346', '#1DB440', '#50D266', '#129A37', '#0A802D', '#046625', 'rgba(39, 195, 70, 0.2)', 'rgba(39, 195, 70, 0.35)', 'rgba(39, 195, 70, 0.5)']" />

## Warning

常规、悬浮(hover)、点击(click)、特殊场景、激活(active)、禁用(disabled)、浅色、浅色悬浮、浅色禁用。

<ColorsWatches :colors="['#FF9626', '#FF8D1F', '#FFB357', '#D26913', '#A64B0A', '#793004', 'rgba(255, 150, 38, 0.2)', 'rgba(255, 150, 38, 0.35)', 'rgba(255, 150, 38, 0.5)']" />

## Danger

常规、悬浮(hover)、点击(click)、特殊场景、激活(active)、禁用(disabled)、浅色、浅色悬浮、浅色禁用。

<ColorsWatches :colors="['#F76965', '#F54E4E', '#F98D86', '#CB2E34', '#A1161F', '#770611', 'rgba(247, 105, 101, 0.2)', 'rgba(247, 105, 101, 0.35)', 'rgba(247, 105, 101, 0.5)']" />

## 边框颜色

浅色/禁用、一般、深/悬浮、重/按钮描边。

<ColorsWatches :colors="['#2E2E30', '#484849', '#5F5F60', '#929293']" />

## 填充颜色

浅色/禁用、常规/白底悬浮、深/灰底悬浮、重/特殊场景。

<ColorsWatches :colors="['#17171A', '#2E2E30', '#484849', '#5F5F60']" />

## 文字颜色

强调/正文标题、次强调/正文标题、次要信息、置灰信息。

<ColorsWatches :colors="['#F6F6F6', '#C5C5C5', '#929293', '#5F5F60']" font-color="#333" />
