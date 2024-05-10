import { defineConfig } from "vitepress";
import { containerPreview, componentPreview } from "@vitepress-demo-preview/plugin";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Lotuts-Plus",
  description: "一个 vue3 组件库",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "开始使用", link: "/guide/get-start" },
      { text: "组件", link: "/components/button" }
    ],

    sidebar: [
      {
        text: "开发指南",
        items: [
          { text: "快速开始", link: "guide/get-start" }
          // { text: "暗黑模式", link: "guide/dark-mode" },
        ]
      },
      {
        text: "基础组件",
        items: [
          { text: "Button 按钮", link: "components/button" },
          { text: "Icon 图标", link: "components/icon" }
        ]
      }
    ],

    socialLinks: [{ icon: "github", link: "https://github.com/Rooon-K/lotus-plus" }]
  },
  markdown: {
    config(md) {
      md.use(containerPreview);
      md.use(componentPreview);
    }
  }
});
