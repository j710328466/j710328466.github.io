import React, { useRef, useEffect, FC } from 'react';
import './index.less'

export default (): any => {
	const ballRef = useRef(null)

	function fun(v) {
		let Vx = Math.random()*v;
		let Vy = Math.sqrt(v*v - Vx*Vx);
		let startX = Math.random()*490;
		let startY = Math.random()*490;
		const ball = ballRef.current;
		Math.random() > 0.5 && (Vx *= -1);
		Math.random() > 0.5 && (Vy *= -1);
		ball.style.left = startX + 'px';
		ball.style.top = startY + 'px';
		function animate(){
			if(startX >= 490 || startX <= 0)
				Vx = -Vx;
			startX += Vx;
			if(startY >= 490 || startY <= 0) 
				Vy = -Vy;
			startY += Vy;
			ball.style.left = startX + 'px';
			ball.style.top = startY + 'px';
			window.requestAnimationFrame(animate);
		}
		window.requestAnimationFrame(animate);
	}

  useEffect(() => {
  }, [])

  return (
    <div className="box">
			<button onClick={() => fun(5)} type="button">开始</button>
			<div className="ball" ref={ballRef}></div>
		</div>
  )
}