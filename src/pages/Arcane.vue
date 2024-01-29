<template>
    <div>
        
        <div class="project-top">
            <div class="col project-title-container">
                <div class="col-50">
                    <div class="hero-container">
                        <div class="hero-move hero-text-overlay arcane-title-overlay">
                            <h1 class="hero text-light">work</h1>
                        </div>
                    </div>
                    <div class="hero-container">
                        <div class="hero-move hero-text-normal arcane-title-normal">
                            <h1 class="hero text-light">arcane.</h1>
                        </div>
                    </div>
                </div>
                <div class="col-40 project-descriptions">
                    <h2 class="case-overview text-light project-description">An immersive and lighthearted 3D site to display frontend projects.</h2>
                    <div class="col project-details">
                        <div class="col-50 project-detail">
                            <h5 class="caption-bold text-light-gray">tech.</h5>
                            <p class="caption-light text-light-gray">Vue JS, Three.js, GSAP, Lenis.js, Moment.js, SCSS, Netlify.</p>
                        </div>
                        <div class="col-50 project-detail">
                            <h5 class="caption-bold text-light-gray">timeline.</h5>
                            <p class="caption-light text-light-gray">Nov 2023 & Jan 2024</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="section-container hero-video">
            <div class="video-wrapper">
                <!-- Video -->
                <video class="project-video" autoplay muted loop>
                    <source src="@/assets/arcane/videos/web_showcase.mp4" type="video/mp4">
                </video>
            </div>
        </div>

        <div class="arcane-gsap">
            <div class="section-container col content-hidden">
                <div class="col-50">
                    <h3 class="subtitle-light text-light">Adding personality and immersion by utilizing 3D.</h3>
                </div>
                <div class="col-40 section-description">
                    <p class="caption-light text-light-gray">
                        The most important aspect of building a “personal” portfolio is to demonstrate your capabilities, but also personalities. To achieve that, instead of using primitive shapes, I decided to design and model out my own models that represents my traits and interests.
                        <br />
                        <br />To create engagement with my models, I integrated them with web interactions like scrolling and hovering to trigger various behaviors in the 3D scene. I bind the camera position with page scroll to create a parallax effect, and took advantage of mouse hovers to trigger animations.
                    </p>
                </div>
            </div>

            <div class="section-container">
                <div class="video-wrapper content-hidden">
                    <!-- Video -->
                    <video class="project-video" autoplay muted loop>
                        <source src="@/assets/arcane/videos/model_showcase.mp4" type="video/mp4">
                    </video>
                </div>

                <div class="col content-hidden">

                    <div class="col-50 video-wrapper">
                        <video class="project-video" autoplay muted loop>
                            <source src="@/assets/arcane/videos/main_model.mp4" type="video/mp4">
                        </video>
                    </div>

                    <div class="col-50 video-wrapper">
                        <video class="project-video" autoplay muted loop>
                            <source src="@/assets/arcane/videos/scrolled_model.mp4" type="video/mp4">
                        </video>
                    </div>

                </div>

                <img src="@/assets/arcane/images/screen_showcase.png" alt="" class="image content-hidden">
            </div>
            
            <div class="about-section-container section-container">
                <p class="large-title text-light">
                    <span class="hero-text-overlay">build</span>
                    <br /><span id="bright-process">process.</span>
                </p>
            </div>

            <div class="image-slider">
                <div class="slider-track">
                    <div class="sliding-images">
                        <ArcaneProcess />
                    </div>
                    <div class="sliding-images">
                        <ArcaneProcess />
                    </div>
                </div>
            </div>

            <div class="section-container col content-hidden">
                <div class="col-50">
                    <h3 class="subtitle-light text-light">Creating models and integrating Three.js with Vue’s compositional API.</h3>
                </div>
                <div class="col-40 section-description">
                    <p class="caption-light text-light-gray">
                        To personalized the 3D experience, I opt to design and build my own models. The modeling process was very straight-forward. I began by planning and sketching out models for different pages, and try to optimize it by reusing them for different pages.  Once everything was planned out, I head over to Blender to model everything.
                        <br />
                        <br />Integrating Three.js and Vue took a little bit of trial and error as I need to figure out which life cycle hook to use to complete different task. Vue 3’s compositional API made it much more easier to integrate as we no longer need to follow the Vue object format from Vue 2. Once everything is figured out, it’s all just ordinary Three.js code from here.
                    </p>
                </div>
            </div>

            <div class="section-container">
                <img src="@/assets/arcane/images/modeling.png" alt="" class="image margin-separator content-hidden">
                <div class="col margin-separator content-hidden">
                    <div class="col-50 image-container">
                        <img src="@/assets/arcane/images/three_js_1.png" alt="" class="contained-image">
                    </div>
                    <div class="col-50 image-container">
                        <img src="@/assets/arcane/images/three_js_2.png" alt="" class="contained-image">
                    </div>
                </div>
                <div class="video-wrapper content-hidden">
                    <!-- Video -->
                    <video class="project-video" autoplay muted loop>
                        <source src="@/assets/arcane/videos/not_found.mp4" type="video/mp4">
                    </video>
                </div>
            </div>

            <div class="section-container col content-hidden">
                <div class="col-50">
                    <h3 class="subtitle-light text-light">Building reusable functions to create multiple scenes and objects to render.</h3>
                </div>
                <div class="col-40 section-description">
                    <p class="caption-light text-light-gray">
                        Although most pages are rendered directly on the canvas object, I need to sperate the scene to create multiple sections on the about page. To create the effect, I created a function to help initialize multiple scene, camera, and lights, which is stored in a variables to reference from. Next, I created another function to store information about the scene objects like meshes and renderer settings. Once everything is ready, I then use them as references to to render in a looped function, and utilized the setScissor() function from Three.js to achieve the separation.
                        <br />
                        <br />At first, the concept was difficult to grasp as it’s quite different from your usual Three.js code where there’s a set of things to do. My biggest takeaway from this learning experience is that I need to practice more on modular and object oriented coding.
                    </p>
                </div>
            </div>

            <div class="section-container">
                <div class="col margin-separator content-hidden">
                    <div class="col-50 image-container">
                        <img src="@/assets/arcane/images/scene_function.png" alt="" class="contained-image">
                    </div>
                    <div class="col-50 image-container">
                        <img src="@/assets/arcane/images/render_function.png" alt="" class="contained-image">
                    </div>
                </div>
                <img src="@/assets/arcane/images/model_sections.png" alt="" class="image margin-separator content-hidden">
            </div>

            <div class="section-container content-hidden">
                <h2 class="title-light text-light">Crafting a smooth experience between pages and components.</h2>
            </div>

            <div class="section-container">
                <div class="video-wrapper content-hidden">
                    <!-- Video -->
                    <video class="project-video" autoplay muted loop>
                        <source src="@/assets/arcane/videos/transition.mp4" type="video/mp4">
                    </video>
                </div>
                <div class="col content-hidden">
                    <div class="col-50 image-container">
                        <img src="@/assets/arcane/images/transition_code_1.png" alt="" class="contained-image">
                    </div>
                    <div class="col-50 image-container">
                        <img src="@/assets/arcane/images/transition_code_2.png" alt="" class="contained-image">
                    </div>
                </div>
            </div>

            <div class="section-container content-hidden">
                <h2 class="title-light text-light">Designing an unique project page with infinite scrolling and dynamic thumbnails.</h2>
            </div>

            <div class="section-container">
                <img src="@/assets/arcane/images/infinite_scroll.png" alt="" class="image margin-separator content-hidden">
            </div>

            <div class="about-section-container section-container">
                <p class="large-title text-light">
                    <span class="hero-text-overlay">personal</span>
                    <br /><span id="bright-takeaways">takeaways.</span>
                </p>
            </div>

            <div class="image-slider">
                <div class="slider-track">
                    <div class="sliding-images">
                        <ArcaneTakeaway />
                    </div>
                    <div class="sliding-images">
                        <ArcaneTakeaway />
                    </div>
                </div>
            </div>

            <!-- Next Project -->
            <div class="next-project-container">
                <div class="next-project-links over">
            
                    <router-link class="next-project-links over" to="/arcane">
                        
                        <div class="next-video-wrapper">
                            <!-- Video -->
                            <video class="project-video" autoplay muted loop>
                                <source src="@/assets/charm/video/landing.mp4" type="video/mp4">
                            </video>
                        </div>

                        <div class="next-project-details">
                            <div class="case-titles">
                                <h2 class="title-bold text-light">up next.</h2>
                                <p class="caption text-primary-blue">arcane | #web-design #astro #cms</p>
                            </div>
                            <p class="case-overview text-light">A personal archive to document highlighted events from my life.</p>
                        </div>
                    </router-link>

                </div>
            </div>

            <MainFooter />
        </div>

    </div>
