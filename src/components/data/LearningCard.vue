<template>
    <div :id="experience.id" class="info-card gray" v-for="experience in experiences">
        <p class="body-bold text-primary-blue">{{ experience.date }}</p>
        <h3 class="subtitle-light text-light">{{ experience.info }}</h3>
    </div>
</template>

<script>
    export default {
        name: 'Cases',
        data (){
            return {
            experiences: [
                {
                date: 'oct 2023 - nov 2023',
                info: 'Three.JS Journey by Bruno Simon.',
                id: 'learning-card-1'
                },
                {
                date: 'sept 2018 - apr 2023',
                info: 'ArtCenter College of Design.',
                id: 'learning-card-2'
                },
                {
                date: 'aug 2023 - now',
                info: 'The Odin Project (Open Source).',
                id: 'learning-card-3'
                },
            ]}
        }
    }
</script>

<script setup>
    import { onMounted } from 'vue'
    import { gsap } from "gsap";
    import { ScrollTrigger } from "gsap/ScrollTrigger";

    gsap.registerPlugin(ScrollTrigger);

    onMounted(() => {
        
        gsap.from('#learning-card-1', {
            scrollTrigger: {
                trigger: '#learning-card-1',
                start: 'top 85%',
                end: 'bottom 70%',
                scrub: true,
                markers: true
            },
            x: 100,
            opacity: 0
        })

        gsap.from('#learning-card-2', {
            scrollTrigger: {
                trigger: '#learning-card-2',
                start: 'top 85%',
                end: 'bottom 70%',
                scrub: true,
                markers: true
            },
            x: 100,
            opacity: 0
        })

        gsap.from('#learning-card-3', {
            scrollTrigger: {
                trigger: '#learning-card-3',
                start: 'top 85%',
                end: 'bottom 70%',
                scrub: true,
                markers: true
            },
            x: 100,
            opacity: 0
        })

    })
</script>