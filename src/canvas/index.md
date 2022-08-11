---
nav:
  title: FC
  path: /funny
group:
  title: canvas 
  order: 4
  path: /canvas
---

# canvas

### 粒子背景

<code src="./demos/ParticleBG/index.jsx" />

### 粒子图片

<code src="./demos/ParticleIMG/index.jsx" />

### 贪吃蛇

<code src="./demos/Snake/index.jsx" />

### 液体海报

<code src="./demos/LiquidPost/index.jsx" />

### 大转盘（doing）

```jsx
import React, { useRef, useEffect } from 'react';

class Global {
    constructor () {};

    /**
     * 判断是否为 PC 端，若是则返回 true，否则返回 flase
     */
    IsPC() {
        let userAgentInfo = navigator.userAgent,
            flag = true,
            Agents = ["Android", "iPhone","SymbianOS", "Windows Phone","iPad", "iPod"];

        for (let v = 0; v < Agents.length; v++) {
            if (userAgentInfo.indexOf(Agents[v]) > 0) {
                flag = false;
                break;
            }
        }
        return flag;
    };

    /**
     * 缓动函数，由快到慢
     * @param {Num} t 当前时间
     * @param {Num} b 初始值
     * @param {Num} c 变化值
     * @param {Num} d 持续时间
     */
    easeOut(t, b, c, d) {
        if ((t /= d / 2) < 1) return c / 2 * t * t + b;
        return -c / 2 * ((--t) * (t - 2) - 1) + b;
    };

    windowToCanvas(canvas, e) {
        let bbox = canvas.getBoundingClientRect(),
            x = this.IsPC() ? e.clientX || event.clientX : e.changedTouches[0].clientX,
            y = this.IsPC() ? e.clientY || event.clientY : e.changedTouches[0].clientY;
            
        return {
            x: x - bbox.left,
            y: y - bbox.top
        }
    };

    /**
     * 绘制自动换行的文本
     * @param {Obj} context
     * @param {Str} t          文本内容
     * @param {Num} x          坐标
     * @param {Num} y          坐标
     * @param {Num} w          文本限制宽度
     * @param {Num} lineHeight 行高
     */
    drawText(context, t, x, y, w, lineHeight = 20){
        let chr = t.split(''),
            temp = '',           
            row = [];

        for (let a = 0; a < chr.length; a++){
            if ( context.measureText(temp).width < w ) {
                ;
            }
            else{
                row.push(temp);
                temp = '';
            }
            temp += chr[a];
        };

        row.push(temp);

        for(let b = 0; b < row.length; b++){
            context.fillText(row[b], x, y + (b + 1) * lineHeight);
        };
    };

    /**
     * 定义圆角矩形的方法
     * @param {Obj} context
     * @param {Num} cornerX 
     * @param {Num} cornerY 
     * @param {Num} width 
     * @param {Num} height 
     * @param {Num} cornerRadius 
     */
    roundedRect(context, cornerX, cornerY, width, height, cornerRadius) {
        if (width > 0) context.moveTo(cornerX + cornerRadius, cornerY);
        else           context.moveTo(cornerX - cornerRadius, cornerY);

        context.arcTo(cornerX + width, cornerY,
            cornerX + width, cornerY + height,
            cornerRadius);

        context.arcTo(cornerX + width, cornerY + height,
            cornerX, cornerY + height,
            cornerRadius);

        context.arcTo(cornerX, cornerY + height,
            cornerX, cornerY,
            cornerRadius);

        if (width > 0) {
            context.arcTo(cornerX, cornerY,
                cornerX + cornerRadius, cornerY,
                cornerRadius);
        }
        else {
            context.arcTo(cornerX, cornerY,
                cornerX - cornerRadius, cornerY,
                cornerRadius);
        }
    }
}

class RouletteWheel extends Global{
    constructor(params) {
        super()
        this.width = params.width
        this.height = params.height

        this.centerX = params.centerX
        this.centerY = params.centerY
        this.outsideRadius = params.outsideRadius

        this.evenColor = params.evenColor
        this.oddColor = params.oddColor
        this.loseColor = params.odd
        this.textColor = params.textColor

        this.awards = params.awards || []

        this.startRadian = params.startRadian || 0
        this.duration = params.duration || 4000
        this.velocity = params.velocity || 10

        // 回调函数
        this.finish = params.finish
    }

    initCanvas() {
        let canvas = this.canvas
        canvas.width = this.width;
        canvas.height = this.height;
        let ctx = canvas.getContext('2d')

        for (let i = 0; i < this.awards.length; i++) {
            // const award = awards[i]
            let _startR = this.startRadian + this.awardRadian * i
            let _endR = _startR + this.awardRadian

            if (i % 2 === 0) ctx.fillStyle = "#FF6766"
            else ctx.fillStyle = "#FD5757"

            ctx.beginPath(); //开始绘制路径
            ctx.moveTo(250, 250); //将当前位置移动到新的目标点
            ctx.arc(250, 250, this.radius, _startR, _endR);
            ctx.closePath(); //绘制路径
            ctx.fill();
        }
        
        ctx.beginPath(); //开始绘制路径
        ctx.moveTo(250, 250); //将当前位置移动到新的目标点
        ctx.arc(250, 250, 250, Math.PI / 2, Math.PI);
        ctx.closePath(); //绘制路径
        ctx.fillStyle = "#ccc"; //填充背景颜色
        ctx.fill();
        ctx.beginPath(); //开始绘制路径
        ctx.moveTo(250, 250); //将当前位置移动到新的目标点
        ctx.arc(250, 250, 250, Math.PI, Math.PI * 1.5);
        ctx.closePath(); //绘制路径
        ctx.fillStyle = "#ddd"; //填充背景颜色
        ctx.fill();
        ctx.beginPath(); //开始绘制路径
        ctx.moveTo(250, 250); //将当前位置移动到新的目标点
        ctx.arc(250, 250, 250, Math.PI * 1.5, Math.PI * 2);
        ctx.closePath(); //绘制路径
        ctx.fillStyle = "#aaa"; //填充背景颜色
        ctx.fill();
    }
}

export default () => {
    const canvasRef = useRef()

    useEffect(() => {
        let rw = new RouletteWheel({
          canvas: canvasRef.current,
          width: '500',
          height: '500',
          awards: [               // 转盘内的奖品个数以及内容
              '大保健', '话费10元', '话费20元', '话费30元', '保时捷911', '周大福土豪金项链',
              //  'iphone 20', '火星7日游'
          ]
      })
    }, [])

    return (
        <div>
            <canvas ref={canvasRef} width="200" height="200" />
        </div>
    )
}
```

