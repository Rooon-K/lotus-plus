<script setup lang="ts">
import { ref } from "vue";

const input = ref("");
</script>

<template>
  <l-space>
    <l-input
      type="password"
      placeholder="请输入内容"
      show-password
      allow-clear
      v-model="input"
      width="300px"
    />
  </l-space>
</template>
