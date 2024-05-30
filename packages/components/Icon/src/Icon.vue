<script setup lang="ts">
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import type { IconProps } from "./types";
import { omit } from "lodash-es";
import { computed } from "vue";

defineOptions({
  name: "LIcon",
  inheritAttrs: false
});

const props = defineProps<IconProps>();
const filterProps = computed(() => omit(props, ["type", "color"]));
const customStyles = computed(() => ({ color: props.color ?? void 0 }));
</script>

<template>
  <i
    class="lotus-icon"
    :class="{ [`lotus-icon-${props.type}`]: props.type }"
    :style="customStyles"
    v-bind="$attrs"
  >
    <font-awesome-icon v-bind="filterProps"></font-awesome-icon>
  </i>
</template>

<style scoped>
@import "../style/index.css";
</style>
