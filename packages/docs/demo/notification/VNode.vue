<script setup lang="ts">
import { h } from "vue";
import { LNotification } from "lotus-plus";
const open = () => {
  LNotification({
    title: h("p", { style: "font-size: 16px" }, [
      h("span", null, "Title can be "),
      h("i", { style: "color: teal" }, "VNode")
    ]),
    content: h("p", { style: "line-height: 1; font-size: 14px" }, [
      h("span", null, "Content can be "),
      h("i", { style: "color: teal" }, "VNode")
    ]),
    duration: 0
  });
};
</script>

<template>
  <div>
    <l-button @click="open">Open Notification</l-button>
  </div>
</template>