</template>

<script setup>
    import ArcaneProcess from '@/components/arcane/ArcaneProcess.vue'
    import ArcaneTakeaway from '@/components/arcane/ArcaneTakeaway.vue'
    import MainFooter from '@/components/MainFooter.vue'

    import { onUnmounted, onMounted } from 'vue'
    import { onBeforeRouteLeave } from 'vue-router'

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

    onMounted(() => {

        window.scrollTo(0, 0)

        // GSAP Animation
        const tl = gsap.timeline()
        tl
        .to('.arcane-title-overlay', {
            duration: 1.2,
            opacity: 1,
            y: -20,
            ease: 'power2.in0ut',
        },)
        .to('.arcane-title-normal', {
            duration: 1.2,
            opacity: 1,
            y: -20,
            ease: 'power2.in0ut',
        },'-=1.2')
        .to('.project-description', {
            duration: 1.5,
            opacity: 1,
            ease: 'power2.in0ut',
        },'-=.6')
        .to('.project-detail', {
            duration: 1.5,
            opacity: 1,
            ease: 'power2.in0ut',
            stagger: .2,
        },'-=1.2')
        .to('.hero-video', {
            duration: 1.5,
            opacity: 1,
            ease: 'power2.in0ut',
        }, '-=1.2')

        gsap.to('.arcane-gsap',{
            duration:.8,
            opacity: 1,
            ease: 'power2.in0ut',
        })

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('content-reveal')
                }
            })
        },
        {
            threshold: .1,
        })

        const hiddenElements = document.querySelectorAll(".content-hidden")
        hiddenElements.forEach((el) => observer.observe(el))

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
        .to('.arcane-title-overlay', {
            duration: .8,
            opacity: 0,
            y: 200,
            ease: 'power2.in0ut',
        },)
        .to('.arcane-title-normal', {
            duration: .8,
            opacity: 0,
            y: 200,
            ease: 'power2.in0ut',
        },'-=.8')
        .to('.project-description', {
            duration: .8,
            opacity: 0,
            ease: 'power2.in0ut',
        },'-=.8')
        .to('.project-detail', {
            duration: .8,
            opacity: 0,
            ease: 'power2.in0ut',
        },'-=.8')
        .to('.hero-video', {
            duration: .8,
            opacity: 0,
            ease: 'power2.in0ut',
            onComplete: () => {
                next()
            },
        }, '-=.8')
        
        gsap.to('.arcane-gsap',{
            duration:.8,
            opacity: 0,
            ease: 'power2.in0ut',
        })
    })

</script>