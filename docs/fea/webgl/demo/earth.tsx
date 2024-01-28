import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { GUI } from 'three/addons/libs/lil-gui.module.min.js';
import { resizeRendererToDisplaySize, addControls } from '../utils'

class AxisGridHelper {
    axes: any;
  grid: any;
  _visible: any;
		constructor( node, units = 10 ) {
			const axes = new THREE.AxesHelper();
			axes.material.depthTest = false;
			axes.renderOrder = 2; // after the grid
			node.add( axes );

			const grid = new THREE.GridHelper( units, units );
			grid.material.depthTest = false;
			grid.renderOrder = 1;
			node.add( grid );

			this.grid = grid;
			this.axes = axes;
			this.visible = false;

		}
		get visible() {
			return this._visible;
		}
		set visible( v ) {
			this._visible = v;
			this.grid.visible = v;
			this.axes.visible = v;
		}
	}

export default () => {
  const ref = useRef(null)

  useEffect(() => {
    ref.current && init(ref.current)
  })


  const init = (dom: any) => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(40, 2, 0.1, 1000)
    camera.position.set(0, 50, 0)
    camera.up.set(0, 0, 1)
    camera.lookAt(0, 0, 0)
    const gui = new GUI();

    {
      const light = new THREE.PointLight(0xffffff, 500)
      scene.add(light)
    }

    // 创建球体实例
    const radius = 1
    const widthSegments = 6
    const heightSegments = 6
    const sphereGeometry = new THREE.SphereGeometry(radius, widthSegments, heightSegments)

    const objects = []
    const solarSystem = new THREE.Object3D()
    scene.add(solarSystem)
    objects.push(solarSystem)

    // 太阳
    const sunMaterial = new THREE.MeshPhongMaterial({ emissive: 0xffff00 })
    const sunMesh = new THREE.Mesh(sphereGeometry, sunMaterial)
    sunMesh.scale.set(5, 5, 5)
    solarSystem.add(sunMesh)
    objects.push(sunMesh)

    // 地球
    const earthOrbit = new THREE.Object3D()
    earthOrbit.position.x = 10;
    solarSystem.add(earthOrbit)
    objects.push(earthOrbit)
    const earthMaterial = new THREE.MeshPhongMaterial({
      color: 0x2233ff,
      emissive: 0x112244,
    })
    const earthMesh = new THREE.Mesh(sphereGeometry, earthMaterial)
    earthOrbit.add(earthMesh)
    objects.push(earthMesh)

    // 月球
    const moonOrbit = new THREE.Object3D()
    moonOrbit.position.x = 2
    earthOrbit.add(moonOrbit)
    const moonMaterial = new THREE.MeshPhongMaterial({
      color: 0x888888,
      emissive: 0x222222
    })
    const moonMesh = new THREE.Mesh(sphereGeometry, moonMaterial)
    moonMesh.scale.set(.5, .5, .5);
    moonOrbit.add(moonMesh)
    objects.push(moonMesh)

    // 渲染器
    const renderer = new THREE.WebGLRenderer({ antialias: true, canvas: dom  });

    // 集体旋转
    function makeAxisGrid(node, label, units) {
      const helper = new AxisGridHelper( node, units );
      gui.add(helper, 'visible').name(label);
    }

    makeAxisGrid(solarSystem, 'solarSystem', 25);
    makeAxisGrid(sunMesh, 'sunMesh');
    makeAxisGrid(earthOrbit, 'earthOrbit');
    makeAxisGrid(earthMesh, 'earthMesh');
    makeAxisGrid(moonOrbit, 'moonOrbit');
    makeAxisGrid(moonMesh, 'moonMesh');

    addControls(camera, renderer);

    function render(time) {
      time *= 0.001

      if (resizeRendererToDisplaySize(renderer)) {
        const canvas = renderer.domElement;
        camera.aspect = canvas.clientWidth / canvas.clientHeight;
        camera.updateProjectionMatrix();
      }

      objects.forEach((obj) => {
        obj.rotation.y = time
      })

      renderer.setAnimationLoop(render)
      renderer.render(scene, camera)
    }
    renderer.setAnimationLoop(render)
  }


  return (
    <canvas ref={ref} id="earth" style={{ width: '100%', height: '500px'}} />
  )
}
