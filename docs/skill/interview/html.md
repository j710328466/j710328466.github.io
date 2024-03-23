---
nav:
  title: 技巧
  path: /skill
  order: 5
toc: content
title: HTML
group:
  title: 前端
  order: 2
---

## 开发能力模型

- 基础开发 - 响应式开发 - 滑屏应用开发 - 动画效果开发 - 游戏开发

## 基础页面开发

### 一、思考流程

1. 确定设计稿是否开发友好？还原成本？
2. 确定特殊元素是否有合理的边界处理（比如文案超出、输入框文案校验）
3. 确定页面框架结构：Layout
4. 确定整体网页可复用性组件：Site component
5. 确定当前页面可复用组件：Page component

### 二、编写页面骨骼框架

#### 盒模型

margin、border、padding、content
区分元素宽度和盒子宽度（是否包括 margin，在 css3 样式中可以使用：box-sizing：content-box、border-box）

#### 布局

1. 普通文档布局（display）
2. 浮动布局（float）
3. 绝对布局（position）
4. 弹性布局（display：flex）
5. 网格布局（grad）

#### 语义化

![屏幕快照 2020-08-23 上午11.54.26.png](https://cdn.nlark.com/yuque/0/2020/png/195884/1598154888954-152e1a38-b189-4bbf-8a5e-49720f81fb1b.png#height=1192&id=swYj7&margin=%5Bobject%20Object%5D&name=%E5%B1%8F%E5%B9%95%E5%BF%AB%E7%85%A7%202020-08-23%20%E4%B8%8A%E5%8D%8811.54.26.png&originHeight=1192&originWidth=1312&originalType=binary&ratio=1&size=408275&status=done&style=none&width=1312)

### 三、填充网页血肉内容

切图可以使用 PS 的「生成 > 图像资源」

### 四、润色

使用 bem 方式命名 class（block、element、modify）

### 兼容性测试

1. 页面在各浏览器，不同分辨率下是否能正常展示
2. 网页的功能是否能在各个浏览器中使用

## 响应式页面

### 一、添加 viewport meta 标签

#### pageSpeed 准则

推荐在移动端头文件中，添加如下代码：

> <meta name="viewport" content="width=device-width, initial-scale=1">

### 二、使用 Media Queries

#### 六个参数

| 参数名                | 描述                                                      |
| --------------------- | --------------------------------------------------------- |
| min-width             | 当视窗宽度大于或等于指定值时，@media 规则下的样式将被应用 |
| max-width             | 当视窗宽度小于或等于指定值时，@media 规则下的样式将被应用 |
| min-height            | 当视窗高度大于或等于指定值时，@media 规则下的样式将被应用 |
| max-height            | 当视窗高度小于或等于指定值时，@media 规则下的样式将被应用 |
| orientation=portrait  | 当视窗高度大于或等于宽度时，@media 规则下的样式将被应用   |
| orientation=landscape | 当视窗宽度大于高度时，@media 规则下的样式将被应用         |

#### 2 种用法

方法一，使用 link 标签：

```js
<link rel="stylesheet" media="(max-width: 640px)" href="max-640px.css">
```

方法二，直接在 style 中使用：

```js
@media (max-width: 640px) {
  /*当视窗宽度小于或等于 640px 时，这里的样式将生效*/
}
```

### 三、使用 viewport 单位以及 rem

#### 方法一：仅使用 vw 作为 css 长度单位

1. 利用 sass 函数将设计稿尺寸转换为 vw

```js
// iPhone 6尺寸作为设计稿基准
$vw_base: 375;
@function vw($px) {
    @return ($px / $vm_base) * 100vw;
}
```

2. 无论是文本字号大小还是布局高宽、间距、留白等都使用 vw 作为 CSS 单位

```js
.mod_nav {
    background-color: #fff;
    &_list {
        display: flex;
        padding: vw(15) vw(10) vw(10); // 内间距
        &_item {
            flex: 1;
            text-align: center;
            font-size: vw(10); // 字体大小
            &_logo {
                display: block;
                margin: 0 auto;
                width: vw(40); // 宽度
                height: vw(40); // 高度
                img {
                    display: block;
                    margin: 0 auto;
                    max-width: 100%;
                }
            }
            &_name {
                margin-top: vw(2);
            }
        }
    }
}
```

3. 物理像素线（1px），采用 transform 属性 scale 实现

```js
.mod_grid {
    position: relative;
    &::after {
        // 实现1物理像素的下边框线
        content: '';
        position: absolute;
        z-index: 1;
        pointer-events: none;
        background-color: #ddd;
        height: 1px;
        left: 0;
        right: 0;
        top: 0;
        @media only screen and (-webkit-min-device-pixel-ratio: 2) {
            -webkit-transform: scaleY(0.5);
            -webkit-transform-origin: 50% 0%;
        }
    }
}
```

4. 对于需要保持高宽比的图，使用 padding-top 实现：

```js
.mod_banner {
    position: relative;
    // 使用padding-top 实现宽高比为 100:750 的图片区域
    padding-top: percentage(100/750);
    height: 0;
    overflow: hidden;
    img {
        width: 100%;
        height: auto;
        position: absolute;
        left: 0;
        top: 0;
    }
}
```

#### 方法二：vw 搭配 rem，寻找最优解

1. 给更元素的字体大小设置随着视窗变化而变化的 vw 单位，这样就可以实现动态改变其大小
2. 其它元素的文本字大小、布局高宽、间距、留白使用 rem 单位
3. 限制根元素大小的最大最小值，配合 body 加上最大宽度和最小宽度，实现布局宽度的最大最小限制

核心代码如下：

```js
// rem 单位换算：定为 75px 只是方便运算，750px-75px、640-64px、1080px-108px，如此类推
$vw_fontsize: 75; // iPhone 6尺寸的根元素大小基准值
@function rem($px) {
     @return ($px / $vw_fontsize ) * 1rem;
}
// 根元素大小使用 vw 单位
$vw_design: 750;
html {
    font-size: ($vw_fontsize / ($vw_design / 2)) * 100vw;
    // 同时，通过Media Queries 限制根元素最大最小值
    @media screen and (max-width: 320px) {
        font-size: 64px;
    }
    @media screen and (min-width: 540px) {
        font-size: 108px;
    }
}
// body 也增加最大最小宽度限制，避免默认100%宽度的 block 元素跟随 body 而过大过小
body {
    max-width: 540px;
    min-width: 320px;
}
```

## 滑屏应用开发

### 善用利器

熟练使用现有的滑动组件 swiper 或者其它
