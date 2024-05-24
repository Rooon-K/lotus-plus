import Collapse from "./Collapse.vue";
import CollapseItem from "./CollapseItem.vue";
import { withInstall } from "@lotus-plus/utils";

export const LCollapse = withInstall(Collapse);
export const LCollapseItem = withInstall(CollapseItem);

export * from "./types";
