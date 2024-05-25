<script setup lang="ts">
import type { LinkEmits, LinkProps } from "./types";
import { LIcon } from "../Icon";
import { computed } from "vue";

defineOptions({
  name: "LLink"
});
const slots = defineSlots();
const props = withDefaults(defineProps<LinkProps>(), {
  status: "normal",
  target: "_self"
});
const emits = defineEmits<LinkEmits>();

const handleClick = (e: MouseEvent) => {
  if (props.disabled || props.loading) {
    e.preventDefault();
    return;
  }
  emits("click", e);
};
const icon = computed(() => {
  return props.loading ? "spinner" : props.icon;
});
const loading = computed(() => props.loading);
const iconStyle = computed(() => ({
  marginRight: slots.default ? "6px" : "0px"
}));
</script>

<template>
  <a
    :href="props.href ?? void 0"
    class="lotus-link"
    :class="{
      [`lotus-link--${props.status}`]: props.status,
      'lotus-link--disabled': props.disabled,
      'lotus-link--loading': props.loading
    }"
    @click="handleClick"
    :target="props.target"
  >
    <template v-if="loading">
      <slot name="loading">
        <l-icon
          class="loading-icon"
          icon="spinner"
          :style="iconStyle"
          size="1x"
          spin
        />
      </slot>
    </template>
    <l-icon v-if="icon && !loading" size="1x" :icon="icon" :style="iconStyle" />
    <span v-if="$slots.default" class="lotus-link__text">
      <slot></slot>
    </span>
  </a>
</template>
