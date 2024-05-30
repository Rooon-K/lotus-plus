import type { Component } from "vue";

export type LinkStatus = "primary" | "success" | "warning" | "danger" | "normal";
export type LinkTarget = "_blank" | "_self" | "_parent" | "_top";

export interface LinkProps {
  status?: LinkStatus;
  underline?: boolean;
  disabled?: boolean;
  loading?: boolean;
  href?: string;
  target?: LinkTarget;
  icon?: string | Component;
}

export interface LinkEmits {
  (e: "click", value: MouseEvent): void;
}
