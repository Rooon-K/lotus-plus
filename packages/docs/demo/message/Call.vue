<script lang="ts" setup>
import { LMessage } from "lotus-plus";
const open1 = () => {
  LMessage({ message: "Congrats, this is a success message.", type: "success" });
};
const open2 = () => {
  LMessage.success("Congrats, this is a success message.");
};
</script>
<template>
  <div>
    <l-button @click="open1">插件式调用</l-button>
    <l-button @click="open2">函数式调用</l-button>
    <l-button @click="() => this.$message.success('Congrats, this is a success message.')"
      >全局方法调用</l-button
    >
  </div>
</template>
