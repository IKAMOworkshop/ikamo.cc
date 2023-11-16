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
                date: 'oct 2023 - nov 2023',
                info: 'Three.JS Journey by Bruno Simon.',
                },
                {
                date: 'sept 2018 - apr 2023',
                info: 'ArtCenter College of Design.',
                },
                {
                date: 'aug 2023 - now',
                info: 'The Odin Project (Open Source).',
                },
            ]}
        }
    }
</script>