import type { App } from "vue";
import { vTooltip } from "./src/tooltip";
import "./style/index.css";

export const LTooltip = {
  name: "LTooltip",
  install(app: App) {
    app.directive("tooltip", vTooltip);
  },
  directive: vTooltip
};

export default LTooltip;

export { vTooltip, vTooltip as LTooltipDirective };

export * from "./src/types";
