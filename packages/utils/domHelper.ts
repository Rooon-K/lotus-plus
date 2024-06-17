import { isArray, isElement } from "lodash-es";
import type { VNode } from "vue";
import { isArrayChildren, isComponent, isSlotsChildren, isTextChildren } from "./vueHelper";

export default {
  createElement(type: any, attributes = {}, ...children: any[]) {
    const el: HTMLElement = document.createElement(type);
    this.setAttributes(el, attributes);

    el.append(...children);

    return el as HTMLElement;
  },
  setAttributes(el: HTMLElement, attributes: any) {
    if (attributes) {
      for (const key in attributes) {
        if (attributes.hasOwnProperty(key)) {
          const value = attributes[key];
          if (value !== undefined) {
            el.setAttribute(key, value);
          }
        }
      }
    }
  },
  getAllElements(children: VNode[] | undefined, includeText = false) {
    const results: VNode[] = [];
    for (const item of children ?? []) {
      if (
        isElement(item) ||
        isComponent(item) ||
        (includeText && isTextChildren(item, item.children))
      ) {
        results.push(item);
      } else if (isArrayChildren(item, item.children)) {
        results.push(...this.getAllElements(item.children, includeText));
      } else if (isSlotsChildren(item, item.children)) {
        results.push(...this.getAllElements(item.children?.default?.(), includeText));
      } else if (isArray(item)) {
        results.push(...this.getAllElements(item, includeText));
      }
    }
    return results;
  }
};
