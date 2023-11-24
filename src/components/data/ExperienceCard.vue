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
                date: 'jul 2023 - now',
                info: 'UX Designer at Neuron UX.',
                id: 'experience-card-1'
                },
                {
                date: 'jan 2020 - now',
                info: 'Freelance under IKAMOworkshop.',
                id: 'experience-card-2'
                },
                {
                date: 'mar 2022 - aug 2022',
                info: 'UX Design Intern at Neuron UX.',
                id: 'experience-card-3'
                },
                {
                date: 'jan 2020 - mar 2022',
                info: 'Lead Designer at Munative.',
                id: 'experience-card-4'
                },
                {
                date: 'sept 2019 - apr 2023',
                info: 'Teacher Assistant at ArtCenter.',
                id: 'experience-card-5'
                },
            ]
            }
        }
    }
</script>

<script setup>
    import { onMounted } from 'vue'
    import { gsap } from "gsap";
    import { ScrollTrigger } from "gsap/ScrollTrigger";

    gsap.registerPlugin(ScrollTrigger);

    onMounted(() => {

        gsap.from('#experience-card-1', {
            scrollTrigger: {
                trigger: '#experience-card-1',
                start: 'top 85%',
                end: 'bottom 70%',
                scrub: true,
            },
            x: 100,
            opacity: 0
        })

        gsap.from('#experience-card-2', {
            scrollTrigger: {
                trigger: '#experience-card-2',
                start: 'top 85%',
                end: 'bottom 70%',
                scrub: true,
            },
            x: 100,
            opacity: 0
        })

        gsap.from('#experience-card-3', {
            scrollTrigger: {
                trigger: '#experience-card-3',
                start: 'top 85%',
                end: 'bottom 70%',
                scrub: true,
            },
            x: 100,
            opacity: 0
        })

        gsap.from('#experience-card-4', {
            scrollTrigger: {
                trigger: '#experience-card-4',
                start: 'top 85%',
                end: 'bottom 70%',
                scrub: true,
            },
            x: 100,
            opacity: 0
        })

        gsap.from('#experience-card-5', {
            scrollTrigger: {
                trigger: '#experience-card-5',
                start: 'top 85%',
                end: 'bottom 70%',
                scrub: true,
            },
            x: 100,
            opacity: 0
        })

    })
</script>