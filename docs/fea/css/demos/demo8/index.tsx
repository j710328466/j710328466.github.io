import React, { useRef, useEffect, FC } from 'react';
import './index.less'

export default (): any => {

  useEffect(() => {
  }, [])

  return (
    <div className='ribbon'>
			<a href='#'><span>首页</span></a>
			<a href='#'><span>关于我</span></a>
			<a href='#'><span>服务</span></a>
			<a href='#'><span>介绍</span></a>
		</div>
  )
}