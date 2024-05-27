import message from "./methods";
import { withInstallFunction } from "@lotus-plus/utils";

export const LMessage = withInstallFunction(message, "$message");

export * from "./types";
