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
                    <source src="@/assets/bright/video/landing.mp4" type="video/mp4">
                </video>
            </div>
        </div>

        <div class="section-container col">
            <div class="col-50">
                <h3 class="subtitle-light text-light">Designing an elegant experience that focuses on individual moments.</h3>
            </div>
            <div class="col-40 section-description">
                <p class="caption-light text-light-gray">
                    As the content for this site is all past memories that I cherishes, every visual language and interactions are designed with the goal of allowing visitors to focus on the moments. For example, when hover over a moment, everything else will be blurred and dimmed, so the only focus in on the hovered moment. The same could be said with the type and copy writing as everything is straight to the point with large text calling out what to focus on.
                    <br />
                    <br />The visual language also reflects the same as colors are reduce to a minimal, only a slight accent of blue can be see to highlight the logo and navigation. Moreover, the cursor is deliberately set as a high saturated blue as it is the one thing the I want to user to no lose focus on.
                </p>
            </div>
        </div>

        <div class="section-container">
            <div class="col">

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
            
            <div class="video-wrapper">
                <!-- Video -->
                <video class="project-video" autoplay muted loop>
                    <source src="@/assets/bright/video/dark-mode.mp4" type="video/mp4">
                </video>
            </div>

            <img src="@/assets/bright/image/screen.webp" alt="" class="image">
        </div>
        
        <div class="about-section-container section-container">
            <p class="large-title text-light">
                <span class="hero-text-overlay">build</span>
                <br />process.
            </p>
        </div>

        <div class="image-slider">
            <div class="slider-track">
                <div class="sliding-images">
                    <BrightProcess />
                </div>
            </div>
        </div>

        <div class="section-container col">
            <div class="col-50">
                <h3 class="subtitle-light text-light">Setting up the project files to include frontend and backend.</h3>
            </div>
            <div class="col-40 section-description">
                <p class="caption-light text-light-gray">
                    To make the CMS database accessible at all time, I included a frontend folder and backend folder each for containing files for Astro and Sanity Studio. By setting it up this way, I can easily use the terminal to navigate between folders to run the dev command when needed.
                    <br />
                    <br />Sanity’s API tool is extremely powerful as it only requires a few lines to connect to the right database and fetch the data from it. By binding it with the map function, the whole process became streamlined as everything will immediately populate the interface.
                </p>
            </div>
        </div>

        <div class="section-container">
            <div class="col margin-separator">
                <div class="col-50 image-container">
                    <img src="@/assets/bright/image/sanity-files.webp" alt="" class="contained-image">
                </div>
                <div class="col-50 image-container">
                    <img src="@/assets/bright/image/sanity-code.webp" alt="" class="contained-image">
                </div>
            </div>
            <img src="@/assets/bright/image/sanity-ui.webp" alt="" class="image">
        </div>

        <div class="section-container">
            <h2 class="title-light text-light">Date sorting and converting the date format to strings.</h2>
        </div>

        <div class="section-container col">
            <div class="col-50 image-container">
                <img src="@/assets/bright/image/date-format.webp" alt="" class="contained-image">
            </div>
            <div class="col-50 image-container">
                <img src="@/assets/bright/image/sorting-code.webp" alt="" class="contained-image">
            </div>
        </div>

        <div class="section-container col">
            <div class="col-50">
                <h3 class="subtitle-light text-light">Building light and dark theme layouts utilizing local storage.</h3>
            </div>
            <div class="col-40 section-description">
                <p class="caption-light text-light-gray">
                    Building a light and dark switching as quite tricky here as Astro is a static-site generator, which makes it hard to maintain states across different pages like other frameworks such as React, Vue, and etc. As a result, I relied on SCSS nesting and local storage to build the theme switch and maintain its states across pages and multiple visits.
                    <br />
                    <br />Although it probably isn’t the best practice, I essential created a local storage variable and ask JavaScript to check to see what state the variable is currently on. Once that is done, I switch out the content and classes for the page, which will carry across when users navigate.
                </p>
            </div>
        </div>

        <div class="section-container">
            <img src="@/assets/bright/image/light-dark-screen.webp" alt="" class="image margin-separator">
            <div class="col">
                <div class="col-50 image-container">
                    <img src="@/assets/bright/image/light-dark-switch.webp" alt="" class="contained-image">
                </div>
                <div class="col-50 image-container">
                    <img src="@/assets/bright/image/light-dark-code.webp" alt="" class="contained-image">
                </div>
            </div>
        </div>

        <div class="section-container">
            <h2 class="title-light text-light">Learning and implementing GSAP to load animation.</h2>
        </div>

        <div class="section-container">
            <div class="video-wrapper">
                <!-- Video -->
                <video class="project-video" autoplay muted loop>
                    <source src="@/assets/bright/video/gsap.mp4" type="video/mp4">
                </video>
            </div>
            
            <div class="col">
                <div class="col-50 image-container">
                    <img src="@/assets/bright/image/gsap-code-1.webp" alt="" class="contained-image">
                </div>
                <div class="col-50 image-container">
                    <img src="@/assets/bright/image/gsap-code-2.webp" alt="" class="contained-image">
                </div>
            </div>
        </div>

        <div class="about-section-container section-container">
            <p class="large-title text-light">
                <span class="hero-text-overlay">personal</span>
                <br />takeaways.
            </p>
        </div>

        <div class="image-slider">
            <div class="slider-track">
                <div class="sliding-images">
                    <BrightTakeaway />
                </div>
            </div>
        </div>

        <!-- Next Project -->
        <div class="next-project-container">
            <div class="next-project-links over">
        
                <router-link class="project-links over" to="/arcane">
                    
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
</template>

<script setup>
    import BrightProcess from '@/components/bright/BrightProcess.vue'
    import BrightTakeaway from '@/components/bright/BrightTakeaway.vue'
    import MainFooter from '@/components/MainFooter.vue'

    import { onUnmounted } from 'vue'
    import Lenis from '@studio-freight/lenis'

    const lenis = new Lenis({
            smooth: true,
            infinite: false,
        })

        function raf(time) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf)

    onUnmounted(() => {
        function destroy(){
            lenis.destroy();
        }
        
        destroy();
    })
</script>