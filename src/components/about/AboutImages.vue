<template>
    <div class="slide-image gray" v-for="image in aboutImages">
        <div class="image-container">
            <img :src="image.url" alt="" class="contained-image">
        </div>
    </div>
</template>

<script>
    export default {
        name: 'aboutImages',
        data (){
            return {
            aboutImages: [
                {
                url: './src/assets/about/aida.webp',
                },
                {
                url: './src/assets/about/cup.webp',
                },
                {
                url: './src/assets/about/polygon.webp',
                },
                {
                url: './src/assets/about/prisma.webp',
                },
                {
                url: './src/assets/about/unity.webp',
                },
                {
                url: './src/assets/about/unreal.webp',
                },
            ]
            }
        }
    }
</script>

