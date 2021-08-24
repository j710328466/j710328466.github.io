---
nav:
  title: 前端
  path: /fea
group:
  title: canvas
  order: 2
---

## 颜色

```jsx
import React, { useRef, useEffect } from 'react';

export default () => {
    const canvasRef = useRef()
    const canvasRef2 = useRef()
    const canvasRef3 = useRef()
    const canvasRef4 = useRef()
    const canvasRef5 = useRef()
    const canvasRef6 = useRef()
    const canvasRef7 = useRef()
    const canvasRef8 = useRef()
    const canvasRef9 = useRef()
    const canvasRef10 = useRef()
    const canvasRef11 = useRef()
    const canvasRef12 = useRef()

    function demo1() {
        let canvas = canvasRef.current
        let ctx = canvas.getContext('2d')

        for (let i = 0; i < 6; i++) {
            for (let j = 0; j < 6; j++) {
                ctx.fillStyle = `rgb(${Math.floor(255 - 42.5 * i)}, ${Math.floor(255 - 42.5 * j)}, 0)`
                ctx.fillRect(j * 25, i * 25, 25, 25)
            }
        }
    }

    function demo2() {
        let canvas = canvasRef2.current
        let ctx = canvas.getContext('2d')

        for (let i = 0; i < 6; i++) {
            for (let j = 0; j < 6; j++) {
                ctx.strokeStyle = `rgb(${Math.floor(255 - 42.5 * i)}, ${Math.floor(255 - 42.5 * j)}, 0)`
                ctx.beginPath()
                ctx.arc(12.5 + j * 25, 12.5 + i * 25, 10, 0, Math.PI * 2, true)
                ctx.stroke()
            }
        }
    }

    function demo3() {
        let canvas = canvasRef3.current
        let ctx = canvas.getContext('2d')

        ctx.fillStyle = '#fd0'
        ctx.fillRect(0, 0, 75,75)
        ctx.fillStyle = '#6c0'
        ctx.fillRect(75, 0, 75, 75)
        ctx.fillStyle = '#09f'
        ctx.fillRect(0, 75, 75, 75)
        ctx.fillStyle = '#f30'
        ctx.fillRect(75, 75, 75, 75)

        ctx.fillStyle = '#fff'
        ctx.globalAlpha = 0.2

        for (let i = 0; i < 6; i++) {
            ctx.beginPath()
            ctx.arc(75, 75, 10 + 10 * i, 0, Math.PI * 2, true)
            ctx.fill()
        }
    }

    function demo4() {
        let canvas = canvasRef4.current
        let ctx = canvas.getContext('2d')

        ctx.fillStyle = 'rgb(255, 221, 0)'
        ctx.fillRect(0, 0, 200, 50)
        ctx.fillStyle = 'rgb(102, 204, 0)'
        ctx.fillRect(0, 50, 200, 50)
        ctx.fillStyle = 'rgb(0, 153, 255)'
        ctx.fillRect(0, 100, 200, 50)
        ctx.fillStyle = 'rgb(255, 51, 0)'
        ctx.fillRect(0, 150, 200, 50)

        for (let i = 0; i < 10; i++) {
            ctx.fillStyle = `rgba(255, 255, 255, ${(i + 1) / 10})`
            for (let j = 0; j < 4; j++) {
                ctx.fillRect(10 + 18 * i, 5 + j * 50, 18, 40)
            }
        }
    }

    function demo5() {
        let canvas = canvasRef5.current
        let ctx = canvas.getContext('2d')

        for (let i = 0; i < 10; i++) {
            ctx.lineWidth = 1 + i
            ctx.beginPath()
            ctx.moveTo(5.5 + i * 14, 5.5)
            ctx.lineTo(5.5 + i * 14, 140.5)
            ctx.stroke()
        }
    }

    function demo6() {
        let canvas = canvasRef6.current
        let ctx = canvas.getContext('2d')
        let lineCap = ['butt', 'round', 'square']

        ctx.strokeStyle = '#09f'
        ctx.beginPath()
        ctx.moveTo(10, 20)
        ctx.lineTo(140, 20)
        ctx.moveTo(10, 130)
        ctx.lineTo(140, 130)
        ctx.stroke()

        ctx.strokeStyle = 'black'
        for (let i = 0; i < lineCap.length; i++) {
            ctx.lineWidth = 15
            ctx.lineCap = lineCap[i]
            ctx.beginPath()
            ctx.moveTo(25 + i * 50, 20)
            ctx.lineTo(25 + i * 50, 130)
            ctx.stroke()
        }
    }

    /**
     *  round 圆角线段
     *  bevel 不让线段超过最大
     */
    function demo7() {
        let canvas = canvasRef7.current
        let ctx = canvas.getContext('2d')
        let lineJoin = ['round', 'bevel', 'miter']

        ctx.lineWidth = 10
        for (let i = 0; i < lineJoin.length; i++) {
            ctx.lineJoin = lineJoin[i]
            ctx.beginPath()
            ctx.moveTo(-5, 5 + i * 40)
            ctx.lineTo(35, 45 + i * 40)
            ctx.lineTo(75, 5 + i * 40)
            ctx.lineTo(115, 45 + i * 40)
            ctx.lineTo(155, 5 + i * 40)
            ctx.stroke()
        }
    }

    /**
     *  setLineDash 虚线交替样式
     *  lineDashOffset 偏移量
     */
    function demo8() {
        let canvas = canvasRef8.current
        let ctx = canvas.getContext('2d')
        let offset = 0

        function march() {
            offset++

            if (offset > 16) {
                offset = 0
            }
            _draw()
            setTimeout(march, 50)
        }

        function _draw() {
            ctx.clearRect(0, 0, canvas.width, canvas.height)
            ctx.lineWidth = 2
            ctx.setLineDash([4, 2])
            ctx.lineDashOffset = -offset
            ctx.strokeRect(10, 10, 100, 100)
        }
        
        march()
    }

    function demo9() {
        let canvas = canvasRef9.current
        let ctx = canvas.getContext('2d')

        let lineargradient = ctx.createLinearGradient(0, 0, 0, 150)
        lineargradient.addColorStop(0, '#00abeb')
        lineargradient.addColorStop(0.5, '#fff')
        lineargradient.addColorStop(0.5, '#26c000')
        lineargradient.addColorStop(1, '#fff')

        let radialgradient = ctx.createLinearGradient(0, 50, 0, 95)
        radialgradient.addColorStop(0.5, '#000')
        radialgradient.addColorStop(1, 'rgba(0, 0, 0, 0')

        ctx.fillStyle = lineargradient
        ctx.strokeStyle = radialgradient

        ctx.fillRect(10, 10, 130, 130)
        ctx.strokeRect(50, 50, 50, 50)
    }

    function demo10() {
        let canvas = canvasRef10.current
        let ctx = canvas.getContext('2d')

        let radgrad = ctx.createRadialGradient(45, 50, 10, 52, 50, 30)
        radgrad.addColorStop(0, '#a7d30c')
        radgrad.addColorStop(0.9, '#019f62')
        radgrad.addColorStop(1, 'rgba(1, 159, 98, 0')

        let radgrad2 = ctx.createRadialGradient(105, 105, 20, 112, 120, 50)
        radgrad2.addColorStop(0, '#fff')
        radgrad2.addColorStop(0.75, '#ff0188')
        radgrad2.addColorStop(1, 'rgba(255, 1, 136, 0)')

        let radgrad3 = ctx.createRadialGradient(0, 150, 50, 0, 140, 90)
        radgrad3.addColorStop(0, '#f4f201')
        radgrad3.addColorStop(0.8, '#00B5E2')
        radgrad3.addColorStop(1, '#00B5E2')

        ctx.fillStyle = radgrad3
        ctx.fillRect(0, 0, 150, 150)
        ctx.fillStyle = radgrad2
        ctx.fillRect(0, 0, 150, 150)
        ctx.fillStyle = radgrad
        ctx.fillRect(0, 0, 150, 150)
    }

    function demo11() {
        let canvas = canvasRef11.current
        let ctx = canvas.getContext('2d')

        // 创建 img，作为图案
        let img = new Image()
        img.src = 'https://mdn.mozillademos.org/files/222/Canvas_createpattern.png'
        
        img.onload = function () {
            let ptrn = ctx.createPattern(img, 'repeat')
            ctx.fillStyle = ptrn
            ctx.fillRect(0, 0, 150, 150)    
        }
    }

    function demo12() {
        let canvas = canvasRef12.current
        let ctx = canvas.getContext('2d')

        ctx.beginPath()
        ctx.fillStyle = '#aaa'
        ctx.arc(50, 50, 30, 0, Math.PI * 2, true)
        ctx.arc(50, 50, 15, 0, Math.PI * 2, true)
        ctx.fill('evenodd')
    }

    useEffect(() => {
        demo1()
        demo2()
        demo3()
        demo4()
        demo5()
        demo6()
        demo7()
        demo8()
        demo9()
        demo10()
        demo11()
        demo12()
    }, [])

    return (
        <div>
            <canvas ref={canvasRef} width="200" height="200" />
            <canvas ref={canvasRef2} width="200" height="200" />
            <canvas ref={canvasRef3} width="200" height="200" />
            <canvas ref={canvasRef4} width="200" height="200" />
            <canvas ref={canvasRef5} width="200" height="200" />
            <canvas ref={canvasRef6} width="200" height="200" />
            <canvas ref={canvasRef7} width="200" height="200" />
            <canvas ref={canvasRef8} width="200" height="200" />
            <canvas ref={canvasRef9} width="200" height="200" />
            <canvas ref={canvasRef10} width="200" height="200" />
            <canvas ref={canvasRef11} width="200" height="200" />
            <canvas ref={canvasRef12} width="200" height="200" />
        </div>
    )
}
```

```js

```