### 火焰

<code src="./demos/Fire/index.jsx" />

### 星空


```jsx
import React, { useRef, useEffect } from 'react';

/**
 * 星空初始化
 */
class NightSky {
    constructor(opt) {
        this.opt = {
            width: 500, 
            height: 500,
            num: 120,
            canvas: null,
            ...opt
        }
        this.opt.canvas.width = this.opt.width
        this.opt.canvas.height = this.opt.height
        this.ctx = this.opt.canvas && this.opt.canvas.getContext('2d')
        this.opt.canvas.style.backgroundColor = '#000'
        this.starList = []
        this.draw = this.draw
        this.init()
    }

    init() {
        this.drawStar()
        this.animate()
    }

    drawStar() {
        let { width, height, num } = this.opt

        for (let i = 0; i < num; i++) {
            this.starList[i] = new Star({
                maxRadius: 3,
                ctx: this.ctx,
                width,
                height
            })
            this.starList[i].draw()
        }
    }

    animate() {
        let ctx = this.ctx
        let starList = this.starList
        let { width, height } = this.opt

        function _move() {
            ctx.clearRect(0, 0, width, height)
            for (const i in starList) {
                starList[i].move()
            }
            window.requestAnimationFrame(_move)
        }

        window.requestAnimationFrame(_move)
    }

    draw(val) {
        return val
    }
}

class Star {
    constructor(opt) {
        let { width, height, maxRadius = 2, ctx, speed = 0.5 } = opt
        this.x = Math.random() * width
        this.y = Math.random() * height
        this.height = height
        this.width = width
        this.speed = speed
        this.maxRadius = maxRadius
        this.ctx = ctx
        this.r = Math.random() * maxRadius
        var alpha = (Math.floor(Math.random() * 10) + 1) / 10
        this.color = `rgba(255, 255, 255, ${alpha})`
    }

    draw() {
        this.ctx.fillStyle = this.color
        this.ctx.shadowBlur = this.r * 2
        this.ctx.beginPath()
        this.ctx.arc(this.x, this.y, this.r * Math.random(), 0, 2 * Math.PI, false)
        this.ctx.closePath()
        this.ctx.fill()
    }

    move() {
        this.y -= this.speed
        if (this.y <= -10) {
            this.y = this.height + 10
        }
        this.draw()
    }
}

export default () => {
    const canvasRef = useRef()

    useEffect(() => {
        let nightSky = new NightSky({
          canvas: canvasRef.current,
          width: 500,
          height: 300
      })
    }, [])

    return (
        <div>
            <canvas ref={canvasRef} width="200" height="200" />
        </div>
    )
}
```

### 移动（doing）


