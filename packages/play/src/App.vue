<script setup lang="ts">
import { LMessage, LButton } from "lotus-plus";
import "lotus-plus/dist/theme/Button.css"
import "lotus-plus/dist/theme/Message.css"
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
    <l-button @click="open">Loading</l-button>
  </div>
</template>
