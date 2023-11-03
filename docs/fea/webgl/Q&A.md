---
nav:
  title: 前端
  path: /fea
group:
  title: 💊 webGL
  order: 100
---

# 常见问题

## 创建形状实例时，如何去定位位置？

初始创建的时候，是以 3d 世界坐标系（0,0,0）为中心，基于这个点创建对应素材，再去配置 transform 和 position 参数

## 如何加载 exr 文件？

可以下载对应的 loader，进行文件的加载
<https://www.jianshu.com/p/cc7dfdc51598>

## 镜头变成了鱼眼镜头？

- PerspectiveCamera 的 fov 参数设置过高，调低就行了

## 模型放大缩小会有点丢失细节，一直在闪烁？

把 PerspectiveCamera 的 near 参数调小，比如：0.01（按实际情况调整）

## 为什么材质很黑？

& ● 材质的质感需要通过环境来衬托，这边需要设置场景的环境值

```js
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';

// 场景环境添加纹理（这里默认使用threeJS提供的房间环境）
const pmremGenerator = new THREE.PMREMGenerator(renderer);
this.scene.environment = pmremGenerator.fromScene(
  new RoomEnvironment(),
  0.04,
).texture;
```

- ● 试试添加个环境光

## 为什么光线会过曝？

- ● child.material.envMapIntensity 参数设置的太高，导致本身的过曝
- ● this.renderer.toneMappingExposure 色调映射的曝光级别过高
- ● child.material.emissive = child.material.color 这段删除

## 模型文件过大，如何优化？

1. 使用压缩工具，去压缩处理模型，例如：gltf-pipeline（推荐）
2. 加载 DRACOLoader 去压缩模型，但是会额外消耗浏览器内存与时间去进行额外计算

## 如何给 glb 模型的某个模块添加材质？

```js
const diamondTexture = new RGBELoader().load('./path/diamond1.hdr');
// 映射场景（球状体里面）
diamondTexture.mapping = THREE.EquirectangularRefractionMapping;
await model.traverse(
  (child) => {
    if (child.isMesh && child.material instanceof THREE.MeshStandardMaterial) {
      child.material.envMap = diamondTexture; // 上材质
    }
  },
  undefined,
  function (error) {
    console.error(error);
  },
);
```

## 字体加载的时候报错，fontloader unexpected token '<', "<!doctype "... is not valid json?

大概率是字体库的文件路径有问题，两个解决方案：

1. 把字体库上床到 oss，使用链接的形式加载字体
2. 配置一下 vite 或者 webpack，让它能正确读取 json 格式的文件

## 用 RGBELoader 加载 hdr 材质，赋值给 glb 模型，为什么模型会丢失？

没有加上 mapping 属性

```
// 映射场景（球状体里面）
texture.mapping = THREE.EquirectangularRefractionMapping;
```

## 如何查看光源是从哪里来？

可以给光源添加一个 helper，来帮助查看光的位置

```js
// 平行光
const directionalLightCameraHelper = new THREE.DirectionalLightHelper(
  new THREE.DirectionalLight(0xffffff, 1),
  5,
  '#000',
);
scene.add(directionalLightCameraHelper);

// 点光
const pointLightHelper = new THREE.PointLightHelper(
  new THREE.PointLight(0xff0000, 1, 100),
  1,
);
scene.add(pointLightHelper);

// 半球光
const helper = new THREE.HemisphereLightHelper(
  new THREE.HemisphereLight(0xffffbb, 0x080820, 1),
  5,
);
scene.add(helper);
```
