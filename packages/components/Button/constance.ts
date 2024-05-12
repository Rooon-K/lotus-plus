import type { InjectionKey } from "vue";
import type { ButtonGroupContext } from "lotus-plus";

export const BUTTON_GROUP_CTX_KEY: InjectionKey<ButtonGroupContext> =
  Symbol("BUTTON_GROUP_CTX_KEY");
