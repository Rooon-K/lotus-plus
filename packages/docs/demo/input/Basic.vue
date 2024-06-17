<script setup lang="ts">
import { ref } from "vue";

const input = ref("");
</script>

<template>
  <l-space>
    <l-input placeholder="请输入内容" allow-clear v-model="input" width="300px" />
    <l-input
      placeholder="请输入内容"
      default-value="默认值"
      allow-clear
      v-model="input"
      width="300px"
    />
  </l-space>
</template>
