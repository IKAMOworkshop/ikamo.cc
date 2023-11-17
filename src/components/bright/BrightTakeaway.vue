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
                info: 'Use block content for image if there’s not a set amount.',
                },
                {
                id: '02',
                info: 'Create utility files for JS API can speed up the coding process.',
                },
                {
                id: '03',
                info: 'Wrapping things outside of <slot> will cause load issues.',
                },
                {
                id: '04',
                info: 'Design system in SCSS is extremely handy to have.',
                },
                {
                id: '01',
                info: 'Use block content for image if there’s not a set amount.',
                },
                {
                id: '02',
                info: 'Create utility files for JS API can speed up the coding process.',
                },
                {
                id: '03',
                info: 'Wrapping things outside of <slot> will cause load issues.',
                },
                {
                id: '04',
                info: 'Design system in SCSS is extremely handy to have.',
                },
            ]
            }
        }
    }
</script>