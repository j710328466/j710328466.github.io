---
nav:
  title: 面试
  path: /interview
toc: content
title: TypeScript
group:
  title: 前端
  order: 8
---

目前市面上比较流行的 js 的超集，目的是为了让 js 更加的严格，向强类型的语言看齐，同时为了后期维护上的便利。

## interface 和 type 的区别

interface 更偏向结构定义，type 更偏向数据之间的关系

1. 两者继承的方式不同

```js
interface App extends Module {}

type App = Module & { name: string };
```

2. type 可以声明基本数据类型、联合类型、元祖类型，interface 不能

```js
type Name = string;

type Pet = Dog | Cat;

type PetList = [Dog, Cat];
```

3. type 可以使用 typeof 获取类型，interface 不行

```js
const Name = 'nicenote';

type Iname = typeof Name;
```
