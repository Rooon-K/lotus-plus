import { defineConfig } from "vitepress";
import { containerPreview, componentPreview } from "@vitepress-demo-preview/plugin";

const startYear = 2024;
const nowYear = new Date().getFullYear();

export default defineConfig({
  title: "Lotus-Plus",
  description: "一个 vue3 组件库",
  base: "/lotus-plus/",
  themeConfig: {
    footer: {
      message: "鲁ICP备2024093316号",
      copyright: `Copyright © ${startYear}${nowYear === startYear ? "" : "-" + nowYear} Rooon-K`
    },

    nav: [
      { text: "开始使用", link: "/guide/get-start" },
      { text: "组件", link: "/components/button" }
    ],

    sidebar: [
      {
        text: "开发指南",
        items: [
          { text: "快速开始", link: "guide/get-start" },
          { text: "浅色模式", link: "guide/light-mode" },
          { text: "暗黑模式", link: "guide/dark-mode" }
        ]
      },
      {
        text: "基础组件",
        items: [
          { text: "Button 按钮", link: "components/button" },
          { text: "Icon 图标", link: "components/icon" },
          { text: "Layout 布局", link: "components/layout" },
          { text: "Link 链接", link: "components/link" }
        ]
      },
      {
        text: "数据展示",
        items: [{ text: "Collapse 折叠面板", link: "components/collapse" }]
      },
      {
        text: "反馈",
        items: [
          { text: "Message 消息提示", link: "components/message" },
          { text: "Notification 通知", link: "components/notification" }
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
  },
  transformHead(context) {
    context.head.push(["meta", { name: "baidu-site-verification", content: "codeva-XusLDvHa0l" }]);
  }
});
