import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import LRow from "../src/Row.vue";

describe("LRow Component", () => {
  // 测试默认渲染
  it("should render correctly with default props", () => {
    const wrapper = mount(LRow);
    expect(wrapper.classes()).toContain("lotus-row");
  });

  // 测试 gutter 属性
  it("should apply margin styles based on gutter", () => {
    const gutter = 20;
    const wrapper = mount(LRow, {
      props: { gutter }
    });
    const el = wrapper.element as HTMLElement;
    const expectedMargin = `-${gutter / 2}px`;
    expect(el.style.marginLeft).toBe(expectedMargin);
    expect(el.style.marginRight).toBe(expectedMargin);
  });

  // 测试 justify 属性
  it.each([
    ["start", "is-justify-start"],
    ["end", "is-justify-end"],
    ["center", "is-justify-center"],
    ["space-around", "is-justify-space-around"],
    ["space-between", "is-justify-space-between"],
    ["space-evenly", "is-justify-space-evenly"]
  ])('should apply justify class "%s" correctly', (justify: any, className) => {
    const wrapper = mount(LRow, {
      props: { justify }
    });
    expect(wrapper.classes()).toContain(className);
  });

  // 测试 align 属性
  it.each([
    ["top", "is-align-top"],
    ["middle", "is-align-middle"],
    ["bottom", "is-align-bottom"]
  ])('should apply align class "%s" correctly', (align: any, className) => {
    const wrapper = mount(LRow, {
      props: { align }
    });
    expect(wrapper.classes()).toContain(className);
  });

  // 测试自定义 tag
  it("should allow a custom tag to be used", () => {
    const Tag = "span";
    const wrapper = mount(LRow, {
      props: { tag: Tag }
    });
    expect(wrapper.element.tagName).toBe(Tag.toUpperCase());
  });
});
