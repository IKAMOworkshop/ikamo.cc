<template>
    <div>

        <div class="about-section-container section-container">
            <p class="large-title text-light">
                <span class="hero-text-overlay">everyday, i</span>
                <br />learn, design, build, and repeat.
            </p>
        </div>

        <div class="section-container about-container">
            <div class="col-20">
                <p class="body-bold text-light-gray">i enjoy creating transformative and immersive experience by blending visuals and motion.</p>
            </div>
        </div>

        <div class="about-image-slider">
            <div class="slider-track">
                <div class="about-images">
                    <aboutImage />
                    <aboutImage />
                    <aboutImage />
                    <aboutImage />
                    <aboutImage />
                    <aboutImage />
                </div>
            </div>
        </div>

        <div class="about-design-container">
            <div class="col">
                <div class="col-60"></div>
                <div class="col-full">
                    <h4 class="body-bold text-light-gray">rapid-learning.</h4>
                    <p class="subtitle-light text-light">I strives in a fast-pace learning environment, as constant improvement motivates me.</p>
                </div>
            </div>
        </div>

        <div class="about-design-container">
            <div class="col">
                <div class="col-60"></div>
                <div class="col-full">
                    <h4 class="body-bold text-light-gray">mix and match.</h4>
                    <p class="subtitle-light text-light">I enjoy blending different skills and things to craft the unexpected.</p>
                </div>
            </div>
        </div>
        

        <div class="about-design-container">
            <div class="col">
                <div class="col-60"></div>
                <div class="col-full">
                    <h4 class="body-bold text-light-gray">beyond just design.</h4>
                    <p class="subtitle-light text-light">I value being able of building out the things I designed. The process is enjoyable and eye-opening.</p>
                </div>
            </div>
        </div>

        <div class="about-section-container section-container">
            <p class="large-title text-light">
                <span class="hero-text-overlay">outside of design,</span>
                <br />i also enjoy...
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
                <br />work.
            </h2>
        </div>

        <div class="selected-work-container">
            <div class="scroll-track">
                <div class="project-images">

                    <projectCase />

                </div>
            </div>
        </div>

    </div>
</template>

<script setup>
    import aboutImage from '@/components/AboutImages.vue'
    import aboutInterest from '@/components/AboutInterest.vue'
    import projectCase from '@/components/ProjectCase.vue'
</script>