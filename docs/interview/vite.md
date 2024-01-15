---
nav:
  title: 面试
  path: /interview
group:
  title: 💊 面试题库
  order: 2
---

# 打包工具

## vite 和 webpack 的区别

webpack： 把所有的依赖包都打包编译到一个文件夹中，它的特点有：

- bundler，all in one. 编译时间较长

vite：no bundler. 新一代打包工具，基于 esbuild（使用 go 编写），，所以速度上会有质的飞跃，它有以下特点：

编译速度快：直接引用 es 模块.
按需加载：只编译开发中的模块
