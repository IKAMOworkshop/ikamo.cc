<template>

    <div class="capability-card gray">
        <h3 class="subtitle-light text-primary-blue">develop.</h3>
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
                info: 'HTML',
                },
                {
                info: 'CSS',
                },
                {
                info: 'JavaScript',
                },
                {
                info: 'Tailwind CSS',
                },
                {
                info: 'SASS',
                },
                {
                info: 'GSAP',
                },
            ],
            columnTwo: [
                {
                info: 'Vue',
                },
                {
                info: 'Vite',
                },
                {
                info: 'Astro',
                },
                {
                info: 'Three JS',
                },
                {
                info: 'GLSL (In-Progress)',
                },
                {
                info: 'Git',
                },
            ],
            }
        }
    }
</script>