import React, { useRef, useEffect, FC } from 'react';
import './index.less'

export default (): any => {

  useEffect(() => {
  }, [])

  return (
    <div className="buttonMask">
        <div className="btn button-container-1">
            <span className="mas">MASK1</span>
            <button type="button" name="Hover">MASK1</button>
        </div>
        <div className="btn button-container-2">
            <span className="mas">MASK2</span>
            <button type="button" name="Hover">MASK2</button>
        </div>
        <div className="btn button-container-3">
            <span className="mas">MASK2</span>
            <button type="button" name="Hover">MASK3</button>
        </div>
        <div className="button-container-4">
            描边动画
        </div>
    </div>
  )
}