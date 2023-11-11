import { createApp } from 'vue'
import '@/styles/styles.css'
import router from '@/plugins/router.js'
import App from '@/App.vue'

createApp(App).use(router).mount('#app')
