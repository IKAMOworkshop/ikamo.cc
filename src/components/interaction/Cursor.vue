<template>
    <div>

        <div class="cursor-container">
            <div id="cursor" class="cursor">
                <div class="cursor-bar-vertical cursor-bar"></div>
                <div class="cursor-bar-horizontal-container">
                    <div class="cursor-bar-horizontal cursor-bar"></div>
                    <div class="cursor-bar-horizontal cursor-bar"></div>
                </div>
                <div class="cursor-bar-vertical cursor-bar"></div>
            </div>
        </div>

        <div class="cursor-gradient-container">
            <div class="cursor-gradient-overlay"></div>
            <div id="cursor-gradient" class="cursor-gradient"></div>
        </div>

    </div>
</template>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
    const cursor = document.getElementById('cursor')
    const cursorGradient = document.getElementById('cursor-gradient')

    const mousePos = {
        x: 0,
        y: 0
    }

    window.addEventListener('mousemove', (e) => {
            mousePos.x = e.clientX
            mousePos.y = e.clientY
            
            cursor.animate({
                left: `${mousePos.x}px`,
                top: `${mousePos.y}px`
            }, {duration: 300, fill: 'forwards'})

            cursorGradient.animate({
                left: `${mousePos.x}px`,
                top: `${mousePos.y}px`
            }, {duration: 16000, fill: 'forwards'})
        })

    })



</script>