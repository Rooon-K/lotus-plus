<script lang="ts" setup>
import { LMessage } from "lotus-plus";

const open = () => {
  LMessage({ message: "Congrats, this is a success message.", showClose: true });
  LMessage({ message: "Congrats, this is a success message.", showClose: true });
  LMessage({ message: "Congrats, this is a success message.", showClose: true });
};
</script>
<template>
  <div>
    <l-button @click="open">点击打开多条消息</l-button>
    <l-button @click="LMessage.closeAll()">点击关闭所有消息</l-button>
  </div>
</template>
