<template>
    <div>
        <nav-bar></nav-bar>
        <app-main></app-main>
    </div>
</template>

<script>
import { NavBar, AppMain } from './components'
export default {
  name: 'Layout',
  components: {
    NavBar,
    AppMain
  }
}
</script>

<style lang="scss" scoped>

</style>
