import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";

export default defineConfig({
  plugins: [vue()],
  build: {
    outDir: "dist/umd",
    lib: {
      entry: resolve(__dirname, "./index.ts"),
      name: "LotusPlus",
      fileName: "lotus-plus",
      formats: ["umd"]
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        globals: {
          exports: "named",
          vue: "vue"
        },
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === "style.css") return "index.css";
          return assetInfo.name as string;
        }
      }
    }
  }
});
