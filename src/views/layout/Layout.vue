<template>
    <div>
        <nav-bar :menuList="item"></nav-bar>
        <app-main></app-main>
    </div>
</template>

<script>
import { NavBar, AppMain } from './components'
export default {
  name: 'Layout',
  asyncData ({ store, route }) {
    // 触发action后, 会返回promise
    return store.dispatch('fetchList')
  },
  computed: {
    // 从 store 的 state 对象中获取 list
    item () {
      return this.$store.getters.getMenuList
    }
  },
  components: {
    NavBar,
    AppMain
  }
}
</script>

<style lang="scss" scoped>

</style>
