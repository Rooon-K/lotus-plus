import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import LCol from "../src/Col.vue";
import LRow from "../../Row/src/Row.vue";

describe("LCol Component", () => {
  // 测试默认渲染
  it("should render correctly with default props", () => {
    const wrapper = mount(LCol);
    expect(wrapper.classes()).toContain("lotus-col");
    expect(wrapper.attributes("class")).toBeDefined();
  });

  // 测试 span 属性
  it("should apply span class correctly", () => {
    const span = 12;
    const wrapper = mount(LCol, {
      props: { span }
    });
    expect(wrapper.classes()).toContain(`lotus-col-${span}`);
  });

  // 测试 offset 属性
  it("should apply offset class correctly", () => {
    const offset = 2;
    const wrapper = mount(LCol, {
      props: { offset }
    });
    expect(wrapper.classes()).toContain(`lotus-col-offset-${offset}`);
  });

  // 测试 push 属性
  it("should apply push class correctly", () => {
    const push = 1;
    const wrapper = mount(LCol, {
      props: { push }
    });
    expect(wrapper.classes()).toContain(`lotus-col-push-${push}`);
  });

  // 测试 pull 属性
  it("should apply pull class correctly", async () => {
    const pull = 1;
    const wrapper = mount(LCol, {
      props: { pull }
    });
    await wrapper.vm.$nextTick(); // 等待计算属性更新
    expect(wrapper.classes()).toContain(`lotus-col-pull-${pull}`);
  });

  // 测试 gutter 属性通过上下文注入
  it("should apply padding styles based on gutter", async () => {
    const gutterValue = 20;
    const wrapper = mount(() => {
      return (
        <LRow gutter={gutterValue}>
          <LCol>
            <div>content</div>
          </LCol>
        </LRow>
      );
    });
    await wrapper.vm.$nextTick();
    const el = wrapper.find(".lotus-col").element as HTMLElement;
    const expectedPadding = `${gutterValue / 2}px`;
    expect(el.style.paddingLeft).toBe(expectedPadding);
    expect(el.style.paddingRight).toBe(expectedPadding);
  });

  // 测试自定义 tag
  it("should allow a custom tag to be used", () => {
    const Tag = "span";
    const wrapper = mount(LCol, {
      props: { tag: Tag }
    });
    expect(wrapper.element.tagName).toBe(Tag.toUpperCase());
  });
});
