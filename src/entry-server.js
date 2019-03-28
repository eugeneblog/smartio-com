import { createApp } from './main'

// 服务器 entry 使用 default export 导出函数，并在每次渲染中重复调用此函数。
export default context => {
  return new Promise((resolve, reject) => {
    // 因为有可能会是异步路由钩子函数或组件，所以我们将返回一个 Promise，
    // 以便服务器能够等待所有的内容在渲染前，就已经准备就绪。
    const { app, router, store } = createApp()
    // 设置服务端router的位置
    router.push(context.url)
    // 等到 router 将可能的异步组件和钩子函数解析完
    // 添加一个会在第一次路由跳转完成时被调用的回调函数。此方法通常用于等待异步的导航钩子完成，比如在进行服务端渲染的时候
    router.onReady(() => {
      // 返回目标位置或是当前路由匹配的组件数组（是数组的定义/构造类，不是实例）。通常在服务端渲染的数据预加载时
      const matchedComponents = router.getMatchedComponents()
      // 匹配不到的路由， 执行 reject 函数，并返回404
      if (!matchedComponents.length) {
        return reject(new Error({code: 404}))
      }

      // 对所有匹配的路由组件调用 `asyncData()`
      Promise.all(matchedComponents.map(Component => {
        if (Component.asyncData) {
          return Component.asyncData({
            store,
            route: router.currentRoute
          })
        }
      })).then(() => {
        context.state = store.state
        resolve(app)
      }).catch(reject)
    }, reject)
  })
}
