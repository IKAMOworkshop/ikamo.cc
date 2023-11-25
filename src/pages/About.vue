<template>
    <div>

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

        gsap.from('#rapid-learning', {
            scrollTrigger: {
                trigger: '#rapid-learning',
                start: 'top 85%',
                end: 'bottom 65%',
                scrub: true,

            },
            opacity: 0,
        })

        gsap.from('#mix-match', {
            scrollTrigger: {
                trigger: '#mix-match',
                start: 'top 85%',
                end: '170% 65%',
                scrub: true,
            },
            opacity: 0,
        })

        gsap.from('#beyond-design', {
            scrollTrigger: {
                trigger: '#beyond-design',
                start: 'top 85%',
                end: 'bottom 65%',
                scrub: true,
            },
            opacity: 0,
        })

        gsap.from('#interest-title', {
            scrollTrigger: {
                trigger: '#interest-title',
                start: 'top 85%',
                end: '180% 70%',
                scrub: true,
            },
            opacity: 0
        })

        gsap.from('#about-works', {
            scrollTrigger: {
                trigger: '#about-works',
                start: 'top 85%',
                end: '180% 70%',
                scrub: true,
            },
            opacity: 0
        })

    })

    onUnmounted(() => {
        function destroy(){
            lenis.destroy();
        }
        
        destroy();
    })
</script>