<script lang="ts" setup>
import { LMessage } from "lotus-plus"

let index = 0;
const open = () => {
  LMessage({ id: "aaa", message: `Message ${++index}` });
};
</script>
<template>
  <div>
    <l-button @click="open">Show message</l-button>
  </div>
</template>
