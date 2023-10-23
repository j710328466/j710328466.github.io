import * as THREE from 'three'
import {
    HDRCubeTextureLoader
} from 'three/examples/jsm/loaders/HDRCubeTextureLoader.js';
import {
    PMREMGenerator
} from 'three/examples/jsm/pmrem/PMREMGenerator.js';
import {
    PMREMCubeUVPacker
} from 'three/examples/jsm/pmrem/PMREMCubeUVPacker.js';
import {
    BokehShader,
    BokehDepthShader
} from 'three/examples/jsm/shaders/BokehShader2.js';

import {
    GLTFLoader
} from 'three/examples/jsm/loaders/GLTFLoader.js';

import ThreeClass from '../../components/ThreeClass.js';
import CommonClass from '../../components/CommonClass.js';

import glb from '../../assets/models/glb/diamond/diamond.glb'

import box1 from '../../assets/img/skybox/diamond/px.hdr'
import box2 from '../../assets/img/skybox/diamond/nx.hdr'
import box3 from '../../assets/img/skybox/diamond/py.hdr'
import box4 from '../../assets/img/skybox/diamond/ny.hdr'
import box5 from '../../assets/img/skybox/diamond/pz.hdr'
import box6 from '../../assets/img/skybox/diamond/nz.hdr'

import skybox1 from '../../assets/img/skybox/euro/2/px.jpg'
import skybox2 from '../../assets/img/skybox/euro/2/nx.jpg'
import skybox3 from '../../assets/img/skybox/euro/2/py.jpg'
import skybox4 from '../../assets/img/skybox/euro/2/ny.jpg'
import skybox5 from '../../assets/img/skybox/euro/2/pz.jpg'
import skybox6 from '../../assets/img/skybox/euro/2/nz.jpg'

/* 初始加载 */
$(function () {
    let common = new CommonClass();
    let pageObj = $.extend(common.pageObj, {
        isSceneRotate: true,
        groundMethod: -1,

    });

    window['scene3d'] = new SceneClass(pageObj);
    window['scene3d'].load();
});

class SceneClass extends ThreeClass {
    constructor(pageObj) {
        super(pageObj);

        this.objects = [];

        this.gemBackMaterial = new THREE.MeshPhysicalMaterial({
            map: null,
            color: 0xF0F0F0,
            metalness: 1.0,
            roughness: 0,
            opacity: 0.3,
            side: THREE.DoubleSide,
            transparent: true,
            envMapIntensity: 10,
            premultipliedAlpha: true,
            // TODO: Add custom blend mode that modulates background color by this materials color.
        });

        this.gemFrontMaterial = new THREE.MeshPhysicalMaterial({
            map: null,
            color: 0xF0F0F0,
            metalness: 0.0,
            roughness: 0,
            opacity: 0.1,
            side: THREE.BackSide,
            transparent: true,
            envMapIntensity: 1,
            premultipliedAlpha: true
        });
    }

