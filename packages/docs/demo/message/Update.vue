<script lang="ts" setup>
import { LMessage } from "lotus-plus";

const open = () => {
  LMessage({
    id: "loading",
    message: "Loading...",
    type: "loading"
  });
  setTimeout(() => {
    LMessage({
      id: "loading",
      message: "loaded",
      type: "success"
    });
  }, 2000);
};
</script>
<template>
  <div>
    <l-button @click="open">Open Message</l-button>
  </div>
</template>
