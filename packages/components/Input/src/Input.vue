<script setup lang="ts">
import { computed, nextTick, onMounted, ref, shallowRef, useAttrs, watch } from "vue";
import type { InputEmits, InputInstance, InputProps } from "./types";
import { LIcon } from "../../Icon";
import { each, noop } from "lodash-es";
import { useFocusController } from "@lotus-plus/hooks";

defineOptions({
  name: "LInput",
  inheritAttrs: false
});

const props = withDefaults(defineProps<InputProps>(), {
  type: "text"
});
const emits = defineEmits<InputEmits>();

const inputRef = shallowRef<HTMLInputElement>();
const textareaRef = shallowRef<HTMLTextAreaElement>();

const passwordVisible = ref(false);
const innerValue = ref<any>(props.modelValue);

const showClear = computed(() => {
  console.log(isHovered);

  return props.clearable && !!innerValue.value && !props.disabled && isHovered.value;
});
const showPasswordArea = computed(() => {
  return props.type === "password" && props.showPassword && !props.disabled && !!innerValue.value;
});

const _ref = computed(() => inputRef.value || textareaRef.value);
const attrs = useAttrs();

const clear: InputInstance["clear"] = () => {
  innerValue.value = "";
  each(["update:modelValue", "input", "change"], (e) => emits(e as any, ""));
  emits("clear");
};
const focus: InputInstance["focus"] = async () => {
  await nextTick();
  _ref.value?.focus();
};
const blur: InputInstance["blur"] = async () => {
  await nextTick();
  _ref.value?.blur();
};
const select: InputInstance["select"] = () => {
  _ref.value?.select();
};

const handleInput = () => {
  emits("update:modelValue", innerValue.value);
  emits("input", innerValue.value);
};

const handleChange = () => {
  emits("change", innerValue.value);
};

const togglePasswordVisible = () => {
  passwordVisible.value = !passwordVisible.value;
};

const { wrapperRef, isFocused, isHovered, handleFocus, handleBlur } = useFocusController(_ref);

const inputSty = computed(() => {
  return {
    width: props.width,
    ...props.style
  };
});

watch(
  () => props.modelValue,
  (newValue) => {
    innerValue.value = newValue;
  }
);

onMounted(() => {
  innerValue.value = props.defaultValue;
});

defineExpose<InputInstance>({
  ref: _ref,
  clear,
  focus,
  blur,
  select
});
</script>

<template>
  <div
    class="lotus-input"
    :class="{
      [`lotus-input--${size}`]: size,
      [`lotus-input--${type}`]: type,
      'is-disabled': disabled,
      'is-focus': isFocused,
      'is-prepend': $slots.prepend,
      'is-append': $slots.append,
      'is-prefix': $slots.prefix,
      'is-suffix': $slots.suffix,
      'is-error': error || props.status === 'error',
      'is-success': success || props.status ==='success',
      'is-warning': warning || props.status === 'warning',
    }"
    :style="inputSty"
  >
    <template v-if="type !== 'textarea'">
      <div v-if="$slots.prepend" class="lotus-input__prepend">
        <slot name="prepend"></slot>
      </div>
      <div class="lotus-input__wrapper" ref="wrapperRef">
        <span v-if="$slots.prefix" class="lotus-input__prefix">
          <slot name="prefix"></slot>
        </span>
        <input
          class="lotus-input__inner"
          ref="inputRef"
          :type="showPassword ? (passwordVisible ? 'text' : 'password') : type"
          :disabled="disabled"
          :readonly="readonly"
          :autocomplete="autocomplete"
          :placeholder="placeholder"
          :autofocus="autofocus"
          :form="form"
          v-model="innerValue"
          v-bind="attrs"
          @input="handleInput"
          @change="handleChange"
          @focus="handleFocus"
          @blur="handleBlur"
        />
        <span v-if="$slots.suffix || showClear || showPasswordArea" class="lotus-input__suffix">
          <slot name="suffix"></slot>
          <l-icon
            icon="circle-xmark"
            class="lotus-input__clear"
            v-if="showClear"
            @click="clear"
            @mousedown.prevent="noop"
          />
          <l-icon
            icon="eye"
            class="lotus-input__password"
            v-if="showPasswordArea && passwordVisible"
            @click="togglePasswordVisible"
          />
          <l-icon
            icon="eye-slash"
            class="lotus-input__password"
            v-if="showPasswordArea && !passwordVisible"
            @click="togglePasswordVisible"
          />
        </span>
      </div>
      <div v-if="$slots.append" class="lotus-input__append">
        <slot name="append"></slot>
      </div>
    </template>
    <template v-else>
      <textarea
        class="lotus-textarea__wrapper"
        ref="textareaRef"
        :disabled="disabled"
        :readonly="readonly"
        :placeholder="placeholder"
        :autofocus="autofocus"
        :form="form"
        v-model="innerValue"
        v-bind="attrs"
        @input="handleInput"
        @change="handleChange"
        @focus="handleFocus"
        @blur="handleBlur"
      />
    </template>
  </div>
</template>

<style scoped>
@import "../style/index.css";
</style>
