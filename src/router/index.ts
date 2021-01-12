import { createWebHashHistory, createRouter, RouteRecordRaw } from 'vue-router'
const history = createWebHashHistory()

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/navigation',
  },
  {
    path: '/navigation',
    name: 'navigation',
    component: () => import('../views/navigation.vue'),
    },
    {
        path: '/home',
        name: 'home',
        component: () => import('../views/home.vue'),
      },
  
]
const router = createRouter({
  history,
  routes,
})
export default router
