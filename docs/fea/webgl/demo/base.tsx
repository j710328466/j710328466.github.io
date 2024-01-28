import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { TextGeometry } from 'three/addons/geometries/TextGeometry.js';
import { FontLoader } from 'three/addons/loaders/FontLoader.js';
import { resizeRendererToDisplaySize } from '../utils'

export default () => {
  const ref = useRef(null)

  useEffect(() => {
     ref.current && init(ref.current)
  }, [])

  const init = (dom: HTMLElement) => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(38, dom.clientWidth / dom.clientHeight, 0.1, 1000)
    // camera.lookAt( 0, 0, 0 );
    camera.position.set(25, 5, 40)
    camera.rotation.set(10, 0, 40)
    const cameraHelper = new THREE.CameraHelper( camera );
    scene.add( cameraHelper );

    // 渲染器
    const renderer = new THREE.WebGLRenderer({ antialias: true, canvas: dom  });
    // renderer.setSize(window.innerWidth, window.innerHeight);
    THREE.Cache.enabled = true;

    // 创建立方体
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshLambertMaterial({ color: 0x00ffff })
    const cube = new THREE.Mesh(geometry, material);
    cube.position.y = -1
    scene.add(cube);

    const edges = new THREE.EdgesGeometry( geometry );
    const line = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: 0xffffff } ) );
    line.position.y = -1
    scene.add( line );

    // 创建一个胶囊
    const capGeometry = new THREE.CapsuleGeometry(1, 1, 10, 20)
    const capMaterial = new THREE.MeshLambertMaterial({ color: 0xdede8d, wireframe: false })
    const cap = new THREE.Mesh(capGeometry, capMaterial);
    cap.position.y = 1
    scene.add(cap);

    // 创建一个圆形（半径，分段，分段起始角度，中心角）
    const circleGeometry = new THREE.CircleGeometry(2, 32, 10, Math.PI * 1.5)
    const circleMaterial = new THREE.MeshLambertMaterial({ color: 0xcccccd, wireframe: false })
    const circle = new THREE.Mesh(circleGeometry, circleMaterial);
    circle.position.y = 4
    circle.position.x = 3
    circleMaterial.side = THREE.DoubleSide
    scene.add(circle);

    // 创建一个圆锥（半径，高度，侧面分段，侧面沿着高度的分段、底面是否封闭、分段起始角度、中心角）
    const coneGeometry = new THREE.ConeGeometry(1, 6, 20)
    const coneMaterial = new THREE.MeshLambertMaterial({ color: 0xcccccd, wireframe: false })
    const cone = new THREE.Mesh(coneGeometry, coneMaterial);
    cone.position.y = 4
    cone.position.x = -3
    scene.add(cone);

    // 创建一个圆柱（顶半径，底半径，圆柱高，侧面分段、侧面沿高分段、底面是否封闭、起始角度、中心角）
    const cylinderGeometry = new THREE.CylinderGeometry(1, 1.5, 3, 10)
    const cylinderMaterial = new THREE.MeshLambertMaterial({ color: 0xcffcff, wireframe: false })
    const cylinder = new THREE.Mesh(cylinderGeometry, cylinderMaterial);
    cylinder.position.y = -3
    cylinder.position.x = -3
    scene.add(cylinder);


    // 创建一个12面几何体（半径、顶点）
    const dodecahedronGeometry = new THREE.DodecahedronGeometry(1)
    const dodecahedronMaterial = new THREE.MeshLambertMaterial({ color: 0xcffccd, wireframe: false })
    const dodecahedron = new THREE.Mesh(dodecahedronGeometry, dodecahedronMaterial);
    dodecahedron.position.y = 0
    dodecahedron.position.x = -4
    dodecahedron.position.z = 1
    scene.add(dodecahedron);

    // 创建一个20面几何体（半径、顶点）
    const icosahedronGeometry = new THREE.IcosahedronGeometry(1)
    const icosahedronMaterial = new THREE.MeshLambertMaterial({ color: 0xcffcfd, wireframe: false })
    const icosahedron = new THREE.Mesh(icosahedronGeometry, icosahedronMaterial);
    icosahedron.position.y = 4
    icosahedron.position.x = -5
    icosahedron.position.z = 0.5
    scene.add(icosahedron);

    // 车削缓冲几何体（）
    const points = [];
    for ( let i = 0; i < 10; i ++ ) {
      points.push( new THREE.Vector2( Math.sin( i * 0.2 ) * 10 + 5, ( i - 5 ) * 2 ) );
    }
    const latheGeometry = new THREE.LatheGeometry( points );
    const latheMaterial = new THREE.MeshLambertMaterial( { color: 0xffff00 } );
    const lathe = new THREE.Mesh( latheGeometry, latheMaterial );
    lathe.position.y = 6
    lathe.position.x = 6
    lathe.position.z = 1
    // scene.add( lathe );

    // 多面缓冲几何体，自定义坐标
    const verticesOfCube = [
        -1,-1,-1,    1,-1,-1,    1, 1,-1,    -1, 1,-1,
        -1,-1, 1,    1,-1, 1,    1, 1, 1,    -1, 1, 1,
    ];

    const indicesOfFaces = [
        2,1,0,    0,3,2,
        0,4,7,    7,3,0,
        0,1,5,    5,4,0,
        1,2,6,    6,5,1,
        2,3,7,    7,6,2,
        4,5,6,    6,7,4
    ];

    const polyGeometry = new THREE.PolyhedronGeometry( verticesOfCube, indicesOfFaces, 6, 3 );
    const polyMaterial = new THREE.MeshLambertMaterial( { color: 0xffff00 } );
    const poly = new THREE.Mesh( polyGeometry, polyMaterial );
    poly.position.y = -3
    poly.position.x = 7
    poly.position.z = -3
    scene.add( poly );

    // 创建一个圆环（内半径、外半径、圆环的分段）
    const ringGeometry = new THREE.RingGeometry(1, 3)
    const ringMaterial = new THREE.MeshLambertMaterial({ color: 0xcffccc, wireframe: false })
    const ring = new THREE.Mesh(ringGeometry, ringMaterial);
    ring.position.y = 5
    ring.position.x = 7
    ring.position.z = 1
    ringMaterial.side = THREE.DoubleSide
    scene.add(ring);

    // 绘制图形
    const heartShape = new THREE.Shape();
    const x = -2.5;
    const y = -5;
    heartShape.moveTo(x + 2.5, y + 2.5);
    heartShape.bezierCurveTo(x + 2.5, y + 2.5, x + 2, y, x, y);
    heartShape.bezierCurveTo(x - 3, y, x - 3, y + 3.5, x - 3, y + 3.5);
    heartShape.bezierCurveTo(x - 3, y + 5.5, x - 1.5, y + 7.7, x + 2.5, y + 9.5);
    heartShape.bezierCurveTo(x + 6, y + 7.7, x + 8, y + 4.5, x + 8, y + 3.5);
    heartShape.bezierCurveTo(x + 8, y + 3.5, x + 8, y, x + 5, y);
    heartShape.bezierCurveTo(x + 3.5, y, x + 2.5, y + 2.5, x + 2.5, y + 2.5);


    const shapeGeo = new THREE.ExtrudeGeometry( heartShape, {
      steps: 2,
      depth: 1,
      bevelEnabled: true,
      bevelThickness: 1,
      bevelSize: 1,
      bevelSegments: 5
    });
    const shapeMat = new THREE.MeshLambertMaterial( { color: 0x00ff00 } );
    const heart = new THREE.Mesh( shapeGeo, shapeMat ) ;
    heart.position.y = 6
    heart.position.z = 6
    heart.rotation.z = Math.PI * 1
    shapeMat.side = THREE.DoubleSide
    scene.add( heart );

    // 球体
    const ballGeometry = new THREE.SphereGeometry(1, 19)
    const ballMaterial = new THREE.MeshLambertMaterial({ color: 0xcffccc, wireframe: false })
    const ball = new THREE.Mesh(ballGeometry, ballMaterial);
    ball.position.y = 6
    ball.position.x = 0
    ball.position.z = -1
    scene.add(ball);

    // 四面体
    const fourGeometry = new THREE.TetrahedronGeometry(1)
    const fourMaterial = new THREE.MeshLambertMaterial({ color: 0xcffccc, wireframe: false })
    const four = new THREE.Mesh(fourGeometry, fourMaterial);
    four.position.y = 3
    four.position.x = -9
    four.position.z = -1
    scene.add(four);

    // 圆环（半径，粗细）
    const torusGeometry = new THREE.TorusGeometry(3, 0.3)
    const torusMaterial = new THREE.MeshLambertMaterial({ color: 0xcffccc, wireframe: false })
    const torus = new THREE.Mesh(torusGeometry, torusMaterial);
    torus.position.y = 4
    torus.position.x = -15
    torus.position.z = -1

    scene.add(torus);

    // 圆环扭结（半径，粗细，）
    const kontGeometry = new THREE.TorusKnotGeometry( 2, 0.3 );
    const kontMaterial = new THREE.MeshLambertMaterial( { color: 0xffddd0 } );
    const knot = new THREE.Mesh( kontGeometry, kontMaterial );
    knot.position.y = -5
    knot.position.x = -15
    knot.position.z = -1
    scene.add( knot );

    //创建线段
    const lineMaterial = new THREE.LineBasicMaterial({ color: 0x0000ff })

    const linePoints = []
    linePoints.push(new THREE.Vector3(0, 0, 0))
    linePoints.push(new THREE.Vector3(0, 100, 0))
    const lineGeometry = new THREE.BufferGeometry().setFromPoints(points)
    const line2 = new THREE.Line( lineGeometry, lineMaterial );
    scene.add( line2 );

    // 创建文字
    const fontLoader = new FontLoader();
    let textMesh
    fontLoader.load('https://fancy-content-test.oss-cn-beijing.aliyuncs.com/helvetiker_regular.typeface.json', function ( font ) {
      const textGeometry = new TextGeometry('ykx, I Love U!', {
        font: font,
        size: 6,
        depth: 1,
        height: 0.1,
        curveSegments: 10,
        bevelEnabled: true,    // 平滑
        bevelThickness: 1,
        bevelSize: 0.8,   //
        bevelSegments: 3    // 平滑切角分段
      });
      textGeometry.computeBoundingBox();

      const centerOffset = - 0.5 * ( textGeometry.boundingBox.max.x - textGeometry.boundingBox.min.x );


      const materials = [
        new THREE.MeshPhongMaterial( { color: 0xffffff, flatShading: true } ), // front
        new THREE.MeshPhongMaterial( { color: 0xf00fff } ) // side
      ];
      textMesh = new THREE.Mesh( textGeometry, materials );

      textMesh.position.z = 10;
      textMesh.position.x = centerOffset;

      scene.add( textMesh )
    } );

    // --------------------- 光线 ------------------------------

    // 半球光
    const fillLight = new THREE.HemisphereLight( 0x8dc1de, 0x00668d, 1.5 );
    fillLight.position.set( 0, 1, 1 );
    scene.add( fillLight );

    // const helper = new THREE.HemisphereLightHelper( fillLight, 5 );
    // scene.add( helper );

    // 平行光
    const directionalLight = new THREE.DirectionalLight( 0xffffff, 2.5 );
    directionalLight.position.set( - 5, 25, - 1 );
    directionalLight.castShadow = true;
    directionalLight.shadow.camera.near = 0.01;
    directionalLight.shadow.camera.far = 500;
    directionalLight.shadow.camera.right = 30;
    directionalLight.shadow.camera.left = - 30;
    directionalLight.shadow.camera.top	= 30;
    directionalLight.shadow.camera.bottom = - 30;
    directionalLight.shadow.mapSize.width = 1024;
    directionalLight.shadow.mapSize.height = 1024;
    directionalLight.shadow.radius = 4;
    directionalLight.shadow.bias = - 0.00006;
    scene.add(directionalLight);


    const controls = new OrbitControls( camera, renderer.domElement );
    controls.autoRotate = true

    function render() {
      directionalLight.rotation.x += 0.1
      directionalLight.rotation.z += 0.1
      scene.rotation.y += -0.001

      if (resizeRendererToDisplaySize(renderer)) {
        const canvas = renderer.domElement;
        camera.aspect = canvas.clientWidth / canvas.clientHeight;
        camera.updateProjectionMatrix();
      }

      renderer.setAnimationLoop(render)
      renderer.render(scene, camera)
    }
    render()
  }

  return (
    <canvas ref={ref} style={{ width: '100%', height: '100%' }} />
  )
};
