<template>
    <div>
        <top-nav></top-nav>
        <menu-list></menu-list>
    </div>
</template>

<script>
import TopNav from './TopNav'
import MenuList from './MenuList'
export default {
  name: 'NavBar',
  components: {
    TopNav,
    MenuList
  }
}
</script>
