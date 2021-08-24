---
nav:
  title: 前端
  path: /fea
group:
  title: 设计模式
  order: 3
---

## 建造者模式

```js
// 建造者模式 需要优化
export default class Builder {
    constructor() {
        this.name = ''
        this.author = ''
        this.price = 0
        this.category = ''
    }

    withName(name) {
        this.name = name
        return this
    }

    withAuthor(author) {
        this.author = author
        return this
    }

    withPrice(price) {
        this.price = price
        return this
    }

    withCategory(category) {
        this.category = category
        return this
    }

    build() {
        return {
            name: this.name,
            author: this.author,
            price: this.price,
            category: this.category
        }
    }
}
```