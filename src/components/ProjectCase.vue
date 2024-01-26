<template>
    <div class="project-links over" v-for="project in projects">
        
        <router-link class="project-links over" :to="'/'+project.path">
            <img :src="project.cover" alt="" class="project-image" draggable="false">
            <div class="case-details">
                <p class="case-overview text-light">{{ project.description }}</p>
                <div class="case-titles">
                    <h2 class="title-bold text-light">{{ project.name }}</h2>
                    <p class="body-light text-primary-blue">{{ project.tags }}</p>
                </div>
            </div>
        </router-link>

    </div>
</template>

<script>
    export default {
        name: 'Cases',
        data (){
            return {
            projects: [
                {
                cover: './src/assets/landing/arcane.png',
                name: 'arcane.',
                description: 'A frontend portfolio showcasing website that I designed and developed.',
                tags: '#web-design #vue #three-js',
                path: 'arcane'
                },
                {
                cover: './src/assets/landing/charm.png',
                name: 'charm.',
                description: 'Building an engaging portfolio website for ArtCenter Spring 2023 Gradshow.',
                tags: '#web-design #vanillaJS',
                path: 'charm'
                },
                {
                cover: './src/assets/landing/bright.png',
                name: 'bright',
                description: 'A personal archive to document highlighted events from my life.',
                tags: '#web-design #astro #cms',
                path: 'bright'
                },
                {
                cover: './src/assets/landing/arcane.png',
                name: 'arcane.',
                description: 'A frontend portfolio showcasing website that I designed and developed.',
                tags: '#web-design #vue #three-js',
                path: 'arcane'
                },
                {
                cover: './src/assets/landing/charm.png',
                name: 'charm.',
                description: 'Building an engaging portfolio website for ArtCenter Spring 2023 Gradshow.',
                tags: '#web-design #vanillaJS<',
                path: 'charm'
                },
                {
                cover: './src/assets/landing/bright.png',
                name: 'bright',
                description: 'A personal archive to document highlighted events from my life.',
                tags: '#web-design #astro #cms',
                path: 'bright'
                },
            ]
            }
        }
    }
</script>