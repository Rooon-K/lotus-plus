<script setup lang="ts">
import { computed, ref } from "vue";
import { throttle } from "lodash-es";
import type { ButtonProps, ButtonEmits } from "./types";
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

const handleBtnClick = (e: MouseEvent) => {
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
    :class="{
      [`button-${shape}`]: shape,
      [`button-${size}`]: size,
      [`button-${status}`]: status,
      [`button-${type}`]: type,
      'is-loading': loading,
      'is-disabled': disabled
    }"
    class="lotus-button"
  >
    <template v-if="loading">
      <slot name="loading"></slot>
    </template>
    <slot></slot>
  </component>
</template>
