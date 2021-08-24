---
nav:
  title: 前端
  path: /fea
group:
  title: canvas
  order: 1
---

## 基础入门

### 矩形

```jsx
import React, { useRef, useEffect } from 'react';

export default () => {
    const canvasRef = useRef()

    /**
     *  绘制矩形
     *  fillRect(x, y, w, h) 填充矩形
     *  strokeRect(x, y, w, h) 边框矩形
     *  clearRect(x, y, w, h) 清除指定区域
     */
    function fillRect() {
        let canvas = canvasRef.current
        let ctx = canvas.getContext('2d')

        // 实心矩形
        ctx.fillStyle = 'red'
        ctx.fillRect(25, 25, 50, 50)

        // 空心矩形
        ctx.lineWidth = 1
        ctx.fillStyle = 'black'
        ctx.strokeRect(75, 75, 50, 50)

        // 清除区域
        ctx.clearRect(50, 50, 50, 50)
    }

    useEffect(() => {
        fillRect()
    }, [])

    return (
        <div>
            <canvas ref={canvasRef} width="200" height="200" />
        </div>
    )
}
```

### 三角形

```jsx
import React, { useRef, useEffect } from 'react';

export default () => {
    const canvasRef = useRef()

    /**
     *  绘制三角形
     */
    function tri() {
        let canvas = canvasRef.current
        let ctx = canvas.getContext('2d')

        // 实心三角形
        ctx.beginPath()
        ctx.moveTo(90, 25)
        ctx.lineTo(25, 90)
        ctx.lineTo(155, 90)
        ctx.fill()

        ctx.beginPath()
        ctx.moveTo(90, 155)
        ctx.lineTo(25, 90)
        ctx.lineTo(155, 90)
        ctx.closePath()
        ctx.stroke()
    }

    useEffect(() => {
        tri()
    }, [])

    return (
        <div>
            <canvas ref={canvasRef} width="200" height="200" />
        </div>
    )
}
```

### 绘制圆弧

```jsx
import React, { useRef, useEffect } from 'react';

export default () => {
    const canvasRef = useRef()

    // 绘制圆弧
    function drawArc() {
        let canvas = canvasRef.current
        let ctx = canvas.getContext('2d')

        let x = 90,
            y = 90,
            r = 30,
            startAngle = 0,
            endAngle = (Math.PI / 180) * 180

        ctx.beginPath()
        ctx.arc(x, y, r, startAngle, endAngle, false)
        ctx.fill()

        ctx.beginPath()
        ctx.arc(x, y, r, startAngle, endAngle, true)
        ctx.stroke()
    }

    useEffect(() => {
        drawArc()
    }, [])

    return (
        <div>
            <canvas ref={canvasRef} width="200" height="200" />
        </div>
    )
}
```

### 绘制贝塞尔曲线

```jsx
import React, { useRef, useEffect } from 'react';

export default () => {
    const canvasRef = useRef()

    /**
     *  quadraticCurveTo(cp1x, cp1y, x, y) cp1 为控制点
     *  bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y) cp1、cp2 为控制点
     *  x、y 为结束点
     */
    function bezier() {
        let canvas = canvasRef.current
        let ctx = canvas.getContext('2d')

        // 二次贝塞尔曲线
        ctx.beginPath()
        ctx.moveTo(30, 90)
        ctx.quadraticCurveTo(15, 15, 90, 30)
        ctx.quadraticCurveTo(165, 15, 150, 90)
        ctx.quadraticCurveTo(148, 130, 70, 120)
        ctx.quadraticCurveTo(65, 140, 40, 140)
        ctx.quadraticCurveTo(65, 135, 55, 120)
        ctx.quadraticCurveTo(30, 115, 30, 90)
        ctx.stroke()

        ctx.font = '18px bold 黑体'
        ctx.fillStyle = 'black'
        ctx.fillText('聊天框', 120, 160)

    }

    useEffect(() => {
        bezier()
    }, [])

    return (
        <div>
            <canvas ref={canvasRef} width="200" height="200" />
        </div>
    )
}
```

### 绘制三次贝塞尔曲线

```jsx
import React, { useRef, useEffect } from 'react';

export default () => {
    const canvasRef = useRef()

    /**
     * 绘制三次贝塞尔曲线
     *
     */
    function beziers() {
        let canvas = canvasRef.current
        let ctx = canvas.getContext('2d')

        // 三次贝塞尔曲线
        ctx.beginPath()
        ctx.moveTo(90, 40)
        ctx.bezierCurveTo(90, 36, 70, 25, 50, 25)
        ctx.bezierCurveTo(20, 25, 20, 62.5, 20, 62.5)
        ctx.bezierCurveTo(20, 80, 40, 120, 90, 140)
        ctx.bezierCurveTo(110, 135, 155, 110, 160, 62.5)
        ctx.bezierCurveTo(160, 22, 140, 25, 130, 25)
        ctx.bezierCurveTo(120, 25, 110, 30, 90, 40)
        ctx.fillStyle = 'red'
        ctx.fill()

        ctx.font = '18px bold 黑体'
        ctx.fillStyle = 'black'
        ctx.fillText('爱心', 120, 160)
    }

    useEffect(() => {
        beziers()
    }, [])

    return (
        <div>
            <canvas ref={canvasRef} width="200" height="200" />
        </div>
    )
}
```

### 绘制笑脸

