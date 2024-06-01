<script setup lang="ts">
import { LNotification } from "lotus-plus";
const open1 = () => {
  LNotification({ title: "Notification", content: "This is a notification!" });
};
const open2 = () => {
  LNotification.info({ title: "Notification", content: "This is a notification!" });
};
</script>

<template>
  <div>
    <l-button @click="open1">Open Notification</l-button>
    <l-button @click="open2">Open Notification</l-button>
    <l-button @click="$notify({ title: 'Notification', content: 'This is a notification!' })"
      >Open Notification</l-button
    >
  </div>
</template>
