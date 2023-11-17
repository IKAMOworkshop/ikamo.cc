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
                info: 'Building a router for page transitions.',
                },
                {
                id: '02',
                info: 'Creating a modular file system.',
                },
                {
                id: '03',
                info: 'Optimizing media for faster load.',
                },
                {
                id: '01',
                info: 'Building a router for page transitions.',
                },
                {
                id: '02',
                info: 'Creating a modular file system.',
                },
                {
                id: '03',
                info: 'Optimizing media for faster load.',
                },
            ]
            }
        }
    }
</script>