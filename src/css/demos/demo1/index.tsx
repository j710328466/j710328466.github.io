import React, { useRef, useEffect, FC } from 'react';
import './index.less'

export default (): any => {

  useEffect(() => {
  }, [])

  return (
    <div className="demo textMask">
        <div className="bg"></div>
        <div className="text">
            Text Mask
        </div>
    </div>
  )
}