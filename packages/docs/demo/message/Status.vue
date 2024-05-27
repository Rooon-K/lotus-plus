<script lang="ts" setup>
import { LMessage } from "lotus-plus";

const open1 = () => {
  LMessage({
    message: "This is a message.",
    type: "info"
  });
};
const open2 = () => {
  LMessage({
    message: "Congrats, this is a success message.",
    type: "success"
  });
};
const open3 = () => {
  LMessage({
    message: "Warning, this is a warning message.",
    type: "warning"
  });
};
const open4 = () => {
  LMessage({
    message: "Oops, this is a error message.",
    type: "error"
  });
};
const open5 = () => {
  LMessage({
    message: "Loading...",
    type: "loading"
  });
};
</script>
<template>
  <div>
    <l-button @click="open1">Info</l-button>
    <l-button @click="open2">Success</l-button>
    <l-button @click="open3">Warning</l-button>
    <l-button @click="open4">Error</l-button>
    <l-button @click="open5">Loading</l-button>
  </div>
</template>
