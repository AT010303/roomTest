import './style.css'
import * as dat from 'lil-gui'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js'

/**
 * Base
 */
// Debug
const gui = new dat.GUI({
    width: 400
})

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

/**
 * Loaders
 */
// Texture loader
const textureLoader = new THREE.TextureLoader()

// Draco loader
const dracoLoader = new DRACOLoader()
dracoLoader.setDecoderPath('draco/')

// GLTF loader
const gltfLoader = new GLTFLoader()
gltfLoader.setDRACOLoader(dracoLoader)


/**
 * textures
 */

const BakedTexture = textureLoader.load('furniture.jpg')
BakedTexture.flipY = false
BakedTexture.encoding = THREE.sRGBEncoding

const BakedTexture1 = textureLoader.load('deskShelfStuf.jpg')
BakedTexture1.flipY = false
BakedTexture1.encoding = THREE.sRGBEncoding

const BakedTexture2 = textureLoader.load('chairTvclockstuf.jpg')
BakedTexture2.flipY = false
BakedTexture2.encoding = THREE.sRGBEncoding
BakedTexture1.magFilter = THREE.NearestFilter
BakedTexture1.minFilter = THREE.NearestFilter
BakedTexture.minFilter = THREE.NearestFilter
BakedTexture2.minFilter = THREE.NearestFilter


const potTexture = textureLoader.load('plant/pot.jpg')
potTexture.flipY = false;
potTexture.encoding = THREE.sRGBEncoding;
potTexture.magFilter = THREE.NearestFilter;
potTexture.minFilter = THREE.NearestFilter;

const soilTexture = textureLoader.load('plant/soil.jpg')
soilTexture.flipY = false;
soilTexture.encoding = THREE.sRGBEncoding;
soilTexture.magFilter = THREE.NearestFilter;
soilTexture.minFilter = THREE.NearestFilter;

const stemTexture = textureLoader.load('plant/stem.jpg')
stemTexture.flipY = false;
stemTexture.encoding = THREE.sRGBEncoding;
stemTexture.magFilter = THREE.NearestFilter;
stemTexture.minFilter = THREE.NearestFilter;


const leaf0Texture = textureLoader.load('plant/leaf0.jpg')
leaf0Texture.flipY = false;
leaf0Texture.encoding = THREE.sRGBEncoding;
leaf0Texture.magFilter = THREE.NearestFilter;
leaf0Texture.minFilter = THREE.NearestFilter;

const leaf1Texture = textureLoader.load('plant/leaf1.jpg')
leaf1Texture.flipY = false;
leaf1Texture.encoding = THREE.sRGBEncoding;
leaf1Texture.magFilter = THREE.NearestFilter;
leaf1Texture.minFilter = THREE.NearestFilter;

const leaf2Texture = textureLoader.load('plant/leaf2.jpg')
leaf2Texture.flipY = false;
leaf2Texture.encoding = THREE.sRGBEncoding;
leaf2Texture.magFilter = THREE.NearestFilter;
leaf2Texture.minFilter = THREE.NearestFilter;

const leaf3Texture = textureLoader.load('plant/leaf3.jpg')
leaf3Texture.flipY = false;
leaf3Texture.encoding = THREE.sRGBEncoding;
leaf3Texture.magFilter = THREE.NearestFilter;
leaf3Texture.minFilter = THREE.NearestFilter;

const leaf4Texture = textureLoader.load('plant/leaf4.jpg')
leaf4Texture.flipY = false;
leaf4Texture.encoding = THREE.sRGBEncoding;
leaf4Texture.magFilter = THREE.NearestFilter;
leaf4Texture.minFilter = THREE.NearestFilter;

const leaf5Texture = textureLoader.load('plant/leaf5.jpg')
leaf5Texture.flipY = false;
leaf5Texture.encoding = THREE.sRGBEncoding;
leaf5Texture.magFilter = THREE.NearestFilter;
leaf5Texture.minFilter = THREE.NearestFilter;

const leaf6Texture = textureLoader.load('plant/leaf6.jpg')
leaf6Texture.flipY = false;
leaf6Texture.encoding = THREE.sRGBEncoding;
leaf6Texture.magFilter = THREE.NearestFilter;
leaf6Texture.minFilter = THREE.NearestFilter;

const leaf7Texture = textureLoader.load('plant/leaf7.jpg')
leaf7Texture.flipY = false;
leaf7Texture.encoding = THREE.sRGBEncoding;
leaf7Texture.magFilter = THREE.NearestFilter;
leaf7Texture.minFilter = THREE.NearestFilter;

const leaf8Texture = textureLoader.load('plant/leaf8.jpg')
leaf8Texture.flipY = false;
leaf8Texture.encoding = THREE.sRGBEncoding;
leaf8Texture.magFilter = THREE.NearestFilter;
leaf8Texture.minFilter = THREE.NearestFilter;

const leaf9Texture = textureLoader.load('plant/leaf9.jpg')
leaf9Texture.flipY = false;
leaf9Texture.encoding = THREE.sRGBEncoding;
leaf9Texture.magFilter = THREE.NearestFilter;
leaf9Texture.minFilter = THREE.NearestFilter;

const leaf10Texture = textureLoader.load('plant/leaf10.jpg')
leaf10Texture.flipY = false;
leaf10Texture.encoding = THREE.sRGBEncoding;
leaf10Texture.magFilter = THREE.NearestFilter;
leaf10Texture.minFilter = THREE.NearestFilter;
/**
 * Object
 */
