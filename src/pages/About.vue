<template>
    <div class="page-container">

        <canvas id="about-three"></canvas>
        <div id="about-main" class="about-main"></div>

        <div class="about-section-container section-container about-hero-title">
            <div class="large-title-container">
                <div class="large-title-move hero-text-overlay about-title-overlay">
                    <h2 class="large-title text-light">everyday, i</h2>
                </div>
            </div>
            <div class="large-title-container">
                <div class="large-title-move hero-text-normal about-title-normal">
                    <h2 class="large-title text-light">learn, design,</h2>
                </div>
            </div>
            <div class="large-title-container">
                <div class="large-title-move hero-text-normal about-title-normal">
                    <h2 class="large-title text-light">and build.</h2>
                </div>
            </div>
        </div>

        <div class="section-container">
            <div class="col-40">
                <div class="body-container">
                    <div class="body-move">
                        <p class="body-bold text-light-gray">i enjoy crafting transformative</p>
                    </div>
                </div>
                <div class="body-container">
                    <div class="body-move">
                        <p class="body-bold text-light-gray">and immersive experience by</p>
                    </div>
                </div>
                <div class="body-container">
                    <div class="body-move">
                        <p class="body-bold text-light-gray">blending visuals and motion.</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="image-slider about-gsap">
            <div class="slider-track">
                <div class="sliding-images">
                    <aboutImage />
                </div>
                <div class="sliding-images">
                    <aboutImage />
                </div>
            </div>
        </div>

        <div class="about-design-container about-gsap">
            <div class="col about-design-col">
                <div class="col-60">
                    <div id="laptop" class="about-design"></div>
                </div>
                <div class="col-60 about-design-text">
                    <h4 class="body-bold text-light-gray">rapid-learning.</h4>
                    <p id="rapid-learning" class="subtitle-light text-light">I strives in a fast-pace learning environment, as constant improvement motivates me.</p>
                </div>
            </div>
        </div>

        <div class="about-design-container about-gsap">
            <div class="col about-design-col">
                <div class="col-60">
                    <div id="mixer" class="about-design"></div>
                </div>
                <div class="col-60 about-design-text">
                    <h4 class="body-bold text-light-gray">mix and match.</h4>
                    <p id="mix-match" class="subtitle-light text-light">I enjoy blending different skills and things to craft the unexpected.</p>
                </div>
            </div>
        </div>
        

        <div class="about-design-container about-gsap">
            <div class="col about-design-col">
                <div class="col-60">
                    <div id="hammer" class="about-design"></div>
                </div>
                <div class="col-60 about-design-text">
                    <h4 class="body-bold text-light-gray">beyond just design.</h4>
                    <p id="beyond-design" class="subtitle-light text-light">I value being able of building out the things I designed. The process is enjoyable and eye-opening.</p>
                </div>
            </div>
        </div>

        <div class="about-section-container section-container about-gsap">
            <p class="large-title text-light">
                <span class="hero-text-overlay">outside of design,</span>
                <br /><span id="interest-title">i also enjoy...</span>
            </p>
        </div>

        <div class="section-container about-gsap">
            <div class="col">
                <div id="interest-1" class="col-50 about-interests offset-down">
                    <div id="illustration" class="about-interest">
                        <p class="caption-bold text-light-gray">drawing illustrations.</p>
                    </div>
                    <div id="tech" class="about-interest">
                        <p class="caption-bold text-light-gray">collecting tech.</p>
                    </div>
                </div>
                <div class="col-50 about-interests">
                    <div id="cat" class="about-interest">
                        <p class="caption-bold text-light-gray">touching cats.</p>
                    </div>
                    <div id="game" class="about-interest">
                        <p class="caption-bold text-light-gray">playing games.</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="cases-title-container about-gsap">
            <h2 class="large-title text-light">
                <span class="hero-text-overlay">selected</span>
                <br /><span id="about-works">works.</span>
            </h2>
        </div>

        <div class="selected-work-container about-gsap">
            <div class="scroll-track">
                <div class="project-images">
                    <projectCase />
                </div>
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
    import projectCase from '@/components/ProjectCase.vue'
    import MainFooter from '@/components/MainFooter.vue'

    import { onUnmounted, onMounted } from 'vue'
    import {useHead} from '@vueuse/head'
    import { onBeforeRouteLeave } from 'vue-router'

    import * as THREE from 'three'
    import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'

    import Lenis from '@studio-freight/lenis'
    import { gsap } from "gsap";
    import { ScrollTrigger } from "gsap/ScrollTrigger";

    useHead({
        title: 'IKAMOdev | About',
        meta: [
            {
                name: 'description',
                content: 'An aspiring creative developer who enjoys crafting transformative and immersive experience.',
            },
            {
                name: 'og:title',
                content: 'IKAMOdev | About',
            },
            {
                name: 'og:description',
                content: 'An aspiring creative developer who enjoys crafting transformative and immersive experience.',
            },
            {
                name: 'twitter:title',
                content: 'IKAMOdev | About',
            },
            {
                name: 'twitter:description',
                content: 'An aspiring creative developer who enjoys crafting transformative and immersive experience.',
            },
        ]
    })

    gsap.registerPlugin(ScrollTrigger)

    const lenis = new Lenis({
        smooth: true,
        infinite: false,
    })

    function raf(time) {
        lenis.raf(time)
        requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    // Cursor
    const cursor = new THREE.Vector2();

    window.addEventListener('mousemove', (event) => {
        cursor.x = event.clientX / sizes.width * 2 - 1;
        cursor.y = - (event.clientY / sizes.height * 2 - 1);
    });

        /*
    THREE JS
    */
	function makeScene( elem ) {

        const scene = new THREE.Scene()

        const fov = 45
        const aspect = 2
        const near = 0.1
        const far = 1000
        const camera = new THREE.PerspectiveCamera( fov, aspect, near, far )
        camera.position.set( 0, 0, 5 )
        camera.lookAt( 0, 0, 0 )

        {
            const ambientLight = new THREE.AmbientLight('#ffffff', .3)
            const directionalLight = new THREE.DirectionalLight( '#ffffff', .7 )
            directionalLight.position.set(-20, 20, 6)
            scene.add( directionalLight, ambientLight )

        }

        return { scene, camera, elem }

    }

    // Model Loader
    const gltfLoader = new GLTFLoader()

    // Size
    const sizes = {
        width: window.innerWidth,
        height: window.innerHeight,
    }

    onMounted(() => {

        // Scroll
        let scrollY = window.scrollY
        window.addEventListener('scroll', () => {
            scrollY = window.scrollY
        })

        window.scrollTo(0, 0)

        // GSAP Animation
        const tl = gsap.timeline()

        tl
        .to('#about-three',{
            duration: 1.5,
            opacity: 1,
        })
        .to('.about-title-normal', {
            duration: 1.2,
            opacity: 1,
            y: -8,
            ease: 'power2.in0ut',
        },'-=1')
        .to('.about-title-overlay',{
            duration: 1.2,
            opacity: 1,
            y: -8,
            ease: 'power2.in0ut',
        },'-=1.2')
        .to('.body-move', {
            duration: 1.2,
            y: 0,
            opacity: 1,
            ease: 'power2.in0ut',
        },'-=1.2')

        gsap.to('.about-gsap',{
            duration: 1.2,
            opacity: 1,
        })

            /*
        THREE JS
        */
        const canvas = document.getElementById('about-three')
        const renderer = new THREE.WebGLRenderer({
            canvas,
            antialias: true,
        })
        renderer.setClearAlpha(0)

        // Main Scene
        function mainSceneSetup() {

            const sceneInfo = makeScene( document.querySelector( '#about-main' ) )

            // Main Model List
            let catModel = null
            let keyboardModel = null
            let tabletModel = null
            let controllerModel = null

            //Cat Model
            gltfLoader.load(
                '/models/cat.glb',
                (gltf) => {
                    catModel = gltf.scene
                    catModel.scale.set(1, 1, 1)
                    catModel.rotation.set(-.3, 2.5, .2)
                    catModel.position.set(2, 0, -.5)
                    sceneInfo.scene.add( catModel )
                    sceneInfo.catModel = catModel
                }
            )

            // Keyboard Model
            gltfLoader.load(
                '/models/keyboard.glb',
                (gltf) => {
                    keyboardModel = gltf.scene
                    keyboardModel.scale.set(0.4, 0.4, 0.4)
                    keyboardModel.rotation.set(1, -.5, .5)
                    keyboardModel.position.set(.4, 1, -1)
                    sceneInfo.scene.add( keyboardModel )
                    sceneInfo.keyboardModel = keyboardModel
                }
            )

            // Tablet Model
            gltfLoader.load(
                '/models/tablet.glb',
                (gltf) => {
                    tabletModel = gltf.scene
                    tabletModel.rotation.set(-.5, 2, .8)
                    tabletModel.scale.set(0.6, 0.6, 0.6)
                    tabletModel.position.set(0, -1.8, 1.5)
                    sceneInfo.scene.add( tabletModel )
                    sceneInfo.tabletModel = tabletModel
                }
            )

            // Controller Model
            gltfLoader.load(
                '/models/controller.glb',
                (gltf) => {
                    controllerModel = gltf.scene
                    controllerModel.rotation.set(1.2, -.5, .8)
                    controllerModel.scale.set(0.16, 0.16, 0.16)
                    controllerModel.position.set(1.8, 0, 2.2)
                    sceneInfo.scene.add( controllerModel )
                    sceneInfo.controllerModel = controllerModel
                }
            )

            sceneInfo.renderAlpha = 0
            sceneInfo.renderColor = 0x000000

            return sceneInfo

        }

        // Laptop Scene
        function laptopSceneSetup() {

            const sceneInfo = makeScene( document.querySelector( '#laptop' ) )

            // Laptop Model
            let laptopModel = null

            gltfLoader.load(
                '/models/laptop.glb',
                (gltf) => {
                    laptopModel = gltf.scene
                    laptopModel.rotation.set(1, .6, -.5)
                    laptopModel.scale.set(1.4, 1.4, 1.4)
                    laptopModel.position.set(0.2, .2, 0)
                    sceneInfo.scene.add( laptopModel )
                    sceneInfo.laptopModel = laptopModel
                }
            )

            sceneInfo.renderAlpha = 0
            sceneInfo.renderColor = 0x3D4750

            return sceneInfo

        }

        // Mixer Scene
        function mixerSceneSetup() {

            const sceneInfo = makeScene( document.querySelector( '#mixer' ) )

            // Laptop Model
            let mixerModel = null

            gltfLoader.load(
                '/models/mixer.glb',
                (gltf) => {
                    mixerModel = gltf.scene
                    mixerModel.rotation.set(0, -1.5, 0)
                    mixerModel.scale.set(.9, .9, .9)
                    mixerModel.position.set(0, 0, 0)
                    sceneInfo.scene.add( mixerModel )
                    sceneInfo.mixerModel = mixerModel
                }
            )

            sceneInfo.renderAlpha = 0
            sceneInfo.renderColor = 0x3D4750

            return sceneInfo

        }

        // Hammer Scene
        function hammerSceneSetup() {

            const sceneInfo = makeScene( document.querySelector( '#hammer' ) )

            // Laptop Model
            let hammerModel = null

            gltfLoader.load(
                '/models/hammer.glb',
                (gltf) => {
                    hammerModel = gltf.scene
                    hammerModel.rotation.set(0, .5, 0)
                    hammerModel.scale.set(.9, .9, .9)
                    hammerModel.position.set(.1, 0, 0)
                    sceneInfo.scene.add( hammerModel )
                    sceneInfo.hammerModel = hammerModel
                }
            )

            sceneInfo.renderAlpha = 0
            sceneInfo.renderColor = 0x3D4750

            return sceneInfo

        }

        // Illustartion Scene
        function illustrationSceneSetup() {

            const sceneInfo = makeScene( document.querySelector( '#illustration' ) )

            // Tablet Model
            let tabletModel = null

            gltfLoader.load(
                '/models/tablet.glb',
                (gltf) => {
                    tabletModel = gltf.scene
                    tabletModel.rotation.set(.5, 1, 0)
                    tabletModel.scale.set(2.2, 2.2, 2.2)
                    tabletModel.position.set(0, .5, 0)
                    sceneInfo.scene.add( tabletModel )
                    sceneInfo.tabletModel = tabletModel
                }
            )

            sceneInfo.renderAlpha = 0
            sceneInfo.renderColor = 0x3D4750

            return sceneInfo

        }

        // Tech Scene
        function techSceneSetup() {

            const sceneInfo = makeScene( document.querySelector( '#tech' ) )

            // Keyboard Model
            let keyboardModel = null

            gltfLoader.load(
                '/models/keyboard.glb',
                (gltf) => {
                    keyboardModel = gltf.scene
                    keyboardModel.scale.set(1.6, 1.6, 1.6)
                    keyboardModel.rotation.set(.6, -.5, 0)
                    keyboardModel.position.set(.2, 0, 0)
                    sceneInfo.scene.add( keyboardModel )
                    sceneInfo.keyboardModel = keyboardModel
                }
            )

            sceneInfo.renderAlpha = 0
            sceneInfo.renderColor = 0x3D4750

            return sceneInfo

        }

        // Cat Scene
        function catSceneSetup() {

            const sceneInfo = makeScene( document.querySelector( '#cat' ) )

            // Cat Model
            let catModel = null

            gltfLoader.load(
                '/models/cat.glb',
                (gltf) => {
                    catModel = gltf.scene
                    catModel.scale.set(1, 1, 1)
                    catModel.rotation.set(-.3, 2.5, .2)
                    catModel.position.set(.5, 0, 0)
                    sceneInfo.scene.add( catModel )
                    sceneInfo.catModel = catModel
                }
            )

            sceneInfo.renderAlpha = 0
            sceneInfo.renderColor = 0x3D4750

            return sceneInfo

        }

        // Game Scene
        function gameSceneSetup() {

            const sceneInfo = makeScene( document.querySelector( '#game' ) )

            // Controller Model
            let controllerModel = null

            gltfLoader.load(
                '/models/controller.glb',
                (gltf) => {
                    controllerModel = gltf.scene
                    controllerModel.rotation.set(.6, -.2, .3)
                    controllerModel.scale.set(1.2, 1.2, 1.2)
                    controllerModel.position.set(0, 0, 0)
                    sceneInfo.scene.add( controllerModel )
                    sceneInfo.controllerModel = controllerModel
                }
            )

            sceneInfo.renderAlpha = 0
            sceneInfo.renderColor = 0x3D4750

            return sceneInfo

        }

        // Saving Scene Info
        const mainSceneInfo = mainSceneSetup()

        const laptopSceneInfo = laptopSceneSetup()
        const mixerSceneInfo = mixerSceneSetup()
        const hammerSceneInfo = hammerSceneSetup()

        const illustrationSceneInfo = illustrationSceneSetup()
        const techSceneInfo = techSceneSetup()
        const catSceneInfo = catSceneSetup()
        const gameSceneInfo = gameSceneSetup()

        renderer.setSize(sizes.width, sizes.height)
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

        // Resize
        window.addEventListener('resize', () => {
            // Update sizes
            sizes.width = window.innerWidth
            sizes.height = window.innerHeight
            
            // Update renderer
            renderer.setSize(sizes.width, sizes.height)
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
        })

        function resizeRendererToDisplaySize( renderer ) {

        const canvas = renderer.domElement
        const width = canvas.clientWidth
        const height = canvas.clientHeight
        const needResize = canvas.width !== width || canvas.height !== height
        if ( needResize ) {

            renderer.setSize( width, height, false )

        }

        return needResize;

        }

        function renderSceneInfo( sceneInfo ) {

            const { scene, camera, elem, renderAlpha, renderColor } = sceneInfo

            // get the viewport relative position of this element
            const { left, right, top, bottom, width, height } = elem.getBoundingClientRect()

            const isOffscreen =
            bottom < 0 ||
            top > renderer.domElement.clientHeight ||
            right < 0 ||
            left > renderer.domElement.clientWidth

            if ( isOffscreen ) {

                return

            }

            camera.aspect = width / height;
            camera.updateProjectionMatrix()

            const positiveYUpBottom = renderer.domElement.clientHeight - bottom
            renderer.setScissor( left, positiveYUpBottom, width, height )
            renderer.setViewport( left, positiveYUpBottom, width, height )
            renderer.setClearColor(renderColor, renderAlpha)

            renderer.render( scene, camera )

        }

        const clock = new THREE.Clock()

        // Loop Function
        const loop = (time) => {
            const elapsedTime = clock.getElapsedTime()

            resizeRendererToDisplaySize( renderer )

            renderer.setScissorTest( false )
            renderer.clear( true, true )
            renderer.setScissorTest( true )

            // Model Animation
            if(mainSceneInfo.catModel){
                mainSceneInfo.catModel.position.y = Math.sin(elapsedTime * 1) * .06 - .5
            }
            
            if(mainSceneInfo.keyboardModel){
                mainSceneInfo.keyboardModel.position.y = Math.sin(elapsedTime * .8) *.15 + 1.6
            }

            if(mainSceneInfo.tabletModel){
                mainSceneInfo.tabletModel.position.y = Math.sin(elapsedTime * 1.2) *.15 - 1
            }

            if(mainSceneInfo.controllerModel){
                mainSceneInfo.controllerModel.position.y = Math.sin(elapsedTime * .6) *.15 - .5
            }

            if(laptopSceneInfo.laptopModel){
                laptopSceneInfo.laptopModel.position.y = Math.sin(elapsedTime * 1.6) *.15 + .2
            }

            if(mixerSceneInfo.mixerModel){
                mixerSceneInfo.mixerModel.position.y = Math.sin(elapsedTime * 1.6) *.15 -.1
            }

            if(hammerSceneInfo.hammerModel){
                hammerSceneInfo.hammerModel.position.y = Math.sin(elapsedTime * 1.6) *.15
            }

            if(illustrationSceneInfo.tabletModel){
                illustrationSceneInfo.tabletModel.position.y = Math.sin(elapsedTime * 1.6) *.15 + .5
                document.querySelector( '#illustration' ).addEventListener('mouseover', () => {
                    gsap.to(illustrationSceneInfo.tabletModel.rotation, {
                        duration: 2,
                        ease: 'power2.inOut',
                        y: '+=6.3'
                    })
                })
            }

            if(techSceneInfo.keyboardModel){
                techSceneInfo.keyboardModel.position.y = Math.sin(elapsedTime * 1.6) *.15 + .5
                document.querySelector( '#tech' ).addEventListener('mouseover', () => {
                    gsap.to(techSceneInfo.keyboardModel.rotation, {
                        duration: 2,
                        ease: 'power2.inOut',
                        y: '+=6.3'
                    })
                })
            }

            if(catSceneInfo.catModel){
                catSceneInfo.catModel.position.y = Math.sin(elapsedTime * 1.6) *.15 - .45
                document.querySelector( '#cat' ).addEventListener('mouseover', () => {
                    gsap.to(catSceneInfo.catModel.rotation, {
                        duration: 2,
                        ease: 'power2.inOut',
                        y: '+=6.3'
                    })
                })
            }

            if(gameSceneInfo.controllerModel){
                gameSceneInfo.controllerModel.position.y = Math.sin(elapsedTime * 1.6) *.15
                document.querySelector( '#game' ).addEventListener('mouseover', () => {
                    gsap.to(gameSceneInfo.controllerModel.rotation, {
                        duration: 2,
                        ease: 'power2.inOut',
                        y: '+=6.3'
                    })
                })
            }

            // Scroll Camera
            mainSceneInfo.camera.position.y = scrollY * -.003

            // Render Function
            renderSceneInfo(mainSceneInfo)

            renderSceneInfo(laptopSceneInfo)
            renderSceneInfo(mixerSceneInfo)
            renderSceneInfo(hammerSceneInfo)

            renderSceneInfo(illustrationSceneInfo)
            renderSceneInfo(techSceneInfo)
            renderSceneInfo(catSceneInfo)
            renderSceneInfo(gameSceneInfo)
            window.requestAnimationFrame(loop);
        };
    
    window.requestAnimationFrame(loop);

    })

    onUnmounted(() => {
        window.scrollTo(0, 0)
        function destroy(){
            lenis.destroy();
        }
        
        destroy();
    })

    onBeforeRouteLeave((to, from, next) => {
        const tl = gsap.timeline()

        tl
        .to('.about-title-normal', {
            duration: .8,
            opacity: 0,
            y: 120,
            ease: 'power2.in0ut',
        })
        .to('.about-title-overlay',{
            duration: .8,
            opacity: 0,
            y: 120,
            ease: 'power2.in0ut',
        },'-=.8')
        .to('.body-move', {
            duration: .8,
            y: 28,
            opacity: 1,
            ease: 'power2.in0ut',
        },'-=.8')
        .to('#about-three',{
            duration: 1.2,
            opacity: 0,
            onComplete: () => {
                next()
            },
        },'-=1.2')

        gsap.to('.about-gsap',{
            duration: 1,
            opacity: 0,
        })
    })
</script>