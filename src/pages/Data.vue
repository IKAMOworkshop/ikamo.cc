<template>
    <div>

        <canvas id="data-three"></canvas>
        
        <div class="section-container data-top">
            <p class="large-title text-light">
                <span class="hero-text-overlay">it’s all about data!</span>
                <br />here’s me in the form of data.
            </p>
        </div>

        <div class="section-container">
            <div class="col-40">
                <p class="body-bold text-light-gray">in my 8 years design journey, i went from designing “gfx” to complex digital products.</p>
            </div>
        </div>

        <div class="image-slider">
            <div class="slider-track">
                <div class="sliding-images">
                    <DataCard />
                </div>
                <div class="sliding-images">
                    <DataCard />
                </div>
            </div>
        </div>

        <div class="section-container">
            <p class="large-title text-light">
                <span class="hero-text-overlay">featured</span>
                <br /><span id="experience-title">experience.</span>
            </p>
        </div>

        <div class="section-container">
            <div class="col">
                <div class="col-40 left-trigger" id="experience-body">
                    <p class="subtitle-light text-light">Since I've graduated, I’ve worked on and learned many things.</p>
                </div>
                <div class="col-50">
                    <div class="data-container">
                        <ExperienceCard />
                    </div>
                </div>
            </div>
        </div>

        <div class="section-container">
            <p class="large-title text-light">
                <span class="hero-text-overlay">my</span>
                <br /><span id="learning-title">learngins.</span>
            </p>
        </div>

        <div class="section-container">
            <div class="col">
                <div class="col-50">
                    <div class="data-container">
                        <LearningCard />
                    </div>
                </div>
                <div class="col-40">
                    <p class="subtitle-light text-light">I’m always seeking for new exciting things to learn aside school.</p>
                </div>
            </div>
        </div>

        <div class="section-container">
            <p class="large-title text-light">
                <span class="hero-text-overlay">project</span>
                <br /><span id="capability-title">capability.</span>
            </p>
        </div>

        <div class="section-container">
            <div class="col">
                <div class="col-40" id="capability-body">
                    <p class="subtitle-light text-light ">I’m get asked what I do outside of work, a whole lot of these</p>
                </div>
                <div class="col-50">
                    <div class="data-container">
                        <DesignCapability />
                        <DevelopCapability />
                    </div>
                </div>
            </div>
        </div>

        <MainFooter />

    </div>
</template>

<script setup>
    import DataCard from '@/components/data/DataCard.vue'
    import ExperienceCard from '@/components/data/ExperienceCard.vue'
    import LearningCard from '@/components/data/LearningCard.vue'
    import DesignCapability from '@/components/data/DesignCapability.vue'
    import DevelopCapability from '@/components/data/DevelopCapability.vue'
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
    let graphsModel = null

    gltfLoader.load(
        '/models/graphs.glb',
        (gltf) => {
            graphsModel = gltf.scene
            graphsModel.scale.set(1.3, 1.3, 1.3)
            graphsModel.rotation.set(1.3, -.2, .4)
            graphsModel.position.set(1, 0, 0)
            scene.add(graphsModel)
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

        gsap.from('#experience-title', {
            scrollTrigger: {
                trigger: '#experience-title',
                start: 'top 85%',
                end: '150% 70%',
                scrub: true,
            },
            opacity: 0
        })

        gsap.from('#learning-title', {
            scrollTrigger: {
                trigger: '#learning-title',
                start: 'top 85%',
                end: '150% 70%',
                scrub: true,
            },
            opacity: 0
        })

        gsap.from('#capability-title', {
            scrollTrigger: {
                trigger: '#capability-title',
                start: 'top 85%',
                end: '150% 70%',
                scrub: true,
            },
            opacity: 0
        })

        /*
        THREE JS
        */
        const canvas = document.getElementById('data-three')
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
            if(graphsModel){
                graphsModel.position.y = Math.sin(elapsedTime * 1) * .06 - .3
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