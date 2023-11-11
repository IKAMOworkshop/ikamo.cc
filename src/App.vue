<template>
    <div>
        <Navigation />
        <router-view></router-view>
        <MainFooter />
    </div>
</template>

<script setup>
    import Navigation from '@/components/Navigation.vue'
    import MainFooter from '@/components/MainFooter.vue'
</script>