```jsx
import React, { useRef, useEffect } from 'react';

class Move {
  constructor(opt) {
    const option = {
      canvas: null,
      width: document.documentElement.clientWidth,   // 宽度
      height: document.documentElement.clientHeight,    // 高度
      bgColor: '#000',
      para: {
        num: 100,
        color: false,    //  颜色  如果是false 则是随机渐变颜色
        r: 0.9,          //   圆每次增加的半径 
        o: 0.09,         //      判断圆消失的条件，数值越大，消失的越快
      },
      ...opt
    }
    const { canvas, width, height, bgColor } = option
    this.option = option
    this.round_arr = []
    this.ctx = canvas.getContext('2d')

    canvas.width = width
    canvas.height = height
    canvas.style.backgroundColor = bgColor

    this.init(this)
  }

  init(opt) {
    let tempSum = 0
    window.onmousemove = function (event) {

      let mouseX = event.clientX;
      let mouseY = event.clientY;

      if (tempSum < 5) {
        tempSum++
      } else {
        opt.round_arr.push({
          mouseX,
          mouseY,
          r: opt.option.para.r,  // 设置半径每次增大的数值        
          o: 1,    //  判断圆消失的条件，数值越大，消失得越快
        })
        tempSum = 0
        opt.animate()
      }
    };
  }

  animate() {
    let { para, width, height } = this.option
    let color = 0, color2
    let ctx = this.ctx
    let round_arr = this.round_arr

    if (!para.color) {
      color += Math.random();
      color2 = 'hsl(' + color + ',100%,80%)';
    }

    function _move() {
      
      ctx.clearRect(0, 0, width, height);
  
      for (var i = 0; i < round_arr.length; i++) {
  
          ctx.fillStyle = color2;
          ctx.beginPath();
          ctx.arc( round_arr[i].mouseX ,round_arr[i].mouseY, round_arr[i].r, 0, Math.PI * 2);
          ctx.closePath();
          ctx.fill();
          round_arr[i].r += para.r;
          round_arr[i].o -= para.o;
  
          if( round_arr[i].o <= 0){
              round_arr.splice(i,1);
              i--;
          }
      }
    }

    window.requestAnimationFrame(_move);
  }
}

export default () => {
    const canvasRef = useRef()

    useEffect(() => {
        let rw = new Move({
          canvas: canvasRef.current,
          width: 500,
          height: 300
        })
    }, [])

    return (
        <div>
            <canvas ref={canvasRef} width="200" height="200" />
        </div>
    )
}
```

### 棒棒糖


```jsx
import React, { useRef, useEffect } from 'react';

class Lollipop {
  constructor(opt) {
    this.opt = {
      canvas: null,    // 画布
      width: document.documentElement.clientWidth,   // 宽度
      height: document.documentElement.clientHeight,    // 高度
      bgColor: '#000',
      ...opt
    }
    this.ctx = this.opt.canvas.getContext('2d')

    // 初始化画布
    this.opt.canvas.width = this.opt.width
    this.opt.canvas.height = this.opt.height
    this.opt.canvas.style.backgroundColor = this.opt.bgColor

    this.render()
  }

  render() {
    this._drawCircle(this.ctx)
    this._drawStick(this.ctx)
    this._drawHalfCircle(this.ctx)
  }

  /**
   * 画圆
   * @param {*} ctx 
   */
  _drawCircle(ctx) {
    ctx.beginPath()
    ctx.arc(300, 300, 50, 0, Math.PI * 2, true)
    ctx.closePath()
    ctx.fillStyle = '#fff'
    ctx.shadowBlur = 15
    ctx.shadowColor = '#fff'
    ctx.fill()
  }

  /**
   * 棍子
   * @param {*} ctx 
   */
  _drawStick(ctx) {
    ctx.beginPath()
    ctx.moveTo(340, 340)
    ctx.lineTo(450, 450)
    ctx.lineWidth = 8
    ctx.lineCap = 'round'
    ctx.strokeStyle = '#fff'
    ctx.stroke()
    ctx.closePath()
  }

  _drawHalfCircle(ctx) {
    ctx.beginPath()
    ctx.arc(300, 300, 30, 0, Math.PI * 0.6, false)
    ctx.shadowBlur = 5
    ctx.lineWidth = 5
    ctx.lineCap = 'round'
    ctx.strokeStyle = '#ccc'
    ctx.stroke()
  }
}

export default () => {
    const canvasRef = useRef()

    useEffect(() => {
        new Lollipop({
          canvas: canvasRef.current,
          width: 500,
          height: 800
        })
    }, [])

    return (
        <div>
            <canvas ref={canvasRef} width="200" height="200" />
        </div>
    )
}
```

### 时钟

<code src="./demos/Clock/index.jsx" />