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
                info: 'SCSS variables have limitations for responsive.',
                },
                {
                id: '02',
                info: 'File pathing is important for nice-looking slugs.',
                },
                {
                id: '03',
                info: 'JS optimization should aim for readability first.',
                },
                {
                id: '04',
                info: 'Apply max/min-width for better responsive sites.',
                },
                {
                id: '01',
                info: 'SCSS variables have limitations for responsive.',
                },
                {
                id: '02',
                info: 'File pathing is important for nice-looking slugs.',
                },
                {
                id: '03',
                info: 'JS optimization should aim for readability first.',
                },
                {
                id: '04',
                info: 'Apply max/min-width for better responsive sites.',
                },
            ]
            }
        }
    }
</script>