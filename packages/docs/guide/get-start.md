---
search: false
next:
  link: /guide/dark-mode
  text: 暗黑模式
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
import LotusPlus from 'lotus-plus'
// 引入样式
import 'lotus-plus/dist/style.css'

import App from './App.vue'
// 全局使用
createApp(App).use(LotusPlus).mount('#app')
```

```vue
<template>
  <l-button>我是 Button</l-button>
</template>
```

**按需引入**
```vue
<template>
  <l-button>我是 Button</l-button>
</template>
<script>
  import { LButton } from 'lotus-plus'
  export default {
    components: { LButton },
  }
</script>
```