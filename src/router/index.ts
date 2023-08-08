import { createRouter, createWebHistory } from 'vue-router'
import PageForm from '@/pages/PageForm.vue'
import PagePreview from '@/pages/PagePreview.vue'

const routes = [
  {
    path: '/form',
    name: 'form',
    component: PageForm
  },
  {
    path: '/preview',
    name: 'preview',
    component: PagePreview
  }
]

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})
