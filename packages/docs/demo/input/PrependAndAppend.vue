<script setup lang="ts">
import { ref } from "vue";

const input = ref("");
</script>

<template>
  <l-space>
    <l-input placeholder="请输入内容" allow-clear v-model="input" width="300px">
      <template #prepend>+86</template>
    </l-input>
    <l-input placeholder="请输入内容" allow-clear v-model="input" width="300px">
      <template #append>RMB</template>
    </l-input>
  </l-space>
</template>
