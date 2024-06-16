import type { Ref, CSSProperties } from "vue";

export type InputSize = "small" | "medium" | "large";

export interface InputProps {
  id?: string;
  modelValue: string | number;
  type?: string;
  defaultValue?: string;
  size?: InputSize;
  readonly?: boolean;
  disabled?: boolean;
  placeholder?: string;
  error?: boolean;
  success?: boolean;
  warning?: boolean;
  errorMessage?: string;
  clearable?: boolean;
  showPassword?: boolean;
  autofocus?: boolean;
  autocomplete?: string;
  form?: string;
  max?: number;
  min?: number;
  step?: number;
  name?: string;
  width?: string;
  style?: CSSProperties;
}

export interface InputEmits {
  (e: "update:modelValue", value: string | number): void;
  (e: "input", value: string | number): void;
  (e: "change", value: string | number): void;
  (e: "focus", value: FocusEvent): void;
  (e: "blur", value: FocusEvent): void;
  (e: "clear"): void;
}

export interface InputInstance {
  ref: Ref<HTMLInputElement | HTMLTextAreaElement | void>;
  focus(): Promise<void>;
  blur(): void;
  select(): void;
  clear(): void;
}
