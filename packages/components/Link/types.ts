import type { Component } from "vue";

export type LinkType = "primary" | "success" | "warning" | "danger" | "info" | "default";
export type LinkTarget = "_blank" | "_self" | "_parent" | "_top";

export interface LinkProps {
  type: LinkType;
  underline: boolean;
  disabled: boolean;
  href: string;
  target: LinkTarget;
  icon: string | Component;
}

export interface LinkEmits {
  (e: "click", value: MouseEvent): void;
}