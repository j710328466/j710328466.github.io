---
nav:
  title: 文章
  path: /blog
order: 999
category: Components
title: changelog 日志自动生成工具升级啦~
group: 2020年
---

# changelog 日志自动生成工具升级啦~

19 年我发了一篇文章[changelog 日志自动生成插件](https://juejin.cn/post/6844903767876304904),里面介绍了我开源的一套【auto changelog、commit-lint】规范化代码提交的工具插件合集。

但是由于是第一次发布一些开源的项目，难免开发方案不是很丝滑，用起来也不是很柔顺。

所以基于这些问题，用 lerna 对这个工具进行了一次升级。大概内容如下：

```js
jimi-web-changelog/cz --> @nicecode/commit   // git 格式化 cli 提交插件
jimi-web-changelog/lint  -->  @nicecode/commit-lint    // git 提交 lint 校验插件
jimi-web-changelog --> @nicecode/changelog   // 日志自动生成插件
```

## CZ 模块配置优化

[官方文档](https://nicecoders.github.io/#/changelog/commit)

### 原配置

```js
// 1、安装依赖
cnpm i commitizen jimi-web-changelog --save-dev

// 2、在 package.json 中添加
{
  ...
  "config": {
    "commitizen": {
      "path": "./node_modules/jimi-web-changelog/lib/cz"
    }
  },
  ...
}
```

### 新配置

```js
// 1、安装依赖
cnpm i commitizen @nicecode/commit --save-dev

// 2、在 package.json 中添加
{
  ...
  "config": {
    "commitizen": {
      "path": "@nicecode/commit"
    }
  },
  ...
}

```

## lint 模块配置优化

[官方文档](https://nicecoders.github.io/#/changelog/commit-lint)

### 原配置

```js
1. 安装依赖
cnpm i husky commitlint jimi-web-changelog --save-dev

2. 在 package.json 中引入以下配置
{
  ...
  "husky": {
    "hooks": {
      "commit-msg": "commitlint -E HUSKY_GIT_PARAMS"
    }
  },
  ...
}

3、根目录下 .commitlint.js
modules.exports = Object.assign({}, require('jimi-web-changelog/lib/lint'), {
  rules: {
    'subject-empty': [2, 'never'],
    'type-empty': [2, 'never'],
    'type-enum': [2, 'always',
      [
        '新功能',
        '修复',
        ...
      ]
    ]
  }
}
```

### 新配置

```js
// 1. 安装依赖
cnpm i husky commitlint @nicecode/commit-lint --save-dev

// 2. 在 package.json 中引入以下配置
{
  ...
  "husky": {
    "hooks": {
      "commit-msg": "commitlint -E HUSKY_GIT_PARAMS"
    }
  },
  ...
}

// 3、根目录下 .commitlint.js
modules.exports = {
  extends: ["@nicecode/commit-lint"]
}
```

## changelog 模块配置优化

[官方文档](https://nicecoders.github.io/#/changelog)

### 原配置

```js
// 1、安装依赖
cnpm i conventional-changelog-cli jimi-web-changelog --save-dev

// 2、在package.json 中添加命令
{
  ...
  "script": {
    "log": "conventional-changelog --config node_modules/jimi-web-changelog/lib/log -i CHANGELOG.md -s -r 0",
  }
  ...
}
```

### 新配置

```js
// 1、安装依赖
cnpm i conventional-changelog-cli @nicecode/changelog --save-dev

// 2、在package.json 中添加命令
{
  ...
  "script": {
    "log": "conventional-changelog --n node_modules/@nicecode/changelog -i CHANGELOG.md -s -r 0",
  }
  ...
}
```

## 后记

[nicecoder 团队](https://github.com/nicecoders) 目前 4 人，致力整合一套提高工作效率和代码规范的工具库，目前我们的计划的和已完成的有以下几个板块：

![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/285c6e21eb954428bf0adf67e737ae96~tplv-k3u1fbpfcp-watermark.image)

期待你的加入：[nicecoder](https://github.com/nicecoders)

### 相关链接

[@nicecode/tools 常用函数库](https://nicecoders.github.io/#/tools)

[nicecode 官网](https://nicecoders.github.io/#/)

[nicecode github 地址](https://github.com/nicecoders)
