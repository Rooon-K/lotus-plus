<script setup lang="ts">
import { computed, inject, ref } from "vue";
import { throttle } from "lodash-es";
import type { ButtonProps, ButtonEmits } from "./types";
import { LIcon } from "../../Icon";
import { BUTTON_GROUP_CTX_KEY } from "./constance";

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
const buttonGroupCtx = inject(BUTTON_GROUP_CTX_KEY, void 0);

const size = computed(() => buttonGroupCtx?.size ?? props.size ?? "");
const type = computed(() => buttonGroupCtx?.type ?? props.type ?? "");
const disabled = computed(() => buttonGroupCtx?.disabled || props.disabled || false);
const status = computed(() => buttonGroupCtx?.status ?? props.status ?? "");
const shape = computed(() => props.shape);
const loading = computed(() => props.loading);
const iconStyle = computed(() => ({
  marginRight: slots.default ? "6px" : "0px"
}));
const handleBtnClick = (e: MouseEvent) => {
  if (disabled.value || loading.value) {
    e.preventDefault();
    return;
  }
  emits("click", e);
};
const handleBtnCLickThrottle = throttle(handleBtnClick, props.throttleDuration);

defineExpose({
  ref: _ref,
  disabled,
  size,
  type
});
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
          :icon="props.loadingIcon ?? 'spinner'"
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

<style scoped>
@import "../style/index.css";
</style>
