import React, { useRef, useEffect, FC } from 'react';
import './index.less'

const img1 = require('./img/clipImg1.jpg')
const img2 = require('./img/clipImg2.jpg')

export default () => {
    const canvasRef = useRef()
    const clipImgs1Ref = useRef()
    const clipImgs2Ref = useRef()


  function clipPathMaskRender() {
      const NUM_CIRCLES = 60
      const MIN_SIZE = 50
      const MAX_SIZE = 100

      function getRndInt(min, max) {
          return Math.floor(Math.random() * (max - min + 1)) + min
      }

      var c = canvasRef && canvasRef.current
      var ctx = c.getContext('2d')
      var clipImg1 = clipImgs1Ref && clipImgs1Ref.current
      var clipImg2 = clipImgs2Ref && clipImgs2Ref.current
      var t

      class Circle {
          constructor() {
              this.x = 0
              this.y = 0
              this.size = 0
              this._needsRandomized = false
          }

          randomize () {
              this.x = getRndInt(50, c.width - 50)
              this.y = getRndInt(50, c.height - 50)
              this.maxSize = getRndInt(MIN_SIZE, MAX_SIZE)
          }

          // 更新
          update (t, ofs) {
              // abs 绝对值
              this.size = Math.abs(Math.round(Math.sin(t + ofs) * this.maxSize))

              if (this.size < 2) {
                  if (this._needsRandomized) {
                      this.randomize()
                      this._needsRandomized = false
                  }
              }
          }

          // 画
          draw () {
              ctx.moveTo(this.x, this.y)
              ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI)
          }
      }

      var circles =[]
      for (let i = 0; i < NUM_CIRCLES; i++) {
          var circle = new Circle()
          circle.randomize()
          circles.push(circle)
      }

      function update() {
          t = 0.001 * Date.now()
          circles.forEach((circle, idx) => {
              circle.update(t, idx)
          })
      }

      async function render() {
          await ctx.drawImage(clipImg1, 0, 0)
          await ctx.save()
          await ctx.beginPath()

          circles.forEach(function(circle) {
              circle.draw()
          })

          ctx.closePath()
          ctx.clip()

          ctx.drawImage(clipImg2, 0, 0)
          ctx.restore()
      }

      function loop() {
          requestAnimationFrame(loop)
          update()
          render()
      }

      loop()
  }


  useEffect(() => {
    clipPathMaskRender()
  }, [])

  return (
    <div className="clipPathMask demo">
        <div className="wrap">
            <h1 className="wrap_tit">Nice Note</h1>
            <canvas ref={canvasRef} className="wrap_canvas" width="500px" height="500px"></canvas>
        </div>
        <div id="clipImgs">
            <img ref={clipImgs1Ref} id="clipImgs_1" crossOrigin="anonymous" src={img1} />
            <img ref={clipImgs2Ref} id="clipImgs_2" crossOrigin="anonymous" src={img2} />
        </div>
    </div>
  )
}