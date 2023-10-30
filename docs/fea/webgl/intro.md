---
nav:
  title: 前端
  path: /fea
group:
  title: 💊 webGL
  order: 9
  path: /webGL
---

# 💊 webGL

## 介绍

### 基本对象

一个基本的3d场景需要包括的以下几个必备要素：

- 场景：scence
- 相机：camera
- 相机创建实例图（THREE.PerspectiveCamera(fov, aspect, zNear, zFar)）：
- 渲染器：renderer

### 绘制方法

- 网孔（Meshes，推荐）
- 多边形（Polygons）
- 顶点（Vertices）

### 其它

- 材料（Materials）
- 纹理（Textures）
- 光照（Lights）
- 变换（Transforms）
- 矩阵（Matrices）
- 相机（Cameras）
- 视角（Perspective）
- 视窗（Viewports）
- 着色器（shader）

## pixi

一款基于webGL的 2d渲染引擎，用来写一些bit游戏还是挺好用的。

## threeJs

目前比较热门的基于webgl的框架，缺点是每个版本之间的接口差异较大，所以使用的时候需要根据版本来找对应的接口文档

本文会更多的以threejs为基础框架来展开深入构建一个3Dweb世界

参考的文档有以下：

1. [pixi中文](http://pixijs.huashengweilai.com/guide/start/9.make-sprite-from-texture-atlas.html#%E9%80%9A%E8%BF%87%E7%BA%B9%E7%90%86%E8%B4%B4%E5%9B%BE%E9%9B%86%E5%88%9B%E5%BB%BA%E7%B2%BE%E7%81%B5)
2. [PIXI API大全](https://pixijs.download/release/docs/index.html)
3. [bit 贴图大全](https://opengameart.org/)
4. [threeJs](https://techbrood.com/threejs/examples/#webgl_shadowmap_pointlight)
5. [puxiao的教程](https://github.com/puxiao/threejs-tutorial)
