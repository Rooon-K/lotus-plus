---
search: false
next:
  link: /guide/light-mode
  text: 浅色模式
---

# 快速上手

跟随以下步骤, 快速上手组件库的使用

## 安装

### 使用 npm 安装

```bash
npm i lotus-plus --save
```

## 使用

**全局使用**

```ts
// 引入所有组件
import LotusPlus from "lotus-plus";
// 引入样式
import "lotus-plus/dist/index.css";

import App from "./App.vue";
// 全局使用
createApp(App).use(LotusPlus).mount("#app");
```

```vue
<template>
  <l-button>我是 Button</l-button>
</template>
```

**组件的按需引入**

```ts
// 引入全部样式
import "lotus-plus/dist/index.css";

import App from "./App.vue";
createApp(App).mount("#app");
```

```vue
<template>
  <l-button>我是 Button</l-button>
</template>
<script>
import { LButton } from "lotus-plus";
</script>
```

**样式的按需引入**

```ts
// 引入所有组件
import LotusPlus from "lotus-plus";
// 引入基础样式
import "lotus-plus/dist/theme/index.css";

import App from "./App.vue";
// 全局使用组件
createApp(App).use(LotusPlus).mount("#app");
```

```vue
<template>
  <l-button>我是 Button</l-button>
</template>
<script>
import "lotus-plus/dist/theme/Button.css";
</script>
```
