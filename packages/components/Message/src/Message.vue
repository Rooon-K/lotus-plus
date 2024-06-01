<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref, watch } from "vue";
import type { MessageConfig } from "./types";
import { delay, isString } from "lodash-es";
import { LIcon } from "../../Icon";
import { typeIconMap, RenderVnode } from "@lotus-plus/utils";
import { getLastBottomOffset } from "./methods";
import { useEventListener } from "@lotus-plus/hooks";

defineOptions({
  name: "LMessage"
});

const slots = defineSlots();

let props = withDefaults(defineProps<MessageConfig>(), {
  type: "info",
  duration: 3000,
  transitionName: "fade-up",
  offset: 10
});

const visible = ref(false);
const messageRef = ref<HTMLDivElement>();

const close = () => {
  visible.value = false;
};

let timer: number;
const startTimer = () => {
  if (props.duration === 0) return;
  timer = delay(close, props.duration);
};

const clearTimer = () => {
  clearTimeout(timer);
};

const iconName = computed(() =>
  isString(props.icon) ? props.icon : typeIconMap.get(props.type) ?? "info-circle"
);

const boxHeight = ref(0);
const lastBottomOffset = computed(() => getLastBottomOffset(props.id));
const topOffset = computed(() => props.offset + lastBottomOffset.value);
const bottomOffset = computed(() => boxHeight.value + topOffset.value);

const cssStyle = computed(() => ({
  top: topOffset.value + "px",
  zIndex: props.zIndex
}));

const iconStyle = computed(() => ({
  marginRight: "6px"
}));

watch(visible, (val) => {
  if (!val) boxHeight.value = -props.offset;
});

useEventListener(document, "keydown", (e: Event) => {
  const { code } = e as KeyboardEvent;
  if (code === "Escape") close;
});

onMounted(() => {
  visible.value = true;
  startTimer();
});

onUnmounted(() => {
  messageRef.value?.removeEventListener("mouseenter", startTimer);
  messageRef.value?.removeEventListener("mouseleave", clearTimer);
});

defineExpose({
  bottomOffset,
  startTimer,
  clearTimer,
  messageRef,
  close
});
</script>

<template>
  <transition
    :name="transitionName"
    @enter="boxHeight = messageRef!.getBoundingClientRect().height"
    @after-leave="!visible && onDestroy()"
  >
    <div
      ref="messageRef"
      class="lotus-message"
      :class="{
        [`lotus-message--${props.type}`]: props.type,
        'lotus-message-closable': props.showClose
      }"
      :style="cssStyle"
      role="alert"
      v-show="visible"
      @mouseenter="clearTimer"
      @mouseleave="startTimer"
    >
      <template v-if="props.type === 'loading'">
        <l-icon
          class="loading-icon lotus-message__icon"
          :icon="props.icon ?? 'spinner'"
          :style="iconStyle"
          size="1x"
          spin
        />
      </template>
      <l-icon class="lotus-message__icon" :icon="iconName" v-if="props.type !== 'loading'" />
      <div class="lotus-message__content">
        <slot>
          <render-vnode v-if="message" :vNode="message"></render-vnode>
        </slot>
      </div>
      <div class="lotus-message__close" v-if="props.showClose">
        <l-icon icon="xmark" @click.stop="close" />
      </div>
    </div>
  </transition>
</template>

<style scoped>
@import "../style/index.css";
</style>
