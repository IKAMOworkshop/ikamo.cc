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
                info: 'Vue, Blender, and Three.js integration.',
                },
                {
                id: '02',
                info: 'Creating multiple scenes for sections.',
                },
                {
                id: '03',
                info: 'Crafting page transition with GSAP.',
                },
                {
                id: '04',
                info: 'Integrating smooth and infinite scrolling.',
                },
                {
                id: '01',
                info: 'Vue, Blender, and Three.js integration.',
                },
                {
                id: '02',
                info: 'Creating multiple scenes for sections.',
                },
                {
                id: '03',
                info: 'Crafting page transition with GSAP.',
                },
                {
                id: '04',
                info: 'Integrating smooth and infinite scrolling.',
                },
            ]
            }
        }
    }
</script>