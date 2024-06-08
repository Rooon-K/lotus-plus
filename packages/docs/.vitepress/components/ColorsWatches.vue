<script setup lang="ts">
import { LMessage, useTextColorBasedOnBgColor } from "lotus-plus";
import { onMounted, ref } from "vue";

interface Props {
  colors: string[];
}
const props = defineProps<Props>();
const { colors } = props;

const containerRef = ref<HTMLDivElement | HTMLDivElement[] | null>();
const copyColor = async (color: string) => {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    return navigator.clipboard.writeText(color);
  } else if (document.queryCommandSupported && document.queryCommandSupported("copy")) {
    const textarea = document.createElement("textarea");
    textarea.textContent = color;
    textarea.style.position = "fixed"; // 防止出现滚动条
    document.body.appendChild(textarea);
    textarea.select();
    try {
      LMessage.success("复制成功");
      return document.execCommand("copy");
    } catch (ex) {
      LMessage.error("复制失败");
      return false;
    } finally {
      document.body.removeChild(textarea);
    }
  } else {
    LMessage.error("不兼容的浏览器");
    return false;
  }
};

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
      :style="{ backgroundColor: color, color: `hsl(0, 0%, 90%)` }"
      @click="copyColor(color)"
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
