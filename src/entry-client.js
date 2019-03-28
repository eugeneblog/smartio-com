import { createApp } from './main'

const { app } = createApp()

// 使用工厂函数生成Vue实例，或者说应用程序，并且将其挂载到 DOM 中
app.$mount('#app')
