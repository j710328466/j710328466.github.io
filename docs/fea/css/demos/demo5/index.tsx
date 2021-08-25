import React, { useRef, useEffect, FC } from 'react';
import './index.less'

export default (): any => {

  useEffect(() => {
  }, [])

  return (
    <div className="gradientMask">
        <svg 
            className="gradientMask_svg"
            xmlns="http://www.w3.org/2000/svg" 
            width="100%" 
            height="100%"
        >
            <defs>
                <mask id="gradientMask_svg__mask" x="0" y="0" width="100%" height="100%">
                    <rect x="0" y="0" width="100%" height="100%" />
                    <text x="50%" y="1em">Hello</text>
                    <text x="50%" y="2em">Motal</text>
                </mask>
            </defs>
            <rect x="0" y="0" width="100%" height="100%" />
        </svg>
    </div>
  )
}