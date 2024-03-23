---
nav:
  title: 技巧
  path: /skill
  order: 5
toc: content
title: Node
group:
  title: 前端
  order: 8
---

## ESM 和 CJS 的区别

### ESM

1. ESM 模块是引用（import），重新赋值会报错，不能改变指针指向，但是可以改变内部的值
2. import 是只读引用
3. ESM 引用是动态引用

### CJS

1. CJS 是属于浅拷贝，可以重新赋值，可以修改指针
2. 对于基本数据类型属于复制
3. 复杂数据类型属于浅拷贝，由于两个模块指向同一个内存空间，因此对一个模块的改变会影响另一个模块

### 简单讲下 node 的使用场景

- 高并发，聊天，实时消息推送

### node 的优点和缺点提出自己的看法

- 优点： node 是基于时间驱动和无阻塞的，所以非常适合处理并发请求，因此构建在 node 上的代理服务器相比其他技术实现的服务器表现要好的多，与 node 代理服务器交互的客户端代码也是用 js 写的，用的相同的语言，这感觉前后端非常亲切和美妙
- 缺点： node 是一个相对比较新的开源项目，所以不太稳定，它总是在变，而且缺少足够多的第三方库的支持

### AMD CMD CommonJS

#### Common.js

```html
主要是服务端，前期的nodejs采用了这种规范。module.exports或exports负责对外暴漏数据，require来引入

<!--a.js-->
module.exports = { name: '四大名将' }
<!--也可以用exports导出-->
<!--export.name = '四大名将'-->

<!--b.js-->
const res = require('./a.js') console.log(res.name) // 四大名将
```

#### AMD: 加载完成后执行

```html
客户端加载时需要等待，可能存在假死情况，鉴于浏览器的特殊情况，AMD规范出来了，
它采用异步方式加载模块定义的所有依赖，在依赖加载完成后再执行回调函数。

<!-- 定义模块 -->
<!-- AMD中require的模块会先加载完成 依赖前置 提前执行 -->
define('module', ['dep1', 'dep2'], function(dep1, dep2){ 　　function foo(){
dep1.doSomething(); dep2.doSomething(); 　　} 　　return { 　　　　foo : foo
　　}; })

<!-- 数组中声明需要加载的模块，可以是模块名、js文件路径 -->
<!-- 两个参数：加载的模块，加载成功后的回调函数 -->
require(['module'], function(module){ module.foo() });
```

#### CMD：require 到依赖才执行

```html
CMD规范在2011年由seaJS提出，CMD规范和AMD规范类似，主要区别是CMD规范是就近加载依赖，
延迟执行，只有到require时依赖才执行。

<!-- a.js -->
define(function(require, exports, module) { function foo(){
<!-- require的模块此时才会执行 依赖就近 延迟执行 而AMD中依赖是前置的 一开始就全都执行完毕了  -->
var dep1 = require('dep1') dep1.doSomething(); 　} 　<!--暴漏给外部调用-->
　exports.foo = foo 　 　/** return或者exports都行 　return { 　 foo : foo 　};
　**/ });
<!-- b.js -->
seajs.use("./a", function(a){ a.foo() });
```
