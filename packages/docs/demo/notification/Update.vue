<script setup lang="ts">
import { LNotification } from "lotus-plus";
const open = () => {
  LNotification({
    id: "loading",
    title: "Notification",
    content: "loading",
    showClose: true,
    duration: 0
  });
  setTimeout(() => {
    LNotification.success({
      id: "loading",
      title: "Notification",
      content: "loaded",
      showClose: true,
      duration: 1000
    });
  }, 3000);
};
</script>

<template>
  <div>
    <l-button @click="open">Update</l-button>
  </div>
</template>
