<script setup>
import { ref } from "vue";
const align = ref("start");
</script>

<template>
  <div>
    <div style="margin-bottom: 10px;">
      <l-button-group>
        <l-button @click="align = 'start'">start</l-button>
        <l-button @click="align = 'center'">center</l-button>
        <l-button @click="align = 'end'">end</l-button>
        <l-button @click="align = 'baseline'">baseline</l-button>
      </l-button-group>
    </div>
    <l-space :align="align">
      <l-button>Button 1</l-button>
      <div style="height: 100px; background-color: gray">Space</div>
    </l-space>
  </div>
</template>
