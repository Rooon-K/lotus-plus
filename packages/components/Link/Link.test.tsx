import { describe, it, expect, vi } from "vitest";
import { mount } from "@vue/test-utils";
import Link from "./Link.vue";
import type { LinkStatus } from "./types";
import Icon from "../Icon/Icon.vue";

describe("Link Component", () => {
  it("should render correctly with default slot", () => {
    const wrapper = mount(Link, {
      slots: {
        default: "Link Text"
      }
    });
    expect(wrapper.text()).toContain("Link Text");
  });

  it("should apply different status classes", () => {
    const statuses: LinkStatus[] = ["normal", "warning", "success", "danger"];
    statuses.forEach((status: LinkStatus) => {
      const wrapper = mount(Link, {
        props: { status },
        slots: {
          default: "Link Text"
        }
      });
      expect(wrapper.classes()).toContain(`lotus-link--${status}`);
    });
  });

  it("should be disabled", () => {
    const wrapper = mount(Link, {
      props: { disabled: true },
      slots: {
        default: "Link Text"
      }
    });
    expect(wrapper.classes()).toContain(`lotus-link--disabled`);
  });

  it("should be in loading state", () => {
    const wrapper = mount(Link, {
      props: { loading: true },
      slots: {
        default: "Link Text"
      }
    });
    expect(wrapper.classes()).toContain("lotus-link--loading");
  });

  it("should emit click event", () => {
    const handleClick = vi.fn();
    const wrapper = mount(Link, {
      listeners: {
        click: handleClick
      },
      slots: {
        default: "Clickable Link"
      }
    });
    wrapper.trigger("click");
    expect(wrapper.emitted().click).toHaveLength(1);
  });

  // 测试 icon 和 loading-icon 的渲染
  it("should render icon correctly", () => {
    const wrapper = mount(Link, {
      props: { icon: "edit" },
      slots: {
        default: "Link Text"
      }
    });
    const iconElement = wrapper.findComponent(Icon);
    expect(iconElement.exists()).toBeTruthy();
  });

  it("should render loading icon when loading is true", () => {
    const wrapper = mount(Link, {
      props: { loading: true },
      slots: {
        default: "Link Text"
      }
    });
    const iconElement = wrapper.findComponent(Icon);

    wrapper.trigger("click");
    expect(wrapper.emitted()).not.toHaveProperty("click");

    expect(iconElement.exists()).toBeTruthy();
    expect(iconElement.classes()).toContain("loading-icon");
  });
});
