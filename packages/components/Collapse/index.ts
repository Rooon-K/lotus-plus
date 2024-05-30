import Collapse from "./src/Collapse.vue";
import CollapseItem from "./src/CollapseItem.vue";
import { withInstall } from "@lotus-plus/utils";

export const LCollapse = withInstall(Collapse);
export const LCollapseItem = withInstall(CollapseItem);

export * from "./src/types";
