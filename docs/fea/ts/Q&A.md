---
nav:
  title: 前端
  path: /fea
group:
  title: 💊 TypeScript
  order: 3
  path: /ts
---

## Q&A

### 在 monorepo 架构下，子包之间相互引用，ts 总是会提示找不到对应的包

可以在根目录下的 tsconfig.json 如下配置：

```json
{
  ...
  "paths": {
    "@packages/*": ["packages/*/src/"]
  }
}
```
