<template>
    <div id="loader" class="loader">    
        <div class="loader-container">
            <h1 class="caption-bold text-light">IKAMOdev</h1>
            <p class="caption-light text-light">{{ progressNumber }}%</p>
        </div>
        <div id="load-progress" class="loader-progress">
            <div class="progress-numbers">
                <h1 class="caption-bold text-dark">IKAMOdev</h1>
                <p class="caption-light text-dark">{{ progressNumber }}%</p>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { ref, onMounted } from 'vue'

    let progressNumber = ref(0)

    onMounted(() => {
        const loader = document.getElementById('loader')
        const loadProgress = document.getElementById('load-progress')

        for(let i = 1; i <= 100; i++){
            setTimeout(() => {
                progressNumber.value += 1
                loadProgress.style.height = `${progressNumber.value}%`
            }, i * 40)
        }
        setTimeout(() => {
            loader.style.opacity = '0'
        }, 4500)
        setTimeout(() => {
            loader.style.display = 'none'
        }, 5501)
        
    })
</script>