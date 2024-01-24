<template>
    <div>

        <canvas id="about-three"></canvas>

        <div class="about-section-container section-container">
            <p class="large-title text-light">
                <span class="hero-text-overlay">everyday, i</span>
                <br />learn, design, build, and repeat.
            </p>
        </div>

        <div class="section-container">
            <div class="col-40">
                <p class="body-bold text-light-gray">i enjoy creating transformative and immersive experience by blending visuals and motion.</p>
            </div>
        </div>

        <div class="image-slider">
            <div class="slider-track">
                <div class="sliding-images">
                    <aboutImage />
                </div>
                <div class="sliding-images">
                    <aboutImage />
                </div>
            </div>
        </div>

        <div class="about-design-container">
            <div class="col">
                <div class="col-60"></div>
                <div class="col-full">
                    <h4 class="body-bold text-light-gray">rapid-learning.</h4>
                    <p id="rapid-learning" class="subtitle-light text-light">I strives in a fast-pace learning environment, as constant improvement motivates me.</p>
                </div>
            </div>
        </div>

        <div class="about-design-container">
            <div class="col">
                <div class="col-60"></div>
                <div class="col-full">
                    <h4 class="body-bold text-light-gray">mix and match.</h4>
                    <p id="mix-match" class="subtitle-light text-light">I enjoy blending different skills and things to craft the unexpected.</p>
                </div>
            </div>
        </div>
        

        <div class="about-design-container">
            <div class="col">
                <div class="col-60"></div>
                <div class="col-full">
                    <h4 class="body-bold text-light-gray">beyond just design.</h4>
                    <p id="beyond-design" class="subtitle-light text-light">I value being able of building out the things I designed. The process is enjoyable and eye-opening.</p>
                </div>
            </div>
        </div>

        <div class="about-section-container section-container">
            <p class="large-title text-light">
                <span class="hero-text-overlay">outside of design,</span>
                <br /><span id="interest-title">i also enjoy...</span>
            </p>
        </div>

        <div class="section-container">
            <div class="col">
                <div class="col-50 about-interests offset-down">
                    <aboutInterest />
                    <aboutInterest />
                </div>
                <div class="col-50 about-interests">
                    <aboutInterest />
                    <aboutInterest />
                </div>
            </div>
        </div>

        <div class="cases-title-container">
            <h2 class="large-title text-light">
                <span class="hero-text-overlay">selected</span>
                <br /><span id="about-works">works.</span>
            </h2>
        </div>

        <div class="selected-work-container">
            <div class="scroll-track">
                <div class="project-images">

                    <projectCase />

                </div>
            </div>
        </div>

        <MainFooter />

    </div>
</template>

