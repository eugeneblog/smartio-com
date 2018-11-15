import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/views/layout/Layout.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/index/:id',
      name: 'Layout',
      component: Layout,
      children: [{
        path: 'home',
        component: () => import('@/pages/home/index.vue')
      }]
    }
  ]
})
