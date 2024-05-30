import { makeInstaller } from "@lotus-plus/utils";
import components from "./components";
import "@lotus-plus/theme/index.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import printLogo from "./logo";

printLogo();

library.add(fas);

const installer = makeInstaller(components);

export * from "@lotus-plus/components";
export default installer;
