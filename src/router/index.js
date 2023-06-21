import HomePage from '@/pages/HomePage'
import ThreadShow from '@/pages/ThreadShow'
import NotFound from '@/pages/NotFound'
import Category from '@/pages/ForumPage'
import { createRouter, createWebHistory } from 'vue-router'
import sourceData from '@/assets/data.json'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: 'category/:id',
    name: 'Category',
    component: Category,
    props: true
  },
  {
    path: 'forum/:id',
    name: 'ForumPage',
    component: Category,
    props: true
  },
  {
    path: '/thread/show/:id',
    name: 'ThreadShow',
    component: ThreadShow,
    props: true,
    beforeEnter (to, from, next) {
      // check if threads exists
      const threadExists = sourceData.threads.find(thread => thread.id === to.params.id)
      // if exists continue
      if (threadExists) {
        return next()
      } else {
        next({
          name: 'NotFound',
          params: { pathMatch: to.path.substring(1).split('/') },
          // preserve existing query and hash
          query: to.query,
          hash: to.hash
        })
      }
      // if doesnt exist redirect to not found
    }
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'Not Found',
    component: NotFound
  }
]

export default createRouter({
  history: createWebHistory(),
  routes
})
