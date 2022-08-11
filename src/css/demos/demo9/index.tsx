import React, { useRef, useEffect, FC } from 'react';
import './index.less'

export default (): any => {

  /**
   * 手动控制动画
   */
  function init() {
    setTimeout(function () {
			var cube = document.querySelector(".cube"),
				downX, downY, moveX, moveY, tempX, tempY, degX = 0, degY = 0;

			window.onmousedown = function (e) {
				e = e || event;
				downX = e.clientX;			//获取鼠标点下去时的坐标
				downY = e.clientY;
				console.log('can');

				window.onmousemove = function (e) {
					e = e || event;
					moveX = e.clientX - downX;			//算出鼠标移动的距离
					moveY = e.clientY - downY;
					//根据一定比例将变化反应在盒子上，改变比例5可以调节拖动的速度
					tempX = degX + moveX / 5;			
					tempY = degY - moveY / 5;
					cube.style.transform = "rotatex(" + tempY + "deg) rotatey(" + tempX + "deg)";
				};

			};

			window.onmouseup = function (e) {
				e = e || event;
				degX += moveX / 5;			//鼠标松开时将拖动期间改变的最终结果保存
				degY += - moveY / 5;
				window.onmousemove = null;			//取消监听
			};

			// !function () {
			// 	var n = 1000;
			// 	var wraper = document.querySelector('.wraper');
			// 	wraper.style.perspective = n + 'px';
			// 	window.onmousewheel = function (e) {
			// 		e = e || event;
			// 		if (e.wheelDelta) {  //判断浏览器IE，谷歌滑轮事件
			// 			if (e.wheelDelta > 0) { //当滑轮向上滚动时减小景深
			// 				wraper.style.perspective = n - 50 + 'px';
			// 				if (n > 350) {
			// 					n = n - 50;
			// 				}
			// 			}
			// 			if (e.wheelDelta < 0) { //当滑轮向下滚动时增加景深
			// 				wraper.style.perspective = n + 50 + 'px';
			// 				n += 50;
			// 			}
			// 		} else if (e.detail) {  //Firefox滑轮事件
			// 			if (e.detail > 0) {
			// 				wraper.style.perspective = n - 50 + 'px';
			// 				if (n > 350) {
			// 					n = n - 50;
			// 				}
			// 			}
			// 			if (e.detail < 0) {
			// 				wraper.style.perspective = n + 50 + 'px';
			// 				n += 50;
			// 			}
			// 		}
			// 	};
			// }();
		}, 5000);
  }

  useEffect(() => {
    
  }, [])

  return (
    <div className="wraper">
      <div className="cube">
        <div className="front">Front</div>
        <div className="end">End</div>
        <div className="left">Left</div>
        <div className="right">Right</div>
        <div className="top">Top</div>
        <div className="bottom">Bottom</div>
      </div>
    </div>
  )
}