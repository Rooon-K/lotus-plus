<script setup lang="ts">
import { ref } from "vue";

const input = ref("");
</script>

<template>
  <l-space wrap>
    <l-input placeholder="请输入内容" size="small" v-model="input" width="300px" />
    <l-input placeholder="请输入内容" size="medium" v-model="input" width="300px" />
    <l-input placeholder="请输入内容" size="large" v-model="input" width="300px" />
  </l-space>
</template>
