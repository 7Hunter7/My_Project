import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import NotFound from '../pages/NotFound.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/blog',
      name: 'BlogPage',
      component: () => import('../pages/BlogPage.vue')
    },
    {
      path: '/blog_detalies',
      name: 'BlogDetailsPage',
      component: () => import('../pages/BlogDetailsPage.vue')
    },
    {
      path: '/project',
      name: 'ProjectPage',
      component: () => import('../pages/ProjectPage.vue')
    },
    {
      path: '/project_detalies',
      name: 'ProjectDetailsPage',
      component: () => import('../pages/ProjectDetailsPage.vue')
    },
    { path: '/:pathMatch(.*)', name: '404', component: NotFound }
  ]
})

export default router
