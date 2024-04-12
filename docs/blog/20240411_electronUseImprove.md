---
nav:
  title: 文章
  path: /blog
category: Components
toc: content
title: electron 踩坑大全
keywords: [electron, 客户端]
description: Electron 是一个由 GitHub 开发的开源桌面应用程序开发框架，可以使用 HTML、CSS 和 JavaScript 构建跨平台的桌面应用程序
group:
  title: 2024年
---

## 介绍

## 进阶功能

### 添加 filter 滤镜

<https://www.nuevodevel.com/nuevo/showcase/filters>

## 踩坑记录

### Illegal invocation: Function must be called on an object of type App

这个问题主要来自，ipc 调用报错，解决方案目前也没找到：

```js
// 示例代码
ipcMain.handle('getPlatform', () => {
  app.getPath('appData');
  return `hi, i'm from ${process.platform}`;
});
```

这会导致在客户端调用的时候，报错。

## 签名报错: sha512 checksum mismatch, expected

```js
sha512 checksum mismatch, expected 6LQI2d9BPC3Xs0ZoTQe1o3tPiA28c7+PY69Q9i/pD8lY45psMtHuLwv3vRckiVr3Zx1cbNyLlBR8STwCdcHwtA==, got SfLnj0czCr7vVbgAev1PTV7gYnEtx8gyEUGx5QIO9AWoArCPHLz8JLTKweAA42/Zysx77xuhxN1cgAcjKsRZlw==
```

参考：<https://www.electron.build/code-signing>

- 将 Electron 应用打包成可执行文件
- 在不同平台上发布应用，如 Windows、macOS 和 Linux
- 选择适合的打包工具，如 electron-builder、electron-packager 等

## 进阶主题

- 处理文件系统和网络请求
- 添加本地数据库支持
- 集成原生功能，如系统托盘、菜单栏等
- 实现应用更新和自动更新机制

## 性能优化与调试

- 使用 Chrome 开发者工具进行调试
- 优化应用的启动时间和内存占用
- 处理大文件和复杂计算任务的性能优化技巧

## 常见问题与解决方案

- 处理 Electron 版本升级带来的兼容性问题
- 解决常见的打包和发布问题
- 处理跨平台开发中的差异性

### 打包的时候会报错：operation not permitted

这个问题是我在 windows 系统上发现的，原因是当前文件夹下的文件只有只读权限，试着把只读权限关掉就好了。
