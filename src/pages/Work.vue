<template>
    <div>
        
        <!-- <div class="vingnette"></div> -->

        <div class="work-background-container">

            <div class="rotate-background" id="image-container">
                
                <div class="image-row">
                    <img :src="imageURL" alt="" class="work-image support-image" draggable ="false">
                    <img :src="imageURL" alt="" class="work-image support-image" draggable ="false">
                    <img :src="imageURL" alt="" class="work-image support-image" draggable ="false">
                </div>

                <div class="image-row">
                    <img :src="imageURL" alt="" class="work-image support-image" draggable ="false">
                    <img :src="imageURL" alt="" class="work-image" draggable ="false">
                    <img :src="imageURL" alt="" class="work-image support-image" draggable ="false">
                </div>

                <div class="image-row">
                    <img :src="imageURL" alt="" class="work-image support-image" draggable ="false">
                    <img :src="imageURL" alt="" class="work-image support-image" draggable ="false">
                    <img :src="imageURL" alt="" class="work-image support-image" draggable ="false">
                </div>
                
            </div>

        </div>

        <ul class="works-list">
            <li>
                <router-link v-on:mouseover="updateToCharm" to="/charm" class="charm">
                    <div class="work-title-container">
                        <h1 class="large-title text-light work-link work-title-move">charm.</h1>
                    </div>
                </router-link>
            </li>
            <li>
                <router-link v-on:mouseover="updateToBright" to="/bright" class="bright">
                    <div class="work-title-container">
                        <h1 class="large-title text-light work-link work-title-move">bright.</h1>
                    </div>
                </router-link>
            </li>
            <li>
                <router-link v-on:mouseover="updateToArcane" to="/arcane" class="arcane">
                    <div class="work-title-container">
                        <h1 class="large-title text-light work-link work-title-move">arcane.</h1>
                    </div>
                </router-link>
            </li>
            <li>
                <router-link v-on:mouseover="updateToCharm" to="/charm" class="charm">
                    <div class="work-title-container">
                        <h1 class="large-title text-light work-link work-title-move">charm.</h1>
                    </div>
                </router-link>
            </li>
            <li>
                <router-link v-on:mouseover="updateToBright" to="/bright" class="bright">
                    <div class="work-title-container">
                        <h1 class="large-title text-light work-link work-title-move">bright.</h1>
                    </div>
                </router-link>
            </li>
            <li>
                <router-link v-on:mouseover="updateToArcane" to="/arcane" class="arcane">
                    <div class="work-title-container">
                        <h1 class="large-title text-light work-link work-title-move">arcane.</h1>
                    </div>
                </router-link>
            </li>
            <li>
                <router-link v-on:mouseover="updateToCharm" to="/charm" class="charm">
                    <div class="work-title-container">
                        <h1 class="large-title text-light work-link work-title-move">charm.</h1>
                    </div>
                </router-link>
            </li>
            <li>
                <router-link v-on:mouseover="updateToBright" to="/bright" class="bright">
                    <div class="work-title-container">
                        <h1 class="large-title text-light work-link work-title-move">bright.</h1>
                    </div>
                </router-link>
            </li>
            <li>
                <router-link v-on:mouseover="updateToArcane" to="/arcane" class="arcane">
                    <div class="work-title-container">
                        <h1 class="large-title text-light work-link work-title-move">arcane.</h1>
                    </div>
                </router-link>
            </li>
        </ul>

    </div>
</template>

<script>
    export default {
        name: 'Processes',
        data (){
            return {
                imageURL: './assets/landing/charm.png',
            }
        },
        methods: {
            updateToCharm(){
                this.imageURL = './assets/landing/charm.png'
            },
            updateToBright(){
                this.imageURL = './assets/landing/bright.png'
            },
            updateToArcane(){
                this.imageURL = './assets/landing/arcane.png'
            }
        }
    }
</script>

<script setup>
    import { onMounted, onUnmounted } from 'vue'
    import {useHead} from '@vueuse/head'
    import { onBeforeRouteLeave } from 'vue-router'

    import Lenis from '@studio-freight/lenis'
    import gsap from 'gsap'

    useHead({
        title: 'IKAMOdev | Works',
        meta: [
            {
                name: 'description',
                content: 'An aspiring creative developer who enjoys crafting transformative and immersive experience.',
            },
            {
                name: 'og:title',
                content: 'IKAMOdev | Works',
            },
            {
                name: 'og:description',
                content: 'An aspiring creative developer who enjoys crafting transformative and immersive experience.',
            },
            {
                name: 'twitter:title',
                content: 'IKAMOdev | Works',
            },
            {
                name: 'twitter:description',
                content: 'An aspiring creative developer who enjoys crafting transformative and immersive experience.',
            },
        ]
    })

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

        window.scrollTo(0, 0)

        // GSAP load in animation
        const tl = gsap.timeline()
        tl
        .from('.work-background-container',{
            duration: 1.5,
            opacity: 0,
        })
        .to('.work-title-move',{
            duration: 1.2,
            y: -10,
            ease: 'power2.in0ut',
        }, '-=1')


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

    onBeforeRouteLeave((to, from, next) => {
        const tl = gsap.timeline()
        tl
        .to('.work-title-move', {
            duration: .8,
            y: 200,
            ease: 'power2.in0ut',
        })
        .to('.work-background-container', {
            duration: .8,
            opacity: 0,
            onComplete: () => {
                next()
            },
        }, '-=1')
    })

</script>