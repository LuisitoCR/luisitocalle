import './App.css'
import * as THREE from 'three'
import { useEffect } from 'react'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'

function App() {
  let model: THREE.Group

  useEffect(() => {
    const canvas = document.getElementById("canvas") as HTMLCanvasElement

    const sizes = {
      width: innerWidth,
      height: innerHeight
    }

    //scene
    const scene: THREE.Scene = new THREE.Scene()

    //camera
    const camera: THREE.PerspectiveCamera = new THREE.PerspectiveCamera(
      75,
      sizes.width / sizes.height,
      0.1,
      1000
    )
    camera.position.set(-1.3, -0.4, 2)

    //renderer
    const renderer: THREE.WebGLRenderer = new THREE.WebGLRenderer({
      canvas: canvas,
      antialias: true,
      alpha: true
    })
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(window.devicePixelRatio);

    //3d model import
    const gltfLoader = new GLTFLoader()

    gltfLoader.load("./models/shiba.gltf", (gltf) => {
      model = gltf.scene
      model.scale.set(1.3, 1.3, 1.3)
      model.rotation.y = -Math.PI / 3

      scene.add(model)
    })

    //Animation
    const tick = () => {
      renderer.render(scene, camera)
      requestAnimationFrame(tick)
    }
    tick()

  }, [])

  return (
    <>
      <canvas id="canvas"></canvas>
      <div className="mainContent">
        <h1>Hello World!! desde luisitocalle</h1>
      </div>
    </>

  )
}

export default App
