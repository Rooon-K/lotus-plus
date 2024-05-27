<script lang="ts" setup>
import { h } from "vue";
import { LMessage } from "lotus-plus";

const open = () => {
  LMessage("Congrats, this is a success message.");
};

const openVn = () => {
  LMessage({
    message: h("p", { style: "line-height: 1; font-size: 14px" }, [
      h("span", null, "Message can be "),
      h("i", { style: "color: teal" }, "VNode")
    ])
  });
};
</script>
<template>
  <div>
    <l-button @click="open">Show message</l-button>
    <l-button @click="openVn">VNode</l-button>
  </div>
</template>
