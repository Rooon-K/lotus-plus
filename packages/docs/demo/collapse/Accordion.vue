<script setup lang="ts">
import type { CollapseItemName } from "lotus-plus";
import { ref } from "vue";

const activeNames = ref(["1"]);

const handleClick = (names: CollapseItemName[]) => {
  console.log(names);
};
</script>

<template>
  <div>
    <l-collapse v-model="activeNames" @change="handleClick" accordion>
      <l-collapse-item title="Consistency" name="1">
        <div>
          Consistent with real life: in line with the process and logic of real life, and comply
          with languages and habits that the users are used to;
        </div>
        <div>
          Consistent within interface: all elements should be consistent, such as: design style,
          icons and texts, position of elements, etc.
        </div>
      </l-collapse-item>
      <l-collapse-item title="Feedback" name="2">
        <div>
          Operation feedback: enable the users to clearly perceive their operations by style updates
          and interactive effects;
        </div>
        <div>
          Visual feedback: reflect current state by updating or rearranging elements of the page.
        </div>
      </l-collapse-item>
    </l-collapse>
  </div>
</template>
