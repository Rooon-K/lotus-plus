import { makeInstaller } from "@lotus-plus/utils";
import components from "./components";
import "@lotus-plus/theme/index.css";

const installer = makeInstaller(components);

export * from "@lotus-plus/components";
export default installer;
