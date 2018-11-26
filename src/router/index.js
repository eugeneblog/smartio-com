import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/views/layout/Layout.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/index',
      name: 'Layout',
      component: Layout,
      children: [{
        path: 'home',
        component: () => import('@/pages/home/index.vue'),
        meta: { keepAlive: true }
      }, {
        path: 'cases',
        component: () => import('@/pages/cases/index.vue'),
        meta: { keepAlive: true }
      }, {
        path: 'product',
        component: () => import('@/pages/product/index.vue'),
        meta: { keepAlive: true }
      }, {
        path: 'tools',
        component: () => import('@/pages/tools/index.vue'),
        meta: { keepAlive: true }
      }, {
        path: 'about',
        component: () => import('@/pages/about/index.vue'),
        meta: { keepAlive: true }
      }, {
        path: 'information',
        component: () => import('@/pages/information/index.vue')
      }, {
        path: 'detail/:id',
        name: 'detail',
        component: () => import('@/pages/detail/index.vue'),
        meta: { keepAlive: true }
      }]
    }
  ]
})
