import { createRouter, createWebHistory } from 'vue-router'
const routes = [
  {
    path: '/list',
    name: 'List',
    component: () => import('../../Users/List.vue')
  },
  {
    path:'/add',
    name:'Add',
    component: () => import('../../Users/Add.vue')
  }, {
    path:'/update/:id',
    name:'Update',
    component: () => import('../../Users/Update.vue')
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
export default router
