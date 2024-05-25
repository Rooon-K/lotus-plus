<script setup lang="ts">
import { ref } from "vue";

const loading1 = ref(false);
const loading2 = ref(false);

const handleClick1 = () => {
  loading1.value = true;
  setTimeout(() => {
    loading1.value = false;
  }, 3000);
};
const handleClick2 = () => {
  loading2.value = true;
  setTimeout(() => {
    loading2.value = false;
  }, 3000);
};
</script>

<template>
  <div>
    <l-link loading>Link</l-link>
    <l-link :loading="loading1" @click="handleClick1">Link</l-link>
    <l-link :loading="loading2" @click="handleClick2" icon="edit">Link</l-link>
  </div>
</template>
