<template>
    <div class="slide-image gray" v-for="takeaway in takeaways">
        <div class="info-text-container gray">
            <p class="body-bold text-primary-blue">{{takeaway.id}}</p>
            <h3 class="subtitle-light text-light">{{takeaway.info}}</h3>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Takeaways',
        data (){
            return {
            takeaways: [
                {
                id: '01',
                info: 'Modular coding is essential to write organized code.',
                },
                {
                id: '02',
                info: 'Orienting the model correctly to make coding easier.',
                },
                {
                id: '03',
                info: 'Lifecycle hooks are crucial for building multiple pages.',
                },
                {
                id: '04',
                info: 'GSAP’s transform directly modifies DOM elements.',
                },
                {
                id: '01',
                info: 'Modular coding is essential to write organized code.',
                },
                {
                id: '02',
                info: 'Orienting the model correctly to make coding easier.',
                },
                {
                id: '03',
                info: 'Lifecycle hooks are crucial for building multiple pages.',
                },
                {
                id: '04',
                info: 'GSAP’s transform directly modifies DOM elements.',
                },
            ]
            }
        }
    }
</script>