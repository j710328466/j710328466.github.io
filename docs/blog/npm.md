---
nav:
  title: 文章
  path: /blog
toc: content
category: Components
title: npm 操作手册
group:
  title: 2018年
---

## 发布 npm 包

### 一、初始化

- npm init

### 二、登录

- npm config set registry=http://registry.npmjs.org 切换回官方源
- （[http://registry.npm.taobao.org/](http://registry.npm.taobao.org/)如果是淘宝源）

### 三、发布

- npm publish
  > 发布@开头的包加上 --access public

### 四、删除包

npm unpublish nicecode-tools --force

### 错误大全

#### npm ERR! unscoped packages cannot be private : jzx-deom

- ·处理：npm publish --access public

#### "Jzx-deom" is invalid for new packages : Jzx-deom

- ·处理：发布包不允许大写字母

##### You do not have permission to publish "deom". Are you logged in as the correct user? : deom

·处理：换个包名称，包已存在

#### request to <https://registry.npmjs.org/@nicecode%2ftools> failed, reason: connect ETIMEDOUT 104.16.2.35:443

1. 可能是国内网络环境的问题，尝试把梯子打开增强模式试试
2. 可以看看是不是 npmrc 填写的源地址是不是错了
3. 如果 npmrc 的源地址不好更改，确保发布的 package 中的 publishConfig.registry 地址正确

## 升级 babel

- npx babel-upgrade --write --install

## 安装 npm-check

    - $ npm i npm-check -g
    - 交互式选择所有 umi 相关依赖更新
    - $ npm-check -u
    - # 指定 npm 客户端

```javascript
NPM_CHECK_INSTALLER=cnpm npm-check -u
```
