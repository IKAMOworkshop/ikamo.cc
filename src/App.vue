<template>
    <div>
        <Loader />
        <Cursor />
        <Navigation />
        <router-view v-if="routerDisplay"></router-view>
    </div>
</template>

<script setup>
    import {ref} from 'vue'

    import Navigation from '@/components/Navigation.vue'
    import Cursor from '@/components/interaction/Cursor.vue'
    import Loader from '@/components/Loader.vue'

    let routerDisplay = ref(false)

    setTimeout(() =>{
        routerDisplay.value = true
    }, 2500)
</script>