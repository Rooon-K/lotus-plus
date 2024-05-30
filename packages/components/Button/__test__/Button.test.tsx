import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";

import Button from "./Button.vue";

describe("Button.vue", () => {
  // Props: type
  it("has the correct type class when type prop is set", () => {
    const types = ["primary", "dashed", "outline", "text"];
    types.forEach((type) => {
      const wrapper = mount(Button, {
        props: { type: type as any },
      });
      expect(wrapper.classes()).toContain(`button-${type}`);
    });
  });

  // Props: size
  it("has the correct size class when size prop is set", () => {
    const sizes = ["large", "default", "small"];
    sizes.forEach((size) => {
      const wrapper = mount(Button, {
        props: { size: size as any },
      });
      expect(wrapper.classes()).toContain(`button-${size}`);
    });
  });

  // Props: square, round, circle
  it.each([
    ["disabled", "is-disabled"],
    ["loading", "is-loading"],
  ])("has the correct class when prop %s is set to true", (prop, className) => {
    const wrapper = mount(Button, {
      props: { [prop]: true },

      // global: {
      //   stubs: ["ErIcon"],
      // },
    });
    expect(wrapper.classes()).toContain(className);
  });

  it("has the correct html type attribute when html-type prop is set", () => {
    const wrapper = mount(Button, {
      props: { htmlType: "submit" },
    });
    expect(wrapper.element.tagName).toBe("BUTTON");
    expect((wrapper.element as any).type).toBe("submit");
  });

  // Props: tag
  it("should renders the custom tag when tag prop is set", () => {
    const wrapper = mount(Button, {
      props: { tag: "a" },
    });
    expect(wrapper.element.tagName.toLowerCase()).toBe("a");
  });

  // Events: click
  it("should emits a click event when the button is clicked", async () => {
    const wrapper = mount(Button, {});
    await wrapper.trigger("click");
    expect(wrapper.emitted().click).toHaveLength(1);
  });
});
