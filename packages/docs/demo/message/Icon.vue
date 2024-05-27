<script lang="ts" setup>
import { LMessage } from "lotus-plus";

const open1 = () => {
  LMessage({
    message: "This is a message.",
    type: "info",
    icon: "edit"
  });
};
const open2 = () => {
  LMessage({
    message: "Loading...",
    type: "loading",
    icon: "star"
  });
};
</script>
<template>
  <div>
    <l-button @click="open1">Info</l-button>
    <l-button @click="open2">Loading</l-button>
  </div>
</template>
