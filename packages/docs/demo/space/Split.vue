<script setup lang="ts">
import { ref } from "vue";

const password = ref("");
</script>

<template>
  <l-space>
    <template #split>|</template>
    <l-button>1</l-button>
    <l-button>2</l-button>
    <l-button>3</l-button>
    <l-button>4</l-button>
    <l-button>5</l-button>
  </l-space>
</template>
