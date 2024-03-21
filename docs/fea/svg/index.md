---
nav:
  title: 前端
  path: /fea
toc: content
group:
  title: 💊 SVG
  order: 1
  path: /svg
---

## 基本介绍

```jsx
import React from 'react';

export default () => {
  return (
    <div>
      <svg x="0px" y="0px" width="500px" height="360px" viewBox="0 0 500 100">
        <rect
          x="10"
          y="5"
          fill="white"
          stroke="green"
          width="90"
          height="90"
        ></rect>
        <circle cx="170" cy="50" r="45" fill="black" stroke="red"></circle>
        <line
          fill="none"
          stroke="black"
          x1="230"
          y1="6"
          x2="260"
          y2="95"
        ></line>
        <ellipse cx="400" cy="50" rx="60" ry="30" />
        <g>
          <path
            id="svg_5"
            d="m148.60774,139.10039c28.24222,-69.1061 138.89615,0 0,88.8507c-138.89615,-88.8507 -28.24222,-157.9568 0,-88.8507z"
            fill-opacity="null"
            stroke-opacity="null"
            stroke-width="1.5"
            stroke="#000"
            fill="red"
          />
          <path
            id="svg_6"
            d="m265.00089,146.09396l19.88082,-21.09307l21.11909,22.40665l21.11909,-22.40665l19.88101,21.09307l-21.11909,22.40684l21.11909,22.40684l-19.88101,21.09326l-21.11909,-22.40684l-21.11909,22.40684l-19.88082,-21.09326l21.11891,-22.40684l-21.11891,-22.40684z"
            fill-opacity="null"
            stroke-opacity="null"
            stroke-width="1.5"
            stroke="#000"
            fill="#ccc"
          />
        </g>
      </svg>
    </div>
  );
};
```

## 基础动画案例

<!-- <code src="./demos/ok.tsx" ></code> -->
