<template>
    <div class="project-container">

        <div class="project-top">
            <div class="col project-title-container">
                <div class="col-50">
                    <div class="hero-container">
                        <div class="hero-move hero-text-overlay bright-title-overlay">
                            <h1 class="hero text-light">work</h1>
                        </div>
                    </div>
                    <div class="hero-container">
                        <div class="hero-move hero-text-normal bright-title-normal">
                            <h1 class="hero text-light">bright.</h1>
                        </div>
                    </div>
                </div>
                <div class="col-40 project-descriptions">
                    <h2 class="case-overview text-light project-description">A personal archive to document highlighted events from my life.</h2>
                    <div class="col project-details">
                        <div class="col-50 project-detail">
                            <h5 class="caption-bold text-light-gray">tech.</h5>
                            <p class="caption-light text-light-gray">Astro, Sanity Studio, GSAP, Luxy.JS, SCSS, Netlify.</p>
                        </div>
                        <div class="col-50 project-detail">
                            <h5 class="caption-bold text-light-gray">timeline.</h5>
                            <p class="caption-light text-light-gray">Oct 2023</p>
                        </div>
                    </div>
                    <div class="project-external-links">
                        <a href="https://ikamo.me/" class="project-external-link caption-light" target="_blank" rel="noopener noreferrer">website.</a>
                        <a href="https://github.com/IKAMOworkshop/ikamo.me" class="project-external-link caption-light" target="_blank" rel="noopener noreferrer">github.</a>
                    </div>
                </div>
            </div>
        </div>

        <div class="section-container hero-video">
            <div class="video-wrapper">
                <!-- Video -->
                <video class="project-video" autoplay muted loop>
                    <source src="@/assets/bright/video/landing.mp4" type="video/mp4">
                </video>
            </div>
        </div>

        <div class="bright-gsap">
            <div class="section-container col content-hidden">
                <div class="col-50">
                    <h3 class="subtitle-light text-light">Designing an elegant experience that focuses on individual moments.</h3>
                </div>
                <div class="col-40 section-description">
                    <p class="caption-light text-light-gray">
                        This site contains all my cherished memories. As a result, visual language and interaction are designed to allow visitors to focus on the moments. For example, everything becomes blurred and dimmed when hovering over a moment so that visitors can focus on the hovered moment. The same could be said with the type and copywriting, as everything is straight to the point with large text calling out what to focus on.
                        <br />
                        <br />The visual language also reflects the same as colors are reduced to a minimum; only a slight accent of blue can be seen to highlight the logo and navigation. Moreover, the cursor is deliberately set as a highly saturated blue as it is the one thing I want the user not to lose focus on.
                        <br />
                        <br />このサイトは自分が大切なイベントを写真で記録しようと思います。各々瞬間をフォーカスしようために、ミュート的な色と最小限のビジュアルデザインが使っていました。
                    </p>
                </div>
            </div>

            <div class="section-container">
                <div class="col content-hidden">

                    <div class="col-50 video-wrapper">
                        <video class="project-video" autoplay muted loop>
                            <source src="@/assets/bright/video/menu.mp4" type="video/mp4">
                        </video>
                    </div>

                    <div class="col-50 video-wrapper">
                        <video class="project-video" autoplay muted loop>
                            <source src="@/assets/bright/video/hover-tile.mp4" type="video/mp4">
                        </video>
                    </div>

                </div>
                
                <div class="video-wrapper content-hidden">
                    <!-- Video -->
                    <video class="project-video" autoplay muted loop>
                        <source src="@/assets/bright/video/dark-mode.mp4" type="video/mp4">
                    </video>
                </div>

                <img src="@/assets/bright/image/screen.webp" alt="A collection of screen design for the Bright personal archive project." class="image content-hidden">
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
                        <BrightProcess />
                    </div>
                    <div class="sliding-images">
                        <BrightProcess />
                    </div>
                </div>
            </div>

            <div class="section-container col content-hidden">
                <div class="col-50">
                    <h3 class="subtitle-light text-light">Setting up the project files to include frontend and backend.</h3>
                </div>
                <div class="col-40 section-description">
                    <p class="caption-light text-light-gray">
                        To make the CMS database accessible at all times, I included a frontend folder and a backend folder, each containing files for Astro and Sanity Studio. Doing so allows me to easily use the terminal to navigate between folders to run and launch the projects when needed.
                        <br />
                        <br />Sanity’s API tool is powerful as it only requires a few lines to connect to the correct database and fetch the data from it. The process becomes streamlined by binding it with the map function, as everything will immediately populate the interface.
                        <br />
                        <br />CMSのアクセスが便利になるために、プロジェクトのフォルダにフロントエンドとバックエンド作りました。フロントのフォルダがAstroのファイルが持っていて、バックにはCMSのファイルがおります。
                        <br />
                        <br />CMSはSanity Studioでセットしています。Sanityが強いAPIツールがあって、プロジェクトの設定とデータの取得は簡単になります。
                    </p>
                </div>
            </div>

            <div class="section-container">
                <div class="col margin-separator content-hidden">
                    <div class="col-50 image-container">
                        <img src="@/assets/bright/image/sanity-files.webp" alt="The utility JavaScript files to fetch data from Sanity Studio." class="contained-image">
                    </div>
                    <div class="col-50 image-container">
                        <img src="@/assets/bright/image/sanity-code.webp" alt="The schema code for setting up a personalized CMS fields." class="contained-image">
                    </div>
                </div>
                <img src="@/assets/bright/image/sanity-ui.webp" alt="The GUI of Sanity Studio once launched from terminal." class="image content-hidden">
            </div>

            <div class="section-container content-hidden">
                <h2 class="title-light text-light">Date sorting and converting the date format to strings.</h2>
            </div>

            <div class="section-container col content-hidden">
                <div class="col-50 image-container">
                    <img src="@/assets/bright/image/date-format.webp" alt="A code snippet of formatting the date to the desire result." class="contained-image">
                </div>
                <div class="col-50 image-container">
                    <img src="@/assets/bright/image/sorting-code.webp" alt="A code snippet showing the sorting function used to sort each log by date." class="contained-image">
                </div>
            </div>

            <div class="section-container col content-hidden">
                <div class="col-50">
                    <h3 class="subtitle-light text-light">Building light and dark theme layouts utilizing local storage.</h3>
                </div>
                <div class="col-40 section-description">
                    <p class="caption-light text-light-gray">
                        I built a light and dark switching, which is quite tricky as Astro is a static-site generator. As a result, it's hard to maintain states across different pages like other frameworks such as React, Vue, etc. I mainly relied on SCSS nesting and local storage to build the theme switch and maintain its states across pages and multiple visits.
                        <br />
                        <br />Although it probably isn’t the best practice, I created a local storage variable and asked JavaScript to check to see the current state of the variable. Once that is done, I switch out the content and classes for the page, which will carry across when users navigate.
                        <br />
                        <br />他のフレームワークが違って、AstroはSSGを利用して、ライトとダークモードの作りプロセスが難しいになります。サイトの状態を維持しようために、ウェブAPIのローカルストレージを利用して、毎回ページロードが起きたら、サイトの状態をチェックちて、元のモードを戻ります。
                    </p>
                </div>
            </div>

            <div class="section-container">
                <img src="@/assets/bright/image/light-dark-screen.webp" alt="An image showing a comparison between light and dark mode of the homepage." class="image margin-separator content-hidden">
                <div class="col content-hidden">
                    <div class="col-50 image-container">
                        <img src="@/assets/bright/image/light-dark-switch.webp" alt="The theme switch to toggle between light and dark." class="contained-image">
                    </div>
                    <div class="col-50 image-container">
                        <img src="@/assets/bright/image/light-dark-code.webp" alt="A code snippet showing the use of local storage to bulid a light and dark theme that maintain state." class="contained-image">
                    </div>
                </div>
            </div>

            <div class="section-container content-hidden">
                <h2 class="title-light text-light">Learning and implementing GSAP to load animation.</h2>
            </div>

            <div class="section-container">
                <div class="video-wrapper content-hidden">
                    <!-- Video -->
                    <video class="project-video" autoplay muted loop>
                        <source src="@/assets/bright/video/gsap.mp4" type="video/mp4">
                    </video>
                </div>
                
                <div class="col content-hidden">
                    <div class="col-50 image-container">
                        <img src="@/assets/bright/image/gsap-code-1.webp" alt="A code snippet demostrating GSAP's usage to animate images." class="contained-image">
                    </div>
                    <div class="col-50 image-container">
                        <img src="@/assets/bright/image/gsap-code-2.webp" alt="A code snippet showing the GSAP code for animating the page title." class="contained-image">
                    </div>
                </div>
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
                        <BrightTakeaway />
                    </div>
                    <div class="sliding-images">
                        <BrightTakeaway />
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
                                <source src="@/assets/arcane/videos/web_showcase.mp4" type="video/mp4">
                            </video>
                        </div>

                        <div class="next-project-details">
                            <div class="case-titles">
                                <h2 class="title-bold text-light">up next.</h2>
                                <p class="caption text-primary-blue">arcane | #web-design #vue #three-js</p>
                            </div>
                            <p class="case-overview text-light">An immersive and lighthearted 3D site to display frontend projects.</p>
                        </div>
                    </router-link>

                </div>
            </div>

            <MainFooter />
        </div>

    </div>
