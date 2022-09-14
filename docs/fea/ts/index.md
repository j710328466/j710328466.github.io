---
nav:
  title: 前端
  path: /fea
group:
  title: 💊 TypeScript
  order: 3
  path: /ts
---

# 💊 TypeScript

## 简介

为了弥补 JavaScript 的缺点，将 js 从弱类型的语言优化为强类型的语言，让代码类型定义更加严谨，方便后期大型多人项目的维护，减低成本。

## 基础

### 类型断言

```ts
interface Cat {
  eat: void;
  name: string;
}

interface Dog {
  name: string;
  speak: void;
}

function isDog(animal: Dog | Cat) {
  if (typeof (animal as Dog).speak === 'function') {
    return true;
  }
  return false;
}
```

### 声明文件

#### 语法索引

1. declare var 声明全局变量
2. declare function 声明全局方法
3. declare class 声明全局类
4. declare enum 声明全局枚举类型
5. declare namespace 声明（含有子属性的）全局对象
6. interface 和 type 声明全局类型
7. export 导出变量
8. export namespace 导出对象
9. export as namespace UMD 库声明全局变量
10. declare global 扩展全局变量
11. declare module 扩展模块

## 进阶

### 泛型

#### 泛型约束

```ts
// 案例1
interface LengthWise {
  length: number;
}

function loggingIdentity<T extends LengthWise>(arg: T): T {
  console.log(arg.length);
  return arg;
}

// 案例2
function copyFields<T extends U, U>(target: T, source: U): T {
  for (let id in source) {
    target[id] = (<T>source)[id];
  }
  return target;
}

let x = { a: 1, b: 2, c: 3, d: 4 };

copyFields(x, { b: 10, d: 20 });
```

#### 泛型接口

```ts
interface CreateArrayFunc {
  <T>(length: number, value: T): Array<T>;
}

let createArray: CreateArrayFunc;
createArray = function <T>(length: number, value: T): Array<T> {
  let result: T[] = [];

  for (let i = 0; i < length; i++) {
    result[i] = value;
  }
  return result;
};

createArray<string>(3, 'x'); // -> ['x', 'x', 'x']
```

#### 泛型类

```ts
class GenericNumber<T> {
  ZeroValue: T;
  add: (x: T, y: T) => T;
}

let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function (x: number, y: number) {
  return x + y;
};
```

### 类与接口

#### 类实现接口

```ts
interface Alarm {
  alert(): void;
}

interface Light {
  lightOn(): void;
  lightOff(): void;
}

// 写法一
class Car extends Door implements Alarm {
  alert() {
    console.log('SecurityDoor alert');
  }
}

// 写法二、
// 一个类多个接口
class Car implements Alarm, Light {
  alert() {
    console.log('Car alert');
  }
  lightOn() {
    console.log('Car lightOn');
  }
  lightOff() {
    console.log('Car lightOff');
  }
}
```

## 参考资料

1. [Type Search](https://www.typescriptlang.org/dt/search?search=)
2. [quick Type：自动生成 Type](https://app.quicktype.io)
3. [ts playground: 线上编写测试代码](https://www.typescriptlang.org/zh/play)
