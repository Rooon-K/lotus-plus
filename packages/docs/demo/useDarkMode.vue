<script setup lang="ts">
import { useDarkMode } from "lotus-plus";
const changeTheme = () => {
  useDarkMode();
};
</script>

<template>
  <div>
    <l-button @click="changeTheme">light/dark mode</l-button>
  </div>
</template>