// const cube = new THREE.Mesh(
//     new THREE.BoxGeometry(1, 1, 1),
//     new THREE.MeshBasicMaterial()
// )

// scene.add(cube)

/**
 * Material
 */

const bakedMaterial = new THREE.MeshBasicMaterial({ map: BakedTexture, overdraw: 0.5})
const bakedMaterial1 = new THREE.MeshBasicMaterial({ map: BakedTexture1, overdraw: 0.5})
const bakedMaterial2 = new THREE.MeshBasicMaterial({ map: BakedTexture2, overdraw: 0.5})
const potMaterial = new THREE.MeshBasicMaterial({ map: potTexture, overdraw: 0.5})
const soilMaterial = new THREE.MeshBasicMaterial({ map: soilTexture, overdraw: 0.5})
const stemMaterial = new THREE.MeshBasicMaterial({ map: stemTexture, overdraw: 0.5})
const leaf0Material = new THREE.MeshBasicMaterial({ map: leaf0Texture, overdraw: 0.5})
const leaf1Material = new THREE.MeshBasicMaterial({ map: leaf1Texture, overdraw: 0.5})
const leaf2Material = new THREE.MeshBasicMaterial({ map: leaf2Texture, overdraw: 0.5})
const leaf3Material = new THREE.MeshBasicMaterial({ map: leaf3Texture, overdraw: 0.5})
const leaf4Material = new THREE.MeshBasicMaterial({ map: leaf4Texture, overdraw: 0.5})
const leaf5Material = new THREE.MeshBasicMaterial({ map: leaf5Texture, overdraw: 0.5})
const leaf6Material = new THREE.MeshBasicMaterial({ map: leaf6Texture, overdraw: 0.5})
const leaf7Material = new THREE.MeshBasicMaterial({ map: leaf7Texture, overdraw: 0.5})
const leaf8Material = new THREE.MeshBasicMaterial({ map: leaf8Texture, overdraw: 0.5})
const leaf9Material = new THREE.MeshBasicMaterial({ map: leaf9Texture, overdraw: 0.5})
const leaf10Material = new THREE.MeshBasicMaterial({ map: leaf10Texture , overdraw: 0.5})

/**
 * model
 */

gltfLoader.load(
    'roomFurniture.glb',
    (gltf) =>{

        gltf.scene.traverse((child) => {
            child.material = bakedMaterial;
        })
        scene.add(gltf.scene);
        console.log(gltf.scene);  
    }
)

gltfLoader.load(
    'deskShelfStuf.glb',
    (gltf) =>{

        gltf.scene.traverse((child) => {
            child.material = bakedMaterial1;
        })
        scene.add(gltf.scene);
        console.log(gltf.scene);  
    }
)

gltfLoader.load(
    'chairTvclockstuf.glb',
    (gltf) =>{

        gltf.scene.traverse((child) => {
            child.material = bakedMaterial2;
        })
        scene.add(gltf.scene);
        console.log(gltf.scene);  
    }
)


gltfLoader.load(
    'plant/plant.glb',
    (gltf) =>{

        const pot = gltf.scene.children.find((child) => child.name === 'pot')
        const soil = gltf.scene.children.find((child) => child.name === 'Dirt')
        const stem = gltf.scene.children.find((child) => child.name === 'stem')
        const leaf0 = gltf.scene.children.find((child) => child.name === 'leaf0')
        const leaf1 = gltf.scene.children.find((child) => child.name === 'leaf1')
        const leaf2 = gltf.scene.children.find((child) => child.name === 'leaf2')
        const leaf3 = gltf.scene.children.find((child) => child.name === 'leaf3')
        const leaf4 = gltf.scene.children.find((child) => child.name === 'leaf4')
        const leaf5 = gltf.scene.children.find((child) => child.name === 'leaf5')
        const leaf6 = gltf.scene.children.find((child) => child.name === 'leaf6')
        const leaf7 = gltf.scene.children.find((child) => child.name === 'leaf7')
        const leaf8 = gltf.scene.children.find((child) => child.name === 'leaf8')
        const leaf9 = gltf.scene.children.find((child) => child.name === 'leaf9')
        const leaf10 = gltf.scene.children.find((child) => child.name === 'leaf10')
        pot.material = potMaterial
        soil.material = soilMaterial
        stem.material = stemMaterial
        leaf0.material = leaf0Material
        leaf1.material = leaf1Material
        leaf2.material = leaf2Material
        leaf3.material = leaf3Material
        leaf4.material = leaf4Material
        leaf5.material = leaf5Material
        leaf6.material = leaf6Material
        leaf7.material = leaf7Material
        leaf8.material = leaf8Material
        leaf9.material = leaf9Material
        leaf10.material = leaf10Material
        scene.add(gltf.scene);
        console.log(gltf.scene);  
    }
)



/**
 * Sizes
 */
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

window.addEventListener('resize', () =>
{
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(30, sizes.width / sizes.height, 0.1, 100)
camera.position.x = 10
camera.position.y = 10
camera.position.z = -10
scene.add(camera)

// Controls
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true
controls.minPolarAngle=0;
controls.maxPolarAngle=Math.PI * 0.45;



/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    antialias: true,
    // alpha: true
    
})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
renderer.outputEncoding = THREE.sRGBEncoding
renderer.physicallyCorrectLights = true
// renderer.toneMapping = THREE.ACESFilmicToneMapping


/**
 * Animate
 */
const clock = new THREE.Clock()

const tick = () =>
{
    const elapsedTime = clock.getElapsedTime()

    // Update controls
    controls.update()

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()