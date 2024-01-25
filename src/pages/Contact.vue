<template>
    <div class="page-container contact-container">

        <canvas id="contact-three"></canvas>

        <div class="contact-top">
            <p class="large-title text-light">
                <span class="hero-text-overlay">feel free</span>
                <br />to reach out anytime!
            </p>
        </div>

        <div class="contact-infos">
            <button id="email-button" class="contact-info">
                <div class="contact-title-container">
                    <div class="contact-title-move">
                        <h4 class="body-bold text-light-gray">get in touch!</h4>
                        <h4 class="body-light text-light-gray">copy email.</h4>
                    </div>
                </div>
                <p class="subtitle-light text-light-gray">email.</p>
            </button>
            <a href="https://www.linkedin.com/in/jeremystudio/" class="contact-info" target="_blank" rel="noopener noreferrer">
                <div class="contact-title-container">
                    <div class="contact-title-move">
                        <h4 class="body-bold text-light-gray">let us connect!</h4>
                        <h4 class="body-light text-light-gray">visit profile.</h4>
                    </div>
                </div>
                <p class="subtitle-light text-light-gray">linkedin.</p>
            </a>
            <a href="https://github.com/IKAMOworkshop" class="contact-info" target="_blank" rel="noopener noreferrer">
                <div class="contact-title-container">
                    <div class="contact-title-move">
                        <h4 class="body-bold text-light-gray">check my code!</h4>
                        <h4 class="body-light text-light-gray">visit profile.</h4>
                    </div>
                </div>
                <p class="subtitle-light text-light-gray">github.</p>
            </a>
        </div>

    </div>
</template>

<script setup>
    import {onMounted} from 'vue'
    import * as THREE from 'three'
    import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'

    /*
    THREE JS
    */
    const scene =  new THREE.Scene()

    // Loading Model
    const gltfLoader = new GLTFLoader()

    //Robot Model
    let planeModel = null

    gltfLoader.load(
        '/models/plane.glb',
        (gltf) => {
            planeModel = gltf.scene
            planeModel.scale.set(3, 2, 2)
            planeModel.rotation.set(1.3, 2.3, -.8)
            planeModel.position.set(2.3, .5, 0)
            scene.add(planeModel)
        }
    )

    // Size
    const sizes = {
        width: window.innerWidth,
        height: window.innerHeight,
    }

    // Light
    const ambientLight = new THREE.AmbientLight('#ffffff', .3)
    const directionalLight = new THREE.DirectionalLight('#ffffff', .7)
    directionalLight.position.set(-2, 6, 0)

    scene.add(ambientLight, directionalLight);

    // Camera
    const camera = new THREE.PerspectiveCamera(45, sizes.width / sizes.height, 0.1, 100)
    camera.position.z = 5
    scene.add(camera)

    onMounted(() => {
        window.scrollTo(0, 0)

        const emailButton = document.getElementById('email-button')

        const copyEmail = () => {
            navigator.clipboard.writeText("changjeremy0226@gmail.com").then(() => {
                console.log('Content copied to clipboard')
            },() => {
                console.error('Failed to copy')
            })
        }

        emailButton.addEventListener('click', copyEmail)

        /*
        THREE JS
        */
        const canvas = document.getElementById('contact-three')
        const renderer = new THREE.WebGLRenderer({
            canvas,
            antialias: true,
        })

        renderer.setSize(sizes.width, sizes.height)
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
        renderer.setClearAlpha(0)
        renderer.render(scene, camera)

        // Resize
        window.addEventListener('resize', () => {
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

        const clock = new THREE.Clock();

        // Loop Function
        const loop = () => {
            const elapsedTime = clock.getElapsedTime();

            // Model Animation
            if(planeModel){
                planeModel.position.y = Math.sin(elapsedTime * .8) * .15 + .1
            }

            // Scroll Camera
            camera.position.y = scrollY * -.003

            // Render Function
            renderer.render(scene, camera);
            window.requestAnimationFrame(loop);
        };

        loop();
    })
</script>