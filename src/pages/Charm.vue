<template>
    <div>
        
        <div class="project-top">
            <div class="col project-title-container">
                <div class="col-50">
                    <p class="hero text-light">
                        <span class="hero-text-overlay">work</span>
                        <br />charm.
                    </p>
                </div>
                <div class="col-40 project-descriptions">
                    <h2 class="case-overview text-light">Building an engaging portfolio websites for ArtCenter Gradshow.</h2>
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

        <div class="section-container">
            <div class="video-wrapper">
                <!-- Video -->
                <video class="project-video" autoplay muted loop>
                    <source src="@/assets/charm/video/landing.mp4" type="video/mp4">
                </video>
            </div>
        </div>

        <div class="section-container col content-hidden">
            <div class="col-50">
                <h3 class="subtitle-light text-light">A multi-level experience with immersive and engaging motions and images.</h3>
            </div>
            <div class="col-40 section-description">
                <p class="caption-light text-light-gray">
                    To create an experience with different levels of engagement, I utilized the strength of moving media, contrasting scale, and micro-animations to capture the attention of visitors. To offer a different experience for different type of viewers, the content is classified into three main categories - first glance, quick digest, and deep dive.
                    <br />
                    <br />To capture the essence of each project, the design of the portfolio itself is toned down, which allows the project media to shine. Each micro-interactions were added with care and purpose to ensure the website can still present some personality without distracting the users.
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

            <img src="@/assets/charm/image/screens.webp" alt="" class="image content-hidden">
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
                    The main reason that most developers prefer to start a project with a JavaScript framework even if there’re only two page is mainly due to the limitation of developing in vanilla JS. Although it does simplify many things and reduce the performance issue, we will eventually end up with just another crappy framework that we wrote to suit our needs, which is essentially what happened here.
                    <br />
                    <br />To accommodate for the limitation of the rough page-transition, I wrote a function that essentially delays the page load when a hyperlink is click, which allowed me to add transition in between to hide the roughness of page load.
                </p>
            </div>
        </div>

        <div class="section-container col content-hidden">
            <div class="col-50 image-container">
                <img src="@/assets/charm/image/router-code.webp" alt="" class="contained-image">
            </div>
            <div class="col-50 image-container">
                <img src="@/assets/charm/image/router-image.webp" alt="" class="contained-image">
            </div>
        </div>

        <div class="section-container content-hidden">
            <h2 class="title-light text-light">Integrating a modular workflow to better organize the code.</h2>
        </div>

        <div class="section-container content-hidden">
            <img src="@/assets/charm/image/modular-code.webp" alt="" class="image">
        </div>

        <div class="section-container col content-hidden">
            <div class="col-50">
                <h3 class="subtitle-light text-light">Optimizing media formats to speed up performance without losing quality.</h3>
            </div>
            <div class="col-40 section-description">
                <p class="caption-light text-light-gray">
                    One of the most common issue with portfolio sites is the overwhelming of media that the browser has to load. Especially in my case where media is the center of attention, and to add salt to injury, the network speed at the convention center for Gradshow was also not the greatest.
                    <br />
                    <br />To ensure the best browsing experience, I went through all my images and video and convert and compress them to the desire result. It was a tedious process as it requires me to go back and forth between devices and platforms to check the file size, load speed, and quality output.
                </p>
            </div>
        </div>

        <div class="section-container content-hidden">
            <img src="@/assets/charm/image/file-format.webp" alt="" class="image">
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
                        <p class="case-overview text-light">A frontend portfolio showcasing websites that I designed and developed.</p>
                    </div>
                </router-link>

            </div>
        </div>

        <MainFooter />

    </div>
</template>

<script setup>
    import CharmProcess from '@/components/charm/CharmProcess.vue'
    import CharmTakeaways from '@/components/charm/CharmTakeaways.vue';
    import MainFooter from '@/components/MainFooter.vue'

    import { onUnmounted, onMounted } from 'vue'
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

        gsap.from('#charm-process', {
            scrollTrigger: {
                trigger: '#charm-process',
                start: 'top 80%',
                end: '180% 60%',
                scrub: true,
            },
            opacity: 0
        })

        gsap.from('#charm-takeaways', {
            scrollTrigger: {
                trigger: '#charm-takeaways',
                start: 'top 80%',
                end: '180% 60%',
                scrub: true,
            },
            opacity: 0
        })

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('content-reveal');
                }
            })
        },
        {
            threshold: .1,
        });

        const hiddenElements = document.querySelectorAll(".content-hidden");
        hiddenElements.forEach((el) => observer.observe(el));

    })

    onUnmounted(() => {
        function destroy(){
            lenis.destroy();
        }
        
        destroy();
    })
</script>