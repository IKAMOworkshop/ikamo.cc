<template>
    <div class="page-container contact-container">

        <div class="contact-top">
            <p class="large-title text-light">
                <span class="hero-text-overlay">feel free</span>
                <br />to reach out anytime!
            </p>
        </div>

        <div class="contact-infos">
            <button id="email-button" class="contact-info">
                <div class="contact-title-container">
                    <div class="contact-title-move">
                        <h4 class="body-bold text-light-gray">get in touch!</h4>
                        <h4 class="body-light text-light-gray">copy email.</h4>
                    </div>
                </div>
                <p class="subtitle-light text-light-gray">email.</p>
            </button>
            <a href="https://www.linkedin.com/in/jeremystudio/" class="contact-info" target="_blank" rel="noopener noreferrer">
                <div class="contact-title-container">
                    <div class="contact-title-move">
                        <h4 class="body-bold text-light-gray">let us connect!</h4>
                        <h4 class="body-light text-light-gray">visit profile.</h4>
                    </div>
                </div>
                <p class="subtitle-light text-light-gray">linkedin.</p>
            </a>
            <a href="https://github.com/IKAMOworkshop" class="contact-info" target="_blank" rel="noopener noreferrer">
                <div class="contact-title-container">
                    <div class="contact-title-move">
                        <h4 class="body-bold text-light-gray">check my code!</h4>
                        <h4 class="body-light text-light-gray">visit profile.</h4>
                    </div>
                </div>
                <p class="subtitle-light text-light-gray">github.</p>
            </a>
        </div>

    </div>
</template>

<script setup>
    import {onMounted} from 'vue'

    onMounted(() => {
        const emailButton = document.getElementById('email-button')

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