<template>
    <div>

        <div class="work-background-container">

            <div class="rotate-background" id="image-container">
                
                <div class="image-row">
                    <img :src="imageURL" alt="" class="work-image support-image">
                    <img :src="imageURL" alt="" class="work-image support-image">
                    <img :src="imageURL" alt="" class="work-image support-image">
                </div>

                <div class="image-row">
                    <img :src="imageURL" alt="" class="work-image support-image">
                    <img :src="imageURL" alt="" class="work-image">
                    <img :src="imageURL" alt="" class="work-image support-image">
                </div>

                <div class="image-row">
                    <img :src="imageURL" alt="" class="work-image support-image">
                    <img :src="imageURL" alt="" class="work-image support-image">
                    <img :src="imageURL" alt="" class="work-image support-image">
                </div>
                
            </div>

        </div>

        <ul class="works-list">
            <li><router-link v-on:mouseover="updateToCharm" to="/charm" class="large-title text-light work-link charm">charm.</router-link></li>
            <li><router-link v-on:mouseover="updateToBright" to="/bright" class="large-title text-light work-link bright">bright.</router-link></li>
            <li><router-link v-on:mouseover="updateToArcane" to="/arcane" class="large-title text-light work-link arcane">arcane.</router-link></li>
            <li><router-link v-on:mouseover="updateToCharm" to="/charm" class="large-title text-light work-link charm">charm.</router-link></li>
            <li><router-link v-on:mouseover="updateToBright" to="/bright" class="large-title text-light work-link bright">bright.</router-link></li>
            <li><router-link v-on:mouseover="updateToArcane" to="/arcane" class="large-title text-light work-link arcane">arcane.</router-link></li>
            <li><router-link v-on:mouseover="updateToCharm" to="/charm" class="large-title text-light work-link charm">charm.</router-link></li>
            <li><router-link v-on:mouseover="updateToBright" to="/bright" class="large-title text-light work-link bright">bright.</router-link></li>
            <li><router-link v-on:mouseover="updateToArcane" to="/arcane" class="large-title text-light work-link arcane">arcane.</router-link></li>
            <li><router-link v-on:mouseover="updateToCharm" to="/charm" class="large-title text-light work-link charm">charm.</router-link></li>
            <li><router-link v-on:mouseover="updateToBright" to="/bright" class="large-title text-light work-link bright">bright.</router-link></li>
            <li><router-link v-on:mouseover="updateToArcane" to="/arcane" class="large-title text-light work-link arcane">arcane.</router-link></li>
        </ul>

    </div>
</template>

<script>
    export default {
        name: 'Processes',
        data (){
            return {
                imageURL: './src/assets/landing/charm.png',
            }
        },
        methods: {
            updateToCharm(){
                this.imageURL = './src/assets/landing/charm.png'
            },
            updateToBright(){
                this.imageURL = './src/assets/landing/bright.png'
            },
            updateToArcane(){
                this.imageURL = './src/assets/landing/arcane.png'
            }
        }
    }
</script>

<script setup>
    import { onMounted, onUnmounted } from 'vue'
    import Lenis from '@studio-freight/lenis'

    const lenis = new Lenis({
    smooth: true,
    infinite: true,
    });

    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    onMounted(() => {
        const imageContainer = document.getElementById('image-container')
        const mousePos = {
            x: 0,
            y: 0,
        }

        window.addEventListener('mousemove', (e) => {
            mousePos.x = - (e.clientX / window.innerWidth) * 3
            mousePos.y = - (e.clientY / window.innerHeight) * 3

            imageContainer.style.translate = `${mousePos.x}% ${mousePos.y}% `
        })
    })

    onUnmounted(() => {
        function destroy(){
            lenis.destroy()
        }
        
        destroy()
    })

</script>