---
nav:
  title: 前端
  path: /fea
toc: content
group:
  title: 💊 node
  order: 4
  path: /node
---

# 💊 node

基于 chrome 的 V8 引擎 封装的一个 JavaScript 运行环境，事件驱动、非阻塞 IO 进程模型，它能让 js 代码运行在服务端。

对于前端工程师来说具有极大的意义，也让前端工程师离全栈工程师更近了一步。

对标产品为基于 rust、Tokio 的 deno（destroy node），deno 具有更高的效率，并且原生就支持 typescript

## 安装

### 方法 1

#### 拉取 nvm

<!-- 版本好可以根据需求来变更 14.X 16.X -->

- curl -fsSL https://rpm.nodesource.com/setup_18.x | bash -

- sudo yum install -y nodejs

#### 安装 nvm

```javascript
// 打开bash
source ~/.bash_profile

// 写入 node文件指向
export NODE_HOME=/usr/local/tool/nodejs/node
export PATH=$NODE_HOME/bin:$PATH
```

- nvm install node（版本号）or nvm install stable
- 方案 2
- curl --silent --location [https://rpm.nodesource.com/setup_11.x](https://rpm.nodesource.com/setup_11.x)| sudo bash -

### 方法 2

1. 第一步

```js
wget https://nodejs.org/dist/v16.13.2/node-v16.13.2-linux-x64.tar.xz
```

2. 第二步

```
tar -xvf node-v12.16.1-linux-x64.tar.gz
yum install gcc gcc-c++
```

3. 第三步

```
mv node-v12.16.1-linux-x64.tar.gz node
```

4. 第四步

```
ln -s /usr/local/bin/node/bin/node /usr/bin/node
ln -s /usr/local/bin/node/bin/npm /usr/bin/npm
ln -s /usr/local/bin/node/bin/npx /usr/bin/npx
```

### 安装 GIT

- curl [https://setup.ius.io](https://setup.ius.io) | sh
- yum install -y git2u
- git --version

## cjs、esm、umd 的区别

首先运行端的区别，cjs 和 esm 只能运行在 node 端，而 umd 可以同时运行在 node 和浏览器端

1. cjs 即为 CommonJs, 属于早期的 node 规范，可以使用 require 进行引用，module.exports 导出。
2. esm 即为 Es module，属于 es6 提出之后版本的新的规范，语法是可以用 import 引用，export default 导出。
3. umd 即为 Universal Module Definition（通用模块定义），也就是最基本的可在浏览器和 node 端执行的 js 代码。

## Q&A

### Error: Package: 2:nodejs-18.19.1-1nodesource.x86_64 (nodesource-nodejs)

你可以尝试下面的命令

```
curl -fsSL https://rpm.nodesource.com/setup_18.x | sudo bash -
curl -sL https://dl.yarnpkg.com/rpm/yarn.repo | sudo tee /etc/yum.repos.d/yarn.repo
```