    initModel() {
        new GLTFLoader().load(glb, gltf => {
            gltf.scene.traverse(child => {

                if (child.isMesh) {
                    child.position.set(0, 20, 0);
                    child.scale.set(10, 10, 10);

                    let group = new THREE.Group();
                    let outShape = child.clone();
                    child.material = this.gemBackMaterial;
                    outShape.material = this.gemFrontMaterial;
                    group.add(outShape);
                    group.add(child);
                    group.scale.set(1.3, 1.3, 1.3);
                    this.scene.add(group);
                    this.objects.push(group);

                    //let mesh = new THREE.Mesh(geometry, material2);
                    //this.scene.add(mesh);

                    /* this.scene.add(second);
                    this.scene.add(third);
                    this.scene.add(fourth);
                    this.scene.add(fiveth); */

                    //second.material = this.gemFrontMaterial;

                    /* let parent = new THREE.Group();
                    parent.add(second);
                    parent.add(child);
                    this.scene.add(parent); */
                    //this.objects.push(parent);

                    /* console.log(newArr)
                    child.geometry.attributes.position.array = newArr;
                    console.log(child.geometry.attributes.position.array) */

                    /* //顶点个数
                    let particles = child.geometry.attributes.position.count;
                    // 临时颜色类型
                    let color = new THREE.Color();
                    let colors = [];

                    let n = 1000, n2 = n / 2;

                    for (let i = 0; i < particles; i++) {
                        let x = Math.random() * n - n2;
                        let y = Math.random() * n - n2;
                        let z = Math.random() * n - n2;

                        // colors, 设置颜色, 同理, 从0到1
                        let vx = (x / n) + 0.6;
                        let vy = (y / n) + 0.6;
                        let vz = (z / n) + 0.6;

                        color.setRGB(vx, vy, vz);

                        colors.push(color.r, color.g, color.b);
                    }

                    child.geometry.addAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
                    console.log(child.geometry) */
                }
            });
        });

        let box = [box1, box2, box3, box4, box5, box6];
        new HDRCubeTextureLoader() //.setType(THREE.UnsignedByteType)
            .load(box, hdrCubeMap => {

                let pmremGenerator = new PMREMGenerator(hdrCubeMap);
                pmremGenerator.update(window['scene3d'].renderer);

                let pmremCubeUVPacker = new PMREMCubeUVPacker(pmremGenerator.cubeLods);
                pmremCubeUVPacker.update(window['scene3d'].renderer);

                let hdrCubeRenderTarget = pmremCubeUVPacker.CubeUVRenderTarget;

                this.gemFrontMaterial.envMap = this.gemBackMaterial.envMap = hdrCubeRenderTarget.texture;
                this.gemFrontMaterial.needsUpdate = this.gemBackMaterial.needsUpdate = true;

                hdrCubeMap.dispose();
                pmremGenerator.dispose();
                pmremCubeUVPacker.dispose();
            });

        this.flagLoad = true;
    }

    //初始化场景
    initScene() {
        super.initScene();

        this.scene = new THREE.Scene();

        //天空盒
        let skybox = [skybox1, skybox2, skybox3, skybox4, skybox5, skybox6];
        let picPath = new THREE.CubeTextureLoader();
        this.scene.background = picPath.load(skybox);

        //全景图
        /* const geometry = new THREE.SphereBufferGeometry(1000, 120, 80);
        geometry.scale(-1, 1, 1);
        const texture = new THREE.TextureLoader().load(panorama);
        const material = new THREE.MeshBasicMaterial({ map: texture });
        const mesh = new THREE.Mesh(geometry, material);
        this.scene.add(mesh); */
    }

    initGround() {

    }
    //初始化摄像机
    initCamera() {
        super.initCamera();
        this.camera.position.set(125, 45, 284);
    }
    //初始化光线
    initLight() {
        super.initLight();

        let n = 20;
        for (let i = 0; i < n; i++) {
            let point = new THREE.PointLight(0xFFFFFF * Math.random());
            point.position.set(150 * Math.random(), 150 * Math.random(), 150 * Math.random());
            point.decay = 20 * Math.random();
            point.power = 20 * Math.random() * Math.PI;
            this.scene.add(point);
        }
    }

    //渲染
    render() {
        super.render();
        //颜色及其他参数
        if (this.gemBackMaterial !== undefined && this.gemFrontMaterial !== undefined) {

            this.gemFrontMaterial.reflectivity = this.gemBackMaterial.reflectivity = 1.0;

            let newColor = this.gemBackMaterial.color;
            //newColor = new THREE.Color(0x880000);
            //newColor = new THREE.Color(0x888888);
            //newColor = new THREE.Color(0x000088);
            //newColor = new THREE.Color(0x008800);

            this.gemBackMaterial.color = this.gemFrontMaterial.color = newColor;
        }

        this.renderer.toneMappingExposure = 1.5;
    }

}