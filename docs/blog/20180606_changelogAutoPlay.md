---
nav:
  title: 文章
  path: /blog
order: 999
toc: content
category: Components
group:
  title: 2018年
  order: 18
title: changelog 日志自动生成插件
---

## changelog 日志自动生成插件

该工具针对一些需要手动输入更新日志的项目，实现自动化输出更新日志，并且对更新日志进行内容格式化，便于后期维护，目前主要有以下几个功能模块。

1. cz -- 定制化 git 提交
2. log -- 自动生成 CHANGELOG.MD 日志文件
3. lint -- 校验 commit 信息

安装依赖包

```js
npm install @nicecode/changelog --save
// or
yarn add @nicecode/changelog --save-dev
```

## 一、cz 模块

### 1. 安装 commitizen 依赖包

> cnpm i commitizen --save-dev

### 2. 在 package.json 中加入以下内容

```json
{
  ...
  "config": {
    "commitizen": {
      "path": "@nicecode/commit"
    }
  },
}
```

### 3. 在 package.json 中创建以下 script 命令

```json
{
  "cz": "git add . && git cz"
}
```

按照提示正确输出 commit 信息内容，如下示例：

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/29fc6a92aa7b4af0b3dcb937670e4a28~tplv-k3u1fbpfcp-zoom-1.image)

## 二、log 模块

### 1. 安装 conventional-changelog-cli 依赖包

```js
cnpm i conventional-changelog-cli --save-dev
```

### 2. 创建以下命令

```json
{
  ...
  "script": {
    "log": "conventional-changelog --n node_modules/@nicecode/changelog -i CHANGELOG.md -s -r 0",
  }
}
> 结尾数字若为 1 ，生成当前版本的变化情况，若为 0， 生成所有的日志文件。
```

### 3. 示例

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/38cb1858823a43f098b087ccde98be99~tplv-k3u1fbpfcp-zoom-1.image)

## 三、lint 模块

### 1. 安装 husky commitlint 依赖

```shall
cnpm i husky commitlint @nicecode/commit-lint --save-dev
```

### 2. 在 package.json 中引入以下配置

```json
{
  ...
  "husky": {
    "hooks": {
      "commit-msg": "commitlint -E HUSKY_GIT_PARAMS"
    }
  },
}
```

### 3. 在项目根路径下创建 .commitlint.js 或者 commitlint.config.js

具体配置可以参考 commitlint 官方，例子：

```js
module.exports = {
  extends: ['@nicecode/commit-lint'],
};
```

## 建议

可以搭配 **husky** 和 **lint-stage** 效果更佳。它能在你每次提交代码前校验你的代码格式并修复错误的代码格式，具体配置可以参考当前根目录下的 package.json 和 .eslintrc.

## Q&A

### 1. No files added to staging! Did you forget to run git add？

应该没有文件内容变动还执行 git add . 提交导致的。试着对项目进行更改再保存试试。

### 2. 提交后，输入更新日志命令，CHANGELOG.MD 内容没有更新？

只有每次版本迭代的的时候才会更新这一次的日志信息。可以尝试打个标签最为封版。

### 3. mac 无法运行 git 命令，报错？

可以试试安装 xcode.

> xcode-select --install

### 4. 打印日志没有版本号？

版本号目前支持的格式为 vX.X.X，👀 格式对吗？

### 5. js 如何读取 md 文件？

如果该项目使用了 webpack，可以使用 markdown-loader.

```js
第一次写工具库，难免有瑕疵，欢迎大家 pr，但是还请口下留情😄
喜欢的话给个 star吧
```
