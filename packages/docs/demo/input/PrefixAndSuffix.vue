<script setup lang="ts">
import { ref } from "vue";

const input = ref("");
</script>

<template>
  <l-space>
    <l-input placeholder="请输入内容" allow-clear v-model="input" width="300px">
      <template #prefix><l-icon icon="user" /></template>
    </l-input>
    <l-input placeholder="请输入内容" allow-clear v-model="input" width="300px">
      <template #suffix><l-icon icon="info-circle" /></template>
    </l-input>
  </l-space>
</template>
