<template>
    <div class="header-box">
        <top-nav></top-nav>
        <menu-list :menu-list="menuList"></menu-list>
    </div>
</template>

<script>
import TopNav from './TopNav'
import MenuList from './MenuList'
export default {
  name: 'NavBar',
  props: {
    menuList: Array
  },
  components: {
    TopNav,
    MenuList
  }
}
</script>

<style lang="scss">
.header-box {
  float: left;
  height: 100% !important;
}
</style>
