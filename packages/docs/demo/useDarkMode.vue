<script setup lang="ts">
import { useDarkMode } from "lotus-plus";
const { currentMode, changeMode } = useDarkMode();
const changeTheme = () => {
  console.log(currentMode()); // 获取当前主题模式
  changeMode(); // 切换主题模式
};
</script>

<template>
  <div>
    <l-button @click="changeTheme">light/dark mode</l-button>
  </div>
</template>
