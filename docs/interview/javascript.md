---
nav:
  title: 面试
  path: /interview
group:
  title: 💊 面试题库
  order: 2
---

## JavaScript

### `new` 操作符做了啥？
```html
创建一个空对象，并且this变量引用该对象，同时还继承了 该函数的原型
属性和方法被加入到this引用的对象中
新创建的对象由this所引用，并且最后隐式的返回this
```



### typeof 返回哪些数据类型


- obj num fun bool undefined



### 3种强制类型转换两种隐式类型转换


- parseInt parseFloat number
- == - ===



### 数组方法pop() push() unshift() shift()


- push() 尾部添加 pop() 尾部删除
- unshift() 头部添加 shift() 头部删除



### ajax请求 get 和 post 的区别


- 一个在 url 后面，一个放在虚拟载体里面
- 有大小限制
- 安全问题
- 应用不同



### call 和 apply 的区别


- object.call(this, obj1,obj2,obj3)
- object.apply(this, argument)



### ajax 请求时，如何解析 json 数据


- 使用eval parse，介于安全性考虑 使用parse 更靠谱
- eval 可以解析任何字符串，parse只解析json格式的字符串



### 闭包是什么？


- 闭包就是能够读取其他函数内部变量的函数



### 添加 删除 替换 插入到某个节点的方法


- obj.appendChild()
- obj.innersetBefore()
- obj.replaceChild()
- obj.removeChild()



### javascript 同源策略


- 一段脚本只能读取来自同一来源的穿考核文档的属性，同源：指主机名，协议和端口号的组合



### 编写一个 b 继承 a 的方法


```javascript
  function A(name) {
      this.name = name;
      this.sayHello = function(){alert(this.name+ "say hello!")}
  }

  function B(name, id) {
      this.temp = A
      this.temp(name)
      delete this.temp
      this.id = id
      this.checkId = function(ID) {alert(this.id == ID)}
  }
```


### 如何阻止事件冒泡和默认事件


```javascript
  function stopBubble(e) {
      if (e && e.stopPropagation) {
          e.stopPropgation ()
      } else {
          window.event.cancelBubble = true
      }
      return false
  }
```


### 谈谈this对象的理解


- this 是 js 的一个关键字， 随着函数使用场合不同，this的值会发生变化
- 但是有一个原则，this 指向的就是调用函数的那个对象
- this 一般情况下： 是指全局对象global， 如果作为方法调用，就指向这个对象



### 简单讲下 node 的使用场景


- 高并发，聊天，实时消息推送



### node 的优点和缺点提出自己的看法


- 优点： node是基于时间驱动和无阻塞的，所以非常适合处理并发请求，因此构建在node上的代理服务器相比其他技术实现的服务器表现要好的多，与node代理服务器交互的客户端代码也是用js写的，用的相同的语言，这感觉前后端非常亲切和美妙
- 缺点： node是一个相对比较新的开源项目，所以不太稳定，它总是在变，而且缺少足够多的第三方库的支持


### `location.replace()`与`location.assign()`区别
```html
location.replace() 的 url 不会出现在 history 中
```


### AMD CMD CommonJS


#### Common.js
```html
主要是服务端，前期的nodejs采用了这种规范。module.exports或exports负责对外暴漏数据，require来引入

<!--a.js-->
module.exports = {
    name: '四大名将'
}
<!--也可以用exports导出-->
<!--export.name = '四大名将'-->

<!--b.js-->
const res = require('./a.js')
console.log(res.name) // 四大名将
```


#### AMD: 加载完成后执行
```html
客户端加载时需要等待，可能存在假死情况，鉴于浏览器的特殊情况，AMD规范出来了，
它采用异步方式加载模块定义的所有依赖，在依赖加载完成后再执行回调函数。

<!-- 定义模块 -->
<!-- AMD中require的模块会先加载完成 依赖前置 提前执行 -->
define('module', ['dep1', 'dep2'], function(dep1, dep2){
　　function foo(){
      dep1.doSomething();
      dep2.doSomething();
　　}
　　return {
　　　　foo : foo
　　};
})

<!-- 数组中声明需要加载的模块，可以是模块名、js文件路径 -->
<!-- 两个参数：加载的模块，加载成功后的回调函数 -->
require(['module'], function(module){
    module.foo()
});
```


