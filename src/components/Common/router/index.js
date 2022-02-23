import { createRouter, createWebHistory } from 'vue-router'
const routes = [
  {
    path:'/',
    name:'Outside',
    component: () => import('../../Outside.vue'),
    children:[
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

  }
  // ,
  // {
  //   path:'/',
  //   name:'Main',
  //   component: () => import('../sidebar/MainSide.vue')
  // }
//   ,
//  {
//     path:'/',
//     name:'Signup',
//     component:() => import('../Authentication/Signup.vue')
//   }

]

const router = createRouter({
  history: createWebHistory(),
  routes
})
export default router
