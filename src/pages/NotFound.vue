<template>
    <div class="scroll-stopper">
        <canvas id="not-found-three"></canvas>

        <div class="not-found-container">

            <div class="not-found-titles">
                <div class="hero-container">
                        <div class="hero-move hero-text-overlay home-title-overlay">
                            <h1 class="hero text-light">404</h1>
                        </div>
                    </div>
                    <div class="body-container">
                <div class="body-move">
                    <p class="body-bold text-light">oops! page not found!</p>
                </div>
            </div>
            </div>

            <router-link to="/">
                <button id="not-found" class="not-found-button">
                    <div class="not-found-title-container">
                        <div class="not-found-title-move">
                            <h1 class="caption-bold text-light-gray">take me home.</h1>
                            <h1 class="caption-bold text-light-gray">take me home.</h1>
                        </div>
                    </div>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path class="icon" fill-rule="evenodd" clip-rule="evenodd" d="M12 4.48279C12.225 4.48279 12.375 4.40772 12.525 4.25756C12.675 4.1074 12.75 3.95725 12.75 3.73201C12.75 3.50678 12.675 3.35662 12.525 3.20647C12.45 3.13139 12.375 3.05631 12.3 3.05631C12.15 2.98123 11.925 2.98123 11.7 3.05631C11.6625 3.09385 11.625 3.11262 11.5875 3.13139C11.55 3.15016 11.5125 3.16893 11.475 3.20647C11.325 3.35662 11.25 3.50678 11.25 3.73201C11.25 3.95725 11.325 4.1074 11.475 4.25756C11.625 4.40772 11.775 4.48279 12 4.48279ZM20.775 11.4652L14.4 5.08357C14.1 4.78326 13.65 4.78326 13.35 5.08357C13.05 5.38388 13.05 5.83435 13.35 6.13467L18.45 11.24L6.375 11.24C5.925 11.24 5.625 11.5403 5.625 11.9908C5.625 12.4412 5.925 12.7415 6.375 12.7415L18.45 12.7415L11.475 19.7238C11.175 20.0241 11.175 20.4746 11.475 20.7749C11.625 20.9251 11.85 21.0002 12 21.0002C12.15 21.0002 12.375 20.9251 12.525 20.7749L20.775 12.5163C21.075 12.216 21.075 11.7655 20.775 11.4652ZM4.3875 11.6152C4.40625 11.634 4.425 11.6528 4.425 11.6903C4.425 11.7279 4.44375 11.7466 4.4625 11.7654C4.48125 11.7842 4.5 11.8029 4.5 11.8405V11.9906C4.5 12.2159 4.425 12.366 4.275 12.5162C4.2375 12.5537 4.2 12.5725 4.1625 12.5913C4.125 12.61 4.0875 12.6288 4.05 12.6663C3.975 12.7414 3.825 12.7414 3.75 12.7414C3.525 12.7414 3.375 12.6663 3.225 12.5162C3.075 12.366 3 12.2159 3 11.9906V11.8405C3.075 11.7654 3.075 11.7654 3.075 11.6903C3.075 11.6528 3.09375 11.634 3.1125 11.6152C3.13125 11.5965 3.15 11.5777 3.15 11.5402L3.225 11.4651C3.45 11.2399 3.75 11.1648 3.975 11.3149C4.0125 11.3149 4.03125 11.3337 4.05 11.3525C4.06875 11.3712 4.0875 11.39 4.125 11.39C4.2 11.39 4.275 11.4651 4.275 11.4651C4.275 11.4651 4.35 11.4651 4.35 11.5402C4.35 11.5777 4.36875 11.5965 4.3875 11.6152Z" fill="#7C8D9F"/>
                    </svg>
                </button>
            </router-link>

        </div>
    </div>
</template>

