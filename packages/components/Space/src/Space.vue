<script setup lang="ts">
import domHelper from "@lotus-plus/utils/domHelper";
import type { SpaceProps, SpaceSize } from "./types";
import { ref, type CSSProperties, useSlots } from "vue";
import { isArray, isNumber } from "lodash-es";

defineOptions({
  name: "LSpace"
});
const props = withDefaults(defineProps<SpaceProps>(), {
  size: "small",
  direction: "horizontal",
  align: "center",
  wrap: false
});
const slots = useSlots();
const _ref = ref<HTMLElement>();

function getMargin(size: SpaceSize) {
  if (isNumber(size)) {
    return size;
  }
  switch (size) {
    case "mini":
      return 4;
    case "small":
      return 8;
    case "medium":
      return 16;
    case "large":
      return 24;
    default:
      return 8;
  }
}

const getMarginStyle = (isLast: boolean): CSSProperties => {
  const style: CSSProperties = {};

  const marginRight = `${getMargin(isArray(props.size) ? props.size[0] : props.size)}px`;
  const marginBottom = `${getMargin(isArray(props.size) ? props.size[1] : props.size)}px`;

  if (isLast) {
    return props.wrap ? { marginBottom } : {};
  }

  if (props.direction === "horizontal") {
    style.marginRight = marginRight;
  }
  if (props.direction === "vertical" || props.wrap) {
    style.marginBottom = marginBottom;
  }

  return style;
};

const children = domHelper
  .getAllElements(slots.default?.(), true)
  .filter((item) => item.type !== Comment);
</script>

<template>
  <div
    class="lotus-space"
    ref="_ref"
    :class="{
      'lotus-space--horizontal': props.direction === 'horizontal',
      'lotus-space--vertical': props.direction === 'vertical',
      'lotus-space--start': props.align === 'start',
      'lotus-space--end': props.align === 'end',
      'lotus-space--center': props.align === 'center',
      'lotus-space--baseline': props.align === 'baseline',
      'lotus-space--wrap': props.wrap
    }"
  >
    <div
      class="lotus-space__item"
      v-for="(item, index) in children"
      :key="index"
      :style="getMarginStyle(index === children.length - 1)"
    >
      <div class="lotus-space__split" :style="getMarginStyle(false)">
        <component
          v-for="slot in slots.split?.()"
          :key="slot"
          :is="slot"
          v-if="slots.split && index > 0"
        ></component>
      </div>
      <component :is="item"></component>
    </div>
  </div>
</template>

<style scoped>
@import "../style/index.css";
</style>
