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
            <li><router-link v-on:mouseover="updateToBright" to="/charm" class="large-title text-light work-link bright">bright.</router-link></li>
            <li><router-link v-on:mouseover="updateToArcane" to="/charm" class="large-title text-light work-link arcane">arcane.</router-link></li>
            <li><router-link v-on:mouseover="updateToCharm" to="/charm" class="large-title text-light work-link charm">charm.</router-link></li>
            <li><router-link v-on:mouseover="updateToBright" to="/charm" class="large-title text-light work-link bright">bright.</router-link></li>
            <li><router-link v-on:mouseover="updateToArcane" to="/charm" class="large-title text-light work-link arcane">arcane.</router-link></li>
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
        const repeatItems = (parentEl, total = 0) => {
        const items = [...parentEl.children];
            for (let i = 0; i <= total-1; ++i) {
                var cln = items[i].cloneNode(true);
                parentEl.appendChild(cln);
            }
        };
        repeatItems(document.querySelector('.works-list'), 6);
    })

    onUnmounted(() => {
        function destroy(){
            lenis.destroy();
        }
        
        destroy();
    })

</script>