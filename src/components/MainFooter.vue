<template>
    <div>
        <footer id="footer" class="footer primary-blue footer-col">

            <div class="col-50">
                <router-link class="footer-contact" to="/contact">
                    <div class="footer-hero-container">
                        <div class="footer-hero-move">
                            <h1 class="hero text-strong-blue">let's</h1>
                            <h1 class="hero text-strong-blue">let's</h1>
                        </div>
                    </div>
                    <h1 class="hero text-dark-gray">chat!</h1>
                </router-link>
            </div>

            <div class="col-50 footer-secondary">
                <div class="footer-links">

                    <button id="email-footer" class="footer-link">
                        <div class="footer-link-container">
                            <div class="footer-link-move">
                                <h4 class="body-bold text-dark-gray">get in touch!</h4>
                                <h4 class="body-light text-dark-gray">copy email.</h4>
                            </div>
                        </div>
                        <p class="subtitle-light text-dark-gray">email</p>
                    </button>

                    <router-link to="/about" class="footer-link">
                        <div class="footer-link-container">
                            <div class="footer-link-move">
                                <h4 class="body-bold text-dark-gray">find out more!</h4>
                                <h4 class="body-light text-dark-gray">go to about.</h4>
                            </div>
                        </div>
                        <p class="subtitle-light text-dark-gray">about</p>
                    </router-link>
                </div>
                <p class="caption-light text-dark-gray copyright">©2023 Jeremy Chang</p>
            </div>

        </footer>
    </div>
</template>

<script setup>
    import {onMounted} from 'vue'

    onMounted(() => {
        const emailButton = document.getElementById('email-footer')

        const copyEmail = () => {
            navigator.clipboard.writeText("changjeremy0226@gmail.com").then(() => {
                console.log('Content copied to clipboard')
            },() => {
                console.error('Failed to copy')
            })
        }

        emailButton.addEventListener('click', copyEmail)
    })
</script>