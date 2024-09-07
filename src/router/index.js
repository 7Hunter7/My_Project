import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/HomePage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    return {
      top: 0
    }
  },
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomePage
    },
    {
      path: '/blog',
      name: 'Blog',
      component: () => import('../pages/BlogPage.vue')
    },
    {
      path: '/blog_detalies',
      name: 'Blog_Details',
      component: () => import('../pages/BlogDetailsPage.vue')
    },
    {
      path: '/project',
      name: 'Project',
      component: () => import('../pages/ProjectPage.vue')
    },
    {
      path: '/project_detalies',
      name: 'Project_Details',
      component: () => import('../pages/ProjectDetailsPage.vue')
    },
    {
      path: '/:pathMatch(.*)',
      name: '404',
      component: () => import('../pages/NotFound.vue')
    }
  ]
})

export default router
