<script setup lang="ts">
import type { ButtonGroupProps } from "./types";
import { BUTTON_GROUP_CTX_KEY } from "./constance";
import { provide, reactive, toRef } from "vue";

defineOptions({
  name: "LButtonGroup"
});
const props = defineProps<ButtonGroupProps>();

provide(
  BUTTON_GROUP_CTX_KEY,
  reactive({
    size: toRef(props, "size"),
    type: toRef(props, "type"),
    disabled: toRef(props, "disabled"),
    status: toRef(props, "status")
  })
);
</script>

<template>
  <div class="lotus-button-group">
    <slot></slot>
  </div>
</template>

<style scoped>
@import "../style/index.css";
</style>
