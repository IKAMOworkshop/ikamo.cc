<template>
    <div>
        <button @click="counter++">{{ counter }}</button>
    </div>
</template>

<script setup>
import {ref} from 'vue'

const counter = ref(0)
</script>