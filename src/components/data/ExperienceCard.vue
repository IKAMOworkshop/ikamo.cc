<template>
    <div class="info-card gray" v-for="experience in experiences">
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
                },
                {
                date: 'jan 2020 - now',
                info: 'Freelance under IKAMOworkshop.',
                },
                {
                date: 'mar 2022 - aug 2022',
                info: 'UX Design Intern at Neuron UX.',
                },
                {
                date: 'jan 2020 - mar 2022',
                info: 'Lead Designer at Munative.',
                },
                {
                date: 'sept 2019 - apr 2023',
                info: 'Teacher Assistant at ArtCenter.',
                },
            ]
            }
        }
    }
</script>