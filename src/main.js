import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router/index'

const firstProject = createApp(App)
firstProject.use(router)
firstProject.mount('#app')
