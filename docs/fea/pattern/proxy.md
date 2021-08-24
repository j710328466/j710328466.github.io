---
nav:
  title: 前端
  path: /fea
group:
  title: 设计模式
  order: 5
---

## 代理模式

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