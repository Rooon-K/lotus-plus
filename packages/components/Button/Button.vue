<script setup lang="ts">
import { computed, ref } from "vue";
import { throttle } from "lodash-es";
import type { ButtonProps, ButtonEmits } from "./types";
import { LIcon } from "../Icon";

defineOptions({
  name: "LButton"
});

const props = withDefaults(defineProps<ButtonProps>(), {
  size: "default",
  status: "normal",
  shape: "square",
  disabled: false,
  loading: false,
  tag: "button",
  htmlType: "button",
  autofocus: false,
  useThrottle: false,
  throttleDuration: 500,
  type: "secondary"
});

const slots = defineSlots();
const _ref = ref<HTMLButtonElement>();
const emits = defineEmits<ButtonEmits>();

const size = computed(() => props.size);
const status = computed(() => props.status);
const shape = computed(() => props.shape);
const disabled = computed(() => props.disabled);
const loading = computed(() => props.loading);
const iconStyle = computed(() => ({
  marginRight: slots.default ? "6px" : "0px"
}));
const handleBtnClick = (e: MouseEvent) => {
  if (disabled || loading) {
    e.preventDefault();
    return;
  }
  emits("click", e);
};
const handleBtnCLickThrottle = throttle(handleBtnClick, props.throttleDuration);
</script>

<template>
  <component
    :is="props.tag"
    ref="_ref"
    :type="tag === 'button' ? htmlType : void 0"
    :disabled="disabled"
    :autofocus="autofocus"
    @click="(e:MouseEvent) => (useThrottle ? handleBtnCLickThrottle(e) : handleBtnClick(e))"
    class="lotus-button"
    :class="{
      'is-disabled': disabled,
      [`button-${type}`]: type,
      [`button-${shape}`]: shape,
      [`button-${size}`]: size,
      [`button-${status}`]: status,
      'is-loading': loading
    }"
  >
    <template v-if="loading">
      <slot name="loading">
        <l-icon
          class="loading-icon"
          :icon="loadingIcon ?? 'spinner'"
          :style="iconStyle"
          size="1x"
          spin
        />
      </slot>
    </template>
    <l-icon v-if="icon && !loading" size="1x" :icon="icon" :style="iconStyle" />
    <slot></slot>
  </component>
</template>
