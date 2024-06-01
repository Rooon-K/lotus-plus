<script setup lang="ts">
import { LNotification } from "lotus-plus";
const open1 = () => {
  LNotification({
    title: "Notification",
    content: "This is a message with close button",
    showClose: true
  });
};
const open2 = () => {
  LNotification.success({
    title: "Notification",
    content: "This is a message that does not automatically close",
    showClose: true,
    duration: 0
  });
  LNotification.error({
    title: "Notification",
    content: "This is a message that does not automatically close",
    showClose: true,
    duration: 0
  });
};
</script>

<template>
  <div>
    <l-button @click="open1">Show Close</l-button>
    <l-button @click="open2"> Won't close automatically </l-button>
    <l-button @click="LNotification.closeAll()"> close all </l-button>
    <l-button @click="LNotification.closeAll('error')"> close all error </l-button>
  </div>
</template>
