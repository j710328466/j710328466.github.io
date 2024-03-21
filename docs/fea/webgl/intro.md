---
nav:
  title: 前端
  path: /fea
toc: content
group:
  title: 💊 webGL
  order: 1
  path: /webgl
---

# 基础

## 介绍

:::info{title=记录日志}
本文档从 2023 年 10 月 20 开始，主要用来记录 threejs 的学习过程和踩坑记录，方便复盘与总结。
:::

### 基本对象

一个基本的 3D 场景需要包括的以下几个必备要素：

- 场景：scence
- 相机：camera（实例 THREE.PerspectiveCamera(fov, aspect, zNear, zFar)）
- 渲染器：renderer

### 绘制方法

基本的场景搭建好了，现在我们需要在这个场景中放置我们想要的对象，一般我们想要的基本几何体可以通过以下方式创建：

- Geomety（几何体，常用）
- Materials（材质）
- Mesh（网格对象）

大致思路为：创建一个几何体，给几何体附加材质，组合之后加入场景中，如下所示

```js
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0xffff00 });
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);
```

### 其它

如果想要让场景更加精美，我们需要添加更多的参数来达到想要的效果

- 纹理（Textures）
- 光照（Lights）
- 变换（Transforms）
- 矩阵（Matrices）
- 视窗（Viewports）
- 着色器（Shader）
- 群组（Group）

## 社区

### pixiJS

一款基于 webGL 的 2d 渲染引擎，用来写一些 bit 游戏还是挺好用的。

### threeJs

目前比较热门的基于 webgl 的框架，缺点是每个版本之间的接口差异较大，所以使用的时候需要根据版本来找对应的接口文档

本文会更多的以 threejs 为基础框架来展开深入构建一个 3Dweb 世界

## 参考文档

1. [pixi 中文](http://pixijs.huashengweilai.com/guide/start/9.make-sprite-from-texture-atlas.html#%E9%80%9A%E8%BF%87%E7%BA%B9%E7%90%86%E8%B4%B4%E5%9B%BE%E9%9B%86%E5%88%9B%E5%BB%BA%E7%B2%BE%E7%81%B5)
2. [PIXI API 大全](https://pixijs.download/release/docs/index.html)
3. [bit 贴图大全](https://opengameart.org/)
4. [threeJs](https://techbrood.com/threejs/examples/#webgl_shadowmap_pointlight)
5. [puxiao 的教程](https://github.com/puxiao/threejs-tutorial)
6. [threeJs 官方教程](https://threejs.org/manual/#zh/fundamentals)
