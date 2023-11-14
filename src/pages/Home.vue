<template>
    <div>

        <div class="hero-section-container">
            <p class="body-light text-light">
                hello there!
                <br /><span class="body-bold">i'm jeremy chang,</span>
            </p>
        </div>

        <div class="landing-container">
            <div class="hero-col">
                <div class="hero-col-sm">
                    <p class="body-bold text-light">an aspiring</p>
                    <div class="scroll-icon">
                        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M44.0459 24C44.0459 24.6 44.2461 25 44.6465 25.4C45.0469 25.8 45.4474 26 46.048 26C46.6486 26 47.049 25.8 47.4494 25.4C47.6496 25.2 47.8498 25 47.8498 24.8C48.05 24.4 48.05 23.8 47.8498 23.2C47.7497 23.1 47.6997 23 47.6496 22.9C47.5996 22.8 47.5495 22.7 47.4494 22.6C47.049 22.2 46.6486 22 46.048 22C45.4474 22 45.0469 22.2 44.6465 22.6C44.2461 23 44.0459 23.4 44.0459 24ZM25.4248 47.3997L42.4423 30.3998C43.2432 29.5998 43.2432 28.3998 42.4423 27.5998C41.6415 26.7998 40.4403 26.7998 39.6394 27.5998L26.0254 41.1997L26.0254 8.99998C26.0254 7.79999 25.2246 7 24.0233 7C22.8221 7 22.0212 7.79999 22.0212 8.99998L22.0212 41.1997L3.40201 22.5999C2.60118 21.7999 1.39994 21.7999 0.599109 22.5999C0.198695 22.9999 -0.00151192 23.5999 -0.001512 23.9999C-0.00151208 24.3999 0.198695 24.9998 0.599108 25.3998L22.6219 47.3997C23.4227 48.1997 24.6239 48.1997 25.4248 47.3997ZM25.026 3.69997C24.976 3.74997 24.9259 3.79997 24.8258 3.79997C24.7257 3.79997 24.6756 3.84997 24.6256 3.89997C24.5755 3.94997 24.5255 3.99997 24.4254 3.99997L24.025 3.99997C23.4244 3.99997 23.0239 3.79997 22.6235 3.39997C22.5234 3.29997 22.4734 3.19997 22.4233 3.09997C22.3733 2.99997 22.3232 2.89998 22.2231 2.79998C22.0229 2.59998 22.0229 2.19998 22.0229 1.99998C22.0229 1.39999 22.2231 0.999992 22.6235 0.599995C23.0239 0.199999 23.4244 -2.39564e-07 24.025 -2.33709e-07L24.4254 -2.29805e-07C24.6256 0.199998 24.6256 0.199998 24.8258 0.199998C24.9259 0.199998 24.976 0.249998 25.026 0.299997C25.0761 0.349997 25.1261 0.399996 25.2262 0.399996L25.4264 0.599995C26.027 1.19999 26.2272 1.99998 25.8268 2.59998C25.8268 2.69998 25.7768 2.74998 25.7267 2.79998C25.6767 2.84998 25.6266 2.89998 25.6266 2.99997C25.6266 3.19997 25.4264 3.39997 25.4264 3.39997C25.4264 3.39997 25.4264 3.59997 25.2262 3.59997C25.1261 3.59997 25.0761 3.64997 25.026 3.69997Z" fill="white"/>
                        </svg>
                    </div>
                </div>
                <div class="hero-col-lg">
                    <h1 class="hero text-light">
                        <span class="hero-text-overlay">creative</span>
                        <br />developer
                    </h1>
                </div>
            </div>
        </div>

        <div class="landing-container">
            <div class="hero-col">
                <div class="hero-col-sm"></div>
                <div class="col-full">
                    <h4 class="body-bold text-light-gray">goals.</h4>
                    <p class="subtitle-light text-light">I aim to create seamless and immersive digital experiences to engage users on multiple levels.</p>
                </div>
            </div>
        </div>

        <div class="cases-title-container">
            <h2 class="large-title text-light">
                <span class="hero-text-overlay">selected</span>
                <br />work.
            </h2>
        </div>

        <div class="selected-work-container">
            <div class="scroll-track">
                <div class="project-images">

                    <!-- Convert to Components -->

                    <router-link class="project-links over" to="/arcane">
                        <img src="@/assets/landing/arcane.png" alt="" class="project-image" draggable="false">
                        <div class="case-details">
                            <p class="case-overview text-light">A frontend portfolio showcasing websites that I designed and developed.</p>
                            <div class="case-titles">
                                <h2 class="title-bold text-light">arcane.</h2>
                                <p class="caption text-primary-blue">#web-design #vue #three-js</p>
                            </div>
                        </div>
                    </router-link>
                    <router-link class="project-links over" to="/charm">
                        <img src="@/assets/landing/charm.png" alt="" class="project-image" draggable="false">
                        <div class="case-details">
                            <p class="case-overview text-light">Building an engaging portfolio websites for ArtCenter Spring 2023 Gradshow.</p>
                            <div class="case-titles">
                                <h2 class="title-bold text-light">charm.</h2>
                                <p class="caption text-primary-blue">#web-design #vanillaJS</p>
                            </div>
                        </div>
                    </router-link>
                    <router-link class="project-links over" to="bright">
                        <img src="@/assets/landing/bright.png" alt="" class="project-image" draggable="false">
                        <div class="case-details">
                            <p class="case-overview text-light">A personal archive to document highlighted events from my life.</p>
                            <div class="case-titles">
                                <h2 class="title-bold text-light">bright.</h2>
                                <p class="caption text-primary-blue">#web-design #astro #cms</p>
                            </div>
                        </div>
                    </router-link>
                    <router-link class="project-links over" to="/arcane">
                        <img src="@/assets/landing/arcane.png" alt="" class="project-image" draggable="false">
                        <div class="case-details">
                            <p class="case-overview text-light">A frontend portfolio showcasing websites that I designed and developed.</p>
                            <div class="case-titles">
                                <h2 class="title-bold text-light">arcane.</h2>
                                <p class="caption text-primary-blue">#web-design #vue #three-js</p>
                            </div>
                        </div>
                    </router-link>
                    <router-link class="project-links over" to="/charm">
                        <img src="@/assets/landing/charm.png" alt="" class="project-image" draggable="false">
                        <div class="case-details">
                            <p class="case-overview text-light">Building an engaging portfolio websites for ArtCenter Spring 2023 Gradshow.</p>
                            <div class="case-titles">
                                <h2 class="title-bold text-light">charm.</h2>
                                <p class="caption text-primary-blue">#web-design #vanillaJS</p>
                            </div>
                        </div>
                    </router-link>
                    <router-link class="project-links over" to="bright">
                        <img src="@/assets/landing/bright.png" alt="" class="project-image" draggable="false">
                        <div class="case-details">
                            <p class="case-overview text-light">A personal archive to document highlighted events from my life.</p>
                            <div class="case-titles">
                                <h2 class="title-bold text-light">bright.</h2>
                                <p class="caption text-primary-blue">#web-design #astro #cms</p>
                            </div>
                        </div>
                    </router-link>
                </div>
            </div>
        </div>

        <div class="personal-highlight">
            <div class="col-30">
                <h3 class="subtitle-bold text-light text-right">
                    i endjoy blending things to
                    <span class="text-primary-blue">craft the unexpected.</span>
                </h3>
            </div>
            <div class="col-30">
                <div class="highlighted-list">
                    <p class="subtitle-light text-light">visuals.</p>
                    <p class="subtitle-light text-light">tech.</p>
                    <p class="subtitle-light text-light">brands.</p>
                    <p class="subtitle-light text-light">motion.</p>
                    <p class="subtitle-light text-light">modeling.</p>
                    <p class="subtitle-light text-light">illustration.</p>
                    <p class="subtitle-light text-light">and more...</p>
                </div>
            </div>
        </div>

    </div>
</template>