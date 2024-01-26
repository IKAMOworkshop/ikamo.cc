<template>
    <div class="page-container contact-container">

        <canvas id="contact-three"></canvas>

        <div class="contact-top">
            <div class="large-title-container">
                <div class="large-title-move hero-text-overlay">
                    <h2 class="large-title text-light">feel free</h2>
                </div>
            </div>
            <div class="large-title-container">
                <div class="large-title-move hero-text-normal">
                    <h2 class="large-title text-light">to reach out</h2>
                </div>
            </div>
            <div class="large-title-container">
                <div class="large-title-move hero-text-normal">
                    <h2 class="large-title text-light">anytime!</h2>
                </div>
            </div>
        </div>

        <div class="contact-infos">
            <button id="email-button" class="contact-info">
                <div class="contact-title-container">
                    <div class="contact-gsap">
                        <div class="contact-title-move">
                            <h4 class="body-bold text-light-gray">get in touch!</h4>
                            <h4 class="body-light text-light-gray">copy email.</h4>
                        </div>
                    </div>
                </div>
                <div class="subtitle-container">
                    <div class="subtitle-move">
                        <p class="subtitle-light text-light-gray">email.</p>
                    </div>
                </div>
            </button>
            <a href="https://www.linkedin.com/in/jeremystudio/" class="contact-info" target="_blank" rel="noopener noreferrer">
                <div class="contact-title-container">
                    <div class="contact-gsap">
                        <div class="contact-title-move">
                            <h4 class="body-bold text-light-gray">let us connect!</h4>
                            <h4 class="body-light text-light-gray">visit profile.</h4>
                        </div>
                    </div>
                </div>
                <div class="subtitle-container">
                    <div class="subtitle-move">
                        <p class="subtitle-light text-light-gray">linkedin.</p>
                    </div>
                </div>
            </a>
            <a href="https://github.com/IKAMOworkshop" class="contact-info" target="_blank" rel="noopener noreferrer">
                <div class="contact-title-container">
                    <div class="contact-gsap">
                        <div class="contact-title-move">
                            <h4 class="body-bold text-light-gray">check my code!</h4>
                            <h4 class="body-light text-light-gray">visit profile.</h4>
                        </div>
                    </div>
                </div>
                <div class="subtitle-container">
                    <div class="subtitle-move">
                        <p class="subtitle-light text-light-gray">github.</p>
                    </div>
                </div>
            </a>
        </div>

    </div>
</template>

<script setup>
    import {onMounted} from 'vue'
    import { onBeforeRouteLeave } from 'vue-router'

    import gsap from 'gsap'
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

        // GSAP Animation
        const tl = gsap.timeline()
        tl
        .to('#contact-three',{
            duration: 1.5,
            opacity: 1,
        })
        .to('.hero-text-normal', {
            duration: 1.2,
            opacity: 1,
            y: -8,
            ease: 'power2.in0ut',
        },'-=1')
        .to('.hero-text-overlay',{
            duration: 1.2,
            opacity: 1,
            y: -8,
            ease: 'power2.in0ut',
        },'-=1.2')
        .to('.contact-gsap',{
            duration: 1.2,
            opacity: 1,
            y: -5,
            ease: 'power2.in0ut',
        },'-=1.2')
        .to('.subtitle-move', {
            duration: 1.2,
            opacity: 1,
            y: -10,
            ease: 'power2.in0ut',
        }, '-=1.2')

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

    onBeforeRouteLeave((to, from, next) => {
        const tl = gsap.timeline()

        tl
        .to('.hero-text-normal', {
            duration: .8,
            opacity: 0,
            y: 120,
            ease: 'power2.in0ut',
        })
        .to('.hero-text-overlay',{
            duration: .8,
            opacity: 0,
            y: 120,
            ease: 'power2.in0ut',
        },'-=.8')
        .to('.contact-gsap',{
            duration: .8,
            opacity: 0,
            y: 26,
            ease: 'power2.in0ut',
        },'-=.8')
        .to('.subtitle-move', {
            duration: .8,
            opacity: 0,
            y: 54,
            ease: 'power2.in0ut',
        }, '-=.8')
        .to('#contact-three',{
            duration: 1.2,
            opacity: 0,
            onComplete: () => {
                next()
            },
        },'-=1.2')
    })
</script>