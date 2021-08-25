import React, { useRef, useEffect, FC } from 'react';
import './index.less'

export default (): any => {

  useEffect(() => {
  }, [])

  return (
    <div className="realMask">
        <div className="realMask_bg"></div>
        <div className="realMask_mask"></div>
        <div className="realMask_slogan">NiceNote</div>
    </div>
  )
}