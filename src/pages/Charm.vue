<template>
    <div>
        
        <div class="project-top">
            <div class="col project-title-container">
                <div class="col-50">
                    <div class="hero-container">
                        <div class="hero-move hero-text-overlay charm-title-overlay">
                            <h1 class="hero text-light">work</h1>
                        </div>
                    </div>
                    <div class="hero-container">
                        <div class="hero-move hero-text-normal charm-title-normal">
                            <h1 class="hero text-light">charm.</h1>
                        </div>
                    </div>
                </div>
                <div class="col-40 project-descriptions">
                    <h2 class="case-overview text-light project-description">Building an engaging portfolio website for ArtCenter Gradshow.</h2>
                    <div class="col project-details">
                        <div class="col-50 project-detail">
                            <h5 class="caption-bold text-light-gray">tech.</h5>
                            <p class="caption-light text-light-gray">HTML, SCSS, JavaScript, Luxy JS, Scrollify, Netlify.</p>
                        </div>
                        <div class="col-50 project-detail">
                            <h5 class="caption-bold text-light-gray">timeline.</h5>
                            <p class="caption-light text-light-gray">Jul 2023 - Aug 2023</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="section-container hero-video">
            <div class="video-wrapper">
                <!-- Video -->
                <video class="project-video" autoplay muted loop>
                    <source src="@/assets/charm/video/landing.mp4" type="video/mp4">
                </video>
            </div>
        </div>

        <div class="charm-gsap">
            <div class="section-container col content-hidden">
                <div class="col-50">
                    <h3 class="subtitle-light text-light">A multi-level experience with immersive and engaging motions and images.</h3>
                </div>
                <div class="col-40 section-description">
                    <p class="caption-light text-light-gray">
                        To create an experience with different levels of engagement, I utilized the strength of moving media, contrasting scales, and micro-animations to capture visitors' attention. The content is classified into three main categories to offer a different experience for different viewers: first glance, quick digest, and deep dive.
                        <br />
                        <br />To capture the essence of each project, the website's design is toned down, which allows the project media to shine. Each micro-interactions were added with care and purpose to ensure the website can still present some personality without distracting the users.
                    </p>
                </div>
            </div>

            <div class="section-container">
                <div class="col content-hidden">

                    <div class="col-50 video-wrapper">
                        <video class="project-video" autoplay muted loop>
                            <source src="@/assets/charm/video/cursor.mp4" type="video/mp4">
                        </video>
                    </div>

                    <div class="col-50 video-wrapper">
                        <video class="project-video" autoplay muted loop>
                            <source src="@/assets/charm/video/scroll.mp4" type="video/mp4">
                        </video>
                    </div>

                </div>
                
                <div class="video-wrapper content-hidden">
                    <!-- Video -->
                    <video class="project-video" autoplay muted loop>
                        <source src="@/assets/charm/video/menu.mp4" type="video/mp4">
                    </video>
                </div>

                <img src="@/assets/charm/image/screens.webp" alt="A collection of screen design for the Charm portfolio project." class="image content-hidden">
            </div>

            <div class="about-section-container section-container">
                <p class="large-title text-light">
                    <span class="hero-text-overlay">build</span>
                    <br /><span id="charm-process">process.</span>
                </p>
            </div>

            <div class="image-slider">
                <div class="slider-track">
                    <div class="sliding-images">
                        <CharmProcess />
                    </div>
                    <div class="sliding-images">
                        <CharmProcess />
                    </div>
                </div>
            </div>

            <div class="section-container col content-hidden">
                <div class="col-50">
                    <h3 class="subtitle-light text-light">Building a personalized router to break through the limits of hyperlinks.</h3>
                </div>
                <div class="col-40 section-description">
                    <p class="caption-light text-light-gray">
                        The main reason most developers prefer to start a project with a framework, is mainly due to the limitation of developing in vanilla JS. Although it does simplify many things and reduce the performance issue, we will eventually end up with just another framework that we wrote to suit our needs.
                        <br />
                        <br />To accommodate the rough page transition, I wrote a function that essentially delays the page load when hyperlinks are clicked, which allows a transition in between to hide the roughness of the page load.
                    </p>
                </div>
            </div>

            <div class="section-container col content-hidden">
                <div class="col-50 image-container">
                    <img src="@/assets/charm/image/router-code.webp" alt="A code snippet showing the code of the self-coded page router." class="contained-image">
                </div>
                <div class="col-50 image-container">
                    <img src="@/assets/charm/image/router-image.webp" alt=" A screenshot of the website's navigation menu." class="contained-image">
                </div>
            </div>

            <div class="section-container content-hidden">
                <h2 class="title-light text-light">Integrating a modular workflow to better organize the code.</h2>
            </div>

            <div class="section-container content-hidden">
                <img src="@/assets/charm/image/modular-code.webp" alt="A code snippet highlighting the different JavaScript file of the modular code structure." class="image">
            </div>

            <div class="section-container col content-hidden">
                <div class="col-50">
                    <h3 class="subtitle-light text-light">Optimizing media formats to speed up performance without losing quality.</h3>
                </div>
                <div class="col-40 section-description">
                    <p class="caption-light text-light-gray">
                        One of the most common issues with portfolio sites is the overwhelming media the browser has to load. Especially in my case, where media is the center of attention, and to add salt to injury, the network speed at the convention center for Gradshow are not the greatest.
                        <br />
                        <br />To ensure the best browsing experience, I went through all my images and videos and converted and compressed them to the desired result. It was a tedious process, requiring me to go back and forth between devices and platforms to check the file size, load speed, and quality output.
                    </p>
                </div>
            </div>

            <div class="section-container content-hidden">
                <img src="@/assets/charm/image/file-format.png" alt="A collection of different file formats for image and videos, which include SVG, PNG, WEBP, MOV, and MP4." class="image">
            </div>

            <div class="about-section-container section-container">
                <p class="large-title text-light">
                    <span class="hero-text-overlay">personal</span>
                    <br /><span id="charm-takeaways">takeaways.</span>
                </p>
            </div>

            <div class="image-slider">
                <div class="slider-track">
                    <div class="sliding-images">
                        <CharmTakeaways />
                    </div>
                    <div class="sliding-images">
                        <CharmTakeaways />
                    </div>
                </div>
            </div>

            <!-- Next Project -->
            <div class="next-project-container">
                <div class="next-project-links over">
            
                    <router-link class="next-project-links over" to="/bright">
                        
                        <div class="next-video-wrapper">
                            <!-- Video -->
                            <video class="project-video" autoplay muted loop>
                                <source src="@/assets/bright/video/landing.mp4" type="video/mp4">
                            </video>
                        </div>

                        <div class="next-project-details">
                            <div class="case-titles">
                                <h2 class="title-bold text-light">up next.</h2>
                                <p class="caption text-primary-blue">bright | #web-design #vue #three-js</p>
                            </div>
                            <p class="case-overview text-light">A frontend portfolio showcasing website that I designed and developed.</p>
                        </div>
                    </router-link>

                </div>
            </div>

            <MainFooter />
        </div>

    </div>
