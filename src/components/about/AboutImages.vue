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
                url: '/about/aida.webp',
                },
                {
                url: '/about/cup.webp',
                },
                {
                url: '/about/polygon.webp',
                },
                {
                url: '/about/prisma.webp',
                },
                {
                url: '/about/unity.webp',
                },
                {
                url: '/about/unreal.webp',
                },
            ]
            }
        }
    }
</script>

