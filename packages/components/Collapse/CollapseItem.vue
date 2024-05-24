<script setup lang="ts">
import { computed, inject } from "vue";
import type { CollapseItemProps } from "./types";
import { COLLAPSE_CTX_KEY } from "./constance";
import { LIcon } from "../Icon";
import transitionEvents from "./transitionEvents.ts";

defineOptions({
  name: "LCollapseItem"
});

const props = defineProps<CollapseItemProps>();
const ctx = inject(COLLAPSE_CTX_KEY);
const isActive = computed(() => ctx?.activeNames.value?.includes(props.name));

const handleClick = () => {
  if (props.disabled) return;
  ctx?.handleItemClick(props.name);
};
</script>

<template>
  <div class="lotus-collapse-item" :class="{ 'is-disabled': props.disabled }">
    <div
      class="lotus-collapse-item__header"
      @click="handleClick"
      :class="{ 'is-active': isActive, 'is-disabled': props.disabled }"
      :id="`item-header-${props.name}`"
    >
      <span class="lotus-collapse-item__title">
        <slot name="title">{{ props.title }}</slot>
      </span>
      <l-icon icon="angle-right" class="lotus-collapse-item__icon"></l-icon>
    </div>
    <transition name="slide" v-on="transitionEvents">
      <div class="lotus-collapse-item__wrapper" v-show="isActive">
        <div class="lotus-collapse-item__content" :id="`item-content-${props.name}`">
          <slot></slot>
        </div>
      </div>
    </transition>
  </div>
</template>
