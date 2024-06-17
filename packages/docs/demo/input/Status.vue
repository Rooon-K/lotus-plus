<script setup lang="ts">
import { ref } from "vue";

const input = ref("");
</script>

<template>
  <l-space wrap>
    <l-input placeholder="请输入内容" v-model="input" width="300px" success />
    <l-input placeholder="请输入内容" v-model="input" width="300px" status="success" />
    <l-input placeholder="请输入内容" v-model="input" width="300px" warning />
    <l-input placeholder="请输入内容" v-model="input" width="300px" status="warning" />
    <l-input placeholder="请输入内容" v-model="input" width="300px" danger />
    <l-input placeholder="请输入内容" v-model="input" width="300px" status="danger" />
    <l-input placeholder="禁用" v-model="input" width="300px" disabled />
  </l-space>
</template>
