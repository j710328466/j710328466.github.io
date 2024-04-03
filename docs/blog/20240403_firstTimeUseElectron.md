---
nav:
  title: 文章
  path: /blog
category: Components
toc: content
title: electron 保姆级入门手册
keywords: [electron, 客户端]
description: Electron 是一个由 GitHub 开发的开源桌面应用程序开发框架，可以使用 HTML、CSS 和 JavaScript 构建跨平台的桌面应用程序
group:
  title: 2024年
---

## 介绍

Electron 是一个由 GitHub 开发的开源桌面应用程序开发框架，可以使用 HTML、CSS 和 JavaScript 构建跨平台的桌面应用程序，如编辑器、IDE、通讯工具等。Electron 允许开发者直接访问操作系统的原生 API，并且具有丰富的第三方库和工具支持。

适用场景: 如果你需要构建桌面应用程序，并且希望在不同的操作系统上使用相同的技术栈，并且需要充分利用操作系统的原生功能，那么 Electron 是一个不错的选择。

缺点：相较于纯原生应用，Electron 应用可能会占用更多的系统资源，并且在性能上可能略逊一筹；对于需要在移动平台上运行的应用，Electron 并不是首选方案。

> 以下内容，我默认你了解前端 js、css、html 相关的知识，并且对 webpack 打包工具有一定的了解。不了解的话，我建议你去了解一下。

## 环境搭建

1. 首先你要保证你的电脑安装了 [**node**](https://nodejs.org/en)，并且版本在 16+。
2. IDE 不用我说了吧，我这里用的是 [vscode](https://code.visualstudio.com/)
3. 建议使用 pnpm 作为安装工具，全新的安装依赖模式，扁平化管理依赖包，降低重复安装率，安装速度更快
4. 在 .npmrc 中添加国内源，我使用的是淘宝官方镜像：<https://registry.npmmirror.com>

## 开发一个 Hello World 应用

### 1. 首先初始化目录

基本的 git 仓库构建，npm init、.gitignore 安排上

### 2. 安装 Electron

只需要下面一句代码

```js
npm i electron
```

### 3. 在 package.json 中添加执行命令

```js
{
  ...
  "script": "electron ."
  ...
}
```

### 4. 创建网页

在 electron 中，每个窗口展示都是一个网页，可以从本地的 html 或者远程网址加载，本示例加载的是本地的 html 文件

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <meta
      http-equiv="Content-Security-Policy"
      content="default-src 'self'; script-src 'self'"
    />
    <meta
      http-equiv="X-Content-Security-Policy"
      content="default-src 'self'; script-src 'self'"
    />
    <title>First Electron Application</title>
  </head>
  <body>
    <h1>hello nicenote!</h1>
    <div id="info"></div>
    <p>j710328466.github.io</p>
  </body>
  <script src="./renderer.ts"></script>
</html>
```

### 5. 创建 preload 预加载脚本

在根目录下创建 preload.ts 文件，写入：

```js
// preload.ts
import { contextBridge  } from 'electron/core'

contextBridge.exposeInMainWorld('baseAPI', {
  getNodeVersion: () => process.versions.node,
  getChromeVersion: () => process.versions.chrome,
  getElectronVersion: () => process.versions.electron
  setTitle: (title: string) => ipcRenderer.send('set-title', title),
})
```

**versions**: 注入 windows 的全局 api 对象实例，这里透传了 node 版本号，chrome 版本号，electron 版本号，和修改标题事件

### 6. 创建 renderer 渲染层脚本

这个其实就是正常开发中的 JavaScript 脚本，无非就是比原本的 windows 实例多了一些 API (由 preload 注入)：

```ts
const info = document.getElementById('info');
info.innerText = `
  This app is using Chrome (v${baseAPI.getChromeVersion()}), 
  Node.js (v${baseAPI.getNodeVersion()}), 
  Electron (v${baseAPI.getElectronVersion()})
`;

window.onload = () => {
  baseAPI.setTitle('修改标题为：nicecode');
};
```

### 5. 创建主应用文件 main.ts

```ts
import { app, BrowserWindow, ipcMain } from 'electron/core';
import path from 'node:path';

// 创建窗口视图，高度600 宽度 800
const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    },
  });

  // 监听修改标题事件
  ipcMain.on('set-title', (event, title) => {
    const webContents = event.sender;
    const win = BrowserWindow.fromWebContents(webContents);
    win.setTitle(title);
  });

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });

  win.loadFile('index.html');
};

// 监听 app 加载完成实例
app.on('ready', () => {
  createWindow();
});

// 监听点击关闭窗口，同时销毁 app 实例
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
```

- **app**: 控制应用的事件生命周期
- **BrowserWindow**: 创建和管理应用窗口
- **ipcRenderer**: 进程间通信模块，通过 send 创建可调用事件
- **ipcMain**: 进程间通信模块，通过 on 监听事件

## 基本概念

结合上面的案例我们可以看到，electron 应用是分两层的，我把它定义为：一层是主应用层 main，一层是渲染层 renderer

它们的区别主要是：

主应用层：主要是用来桥接原生系统和应用，和构建这个 app 在操作系统中的展示样式，属于外框。
渲染层：主要就是这个应用的功能，我们可以简单的理解成，它可以独立于外壳之外单独运行的一套 H5 页面。

- 了解 Electron 的主要 API，如 `app`、`BrowserWindow`、`ipcMain` 和 `ipcRenderer` 等
- 简要介绍 Electron 的进程间通信机制

## 资源与社区

### Flutter

Flutter 是一个由谷歌开发的跨平台应用程序开发框架，可以同时用于构建 iOS、Android、Web 和桌面应用程序。Flutter 使用 Dart 编程语言，具有热重载、丰富的 UI 组件、优秀的性能和良好的可定制性等优势。

适用场景：如果你需要构建移动应用程序，并且希望在 iOS 和 Android 平台上使用相同的代码库，并且追求高性能和精美的用户界面，那么 Flutter 是一个很好的选择。

### React Native

React Native 是一个由 Facebook 开发的框架，用于构建原生移动应用程序，它使用 JavaScript 和 React 来编写界面和业务逻辑。React Native 允许开发者使用相同的代码库构建 iOS 和 Android 平台上的应用，同时保持接近原生应用的性能和用户体验。

适用场景：能够快速构建跨平台移动应用，减少了开发和维护成本；具有优秀的性能和用户体验，接近原生应用的效果；社区庞大，有大量的组件和库可供使用。

缺点：对于某些特定的原生功能和性能要求，可能需要编写原生代码来进行扩展和优化；在一些复杂的 UI 或动画场景下，性能可能会有所折扣。

## 结论

用 electron 搭建一个普通的 PC 客户端对于前端工程师是很简单的，语法也基本和 js 一模一样，主要是要熟悉它和操作系统的通信，可能需要更多的经验和能力。

一般情况下，PC 端应用更适合使用 Electron，因为它更贴近底层，中间有一层 node 桥接，让你调用操作系统的底层能力会更丝滑。而移动端应用更适合使用 React Native 或者 flutter，他们会让用户有更好的交互和性能体验。

下一节，我讲讲客户端打包，和我在打包过程中发现的一些问题。
