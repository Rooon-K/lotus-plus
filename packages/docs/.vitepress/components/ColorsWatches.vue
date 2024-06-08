<script setup lang="ts">
import { useTextColorBasedOnBgColor, useTextCopy } from "lotus-plus";
import { onMounted, ref } from "vue";

interface Props {
  colors: string[];
}
const props = defineProps<Props>();
const { colors } = props;

const containerRef = ref<HTMLDivElement | HTMLDivElement[] | null>();

onMounted(() => {
  (containerRef.value as unknown as HTMLDivElement[]).forEach((el) => {
    useTextColorBasedOnBgColor(el);
  });
});
</script>

<template>
  <div class="color-container">
    <div
      v-for="color in colors"
      :key="color"
      class="color-swatch"
      :style="{ backgroundColor: color }"
      @click="useTextCopy(color)"
      ref="containerRef"
    >
      <span class="color-name">{{ color }}</span>
    </div>
  </div>
</template>

<style scoped>
.color-container {
  display: flex;
  flex-wrap: wrap;
}
.color-swatch {
  display: flex;
  justify-content: center;
  align-items: end;
  width: 80px;
  height: 80px;
  cursor: pointer;
}
.color-name {
  font-size: 14px;
}
</style>
