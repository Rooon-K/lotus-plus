import { createApp } from "vue";
import App from "./App.vue";
// import lotusPlus from "lotus-plus";
// import "lotus-plus/dist/theme/index.css";
import lotusPlus from "../../core/index";

createApp(App).use(lotusPlus).mount("#app");
