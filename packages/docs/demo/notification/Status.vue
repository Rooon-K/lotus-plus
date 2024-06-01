<script setup lang="ts">
import { LNotification } from "lotus-plus";
const open1 = () => {
  LNotification({ title: "Notification", content: "This is a notification!" });
};
const open2 = () => {
  LNotification({ title: "Notification", content: "This is a notification!", type: "success" });
};
const open3 = () => {
  LNotification.warning({ title: "Notification", content: "This is a notification!" });
};
const open4 = () => {
  LNotification.error({ title: "Notification", content: "This is a notification!" });
};
</script>

<template>
  <div>
    <l-button @click="open1">Info</l-button>
    <l-button @click="open2" status="success">Success</l-button>
    <l-button @click="open3" status="warning">Warning</l-button>
    <l-button @click="open4" status="danger">Error</l-button>
  </div>
</template>
