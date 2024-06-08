<script setup lang="ts">
import { LMessage } from "lotus-plus";
import { ref } from "vue";

interface Props {
  colors: string[];
  fontColor?: string;
}
const props = withDefaults(defineProps<Props>(), {
  fontColor: "#fff"
});
const { colors, fontColor } = props;

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
function setTextColorBasedOnBackground(element) {
  const backgroundColor = window.getComputedStyle(element).backgroundColor;
  const regex = /rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?\)/;
  const matches = backgroundColor.match(regex);

  if (!matches) {
    throw new Error("无效的颜色格式");
  }

  const r = parseInt(matches[1]);
  const g = parseInt(matches[2]);
  const b = parseInt(matches[3]);
  const a = matches[4] ? parseFloat(matches[4]) : 1;

  const brightness = Math.round((0.299 * r + 0.587 * g + 0.114 * b) / a);

  element.style.setProperty("color", brightness > 128 ? "black" : "white");
}

setTimeout(() => {
  (containerRef.value as unknown as HTMLDivElement[]).forEach((el) => {
    setTextColorBasedOnBackground(el);
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
