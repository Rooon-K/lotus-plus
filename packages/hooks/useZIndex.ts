import { computed, ref } from "vue";

const zIndex = ref(0);
export default function useZIndex(initialValue = 2000) {
  const _initialValue = ref(initialValue);
  const currentZIndex = computed(() => zIndex.value + _initialValue.value);

  const nextZIndex = () => {
    zIndex.value++;
    return currentZIndex.value;
  };

  return {
    initialValue: _initialValue,
    currentZIndex,
    nextZIndex
  };
}
