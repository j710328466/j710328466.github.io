---
nav:
  title: 前端
  path: /fea
group:
  title: 💊 设计模式
  order: 3
---

## 装饰器模式

- 动态地给某个对象添加一些额外的职责，，是一种实现继承的替代方案
- 在不改变原对象的基础上，通过对其进行包装扩展，使原有对象可以满足用户的更复杂需求，而不会影响从这个类中派生的其他对象

```js
class Cellphone {
    create() {
        console.log('生成一个手机')
    }
}
class Decorator {
    constructor(cellphone) {
        this.cellphone = cellphone
    }
    create() {
        this.cellphone.create()
        this.createShell(cellphone)
    }
    createShell() {
        console.log('生成手机壳')
    }
}
// 测试代码
let cellphone = new Cellphone()
cellphone.create()

console.log('------------')
let dec = new Decorator(cellphone)
dec.create()
```