</template>

<script setup>
    import BrightProcess from '@/components/bright/BrightProcess.vue'
    import BrightTakeaway from '@/components/bright/BrightTakeaway.vue'
    import MainFooter from '@/components/MainFooter.vue'

    import { onUnmounted, onMounted } from 'vue'
    import {useHead} from '@vueuse/head'
    import { onBeforeRouteLeave } from 'vue-router'

    import Lenis from '@studio-freight/lenis'
    import { gsap } from "gsap";
    import { ScrollTrigger } from "gsap/ScrollTrigger"

    useHead({
        title: 'IKAMOdev | Bright',
        meta: [
            {
                name: 'description',
                content: 'A personal archive to document highlighted events from my life.',
            }
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
        .to('.bright-title-overlay', {
            duration: 1.2,
            opacity: 1,
            y: -10,
            ease: 'power2.in0ut',
        },)
        .to('.bright-title-normal', {
            duration: 1.2,
            opacity: 1,
            y: -10,
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
        .to('.project-external-links', {
            duration: 1.5,
            opacity: 1,
            mixBlendMode:'overlay',
            ease: 'power2.in0ut',
            stagger: .2,
        },'-=1.2')
        .to('.hero-video', {
            duration: 1.5,
            opacity: 1,
            ease: 'power2.in0ut',
        }, '-=1.2')

        gsap.to('.bright-gsap',{
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
        .to('.bright-title-overlay', {
            duration: .8,
            opacity: 0,
            y: 200,
            ease: 'power2.in0ut',
        },)
        .to('.bright-title-normal', {
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
        .to('.project-external-links', {
            duration: .8,
            opacity: 0,
            mixBlendMode:'overlay',
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
        
        gsap.to('.bright-gsap',{
            duration:.8,
            opacity: 0,
            ease: 'power2.in0ut',
        })
    })
</script>