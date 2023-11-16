<template>
    <div class="slide-image gray" v-for="dataInfo in dataInfos">
        <div class="info-text-container gray">
            <p class="body-bold text-primary-blue">{{dataInfo.id}}</p>
            <h3 class="subtitle-light text-light">{{dataInfo.info}}</h3>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Cases',
        data (){
            return {
            dataInfos: [
                {
                id: '01',
                info: 'I spend roughly 14 hours in front of a screen daily.',
                },
                {
                id: '02',
                info: 'Including learning, I’ve spend 8 years exploring design.',
                },
                {
                id: '03',
                info: '80% of what I do is learned by self-research.',
                },
                {
                id: '04',
                info: 'I start to seriously learn how to draw at Jan 2021.',
                },
                {
                id: '05',
                info: 'Before COVID, I visit Japan twice very year.',
                },
                {
                id: '06',
                info: 'I never had a cat, but that is the ultimate life goal.',
                },
            ]
            }
        }
    }
</script>