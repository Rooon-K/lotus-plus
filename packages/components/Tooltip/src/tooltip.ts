import type { Directive } from "vue";
import type { ElType, TooltipOptions } from "./types";
import { delay } from "lodash-es";
import uniComponentId from "@lotus-plus/utils/uniComponentId";
import domHelper from "@lotus-plus/utils/domHelper";

const tooltipOptions: TooltipOptions = {
  content: "",
  delay: 100,
  disabled: false,
  position: "top",
  trigger: "hover"
};

let timer: number;
const methods = {
  onmouseenter(event: MouseEvent, el: ElType) {
    this.createTooltip(el);
  },
  onmouseleave(event: MouseEvent, el: ElType) {
    this.removeTooltip(el);
  },
  createTooltip(el: ElType) {
    const id = el.$_tooltipId;
    const isExist = document.getElementById(id);
    if (isExist) {
      clearTimeout(timer);
    } else {
      const tooltipArrow = domHelper.createElement("div", {
        class: `lotus-tooltip-arrow  lotus-tooltip--${el.$_position}`
      });
      const tooltipContent = domHelper.createElement("div", {
        class: "lotus-tooltip-content"
      });
      const tooltip = domHelper.createElement(
        "div",
        {
          class: "lotus-tooltip"
        },
        tooltipArrow,
        tooltipContent
      );
      tooltip.id = id;
      tooltipContent.innerText = el.$_content;
      document.body.appendChild(tooltip);
      const { top, left } = this.getOffset(el);
      tooltip.style.top = `${top}px`;
      tooltip.style.left = `${left}px`;
      this.bindEvents(el, tooltip);
    }
  },
  removeTooltip(el: ElType) {
    if (el) {
      const tooltip = this.getTooltipElement(el);

      if (tooltip) {
        timer = delay(() => {
          document.body.removeChild(tooltip);
          this.unbindEvents(el, tooltip);
        }, el.$_delay);
      }
    }
  },
  getTooltipElement(el: ElType) {
    return document.getElementById(el.$_tooltipId);
  },
  getOffset(el: ElType) {
    const { top, left } = el.getBoundingClientRect();
    const { width, height } = el.getBoundingClientRect();
    const { width: tooltipWidth, height: tooltipHeight } =
      this.getTooltipElement(el)!.getBoundingClientRect();

    let offsetTop = 0;
    let offsetLeft = 0;

    switch (el.$_position) {
      case "top":
        offsetTop = -tooltipHeight - 10;
        offsetLeft = -tooltipWidth / 2 + width / 2;
        break;
      case "bottom":
        offsetTop = height + 10;
        offsetLeft = -tooltipWidth / 2 + width / 2;
        break;
      case "left":
        offsetTop = -tooltipHeight / 2 + height / 2;
        offsetLeft = -tooltipWidth - 10;
        break;
      case "right":
        offsetTop = -tooltipHeight / 2 + height / 2;
        offsetLeft = width + 10;
        break;
    }

    return {
      top: top + offsetTop,
      left: left + offsetLeft
    };
  },
  bindEvents(el: ElType, tooltip: HTMLElement) {
    tooltip.addEventListener("mouseenter", () => {
      clearTimeout(timer);
    });
    tooltip.addEventListener("mouseleave", () => {
      this.removeTooltip(el);
    });
  },
  unbindEvents(el: ElType, tooltip: HTMLElement) {
    tooltip.removeEventListener("mouseenter", () => {
      clearTimeout(timer);
    });
    tooltip.removeEventListener("mouseleave", () => {
      this.removeTooltip(el);
    });
  }
};

export const vTooltip: Directive = {
  beforeMount(el: ElType, binding) {
    // 数据初始化
    const options = binding.value || {};
    const positions = ["top", "bottom", "left", "right"];
    const modifierPosition = Object.keys(binding.modifiers).filter((p) => positions.includes(p));
    el.$_tooltipId = uniComponentId("tooltip_id");
    el.$_content = options.content || tooltipOptions.content;
    el.$_delay = options.delay || tooltipOptions.delay;
    el.$_disabled = options.disabled || tooltipOptions.disabled;
    el.$_position = options.position || modifierPosition[0] || tooltipOptions.position;
    el.$_trigger = options.trigger || tooltipOptions.trigger;
  },
  mounted(el: ElType, binding) {
    el.addEventListener("mouseenter", (event: MouseEvent) => {
      methods.onmouseenter(event, el);
    });
    el.addEventListener("mouseleave", (event: MouseEvent) => {
      methods.onmouseleave(event, el);
    });
  },
  updated(el, binding) {},
  unmounted(el) {
    el.removeEventListener("mouseenter", (event: MouseEvent) => {
      methods.onmouseenter(event, el);
    });
    el.removeEventListener("mouseleave", (event: MouseEvent) => {
      methods.onmouseleave(event, el);
    });
  }
};
