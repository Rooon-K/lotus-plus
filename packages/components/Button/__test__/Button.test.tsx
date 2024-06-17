import { describe, it, expect, vi } from "vitest";
import { mount } from "@vue/test-utils";

import Button from "../src/Button.vue";
import ButtonGroup from "../src/ButtonGroup.vue";
import Icon from "../../Icon/src/Icon.vue";
import type { ButtonSize, ButtonStatus, ButtonType, HTMLType } from "../src/types";

describe("Button.vue", () => {
  // 测试组件是否根据props渲染正确的类
  it("should render the correct classes based on props", () => {
    const wrapper = mount(Button, {
      props: {
        type: "primary",
        size: "large",
        disabled: true,
        loading: false
      }
    });

    expect(wrapper.classes()).toContain("button-primary");
    expect(wrapper.classes()).toContain("button-large");
    expect(wrapper.classes()).toContain("is-disabled");
    expect(wrapper.classes()).not.toContain("is-loading");
  });

  // 测试点击事件
  it("emits click event when clicked", async () => {
    const wrapper = mount(Button, {
      props: {
        type: "primary"
      }
    });

    await wrapper.trigger("click");
    expect(wrapper.emitted("click")).toBeTruthy();
  });

  // 测试按钮状态
  it("button status", () => {
    const statuses = ["normal", "success", "warning", "danger"];
    statuses.forEach((status) => {
      const wrapper = mount(() => <Button status={status as ButtonStatus}>button</Button>);

      expect(wrapper.classes()).toContain(`button-${status}`);
    });
  });

  // 测试按钮大小
  it("button size", () => {
    const sizes = ["large", "default", "small"];
    sizes.forEach((size) => {
      const wrapper = mount(() => <Button size={size as ButtonSize}>button</Button>);

      expect(wrapper.classes()).toContain(`button-${size}`);
    });
  });

  // 测试按钮类型
  it("button type", () => {
    const types = ["primary", "secondary", "dashed", "outline", "text"];
    types.forEach((type) => {
      const wrapper = mount(() => <Button type={type as ButtonType}>button</Button>);

      expect(wrapper.classes()).toContain(`button-${type}`);
    });
  });

  // 测试按钮原生类型
  it("button tag", () => {
    const htmlTypes = ["button", "reset", "submit"];
    htmlTypes.forEach((htmlType) => {
      const wrapper = mount(() => <Button htmlType={htmlType as HTMLType} tag="button">button</Button>);

      expect(wrapper.attributes().type).toBe(htmlType);
    });
  });

  // 测试按钮图标
  it("icon button", () => {
    const wrapper = mount(Button, {
      props: {
        icon: "arrow-up"
      },
      slots: {
        default: "icon button"
      },
      global: {
        stubs: ["LIcon"]
      }
    });
    const iconElement = wrapper.findComponent(Icon);
    expect(iconElement.exists()).toBeTruthy();
    expect(iconElement.attributes("icon")).toBe("arrow-up");
  });

  // 测试禁用状态
  it("should be disabled when disabled prop is true", async () => {
    const wrapper = mount(Button, {
      props: {
        disabled: true
      }
    });

    await wrapper.trigger("click");
    expect(wrapper.classes()).toContain("is-disabled");
    expect(wrapper.emitted("click")).toBeUndefined();
  });

  // 测试加载状态
  it("should show loading icon when loading prop is true", async () => {
    const wrapper = mount(Button, {
      props: {
        loading: true
      }
    });

    await wrapper.trigger("click");
    expect(wrapper.find(".loading-icon").exists()).toBe(true);
    expect(wrapper.emitted("click")).toBeUndefined();
  });

  // 测试节流功能
  it("should throttle click events when useThrottle is true", async () => {
    const throttleMock = vi.fn();
    const wrapper = mount(() => (
      <Button
        onClick={throttleMock}
        {...{
          useThrottle: true,
          throttleDuration: 400
        }}
      />
    ));

    // 快速连续点击
    await wrapper.get("button").trigger("click");
    await wrapper.get("button").trigger("click");

    // 由于节流，handleBtnClick 应该只被调用一次
    expect(throttleMock).toHaveBeenCalledTimes(1);
  });
});

describe("ButtonGroup.vue", () => {
  // 测试按钮组上下文
  it("button group size", () => {
    const sizes = ["large", "default", "small"];
    sizes.forEach((size) => {
      const wrapper = mount(() => (
        <ButtonGroup size={size as any}>
          <Button>button 1</Button>
          <Button>button 2</Button>
        </ButtonGroup>
      ));

      const buttonWrapper = wrapper.findComponent(Button);
      expect(buttonWrapper.classes()).toContain(`button-${size}`);
    });
  });

  // 测试按钮组类型
  it("button group type", () => {
    const types = ["primary", "success", "warning", "danger", "info"];
    types.forEach((type) => {
      const wrapper = mount(() => (
        <ButtonGroup type={type as any}>
          <Button>button 1</Button>
          <Button>button 2</Button>
        </ButtonGroup>
      ));

      const buttonWrapper = wrapper.findComponent(Button);
      expect(buttonWrapper.classes()).toContain(`button-${type}`);
    });
  });

  // 测试按钮组状态
  it("button group status", () => {
    const statuses = ["normal", "success", "warning", "danger"];
    statuses.forEach((status) => {
      const wrapper = mount(() => (
        <ButtonGroup status={status as ButtonStatus}>
          <Button>button 1</Button>
          <Button>button 2</Button>
        </ButtonGroup>
      ));

      const buttonWrapper = wrapper.findComponent(Button);
      expect(buttonWrapper.classes()).toContain(`button-${status}`);
    });
  });

  // 测试按钮组禁用状态
  it("button group disabled", () => {
    const wrapper = mount(() => (
      <ButtonGroup disabled>
        <Button>button 1</Button>
        <Button>button 2</Button>
      </ButtonGroup>
    ));

    const buttonWrapper = wrapper.findComponent(Button);
    expect(buttonWrapper.classes()).toContain(`is-disabled`);
  });
});
