import React, { useRef, useEffect, FC } from 'react';
import './index.less'

export default (): any => {

  useEffect(() => {
  }, [])

  return (
    <div class="svgMask">
        <div class="rang">
            <svg>
                <defs>
                    <mask id="svgDemo" class="svgDemo" width="100%" heigth="100%" x="0" y="0">
                        <rect class="svgDemo_rect" x="0" y="0" width="100%" height="100%" />
            
                        <text class="svgDemo_tit" x="50%" y="0" dy="1.58em">SVG + CSS</text>
                        <text class="svgDemo_subtit" x="50%" y="0" dy="9.8em">welcome!</text>
                    </mask>
                </defs>
                <rect class="down" x="0" y="0" width="100%" height="100%" />
            </svg>
        </div>
        <div class="intro">嗨，你好吗？</div>
    </div>
  )
}