---
nav:
  title: 前端
  path: /fea
group:
  title: 💊 设计模式
  order: 5
---

## 代理模式

是为一个对象提供一个代用品或占位符，以便控制对它的访问

### ES5 版

```js
/**
 * 代理模式
 */
export default class ProxyPro {
    constructor(args) {
        return new Proxy(args, {
            get: function (target, key, receiver) {
                // console.log(target, key, receiver);
                console.log(`获取 ${key}`)
                return Reflect.get(target, key, receiver)
            },
            set: function (target, key, value, reciver) {
                console.log(`设置 ${key} 为 ${value}`)
                return Reflect.set(target, key, value, reciver)
            }
        })
    }
}
```

### ES6 版

```js
let Flower = function() {}
let xiaoming = {
  sendFlower: function(target) {
    let flower = new Flower()
    target.receiveFlower(flower)
  }
}
let B = {
  receiveFlower: function(flower) {
    A.listenGoodMood(function() {
      A.receiveFlower(flower)
    })
  }
}
let A = {
  receiveFlower: function(flower) {
    console.log('收到花'+ flower)
  },
  listenGoodMood: function(fn) {
    setTimeout(function() {
      fn()
    }, 1000)
  }
}
xiaoming.sendFlower(B)
```