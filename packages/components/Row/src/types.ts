import type { Component } from "vue";

export interface RowProps {
  gutter?: number;
  justify?: "start" | "end" | "center" | "space-around" | "space-between" | "space-evenly";
  align?: "top" | "middle" | "bottom";
  tag?: string | Component;
}