</template>

<script setup>
    import CharmProcess from '@/components/charm/CharmProcess.vue'
    import CharmTakeaways from '@/components/charm/CharmTakeaways.vue';
    import MainFooter from '@/components/MainFooter.vue'

    import { onUnmounted, onMounted } from 'vue'
    import {useHead} from '@vueuse/head'
    import { onBeforeRouteLeave } from 'vue-router'

    import Lenis from '@studio-freight/lenis'
    import { gsap } from "gsap";
    import { ScrollTrigger } from "gsap/ScrollTrigger"

    useHead({
        title: 'IKAMOdev | Charm',
        meta: [
            {
                name: 'description',
                content: 'Building an engaging portfolio website for ArtCenter Gradshow.',
            },
            {
                name: 'og:title',
                content: 'IKAMOdev | Charm',
            },
            {
                name: 'og:description',
                content: 'Building an engaging portfolio website for ArtCenter Gradshow.',
            },
            {
                name: 'twitter:title',
                content: 'IKAMOdev | Charm',
            },
            {
                name: 'twitter:description',
                content: 'Building an engaging portfolio website for ArtCenter Gradshow.',
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

    onMounted(() => {

        window.scrollTo(0, 0)

        // GSAP Animation
        const tl = gsap.timeline()
        tl
        .to('.charm-title-overlay', {
            duration: 1.2,
            opacity: 1,
            y: -20,
            ease: 'power2.in0ut',
        },)
        .to('.charm-title-normal', {
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

        gsap.to('.charm-gsap',{
            duration:.8,
            opacity: 1,
            ease: 'power2.in0ut',
        })

        // gsap.from('#charm-process', {
        //     scrollTrigger: {
        //         trigger: '#charm-process',
        //         start: 'top 80%',
        //         end: '180% 60%',
        //         scrub: true,
        //     },
        //     opacity: 0
        // })

        // gsap.from('#charm-takeaways', {
        //     scrollTrigger: {
        //         trigger: '#charm-takeaways',
        //         start: 'top 80%',
        //         end: '180% 60%',
        //         scrub: true,
        //     },
        //     opacity: 0
        // })

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
        .to('.charm-title-overlay', {
            duration: .8,
            opacity: 0,
            y: 200,
            ease: 'power2.in0ut',
        },)
        .to('.charm-title-normal', {
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
        
        gsap.to('.charm-gsap',{
            duration:.8,
            opacity: 0,
            ease: 'power2.in0ut',
        })
    })
</script>