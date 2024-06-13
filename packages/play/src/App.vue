<script setup lang="ts">
import { ref } from "vue";

const password = ref("");
</script>

<template>
  <div>
    <l-input
      type="password"
      placeholder="sqsq"
      clearable
      v-model="password"
      style="margin-top: 20px;"
      width="300px"
    />
  </div>
</template>
