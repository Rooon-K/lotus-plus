<script setup lang="ts">
import { LNotification } from "lotus-plus";
const open1 = () => {
  LNotification({
    title: "Notification",
    content: "This is a notification!",
    position: "top-right"
  });
};
const open2 = () => {
  LNotification({
    title: "Notification",
    content: "This is a notification!",
    position: "top-left"
  });
};
const open3 = () => {
  LNotification({
    title: "Notification",
    content: "This is a notification!",
    position: "bottom-right"
  });
};
const open4 = () => {
  LNotification({
    title: "Notification",
    content: "This is a notification!",
    position: "bottom-left"
  });
};
</script>

<template>
  <div>
    <l-button @click="open1">top-right</l-button>
    <l-button @click="open2">top-left</l-button>
    <l-button @click="open3">bottom-right</l-button>
    <l-button @click="open4">bottom-left</l-button>
  </div>
</template>
