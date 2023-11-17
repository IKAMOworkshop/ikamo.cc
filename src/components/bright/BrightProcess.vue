<template>
    <div class="slide-image gray" v-for="process in processes">
        <div class="info-text-container gray">
            <p class="body-bold text-primary-blue">{{process.id}}</p>
            <h3 class="subtitle-light text-light">{{process.info}}</h3>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Processes',
        data (){
            return {
            processes: [
                {
                id: '01',
                info: 'Integrating Astro and Sanity’s API.',
                },
                {
                id: '02',
                info: 'Building light/ dark using local storage.',
                },
                {
                id: '03',
                info: 'Date sorting and formatting.',
                },
                {
                id: '04',
                info: 'Animating page load with GSAP.',
                },
                {
                id: '01',
                info: 'Integrating Astro and Sanity’s API.',
                },
                {
                id: '02',
                info: 'Building light/ dark using local storage.',
                },
                {
                id: '03',
                info: 'Date sorting and formatting.',
                },
                {
                id: '04',
                info: 'Animating page load with GSAP.',
                },
            ]
            }
        }
    }
</script>