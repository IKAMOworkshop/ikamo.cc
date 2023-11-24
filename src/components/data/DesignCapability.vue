<template>

    <div id="design-card" class="capability-card gray">
        <h3 class="subtitle-light text-primary-blue">design.</h3>
        <div class="capability-col">
            <div class="col-50 capability-text">
                <p class="body-light text-light" v-for="text in columnOne">{{ text.info }}</p>
            </div>
            <div class="col-50 capability-text">
                <p class="body-light text-light" v-for="text in columnTwo">{{ text.info }}</p>
            </div>
        </div>
    </div>

</template>

<script>
    export default {
        name: 'Cases',
        data (){
            return {
            columnOne: [
                {
                info: 'UX Design',
                },
                {
                info: 'UI Design',
                },
                {
                info: 'Web Design',
                },
                {
                info: 'Wireframing',
                },
                {
                info: 'Information Architecture',
                },
                {
                info: 'Brand Development',
                },
            ],
            columnTwo: [
                {
                info: 'Responsive Design',
                },
                {
                info: 'Digital Product Design',
                },
                {
                info: 'VR/XR Experience Design',
                },
                {
                info: 'Rapid Prototyping',
                },
                {
                info: 'Design Research',
                },
                {
                info: 'Market Research',
                },
            ],
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
        gsap.from('#design-card', {
            scrollTrigger: {
                trigger: '#design-card',
                start: 'top 85%',
                end: 'bottom 70%',
                scrub: true,
            },
            x: 100,
            opacity: 0
        })
    })
</script>