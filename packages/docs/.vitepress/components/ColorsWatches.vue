<script setup lang="ts">
interface Props {
  colors: string[];
  fontColor?: string;
}
const props = withDefaults(defineProps<Props>(), {
  fontColor: "#fff"
});
const { colors, fontColor } = props;

const copyColor = async (color: string) => {
  try {
    await navigator.clipboard.writeText(color);
    // TODO: show success message
  } catch (error) {
    console.error(error);
  }
};
</script>

<template>
  <div class="color-container">
    <div
      v-for="color in colors"
      :key="color"
      class="color-swatch"
      :style="{ backgroundColor: color, color: fontColor }"
      @click="copyColor(color)"
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