<script setup>
    import aboutImage from '@/components/about/AboutImages.vue'
    import aboutInterest from '@/components/about/AboutInterest.vue'
    import projectCase from '@/components/ProjectCase.vue'
    import MainFooter from '@/components/MainFooter.vue'

    import { onUnmounted, onMounted } from 'vue'
    import * as THREE from 'three'
    import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
    import Lenis from '@studio-freight/lenis'
    import { gsap } from "gsap";
    import { ScrollTrigger } from "gsap/ScrollTrigger";

    gsap.registerPlugin(ScrollTrigger);

    const lenis = new Lenis({
        smooth: true,
        infinite: false,
    })

    function raf(time) {
        lenis.raf(time)
        requestAnimationFrame(raf)
    }

        requestAnimationFrame(raf)

        /*
    THREE JS
    */
    const scene =  new THREE.Scene()

    // Loading Model
    const gltfLoader = new GLTFLoader()

    //Robot Model
    let catModel = null

    gltfLoader.load(
        '/models/cat.glb',
        (gltf) => {
            catModel = gltf.scene
            catModel.scale.set(1, 1, 1)
            catModel.rotation.set(-.3, 2.5, .2)
            catModel.position.set(1.4, -5, .5)
            scene.add(catModel)
        }
    )

    // Keyboard Model
    let keyboardModel = null

    gltfLoader.load(
        '/models/keyboard.glb',
        (gltf) => {
            keyboardModel = gltf.scene
            keyboardModel.scale.set(0.4, 0.4, 0.4)
            keyboardModel.rotation.set(2, -1, 1)
            keyboardModel.position.set(.4, 1, -1)
            scene.add(keyboardModel)
        }
    )

    // Tablet Model
    let tabletModel = null

    gltfLoader.load(
        '/models/tablet.glb',
        (gltf) => {
            tabletModel = gltf.scene
            tabletModel.rotation.set(-.5, 2, .8)
            tabletModel.scale.set(0.6, 0.6, 0.6)
            tabletModel.position.set(.1, -1.8, 1.5)
            scene.add(tabletModel)
        }
    )

    // Controller Model
    let controllerModel = null

    gltfLoader.load(
        '/models/controller.glb',
        (gltf) => {
            controllerModel = gltf.scene
            controllerModel.rotation.set(1.2, -.5, .8)
            controllerModel.scale.set(0.16, 0.16, 0.16)
            controllerModel.position.set(1.8, 0, 2.1)
            scene.add(controllerModel)
        }
    )

    // Laptop Model
    let laptopModel = null

    gltfLoader.load(
        '/models/laptop.glb',
        (gltf) => {
            laptopModel = gltf.scene
            laptopModel.rotation.set(1, 1, -.5)
            laptopModel.scale.set(.9, .9, .9)
            laptopModel.position.set(-2.2, -5.8, 0)
            scene.add(laptopModel)
        }
    )

    // Laptop Model
    let mixerModel = null

    gltfLoader.load(
        '/models/mixer.glb',
        (gltf) => {
            mixerModel = gltf.scene
            mixerModel.rotation.set(.3, -2, 0)
            mixerModel.scale.set(.7, .7, .7)
            mixerModel.position.set(-2.2, -9, 0)
            scene.add(mixerModel)
        }
    )

    // Hammer Model
    let hammerModel = null

    gltfLoader.load(
        '/models/hammer.glb',
        (gltf) => {
            hammerModel = gltf.scene
            hammerModel.rotation.set(-.5, -1, -.5)
            hammerModel.scale.set(0.6, 0.6, 0.6)
            hammerModel.position.set(-2.2, -12.6, 0)
            scene.add(hammerModel)
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
    directionalLight.position.set(-8, 10, 6)

    scene.add(ambientLight, directionalLight);

    // Camera
    const camera = new THREE.PerspectiveCamera(45, sizes.width / sizes.height, 0.1, 100)
    camera.position.z = 5
    scene.add(camera)

    onMounted(() => {

        // Scroll
        let scrollY = window.scrollY
        window.addEventListener('scroll', () => {
            scrollY = window.scrollY
        })

        window.scrollTo(0, 0)

        // gsap.from('#rapid-learning', {
        //     scrollTrigger: {
        //         trigger: '#rapid-learning',
        //         start: 'top 85%',
        //         end: 'bottom 65%',
        //         scrub: true,

        //     },
        //     opacity: 0,
        // })

        // gsap.from('#mix-match', {
        //     scrollTrigger: {
        //         trigger: '#mix-match',
        //         start: 'top 85%',
        //         end: '170% 65%',
        //         scrub: true,
        //     },
        //     opacity: 0,
        // })

        // gsap.from('#beyond-design', {
        //     scrollTrigger: {
        //         trigger: '#beyond-design',
        //         start: 'top 85%',
        //         end: 'bottom 65%',
        //         scrub: true,
        //     },
        //     opacity: 0,
        // })

        // gsap.from('#interest-title', {
        //     scrollTrigger: {
        //         trigger: '#interest-title',
        //         start: 'top 85%',
        //         end: '180% 70%',
        //         scrub: true,
        //     },
        //     opacity: 0
        // })

        // gsap.from('#about-works', {
        //     scrollTrigger: {
        //         trigger: '#about-works',
        //         start: 'top 85%',
        //         end: '180% 70%',
        //         scrub: true,
        //     },
        //     opacity: 0
        // })

            /*
        THREE JS
        */
        const canvas = document.getElementById('about-three')
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
            if(catModel){
                catModel.position.y = Math.sin(elapsedTime * 1) * .06 - 1.5
            }

            if(keyboardModel){
                keyboardModel.position.y = Math.sin(elapsedTime * .8) *.15 + 1.4
            }

            if(tabletModel){
                tabletModel.position.y = Math.sin(elapsedTime * 1.2) *.15 - 1
            }

            if(controllerModel){
                controllerModel.position.y = Math.sin(elapsedTime * .6) *.15 - .5
            }

            // Scroll Camera
            camera.position.y = scrollY * -.003

            // Render Function
            renderer.render(scene, camera);
            window.requestAnimationFrame(loop);
        };

        loop();


    })

    onUnmounted(() => {
        function destroy(){
            lenis.destroy();
        }
        
        destroy();
    })
</script>