#### CMD：require 到依赖才执行
```html
CMD规范在2011年由seaJS提出，CMD规范和AMD规范类似，主要区别是CMD规范是就近加载依赖，
延迟执行，只有到require时依赖才执行。

<!-- a.js -->
define(function(require, exports, module) {
  function foo(){
    <!-- require的模块此时才会执行 依赖就近 延迟执行 而AMD中依赖是前置的 一开始就全都执行完毕了  -->
    var dep1 = require('dep1') 
    dep1.doSomething();
　}
　<!--暴漏给外部调用-->
　exports.foo = foo
　
　/** return或者exports都行
　return {
　  foo : foo
　};
　**/
});
<!-- b.js -->
seajs.use("./a", function(a){
  a.foo()
});
```


#### DOM 操作
```html
// 创建节点
createDocumentFragment()
createElement()
createTextNode()

// 添加 移除 替换 插入
appendChild()
removeChild()
replaceChild()
insertBefore()

// 查找
getElementsByTagName()
getElementsByName()
getElementsByClassName()
getElementById()
querySelector()
querySelectorAll()
```


### JS设置css样式的几种方式
```html
/* 1.直接设置style属性 */
element.style.height = '100px';

/* 2.直接设置属性 */
element.setAttribute('height', '100px');

/* 3.使用setAttribute设置style属性 */
element.setAttribute('style', 'height: 100px !important');

/* 4.使用setProperty设置属性，通过第三个参数设置important */
element.style.setProperty('height', '300px', 'important');

/* 5.设置cssText */
element.style.cssText += 'height: 100px !important';
```


### 阻止默认行为
```html
function stopDefault( e ) {
    // 阻止默认浏览器动作(W3C)
    if ( e && e.preventDefault ) {
        e.preventDefault();
    } else {
        // IE中阻止函数器默认动作的方式
        window.event.returnValue = false;
    }
    return false;
}
```


### 阻止冒泡
```html
function stopBubble(e) {
    // 如果提供了事件对象，则这是一个非IE浏览器
    if ( e && e.stopPropagation ) {
        // 因此它支持W3C的stopPropagation()方法
        e.stopPropagation();
    } else {
        // 否则，我们需要使用IE的方式来取消事件冒泡
        window.event.cancelBubble = true;
    }
}
```


