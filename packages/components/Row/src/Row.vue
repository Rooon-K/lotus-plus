<script setup lang="ts">
import { computed, provide, type CSSProperties } from "vue";
import type { RowProps } from "./types";
import { rowContextKey } from "./constance";
defineOptions({
  name: "LRow"
});

const props = withDefaults(defineProps<RowProps>(), {
  gutter: 0,
  justify: "start",
  tag: "div"
});

const gutter = computed(() => props.gutter);
provide(rowContextKey, {
  gutter
});

const rowCls = computed(() => {
  return {
    [`is-justify-${props.justify}`]: props.justify,
    [`is-align-${props.align}`]: props.align
  };
});

const style = computed(() => {
  const styles: CSSProperties = {};
  if (!props.gutter) {
    return styles;
  }

  styles.marginRight = styles.marginLeft = `-${props.gutter / 2}px`;
  return styles;
});
</script>

<template>
  <component :is="props.tag" class="lotus-row" :class="rowCls" :style="style">
    <slot></slot>
  </component>
</template>

<style scoped>
@import "../style/index.css";
</style>
