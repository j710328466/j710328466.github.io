import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

export const resizeRendererToDisplaySize = (renderer) => {
  const canvas = renderer.domElement;
  const pixelRatio = window.devicePixelRatio;
  const width = canvas.clientWidth * pixelRatio | 0;
  const height = canvas.clientHeight * pixelRatio | 0;
  const needResize = canvas.width !== width || canvas.height !== height;
  if (needResize) {
    renderer.setSize(width, height, false);
  }
  return needResize;
}

export const addControls = (camera: any, renderer: any) => {
  const controls = new OrbitControls( camera, renderer.domElement );
  controls.autoRotate = true
}
