import { createApp } from 'vue'
import App from './App.vue'
import PageHome from '@/components/PageHome'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [{
  path: '/',
  component: PageHome
}]

const router = createRouter({
  history: createWebHistory(),
  routes
})

const firstProject = createApp(App)
firstProject.use(router)
firstProject.mount('#app')
