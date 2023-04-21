---
toc: content
title: css 基础
order: 0
group:
  title: css
---

## 基础介绍

## 布局

### 绝对定位法

> 左右两栏采用绝对定位，中间的由两边的 margin 撑开

```html
<body>
  <div id="main"></div>
  <div id="left"></div>
  <div id="right"></div>
</body>

#main { margin:0 200px; background:red; } #left{ position:absolute;
top:0;left:0; width:200px; background:blue; height:100%; } #right{
position:absolute; top:0;right:0; width:200px; background:green; height:100%; }
```

这种布局缺点是，当缩放到一定大小的时候，会出现重叠现象

### 自身浮动法

> 左栏左浮动，右栏右浮动，中间栏放最后

```html
<body>
  <div id="left"></div>
  <div id="right"></div>
  <div id="main"></div>
</body>
　 #main {margin:0 200px;background:red;}
#left{float:left;width:200px;background:blue;height:100%;}
#right{float:right;width:200px;background:green;height:100%;}
```

简单而高效，代码还容易理解，适合初学者

### 圣杯布局

```html
//注意元素次序
<div class="main">Main</div>
<div class="left">Left</div>
<div class="right">Right</div>

//习惯性的CSS reset body,html{ height:100%; padding: 0; margin: 0 }
//父元素body空出左右栏位 body { padding-left: 100px; padding-right: 200px; }
//左边元素更改 .left { background: red; width: 100px; float: left; margin-left:
-100%; position: relative; left: -100px; height: 100%; } //中间部分 .main {
background: blue; width: 100%; height: 100%; float: left; } //右边元素定义
.right { background: red; width: 200px; height: 100%; float: left; margin-left:
-200px; position: relative; right: -200px; }
```

稍微难理解一点，不过这种布局目前我觉得是适配性比其他两种要好的布局方式，缺点是后期维护性不高

### 双飞翼布局

```html
div class="main">
    <div class="inner">
        Main
    </div>
</div>
<div class="left">Left</div>
<div class="right">Right</div>
```

> css 样式就是将 body 上的左右 margin 值去掉，加在新增的 div 中

这种布局方式为淘宝 UED 提出，目前最好用的一种布局方式，相比较圣杯布局，去掉了相对布局，代码更简洁

小记：前两天面试，展现项目过程中经理问我轮播图的原理，我一脸懵逼，因为当时有现成的插件，所以我没怎么去研究，当然，我也知道该来的还是要来的...

首先我大概讲一下，传统轮播图的主要部分：

- 图片（废话）
- 左右两边的 button
- 可以跳转的小点

## 轮播图

- 轮播图的原理就是一个长图，里面有很多张图，外面包一层展示窗口，将属性设置成 overflow：hidden，达到只显示一张的效果，当点击左右两边的按钮时会按照像素来跳转

### 无限滚动

- 我给两个按钮设为 **prev next** 一个在点击后，长图会增加一张图的宽度，一个是减少一个图的宽度,在图片的头和尾部加一张图，结构大概为：

```html
<div id="list" style="left:-200px">
  <img src="./img/5.jpg" alt="" />
  <img src="./img/1.jpg" alt="" />
  <img src="./img/2.jpg" alt="" />
  <img src="./img/3.jpg" alt="" />
  <img src="./img/4.jpg" alt="" />
  <img src="./img/5.jpg" alt="" />
  <img src="./img/1.jpg" alt="" />
</div>
```

当是最后一张图或第一张图时，将第一张上一张跳转为最后一张时的宽，最后一张跳转为第一张时的宽

```javascript
if (newList < -1000) {
  dot = 1;
  list.style.left = -200 + 'px';
}
if (newList > -200) {
  dot = 5;
  list.style.left = -1000 + 'px';
}
```

### 小按钮切换

这要实现的思想有

- 点了小按钮，背景色会变
- 当点击切换到其他按钮，图片切换，且上一个按钮会变回原来的颜色

```javascript
function showBtn() {
  for (var i = 0; i < btns.length; i++) {
    if (btns[i].className == 'show-btn') {
      btns[i].className = '';
      break;
    }
  }
  btns[dot - 1].className = 'show-btn';
}
//遍历数组，将有该属性设为空

for (var i = 0; i < btns.length; i++) {
  btns[i].onclick = function () {
    if (this.className == 'showBtn') {
      return;
    }
    var myIndex = parseInt(this.getAttribute('index'));
    var leng = -200 * (myIndex - dot);
    animate(leng);
    dot = myIndex;
    showBtn();
  };
}
//遍历数组，将每一个小按钮设了个index属性，这里用到 getAttribute 可以获取除了普通style 或 class 之外的一些属性，获取index值，点击时得到当前的index值，正好和当前的dot值相减，可得跳转的距离
```

> 这里要注意的是，当小按钮被重复按的时候，给他一个判断，不然重复点击同一个图标会重复发生相同事件，占内存，耗 cpu

### 延迟动画函数

就是当用户点击时，有一个慢慢偏移的过程，而不是闪现的动作，我们来看看实现原理

- 首先，定义参数

```javascript
var time = 300; //位移总时间
var interval = 10; //位移时间间隔
var speed = leng / (time / interval); //每次位移量，就是一共调用多少次的意思
```

- 设置递归函数

```javascript
if ((speed < 0 && parseInt(list.style.left) > newList) || (speed > 0 && parseInt(list.style.left) < newList)) {
            list.style.left = parseInt(list.style.left) + speed + 'px'
            setTimeout(go, interval)  //递归,调用自身函数
```

- 判断是否仍在动画

如果用户一直在点击切换图时，如果电脑配置不好，或是其他一些因素，可能会轮播卡顿，为了防止这一现象，就用一个判断来看上一次动画是否完成，若未完成就不能继续切换，等到这次动画跳转完为止

```javascript
var animated = false; //设初值

if (!animated) {
  animate(200);
} //如果为false，则继续动画
```

### 自动播放

首先给个思路，当鼠标移入的时候，自动播放停止，移出的时候开始自动播放

- 我们设两个函数，play（） 和 stop（）

```javascript
function play() {
  timer = setTimeout(function () {
    next.onclick();
    play();
  }, interval);
}
function stop() {
  clearTimeout(timer);
}
```

最后给整个 container 容器添加该鼠标事件
