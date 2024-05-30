import Button from "./src/Button.vue";
import { withInstall } from "@lotus-plus/utils";
import ButtonGroup from "./src/ButtonGroup.vue";

export const LButton = withInstall(Button);
export const LButtonGroup = withInstall(ButtonGroup);

export * from "./src/types";
