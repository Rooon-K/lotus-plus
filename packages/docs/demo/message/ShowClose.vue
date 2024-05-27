<script lang="ts" setup>
import { LMessage } from "lotus-plus";

const open = () => {
  LMessage({ message: "Congrats, this is a success message.", showClose: true });
};
</script>
<template>
  <div>
    <l-button @click="open">Show message</l-button>
  </div>
</template>
