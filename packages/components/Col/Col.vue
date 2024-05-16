<script setup lang="ts">
import { computed, inject, type CSSProperties } from "vue";
import type { ColProps } from "./types";
import { rowContextKey } from "../Row/constance";
defineOptions({
  name: "LCol"
});
const props = withDefaults(defineProps<ColProps>(), {
  span: 24,
  offset: 0,
  push: 0,
  pull: 0,
  tag: "div"
});

const colCls = computed(() => {
  return {
    [`lotus-col-${props.span}`]: props.span,
    [`lotus-col-offset-${props.offset}`]: props.offset,
    [`lotus-col-push-${props.push}`]: props.push,
    [`lotus-col-pull-${props.pull}`]: props.pull
  };
});
const { gutter } = inject(rowContextKey, { gutter: computed(() => 0) })
const style = computed(() => {
  const styles: CSSProperties = {}
  if (gutter.value) {
    styles.paddingLeft = styles.paddingRight = `${gutter.value / 2}px`
  }
  return styles
})
</script>

<template>
  <component :is="props.tag" class="lotus-col" :class="colCls" :style="style">
    <slot></slot>
  </component>
</template>
