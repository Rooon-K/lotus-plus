import type { Component } from "vue";

export type ButtonType = "primary" | "secondary" | "dashed" | "outline" | "text";
export type HTMLType = "button" | "reset" | "submit";
export type ButtonSize = "large" | "default" | "small";
export type ButtonStatus = "normal" | "success" | "warning" | "danger";
export type ButtonShape = "square" | "circle" | "round";

export interface ButtonProps {
  size?: ButtonSize; // 按钮大小
  type?: ButtonType; // 按钮类型
  htmlType?: HTMLType; // 原生类型
  status?: ButtonStatus; // 按钮状态
  shape?: ButtonShape; // 按钮形状
  icon?: string; // 图标
  tag?: string | Component; // 渲染按钮的 HTML 标签
  disabled?: boolean; // 是否禁用
  loading?: boolean; // 是否加载中
  useThrottle?: boolean; // 是否开启节流模式
  throttleDuration?: number; // 节流模式间隔
  loadingIcon?: string; // icon图标
  autofocus?: boolean; // 是否自动聚焦
}

export interface ButtonEmits {
  (e: "click", value: MouseEvent): void;
}

export interface ButtonInstance {
  ref: HTMLButtonElement;
}
