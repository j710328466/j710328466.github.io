---
nav:
  title: 前端
  path: /fea
group:
  title: 💊 设计模式
  order: 7
---

## 策略模式

```js
class CalculateMoney {
    constructor(type, money) {
        this.money = money
        return this.switchStrategy(type, money)
    }

    /**
     * 
     * @param {string} type 类型
     * @param {number} money 金额 
     */
    switchStrategy(type, money) {
        let tp = type.toLocaleLowerCase()
        if (tp === 'a') {
            return this.money = money * 100
        } else if (tp === 'b') {
            return this.money = money * 200
        } else if (tp === 'c') {
            return this.money = money * 300
        } else {
            return this.money = money * 400
        }
    }
}


let calculateMoney = new CalculateMoney('', 10000)
// => 4000000
```