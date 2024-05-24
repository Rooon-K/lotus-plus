<script setup lang="ts">
import type { CollapseEmits, CollapseItemName, CollapseProps } from "./types";
import { COLLAPSE_CTX_KEY } from "./constance";
import { provide, ref, watch } from "vue";

defineOptions({
  name: "LCollapse"
});
const props = defineProps<CollapseProps>();
const emits = defineEmits<CollapseEmits>();
const activeNames = ref(props.modelValue);

if (props.accordion && activeNames.value.length > 1) {
  console.warn("accordion mode should only have one active item");
}

const handleItemClick = (item: CollapseItemName) => {
  let _activeNames = [...activeNames.value];
  if (props.accordion) {
    _activeNames = [_activeNames[0] === item ? "" : item];
    updateActiveNames(_activeNames);
    return;
  }

  const index = _activeNames.indexOf(item);
  if (index > -1) {
    _activeNames.splice(index, 1);
  } else {
    _activeNames.push(item);
  }
  updateActiveNames(_activeNames);
};

const updateActiveNames = (newNames: CollapseItemName[]) => {
  activeNames.value = newNames;
  emits("update:modelValue", newNames);
  emits("change", newNames);
};

watch(
  () => props.modelValue,
  (newNames) => updateActiveNames(newNames)
);

provide(COLLAPSE_CTX_KEY, {
  activeNames,
  handleItemClick
});
</script>

<template>
  <div class="lotus-collapse">
    <slot></slot>
  </div>
</template>
