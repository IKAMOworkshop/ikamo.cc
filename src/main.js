import { createApp } from 'vue'
import '@/styles/reset.css'
import '@/styles/styles.css'
import { createHead } from '@vueuse/head'
import router from '@/plugins/router.js'
import App from '@/App.vue'

const head = createHead()

createApp(App).use(head).use(router).mount('#app')
