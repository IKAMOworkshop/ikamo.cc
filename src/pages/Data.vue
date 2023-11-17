<template>
    <div>
        
        <div class="section-container data-top">
            <p class="large-title text-light">
                <span class="hero-text-overlay">it’s all about data!</span>
                <br />here’s me in the form of data.
            </p>
        </div>

        <div class="section-container">
            <div class="col-20">
                <p class="body-bold text-light-gray">in my 8 years design journey, i went from designing “gfx” to complex digital products.</p>
            </div>
        </div>

        <div class="image-slider">
            <div class="slider-track">
                <div class="sliding-images">
                    <DataCard />
                </div>
            </div>
        </div>

        <div class="section-container">
            <p class="large-title text-light">
                <span class="hero-text-overlay">featured</span>
                <br />experience.
            </p>
        </div>

        <div class="section-container">
            <div class="col">
                <div class="col-40">
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
                <br />learnings.
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
                <br />capability.
            </p>
        </div>

        <div class="section-container">
            <div class="col">
                <div class="col-40">
                    <p class="subtitle-light text-light">I’m get asked what I do outside of work, a whole lot of these</p>
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
</script>