<script setup>
    import {onMounted} from 'vue'
    import {useHead} from '@vueuse/head'
    import { onBeforeRouteLeave} from 'vue-router';

    import * as THREE from 'three'
    import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
    import gsap from 'gsap'

    useHead({
        title: 'IKAMOdev | 404',
        meta: [
            {
                name: 'description',
                content: 'An aspiring creative developer who enjoys crafting transformative and immersive experience.',
            },
            {
                name: 'og:title',
                property: 'og:title',
                content: 'IKAMOdev | 404',
            },
            {
                name: 'og:description',
                property: 'og:description',
                content: 'An aspiring creative developer who enjoys crafting transformative and immersive experience.',
            },
            {
                name: 'twitter:title',
                property: 'twitter:title',
                content: 'IKAMOdev | 404',
            },
            {
                name: 'twitter:description',
                property: 'twitter:description',
                content: 'An aspiring creative developer who enjoys crafting transformative and immersive experience.',
            },
        ]
    })

    /*
    THREE JS
    */
    const scene =  new THREE.Scene()

    // Loading Model
    const gltfLoader = new GLTFLoader()

    // Look at Mesh
    const lookAtMesh = new THREE.Mesh(
        new THREE.BoxGeometry(.01, .01, .01),
        new THREE.MeshBasicMaterial({
            color: 0x00ff00,
            transparent: true,
            opacity: 0
        })
    )
    scene.add(lookAtMesh)

    //Robot Model
    let robotModel = null
    const modelGroup = new THREE.Group()

    gltfLoader.load(
        '/models/robot.glb',
        (gltf) => {
            robotModel = gltf.scene
            modelGroup.add(robotModel)
            scene.add(modelGroup)
        }
    )

    // Cursor
    let cursor = {
        x: 0,
        y: 0,
    }

    window.addEventListener('mousemove', (event) => {
        cursor.x = event.clientX / window.innerWidth - .5
        cursor.y = - (event.clientY / window.innerHeight - .5)
    })

    // Size
    const sizes = {
        width: window.innerWidth,
        height: window.innerHeight,
    }

    // Light
    const ambientLight = new THREE.AmbientLight('#ffffff', .3)
    const directionalLight = new THREE.DirectionalLight('#ffffff', 1)
    directionalLight.position.set(-6, 6, 10)

    scene.add(ambientLight, directionalLight);

    // Camera
    const camera = new THREE.PerspectiveCamera(45, sizes.width / sizes.height, 0.1, 100)
    camera.position.z = 5
    scene.add(camera)

    onMounted(() => {
        // GSAP Animation
        const tl = gsap.timeline()
        tl
        .to('#not-found-three',{
            duration: 1.5,
            opacity: 1,
        })
        .to('.body-move', {
            duration: 1,
            y: -5,
            opacity: 1,
            ease: 'power2.in0ut',
        }, '-=1')
        .to('.hero-text-overlay', {
            duration: 1,
            opacity: 1,
            y: -5,
            ease: 'power2.in0ut',
        },'-=1')
        .to('#not-found', {
            duration: 1,
            opacity: 1,
            ease: 'power2.in0ut',
        }, '-=1')

        /*
        THREE JS
        */
        const canvas = document.getElementById('not-found-three')
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

            // Mesh Animation
            lookAtMesh.position.set(cursor.x, cursor.y, 4.5)
            
            if (robotModel) {
                robotModel.lookAt(new THREE.Vector3(lookAtMesh.position.x, lookAtMesh.position.y, lookAtMesh.position.z))
            }

            // Render Function
            renderer.render(scene, camera);
            window.requestAnimationFrame(loop);
        };

        loop();
    })

    onBeforeRouteLeave((to, from, next) => {
        const tl = gsap.timeline()
        tl
        .to('.body-move', {
            duration: .8,
            y: 22,
            opacity: 0,
            ease: 'power2.in0ut',
        })
        .to('.hero-text-overlay', {
            duration: .8,
            opacity: 0,
            y: 200,
            ease: 'power2.in0ut',
        },'-=.8')
        .to('#not-found', {
            duration: .8,
            opacity: 0,
            ease: 'power2.in0ut',
        },'-=.8')
        .to('#not-found-three',{
            duration: 1.2,
            opacity: 0,
            onComplete: () => {
                next()
            },
        },'-=1.4')
    })

</script>