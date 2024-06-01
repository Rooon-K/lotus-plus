import notification from "./src/methods";
import { withInstallFunction } from "@lotus-plus/utils";

export const LNotification = withInstallFunction(notification, "$notify");

export * from "./src/types";