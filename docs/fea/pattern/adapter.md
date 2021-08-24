---
nav:
  title: 前端
  path: /fea
group:
  title: 设计模式
  order: 4
---

## 适配器模式

```js
import react from 'react';

class Adapter {
    constructor(config) {
        if (!config || typeof config === 'object') {
            return this.reLoad(config)
        } else {
            throw new Error('传递的参数必须为一个对象！')
        }
    }

    reLoad(arr) {
        let newObj = {}

        for (let i = 0; i < arr.length; i++) {
            const item = arr[i]
            newObj[item.name] = item.age
        }
        return newObj
    }
}

let aer = new Adapter([{name: 'david', age: 2}])
// => {david: 2}
```