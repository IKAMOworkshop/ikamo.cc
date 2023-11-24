<template>
    <div>
        <!-- <Cursor /> -->
        <Navigation />
        <router-view></router-view>
    </div>
</template>

<script setup>
    import Navigation from '@/components/Navigation.vue'
    import Cursor from '@/components/interaction/Cursor.vue'
</script>