### Ajax交互过程
```html
创建XMLHttpRequest对象,也就是创建一个异步调用对象.
创建一个新的HTTP请求,并指定该HTTP请求的方法、URL及验证信息.
设置响应HTTP请求状态变化的函数.
发送HTTP请求.
获取异步调用返回的数据.
使用JavaScript和DOM实现局部刷新.
```
### 考察知识点最广的JS面试题
[https://www.cnblogs.com/xxcanghai/p/5189353.html](https://www.cnblogs.com/xxcanghai/p/5189353.html)
```html
function Foo() {
    getName = function () { alert(1); }
    return this;
}
Foo.getName = function () { alert(2); }
Foo.prototype.getName = function () { alert(3); }
var getName = function () { alert(4); }
function getName () { alert(5); }


/* 写出输出 */
Foo.getName();	3
getName();	5
Foo().getName();	3
getName();	
new Foo.getName();
new Foo().getName();
new new Foo().getName();
```


### JS数组深浅拷贝
#### 浅拷贝
```javascript
// slice 实现
var arr = ['old', 1, true, null, undefined];

var new_arr = arr.slice();

new_arr[0] = 'new';

console.log(arr) // ["old", 1, true, null, undefined]
console.log(new_arr) // ["new", 1, true, null, undefined]

// concat 实现
var arr = ['old', 1, true, null, undefined];

var new_arr = arr.concat();

new_arr[0] = 'new';

console.log(arr) // ["old", 1, true, null, undefined]
console.log(new_arr) // ["new", 1, true, null, undefined]
```


#### 深拷贝
```javascript
// 简单版：不能拷贝 函数、undefined、symbol 、循环引用的对象
var arr = ['old', 1, true, ['old1', 'old2'], {old: 1}];

var new_arr = JSON.parse(JSON.stringify(arr));

new_arr[0] = 'new';
new_arr[3][0] = 'new1';

console.log(arr) // ["old", 1, true, ['old1', 'old2'], {old: 1}]
console.log(new_arr) // ["new", 1, true, ['new1', 'old2'], {old: 1}]

// 复杂版，可以完美拷贝
var deepCopy = function (obj) {
    if (typeof obj !== 'object') {
        return
    }
    var newObj = obj instanceof Array ? [] : {};
    for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
            newObj[key] = typeof obj[key] === 'object' ? deepCopy(obj[key]) : obj[key];
        }
    }
    return newObj
}
```
### 
### 数组去重
```javascript
// filter + indexOf
function unique (arr) {
    var res = arr.filter(function (item, index, array) {
        return array.indexOf(item) === index;
    })
    return res;
}

//filter + sort
function unique (arr) {
    return arr.concat().sort().filter(function (item, index, array) {
        return !index || item !== array[index - 1];
    })
}

// ES6
function uniqu3 (arr) {
    return [... new Set(arr)];
}
```
### 
### 找出数组中的最大值
```javascript
//	reduce
var arr = [6, 4, 1, 8, 2, 11, 3];

function max (prev, next) {
    return Math.max(prev, next)
}

console.log(arr.reduce(max));

//apply
var arr = [6, 4, 1, 8, 2, 11, 3];

console.log(Math.max.apply(null, arr));

//ES6
var arr = [6, 4, 1, 8, 2, 11, 3];

function max (arr) {
    return Math.max(...arr);
}

console.log(max(arr));
```


### 数组扁平化
```javascript
var arr = [1, [2, [3, 4]]];

function flatten(arr) {

    while (arr.some(item => Array.isArray(item))) {
        arr = [].concat(...arr);
    }

    return arr;
}

console.log(flatten(arr))
```


### 数据的基本类型
```javascript
1. symbol 2. string 3. number 4. null 5. boolean 6. undefind
```


### 数据类型判断
> 关键语句：Object.prototype.toString.call(value) => [object ${Boolean Number String Function Array Date RegExp Object Error Null }]

```javascript
var class2type = {};

'Boolean Number String Function Array Date RegExp Object Error Null Undefined'.split(' ').map((item, index) => {
    class2type['[object ' + item + ']'] = item.toLowerCase();
})

function type (obj) {
    return typeof obj === 'object' || typeof obj === 'function' ?
        class2type[{}.toString.call(obj)] || 'object' : typeof obj;
}
```


### typeof 和 instanceof 的区别？
```javascript
typeof 在原始类型中无法判断 null，在对象类型中只能判断 object 和function

instanceof 可以判断对象类型的
```


### 防抖
```javascript
/*
 * func：需要调用的函数
 * wait: 防抖时间
 * immediate：布尔值，是否立即执行
 **/

var debounce = function (func, wait, immediate) {
  var timeout;
  return function () {
    var context = this;
    var args = arguments;

    if (timeout) clearTimeout(timeout);

    if (immediate) {  // 是否立即执行func
      var callNow = !timeout;
      timeout = setTimeout(function () {
        timeout = null;
      }, wait)；

      if (callNow) {
        func.apply(context, args);
      }
    } else {
      timeout = setTimeout(function () {
        func.apply(context, args);
      }, wait);
    }
  }
}
```


### 四则运算符

- 运算中其中一方为字符串，那么就会把另一方也转换为字符串
- 如果一方不是字符串或者数字，那么会将它转换为数字或者字符串



### this

1. 对于直接调用 foo 来说，不管 foo 函数被放在了什么地方，this 一定是 window
1. 对于 obj.foo() 来说，我们只需要记住，谁调用了函数，谁就是 this，所以在这个场景下 foo 函数中的 this 就是 obj 对象
1. 对于 new 的方式来说，this 被永远绑定在了 c 上面，不会被任何方式改变 this



#### 箭头函数

1. this 指向只取决于包裹箭头函数的第一个普通函数的 this
1. 无法改变箭头函数的指向

![image.png](https://cdn.nlark.com/yuque/0/2021/png/195884/1614671081418-6763bc83-d880-4fd8-bc4a-9a0fd7c9b37a.png#height=266&id=wUqbd&margin=%5Bobject%20Object%5D&name=image.png&originHeight=531&originWidth=744&originalType=binary&ratio=1&size=52754&status=done&style=none&width=372)



### ‘==’ 和 ‘===’ 有什么区别


== 对比类型不一样会进行类型转换，而 ’===‘ 不会，下图为 ’==‘ 的判断步骤：


![image.png](https://cdn.nlark.com/yuque/0/2021/png/195884/1614671598823-453786ce-91c2-49b5-b163-54a48d04cba3.png#height=213&id=M1Zdy&margin=%5Bobject%20Object%5D&name=image.png&originHeight=426&originWidth=1005&originalType=binary&ratio=1&size=139062&status=done&style=none&width=502.5)


### 什么是闭包？
定义：函数 A 中有一个函数 B，函数 B 可以访问 A 的变量，那么函数 B 就是闭包。


#### 循环中使用闭包解决 `var` 定义函数的问题
```javascript
方法1
for (var i = 1; i <= 5; i++) {
  ;(function(j) {
    setTimeout(function timer() {
      console.log(j)
    }, j * 1000)
  })(i)
}

方法2：使用 setTimeout 的第二个参数
for (var i = 1; i <= 5; i++) {
  setTimeout(
    function timer(j) {
      console.log(j)
    },
    i * 1000,
    i
  )
}

方法3：使用 let
```


### 如何理解原型？如何理解原型链？

1. 每一个对象都有__proto__这是浏览器早期为了让我们能访问 prototype。
1. _ _proto__ 的 constructor（构造函数）里面有 prototype。
1. _ _proto__ 下面有几个方法：hasOwnProperty 、toString、toLocalString、valueOf、isPrototypeOf
1. 原型的 `constructor` 属性指向构造函数，构造函数又通过 `prototype` 属性指回原型，但是并不是所有函数都具有这个属性，`Function.prototype.bind()` 就没有这个属性。

![image.png](https://cdn.nlark.com/yuque/0/2021/png/195884/1614672195095-a2925383-5cea-4442-ab8f-9da417245a88.png#height=202&id=YndLA&margin=%5Bobject%20Object%5D&name=image.png&originHeight=404&originWidth=581&originalType=binary&ratio=1&size=130211&status=done&style=none&width=290.5)


## 十大错误
### 1. Uncaught TypeError: Cannot read property


发生这种情况的原因很多，但常见的一种是在渲染 UI 组件时对于状态的初始化操作不当。


### 2. TypeError: ‘undefined’ is not an object


这是在 Safari 中读取属性或调用未定义对象上的方法时发生的错误。这与 1 中提到的 Chrome 的错误基本相同，但 Safari 使用了不同的错误消息提示语。


### 3. TypeError: null is not an object


这是在 Safari 中读取属性或调用空对象上的方法时发生的错误。


> 在 JavaScript 中，null 和 undefined 是不一样的，这就是为什么我们看到两个不同的错误信息。undefined 通常是一个尚未分配的变量，而 null 表示该值为空。 要验证它们不相等，请尝试使用严格的相等运算符 ===



### 4. (unknown): Script error


当未捕获的 JavaScript 错误（通过window.onerror处理程序引发的错误，而不是捕获在try-catch中）被浏览器的跨域策略限制时，会产生这类的脚本错误。这是一种浏览器安全措施，旨在防止跨域传递数据，否则将不允许进行通信。


### 5. TypeError: Object doesn’t support property


这是您在调用未定义的方法时发生在 IE 中的错误。 您可以在 IE 开发者控制台中进行测试。


### 6. TypeError: ‘undefined’ is not a function


当您调用未定义的函数时，这是 Chrome 中产生的错误。


### 7. Uncaught RangeError: Maximum call stack


这是 Chrome 在一些情况下会发生的错误。 一个是当你调用一个不终止的递归函数。


### 8. TypeError: Cannot read property ‘length’


这是 Chrome 中发生的错误，因为读取未定义变量的长度属性。


### 9. Uncaught TypeError: Cannot set property


当我们尝试访问一个未定义的变量时，它总是返回 undefined，我们不能获取或设置任何未定义的属性。 在这种情况下，应用程序将抛出 “Uncaught TypeError: Cannot set property”。


### 10. ReferenceError: event is not defined


当您尝试访问未定义的变量或超出当前范围的变量时，会引发此错误。
