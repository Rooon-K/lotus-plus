import type { Component } from "vue";

export interface ColProps {
  span?: number;
  offset?: number;
  push?: number;
  pull?: number;
  tag?: string | Component;
}
