<script setup lang="ts">
import { ref } from "vue";

const input = ref("");
</script>

<template>
  <l-space>
    <l-input placeholder="请输入内容" type="textarea" v-model="input" width="300px" />
  </l-space>
</template>
