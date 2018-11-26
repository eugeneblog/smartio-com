import router from './router'

router.beforeEach((to, from, next) => {
//   if (to.name === 'detail') {
//     // next({ path: `/index/detail` })
//   }
  next()
})