```jsx
import React, { useRef, useEffect } from 'react';

export default () => {
    const canvasRef = useRef()

    /**
     *  绘制笑脸
     *
     */
    function fillSmile() {
        let canvas = canvasRef.current
        let ctx = canvas.getContext('2d')

        ctx.beginPath()
        ctx.arc(75, 75, 50, 0, Math.PI * 2, true)
        ctx.moveTo(110, 75)
        ctx.arc(75, 75, 35, 0, Math.PI, false)
        ctx.moveTo(65, 65)
        ctx.arc(60, 65, 5, 0, Math.PI * 2, true)
        ctx.moveTo(95, 65)
        ctx.arc(90, 65, 5, 0, Math.PI * 2, true)
        ctx.stroke()

        ctx.font = '18px bold 黑体'
        ctx.fillStyle = 'black'
        ctx.fillText('笑脸', 120, 160)
    }


    useEffect(() => {
        fillSmile()
    }, [])

    return (
        <div>
            <canvas ref={canvasRef} width="200" height="200" />
        </div>
    )
}
```

### 吃豆人

```jsx
import React, { useRef, useEffect } from 'react';

export default () => {
    const canvasRef = useRef()

    /**
     * 吃豆人
     *
     */
    function bean() {
        let canvas = canvasRef.current
        let ctx = canvas.getContext('2d')

        // 外墙
        _roundedRect(ctx, 12, 12, 160, 160, 15)
        _roundedRect(ctx, 18, 18, 148, 148, 9)
        // 内墙
        _roundedRect(ctx, 45, 50, 45, 30, 6)
        _roundedRect(ctx, 115, 50, 45, 30, 6)
        _roundedRect(ctx, 115, 110, 45, 50, 6)
        _roundedRect(ctx, 45, 110, 45, 25, 6)

        // 绘制吃豆人
        ctx.beginPath()
        ctx.arc(35, 35, 10, Math.PI / 7, -Math.PI / 7, false)
        ctx.lineTo(31, 37)
        ctx.fill()

        // 绘制魔鬼
        ctx.beginPath()
        ctx.moveTo(83, 116)
        ctx.lineTo(83, 102)
        ctx.bezierCurveTo(83, 94, 89, 88, 97, 88)
        ctx.bezierCurveTo(105, 88, 111, 94, 111, 102)
        ctx.lineTo(111, 116)
        ctx.lineTo(106.3, 111.3)
        ctx.lineTo(97.3, 111)
        ctx.lineTo(92, 116)
        ctx.lineTo(87, 111)
        ctx.lineTo(83, 116)
        ctx.fill()

        // 绘制小点
        for (let i = 0; i < 7; i++) {
            ctx.fillRect(52 + i * 16, 35, 4, 4)
        }

        // 绘制小点
        for (let i = 0; i < 7; i++) {
            ctx.fillRect(28, 52 + i * 16, 4, 4)
        }

        // 绘制小点
        for (let i = 0; i < 7; i++) {
            ctx.fillRect(100, 52 + i * 16, 4, 4)
        }

        // 绘制小点
        for (let i = 0; i < 8; i++) {
            ctx.fillRect(44 + i * 16, 92, 4, 4)
        }

        // 绘制小点
        for (let i = 0; i < 3; i++) {
            ctx.fillRect(44 + i * 16, 148, 4, 4)
        }

        ctx.fillStyle = 'white'
        ctx.beginPath()
        ctx.moveTo(91, 96)
        ctx.bezierCurveTo(88, 96, 87, 99, 87, 101)
        ctx.bezierCurveTo(87, 103, 88, 106, 91, 106)
        ctx.bezierCurveTo(94, 106, 95, 103, 95, 101)
        ctx.bezierCurveTo(95, 99, 94, 96, 91, 96)
        ctx.moveTo(103, 96)
        ctx.bezierCurveTo(100, 96, 99, 99, 99, 101)
        ctx.bezierCurveTo(99, 103, 100, 106, 103, 106)
        ctx.bezierCurveTo(106, 106, 107, 103, 107, 101)
        ctx.bezierCurveTo(107, 99, 106, 96, 103, 96)
        ctx.fill()

        // 右眼
        ctx.fillStyle = 'blue'
        ctx.beginPath()
        ctx.arc(101, 102, 2, 0, Math.PI * 2, true)
        ctx.fill()
        // 左眼
        ctx.beginPath()
        ctx.arc(89, 102, 2, 0, Math.PI * 2, true)
        ctx.fill()

        ctx.font = '18px bold 黑体'
        ctx.fillStyle = 'black'
        ctx.fillText('吃豆人', 180, 180)

        ctx.clearRect(150, 0, 100, 200)

        /**
         * 绘制圆角矩形的函数
         *
         * @param {*} ctx 画笔
         * @param {*} x x 坐标
         * @param {*} y y 坐标
         * @param {*} w 宽
         * @param {*} h 高
         * @param {*} r 半径
         */
        function _roundedRect(ctx, x, y, w, h, radius) {
            ctx.beginPath();
            ctx.moveTo(x, y + radius);
            ctx.lineTo(x, y + h - radius);
            ctx.quadraticCurveTo(x, y + h, x + radius, y + h);
            ctx.lineTo(x + w - radius, y + h);
            ctx.quadraticCurveTo(x + w, y + h, x + w, y + h - radius);
            ctx.lineTo(x + w, y + radius);
            ctx.quadraticCurveTo(x + w, y, x + w - radius, y);
            ctx.lineTo(x + radius, y);
            ctx.quadraticCurveTo(x, y, x, y + radius);
            ctx.stroke();
        }
    }


    useEffect(() => {
        bean()
    }, [])

    return (
        <div>
            <canvas ref={canvasRef} width="200" height="200" />
        </div>
    )
}
```

```js




```

