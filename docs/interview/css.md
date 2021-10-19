---
nav:
  title: 面试
  path: /interview
group:
  title: 💊 面试题库
  order: 2
---

## CSS

### 清除浮动


- 使用clear
- 使用overflow
- 使用css的*：after



### 居中设置


#### 1· 水平居中


- flex布局



> 设置justify-content：center；



#### 2· 垂直居中


- 多行文本（内联元素）



> a: 插入 table ，再设置vertical-align: middle;
> b: 先设置display： table-cell；再设置vertical-align: middle;



### link 和 @import的区别


- link除了加载css，还能用于定义RSS，定义rel链接属性，import只能引入css
- 页面加载时，link同时加载，而@import引用的css会等到页面被加载完之后再加载
- import 只在 ie5 以上被识别



### css 盒子模型


- content，padding，margin，border



### css 选择符号


- id选择器
- 类选择器
- 标签选择器
- 相邻选择器 +
- 子选择器 >
- 后代选择器
- 通配符选择器 *
- 属性选择器 （a[rel = 'external'])
- 伪类选择器 hover nth-child
- 优先级



> !important > id > class > tag

### 列举不同的清除浮动的技巧
```javascript
/* 1.添加新元素 */
<div class="outer">
  <div class="div1"></div>
  <div class="div2"></div>
  <div class="div3"></div>
  <div class="clearfix"></div>
</div>
.clearfix {
  clear: both;
}

/* 2.为父元素增加样式 */
.clearfix {
  overflow: auto;
  zoom: 1; // 处理兼容性
}

/* 3.:after 伪元素方法 (作用于父元素) */
.outer {
  zoom: 1;
  &:after {
    display: block;
    height: 0;
    clear: both;
    content: '.';
    visibillity: hidden;
  }
}
```


### 一像素边框
```javascript
/* 定义 */
@mixin border-1px ($color) {
    position: relative;
    &:after {
        display: block;
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        border-top: 1px solid $color;
        context: '';
    }
}

@media (-webkit-min-device-pixel-radio: 1.5), (min-device-pixel-radio: 1.5) {
    border-1px {
        &:after {
            -webkit-transform: scaleY(0.7);
            transform: scaleY(0.7);
        }
    }
}

@media (-webkit-min-device-pixel-radio: 2), (min-device-pixel-radio: 2) {
    border-1px {
        &:after {
            -webkit-transform: scaleY(0.5);
            transform: scaleY(0.5);
        }
    }
}

/* 使用方式 */
@include border-1px(rgba(7, 17, 27, .1));
```
### 
### 形成**BFC**(Block Formatting Context)的几种方式
```javascript
float为 left|right
overflow为 hidden|auto|scroll
display为 table-cell|table-caption|inline-block
position为 absolute|fixed
```


### 布局


#### 圣杯布局：中间 padding、左右 margin
```javascript
body {
  min-width: 600px;
}

.container {
  padding-left: 210px;
  padding-right: 190px;
}

.main {
  float: left;
  width: 100%;
  height: 300px;
  background-color: rgba(255, 0, 0, .5);
}

.sub {
  position: relative;
  left: -210px;
  float: left;
  width: 200px;
  height: 300px;
  margin-left: -100%;
  background-color: rgba(0, 255, 0, .5);
}

.extra {
  position: relative;
  right: -190px;
  float: left;
  width: 180px;
  height: 300px;
  margin-left: -180px;
  background-color: rgba(0, 0, 255, 0.5);
}
```


#### 双飞翼布局


```html
//html
<body>
  <div class="main-wrapper">
    <div class="main"></div>
  </div>
  <div class="sub"></div>
  <div class="extra"></div>
</body>

// css
<style>
 .main-wrapper {
  float: left;
  width: 100%;
}

.main {
  height: 300px;
  margin-left: 210px;
  margin-right: 190px;
  background-color: rgba(255, 0, 0, .5);
}

.sub {
  float: left;
  width: 200px;
  height: 300px;
  margin-left: -100%;
  background-color: rgba(0, 255, 0, .5);
}

.extra {
  float: left;
  width: 180px;
  height: 300px;
  margin-left: -180px;
  background-color: rgba(0, 0, 255, .5);
}
</style>
```




