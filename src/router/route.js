import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export function createRouter () {
  return new Router({
    mode: 'history',
    route: [
      {
        path: '/index',
        name: 'Layout',
        component: () => import('@/views/layout/Layout.vue')
      }
    ]
  })
}
