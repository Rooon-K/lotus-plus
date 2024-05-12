import Button from "./Button.vue";
import { withInstall } from "@lotus-plus/utils";
import ButtonGroup from "./ButtonGroup.vue";

export const LButton = withInstall(Button);
export const LButtonGroup = withInstall(ButtonGroup);

export * from "./types";
