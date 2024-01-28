---
nav:
  title: 前端
  path: /fea
group:
  title: 💊 canvas
  order: 4
  path: /canvas
---

## 文字

```jsx
import React, { useRef, useEffect } from 'react';

export default () => {
  const canvasRef = useRef();
  const canvasRef2 = useRef();
  const canvasRef3 = useRef();

  // 填充文本
  function demo1() {
    // 声明DOM
    let canvas = canvasRef.current;
    let ctx = canvas.getContext('2d');

    ctx.shadowOffsetY = 8;
    ctx.shadowOffsetX = 8;
    ctx.shadowBlur = 3;
    ctx.shadowColor = '#ccc';

    ctx.font = '40px serif';
    ctx.fillText('1. 你是个智障!', 50, 50);
  }

  function demo2() {
    let canvas = canvasRef2.current;
    let ctx = canvas.getContext('2d');

    ctx.font = '48px serif';
    ctx.strokeText('2. hello world', 10, 50);
  }

  function demo3() {
    let canvas = canvasRef3.current;
    let ctx = canvas.getContext('2d');

    ctx.font = '40px serif';
    ctx.textBaseline = 'top';
    ctx.textAlign = 'start';
    ctx.strokeText('hello world', 0, 100);
  }

  useEffect(() => {
    demo1();
    demo2();
    demo3();
  }, []);

  return (
    <div>
      <canvas ref={canvasRef} width="500" height="200" />
      <canvas ref={canvasRef2} width="500" height="200" />
      <canvas ref={canvasRef3} width="500" height="200" />
    </div>
  );
};
```

```ts
window.onload = function () {
  demo1();
  demo2();
  demo3();
};
```
