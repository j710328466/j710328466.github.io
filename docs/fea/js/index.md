---
nav:
  title: 前端
  path: /fea
toc: content
group:
  title: 💊 JavaScript
  order: 2
  path: /js
---

# 💊 JavaScript

## 深拷贝 VS 浅拷贝

> 区别：浅拷贝只拷贝一层，深拷贝无限层级拷贝

### 浅拷贝（方案 1）

遍历

```js
function shallowClone(source) {
  var target = {};
  for (var i in source) {
    if (source.hasOwnProperty(i)) {
      target[i] = source[i];
    }
  }

  return target;
}
```

### 深拷贝（方案 1）

遍历 + 递归

**该方法出现的问题是：爆栈。当层级太深的时候会发生**

```js
function isObject(x) {
  return Object.prototype.toString.call(x) === '[object Object]';
}

function deepClone(source) {
  if (!isObject(source)) return source;

  var target = {};
  for (var i in source) {
    if (source.hasOwnProperty(i)) {
      if (typeof source[i] === 'object') {
        target[i] = deepClone(source[i]); // 注意这里
      } else {
        target[i] = source[i];
      }
    }
  }

  return target;
}
```

### 深拷贝（方案 2）

```js
function cloneJSON(source) {
  return JSON.parse(JSON.stringify(source));
}
```
