import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

export default () => {
  const ref = useRef(null)

  useEffect(() => {

  })

  const init = () => {

  }

  return (
    <canvas ref={ref} id="earth" />
  )
}
