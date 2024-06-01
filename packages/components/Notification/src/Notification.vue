<script setup lang="ts">
import { computed, onMounted, ref, type CSSProperties } from "vue";
import type { NotificationConfig } from "./types";
import { delay, isString } from "lodash-es";
import { typeIconMap, RenderVnode } from "@lotus-plus/utils";
import { useEventListener } from "@lotus-plus/hooks";
import { LIcon } from "../../Icon";

defineOptions({
  name: "LNotification"
});

const slots = defineSlots();

let props = withDefaults(defineProps<NotificationConfig>(), {
  type: "info",
  duration: 3000,
  transitionName: "fade",
  position: "top-right"
});

const visible = ref(false);
const notificationRef = ref<HTMLDivElement>();

const close = () => {
  visible.value = false;
};

const iconName = computed(() =>
  isString(props.icon) ? props.icon : typeIconMap.get(props.type) ?? "info-circle"
);

let timer: number;
const startTimer = () => {
  if (props.duration === 0) return;
  timer = delay(close, props.duration);
};

const clearTimer = () => {
  clearTimeout(timer);
};

const horizontalClass = computed(() =>
  props.position.endsWith("right") ? "notification-right" : "notification-left"
);

const verticalProperty = computed(() => (props.position.startsWith("top") ? "top" : "bottom"));

const positionStyle = computed<CSSProperties>(() => {
  return {
    [verticalProperty.value]: `${props.offset}px`,
    zIndex: props.zIndex
  };
});

useEventListener(document, "keydown", (e: Event) => {
  const { code } = e as KeyboardEvent;
  if (code === "Escape") close;
});

onMounted(() => {
  visible.value = true;
  startTimer();
});

defineExpose({
  visible,
  startTimer,
  close
});
</script>

<template>
  <Transition :name="transitionName" @before-leave="onClose" @after-leave="$emit('destroy')">
    <div
      ref="notificationRef"
      v-show="visible"
      class="lotus-notification"
      :class="{
        [`lotus-notification--${props.type}`]: props.type,
        [horizontalClass]: horizontalClass
      }"
      :style="positionStyle"
      role="alert"
      @mouseenter="clearTimer"
      @mouseleave="startTimer"
    >
      <l-icon class="lotus-notification__icon" :icon="iconName" />
      <div class="lotus-notification__body">
        <div class="lotus-notification__title">
          <slot>
            <render-vnode v-if="title" :vNode="title"></render-vnode>
          </slot>
        </div>
        <div class="lotus-notification__content">
          <slot>
            <render-vnode v-if="content" :vNode="content"></render-vnode>
          </slot>
        </div>
      </div>
      <div class="lotus-notification__close" v-if="props.showClose">
        <l-icon icon="xmark" @click.stop="close" />
      </div>
    </div>
  </Transition>
</template>

<style scoped>
@import "../style/index.css";
</style>
