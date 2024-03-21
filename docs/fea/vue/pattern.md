---
nav:
  title: 前端
  path: /fea
toc: content
group:
  title: 💊 Vue
  order: 5
  path: /vue
---

# 💊 Vue

渐进式单页应用框架，作者为华人尤雨溪，又称尤大、尤小右。毕业于建筑设计系（真不知道他的脑回路怎么长的...）

从上手程度来说，属于三大框架里最容易得。另外从 vue2.7 之后的版本支持了组合式开发，开发方式更偏向于 react，对于 react 开发者来说更加友好。（我猜尤大的目的是为了把 react 用户抢过来）

由于我是 react 重度用户，文章大多数会以组合式开发讲解为主，除非有些特殊场景无法实现才会考虑选项式编程。

## 生命周期

和 react 相似的生命周期，可以在这些钩子中注入自己需要的事件，从而改变视图。

### onMounted

在组件挂载后执行，判断是否挂载的依据如下：

1. 所有同步子组件已经被挂载（不包含异步组件与 Suspense）
2. 自身的 DOM 树已经创建并且插入了父容器中。

> 在服务端渲染期间不会被调用。

```js
<script setup>
  import {(ref, onMounted)} from 'vue' const el = ref() onMounted(() =>{' '}
  {el.value})
</script>
```

###

<img src="https://cn.vuejs.org/assets/lifecycle.16e4c08e.png" width="50%" />

## 样例参考

> https://cn.vuejs.org/examples/#hello-world
