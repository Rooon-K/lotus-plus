<script setup lang="ts"></script>

<template>
  <div class="container">
    <l-button status="primary" v-tooltip="{ content: 'This is a two-line tooltip content.This is a two-line tooltip content.', position: 'top' }">top</l-button>
    <l-button status="primary" v-tooltip="{ content: 'This is a two-line tooltip content.This is a two-line tooltip content.', position: 'bottom' }">bottom</l-button>
    <l-button status="primary" v-tooltip.left="{ content: 'This is a two-line tooltip content.This is a two-line tooltip content.' }">left</l-button>
    <l-button status="primary" v-tooltip.right="{ content: 'This is a two-line tooltip content.This is a two-line tooltip content.' }">right</l-button>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
</style>
